//话题列表页
const m_topic = require('../models/m_topic');
const moment = require('moment');

exports.showTopic = (req, res) => {
    m_topic.findAllTopic((err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: "服务器错啦"
            });
        }
        res.render('index.html', {
            topics: data,
            user: req.session.user
        });
    });

};
//发布新话题
exports.createTopic = (req, res) => {
    res.render('topic/create.html');
};
//处理新发布话题的表单
exports.handleCreateTopic = (req, res) => {
    //获取表单数据
    const body = req.body;
    //添加时间
    body.createdAt = moment().format();
    // 给每个话题添加userID,区分当前话题是由谁创建的
    body.userid = req.session.user.id;

    //添加body到数据库中
    m_topic.addTopic(body, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错啦'
            });
        }
        res.send({
            code: 200,
            message: '添加新话题成功'
        })
    })
};
//渲染话题详情页
exports.showDetail = (req, res) => {
    const topicID = req.params.topicID;
    //模型查询数据库
    m_topic.findTopicByID(topicID, (err, data) => {
        if(err) {
            return res.send({
                code: 500,
                message: '服务器错啦'
            });
        }
        res.render('topic/show.html', {
            topic: data[0]
        });
    });
    
}