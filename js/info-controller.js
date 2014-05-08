var app=angular.module('calcApp');   // This syntax get the module
app.value('params',{
	row_limit:3,
	title:"NG APP ONE"
});
app.value('initData', {
		left:[1,2,3,4,5,6,7,8,9],
		right:[123]
});
app.constant('meta',{
	author:'David Hay'
});
app.controller('InfoController', function($scope, params, meta) {
	$scope.params = params;
	$scope.meta = meta;
});
