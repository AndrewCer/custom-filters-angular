
app.controller('HomeController', function ($scope) {
  $scope.KebabeBaby = function () {
    console.log($scope.userInput);
    $scope.textToKebab = $scope.userInput
  }
})
