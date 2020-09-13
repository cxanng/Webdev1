const http = require('http');
const fs = require('fs');
const pathLead = {
    "/" : "index.html",
    "/classical" : "homer.html",
    "/modern" : "bradbury.html"
}

module.exports = http.createServer((req, res) => {
    const { method, url } = req;
    if (Object.keys(pathLead).includes(url)) {
        fs.readFile(pathLead[url], (err, data) =>{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(404, 'Requested content not found');
        res.end();
    }
})

// server.listen(3000, '127.0.0.1');