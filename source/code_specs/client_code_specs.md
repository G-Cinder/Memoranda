---
title: 客户端代码规范
---

本文详细规范了客户端的代码规范。

## 缩进

采用统一的缩进规则。

## CSharp

## Lua

### 文件名

采用`大驼峰`命名规则，例如 “MyFile.lua”。

### 类命名

虽然**Cinder**的**Lua**类名只是一个字符串，但也需要符合命名规范。采用`大驼峰`命名规则，名词属性。

```lua
local M = class("MyClass")

return M
```

### 函数命名

采用`大驼峰`命名规则，动词属性。

```lua
function M:DoSomething()

end
```

#### 私有函数

私有函数需要额外以“_”开头。

```lua
function M:_DoPrivateThing()

end
```

### 成员变量

> NOTE: 除了框架结构上的需求，其余情况下不允许直接访问成员变量。

成员变量以“_”开头，采用`小驼峰`命名规则。

```lua
function M:ctor()
    self._name = ""
end
```

### 临时变量，参数

采用`小驼峰`命名规则。

```lua
function M:DoSomething(x, y)
    local theResult = x + y;
end
```

### 类

使用**Cinder**提供的**class**关键字。

```lua
local M = class("MyClass")

return M
```

### 接口

使用**Cinder**提供的**interface**关键字。

```lua
local M = interface("MyInterface")

return M
```

### 类实现接口

> NOTE: 使用**Cinder**提供的**include**关键字来加载其他文件。

```lua
local MyInterface = include("MyInterface")

local M = class("MyClass").implement(MyInterface)

return M
```

