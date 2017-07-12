
var mongoose = require("mongoose");


var player = new mongoose.Schema({
    username: String, 
    password: String, 
    highScore: 0,
    posts: [],
    
});


module.exports = mongoose.model("player", player);