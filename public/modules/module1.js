
var app = angular.module('module1', ['ngRoute']);


app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'firstController',
      templateUrl: './public/views/view1.html'
    })
    .when('/view2', {
      controller: 'secondController',
      templateUrl: './public/views/view2.html'
    })
    .otherwise({redirectTo: '/'});
});

app.factory('peopleFactory', function(){
  var peeps = [
    {name: "Jose", city: 'LA'},
    {name: "Juan", city: 'SF'},
    {name: "Julio", city: 'SD'},
    {name: "Jorge", city: 'SF'},
  ];

  var factory = {};

  factory.getPeople = function(){
    return peeps;
  }

  return factory;

});

app.service('peopleService', function(){
  var peeps = [
    {name: "Eva", city: 'LA'},
    {name: "Rosa", city: 'SF'},
    {name: "Juana", city: 'SD'},
    {name: "Julia", city: 'SF'},
  ];


  this.getPeople = function(){
    return peeps;
  }
})

var controllers = {
  firstController: function($scope, peopleService){
    $scope.greeting = 'HELLO';

    $scope.peeps = peopleService.getPeople();

  },
  secondController: function($scope, peopleFactory){
    $scope.greeting = 'BYE';
    $scope.peeps = peopleFactory.getPeople();
    $scope.caption = 'First Caption';
    $scope.monies = [1.3,2.451,3,4];
    // $scope.monies = ['aasdf', 'AdDF'];
    $scope.changeCaption = function(){
      $scope.caption = 'NEWCAPTION';
    }
    setTimeout(()=>{ 
      $scope.caption = 'new'; 
      console.log($scope.caption)
    }, 1000 );
  }
};

app.controller(controllers);