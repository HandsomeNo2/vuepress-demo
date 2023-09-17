# JAVA

1、首先执行以下命令查看可安装的jdk版本：

```bash
yum -y list java*
```

2、选择你要的版本

```bash
yum install -y java-1.8.0-openjdk-devel.x86_64

java -version #查看版本
```

3、启动项目

```
nohup java -jar app.jar >message.log &
```

