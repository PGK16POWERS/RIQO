const express = require("express");
const app = express();
const ejs = require("ejs")


app.set("view engine","ejs");
app.use(express.static("views"))
app.use(express.static("htmlFiles"));
app.use(express.static("javascriptmods"));
app.use(express.static("stylesfolder"));
app.use(express.static("photos"));

app.get("/", (req,res) => {
    res.render("index.ejs")
});

app.get("privacypolicy", (req,res)=> {
    res.render("privacypol.ejs");
})

app.listen(2300, () => {
    console.log("Up it like Its cheese");
})