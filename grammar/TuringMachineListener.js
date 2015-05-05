// Generated from TuringMachine.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TuringMachineParser.
function TuringMachineListener() {
	antlr4.tree.ParseTreeListener.call(this);
	
	this.queue = [];
	this.currentStateDef = null;
	
	this.states = [];
	
	return this;
}

//
//		Listener
//

TuringMachineListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TuringMachineListener.prototype.constructor = TuringMachineListener;

// Enter a parse tree produced by TuringMachineParser#r.
TuringMachineListener.prototype.enterR = function(ctx) {
};

// Exit a parse tree produced by TuringMachineParser#r.
TuringMachineListener.prototype.exitR = function(ctx) {
};


// Enter a parse tree produced by TuringMachineParser#statedef.
TuringMachineListener.prototype.enterStatedef = function(ctx) {
	this.currentStateDef = null;
};

// Exit a parse tree produced by TuringMachineParser#statedef.
TuringMachineListener.prototype.exitStatedef = function(ctx) {
	this.states.push(this.currentStateDef);
};


// Enter a parse tree produced by TuringMachineParser#tuple.
TuringMachineListener.prototype.enterTuple = function(ctx) {
};

// Exit a parse tree produced by TuringMachineParser#tuple.
TuringMachineListener.prototype.exitTuple = function(ctx) {
	var tuple = new Tuple(this.queue.shift(), this.queue.shift(), this.queue.shift(), this.queue.shift());
	
	this.currentStateDef.addTuple(tuple);
};


// Enter a parse tree produced by TuringMachineParser#statename.
TuringMachineListener.prototype.enterStatename = function(ctx) {
};

// Exit a parse tree produced by TuringMachineParser#statename.
TuringMachineListener.prototype.exitStatename = function(ctx) {
	if (this.currentStateDef == null)
		this.currentStateDef = new State(ctx.getText());
	else
		this.queue.push(ctx.getText());
};


// Enter a parse tree produced by TuringMachineParser#symbol.
TuringMachineListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by TuringMachineParser#symbol.
TuringMachineListener.prototype.exitSymbol = function(ctx) {
	this.queue.push(ctx.getText());
};


// Enter a parse tree produced by TuringMachineParser#dir.
TuringMachineListener.prototype.enterDir = function(ctx) {
};

// Exit a parse tree produced by TuringMachineParser#dir.
TuringMachineListener.prototype.exitDir = function(ctx) {
	this.queue.push(ctx.getText());
};

exports.TuringMachineListener = TuringMachineListener;