const { User } = require('../model')
const config = require('../config/config.default')
const jwt = require('../util/jwt')
// user login
exports.login = async (req, res, next) => {
    try {
        const user = req.user.toJSON()
        // just an important field which represents the user's identity is ok
        const token = await jwt.sign({
            userId: user._id
        }, config.jwtSercetKey)
        
        delete user.password
        user.token = token

        res.status(200).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// user registeration
exports.register = async (req, res, next) => {
    try {
        let user = new User(req.body.user)
        await user.save()
        user = user.toJSON()

        delete user.password

        res.status(201).json({ user })
    } catch (err) {
        next(err)
    }
}

// get current user
exports.getCurUser = async (req, res, next) => {
    try {
        const user = req.user.toJSON()
        user.token = req.token
        delete user._id
        res.json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// update user 
exports.updateCurUser = async (req, res, next) => {
    try {
        res.send('put /user')
    } catch (err) {
        next(err)
    }
}
