angular
.module('angularAuthentication')
.controller('BooksIndexCtrl', BooksIndexCtrl);

BooksIndexCtrl.$inject = ['Book', 'User'];
function BooksIndexCtrl(Book, User){
  const vm = this;
  const infoWindows = [];
  vm.showButton;
  vm.increment = 10;
  vm.limit = vm.increment;

  vm.increaseLimit = () => {
    vm.limit += vm.increment;
    vm.showButton = vm.limit < vm.books.length;
  };

  User.query().$promise
    .then(response => {
      vm.users = response;
    });

  Book.query().$promise
  .then(response => {
    console.log(response);
    vm.books = response;
    vm.showButton = vm.limit <= vm.books.length;
  });

  vm.showBookInfo = showBookInfo;
  vm.showUserInfo = showUserInfo;
  vm.showBook = false;
  vm.showUser = false;
  function showBookInfo(book) {
    vm.showBook = true;
    vm.chosenBook = book;
  }
  function showUserInfo(user) {
    vm.showUser = true;
    vm.chosenUser = user;
  }

}
