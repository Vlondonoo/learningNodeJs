// express easy and fexible routing system
// integrates with many templating engines
// Contains a middlawere framework

var express = require('express');

var app = express();

// http methods get, post, delete, put
//  get('route',fn);

// static request
// app.get('/', (req, res) => {
//     res.send('this is the home page');
// });
// app.get('/contact', (req, res) => {
//     res.send('this is the contact page');
// });

// dinamic request
// app.get('/profile/:name', (req, res) => {
//     //http://localhost:3000/profile/:vero
//     res.send('you request to see a profile with id' + req.params.name);
// });

//send to html html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// app.get('/contact', (req, res) => {
//     res.sendFile(__dirname + '/contact.html');
// });
// app.get('/profile/:name', (req, res) => {
//     //http://localhost:3000/profile/:vero
//     res.sendFile(__dirname + '/contact.html');
// });

// using ejs  // to use templates  // html profile.ejs
app.set('view engine', 'ejs');

app.get('/profile/:name', (req, res) => {
    var data = { age: 27, job: 'developer', hobbies: ['eating', 'reading', 'traveling'] }
    res.render('profile', { person: req.params.name, data: data });

    //     //http://localhost:3000/profile/vero
    // res.render('profile', { person: req.params.name });
});
//middleware
// app.use('/assets', (req, res, next) => {
//     console.log(req.url)
//     next();
// });

//static files
//http: //localhost:3000/assets/styles.css
app.use('/assets', express.static('assets'));



//post request
// post request ask the server to accept/store data wich is enclosed in the body of the request
// often used when submitting forms


app.listen(3000); // listen a port


// NoSQL
// store data in json objects

//mongoose provide the way to communicate with mongo database