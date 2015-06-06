function UnknownStateException(state) {
	this.state = state;
}

UnknownStateException.prototype.constructor = UnknownStateException;

function DuplicateStatesException(states) {
	this.states = states;
}

DuplicateStatesException.prototype.constructor

/*
 * 		Array Extension
 */

Array.prototype.contains = function(obj) {
	var i = this.length;
	while (i--) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
}

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
	this.currentIndex++;
	
	if (this.currentIndex == this.tape.length)
		this.tape.push('_');
};

Tape.prototype.moveLeft = function() {
	this.currentIndex--;
	
	if (this.currentIndex == -1) {
		this.tape.unshift('_');
		
		this.currentIndex = 0;	
	}
};

Tape.prototype.replaceCurrentSymbol = function(s) {
	if (s != '*')
		this.tape[this.currentIndex] = s;
};

Tape.prototype.compressedTape = function() {
	var compressedTape = this.tape;
	
	while (compressedTape[0] == '_')
		compressedTape.shift();
	
	while (compressedTape[compressedTape.length - 1] == '_')
		compressedTape.pop();
	
	return compressedTape;
}

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
	
	console.log('Start State: ' + this.startState);
	
	while (true) {
		console.log('Current State: ' + state.name);
		
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

	console.log('Start State: ' + this.startState);

	console.log('Current State: ' + state.name);
	
	var tp = this.getTupleFromState(state, tape.currentSymbol());
	
	tape.replaceCurrentSymbol(tp.nextSymbol);
	
	this.startState = tp.nextState;
	
	if (tp.direction == 'l')
		tape.moveLeft();
	else if (tp.direction == 'r')
		tape.moveRight();
};

function findDuplicates(array) {
	var dupes = [];
	
	while (array.length) {
		var elem = array.shift();
		
		if (array.contains(elem))
			dupes.push(elem);
	}
	
	return dupes;
}

Machine.prototype.validateStates = function() {
	var names = [];
	
	this.states.forEach(function(state) {
		names.push(state.name);
	});
	
	console.log('Started Duplicate Search...');
	
	var dupes = findDuplicates(names.slice());
	
	console.log('Done!');
	
	if (dupes.length)
		throw new DuplicateStatesException(dupes);
	
	var ret = true;
	
	this.states.every(function (state, idx, array) {
		state.tuples.every(function(tuple, i, a) {
			var n = tuple.nextState;
			
			console.log(n);
			
			if (!names.contains(n) && n != 'accept' && n != 'reject') {
				ret = false;
				
				throw new UnknownStateException(n);
			}
			
			return true;
		});
		
		return true;
	});
	
	return ret;
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
