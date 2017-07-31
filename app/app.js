var app = angular.module('myApp', []);
app.controller("myCtrl", ($scope) => {
	$scope.status = "";
	$scope.card__number_bullets = "card__number_bullets";
	$scope.huge_points = "huge_points";
	$scope.huge_points_cvc = "huge_points_cvc";

	$scope.validateNumber= () => {
		var cardCode = $scope.number.replace(/[^\d]/g, '').substring(0,16);
		$scope.number = cardCode;
		cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
		$scope.creditNumber = cardCode;
		if ($scope.number === ""){
			$scope.card__number_bullets="card__number_bullets";
		}
		else $scope.card__number_bullets = "card__number";

		if(/^(34)|^(37)/.test($scope.number)) {
			$scope.status = "express";
			$scope.background = "green";
		}
		else if(/^5[1-5]/.test($scope.number)) {
			$scope.status = "master";
			$scope.background = "aqua";
		}
		else if (/^4/.test($scope.number)) {
			$scope.status = "visa";
			$scope.background = "blue";
		}
		else {
			$scope.status = "hide";
			$scope.background = "grey";
		}
	};

	$scope.validateMonth = () => {
		if($scope.date !== ""){
			var cardDate = $scope.date.replace(/[^\d]/g, '').substring(0,4);
			cardDate = cardDate !== '' ? cardDate.match(/.{1,2}/g).join('/') : '';
			$scope.creditDate = cardDate;
			$scope.date = cardDate;
			$scope.huge_points = "";
			($scope.date ==="") ? $scope.huge_points="huge_points" : "";
		}
		else {
			$scope.huge_points = "huge_points";
			$scope.creditDate = "";
		}
	};

	$scope.validateCVC = () => {
		if($scope.cvc !== ""){
			$scope.huge_points_cvc = "";
			$scope.cvc = $scope.cvc.replace(/[^\d]/g, '').substring(0,3);
			($scope.cvc === "") ? $scope.huge_points_cvc = "huge_points_cvc" : "";
		}
		else {
			$scope.huge_points_cvc = "huge_points_cvc";
		}
	};

	$scope.showCVC = () => {
		$scope.flip = "flip";
	};
	$scope.hideCVC = () => {
		$scope.flip = "";
	};
});
