
  angular.module('myApp').controller('LoginController', ['$scope','$rootScope', '$state','$http',function($scope, $rootScope, $state, $http) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {

      var  bAuth = false;

      var url = 'https://swapi.co/api/people/?search=' + $scope.username;
      console.log("url = " + url);
      $http.get(url)
      .then(function(response) {
        var data = response.data;
            if(data.results.length > 0){
               for(var i=0;i<data.results.length;i++ ){
                 console.log(data.results[i]);
                    if( (data.results[i].name.toLowerCase()) == ($scope.username.toLowerCase()) ) {
                         if(data.results[i].birth_year == $scope.password){
                              bAuth = true;
                              break;
                         } 
                    }
               }         

              if(bAuth== true) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
              } else {
                $scope.error = "Incorrect username/password !";
              }                          
  
            }
      });       

    };
    
  }]);
  