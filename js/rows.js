var Cell = function() {
	this.value =-1;
	this.used = false;
};
Cell.prototype.swap = function(other) {
	var value = this.value;
	var used = this.used;
	this.value = other.value;
	this.used = other.used;
	other.used = used;
	other.value = value;
};
var Rows = function(cols) {
	this.cols = cols;
	this.rows = [];
};
Rows.prototype.isEmpty = function(rowIndex){
	var usedFound = false;
	var row = this.rows[rowIndex];	
	for(var c=0;c<this.cols && !usedFound;c++){
		usedFound = row[c].used;
		console.log('usedFound with',row[c]);
	}
	return !usedFound;
};
Rows.prototype.addBlankRow = function() {
	var row = new Array(this.cols);
	for ( var i = 0; i < this.cols; i++) {
		row[i] = new Cell();
	}
	;
	this.rows.push(row);
};
Rows.prototype.maxLength = function() {
	var max = -1;
	for ( var c = 0; c < this.cols; c++) {
		var temp = this.length(c);
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};
Rows.prototype._remove = function(col, row) {

	this.rows[row][col].used = false;

	var colLength = this._length(col);
	for ( var i = row; i <  colLength; i++) {
		var cell = this.rows[i][col];
		var below = this.rows[i + 1][col];
		cell.swap(below);
	}
	
	if(this.rows.length > 0) {
		var lastRowEmpty = this.isEmpty(this.rows.length-1);
		if(lastRowEmpty){
			this.rows.pop();
		}
	};
	
};
Rows.prototype._length = function(col) {
	var total = 0;
	for ( var i = 0; i < this.rows.length; i++) {
		var cell = this.rows[i][col];
		if (cell.used) {
			total += 1;
		}
	}
	return total;	
};
Rows.prototype._total = function(col) {
	var total = 0;
	for ( var i = 0; i < this.rows.length; i++) {
		var cell = this.rows[i][col];
		if (cell.used) {
			total += new Number(cell.value);
		}
	}
	return total;
};
Rows.prototype._used = function(col, row) {
	return this.get(col, row).used;
};
Rows.prototype._get = function(col, row) {
	return this.rows[row][col];
};
Rows.prototype._add = function(col, value) {
	var that = this;
	var addInternal = function() {
		var added = false;
		for ( var r = 0; r < that.rows.length && !added; r++) {
			var cell = that.rows[r][col];
			if (!cell.used) {
				cell.used = true;
				cell.value = value;
				added = true;
			}
		}
		return added;
	};
	var added = addInternal();
	if (!added) {
		this.addBlankRow();
		var added2 = addInternal();
	}
};
Rows.prototype.colOps = function(col) {
	var that = this;
	var total = function() {
		return that._total(col);
	};
	var length = function() {
		return that._length(col);
	};
	var get = function(row) {
		return that._get(col, row);
	};
	var add = function(value) {
		that._add(col, value);
	};
	var remove = function(row) {
		that._remove(col, row);
	};
	var used = function(row) {
		return that._used(col, row);
	};
	return {
		total : total,
		length : length,
		get : get,
		add : add,
		remove : remove,
		used : used
	};
};
console.log('rows loaded!');