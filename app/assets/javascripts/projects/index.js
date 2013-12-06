angular.module('mainApp').controller('ProjectsShowCtrl', function($scope,$http){
  $http({method: 'GET', url:'segments'}).
  success(function(data){
    $scope.segments = data ;
    console.log($scope.segments);
  }).
  error(function(data){
    console.log('empty');
  });

});/* / controller */
$(document).ready(function() {
  console.log('index-init');
});
