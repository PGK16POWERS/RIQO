const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");

app.use(express.static("htmlFiles"));
app.use(express.static("javascriptModules"));
app.use(express.static("stylesfolder"));



app.listen(2300, () => {
    console.log("Up it like Its cheese");
})