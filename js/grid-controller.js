var GridController = function($scope, $http) {
	console.log('initialising!!!!');

	var grid = new Rows(2);
	grid.left = grid.colOps(0);
	grid.right = grid.colOps(1);

	//initialise model
	for(var i=0;i<10;i++){
		grid.left.add(i+1);	
		grid.right.add((i+1)*2);
	}
	
	$scope.grid = grid;
	console.log('GridControlled loaded',$scope.grid);
	console.log('GridControlled loaded',$scope.grid.rows);
	console.log('GridControlled loaded',$scope.grid.left.length());
	console.log('GridControlled loaded',$scope.grid.right.length());
};
