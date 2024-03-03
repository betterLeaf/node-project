const express = require("express")
const fs = require("fs")
const { promisify }= require("util")
const app = express()
const readFile = promisify(fs.readFile)



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
    // res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World! hhhhhh')
})


app.listen(3000, () => {
    console.log('http://localhost:' + 3000)
})