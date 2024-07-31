const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//buildin  middleware
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("hello")
});

app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
});