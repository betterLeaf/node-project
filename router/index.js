const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('/index')
})

router.get('/user', (req, res) => {
    res.send('/user')
})

module.exports = router