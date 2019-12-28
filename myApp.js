
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
//this logger will be placed before all other function calls because it needs to ececute before any other responses can be made
app.use('/', (req, res, next) => {
  
    let post = req.method + " " + req.path + " - " + req.ip;
    console.log(post); //logs to the console some basic info about each request
  next()
})


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */

console.log("Hello World");


/** 2) A first working Express Server */

// app.get('/', (req, res) => {
//   res.send("Hello Express");
// })


/** 3) Serve an HTML file */

let absolutePath = __dirname + '/views/index.html';

console.log(absolutePath);

app.get('/', (req, res) => {
  res.sendFile(absolutePath);
})


/** 4) Serve static assets  */


let staticPath = __dirname + '/public';


app.use(express.static(staticPath));




/** 5) serve JSON on a specific route */

// app.get('/json', (req, res) => {
//   res.json({message: "Hello json"});
// })


/** 6) Use the .env file to configure the app */

app.get('/json', (req, res) => {
  
  let obj = {
    message: "Hello json"
  }
  
  if (process.env.MESSAGE_STYLE === "uppercase") {
    obj.message = obj.message.toUpperCase();
  } 
  
  res.json(obj);
})
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

//DONE ABOVE line 7


/** 8) Chaining middleware. A Time server */

app.get('/now', (req, res, next) => {
  //the req obj can have keys made and set with values so they can be called upon when need in chained-callback-function
    req.time = new Date().toString(); //the current time is converted to a string and then set to the key 'time' in the request obj
    
    next() //next function in sequence is called
}, (req, res) => {
    //the dom with have a response sent, it will display the current time as a json object converted to text
  res.json({time: req.time});

})


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
