const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')

router
    .get('/list', userController.list)
    .post('/register', validator.registerValidator, userController.register)
    .post('/login', validator.loginValidator, userController.login)
    .delete('/', userController.delete)

module.exports = router