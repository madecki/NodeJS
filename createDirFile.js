const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "files", filename)
}
//
// fs.mkdir(path.join(__dirname, "files"), function (err) {
//     if(err) {
//         console.log('Nie udalo sie stworzyc katalogu przez blad:' + err.message);
//         return;
//     }
//     console.log("Utworzono katalog");
// });


fs.writeFile(file("lorem.txt"), "", function (err) {
    if(err) {
        console.log('Nie udalo sie stworzyc katalogu przez blad:' + err.message);
        return;
    }
    console.log("Utworzono katalog");
});


fs.appendFile(file("lorem.txt"), Date.now() + "\n", function (err) {
    if(err) {
        console.log("Cos poszlo nie tak!");
        return;
    }

    console.log("Dodano date do pliku!");
})