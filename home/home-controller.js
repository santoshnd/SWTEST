
  angular.module('myApp').controller('HomeController', function($scope, $rootScope, $stateParams, $state, $http) {
    $rootScope.title = "AngularJS Login Sample";

    $scope.planets = [];
    $scope.onSearchPlanets = function(){
         var url = 'https://swapi.co/api/planets/?search=' + $scope.searchTerm ;
         $http.get(url)
         .then(function(response) {

               //console.log(response);

               var data = response.data;
               //console.log(data);

               if(data.results.length){
                 $scope.planets = data.results;
                 //console.log($scope.planets);

               }


         });
    };
  });