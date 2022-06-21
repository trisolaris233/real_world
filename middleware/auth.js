const jwt = require('../util/jwt')
const config = require('../config/config.default')
const userSchema = require('../model/user')
const { decode } = require('jsonwebtoken')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    let token = req.headers.authorization
    token = token ? token.split('Bearer ')[1] : null

    if (!token) {
        return res.status(401).end()
    }

    try {
        const decodedToken = await jwt.verify(token, config.jwtSercetKey)
        
        req.user = await User.findById(decodedToken.userId).select(['username', 'email', 'bio', 'image'])
        req.token = token
    } catch (err) {
        return res.status(401).end()
    }
    
    next()
}