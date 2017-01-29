angular
  .module('angularAuthentication')
  .factory('Book', bookFactory);

bookFactory.$inject = ['API', '$resource'];
function bookFactory(API, $resource){
  return $resource(`${API}/books/:id`,
    { id: '@_id'}, {
      'register': {method: 'POST', url: `${API}/register-book`}
    });
}
