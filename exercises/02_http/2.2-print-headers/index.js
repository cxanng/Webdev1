const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    console.log(req.headers);
    res.write(JSON.stringify(req.headers));
    res.end();
})

server.listen(3000, '127.0.0.1');
console.log('listening');