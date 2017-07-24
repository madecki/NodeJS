const EventEmitter = require("events");
var emitter = new EventEmitter();

emitter.on("message", function (msg) {
    return console.log("Msz jedną wiadomość: ", msg);
});

emitter.emit("message", "To jest wiadomosc bez polskich znakow.");
