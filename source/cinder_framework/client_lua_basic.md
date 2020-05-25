---
title: Lua 基础
---

# Lua 基础

本文不是描述Lua语言的基础，而是详述基于Cinder客户端通用框架下所依赖的一些基础的Lua概念，从而确保框架可以正常工作。Cinder客户端框架提供了一系列模拟面向对象的快捷函数，方便使用者在Lua层以类似面向对象的方式工作。

## 代码风格 (Coding Style)

由于Lua语言是一种灵活的脚本语言，不具备强类型检查，因此一种好的，统一的代码风格可以增强易读性，易于维护。

## interface

`interface`用来定义接口。`interface`仅仅是对外暴露功能的定义，并不能实例化。

```lua
-- 定义I接口，对外暴露Foo方法。

local I = interface("Interface name")

function I:Foo() end

return I
```

## class

`class`允许**单继承**和**实现多个interface**。

## 定义class

```lua
-- 定义基类Base和派生类M
local Base = class("Base class name")

local Base:Foo()
end

local M = class("Class name", Base)

function M:Foo2()
end

return M
```

## 实现接口

```lua
local IA = interface("IA")

function IA:TestA() end

local IB = interface("IB")

function IB:TestB() end

local M = class("M").implement(IA, IB)

function M:TestA()
end

function M:TestB()
end
```

## extend

## delegate/delegator

## callit

`callit`是框架提供的实现链式调用的可扩展对象。方便将一个函数调用接入一个链式调用序列中。

```lua
local M = class("Example")

function M:Foo()
    local c = callit("OnCompleted")
    
    return c
end
```
