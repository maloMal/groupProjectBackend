angular.
  module('assApp').
  component('leader', {
    template:
        '<div class="container leader>' +
          '<div class="row" ng-repeat="leader in $ctrl.leaders">' +
            '<h1>LEADERBOARD</h1>'
            '<div class="row">{{leader.rank}}</div>'
            '<div class="row">{{leader.name}}</div>' +
            '<div class="row">{{leader.score}}</div>' +
          '</div>' +
        '</div>',
    controller: function LeaderController() {
      this.leaders = [
        {
          rank: req.rank.leader,
          name: req.name.leader,
          score: req.score.leader
        }
      ];
    }
  });