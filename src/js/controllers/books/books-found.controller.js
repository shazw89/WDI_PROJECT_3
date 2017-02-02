angular
  .module('angularAuthentication')
  .controller('BooksFoundCtrl', BooksFoundCtrl);

BooksFoundCtrl.$inject = ['$state', 'Book'];
function BooksFoundCtrl($state, Book) {
  const vm = this;
  vm.message = null;
  vm.findBook = findBook;
  function findBook() {
    Book
      .get({ shortId: vm.shortId }).$promise
      .then(() => {
        $state.go('booksShow', { shortId: vm.shortId, found: true });
      }).catch( () => {
        vm.message = 'Invalid code. Try again.';
      });
  }

}
