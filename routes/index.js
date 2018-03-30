var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/life', function(req, res, next) {
  res.render('life', { title: 'Express' });
});
router.get('/bright', function(req, res, next) {
  res.render('bright', { title: 'Express' });
});
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'Express' });
});
router.get('/message', function(req, res, next) {
  res.render('message', { title: 'Express' });
});
router.get('/circle', function(req, res, next) {  //圈圈说
  res.render('circle', { title: 'Express' });
});
router.get('/comment', function(req, res, next) {  //评论
  res.render('comment', { title: 'Express' });
});
router.get('/search', function(req, res, next) {  //搜索
  res.render('search', { title: 'Express' });
});
router.get('/login', function(req, res, next) {  //微博登陆
  res.render('login', { title: 'Express' });
});
module.exports = router;
