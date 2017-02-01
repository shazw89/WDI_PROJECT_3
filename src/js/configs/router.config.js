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
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
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
  .state('booksShow', {
    url: '/books/:shortId',
    templateUrl: '/js/views/books/booksShow.html',
    controller: 'BooksShowCtrl',
    controllerAs: 'BooksShow'
  })
  .state('booksIndex', {
    url: '/books',
    templateUrl: '/js/views/books/booksIndex.html',
    controller: 'BooksIndexCtrl',
    controllerAs: 'booksIndex'
  })
  .state('BooksRegister', {
    url: '/books/:id/register',
    templateUrl: '/js/views/books/booksRegister.html',
    params: {
      book: null,
      id: null
    },
    controller: 'BooksRegisterCtrl',
    controllerAs: 'BooksRegister'
  })
  .state('booksFound', {
    url: '/found',
    templateUrl: '/js/views/books/booksFound.html',
    controller: 'BooksFoundCtrl',
    controllerAs: 'booksFound'
  });
  $urlRouterProvider.otherwise('/');
}
