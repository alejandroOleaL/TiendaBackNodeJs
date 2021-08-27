'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'alexlocia';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        nombres: user.nombre,
        apellidos: user.apellidos,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(7,'days').unix()
    }

    return jwt.encode(payload,secret);
}