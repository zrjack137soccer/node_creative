var express = require('express');
//var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root : 'public'});
});

router.get('/forecast', function(req, res, next) {
    var url = "dummyWebPage/" + req.query.q;
    //request(url).pipe(res);
});

module.exports = router;
