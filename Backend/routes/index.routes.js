var express = require('express');
var auth = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => {

  var token = auth.sign(req.body.user, req.body.password);

  res.cookie('token', token, { maxAge: 1000 * 60 * 2, httpOnly: true })
  res.render('pagina_intermedia')
});


router.get('/final', auth.isAuthorized, (req, res) => {
  res.render('final', { user: req.data.user, password: req.data.password });
});

module.exports = router;
