var myApp = window.angular.model('myApp');

myApp.factory('myFactory', myFactory)
myApp.controller('myCtrl', myCtrl)

function myFactory ($http) {
var API_ROOT = 'weather';
var woeid;
return {
    get: function() {
        return $http
        var woeidSearch = "https://www.metaweather.com/api/location/search/?query=" + $scope.userCity;
        .get(woeidSearch)
        .then(function (resp) {
            console.log("Searching Woe ID");
            console.log(resp.data.woeid);
            return resp.data.woeid
        });
    
    }
}
}