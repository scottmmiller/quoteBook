var app = angular.module('quoteBook');

app.controller('MainController', function($scope, dataService) {

	$scope.test = 'Do you see me?!';

	$scope.getQuotes = function() {
		$scope.quote = dataService.getData();
	};

	$scope.getQuotes();

	$scope.submitButton = function() {
		dataService.addData($scope.newQuote.text, $scope.newQuote.author);
		$scope.newQuote.text = '';
		$scope.newQuote.author = '';
	};

	$scope.removeButton = function() {
		dataService.removeData($scope.newQuote.text, $scope.newQuote.author);
		$scope.newQuote.text = '';
		$scope.newQuote.author = '';
	};

});