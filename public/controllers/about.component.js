angular.
  module('assApp').
  component('about', {
    template:
        '<ul>' +
          '<li ng-repeat="about in $ctrl.abouts">' +
            '<span>{{about.name}}</span>' +
            '<p>{{about.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function AboutController() {
      this.abouts = [
        {
          name: 'Malcolm Brunson',
          snippet: 'I am a'
        }, {
          name: 'Guessan G. Effi',
          snippet: 'I am a'
        }, {
          name: 'Malcolm Holliday',
          snippet: 'I am a'
        }, {
          name: 'Rene Pereyra',
          snippet: 'I am a'
        } 
      ];
    }
  });