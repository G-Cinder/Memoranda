# 服务器搭建文档

## 一、注意事项
执行以下步骤前请先把之前在本机安装过的redis、mongodb、etcd、nsq卸载或禁止运行。	

## 二、git拉取服务器代码

### 1、git账号：
名字全拼拼音。密码：123456 (账号没有或者密码不对，找王晓军)。

### 2、git地址：
```
http://gitlab.ztgame.com/Chaos/Daisy.git
```

### 3、本地路径注意事项
注意不要包含中文路径

## 三、安装服务器依赖环境

### 1、本机开启Intel虚拟化技术
1. 按键盘Ctrl+Alt+Del，打开任务管理器 - 性能选项卡，检查虚拟化技术是否已启用，如果已启用则跳过下面第2步：
![](server_res\5.png)
2. 重启电脑，疯狂按键盘Del键，进入电脑bios界面，一般在Cpu设置下会有一个Intel虚拟化技术开关，洋文Intel VT（Virtualization Technology），开启该选项后保存设置退出即可。
![](server_res\6.jpg)

### 2、获取服务器依赖软件
访问共享目录，拷贝以下目录下所有安装文件至本地，用户名：res，密码：res
```
\\192.168.150.89\resources\服务器依赖\
```

### 3、安装Go语言环境
执行go1.14.windows-amd64.msi，一路点击下一步（Next）直到安装完毕。

### 4、安装Hyper-v
1. 打开 控制面板 - 程序
![](server_res\7.png)
2. 点击 启用/关闭Windows功能
![](server_res\8.png)
3. 勾选Hyper-V选项 - 确定 
![](server_res\9.png)
4. 重新启动电脑

### 5、安装Docker
1. 执行Docker Desktop Installer.exe，一路点击下一步（Next）直到安装完毕。
2. 安装完成后在桌面右下角托盘处，会出现一个小鲸鱼图标：
![](server_res\1.png)
右击该图标，点击Setting：
![](server_res\2.png)
弹出以下界面，点击Docker Engine按钮，将以下内容拷入编辑框，点击Apply&Restart按钮：
```
{
  "registry-mirrors": [
    "http://hub-mirror.c.163.com"
  ],
  "insecure-registries": [],
  "debug": true,
  "experimental": false
}
```
![](server_res\3.png)
3. 等待docker重启完毕，桌面右下角会弹出提示：
![](server_res\4.png)

## 四、修改配置

### 1、修改服务器配置
1. 进入服务器Cinder_Server\bin目录，打开server.json：
![](server_res\11.png)

2. 修改此处IP地址为本机ip：
![](server_res\10.png)

### 2、修改客户端配置（可选）
一般情况下本机测试，只需要在客户端登录时选择 - 本地服务器 即可，如果需要连接别人服务器，那么按如下步骤修改客户端配置：
1. 进入客户端Cinder\Assets\Daisy\RawResources\Lua\Datas\Configs目录，打开CommonConfig.lua：
![](server_res\12.png)
2. 修改需要连接的对方服务器IP地址，或者拷贝一行新增一条，注意符号“[]”内部的ID必须是连续的：
![](server_res\13.png)

## 五、启动服务器

### 1、服务器脚本路径
所有的服务器脚本均在以下两个目录：
```
Cinder_Server\src\Daisy
Cinder_Server\
```
脚本功能如下：

| 脚本名 | 功能 |
| --------- | ----- |
| build.bat | 服务器编译脚本 |
| build_debug.bat | 服务器编译脚本（debug版） |
| docker_install.bat | docker服务安装脚本 |
| docker_start.bat | docker服务启动脚本 |
| docker_stop.bat | docker服务停止脚本 |
| docker_uninstall.bat | docker服务卸载脚本 |
| start.bat | 服务器启动脚本 |
| stop.bat | 服务器停止脚本 |

### 2、安装服务器plugin
1. 进入以下目录
```
Cinder_Server\Server\src\Cinder\plugin\navmesh
```
执行脚本install.bat
2. 进入以下目录
```
Cinder_Server\Server\src\Cinder\plugin\physxgo
```
执行脚本install_debug.bat

### 2、启动服务器
1. 首次启动服务器前，必须先执行docker_install.bat安装docker服务，之后就无需安装了。
2. 点击脚本start.bat就可以启动服务器了，目前脚本会启动Login、Agent、Game、Battle、DBAgent、Center共6个进程，启动后检查进程数量是否正确，并且在终端是否打印“i'm alive”。
![](server_res\14.png)

### 3、停止服务器
点击脚本stop.bat就可以停止服务器了。

### 3、其他注意事项
1. 服务器宕机后，终端不会挂掉，发现宕机问题时从终端拷贝信息发送给服务器开发人员定位。
2. dock服务安装后会占用一定系统资源，如果不想资源被占用，那么可以点击docker_stop.bat停止docker服务，以后启动服务器前先点击docker_start.bat启动docker服务即可。
