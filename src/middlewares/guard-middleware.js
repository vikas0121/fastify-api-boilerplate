const HttpStatus = require('http-status-codes/index');

const guardMiddleware = (request, reply, next) => {

    const msg = 'apiKey is required to access the endpoint';
    if (request.headers['apikey'] && request.headers['apikey'] !== 'test-key') {
        reply.writeHead(HttpStatus.FORBIDDEN);
        reply.write(msg);
        reply.end();
    }

    next();
};

module.exports = { guardMiddleware };