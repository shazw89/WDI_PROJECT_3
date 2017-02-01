angular
.module('angularAuthentication')
.controller('BooksNewCtrl', BooksNewCtrl);

BooksNewCtrl.$inject = ['User', 'CurrentUserService', 'Book', '$state','$http'];
function BooksNewCtrl(User, CurrentUserService, Book, $state, $http){
  const vm = this;
  vm.chooseBook       = chooseBook;
  vm.searchGoogle     = searchGoogle;
  vm.selectBook       = selectBook;
  vm.addBook          = addBook;
  vm.showBook         = false;
  vm.bookChosen       = false;

  function addBook() {
    Book
    .save(vm.book).$promise
    .then(() => {
      $state.go('booksIndex');
    });
  }

  function selectBook() {
    if (vm.bookChosen) vm.showBook = true;
  }

  function chooseBook($item){
    vm.bookChosen = true;
    vm.book = $item;
  }

  const alicea = ['AIzaSyBGIar1-BqChkNiJtRCpfftuSdR5j8kHd4','AIzaSyDX2sqMuT_3IultHEzBNB6pfWT_TnYS5xs'];

  function searchGoogle(val) {
    const randomAlicea = alicea[Math.floor(Math.random()*alicea.length)];
    return $http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&key=${randomAlicea}&fields=items`).then(function(response){
      return response.data.items.filter(function(item) {
        return (item.volumeInfo.authors && item.volumeInfo.title);
      }).map(function(item) {
        return {
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors[0],
          image: item.volumeInfo.imageLinks.thumbnail || false,
          description: item.volumeInfo.description || false,
          googleId: item.id || 'NA',
          user: CurrentUserService.currentUser._id,
          entries: []
        };
      });
    });
  }
}
