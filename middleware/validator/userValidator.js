const { body } = require('express-validator')
const errorBack = require('./errorBack')
const { User } = require('../../model/index')
module.exports.registerValidator = errorBack([
    body("username")
        .notEmpty().withMessage("用户名不能为空").bail()
        .isLength({ min: 5, max: 10 }).withMessage("用户名需用5-10位"),
    body('age').isNumeric(),
    body('email')
        .notEmpty().withMessage("邮箱不能为空").bail()
        .isEmail().withMessage("邮箱格式错误").bail()
        .custom(async val => {
            const emailValidate = await User.findOne({email: val})
            if(emailValidate) {
                return Promise.reject('邮箱已被注册')
            }
        }).bail(),
    body('phone')
        .notEmpty().withMessage("手机号不能为空").bail()
        .custom(async val => {
            const phoneValidate = await User.findOne({phone: val})
            if(phoneValidate) {
                return Promise.reject('手机号已被注册')
            }
        }).bail()
])


module.exports.loginValidator = errorBack([
    body('email')
        .notEmpty().withMessage("邮箱不能为空").bail()
        .isEmail().withMessage("邮箱格式错误").bail(),
    body('password').notEmpty().withMessage("密码不能为空"),
])

