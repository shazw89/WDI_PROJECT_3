angular
  .module('angularAuthentication')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', 'Book'];
function UsersShowCtrl(User, $stateParams, Book){
  const vm = this;
  vm.user = User.get($stateParams);
  console.log('This is the user object: ', vm.user);
}
