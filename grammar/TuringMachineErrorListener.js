function SyntaxErrorException(error) {
	this.error = error;
}

SyntaxErrorException.prototype.constructor = SyntaxErrorException;

function ErrorListener() {
	return this;
}

ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
};

ErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
};

ErrorListener.prototype.reportAttemptingFullContext = function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
};

ErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
};

function TuringMachineErrorListener() {
	ErrorListener.call(this);
	
	return this;
}

TuringMachineErrorListener.prototype = Object.create(ErrorListener.prototype);
TuringMachineErrorListener.prototype.constructor = TuringMachineErrorListener;

TuringMachineErrorListener.INSTANCE = new TuringMachineErrorListener();

TuringMachineErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
	throw new SyntaxErrorException("[" + line + ":" + column + "] - " + msg);
};

exports.TuringMachineErrorListener = TuringMachineErrorListener;