const mongoose = require("mongoose")

async function main() {
    mongoose.connect('mongodb://localhost:27017/express-video')
}

main().then(res => {
    console.log('连接成功');
}).catch(err => {
    console.log("连接失败:" + err)
})


module.exports = {
    User: mongoose.model('User', require('./userModel')) 
}