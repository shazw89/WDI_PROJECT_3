angular
  .module('angularAuthentication')
  .controller('BooksNewCtrl', BooksNewCtrl);

BooksNewCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state','$http'];
function BooksNewCtrl(User, CurrentUserService, Book, $state, $http){
  const vm = this;
  vm.newBook = {};

  vm.selectBook = function(book) {
    $state.go('BooksRegister', {book: book, id: book.id});
  };

  vm.search = function() {
    $http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${vm.newBook.searchTerm}&key=AIzaSyBGIar1-BqChkNiJtRCpfftuSdR5j8kHd4&fields=items`)
      .then(response => {
        vm.bookResults = response;
        console.log('response :', vm.bookResults);
        console.log(vm.bookResults.data.items);
      })
      .catch(err => {
        console.log(err);
      });
  };
}
