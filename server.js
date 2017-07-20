var express = require("express"),
    mongoose = require("mongoose"),
    path = require("path"),
    bodyParser = require("body-parser"),
    
    passport = require("passport"),
//    auth = require("./app/auth/passport-local"),
//    bcrypt = require("bcrypt-nodejs"),
    player = require("./server/models/player"),
    Post = require("./server/models/forumPost"),
    session = require("express-session"),
    methodOverride = require("method-override"),
    routes = require("./server/routes/routes"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, "public")));
//app.set("view engine", "html");
//app.set("views", path.join(__dirname, "app/views"));

app.use(session({
    secret: 'issaSecret',
    resave: true, 
    saveUninitialized: true
}));

app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

////auth(passport);
routes(app, passport);

//localAuth(passport);
mongoose.connect("mongodb://localhost/user");
app.listen(8080);
routes(app);