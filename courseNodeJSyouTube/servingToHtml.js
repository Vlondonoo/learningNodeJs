var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});
server.listen(3000, 'localhost') //port and ip
console.log('now listening por 3000');