angular
  .module('angularAuthentication')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  vm.user = User.get($stateParams);
}
