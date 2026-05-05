const http = require('http');
const request = require('./routes');
const server = http.createServer(request.handler);

request.test;
server.listen(3000, () => console.log('Online...'));