angular
  .module('angularAuthentication')
  .controller('BooksShowCtrl', BooksShowCtrl);

BooksShowCtrl.$inject = ['$stateParams', 'Book'];
function BooksShowCtrl($stateParams, Book){
  const vm = this;

  Book
    .get({ id: $stateParams.id}).$promise
    .then((response) => {
      vm.book = response;
      console.log(vm.book);
    });
}
