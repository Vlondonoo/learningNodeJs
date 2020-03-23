var http = require('http');

var server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //    res.end('holas a todos'); // send response back yo the server
    var myObj = {
        name: 'vero',
        job: 'developer',
        age: 27
    };
    res.end(JSON.stringify(myObj));
});
server.listen(3000, 'localhost') //port and ip
console.log('now listening por 3000');