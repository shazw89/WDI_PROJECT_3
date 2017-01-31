angular
  .module('angularAuthentication')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('booksNew', {
    url: '/books/new',
    templateUrl: '/js/views/books/booksNew.html',
    controller: 'BooksNewCtrl',
    controllerAs: 'books'
  })
  .state('booksIndex', {
    url: '/books/index',
    templateUrl: '/js/views/books/booksIndex.html',
    controller: 'BooksIndexCtrl',
    controllerAs: 'booksIndex'
  })
  .state('BooksRegister', {
    url: '/books/:id/register',
    templateUrl: '/js/views/books/BooksRegister.html',
    params: {
      book: null,
      id: null
    },
    controller: 'BooksRegisterCtrl',
    controllerAs: 'BooksRegister'
  });

  $urlRouterProvider.otherwise('/');
}
