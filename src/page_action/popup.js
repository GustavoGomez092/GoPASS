

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
}

var app = angular.module("leadsApp", []);

app.controller("leadsList", function($scope) {

 chrome.storage.local.get ('array', async function  (result) {
	var leads  = result.array
	$scope.leads = leads
	$scope.$digest()
	console.log($scope.leads)
});

});







document.getElementById('clickme').addEventListener('click', scrape);
document.getElementById('clickme2').addEventListener('click', clear);






