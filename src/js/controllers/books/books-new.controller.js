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
    $http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${vm.location}&components=administrative_area:England&key=AIzaSyAzPfoyVbxG2oz378kpMkMszn2XtZn-1SU`)
      .then(function(response) {
        console.log(response);
        vm.lat = response.data.results[0].geometry.location.lat;
        vm.lng = response.data.results[0].geometry.location.lng;
        vm.book.entries = [];
        vm.book.entries.push({
          name: CurrentUserService.currentUser.username,
          message: vm.message,
          location: vm.location,
          lat: vm.lat,
          lng: vm.lng,
          time: Date.now()
        });
        Book
        .save(vm.book).$promise
        .then(() => {
          $state.go('booksIndex');
        });
      });
  }

  function selectBook() {
    if (vm.bookChosen) vm.showBook = true;
  }

  function chooseBook($item){
    const randomAlicea = alicea[Math.floor(Math.random()*alicea.length)];
    vm.bookChosen = true;
    vm.book = $item;
  }

  const alicea = ['AIzaSyBGIar1-BqChkNiJtRCpfftuSdR5j8kHd4','AIzaSyDX2sqMuT_3IultHEzBNB6pfWT_TnYS5xs'];

  function searchGoogle(val) {
    const randomAlicea = alicea[Math.floor(Math.random()*alicea.length)];
    return $http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}&key=${randomAlicea}&fields=items`).then(function(response){
      return response.data.items.filter(function(item) {
        console.log(item);
        return (item.volumeInfo.authors && item.volumeInfo.title && item.volumeInfo.imageLinks);
      }).map(function(item) {
        return {
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors[0],
          image: item.volumeInfo.imageLinks.thumbnail,
          googleId: item.id || 'NA',
          googleLink: item.selfLink,
          user: CurrentUserService.currentUser._id,
          description: item.volumeInfo.description
        };
      });
    });
  }
}
