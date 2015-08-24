
app.controller('HomeController', function ($scope) {
  $scope.KebabeBaby = function () {
    console.log($scope.userInput);
    $scope.textToKebab = $scope.userInput
  }
})


app.controller('ServiceController', function ($scope, $http) {
  // $http.get('https://api.github.com/zen')
  // .then(function (data) {
  //   $scope.zenWis = data.data
  // })

  //!!!!!!!
  //error handeling of get request
  //!!!!
  $http.get('https://itunes.apple.com/search?term=jack+johnson')
  .then(function(response) {
        console.log('get',response)
    },
    function(data) {
        if (data.status == 0) {
          $scope.errors = 'Whoops, something went wrong'
        }
    })
  // $http.get('/itunes.json')
  // .then(function (data) {
  //   var holderArray = [];
  //   console.log(data.data.results);
  //   for (var i = 0; i < data.data.results.length; i++) {
  //     holderArray.push(data.data.results[i].collectionName)
  //   }
  //   $scope.titles = holderArray
  // })
})
