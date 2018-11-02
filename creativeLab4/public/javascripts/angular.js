var myApp = window.angular.model('myApp');

myApp.factory('myFactory', myFactory)
myApp.controller('myCtrl', myCtrl)

function myFactory ($http) {
var API_ROOT = '/woeid';
var cityWoeId;
return {
    get: function() {
        return $http
        .get(API_ROOT)
        .then(function (resp) {
            console.log("Searching Woe ID");
            console.log(resp.data.woeid);
            return resp.data.woeid;
        });
    
    }
};
}