const crypto = require('crypto')

module.exports = str => {
    const md51 = crypto.createHash('md5').update(str).digest('hex')
    return crypto
            .createHash('md5')
            .update(md51)
            .digest('hex')
}