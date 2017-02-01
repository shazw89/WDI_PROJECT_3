angular
  .module('angularAuthentication')
  .controller('BooksShowCtrl', BooksShowCtrl);

BooksShowCtrl.$inject = ['$stateParams', 'Book', '$state', '$http'];
function BooksShowCtrl($stateParams, Book, $state, $http){
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
    console.log(vm.entry);

    $http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=Hammersmith&components=administrative_area:England&key=AIzaSyAzPfoyVbxG2oz378kpMkMszn2XtZn-1SU`)
      .then(function(response) {
        vm.entry.lat = response.data.results[0].geometry.location.lat;
        vm.entry.lng = response.data.results[0].geometry.location.lng;
        vm.entry.time = Date.now();
        vm.book.entries.push(vm.entry);
        Book.update({shortId: $stateParams.shortId}, vm.book);
        vm.entry = {};
      });
  }
}
