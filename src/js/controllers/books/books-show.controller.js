angular
.module('angularAuthentication')
.controller('BooksShowCtrl', BooksShowCtrl);

BooksShowCtrl.$inject = ['$stateParams', 'Book', '$state', '$http', 'TokenService'];
function BooksShowCtrl($stateParams, Book, $state, $http, TokenService){
  const vm = this;
  const infoWindows = [];
  vm.found = $stateParams.found;
  vm.created = $stateParams.created;
  console.log(TokenService.decodeToken().id);

  Book
  .get({ shortId: $stateParams.shortId }).$promise
  .then((response) => {
    vm.book = response;
    console.log('Data being received: ', vm.book);
    vm.shortId = TokenService.decodeToken().id === vm.book.user ? vm.book.shortId : false;
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
          <h6><strong>${vm.book.title}</strong></h6>
          <p>
          <img src="${ vm.book.image }">
          </p>
          <p><em>Found by: </em>${entry.name} ${(entry.date)? 'on ' + new Date(entry.date).toDateString() : ''}</p>
          `
        });
        if (infoWindows[0]) infoWindows[0].close();
        infoWindows.pop();
        infoWindow.open(vm.map, marker);
        infoWindows.push(infoWindow);
      });
    }
  });

  const mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(51.5085300,-0.1257400),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"1.00"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"color":"#ba5858"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"color":"#e57878"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"lightness":"65"},{"saturation":"-100"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"},{"saturation":"-100"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"},{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"hue":"#ff0036"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"}]}]
  };

  vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  vm.markers = [];

  vm.updateEntries = updateEntries;

  function updateEntries() {
    console.log('Data being posted: ', vm.entry);

    $http
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=Hammersmith&components=administrative_area:England&key=AIzaSyAzPfoyVbxG2oz378kpMkMszn2XtZn-1SU`)
    .then(function(response) {
      vm.entry.lat = response.data.results[0].geometry.location.lat;
      vm.entry.lng = response.data.results[0].geometry.location.lng;
      vm.entry.date = Date.now();
      vm.book.entries.push(vm.entry);
      Book.update({shortId: $stateParams.shortId}, vm.book);
      vm.entry = {};
    });
  }
}
