'use strict';

var myShroom = angular.module('app', []);

console.log("myshroom", myShroom);

myShroom.factory('ShroomFactory', function($q, $http) {
    function getShrooms() {
    	console.log("get shrooms running");
        return $q( (resolve, reject) => {
            $http.get('mushroom.json')
            .then( (shrooms) => {
            	console.log("shrooms", shrooms);
                resolve(shrooms);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    }
    return { getShrooms };
});


myShroom.controller('ShroomController', function($scope, ShroomFactory) {
    $scope.shroomArr = [];
    ShroomFactory.getShrooms()
    .then( (shroomsData) => {
        console.log("shroomsdata", shroomsData);
        let shroomList = shroomsData.data.mushrooms;
        console.log("shroomList", shroomList);
        angular.forEach(shroomList, function(shroomshroom){
        	$scope.shroomArr.push(shroomshroom);
        });
        console.log("shroomarr", $scope.shroomArr);
    });
});