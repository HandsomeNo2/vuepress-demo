# docker

## 安装docker

```bash
# 按顺序执行
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
                  
sudo yum install -y yum-utils

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo systemctl start docker

sudo docker run hello-world

# 设置开机自启动docker
systemctl enable docker
```

```bash
# 安装docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
```



## docker 拉取镜像慢的问题

```bash
# 解决办法很简单：修改mirror，换成国内mirror。以阿里云为例：
# 1.ubuntu
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://yxzrazem.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
# 2.centos
sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://yxzrazem.mirror.aliyuncs.com"]
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 常用命令

除过以上我们使用的Docker命令外，Docker还有一些其它常用的命令

拉取docker镜像

```bash
docker pull image_name
```

查看宿主机上的镜像，Docker镜像保存在/var/lib/docker目录下:

```bash
docker images
```

删除镜像

```bash
docker rmi docker.io/tomcat:7.0.77-jre7 或者 docker rmi b39c68b7af30
```

查看当前有哪些容器正在运行

```bash
docker ps
```

查看所有容器

```bash
docker ps -a
```

启动、停止、重启容器命令：

```bash
docker start container_name/container_id docker stop container_name/container_id docker restart container_name/container_id
```

后台启动一个容器后，如果想进入到这个容器，可以使用attach命令：

```bash
docker attach container_name/container_id
```

删除容器的命令：

```bash
docker rm container_name/container_id
```

删除所有停止的容器：

```bash
docker rm $(docker ps -a -q)
```

查看当前系统Docker信息

```bash
docker info
```

从Docker hub上下载某个镜像:

```bash
docker pull centos:latest docker pull centos:latest
```

查找Docker Hub上的nginx镜像

```bash
docker search nginx
```

执行docker pull centos会将Centos这个仓库下面的所有镜像下载到本地repository。
