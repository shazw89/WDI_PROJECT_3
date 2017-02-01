angular
  .module('angularAuthentication')
  .controller('BooksShowCtrl', BooksShowCtrl);

BooksShowCtrl.$inject = ['$stateParams', 'Book', '$state'];
function BooksShowCtrl($stateParams, Book){
  const vm = this;
  vm.found = $stateParams.found;

  Book
    .get({ shortId: $stateParams.shortId }).$promise
    .then((response) => {
      vm.book = response;
      // console.log(vm.book);
    });

  vm.updateEntries = updateEntries;

  function updateEntries() {
    vm.book.entries.push(vm.entry);
    Book.update({shortId: $stateParams.shortId}, vm.book);
    vm.entry = {};
  }

}
