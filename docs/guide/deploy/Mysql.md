# Mysql

## docker-compose部署

```bash
# 创建挂载目录
mkdir -p /data/mysql/data
mkdir -p /data/mysql/conf
```

```yaml
# 创建yml文件
vim /data/mysql/docker-compose.yml

# 填入配置
version: '3'
services:
  mysql:
    image: mysql:5.7 #mysql版本
    container_name: mysql
    volumes:
      - /data/mysql/data:/var/lib/mysql
      - /data/mysql/conf/my.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf
    restart: always
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: 123456 #root用户密码
      TZ: Asia/Shanghai
    command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

```ini
# 创建配置文件
vim /data/mysql/conf/my.cnf

# 填入配置
[mysqld]
default-storage-engine=INNODB  # 创建新表时将使用的默认存储引擎
character-set-server=utf8mb4      # 设置mysql服务端默认字符集
pid-file        = /var/run/mysqld/mysqld.pid  # pid文件所在目录
socket          = /var/run/mysqld/mysqld.sock # 用于本地连接的socket套接字
datadir         = /var/lib/mysql              # 数据文件存放的目录
symbolic-links=0
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION # 定义mysql应该支持的sql语法，数据校验等!

# 允许最大连接数
max_connections=200

# 同一局域网内注意要唯一
server-id=3306
# 开启二进制日志功能 & 日志位置存放位置`/var/lib/mysql`
#log-bin=mysql-bin
log-bin=/var/lib/mysql/mysql-bin
# binlog格式
# 1. STATEMENT：基于SQL语句的模式，binlog 数据量小，但是某些语句和函数在复制过程可能导致数据不一致甚至出错；
# 2. MIXED：混合模式，根据语句来选用是 STATEMENT 还是 ROW 模式；
# 3. ROW：基于行的模式，记录的是行的完整变化。安全，但 binlog 会比其他两种模式大很多；
binlog_format=ROW
# FULL：binlog记录每一行的完整变更 MINIMAL：只记录影响后的行
binlog_row_image=FULL
# 日志文件大小
max_binlog_size=100M
# 定义清除过期日志的时间(这里设置为7天)
expire_logs_days=7

# ================= ↑↑↑ mysql主从同步配置end ↑↑↑ =================

[mysql]
default-character-set=utf8mb4

[client]
default-character-set=utf8mb4  # 设置mysql客户端默认字符集
```

```bash
# 到对应目录下启动容器
cd /data/mysql
docker-compose up -d
```



## docker部署

```bash
docker volume create mysql-data  #创建mysql数据卷

docker run -d --name=mysql-server -p 3306:3306 -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=MYSQL密码 mysql:8.0  #直接启动

docker volume mysql-data-5.6
docker run -d --name=mysql-5.6 -p 3307:3306 -v mysql-data-5.6:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=xzj@mysql mysql:5.6
```



## 常用命令

```bash
# 登录MySQL
mysql -uroot -p 

# 启动MySQL容器
docker start mysql-server

# 重启正在运行的 MySQL 容器
docker restart mysql-server 

# 此命令将暂时停止运行的 MySQL 容器（并且可以稍后恢复/重新启动）
docker stop mysql-server
```

