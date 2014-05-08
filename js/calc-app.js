var app = angular.module('calcApp', []);

//Service - will be called with new but only once.
app.service('testService', function() {
	var time = new Date();
	console.log('testService created first time @ '+ time);
	this.sayHello = function(text) {
		console.log('time testService created @ ' + time);
		return "Service says \"Hello " + text + "\"";
	};
});

//Factory - the factory returns the singleton.
app.factory('testFactory', function() {
	var time = new Date();
	console.log('testFactory created at '+ time);
	return {
		sayHello : function(text) {
			return "Factory says \"Hello " + text + "\"";
		}
	};
});
//Provider - produces a singleton which can be configured once!
var greeterProvider = app.provider('greeter', function(){
	var that = this;	
	that.fn = function(name) {
		return 'hi there' + name;		
	};
	that.setHelloFn = function(fun) {
		that.fn = fun;
	};
	that.$get = function() {
		var temp = function(name) {	
			return that.fn(name);
		};
		return {greet : temp};
	};	
});
app.config(["greeterProvider", function(greeterProvider) {	
	var hola = function(name){
		return "Hola! " +name;
	};
	greeterProvider.setHelloFn(hola);
}]);

