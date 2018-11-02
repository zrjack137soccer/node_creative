var app = angular.module('myApp', [])
app.controller('myCtrl', function($scope, $http) {
    $scope.forecast = function() {
        $scope.woeidSearch = "/woeid?q=" + $scope.userCity;
        $scope.woeID = "";
        $scope.forecastList = [];
        $http.get($scope.woeidSearch).then(function(response) {
            $scope.woeID = response["data"][0]["woeid"];
            $scope.weatherSearch = "/forecast?q=" + $scope.woeID;
            $http.get($scope.weatherSearch).then(function(response) {
                $scope.forecastList.push(response["data"]["consolidated_weather"][0]);
                $scope.forecastList.push(response["data"]["consolidated_weather"][1]);
                $scope.forecastList.push(response["data"]["consolidated_weather"][2]);
                $scope.forecastList.push(response["data"]["consolidated_weather"][3]);
                $scope.forecastList.push(response["data"]["consolidated_weather"][4]);
                $scope.forecastList.push(response["data"]["consolidated_weather"][5]);
            });
        });
        console.log($scope.forecastList);
    };
})