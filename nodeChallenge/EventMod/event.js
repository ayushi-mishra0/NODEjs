const express = require("express");
const EventEmitter = require("events");
const app = express()

app.get("/",(req,resp) => {
    resp.send("api called")
});

app.listen(5000);