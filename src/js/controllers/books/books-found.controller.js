angular
  .module('angularAuthentication')
  .controller('BooksFoundCtrl', BooksFoundCtrl);

BooksFoundCtrl.$inject = ['$state'];
function BooksFoundCtrl($state) {
  const vm = this;
  vm.findBook = findBook;
  function findBook() {
    
    $state.go('booksShow', { shortId: vm.shortId });
  }

}
