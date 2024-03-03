const { User } = require('../model')
const fs = require("fs")
const { createToken } = require('../util/jwt')
const { promisify } = require('util')
const rename = promisify(fs.rename)


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

// 用户更新
exports.update = async (req, res) => {
    console.log('req', req.userinfo.userinfo)
    const dbBack = await User.findByIdAndUpdate(req.userinfo.userinfo._id, req.body, { new: true})
    console.log('dbBack', dbBack)
    res.status(200).json(dbBack)
}

exports.headimg = async (req, res) => {
    console.log(req.file)
    const { filename, originalname} = req.file
    const original = originalname.split('.')
    const type = original[original.length - 1 ]
    console.log('type', type)
    const dbBack = await rename('./public/' + filename, './public/' + filename + '.' + type)
    res.status(200).json(dbBack)
    // console.log('req', req.userinfo.userinfo)
    // const dbBack = await User.findByIdAndUpdate(req.userinfo.userinfo._id, req.body, { new: true})
    // console.log('dbBack', dbBack)
    // res.status(200).json(dbBack)
}