---
title: UI制作流程
---

## Cinder.UI Photoshop设置规则

### 层和组命名规则

> name=component

#### name 规则

> 层/组命名只能使用数字，字母和下划线(`_`)构成。

### 命名前缀

|前缀|格式|描述|
|:--|:--|:--|
|`*`|*name|指向通用图素|
|`$`|$name|该控件对外暴露，要绑定程序逻辑|
|`!`|!name|忽略该层（组），不对外导出|

### PS层隐藏规则

> 隐藏的层会设置为控件默认隐藏。

### 控件

|控件|描述|规则
|--:|:--|:--|
|image|图片|图片（层/组），无需明确指出image，作为普通图片控件导出。|
|rawimage|占位图片|图片（层/组），需明确指出=rawimage，图片不导出。|
|label|文本|文本（层/组），无需明确指出=label，作为文本控件导出。|
|textmesh|TextMesh文本|TextMesh文本（层/组），需明确指出=textmesh，作为TextMesh文本控件导出。|
|button|按钮|按钮（组），需要明确指出=button，并且按规则创建子层并命名。包含规则的子层有以下几种：<br>1. text：按钮上的文本<br>&nbsp;&nbsp;&nbsp;&nbsp;文本层，name=text<br>2. normal：按钮默认状态图（必须）<br>&nbsp;&nbsp;&nbsp;&nbsp;图片层，name=normal<br>3. highlight：按钮高亮状态图<br>&nbsp;&nbsp;&nbsp;&nbsp;图片层，name=highlight<br>4. pressed：按下状态图<br>5. disabled：不可用状态图<br><br>单图片按钮可以简化为图片层，并指出=button。|
|inputfield|文本输入框|文本输入框（组），需要明确指出=inputfield，并且按规则创建子层并命名。包含规则的子层有以下几种：<br>1. text：输入框的文本内容（必须）<br>&nbsp;&nbsp;&nbsp;&nbsp;文本层，name=text<br>2. placeholder：占位符文本<br>&nbsp;&nbsp;&nbsp;&nbsp;文本层，name=placeholder<br>3. normal：背景图|
|toggle|勾选/开关按钮|勾选按钮（组），需要明确指出=toggle，并且按规则创建子层并命名。包含规则的子层有以下几种：<br>1. text：按钮文本<br>&nbsp;&nbsp;&nbsp;&nbsp;文本层，name=text<br>2. normal: 按钮默认状态图<br>&nbsp;&nbsp;&nbsp;&nbsp;图片层，name=normal<br>3. checkmark：勾选图片（必须）<br>&nbsp;&nbsp;&nbsp;&nbsp;图片层，name=checkmark|
|togglegroup|单选/开关按钮组|单选/开关按钮组，需要明确指出=togglegroup，子层单选按钮必须是toggle，要求参考toggle|
|slider|进度条|进度条（组），需要明确指明=slider，并按规则创建子层并命名。包含规则的子层有以下几种：<br>1. fill：进度条（必须）<br>2. normal：进度条背景图（必须）<br>3. handle：可控制图片|
|scrollrect<br>scrollsystem|瀑布条|滚动视图（组），需要明确指出=scrollrect或者=scrollsystem，并按规则创建子层并命名。包含规则的子层有以下几种：<br>1. normal:滚动视图的背景图<br>2. scrollitem：单元组件（必须）|
|dropdown|下拉列表|下拉列表（组），需要明确指出=dropdown，并按规则创建子层并命名。包含规则的子层有以下几种：<br>1. normal:选择项的背景<br>2. arrow:响应弹出下拉菜单<br>3. text:选择项文字<br>4. template:下拉菜单背景图<br>5. option:可选项，可以是文本或者图片|
|hscrollbar<br>vscrollbar|水平滚动条<br>垂直滚动条|1. handle：滑块（必须）<br>2. normal：背景图（必须）|

### 参数

|参数|规则|例子|
|:--|:--|:--|
|九宫格|通过参数将边界坐标信息标明，name=component(l:?,t:?,r:?,b:?)<br>1. l:左边界<br>2. r：右边界<br>3. t：上边界<br>4. b：下边界|九宫信息为（20,100,200,300)<br>img1=image(l:20,t:100,r:200,b:300)|
|锚点|通过参数将锚点信息标明，name=component(anchor:??)<br>水平设置：<br>1. l:Left，水平居左<br>2. c:Center，水平居中<br>3. r:Right，水平居右<br>4. s:Scretch，水平拉伸<br>垂直设置：<br>1. t:Top，垂直靠顶<br>2. m:Middle，垂直居中<br>3. b:Bottom，垂直靠底<br>4. s:Scretch，垂直拉伸|按钮左上角对齐（Left，Top）<br>  bt1=button(anchor:lt)|
|轴|通过参数将轴信息标明，name=component(pivot:??)<br>水平设置：<br>1. l:Left，水平居左<br>2. c:Center，水平居中<br>3. r:Right，水平居右<br>垂直设置：<br>1. t:Top，垂直靠顶<br>2. m:Middle，垂直居中<br>3. b:Bottom，垂直靠底|图片轴位于中间底部（Center，Bottom）<br>img1=image(pivot:cb)|
