angular
  .module('angularAuthentication')
  .factory('Book', bookFactory);

bookFactory.$inject = ['API', '$resource'];
function bookFactory(API, $resource){
  return $resource(`${API}/books/:shortId`,
    { shortId: '@shortId' },
    { 'update': { method: 'PUT' } }
);
}
