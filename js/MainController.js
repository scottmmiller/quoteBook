var app = angular.module('quoteBook');

app.controller('MainController', function($scope, dataService) {

	$scope.test = 'Do you see me?!';

	$scope.getQuotes = function() {
		$scope.quote = dataService.getData();
	};

	
	/*BUTTON FUNCTIONS*/

	$scope.addButton = function() {
		dataService.addData($scope.newQuote.text, $scope.newQuote.author);
		$scope.newQuote.text = '';
		$scope.newQuote.author = '';
	};

	$scope.removeButton = function() {
		dataService.removeData($scope.newQuote.text, $scope.newQuote.author);
		$scope.newQuote.text = '';
		$scope.newQuote.author = '';
	};

	/*SHOW/HIDE*/

	$scope.showAdd = function() {
		$scope.showAdd = !$scope.showAdd;
		$scope.showFilter = false;
		$scope.showRemove = false;
	};

	$scope.showRemove = function() {
		$scope.showAdd = false;
		$scope.showFilter = false;
		$scope.showRemove = !$scope.showRemove;
	}


	$scope.showFilter = function() {
		$scope.showAdd = false;
		$scope.showFilter = !$scope.showFilter;
		$scope.showRemove = false;
	};


	$scope.getQuotes();

});