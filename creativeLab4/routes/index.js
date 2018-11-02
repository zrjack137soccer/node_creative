var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root : 'public'});
});

router.get('/woeid', function(req, res, next) {
    var url = "https://www.metaweather.com/api/location/search/?query=" + req.query.q;
    request(url).pipe(res);
});

router.get('/forecast', function(req, res, next) {
  var url = "https://www.metaweather.com/api/location/" + req.query.q + "/";
  request(url).pipe(res);
});

module.exports = router;