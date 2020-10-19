const http = require('http');
const url = require('url');


http.createServer((request, response) => {
    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', (err) => {
        console.error(err);
    });

    const queryObject = url.parse(request.url, true).query;

    // TODO: sanitize the the 'addThisText' query parameter user input so that injected scripts won't run
    response.write(
        `   <!doctype html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>XSS alert!</title>
            </head>
            <body>
                <p id="xss">Here be XSS!</p>
                ${queryObject['addThisText'].replaceAll('<', '&lt;').replaceAll('>', '&gt;')}
                
            </body >
            </html >
    `);
    response.end();
}).listen(3000);
