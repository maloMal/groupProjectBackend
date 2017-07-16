var post = require("../../models/forumPost.js");

function today(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if (day < 10){
        day = '0' + day;
    }
    
    if(month < 10){
        month = '0' + month;
    }
    return{
        month: month,
        year: year,
        day: day
    }
}

var forumPosts = {
    create: function(req, res){
        res.render("create", {
            user: req.user.username
        });
    },
    update: function(req, res){
        Post.findOne({"_id": req.query.post}, function(err, post){
            if(err){
                console.log(err);
            }else {
                res.render("update", {
                    post: post
                });
            }
        });
    }
};

var createPost = function(req, res){
    new forumPost({
        title: req.body.blogTitle,
        post: req.body.postBody,
        date: {
            month: today().month,
            day: today().day,
            year: today().year
        },
        user: req.user.username,
        comments: []
    }).save(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/index");
        }
    });
}

function updateForumPost(req, res){
    Post.update({"_id":req.query.id}, {$set: {"post": req.body.postBody, "title": req.body.blogTitle}}, function(err, doc){
        console.log(doc);
        if(err){
            res.redirect("/index?update=fail");
        }else {
            res.redirect("/index?update=success");
        }
    });
}

function createComment(req, res){
    
}

function deleteForumPost(req, res){
    Post.remove({"_id": req.query.post}, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.redirect("/index");
        }
    });
}

exports.create = createPost;
exports.update = updateForumPost;
exports.delete = deleteFormPost;

exports.createPage = forumPost.create;
exports.updatePage = forumPost.update;