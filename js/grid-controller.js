var app=angular.module('calcApp');   // This syntax get the module
app.controller('GridController', function($scope, $http, params, testFactory, testService, meta, initData) {
	var ROW_LIMIT=params.row_limit;

	console.log('GridController constructor. start.');

	console.log(testFactory.sayHello("f-one"));
	console.log(testFactory.sayHello("f-two"));
	console.log(testFactory.sayHello("f-three"));
	
	console.log(testService.sayHello("s-one"));
	console.log(testService.sayHello("s-two"));
	console.log(testService.sayHello("s-three"));

	var grid = new Rows(2);
	grid.left = grid.colOps(0);
	grid.right = grid.colOps(1);

	for(var i=0;i<initData.left.length;i++){
		grid.left.add(initData.left[i]);
	}
	for(var i=0;i<initData.right.length;i++){
		grid.right.add(initData.right[i]);
	}


	var showLeft = function(){
		return grid.left.length() < ROW_LIMIT;
	};
	var showRight = function(){
		return grid.right.length() < ROW_LIMIT;
	};
	$scope.showLeft = showLeft();
	$scope.showRight = showRight();

    $scope.$watch(showLeft, function(newVal,oldVal) {    	
        $scope.showLeft = newVal;
    });
    $scope.$watch(showRight, function(newVal,oldVal) {       
       $scope.showRight = newVal;
    });

	$scope.grid = grid;
	console.log('GridController constructor. fin.');
});
var columnController = function(isLeft) {
	var result = function($scope, $http) {
		console.log('ColumnController constructor. start. isLeft?', isLeft);
		$scope.ctx = isLeft ? $scope.grid.left : $scope.grid.right;
	};
	return result;
};
app.controller('LeftColumnController', columnController(true));
app.controller('RightColumnController', columnController(false));
