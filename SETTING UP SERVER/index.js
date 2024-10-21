//using http module(inbuilt given by node)
const http = require('http');
const PORT = 3000;

/**
 * Http module contains a function called as createServer
 * this createServer function takes a callback as the input for example function exec
 * Now inside the callback, we get two arguments
 * -request --> this argument contains all the details about the incoming req
 * -responsee --> this argument contains functions using which we can prepare the responses
 * this createServer function returns us the server object
 */


const server = http.createServer(function exec(request, response) {

    /**To see the type of method that is being executed like GET,POST,PATCH
     By default the browser always makes get request
    To use other request method we can use Postman*/

    console.log(request.method);


    //To see the request object
    // console.log(request);


    //Without these if we type localhost:3000 on browser then it will just load
    //to see just comment the code below and type localhost:3000
    console.log(request.url);
    if (request.url == '/home') {
        response.end("Welcome to home");
    } else if (request.url == '/faq') {
        response.end("List of faqs");
    } else {
        response.end("Hello World");
    }
    // response.end("Hello World");
});


server.listen(PORT, function process() {
    //once the server has started then this callback will be executed that is function process
    console.log("Server started on port", PORT);
}); 