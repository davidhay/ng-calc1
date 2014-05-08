var app=angular.module('calcApp');   // This syntax get the module
app.controller('HelloController', ["greeter","$scope", function(greeter,$scope) {		
	$scope.greet = function() {		
		var result;
		if($scope.name){			
			result =  greeter.greet($scope.name);
		} else {
			result = "";
		}
		return result;
	};
}]);