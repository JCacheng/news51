//入口文件
//导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
//创建app对象
const app = express();
//配置包 模板引擎
app.engine('html', require('express-art-template'));
//处理静态资源
app.use('/public',express.static('./public'));
app.use('/node_modules', express.static('./node_modules'))
app.use(bodyParser.urlencoded({
    extended: false
}))
//reg添加
//使用路由
app.use(router);

//绑定端口
app.listen(12345, ()=>{
    console.log('服务器开启');
});