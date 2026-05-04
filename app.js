const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server is created');


    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1> Home Page </h1>');
    }
    else if (req.url === '/home') {
        res.statusCode = 200;
        res.end('<h1> Welcome Home </h1>');
    }else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1> Welcome to about Us </h1>');
    }else if (req.url === '/node') {
        res.statusCode = 200;
        res.end('<h1> Welcome to my node js Project </h1>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Page Not Found </h1>');
    }

});

const port = 3000;
server.listen(port, () => {
    console.log('server is running on port ' + port);
})