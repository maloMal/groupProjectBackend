// Define the `assApp` module
var myApp = angular.module('assApp');

var listOfLeaders = {
    "BestPlayer1" : 0,
    "BestPlayer2" : 0,
    "BestPlayer3" : 0,
    "BestPlayer4" : 0,
    "BestPlayer5" : 0,
    "BestPlayer6" : 0,
    "BestPlayer7" : 0,
    "BestPlayer8" : 0,
    "BestPlayer9" : 0,
    "BestPlayer10" : 0,
};

myApp.controller('LeaderController', ['$scope', function($scope){
    for(var key in listOfLeaders){
        var testPlayer = player.find({}{'highscore'});
        if(player.find({}{"highscore"}) > listOfLeaders[key]){
            listOfLeaders[key] = testPlayer
        }
    }
    $scope.leaders = list0fLeaders; //use scoreController to add top 10 leaders here
}]);