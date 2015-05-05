/*
 *		Tape Class
 */

function Tape(t) {
	if (!t.length)
		t = ['_'];
	
	this.tape = t;
	
	this.currentIndex = 0;
}

Tape.prototype.currentSymbol = function() {
	return this.tape[this.currentIndex];
};

Tape.prototype.moveRight = function() {
	this.currentIndex--;
	
	if (this.currentIndex == -1) {
		this.tape.unshift('_');
		
		this.currentIndex = 0;	
	}
};

Tape.prototype.moveLeft = function() {
	this.currentIndex++;
	
	if (this.currentIndex == this.tape.length)
		this.tape.push('_');
};

Tape.prototype.replaceCurrentSymbol = function(s) {
	if (s != '*')
		this.tape[this.currentIndex] = s;
};

/*
 * 		Result Class
 */

function Result(t, r) {
	this.tape = t;
	this.result = r;
}

/*
 * 		Turing Machine Class
 */

function Machine(it, s, ss) {
	this.inputTape = new Tape(it);
	this.states = s;
	this.startState = ss;
}

Machine.prototype.run = function() {
	var tape = this.inputTape;
	
	var state = this.getStateNamed(this.startState);
	
	console.log('Start State Name: ' + this.startState);
	console.log('Start State Object: ' + state);
	
	while (true) {
		console.log('Current State: ' + state);
		
		var tp = this.getTupleFromState(state, tape.currentSymbol());
		
		tape.replaceCurrentSymbol(tp.nextSymbol);
		
		if (tp.nextState == 'accept' || tp.nextState == 'reject')
			return new Result(tape, tp.nextState);
		
		state = this.getStateNamed(tp.nextState);
		
		if (tp.direction == 'l')
			tape.moveLeft();
		else if (tp.direction == 'r')
			tape.moveRight();
	}
};

Machine.prototype.step = function() {
	var tape = this.inputTape;
	
	var state = this.getStateNamed(this.startState);
	
	console.log('Start State Name: ' + this.startState);
	console.log('Start State Object: ' + state);
	
	console.log('Current State: ' + state);
	
	var tp = this.getTupleFromState(state, tape.currentSymbol());
	
	tape.replaceCurrentSymbol(tp.nextSymbol);
	
	if (tp.nextState == 'accept' || tp.nextState == 'reject')
		return new Result(tape, tp.nextState);
	
	//	state = this.getStateNamed(tp.nextState);
	
	if (tp.direction == 'l')
		tape.moveLeft();
	else if (tp.direction == 'r')
		tape.moveRight();
	
	this.inputTape = tape;
	this.startState = tp.nextState;
}

Machine.prototype.validateStates = function() {
	var names = [];
	
	this.states.forEach(function(state) {
		names.push(state.name);
	});
	
	this.states.forEach(function(state) {
		if (!names.contains(state.nextState))
			return false;
	});
	
	return true;
};

Machine.prototype.getStateNamed = function(name) {
	var foundState = null;
	
	this.states.some(function(state) {
		if (state.name == name || state.name == '*') {
			foundState = state;
			
			return true;
		}
		
		return false;
	});
	
	return foundState;
};

Machine.prototype.getTupleFromState = function(state, currentSymbol) {
	var foundTuple = null;
	
	state.tuples.some(function(tuple) {
		if (tuple.currentSymbol == currentSymbol || tuple.currentSymbol == '*') {
			foundTuple = tuple;
			
			return true;
		}
		
		return false;
	});
	
	return foundTuple;
};
