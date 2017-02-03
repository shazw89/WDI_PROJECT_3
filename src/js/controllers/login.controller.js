angular
  .module('angularAuthentication')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User.login(vm.user)
    .$promise
    .then(data => {
      CurrentUserService.getUser();
      $state.go('booksIndex');
    }, err => {
      vm.message = 'Invalid password or user e-mail. Try again.';
    });
  };

}
