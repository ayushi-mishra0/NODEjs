const express = require("express");
const app = express();
const port = 8000;

//buildin  middleware

console.log(__)


app.use(express.static(path));
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port, () =>{
    console.log(`listening to the port ${port}`);
})