const mongoose = require('mongoose');
const config = require('../config/config.default')
mongoose.connect(config.dbUri);

const db = mongoose.connection
db.on('error', console.error.bind(console, 'an error occured on connecting the dababase'))
db.on('open', () => { console.log('database connected successfully')})

module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}