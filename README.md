安装redis
进入文件夹之后执行命令：make（编译）
编译完了执行：sudo make install

brew 安装redis
brew install redis

启动redis
redis-server
redis-cli
set a 123
get a
keys *
requirepass 123456
auth 123456
setex过期时间：setex c 10（秒） 1

set session:sessionId 123
get session:sessionId
del session:sessionId

ioredis

"style": "css"// style:true会加载less

还需要全局加载css