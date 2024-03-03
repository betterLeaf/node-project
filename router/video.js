const express = require("express")
const router = express.Router()

router.get('/list', (req, res) => {
    res.send('/list')
})

router.get('/detail', (req, res) => {
    res.send('/detail')
})

module.exports = router