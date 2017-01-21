angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.urlCheck = function(url) {
    if (!Links.validate(url)) {
      $scope.urlError = true;
    } else {
      $scope.urlError = false;
    }
  };
  $scope.urlError = false;
  $scope.errorMessage = false;
  $scope.addLink = function(url) {
    if (!$scope.urlError) {
      Links.addOne(url);
      $scope.url = '';
      $scope.errorMessage = false;
    } else {
      $scope.errorMessage = true;
    }
  };
});
