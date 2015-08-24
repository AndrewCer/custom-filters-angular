
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
  // $http.get('https://itunes.apple.com/search?term=jack+johnson')
  // .then(function(response) {
  //       console.log('get',response)
  //   },
  //   function(data) {
  //       if (data.status == 0) {
  //         $scope.errors = 'Whoops, something went wrong'
  //       }
  //   })

    //gschool rails api get call
    // $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    // .then(function (response) {
    //   var holderArray = [];
    //   console.log('get', response.data[0].content);
    //   for (var i = 0; i < response.data.length; i++) {
    //     holderArray.push(response.data[i].content);
    //   }
    //   $scope.titles = holderArray
    // },
    //   function (data) {
    //   console.log(data);
    // })

    //gschool rails api post
    $http.post('https://shielded-peak-6345.herokuapp.com/messages', {name: 'JazzJeff',
      content: 'Jazzy Jeff Reporting for Duty'})
      .then(function(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });

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
