var http = require('http');

var server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('holas a todos');
});
server.listen(3000, 'localhost') //port and ip
console.log('now listening por 3000');