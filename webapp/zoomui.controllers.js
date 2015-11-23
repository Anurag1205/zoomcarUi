
var nameApp = angular.module('nameApp', ['ngRoute']);
nameApp.config(function($routeProvider) {
$routeProvider.
when('/' ,{
  templateUrl: 'zoom.html',
  controller: 'NameCtrl'
}).
  otherwise({
    redirectTo: '/'
});
});

nameApp.controller('NameCtrl', function ($scope, $http){

    $scope.a=0;
    $scope.products = [];

$http.get('https://zoomcar-ui.0x10.info/api/courier?type=json&query=api_hits').success(function(response) {
  $scope.apiHits = response.api_hits;
});

$http.get('https://zoomcar-ui.0x10.info/api/courier?type=json&query=list_parcel').success(function(response) {
  //console.log(response["parcels"]["0"]["name"]);
  $scope.products = response.parcels;
  //$scope.a = 3;




  $scope.getProductDetails = function(name){
    //console.log("entered");
    //$scope.product = null;
    for(var i=0; i< $scope.products.length; i++){
      //console.log("entered for loop");
      if($scope.products[i].name === name){
        //$scope.product = $scope.products[i];
        $scope.a = i;

      }
    }
    //console.log("assign begins");


  }

  $scope.$watch(
    function() {
      return $scope.a;
    },
    function(){
      $scope.Productname = $scope.products[$scope.a].name;
      $scope.Producthouesehold = $scope.products[$scope.a].type;
      $scope.Productimage = $scope.products[$scope.a].image;
      $scope.Productdate = $scope.products[$scope.a].date;
      $scope.Productquantity = $scope.products[$scope.a].quantity;
      $scope.Productcolor = $scope.products[$scope.a].color;
      $scope.Productprice = $scope.products[$scope.a].price;

      $scope.Productphone = $scope.products[$scope.a].phone;
      $scope.Productweight = $scope.products[$scope.a].weight;
      $scope.lat = $scope.products[$scope.a].live_location.latitude;
      $scope.long = $scope.products[$scope.a].live_location.longitude;

    }
  );

  $scope.Productname = $scope.products[$scope.a].name;
  $scope.Producthouesehold = $scope.products[$scope.a].type;
  $scope.Productimage = $scope.products[$scope.a].image;
  $scope.Productdate = $scope.products[$scope.a].date;
  $scope.Productquantity = $scope.products[$scope.a].quantity;
  $scope.Productcolor = $scope.products[$scope.a].color;
  $scope.Productprice = $scope.products[$scope.a].price;

  $scope.Productphone = $scope.products[$scope.a].phone;
  $scope.Productweight = $scope.products[$scope.a].weight;
  $scope.lat = $scope.products[$scope.a].live_location.latitude;
  $scope.long = $scope.products[$scope.a].live_location.longitude;

});


});
