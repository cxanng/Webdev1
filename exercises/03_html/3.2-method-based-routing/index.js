const http = require('http');
const fs = require('fs');
const method_res = {
    'GET' : './get.html',
    'POST' : './post.html'
}

const server = http.createServer((req, res) => {
    if (Object.keys(method_res).includes(req.method)) {
        fs.readFile(method_res[req.method], (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        });    
    }
    else {
        res.writeHead(405, "Allow: GET, POST");
        res.end();
    }
}).listen(3000);