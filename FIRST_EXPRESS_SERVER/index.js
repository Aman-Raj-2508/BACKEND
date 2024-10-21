const express = require('express');
//create an express app object by calling the express function
const app = express();
const PORT = 3000;

//2.Run this wihtout comments 1st
app.get('/', function (req, res) {
    res.send("Hello world");
});
//3.Run this wihtout comments 1st 2nd
app.post('/home', function (req, res) {
    res.send("This is a POST request");
});

//4.Run this wihtout comments 1st 2nd 3rd
app.patch('/home', function (req, res) {
    res.send("This is a PATCH request");
});

//5.Comment 4th and run this
// app.patch('/home', function (req, res) {
//     res.json({
//         message: "this is a patch request",
//         success: true
//     })
// });

//1.First comment all above and run this
app.listen(PORT, function process() {
    console.log("server started")
})