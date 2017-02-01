angular
  .module('angularAuthentication')
  .controller('BooksIndexCtrl', BooksIndexCtrl);

BooksIndexCtrl.$inject = ['Book'];
function BooksIndexCtrl(Book){
  const vm = this;

  Book.query().$promise
  .then(response => {
    vm.books = response;
  });
}
