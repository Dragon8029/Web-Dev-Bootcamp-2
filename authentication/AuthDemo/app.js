var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"), 
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"), 
    LocalStrategy         = require("passport-local"), 
    passportLocalMongoose = require("passport-local-mongoose")
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });

const PORT = process.env.PORT || 3001;



var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world", 
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==============
//****ROUTES**** 
//==============



app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

// AUTH ROUTES

// Show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

// handling user sign up
app.post("/register", function(req, res){
    // req.body.username
    // req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});


app.listen(PORT, () => console.log(`AuthDemo is connected on port: ${PORT}!`))
