const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const { v4 : uuidv4 } = require('uuid');

 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


app.use(express.urlencoded({extended : true}));


app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


//creating posts

let posts = [
    {
        id:uuidv4(),
        username : "madhav",
        content : "madhav is a  good boy",
    },
    {
        id:uuidv4(),
        username :"Gmadhav ",
        content :"madhav got intership",
    },
    {
        id:uuidv4(),
        username :"rahul",
        content: "he selected IIT",

    },
];


//api creating
app.get("/posts", (req,res) =>{
    res.render("index.ejs",{posts});
});

//home route
app.get("/", (req, res) => {
    res.send("serving working well!!");
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});


app.post("/posts", (req,res)=>{
    let { username, content } = req.body;
    let id= uuidv4();
    posts.push({id,username,content});
    //console.log(req.body);
  res.redirect("/posts");
});





app.get("/posts/:id", (req,res)=>{
   let { id } = req.params;
    console.log(id);
  res.render("show.ejs",{post});
});




app.patch("/posts/:id", (req,res) => {
    let { id } = req.para,s;
    console.log(id);
    res.send("patch request working");
})


app.listen(port, () =>{
    console.log("listening to port : 3000");
});