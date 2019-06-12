const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = function generateToken(user) {
    const {id, username} = user
    const payload = {
        subject: id,
        username: username,
        roles: ['student']
    };

    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}