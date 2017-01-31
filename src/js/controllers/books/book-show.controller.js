angular
  .module('angularAuthentication')
  .controller('BooksShowCtrl', BooksShowCtrl);

BooksShowCtrl.$inject = ['Book', '$stateParams'];
function BooksShowCtrl(Book, $stateParams){
  const vm = this;
  console.log('Show reached');
  console.log($stateParams);
  vm.book = $stateParams.book;
}
