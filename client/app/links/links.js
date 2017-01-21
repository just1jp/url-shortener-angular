angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.data.links = [];
  Links.getAll().then(function(urls) {
    if (urls) {
      $scope.data.links = urls;
    }
  });
});
