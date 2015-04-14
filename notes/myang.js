angular.module("main", [])
	.controller("index", ["$scope", function($scope) {
		// Input boxes as ngModels
		$scope.username;
		$scope.age;
		$scope.email;
		// Dynamic values
		$scope.value = 1;
		$scope.isBold = function () { 
			return $scope.value % 2 === 0; };
		$scope.isItalic = function () { 
			return $scope.value % 3 === 0; };
		$scope.isUnderlined = function () { 
			return $scope.value % 5 === 0; };

	}]);