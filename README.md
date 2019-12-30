# this is the readme for the repo that will contain a rest api

I am starting will a boilerplate for an server and creating request and response calls

first i learned how to use the express method GET to send a response to the user on a given directory
each express method call has at least the two parameters (request, response)

next i learned how to serve an html file so i could put any html file i created and have it load for the user when on a particular path of my website. to do this i still used the GET method but instead of sending a string, i used the builtin method sendFile()

after it was time to learn how to add css and js files to my html. this can be done by serving a static assest or a file that modifys the html in some way. 
i showed my knowelge of this by having a nasa AstroPhotography of the day portion of my website @ /nasa
my js and css code is seperate from the html and needed to be served to the webpage before it could be used

another important thing i learned is how to serve a JSON object to the user or within the server. since JSON is used all over the web it is important to know how to handle data in this format

understading the enviorment assets or .env file is imporant when creating a webpage. often that is some portion of your site that is best not to be veiwed publicly. api keys, password management, ect
i created a .env file but becuase i dont need alot of my program hidden since this was for learning purposes i did not include much in this file

understanding what middleware is was a big learning point for me in this project, now i understand middleware's importance in web applications and how it passes data from client PC to software and then to server. I created middleware functions inside of app.get callback functions. i am still expanding my knowlege on all the uses of middleware

I also learned a few diffrent ways a server and website can receieve user input
the first way i was introduced to was using the 'route input' of a webpage. using this a user could enter some parameter in there url that would have some kind of unquie outcome when the path was followed. i simply created a echo page that repeated the user input in the path of the webpage /echo

next i practaiced using query parametes. this too is done in the url but its format is more user friendly but still not something you would want to be the only implementation of search on your website, unless you were trying to keep something hidden. 

the final part was to practaice the express method .POST() this method allows forms to be submited to a server in JSON or similar format
I am still expanding my knowlege on POST as it is a very difficult process to fully understand and master. 