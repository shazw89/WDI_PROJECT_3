angular
  .module('angularAuthentication')
  .controller('BooksShowCtrl', BooksShowCtrl);

BooksShowCtrl.$inject = ['$stateParams', 'Book', '$state', '$http'];
function BooksShowCtrl($stateParams, Book, $state, $http){
  const vm = this;
  const infoWindows = [];
  vm.found = $stateParams.found;

  Book
    .get({ shortId: $stateParams.shortId }).$promise
    .then((response) => {
      vm.book = response;
      console.log(vm.book);
      // for (const book of vm.books) {
        for (const entry of vm.book.entries) {
          const latlng = new google.maps.LatLng(entry.lat, entry.lng);
          const marker = new google.maps.Marker({
            position: latlng,
            map: vm.map
          });
          vm.markers.push(marker);
          google.maps.event.addListener(marker, 'click', () => {
            const infoWindow = new google.maps.InfoWindow({
              content: `
              <h6>${vm.book.title}</h6>
              <p>${entry.name}</p>
              `
            });
            if (infoWindows[0]) infoWindows[0].close();
            infoWindows.pop();
            infoWindow.open(vm.map, marker);
            infoWindows.push(infoWindow);
          });
        }
      // }
    });

    const mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(51.5085300,-0.1257400),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    vm.markers = [];

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
