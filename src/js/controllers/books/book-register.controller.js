angular
  .module('angularAuthentication')
  .controller('BooksRegisterCtrl', BooksRegisterCtrl);

BooksRegisterCtrl.$inject = ['Book', '$stateParams', 'CurrentUserService' ];
function BooksRegisterCtrl(Book, $stateParams, CurrentUserService){
  const vm = this;
  console.log('Show reached');
  console.log($stateParams);
  vm.book = $stateParams.book;
  vm.addBook = addBook;

  function addBook() {
    const user = CurrentUserService.currentUser;
    const book = {
      title: vm.book.volumeInfo.title,
      author: vm.book.volumeInfo.authors[0],
      image: vm.book.volumeInfo.imageLinks.thumbnail,
      description: vm.book.volumeInfo.description,
      googleId: $stateParams.id,
      user: user._id,
      entries: [vm.entry]
    };
    Book.save(book);
  }

}
