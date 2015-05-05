/*
 *		Tape Class
 */

function Tape(t) {
	if (!t.length)
		t = [' '];
	
	this.tape = t;
	
	this.currentIndex = 0;
}

Tape.prototype.currentSymbol = function() {
	return tape[this.currentIndex];
};

Tape.prototype.moveRight = function() {
	currentIndex--;
	
	if (currentIndex == -1) {
		this.tape.unshift(' ');
		
		currentIndex = 0;	
	}
};

Tape.prototype.moveLeft = function() {
	currentIndex++;
	
	if (currentIndex == this.tape.length)
		this.tape.push(' ');
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

function TuringMachine(it, s, ss) {
	this.inputTape = Tape(it);
	this.states = s;
	this.startState = ss;
}

TuringMachine.prototype.run = function() {
	var tape = this.inputTape;
	
	if (!this.validateInputTape())
		return false;
	
	var state = this.getStateNamed(this.startState);
	
	while (true) {
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

TuringMachine.prototype.validateStates = function() {
	var names = [];
	
	for (var state in this.states)
		names.push(state.name);
	
	for (var state in this.states)
		if (!names.contains(state.nextState))
			return false;
	
	return true;
};

TuringMachine.prototype.getStateNamed = function(name) {
	for (var state in this.states)
		if (state.name == name || state.name == '*')
			return state;
	
	return null;
};

TuringMachine.prototype.getTupleFromState = function(state, currentSymbol) {
	for (var tuple in state.tuples)
		if (tuple.currentSymbol == currentSymbol || tuple.currentSymbol == '*')
			return tuple;
	
	return tuple;
};
