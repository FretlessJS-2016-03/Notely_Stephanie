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
            alert('aww, snap:' + response);
          }
        );
    };

    _this.getNotes = function() {
      return _this.notes;
    };
  }
}());
