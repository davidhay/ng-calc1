var app = angular.module('calcApp', []);

//Service - will be called with new.
app.service('testService', function() {
	var time = new Date();
	console.log('testService created first time @ '+ time);
	this.sayHello = function(text) {
		console.log('time testService created @ ' + time);
		return "Service says \"Hello " + text + "\"";
	};
});

//Factory
app.factory('testFactory', function() {
	var time = new Date();
	console.log('testFactory created at '+ time);
	return {
		sayHello : function(text) {
			return "Factory says \"Hello " + text + "\"";
		}
	};
});
