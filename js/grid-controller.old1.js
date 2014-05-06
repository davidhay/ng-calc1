var GridController = function($scope, $http) {
	console.log('initialising!!!!');
	var grid = new Grid(2);

	var rows = [];
	
	var updateRows = function(){
		rows.length = 0;	
		for ( var r = 0; r < grid.maxLength(); r++) {
			var row = {};
			row.left = left.get(r);
			row.right = right.get(r);			
			console.log('row',r,'row is',row);
			rows.push(row);
		}		
	};

	var colOpts = function(col) {

		var total = function() {
			return grid.total(col);
		};
		var length = function() {
			return grid.length(col);
		};
		var get = function(row) {
			return grid.get(col, row);
		};

		var add = function(value) {			
			grid.add(col, value);
			updateRows();
		};
		var remove = function(row) {
			grid.remove(col, row);
			updateRows();
		};
		return {
			total : total,
			length : length,
			add : add,
			get : get,
			remove : remove
		};
	};

	var left = colOpts(0);
	var right = colOpts(1);

	//initialise model
	(function(){
		left.add(1);
		left.add(2);
		left.add(3);

		right.add(2);
		right.add(4);
		right.add(6);


		//update rows
		updateRows();
	}());

	//publish mode to $scope
	(function(){


		$scope.rows = rows;
		$scope.left = left;
		$scope.right = right;
		$scope.maxLength = function() {
			return grid.maxLength();
		};	
	}());

};
