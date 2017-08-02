const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "files", filename);
}

fs.rmdir(path.join(__dirname, "files"), function (err) {
   if (err) {console.log("Nie udalo sie usunac katalogu, bo wystapil blad" + err.message);}
});