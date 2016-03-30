(function() {
  var notelyApp = angular.module('notely', [
    'ui.router',
    'notely.notes'
  ]);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }

  config.$inject = ['$urlRouterProvider'];
  notelyApp.config(config);
})();
