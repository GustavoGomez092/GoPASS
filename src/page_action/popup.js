

function scrape() {
  chrome.tabs.executeScript({
    file: 'scrape.js'
	}); 
	$scope.$digest()
}

function clear() {
  chrome.tabs.executeScript({
    file: 'clear.js'
	}); 
	$scope.$digest()
}

var app = angular.module("leadsApp", []);

app.controller("leadsList", function($scope) {

	chrome.storage.local.get ('leads', function (result) {
		var leads  = result.leads
		$scope.leads = leads
		
		$scope.total = result.leads.length;
		$scope.$digest()
	});

	chrome.storage.onChanged.addListener(function() {
		chrome.storage.local.get ('leads', function (result) {
			var leads  = result.leads
			$scope.leads = leads
			$scope.total = result.leads.length;
			$scope.$digest()
		});
	});

});







document.getElementById('clickme').addEventListener('click', scrape);
document.getElementById('clickme2').addEventListener('click', clear);






