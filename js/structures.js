/*
 *		Tuple Class
 */

function Tuple(cs, nsy, d, nst) {
	this.currentSymbol = cs;
	this.nextSymbol = nsy;
	this.direction = d;
	this.nextState = nst;
}

/*
 *		State Class
 */

function State(stateName) {
	this.name = stateName;
	this.tuples = [];
	
	console.log('Created state named ' + this.name);
}

State.prototype.addTuple = function(tuple) {
	this.tuples.push(tuple);
};

State.prototype.getName = function() {
	return this.name;
}