//导入m_user.js
const m_user = require('../models/m_user');



//渲染登录页函数
const showSignin = (req, res) => {
    res.render('signin.html');
    // res.send('c_user.js监听请求文件');
}
//审核登陆表单请求函数
const handleSignin = (req, res) => {
    // console.log('----')
    //获取表单数据
    const body = req.body;
    //调用models中的验证邮箱的方法，目的获得数据库操作的返回结果
    m_user.checkEmail(body.email, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            });
        }
        if (!data[0]) {
            return res.send({
                code: 1,
                message: '邮箱不存在'
            });
        }
        if (body.password != data[0].password) {
            return res.send({
                code: 2,
                message: '密码错误'
            });
        }
        //保存正确的用户信息
        req.session.user = data[0];
        res.send({
            code: 200,
            message: '可以跳转了'
        });
    });
    // //先验证邮箱
    // const sqlstr = 'SELECT *FROM `users` WHERE email=?';
    // connection.query(sqlstr, body.email, (err, data) => {
    //     if (err) {
    //         return res.send(err);
    //     }
    //     if (!data[0]) {
    //         return res.send('邮箱不存在')
    //     }
    //     if (body.password != data[0].password) {
    //         return res.send('密码不对');
    //     }
    //     res.redirect('/');
    // })
    // //再验证密码
    // //最后跳转话题列表页
}

//处理用户推出的请求
const handleSignout = (req, res) => {
    // 清除session
    delete req.session.user;
    // 跳转到登录页
    res.redirect('/signin');
}
exports.showSignin = showSignin;
exports.handleSignin = handleSignin;
exports.handleSignout = handleSignout;
