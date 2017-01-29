angular
  .module('angularAuthentication')
  .controller('RegisterBookCtrl', RegisterBookCtrl);

RegisterBookCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state'];
function RegisterBookCtrl(User, CurrentUserService, Book, $state){
  const vm = this;

  vm.register = () => {
    Book
    .register(vm.book)
    .$promise
    .then(data => {
      CurrentUserService.getUser();
      $state.go('booksCreate');

    }, err => {
      console.log(err);
    });

  };
}
