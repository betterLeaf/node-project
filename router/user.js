const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const { verifyToken} = require('../util/jwt')

const multer  = require('multer')
const upload = multer({ dest: 'public/' })



router
    .get('/list',       verifyToken, userController.list)
    .post('/register',  validator.registerValidator, userController.register)
    .post('/login',     validator.loginValidator, userController.login)
    .post('/headimg',    verifyToken, upload.single('headimg'),  userController.headimg)
    .put('/',           verifyToken,  validator.updateValidator, userController.update)
    .delete('/',        userController.delete)

module.exports = router