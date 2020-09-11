const http = require('http');
const fs = require('fs');
const possibleHeaders = {
    "text/xml" : "data.xml",
    "text/html" : "data.txt",
    "aplication/json" : "data.json",
    "*/*" : "data.txt"
}

const server = http.createServer((req, res) => {
    if (req.headers.accept  == "text/xml" || 
    req.headers.accept == "*/*") {
        fs.readFile("data.html", (err, data) => {
            res.writeHead(200, {'Content-Type' : "text/html"});
            res.write(data);
            res.end();
        });        
    }
    else if (req.headers.accept == "aplication/json" ) {
        fs.readFile('data.json', (err, data) => {
            res.writeHead(200, {'Content-Type' : res.headers.accept});
            res.write(data);
            res.end();
        })
    }
    else if (req.headers.accept == "text.xml" || 
    req.headers.accept == "application/xml") {
        fs.readFile('data.xml', (err, data) => {
            res.writeHead(200, {'Content-Type' : res.headers.accept});
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