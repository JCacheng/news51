//路由模块
//监听请求
//导包
//express.Router()获取对象router
//router.get
const express = require('express');
//导入控制器文件
const c_user = require('./controllers/c_user')
const c_topic = require('./controllers/c_topic')
const router = express.Router();

router.get('/signin', c_user.showSignin)              //监听渲染登录页
      .post('/signin', c_user.handleSignin)           //监听登陆的表单请求
      .get('/', c_topic.showTopic)                    //渲染话题页
      .get('/topic/create', c_topic.createTopic)      //发布新话题文章
      .post('/createTopic', c_topic.handleCreateTopic)//创建话题请求
      .get('/signout', c_user.handleSignout)          //处理退出请求
      .get('/topic/:topicID', c_topic.showDetail)            //动态路由处理话题列表进入详情页

module.exports = router;