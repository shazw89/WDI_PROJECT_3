angular
  .module('angularAuthentication')
  .controller('BooksIndexCtrl', BooksIndexCtrl);

BooksIndexCtrl.$inject = ['Book'];
function BooksIndexCtrl(Book){
  const vm = this;
  vm.books = Book.query();
}
