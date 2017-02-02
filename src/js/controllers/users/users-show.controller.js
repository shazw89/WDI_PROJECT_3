angular
  .module('angularAuthentication')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Book'];
function UsersShowCtrl(User, $stateParams, Book){
  const vm = this;
  const infoWindows = [];
  vm.markers = [];

  User
    .get($stateParams).$promise
    .then((response) => {
      vm.user = response;
      vm.numberOfSlides = (vm.user.books.length >= 5)? 5 : 3;
      for (const book of vm.user.books) {
        const lastEntry = book.entries[book.entries.length-1];
        if (lastEntry) {
          const latlng = new google.maps.LatLng(lastEntry.lat, lastEntry.lng);
          const marker = new google.maps.Marker({
            position: latlng,
            map: vm.map
          });
          vm.markers.push(marker);
          google.maps.event.addListener(marker, 'click', () => {
            const infoWindow = new google.maps.InfoWindow({
              content: `
              <h6 class="infoWindowText"><strong>${book.title}</strong></h6>
              <p class="infoWindowText"><em>Last entry by ${lastEntry.name} on ${new Date(lastEntry.date).toDateString()}: </em><br> ${lastEntry.message}</p>
              `
            });
            if (infoWindows[0]) infoWindows[0].close();
            infoWindows.pop();
            infoWindow.open(vm.map, marker);
            infoWindows.push(infoWindow);
          });
        }
      }
    });



  const mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(51.5085300,-0.1257400),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"1.00"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"color":"#ba5858"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"color":"#e57878"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"lightness":"65"},{"saturation":"-100"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"},{"saturation":"-100"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"},{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"hue":"#ff0036"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"}]}]
  };
  vm.map = new google.maps.Map(document.getElementById('mapProfile'), mapOptions);
}
