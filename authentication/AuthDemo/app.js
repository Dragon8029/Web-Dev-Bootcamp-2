var express = require("express");

var app = express();
app.set('view engine', ejs);

app.get("/", function(req, res){
    res.render("home");
})

app.listen(port, () => console.log(`Server is started on port: ${port}!`))