var app = angular.module("housingApp");

app.controller("menuCtrl", ["$scope", function($scope){
    
    $scope.detailsIsClicked = false;
    
    $scope.showDetailsFilter = function(){
        $scope.detailsIsClicked = true;
    };
    
    $scope.rentIsClicked = false;
    
    $scope.showRentFilter = function(){
        $scope.rentIsClicked = true;
    };
    
    $scope.amenitiesIsClicked = false;
    
    $scope.showAmenitiesFilter = function(){
        $scope.amenitiesIsClicked = true;
    };
        
}]);