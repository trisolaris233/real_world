const validator = require('../middleware/validator')
const { body, validationResult } = require('express-validator');
const { User } = require('../model')
const md5 = require('../util/md5')


exports.register = validator([
    body('user.username')
        .notEmpty().withMessage('empty username is not allowed')
        .bail()
        .custom(async username => {
            const user = await User.findOne({ username })
            if (user) {
                return Promise.reject('username already exists')
            }
        }),
    body('user.password').notEmpty().withMessage('empty password is not allowed'),
    body('user.email')
        .notEmpty().withMessage('empty email address is not allowed')
        .normalizeEmail().isEmail().withMessage('invalid email address')
        .bail()
        .custom(async email => {
            const user = await User.findOne({ email })
            if (user) {
                return Promise.reject('email already exists')
            }
        })
])

exports.login = [
    validator([
        body('user.email')
            .notEmpty().withMessage('empty email address is not allowed'),
        body('user.password')
            .notEmpty().withMessage('empty password is not allowed')
    ]),

    validator([
        body('user.email')
            .custom(async (email, { req }) => {
                const user = await User.findOne({ email }).select(['username', 'email', 'password', 'bio', 'image'])
                if (!user) {
                    return Promise.reject('The user does not exists')
                }

                req.user = user
            })
    ]),

    validator([
        body('user.password')
            .custom(async (pwd, { req }) => {
                if (!(md5(pwd) == req.user.password)) {
                    return Promise.reject('Incorrect password, please try again')
                }
            })
    ])
]