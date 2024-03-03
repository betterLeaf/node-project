const express = require("express")
const fs = require("fs")
const { promisify }= require("util")
const app = express()
const readFile = promisify(fs.readFile)

app.use(express.urlencoded())
app.use(express.json())

app.get('/', async (req, res) => {
    // fs.readFile('./db.json', 'utf-8', (err, data) => {
    //     if(!err) {
    //         res.send(data)
    //     }
    // })
    try {
        const data = await readFile('./db.json', 'utf-8')
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
app.get('/hello', (req, res) => {
    res.send('Hello World! hhhhhh')
})
 
app.post('/login', (req, res) => {
    console.log(req.headers)
    console.log(req.body)
    res.send('pose enter')
})


app.listen(3000, () => {
    console.log('http://localhost:' + 3000)
})