const express = require("express")
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World! hhhhhh')
})


app.listen(3000, () => {
    console.log('http://localhost:' + 3000)
})