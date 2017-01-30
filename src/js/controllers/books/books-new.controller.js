angular
  .module('angularAuthentication')
  .controller('BooksNewCtrl', BooksNewCtrl);

BooksNewCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state'];
function BooksNewCtrl(User, CurrentUserService, Book, $state){
  const vm = this;
  vm.newBook = {};

  vm.create = function() {
    vm.newBook.addedByUser = CurrentUserService.currentUser._id;
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
