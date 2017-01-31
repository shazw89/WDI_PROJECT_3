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

  function addBook() {
    Book
      .save(vm.book).$promise
      .then(res => {
        $state.go('booksIndex');
      });
  }

  function selectBook() {
    vm.showBook = true;
  }

  function chooseBook($item, $model, $label){
    vm.book = $item;
    // console.log(vm.book);
  }

  function searchGoogle(val) {
    return $http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&key=AIzaSyBGIar1-BqChkNiJtRCpfftuSdR5j8kHd4&fields=items`).then(function(response){
      return response.data.items.map(function(item) {
        return {
          label: item.volumeInfo.title,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors[0],
          image: item.volumeInfo.imageLinks.thumbnail,
          description: item.volumeInfo.description,
          googleId: item.id,
          user: CurrentUserService.currentUser._id
          // entries: []
        };
      });
    });
  }
}


  // function addBook() {
  //   const user = CurrentUserService.currentUser;
  //   const book = {
  //     title: vm.book.volumeInfo.title,
  //     author: vm.book.volumeInfo.authors[0],
  //     image: vm.book.volumeInfo.imageLinks.thumbnail,
  //     description: vm.book.volumeInfo.description,
  //     googleId: $stateParams.id,
  //     user: user._id,
  //     // entries: [vm.entry]
  //   };
  //   Book.save(book).$promise
  //   .then(res => {
  //     $state.go('booksShow', { shortId: res.shortId });
  //   });
  // }



  //
  // vm.selectBook = function(book) {
  //   $state.go('BooksRegister', {book: book, id: book.id});
  // };
  //
  // vm.search = function() {
  //   $http
  //     .get(`https://www.googleapis.com/books/v1/volumes?q=${vm.newBook.searchTerm}&key=AIzaSyBGIar1-BqChkNiJtRCpfftuSdR5j8kHd4&fields=items`)
  //     .then(response => {
  //       vm.bookResults = response;
  //       console.log('response :', vm.bookResults);
  //       console.log(vm.bookResults.data.items);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
