const express = require("express")
const fs = require("fs")
const app = express()



app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        }
    })
    // res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World! hhhhhh')
})


app.listen(3000, () => {
    console.log('http://localhost:' + 3000)
})