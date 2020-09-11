const http = require('http');

const server = http.createServer((req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.writeHead(200, {'Context-Type': 'text/plain'});
        res.write(body);
        res.end();
    });
    
})

server.listen(3000, '127.0.0.1');
console.log('listening');

