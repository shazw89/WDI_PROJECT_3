angular
  .module('angularAuthentication')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'User', '$window', '$state'];
function CurrentUserService(TokenService, $rootScope, User, $window, $state) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();

    if (decoded) {
      User
        .get({ id: decoded.id }).$promise
        .then(data => {
          self.currentUser = data;
          $rootScope.$broadcast('loggedIn');

          console.log(self.currentUser);
        });
    }
  };
  self.getUser();
  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
  };



}
