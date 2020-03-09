# 服务器搭建文档 

## 一、svn拉去服务器代码。

### 1、svn地址：

	svn://192.168.150.63/Daisy/Cinder_Server/trunk/Cinder_Server
	svn://192.168.150.63/Daisy/Cinder_ConfigData/trunk/Cinder_ConfigData
	svn://192.168.150.63/Daisy/Cinder/trunk/Cinder

### 2、svn账号：名字全拼拼音。密码：123456	(账号没有或者不对，找对应负责人)

## 二、解压serverconfig.rar文件。

![1.png](https://i.loli.net/2020/03/09/o87mg3u6rRsfDeM.png)

### 1、环境变量配置

    我的电脑 右击 选择属性	
![环境变量.png](https://i.loli.net/2020/03/09/PngEfr823Vm4yMd.png)

### 2、GOPATH 配置

	把对应的服务器代码所在目录 例如:D:\work\Aries\Cinder_Server 写入系统变量中。
	我的电脑 右击 选择属性	
![gopath.png](https://i.loli.net/2020/03/09/D86HXtverVyKRzl.png)

### 3、bat指令修改。

	该目录中有两个文件database.bat和startnsq.bat
	database.bat用于启动游戏数据库相关
	startnsq.bat用于启动游戏nsq相关
	进入serverconfig\bat文件目录,编辑database.bat文件
![bat.png](https://i.loli.net/2020/03/09/cXzak4txPOulWL5.png)

## 三、个人服务器配置

### 1、个人服务器列表配置

	打开客户端服务器列表文件并添加自己的服务器
![服务器列表.png](https://i.loli.net/2020/03/09/ibtAIE7JHzmsfwW.png)
![服务器列表文件.png](https://i.loli.net/2020/03/09/TN1WiGnlEfeZqAH.png)
	
### 2、打开服务器的信息配置

	C:\work\Cinder\Cinder_Server\bin目录中的server.json
![服务器json配置.png](https://i.loli.net/2020/03/09/hQ3Ta8kJ4zjxoAN.png)

## 四、启动服务器

![服务器启动脚本.png](https://i.loli.net/2020/03/09/8Y4PCrSoxIF7myq.png)
	
	1、服务器所需的数据库以及nsq启动。直接双击serverconfig\bat目录中database.bat和startnsq.bat。
	2、直接双击服务器原生提供的bat指令