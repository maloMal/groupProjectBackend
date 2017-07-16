var r = require("./routes.json");

var controllers = {
    forum: require("./controllers/forumController"),
    score: require("./controllers/scoreController")
}

module.exports = function(app, passport){
    apt.put(r.updateHighScore, controllers.score.updateHighScore);
    apt.
        
    
}