angular.module('notely')
  .directive('signUp', () => { // alwasy camelcase name of directives, tags should be dasherized
    class SignUpController {
      constructor(){ // init
        this.user = {};
      }

      submit() {
        console.log(this.user);
      }
    }

    return {
      scope: {},
      controller: SignUpController,
      controllerAs: 'ctrl',
      templateUrl: '/components/sign-up.html'
    };
  });

// ES 6 function() replace with () =>, binds "this" differently
