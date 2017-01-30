angular
  .module('angularAuthentication', ['slick'])
  .controller('BooksIndexCtrl', BooksIndexCtrl);

  BooksIndexCtrl.$inject = ['Book'];
  function BooksIndexCtrl(Book){
    const vm = this;
    vm.books = Book.query();
  }
