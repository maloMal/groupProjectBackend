var r = require("./routes.json");

var controllers = {
    pages: require("./controllers/pages"),
    forum: require("./controllers/forumController"),
    score: require("./controllers/scoreController")
}

module.exports = function(app, passport){
//    app.put(r.updateHighScore, controllers.score.updateHighScore);
    app.get(r.home, controllers.pages.home);
    app.post(r.getscore, controllers.score.getScore);        
}