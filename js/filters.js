
app.filter('kebab', function () {
  return function (input) {
    return input.replace(/ /g, "-")
  }
});
