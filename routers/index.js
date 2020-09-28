
const express = require('express');
const router = express.Router();

const user = require('./user');
const articleType = require('./articleType');
router.get('/getArticleType',articleType.getArticleType);
router.get('/updateType',articleType.updateArticleType);
router.get('/login', user.login)
module.exports = router;