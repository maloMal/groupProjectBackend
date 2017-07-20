var assApp = angular.module('assApp', []);

angular.module("assApp", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "../view/home.html"
			})
			.when("/about", {
				templateUrl: "../view/about.html"
			})
			.when("/leader", {
				templateUrl: "../view/leader.html"
			})
			.when("/contact", {
				templateUrl: "../view/contact.html"
			})
            .when("/forum", {
			templateUrl: "../view/forum.html"
		    })
            .when("/forum-directory", {
			templateUrl: "../view/directory.html"
		    })
		    .when("/forum-post", {
			templateUrl: "../view/forum-post.html"
	});
})
	.controller("insert-controller-here", function(){ 
    });