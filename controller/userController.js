const { User } = require('../model')
const { createToken } = require('../util/jwt')




// 用户注册
exports.register = async (req, res) => {
    let userModel = new User(req.body)
    const dbBack = await userModel.save()
    res.status(200).json(dbBack)
}

// 用户登陆
exports.login = async (req, res) => {
    let dbBack = await User.findOne(req.body)
    if (dbBack) {
        // res.status(200).send("登陆成功")
        console.log(createToken(dbBack))
        dbBack = dbBack.toJSON()
        dbBack.token = await createToken(dbBack)
        res.status(200).send(dbBack)
    } else {
        res.status(400).json({ msg: '未找到该用户信息', code: 0, success: false })
    }
}


// 用户列表
exports.list = async (req, res) => {
    // res.send('/user-list by controller')
    res.status(200).json(req.userinfo)
}

// 用户删除
exports.delete = async (req, res) => {
    res.send('/user-delete')
}