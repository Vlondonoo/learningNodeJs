// require('./app/index')






// var serialport = require("serialport"); 
// var SerialPort = serialport.SerialPort; 




// const portArduino = new serialport('/dev/tty.usbserial', {
//     baudRate: 9600
// });
// const parsers = serialport.parsers;
// const parser = new parsers.Readline({
//     delimiter: '\r\n'
// });  

// portArduino.write("I:01:007:D,021,1:39")



var SerialPort = require('serialport');
var Delimiter = require('@serialport/parser-delimiter');

var port = new SerialPort('/dev/tty.usbserial');

var parser = port.pipe(new Delimiter({ delimiter: '\n' }));

parser.on('data', function(data){
  data = data.toString();
  console.log(data);
})


port.write('^\x02I:01:007:D,021,1:39\x03$')