const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "info", filename);
}

fs.readFile(file("exclude.txt"), function (err, data) {

    if(err) {
        console.log('Wystapil blad: ${err.message}.');
        throw err;
    }

    console.log(data);

});