const express = require("express")
const app = express()
const router = require('./router')
const routerVideo = require('./router/video')
app.use(router)
app.use('/video', routerVideo)
app.use((req, res, next) => {
    res.status(400).send("404 Not Found")
})
app.listen(3000, () => {
    console.log('http://localhost:' + 3000)
})