const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs")


const app = express(); 
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

let prop1Yes = 0
let prop1No = 0
let prop26Yes = 0
let prop26No = 0
let prop27Yes = 0
let prop27No = 0
let prop28Yes = 0
let prop28No = 0
let prop29Yes = 0
let prop29No = 0
let prop30Yes = 0
let prop30No = 0
let prop31Yes = 0
let prop31No = 0

app.post("/", function(req, res) {
    if (req.body.prop1 === "For") {
        prop1Yes += 1
    } else if (req.body.prop1 === "Against") {
        prop1No += 1
    }

    if (req.body.prop26 === "For") {
        prop26Yes += 1
    } else if (req.body.prop26 === "Against") {
        prop26No += 1
    }

    if (req.body.prop27 === "For") {
        prop27Yes += 1
    } else if (req.body.prop27 === "Against") {
        prop27No += 1
    }

    if (req.body.prop28 === "For") {
        prop28Yes += 1
    } else if (req.body.prop28 === "Against") {
        prop28No += 1
    }

    if (req.body.prop29 === "For") {
        prop29Yes += 1
    } else if (req.body.prop29 === "Against") {
        prop29No += 1
    }

    if (req.body.prop30 === "For") {
        prop30Yes += 1
    } else if (req.body.prop30 === "Against") {
        prop30No += 1
    }

    if (req.body.prop31 === "For") {
        prop31Yes += 1
    } else if (req.body.prop31 === "Against") {
        prop31No += 1
    }

    res.sendFile(__dirname + "/success.html")
})

app.get("/results", function(req, res) {
    res.render("results", {prop1Yes: prop1Yes, prop1No: prop1No, prop26No: prop26No, prop26Yes: prop26Yes, prop27No: prop27No, prop27Yes: prop27Yes, prop28No: prop28No, prop28Yes: prop28Yes, prop29No: prop29No, prop30No: prop30No, prop30Yes: prop30Yes, prop29Yes: prop29Yes, prop31Yes: prop31Yes, prop31No: prop31No })
})

app.listen(3000, function() {
    console.log("Server started successfully");
  });
  