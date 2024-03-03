const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const router = require('./router')

app
.use(express.json())
.use(express.urlencoded())
.use(cors())
.use(morgan('dev'))
.use('/api/v1', router)


app.listen(3000, () => {
    console.log('http://localhost:' + 3000)
})