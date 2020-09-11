const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){  
    fs.readFile('./index.html', (err, data) => {
        if(err) {                
            res.writeHead(404);
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);               
        }
        res.end();
    })
});
server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');