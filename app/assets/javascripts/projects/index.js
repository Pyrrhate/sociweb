angular.module('mainApp').controller('ProjectsShowCtrl', ['$scope', '$http', function($scope,$http){
  $http({method: 'GET', url:'segments'}).
  success(function(data){
    $scope.segments = data ;
    $scope.selected= $scope.segments[0].position;
  }).
  error(function(data){
    console.log('empty');
  });

  // selection segment (style)
  $scope.selectSegment = function(segment){
    $scope.selected=segment.position;
    $("#segmentTranslate").focus();
  };

  // switch btn (all - empty)
  $scope.showMode=true;
  // filter segment (all - empty)
  $scope.filtersegment = function(segment){
    return $scope.showMode==true || ($scope.showMode==false && segment.target=='');
  }
  // next btn
  $scope.emptyN=0;
  // %
  $scope.nextSegment= function(){
    var segments_count = $scope.segments.length;

    for(var i = 0; i < segments_count; i++){
      var index = ($scope.selected + i + 1) % segments_count;
      if ($scope.segments[index].target == '') {
        $scope.selected = index;
        break;
      }
    }
  }
}]);
