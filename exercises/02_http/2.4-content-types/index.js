const http = require('http');
const fs = require('fs');
const possibleHeaders = {
    "application/xml, text/xml" : "data.xml",
    "text/html" : "data.txt",
    "aplication/json" : "data.json",
    "*/*" : "data.txt"
}

const server = http.createServer((req, res) => {
    const reqHeader = req.headers.accept;
    if (Object.keys(possibleHeaders).includes(reqHeader)) {
        fs.readFile(possibleHeaders[reqHeader], (err, data) => {
            res.writeHead(200, {"Content-Type" : reqHeader});
            res.write(data);
            res.end();
        })
    }
    else {
        res.statusCode = 406;
        res.statusMessage = "Content type not available";
        res.end();
    }
})

server.listen(3000, '127.0.0.1');
console.log('listening');