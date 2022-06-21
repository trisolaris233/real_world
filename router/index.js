const express = require('express')
const router = express.Router()

router.use(require('./user'))
router.use('/profiles', require('./profile'))
router.use('/articles', require('./article'))
router.use('/tags', require('./tag'))

router.get('/', (req, res) => {
    res.send("hello, world")
})

router.post('/test', (req, res) => {
    console.log(req.body)
    res.send("hello, world")
})

module.exports = router