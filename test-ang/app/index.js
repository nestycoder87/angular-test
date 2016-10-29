var angular = require('angular');
//var angular_route = ;
var appp = angular.module('app', [require('angular-route')]);
appp.directive('nestySpinner', function () {
  return{
    template: '<div class="overlay se"> <img  class="avatar" height="20" src="loading45.gif" width="20"></img> </div>'
  }
})

appp.controller('FirstController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
appp.controller('bodyController', ['$scope', function($scope) {

  $scope.$on('$viewContentLoaded', function(){

  setTimeout(function(){

    $('.overlay').addClass('loaded');

}, 2000);

  });
}]);

appp.controller("albumsController", function($scope) {
//  alert('msg');
  $scope.records = [
    {  date: "1/10/2012", name: "Alfreds Futterkiste", title:"aNever Gone", cover:"se"},
    {  date: "12/10/2012", name:"Fernand Snabbköp", title:"se", cover:"bNever Gone"},
    {  date: "11/10/2012", name:"Zentro Comercial Moctezuma", title:"cNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "9/10/2012", name:"Alfreds Futterkiste", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"},
    {  date: "8/10/2012", name:"Ernst Handel", title:"dNever Gone", cover:"se"}


  ],
  $scope.sortName = function () {
  //  alert('msg');
  //  $scope.records = [  {  date: "10/10/2012", name: "Alfreds Futterkiste", title:"se", cover:"se"}]
  var byName =   $scope.records.slice(0);
  byName.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  $scope.records = byName;
  },
  $scope.sortAlbum = function () {

  var byAlbum =   $scope.records.slice(0);
  byAlbum.sort(function(a,b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  $scope.records = byAlbum;
  },

  $scope.sortDate = function () {
  //  alert('msg');
    var byDate = $scope.records.slice(0);
    byDate.sort(function(a,b) {

    console.log(new Date(a.date).getTime());
    return new Date(a.date).getTime() - new Date(b.date).getTime()

});
  $scope.records = byDate;
}
});

appp.config(function($routeProvider) {
  console.log($routeProvider);
	$routeProvider.when('/red', {
			template: '<div>Lorem Ipsum<div>',
  controller: "FirstController"

}).when('/2', {
			templateUrl: 'view2.html',
      controller: "FirstController"

		})
		.otherwise({
			redirectTo: '/red',
  controller: "FirstController"
});
});
