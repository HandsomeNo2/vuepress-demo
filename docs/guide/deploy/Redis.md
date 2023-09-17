# Redis

## docker-compose部署

```bash
# 创建挂载目录
mkdir -p /data/redis
```

```yaml
# 创建yml文件
vim /data/redis/docker-compose.yml

# 填入配置
version: '3'
services:
  redis:
    image: redis:6.2.6
    container_name: redis
    restart: always
    ports:
      - 6379:6379
    volumes:
      - /data/redis/redis.conf:/etc/redis/redis.conf
      - /data/redis/data:/data
      - /data/redis/logs:/logs
    command: ["redis-server","/etc/redis/redis.conf"]
```

```shell
# 创建配置文件
vim /data/redis/redis.conf

# 填入配置
protected-mode no
port 6379
timeout 0
#rdb配置
save 900 1
save 300 10
save 60 10000
rdbcompression yes
dbfilename dump.rdb
dir /data
appendonly yes
appendfsync everysec
#设置你的redis密码
requirepass 123456
```

```bash
# 到对应目录下启动容器
cd /data/redis
docker-compose up -d
# 如果需要强制重新构建
docker-compose up --force-recreate -d
```



## docker部署

```bash
# 直接启动
docker run --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6379:6379 --name myredis -v /home/redis/myredis/myredis.conf:/etc/redis/redis.conf -v /home/redis/myredis/data:/data -d redis redis-server /etc/redis/redis.conf  --appendonly yes  --requirepass 你的reids密码  
```

