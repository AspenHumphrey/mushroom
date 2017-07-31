'use strict';

var myShroom = angular.module('app', []);

console.log("myshroom", myShroom);

myShroom.factory('ShroomFactory', function($q, $http) {
    function getShrooms() {
    	console.log("get shrooms running");
        return $q( (resolve, reject) => {
            $http.get('./mushroom.json')
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
    ShroomFactory.getShrooms()
    .then( (shroomsData) => {
    	$scope.shroomArr = [];
        $scope.shroomList = shroomsData.data.mushroom;
        angular.forEach($scope.shroomList, function(shroomshroom){
        	$scope.shroomArr.push(shroomshroom);
        });
    });
});