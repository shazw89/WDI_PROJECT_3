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


    });
  console.log('This is the user object: ', vm.user);



  const mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(51.5085300,-0.1257400),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  vm.map = new google.maps.Map(document.getElementById('mapProfile'), mapOptions);

}
