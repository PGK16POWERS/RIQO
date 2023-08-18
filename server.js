const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.use(express.static("views"))
app.use(express.static("htmlFiles"));
app.use(express.static("javascriptModules"));
app.use(express.static("stylesfolder"));
app.use(express.static("photos"));

app.get("/", (req,res) => {
    res.status(200).sendFile(path.join(__dirname,"htmlfiles","index.html"));
});

app.get("/styl.css", (req,res) => {
    res.status(200).sendFile(path.join(__dirname,"stylesfolder","styl.css"));
});

app.get("/basicpagefunc.js", (req,res) => {
    res.status(200).sendFile(path.join(__dirname,"javascriptModules","basicpagefunc.js"));
});

app.listen(2300, () => {
    console.log("Up it like Its cheese");
})