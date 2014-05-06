var GridController = function($scope, $http) {
	console.log('GridController constructor. start.');

	var grid = new Rows(2);
	grid.left = grid.colOps(0);
	grid.right = grid.colOps(1);

	for(var i=0;i<9;i++){
		grid.left.add(i+1);	
	}
	for(var i=0;i<1;i++){
		grid.right.add((i+1)*2);
	}

	var ROW_LIMIT=10;

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
};
