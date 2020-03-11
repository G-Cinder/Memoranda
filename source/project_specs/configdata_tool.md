
# Proto打表工具使用说明

## 提要

打表工具解析**Excel文件**或**Proto定义文件**转化为游戏运行中需要的**定义文件**或**数据文件**。

> 定义文件包括：.proto后缀文件、.cs、.go等各语言文件以及予lua加载proto定义的game.pc文件
> 数据文件包括：解析excel生成的.bytes文件和lua table文件

*Cinder、Cinder_Server和Cinder_ConfigData三个项目需要放在同级目录。*


## 使用

### 工具分类

工具共有三个可执行脚本，**ToDataTables**、**ToDProto**以及**CopyAllDataTablesToGamePath**，这三个脚本又分别有.bat与.sh两个版本给予Windows和Mac各自使用。

这三个脚本各自功能如下：
1. **ToDataTables**解析Excel文件，生成.proto定义文件、.cs等语言文件、.bytes文件以及luatable文件，到同级的ConfigGenerated文件夹。通常策划修改Excel之后就需要运行该脚本。
2. **ToDProto**解析Proto文件，生成.cs等语言文件和game.pc文件，到同级的ConfigGenerated文件夹。通常由程序修改proto文件后运行该脚本。
3. **CopyAllDataTablesToGamePath**将ConfigGenerated文件夹内所有文件拷贝到项目中，各自对应关系定义在Config.ini.txt内。


### 使用与提交

1. 根据需要运行**ToDataTables（解析excel）**，或者**ToDProto（解析proto）**。
2. 运行**CopyAllDataTablesToGamePath**将生成的文件拷贝到项目内。
3. 上传与项目外链的**ConfigGenerated文件夹**。

> 将**CopyAllDataTablesToGamePath**的拷贝功能从两个生成脚本中挪将出来，可以让打表在修改配置的时候具有更高的灵活度。

## 配置

### 概述

**Config.ini.txt**下共有三个配置：
1. **CustomExcelPack**： 选择打哪些表，一般项目成员多修改该配置缩短打表时间。
2. **IncludeClientNativeData**：客户端限制保留，限制生成.cs文件缩短编译耗时，由客户端修改。
3. **GamePath**：子文件夹对应项目实际目录，在项目初始时配置，中后期一般不需要改动。

### 范例
- **CustomExcelPack**， 该段配置默认如下:

```
[CustomExcelPack]
all
```
这表示解析打表所有excel文件。多数时候你可能只是修改一个excel（比如它叫做Skill_Config.xlsx），那么你可以这样修改配置只打一张表：

```
[CustomExcelPack]
Skill_Config
```
配置不需要填写文件后缀。这样的修改可以缩短打表时间。

- **IncludeClientNativeData**，该段配在丛林大冒险项目置默认如下:

```
[IncludeClientNativeData]
AI_Config
Chapter_Config
Job_Config
NPC_Config
Pet_Config
Skill_Config
QuickBattle_Config
```

这表示只有这几个excel的数据是C#需要的，其他的就不要生成C#的文件，降低客户端编译耗时。

- **GamePath**，这段配置一般在项目初始时设置，请按各自项目实际情况修改。

```
[GamePath]
c_bytes=..\..\Cinder\Assets\Daisy\RawResources\Datas
c_luatable=..\..\Cinder\Assets\Daisy\RawResources\Lua\Datas\Tables
c_cs=..\..\Cinder\Assets\Daisy\Scripts\DataTables
c_proto=..\..\Cinder\Assets\Daisy\Scripts\ProtoDef
c_ScriptAssets=..\..\Cinder\Assets\Daisy\RawResources\ScriptAssets

s_src_DataTables=..\..\Cinder_Server\src\Daisy\DataTables
s_src_DProto=..\..\Cinder_Server\src\Daisy\DProto
s_res_Proto=..\..\Cinder_Server\res\Daisy\Proto
s_res_DataTables=..\..\Cinder_Server\res\Daisy\DataTables
```
