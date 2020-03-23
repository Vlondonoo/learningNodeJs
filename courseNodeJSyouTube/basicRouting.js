var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url)
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);

    } else if (req.url === '/api/people') {
        var people = [{ name: 'vero', age: 27 }, { name: 'yoshi', age: 32 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(people));
    } else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/common.html', 'utf8').pipe(res);

    }
});

server.listen(3000, 'localhost') //port and ip
console.log('now listening por 3000');