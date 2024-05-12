// creating a node-server
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// sending same response each and every time a request is made
// const server = http.createServer(function (req, res) {
//     res.statusCode = 200;   // everything is OK
//     res.setHeader("content-Type", "text/plain");  // sending the Headers
//     res.end('Hello Dark') // ending the response 
// });

// making it correct
const server = http.createServer((req, res) => {
    if ( req.url === '/' ) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end('Hello');
    }
    else if ( req.url === '/dark' ) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end('Hello Dark');
    }
    else if ( req.url === '/light' ) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end('Hello Light');
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end('404 Not Found');
    }
})

server.listen(port, hostname, function() {
    console.log(`server is listening at http://${hostname}:${port}`);
})