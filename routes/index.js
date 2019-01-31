var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/nuevo', function(req, res, next) {
 res.sendFile(path.join(__dirname, '..', 'public', 'new.html'));
});

router.get('/lista', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'lista.html'));
 });


module.exports = router;