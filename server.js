var express = require("express"),
    mongoose = require("mongoose"),
    path = require("path"),
    bodyParser = require("body-parser"),
    
    passport = require("passport"),
//    auth = require("./app/auth/passport-local"),
//    bcrypt = require("bcrypt-nodejs"),
    player = require("./app/models/player"),
    Post = require("./app/models/forumPost"),
    session = require("express-session"),
    methodOverride = require("method-override"),
    route = require("./app/routes/routes"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/static", express.static(path.join(__dirname, "app/client")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"))

app.use(session({
    secret: 'issaSecret',
    resave: true, 
    saveUninitialized: true
}));

app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

////auth(passport);
//route(app, passport);

//localAuth(passport);
mongoose.connect(process.env.DB_URL);
app.listen(process.env.PORT || 8080);
//routes(app);