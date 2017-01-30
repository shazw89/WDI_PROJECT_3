angular
  .module('angularAuthentication')
  .controller('BooksNewCtrl', BooksNewCtrl);

BooksNewCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state'];
function BooksNewCtrl(User, CurrentUserService, Book, $state){
  const vm = this;
  vm.newBook = {};

  vm.create = function() {
    console.log(vm.newBook);
    Book.save(vm.newBook);
  };

  // vm.register = () => {
  //   Book
  //   .register(vm.book)
  //   .$promise
  //   .then(data => {
  //     CurrentUserService.getUser();
  //     $state.go('booksCreate');
  //
  //   }, err => {
  //     console.log(err);
  //   });
  //
  // };
}
