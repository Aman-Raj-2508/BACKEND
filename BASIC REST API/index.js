//Setting up the basic http server with express
const express = require('express');
//Requiring body parser
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;


//Using urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//using body parser
app.use(bodyParser.json());



//Mimic the db using an array
let blogsList = [];

//Setting up APIs

//getting all the blogs
app.get('/blogs', (req, res) => {
    return res.status(404).json({
        data: blogsList,
        success: true
    });
});

//Creaing the blog
app.post('/blogs', (req, res) => {
    // console.log(req.body);
    blogsList.push({
        title: req.body.title,
        content: req.body.content,
        id: Math.floor(Math.random() * 1000)
    });
    return res.status(201).json({
        success: true,
    });
});

//getting the specific blog
app.get('/blogs/:id', (req, res) => {
    // console.log(req.params);
    const result = blogsList.filter((blog) => blog.id == req.params.id);
    return res.status(200).json({
        data: result,
        success: true
    });
});

// deleting the blog
app.delete('/blogs/:id', (req, res) => {
    // const blogId = parseInt();
    const index = blogsList.findIndex((blog) => blog.id == req.params.id);

    if (index !== -1) {
        blogsList.splice(index, 1);
        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully."
        });
    } else {
        return res.status(404).json({
            success: false,
            message: "Blog not found."
        });
    }
});



//starting the server
app.listen(PORT, function process() {
    console.log("server started on PORT", PORT)
});
