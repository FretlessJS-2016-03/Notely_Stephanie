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
        controller: NotesController,
        resolve: {
          notesLoaded: function(NotesService) {
            return NotesService.fetch();
          }
        }
      })

      .state('notes.form', {
        url: '/:noteId',
        templateUrl: '/notes/notes-form.html',
        controller: NotesFormController
      });
  }

  NotesController.$inject = ['$scope', '$state', 'NotesService'];
  function NotesController($scope, $state, NotesService) {
    // NotesService.fetch(function() {
    //   $scope.Notes = NotesService.getNotes();
    // });

    $scope.note = {};
    $scope.Notes = NotesService.getNotes();

    // getting id from url using state
    //$scope.note = NotesService.findById($state.params.noteId);

    $scope.findById = function(noteId) {
      //alert($scope.note.title);
      alert("in findbyid");
      $scope.note = NotesService.findById(noteId);
    };


    $state.go('notes.form');
  }

  NotesFormController.$inject = ['$scope', '$state', 'NotesService'];
  function NotesFormController($scope, $state, NotesService) {
    $scope.note = NotesService.findById($state.params.noteId);

    $scope.save = function() {
      //alert($scope.note.title);
      NotesService.create($scope.note);
    };


  }

})();
