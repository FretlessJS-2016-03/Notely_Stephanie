(function() {
  angular.module('notely')
    .service('NotesService', NotesService);

  NotesService.$inject = ['$http'];
  function NotesService($http) {
    var _this = this;
    _this.notes = [];

    _this.fetch = function() {
      return $http.get('http://localhost:3030/notes')
        .then(
          // Success
          function(response) {
            _this.notes = response.data;
          },

          // Failure
          function(response) {
            alert('Something went wrong: ' + response);
          }
        );
    };

    _this.getNotes = function() {
      return _this.notes;
    };

    _this.create = function(note) {
      return $http.post('http://localhost:3030/notes', {
        note: note
      }).then(function(response) {
        // using unshift instead of push to put at beginning
        _this.notes.unshift(response.data.note);
      });
    };

  }
}());
