angular
  .module('angularAuthentication')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Book'];
function UsersShowCtrl(User, $stateParams, Book){
  const vm = this;
  User
    .get($stateParams).$promise
    .then((response) => {
      vm.user = response;
      vm.numberOfSlides = (vm.user.books.length >= 5)? 5 : 3;
    });



  const mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(51.5085300,-0.1257400),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"stylers":[{"hue":"#dd0d0d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]}]
  };
  vm.map = new google.maps.Map(document.getElementById('mapProfile'), mapOptions);
}
