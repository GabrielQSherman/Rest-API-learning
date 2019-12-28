
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here

app.use('/', (req, res, next) => {
  
    let post = req.method + " " + req.path + " - " + req.ip;
    console.log(post);
  next()
})


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */

// console.log("Hello World");


/** 2) A first working Express Server */

// app.get('/', (req, res) => {
//   res.send("Hello Express");
// })


/** 3) Serve an HTML file */

let absolutePath = __dirname + '/views/index.html';

// console.log(absolutePath);

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


/** 8) Chaining middleware. A Time server */

app.get('/now', (req, res, next) => {
  
    req.time = new Date().toString();
  

    
    next()
}, (req, res) => {
//     console.log(req.time);
//     console.log("final");
  
  res.json({time: req.time});
    

})


/** 9)  Get input from client - Route parameters */

app.get('/r-p-s', (req,res, next) => {
  
})


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  
  console.log(req.params); //req.params is a object of key value pairs with values all being string from the user's path input
  
  // res.json({echo: word}); //this will just give the user input in json format
  
  let echo = (word + " ").repeat(7);
  
  res.send(echo);
})

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

app.get('/name', (req, res) => {
  
  console.log("first name: " + req.query.first + " - last name: " + req.query.last);
  console.log('\n\n');
  
  let first = req.query.first,
      last = req.query.last;
  
  // res.json({name: req.query.first + " " + req.query.last}); //returns and object with user input from url query
  
  res.send("Hello " + first +" "+ last + ". I am pleased to serve you!");
  
})

/** 12) Get data form POST  */


//more html serves
let filepath = __dirname + '/nasa.html';

// console.log(filepath);

app.get('/nasa', (req, res) => {
  res.sendFile(filepath);
})
// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */


//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
