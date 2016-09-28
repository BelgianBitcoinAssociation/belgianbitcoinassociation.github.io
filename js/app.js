var app = angular.module('app', []).config(function($routeProvider) {

	/*App Routes*/

	$routeProvider.when('/home',{
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	});

	$routeProvider.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	});

	$routeProvider.when('/members', {
		templateUrl: 'templates/members.html',
		controller: 'membersController'
	});

	$routeProvider.when('/press', {
		templateUrl: 'templates/press.html',
		controller: 'pressController'
	}); 

	$routeProvider.otherwise({redirectTo : '/home'});
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})


/*Page Controllers*/

app.controller('pageController', function($scope, $location){
  $scope.isActive = function (viewLocation) {
    return (viewLocation === $location.path());
  };
});

/*Directives*/
