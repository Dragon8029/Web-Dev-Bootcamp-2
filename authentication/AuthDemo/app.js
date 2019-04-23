var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"), 
    bodyParser            = require("body-parser"), 
    LocalStrategy         = require("passport-local"), 
    passportLocalMongoose = require("passport-local-mongoose")
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

const PORT = process.env.PORT || 3001;

var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});
app.listen(PORT, () => console.log(`AuthDemo is connected on port: ${PORT}!`))
