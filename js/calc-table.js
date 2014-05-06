
//immutable pair
function Pair(left,right) {
	this.left=left;
	this.right=right;  
}

Pair.prototype.left = null;
Pair.prototype.right = null;


// define the TableRow class
function TableRow() {
  // Call the parent constructor
  Pair.call(this);
}

// inherit Pair
TableRow.prototype = new Pair(null,null);

// correct the constructor pointer because it points to Person
TableRow.prototype.constructor = Pair;

TableRow.prototype.isLeftEmpty = function() {
	return (!this.left) && (!this.right);
};
TableRow.prototype.isEmpty = function() {
	return (!this.left) && (!this.right);
};
TableRow.prototype.isEmpty = function() {
	return (!this.left) && (!this.right);
};

function Column(cells){
	if(!cells){
		this.cells = [];
	}else{
		this.cells = cells;
	}
}

Column.prototype.total = function(){
	var result = 0;
	for ( var i=0; i < this.cells.length ; i++) {
		var temp  = this.cells[i];
		if ( this.isNumber(temp) ) {
			result = result  + temp;
		}
	}
	return result;
};
Column.prototype.add = function(value){
	this.cells.push(value);
};
Column.prototype.remove = function(index) {
	if(this.isValidIndex(index)){
		this.cells.splice(index, 1);
	}
};
Column.prototype.isNumber = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
};
Column.prototype.length = function(){
	console.log('length called');
	return this.cells.length;
};
Column.prototype.isValidIndex = function(index){
	console.log('isValidIndex called with ',index);
	if(index > -1 && index < this.cells.length){
		return true;
	}else{
		return false;
	}
};
Column.prototype.get = function(index){
	console.log('get called with ',index);
	if(this.isValidIndex(index)){
		return this.cells[index];
	}else{
		return null;
	}
};
function Grid(cols){
	this.columns = [];
	for(var i=0;i<cols;i++){
		this.columns[i] = new Column();
	}
};
Grid.prototype.isValidIndex = function(index){
	console.log('isValidIndex called with ',index);
	if(index > -1 && index < this.columns.length){
		return true;
	}else{
		return false;
	}
};
Grid.prototype.maxLength = function(){
	var max = -1;
	for(var i=0 ; i<this.columns.length ; i++){
		var col = this.columns[i];
		var temp = col.length();
		if(temp > max) {
			max = temp;
		}
	}
	return max;
};
Grid.prototype.length = function(colIndex){
	console.log('length called with',colIndex);
	if(this.isValidIndex(colIndex)){
		return this.columns[colIndex].length();
	}else{
		return -1;
	}	
};
Grid.prototype.add = function(col,value) {
	this.columns[col].add(value);
};
Grid.prototype.total = function(col) {
	return this.columns[col].total();
};
Grid.prototype.remove = function(col,index) {
	this.columns[col].remove(index);
};
Grid.prototype.get = function(colIndex,rowIndex) {
	var col = this.columns[colIndex];
	if(col){
		return col.get(rowIndex);
	}else{
		return null;
	}
};
console.log('loaded calc-table.js');