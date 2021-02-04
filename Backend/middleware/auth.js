var jwt = require('jsonwebtoken');
const accessTokenSecret = 'dawm';

module.exports.isAuthorized = (req, res, next) => {

    if (req.cookies && req.cookies.token) {
        jwt.verify(req.cookies.token, accessTokenSecret, (err, data) => {
            if (!err && data.user == "abc" && data.password == "abc") {
                req.data = { user: data.user, password: data.password };
                next();
            } else {
                res.locals.message = 'Forbidden';
                res.locals.error = { status: '403', stack: 'Acceso no permitido' }
                res.render('error')
            }
        })

    } else {
        res.locals.message = 'Forbidden';
        res.locals.error = { status: '403', stack: 'Acceso no permitido' }
        res.render('error')
    }

}

module.exports.sign = (user, password) => {
    var payload = {
        user: user,
        password: password
    }

    return jwt.sign(payload, accessTokenSecret, { expiresIn: 60 * 2 });
}