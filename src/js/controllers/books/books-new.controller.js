angular
  .module('angularAuthentication')
  .controller('BooksNewCtrl', BooksNewCtrl);

BooksNewCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state'];
function BooksNewCtrl(User, CurrentUserService, Book, $state){
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
