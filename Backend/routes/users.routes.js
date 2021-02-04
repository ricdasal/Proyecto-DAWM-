
var express = require('express');
var auth = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


router.get('/', (req, res) => {
    res.render('index', { title: 'JWT' });
});

router.post('/ingresar', (req, res) => {

    var token = auth.sign(req.body.user, req.body.password);

    res.cookie('token', token, { maxAge: 1000 * 60 * 2, httpOnly: true })
    res.render('intermedia')
});


router.get('/final', auth.isAuthorized, (req, res) => {
    res.render('final', { user: req.data.user, password: req.data.password });
});




module.exports = router;