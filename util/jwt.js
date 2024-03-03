const jwt = require('jsonwebtoken');
const  { promisify } = require("util")
const signToken = promisify(jwt.sign)
const verify = promisify(jwt.verify)

module.exports.createToken = async userinfo => {
    return await signToken({userinfo}, '64b9df23-d293-424b-9028-3b0e7a5edb72')
}

module.exports.verifyToken = async (req, res, next) => {
    console.log(req.headers)
    let { authorization } = req.headers
    if(authorization) {
        const token = authorization.split('Bearer ')[1]
        try {
            const info = await verify( token, '64b9df23-d293-424b-9028-3b0e7a5edb72')
            next()
        } catch (error) {
            res.status(401).send('token无效')
        }
    } else {
        res.status(401).send('token为空')
    }

}