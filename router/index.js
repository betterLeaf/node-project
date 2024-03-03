const express = require("express")
const router = express.Router()
router.use('/user', require('./user'))
router.use('/video', require('./video'))

router.use((req, res, next) => {
    res.send("404 Not Found")
    next()
})
module.exports = router
