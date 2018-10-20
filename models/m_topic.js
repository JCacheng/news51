//模型文件
//实现查询话题列表页数据库数据
const db = require('../tools/db_config');
exports.findAllTopic = (callback) => {
    const sqlstr = 'select *from topics order by createdAt desc';
    db.query(sqlstr, (err, data) => {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    });
}

//实现插入文章数据到数据库中
exports.addTopic = (body, callback) => {
    const sqlstr = 'INSERT INTO `topics` SET ?';
    db.query(sqlstr, body, (err, data) => {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    });
}

//通过动态路由传来的topicID 查询数据库返回数据
exports.findTopicByID = (topicID, callback) => {
    const sqlstr = 'select *from topics where id = ?';
    db.query(sqlstr, topicID, (err, data) => {
        if (err) {
            return callback(err);
        }
        return callback(null, data);
    });
}