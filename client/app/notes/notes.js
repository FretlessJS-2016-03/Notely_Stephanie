(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
  .config(notesConfig);

  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider

      .state('notes', {
        url: '/notes',
        templateUrl: '/notes/notes.html',
        controller: NotesController
      })

      .state('notes.form', {
        url: '/:noteId',
        templateUrl: '/notes/notes-form.html'
      });
  }

  NotesController.$inject = ['$scope', '$state', 'NotesService'];
  function NotesController($scope, $state, NotesService) {
    $scope.note = {};
    // NotesService.fetch(function() {
    //   $scope.Notes = NotesService.getNotes();
    // });
    NotesService.fetch().then(function () {
      $scope.Notes = NotesService.getNotes();
      $scope.note = NotesService.findById($state.params.noteId);
    });

    $scope.save = function() {
      //alert($scope.note.title);
      NotesService.create($scope.note);
    };

    $scope.clearForm = function() {
      $scope.note = {};
    };

    // getting id from url using state
    //$scope.note = NotesService.findById($state.params.noteId);

    $state.go('notes.form');
  }
})();
