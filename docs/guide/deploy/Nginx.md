# Nginx

> 由于Nginx用docker部署问题太多，使用原生Nginx部署

1、安装依赖

```sh
yum install gcc zlib-devel  pcre pcre-devel openssl openssl-devel -y 
```

2、编译安装

创建目录并进入

```sh
cd /root
mkdir my-install
cd my-install
```

下载和解压

```sh
wget http://nginx.org/download/nginx-1.22.0.tar.gz
tar -zvxf nginx-1.22.0.tar.gz
```

进入解压后的目录编译安装

```sh
cd nginx-1.22.0

./configure
make
make install
```

增加https模块

```bash
./configure --prefix=/usr/local/nginx --conf-path=/usr/local/nginx/conf/nginx.conf --pid-path=/usr/local/nginx/conf/nginx.pid --lock-path=/usr/local/nginx/lock/nginx.lock --with-http_ssl_module
```

3、启动

```sh
cd /usr/local/nginx/conf #编辑配置文件
vim nginx.conf

/usr/local/nginx/sbin/nginx #启动
```



其他Nginx相关可以查看[Nginx学习笔记](../study/back/Nginx学习笔记.md)