const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(port, () => console.log(`Yelp Camp Server is Connected on port: ${port}!`))