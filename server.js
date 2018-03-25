// import express from 'express';

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var view_routes = require('./routes/view_routes');
var path = require('path');

var port = process.env.PORT || 5000;

var app = express(); // Self instantiating constructor -- Object

// var obj = {
//   name: 'JD',
//   myMethod: function() {

//   }
// }
function errorHandler(err, req, res, next) {
  // console.log(err.stack);
  res.render('index', {error: 'File Size is Too Large'});
  // res.render('error', { error: err })
}


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// MOST EVERY PACKAGE YOU USE IS AN OBJECT
// - With methods and properties that you can use

app.use(bodyParser.urlencoded({ extended: true })); // extended:true lets you send objects and arrays through
app.use(bodyParser.json());



view_routes(app);
app.use(errorHandler);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});















// Step 1
// Parameters just reference the arguments in the order they were received
// function test(sasdfasdf, asdfad, str) { // FROM THE FUTURE
//   console.log(wqerwer);
// }

// test('Some value', 10, 'Another'); // Step 2














// var another = 'and something else';
// // var something = 'Some string ' + another;
// var data = {name: 'JD'}
// var something = `
//   <div class="wrapper">
//     <h1>${data.name}</h1> 
//     <p>${another}</p>
//   </div>
// `;

// something += ' and something else';

// Some string and something else



// function test(something) {
//   console.log(something);
// }

// test(app);



