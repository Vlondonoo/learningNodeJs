//buffer
// temporary storage spot for a chunk of data that is being
// transferred from one place to another
//buffer is filled with data
//transfer small chunks of data at a time

// stream is parte of buffer


// stream 
// in nodejs are to transfer data
//increase the performance


// Readable streams --  allow nodejs to read data to stream
// writeable streams -- allow nodejs to write data to stream
//duplex --can read and write data to a stream


var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/testText.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeText.txt', 'utf8');

// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received: ' + chunk);
//     myWriteStream.write(chunk);

// });

// way with pipes
// var myReadStream = fs.createReadStream(__dirname + '/testText.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeText.txt', 'utf8');
// myReadStream.pipe(myWriteStream);


//  send the pipe to html
// send pipes to a writeable strings
var server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/testText.txt', 'utf8');
    myReadStream.pipe(res);
});
server.listen(3000, 'localhost') //port and ip
console.log('now listening por 3000');