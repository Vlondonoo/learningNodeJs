var fs = require('fs');
// var readMe = fs.readFileSync('read.txt', 'utf8'); // this is blocking code because sync
// // utf8 to make readable the code

// //console.log(readMe);

// // first pparameter is the file were is gonna be write 
// // and the second one  is the message that i wanna write
// fs.writeFileSync('writeMe.txt', readMe)




//async method (is not blocking the code), data is the mesage from the filr
// fs.readFile('read.txt', 'utf8', (err, data) => {
//     if (err)
//         return err
//     else {
//         fs.writeFile('writeMe.txt', data, 'utf8', function(err2, data2) {
//             if (err2) {
//                 console.log(err2)
//             } else { console.log(data2) }
//         });

//     }

// });

// delete and create files

// fs.unlik delete the file
// fs.unlink('writeMe.txt', function(err2, data2) {});

// // creating directory sync
// fs.mkdirSync('stuff');


// //removing directory sync
// fs.rmdirSync('stuff');


// // creating directory async
// fs.mkdir('stuff', () => {
//     fs.readFile('read.txt', 'utf8', (err, data) => {
//         fs.writeFile('./stuff/writeMe.txt', data, () => {

//         });
//     });
// });
fs.unlink('./stuff/writeMe.txt', () => {}); //borrar 
fs.rmdir('stuff', () => { // crear

});