angular
  .module('angularAuthentication')
  .controller('BooksNewCtrl', BooksNewCtrl);

BooksNewCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state','$http'];
function BooksNewCtrl(User, CurrentUserService, Book, $state, $http){
  const vm = this;
  vm.newBook = {};

  vm.create = function() {
    vm.newBook.addedByUser = CurrentUserService.currentUser._id;
    Book.save(vm.newBook);
  };

  vm.search = function() {
    $http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${vm.newBook.searchTerm}&key=AIzaSyBGIar1-BqChkNiJtRCpfftuSdR5j8kHd4&fields=items`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
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
