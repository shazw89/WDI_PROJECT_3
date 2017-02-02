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
    styles: [{"stylers":[{"hue":"#dd0d0d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]}]
  };
  vm.map = new google.maps.Map(document.getElementById('mapProfile'), mapOptions);
}
