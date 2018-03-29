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
router.get('/circle', function(req, res, next) {
  res.render('circle', { title: 'Express' });
});
module.exports = router;
