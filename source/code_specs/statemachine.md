---
title: Lua分层状态机及UI框架（StateUI）
---

## 概述

**StateUI (Lua)**是以`StateMachine`为基础，建立分层状态机以及`State`和`UI Window`的交互规则，在框架层内建`State`切换时对应`State`内`Window`的`Open`/`Close`规则。

```txt
StateDriver
    |
    |-- Initialize       <==> InitWindow
    |
    |-- Login            <==> LoginWindow
    |
    |-- SelectRole       <==> SelectRoleWindow CreateRoleWindow
    |
    |-- Gaming
    |     |
          |-- Camp       <==> BottomBar
          |
          |-- Role       <==> BottomBar, TopBar, ...
          |    |
          |    |-- ...
          |
          |-- Fight      <==> BottomBar, TopBar, ChatBar, ...
          |    |
          |    |-- ...
          |
          |-- Pet        <==> BottomBar, ...
          |
          |-- ...
```

## 开发规范

**StateUI**试图建立一种开发规范，明确规定State与Window的访问权限。哪些代码应该在State中实现，哪些又需要在Window中实现。

* Window内应该仅处理本Window的UI控件，不能直接操纵其他Window和场景
* Window仅能向所属的State发送Event
* Window仅能读取（Get）所属State的指定数据
* Window仅能关闭自己
* State可以Open/Close目标Window
* State可以发送Message给所有Visible的Window
* State可以向父State发送Event

**StateUI**的默认规则是：

> 进入State后，之前的所有Window都会被默认Close。

## 快速开始

* 实现`IWindowProvider`（详情参看`IWindowProvider`节）
  
```lua
GameWindowProvider = class("GameWindowProvider", IWindowProvider)
```

* 启动`StateDriver`（详情参看`StateDriver`节）
  
```lua
local driver = StateDriver.new(GameWindowProvider.new())
```

* 启动目标State，例如Initialize

```lua
Initialize = class("Initialize", State)
```

```lua
driver:ChangeState(Initialize.new())
```

## StateDriver

`StateDriver`是**StateUI**的驱动器，是整个模块的入口。**StateUI**本身并不直接处理Window的行为，而是依靠外部注入`IWindowProvider`的实体对象来间接应用**StateUI**的逻辑。

```lua
-- 帧更新入口，需要确保刷新调用
self:Update(deltaTime)

-- 销毁
self:Destroy()
```

### IWindowProvider

应用层需要实现`IWindowProvider`接口，然后注入到`StateDriver`中。从而**StateUI**可以真正使用规则影响目标`Window`。

```lua
-- Provider 初始化。
function M:OnInit() end

-- Provider 销毁。
function M:OnDestroy() end

-- 创建目标窗口并返回真实Window的对象。
function M:Create(name) end

-- 销毁目标窗口。
function M:Destroy(name) end

-- 显示窗口。StateUI会确保目标窗口已经被创建。
function M:Show(name) end

-- 隐藏目标窗口。
function M:Hide(name) end

-- 打开目标窗口，并传入IWindow对象。
function M:Open(name, iwindow, ...) end

-- 关闭目标窗口，并传入IWindow对象。
function M:Close(name, iwindow) end
```

## State

**State**只需操作关心的`Window`的`Open`和`Close`即可，不关心的`Window`会被框架层自动`Close`。

### State 扩展

```lua
local M = class("MyState", State)

function M:OnEnter(ctx)
end

function M:OnExit()
end

function M:OnUpdate(deltaTime)
end
```

### State 切换

使用`ChangeState(state, ctx)`切换状态，并将传入的`state`作为返回值返回。其中`ctx`为可以携带的上下文参数，可以不填。

#### 进入/切换当前State

```lua
self:GetParent():ChangeState(state)
```

#### 退出当前State

```lua
self:GetParent():ChangeState(nil)
```

#### 进入/切换子State

```lua
self:ChangeState(state)
```

#### 退出子State

```lua
self:ChangeState(nil)
```

#### State向上抛出Event

使用`self:Upcast(event, ...)`向父级`State`抛出`Event`。

```lua
self:Upcast("Navigate", 1)
```

##### 父级State处理下层State抛出的Event

实现`OnNotify`加上`Event名称`组成的函数。

```lua
function M:OnNotifyNavigate(index)
end
```

## Window

在**StateUI**中，`Window`分为两种：`普通Window`和`固定Window`。

|类型|行为|
|--:|:--|
|普通Window|Window的状态在进入子State后会默认关闭。也就是，如果父State打开普通Window并保持打开状态，那么进入子State后，该Window会被自动关闭。|
|固定Window|Window的状态在进入子State后会被保留。也就是，如果父State打开固定Window并保持打开状态，那么进入子State后，该Window还是会保持打开状态。|

在**StateUI**中，`Window`的打开方式有两种：`普通Open`和`排队Open`。

|类型|行为|
|--:|:--|
|普通Open|目标Window被直接打开。|
|排队Open|目标Window进入打开的排队系统，若处于第一位，则直接打开，否则在队列中等待，直到排在前面的Window被关闭。|

### State可操作Window的接口

```lua
-- 预加载目标窗口
self:PreloadWindow(window)

-- 打开目标窗口
self:OpenWindow(window, ...)

-- 打开固定窗口
self:OpenFixedWindow(window, ...)

-- 使用排队系统打开目标窗口
self:OpenWindowQueued(window, ...)

-- 使用排队系统打开固定窗口
self:OpenFixedWindowQueued(window, ...)

-- 关闭目标窗口
self:CloseWindow(window, ...)

-- 情况窗口排队系统
self:ClearQueuedWindows()

-- 查询目标Window是否处于打开状态
self:IsWindowOpened(window)

-- 激活Window域，State退出后，归属该State的所有Window会被销毁。
self:EnableDomain()
```

### 向Window发送Message

通过`self:SendWindowMessage(messge, ...)`向所有有效（`显示中`）的`Window`发送消息。

```lua
self:SendWindowMessage("Progress", 0.1)
```

#### UICtrl接收State发送的Message

实现`OnState`加上`Message名称`组成的函数。

```lua
function M:OnStateProgress(progress)
end
```

## UICtrl

**UICtrl**应只关心自己Window内的逻辑，只能发送`Event`和读取（`Get`）目标属性。

### 初始化/清理

`Window`被**Open**（`创建`/`显示`）的时候，会调用**UICtrl**的`OnOpen`方法；反之，被**Close**（`隐藏`/`销毁`）的时候会调用**UICtrl**的`OnClose`方法。`Window`被重新创建的时候会调用`OnCreate`方法；而销毁时会调用`OnDestroy`方法。

> 注意：由于Open可能只是显示目标Window，其背后的资源并未被释放，因此一些消息绑定操作请确保在OnClose中解绑，防止消息触发重入。

```lua
function M:OnCreate()
end

function M:OnDestroy()
end

function M:OnOpen(data)
end

function M:OnClose()
end
```

### Close自己

**UICtrl**可以直接关闭自己所属的`Window`。

```lua
self:CloseSelf()
```

### 发送Event

通过`self:Notify(event, ...)`发送`Event`。

```lua
self:Notify("Print", "Hello")
```

#### State处理Event

实现`OnNotify`加上`Event名称`组成的函数。

```lua
function M:OnNotifyPrint(obj)
end
```

### Get属性

**UICtrl**可以通过`self:Get(name, ...)`获取`State`层暴露的数据。

```lua
local name = self:Get("ID", ...)
```

#### State处理属性读取

实现`OnGet`加上属性名称组成的函数。

```lua
function M:OnGetID()
    return 1
end
```
