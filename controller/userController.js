const { User } = require('../model')

exports.list = async (req, res) => {
    console.log(req.method);
    res.send('/user-list by controller')
}
exports.register = async (req, res) => {
    console.log(req.method);
    let userModel =  new User(req.body)
    const dbBack = await userModel.save()
    res.status(200).json(dbBack)
}


exports.login = async (req, res) => {
    console.log(req.method);
    const dbBack =  await User.findOne(req.body)
    if(dbBack) {
        // res.status(200).send("登陆成功")
        res.status(200).send(dbBack)
    } else {
        res.status(400).json({msg: '未找到该用户信息', code: 0, success: false })
    }
}

exports.delete = async (req, res) => {
    console.log(req.method);
    res.send('/user-delete')
}