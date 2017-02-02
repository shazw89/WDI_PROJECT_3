angular
.module('angularAuthentication')
.controller('BooksIndexCtrl', BooksIndexCtrl);

BooksIndexCtrl.$inject = ['Book', 'User'];
function BooksIndexCtrl(Book, User){
  const vm = this;
  const infoWindows = [];
  
  User.query().$promise
    .then(response => {
      vm.users = response;
    });

  Book.query().$promise
  .then(response => {
    vm.books = response;
    // for (const book of vm.books) {
    //   for (const entry of book.entries) {
    //     const latlng = new google.maps.LatLng(entry.lat, entry.lng);
    //     const marker = new google.maps.Marker({
    //       position: latlng,
    //       map: vm.map
    //     });
    //     vm.markers.push(marker);
    //     google.maps.event.addListener(marker, 'click', () => {
    //       const infoWindow = new google.maps.InfoWindow({
    //         content: `
    //         <h6>${book.title}</h6>
    //         <p>${entry.name}</p>
    //         `
    //       });
    //       if (infoWindows[0]) infoWindows[0].close();
    //       infoWindows.pop();
    //       infoWindow.open(vm.map, marker);
    //       infoWindows.push(infoWindow);
    //     });
    //   }
    // }
  });

  // const mapOptions = {
  //   zoom: 11,
  //   center: new google.maps.LatLng(51.5085300,-0.1257400),
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // };
  //
  // vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //
  // vm.markers = [];



}
