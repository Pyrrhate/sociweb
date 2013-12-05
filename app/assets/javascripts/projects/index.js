angular.module('mainApp').controller('ProjectsShowCtrl', function($scope,$http){
  // $scope.segments = [{ name: 'truc' }, { name: 'bidule' }];

  $http({method: 'GET', url:'segments'}).
    success(function(data){
      $scope.segments = data ;
    }).
    error(function(data){
      console.log('empty');
    });

  });



$(document).ready(function() {
console.log('index-init');
});
