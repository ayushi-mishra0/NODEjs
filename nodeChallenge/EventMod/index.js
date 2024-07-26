const EventEmitter = require("events");
const event = new EventEmitter();

event.on("saymyname",() => {
    console.log("your name is ayushi");
});

event.on("saymyname",() => {
    console.log("mishra");
});
event.on("saymyname",() => {
    console.log("rupal");
});
event.emit("saymyname");