var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site/index', { title: 'Express', container:[{name:'hello'}]});
});

module.exports = router;
