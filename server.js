var fs = require('fs');

//import express
var express = require('express');
var app = express();

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//set view directory
app.set("views", ".");
app.set("view engine", "pug");

app.get('/*', (req, res) => {
    res.render("index")
})

app.post('/getFileSize', upload.single("file"),(req, res) => {
    console.log(req.file.size);
    res.json({"size in bytes": req.file.size});
})

app.listen(process.env.PORT);

// var fileStats = fs.statSync("myFile.txt");
// console.log(fileStats["size"]);