function UnknownStateException(state) {
	this.state = state;
}

UnknownStateException.prototype.constructor = UnknownStateException;

function SyntaxErrorException(error) {
	this.error = error;
}

SyntaxErrorException.prototype.constructor = SyntaxErrorException;