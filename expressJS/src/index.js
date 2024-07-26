//ROUTING IN EXPRESS JS
const path = require("path");
const express = require("express");

const app = express();

const staticPath = path.join(__dirname, "../public");


//builtin middleware
app.use(express.static(staticPath));
app.get("/",(req,res) => {
    res.send("hello world from the expressss");
});

app.get("/temp",(req,res) => {
    res.send({
        id : 15, 
        name : "ayushi",
    });
});

    app.get("/about",(req,res) => {
        res.send("hello world from About page.");
});

app.listen(8000, () => {
    console.log("listening to the port 8000");
});
