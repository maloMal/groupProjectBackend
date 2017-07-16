var player = require("../../models/player.js");


//var highScore = {
//    get: function (req, res){
//        
//    }
//}

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


exports.updateHighScore = updateHighSchool;