const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')

const router = express.Router()


// list articles
router.get('/', articleCtrl.listArticles)

// feed articles
router.get('/feed', articleCtrl.feedArticles)

// get article
router.get('/:slug', articleCtrl.getArticle)

// create article
router.post('/', auth, articleCtrl.createArticle)

// update article
router.put('/:slug', articleCtrl.updateArticle)

// delete article
router.delete('/:slug', articleCtrl.deleteArticle)

// add comments to article
router.post('/:slug/comments', articleCtrl.addArticleComments)

// get comments from article
router.get('/:slug/comments', articleCtrl.getArticleComments)

// delete comments
router.delete('/:slug/comments/:id', articleCtrl.deleteArticleComments)

// favoraite article
router.post('/:slug/favorite', articleCtrl.favoriteArticle)

// unfavoriate article
router.delete('/:slug/favorite', articleCtrl.UnfavoriteArticle)

module.exports = router