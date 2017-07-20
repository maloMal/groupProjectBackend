var player = require("../../models/player.js");


//var highScore = {
//    get: function (req, res){
//        
//    }
//}

//get a single player's score
function getScore(req, res){
    player.findOne({username: req}, {highScore: 1});
    res.redirect("/leader");
}

//updates a specific player's high score. 
function updateHighScore(req, res){
    player.findAndUpdateById(req.query.id, { $set: {"highScore": req.body.highScore}}, function(err, doc){
        console.log(doc);
        if(err){
            res.redirect("/index?update=fail");
        }else {
            res.redirect("/index?update=success");
        }
    });
}

exports.getScore = getScore; 
exports.updateHighScore = updateHighScore;