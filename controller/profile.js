exports.getUserProfile = async (req, res, next) => {
    try {
        res.send('get /profiles/:username')
    } catch (err) {
        next(err)
    }
}

exports.followUser = async (req, res, next) => {
    try {
        res.send('post /profiles/:username/follow')
    } catch (err) {
        next(err)
    }
}

exports.unfollowUser = async (req, res, next) => {
    try {
        res.send('delete /profiles/:username/follow')
    } catch (err) {
        next(err)
    }
}