const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("htmlFiles"));
app.use(express.static("javascriptModules"));
app.use(express.static("stylesfolder"));
app.use(express.static("photos"))


app.listen(2300, () => {
    console.log("Up it like Its cheese");
})