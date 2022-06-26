var express = require('express');
var router = express.Router();

router.get('/puppies', function(req, res, next) {
  res.send('puppies');
});

module.exports = router;
