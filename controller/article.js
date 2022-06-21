exports.listArticles = async (req, res, next) => {
    try {
        res.send('get /articles/')
    } catch (err) {
        next(err)
    }
}

exports.feedArticles = async (req, res, next) => {
    try {
        res.send('get /articles/feed')
    } catch (err) {
        next(err)
    }
}

exports.getArticle = async (req, res, next) => {
    try {
        res.send('get /articles/:slug')
    } catch (err) {
        next(err)
    }
}

exports.createArticle = async (req, res, next) => {
    try {
        res.send('post /articles')
    } catch (err) {
        next(err)
    }
}

exports.updateArticle = async (req, res, next) => {
    try {
        res.send('put /articles/:slug')
    } catch (err) {
        next(err)
    }
}

exports.deleteArticle = async (req, res, next) => {
    try {
        res.send('delete /articles/:slug')
    } catch (err) {
        next(err)
    }
}

exports.addArticleComments = async (req, res, next) => {
    try {
        res.send('post /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
}

exports.getArticleComments = async (req, res, next) => {
    try {
        res.send('get /articles/comments')
    } catch (err) {
        next(err)
    }
}

exports.deleteArticleComments = async (req, res, next) => {
    try {
        res.send('delete /articles/:slug/comments/:id')
    } catch (err) {
        next(err)
    }
}

exports.favoriteArticle = async (req, res, next) => {
    try {
        res.send('post /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
}

exports.UnfavoriteArticle = async (req, res, next) => {
    try {
        res.send('delete /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
}