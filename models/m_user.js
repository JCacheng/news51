//控制器c_user.js 中的数据库操作部份
const db = require('../tools/db_config')
//验证邮箱
const checkEmail = function (email, callback) {
    const sqlstr = 'SELECT *FROM `users` WHERE email=?';
    db.query(sqlstr, email, (err, data) => {
        if (err) {
            return callback(err, null)
        }
        callback(null,data);
    })
};
exports.checkEmail = checkEmail;

