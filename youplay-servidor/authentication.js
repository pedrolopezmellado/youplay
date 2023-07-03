const jose = require('jose');
const Usuario = require('./models/usuario');
var util= require('util');
var encoder = new util.TextEncoder('utf-8');

const JWT_PRIVATE_KEY = 'Has156#GDa€@FADASaasdwefwergf@#~€¬asdasdwefgASFSF1234456wefgnmweiofnOINFJIOW234OIsdfsdEFN2134235&/$%SADF4567A568972TG8934Nsgvw8f6we896y';

const generaToken = async function(usuario) {
    const jwtConstructor = new jose.SignJWT({ id: usuario.getId});
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(encoder.encode(JWT_PRIVATE_KEY));
    return jwt;
};


const checkToken = async function(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        const { payload } = await jose.jwtVerify(
            req.token,
            encoder.encode(JWT_PRIVATE_KEY)
        );
        next();
    } else {
        res.status(401).send({mensaje: "No estás autentificado."});
    } 
}

module.exports = {
    generaToken,
    checkToken
};