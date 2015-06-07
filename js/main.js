$("#new").click(function() {
	var editor = ace.edit("editor");

	editor.setValue('');
});

function readSingleFile(e) {
	var file = e.target.files[0];
	
	if (!file)
		return;
		
	var reader = new FileReader();
	
	reader.onload = function(e) {
		var contents = e.target.result;
		displayContents(contents);
	};
	
	reader.readAsText(file);
}

function displayContents(contents) {
	var decodedData = JSON.parse(window.atob(contents));
	
	$("#tape").val(decodedData[0]);
	ace.edit('editor').setValue(decodedData[1]);
}

document.getElementById('file-input')
	.addEventListener('change', readSingleFile, false);

$("#open").click(function() {
	$("#file-input").click();
});

$("#save").click(function() {
	var encodedData = window.btoa(JSON.stringify([	
									$("#tape").val(), 
									ace.edit("editor").getValue()
								]));
	
	console.log(encodedData);

	var a = document.createElement('a');
	a.href = 'data:application/octet-stream,' + encodedData;
	a.target = '_blank';
	a.download = 'TuringExport.tm';

	document.body.appendChild(a);

	a.click();
});

var debugMachine = null;

function InvalidStatesException() {
	
}

function createMachine() {
	var input = ace.edit("editor").getValue();

	var antlr4 = require("antlr4/index");

	var TuringMachineLexer = require("grammar/TuringMachineLexer.js");
	var TuringMachineListener = require("grammar/TuringMachineListener.js");
	var TuringMachineParser = require("grammar/TuringMachineParser.js");
	var TuringMachineErrorListener = require("grammar/TuringMachineErrorListener.js");

	var chars = new antlr4.InputStream(input);
	var lexer = new TuringMachineLexer.TuringMachineLexer(chars);

	var tokens = new antlr4.CommonTokenStream(lexer);

	var parser = new TuringMachineParser.TuringMachineParser(tokens);
	
	var errorListener = new TuringMachineErrorListener.TuringMachineErrorListener();
	
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);
	
	parser.buildParseTrees = true;

	var tree = parser.r();

	var evaluator = new TuringMachineListener.TuringMachineListener();

	antlr4.tree.ParseTreeWalker.DEFAULT.walk(evaluator, tree);

	console.log(evaluator.states);

	var tape = document.getElementById("tape").value.split('');

	var TM = new Machine(tape, evaluator.states, 's0');
	
	if (!TM.validateStates())
		throw new InvalidStatesException();

	return TM;
}

function spawnModal(title, message) {
	$("#modal").modal('show');
	
	$("#modalTitle").html(title);
	$("#modalMessage").html(message);
}

$("#validate").click(function() {
	try {
		createMachine();
	} catch (e) {
		if (e instanceof UnknownStateException)
			spawnModal('Unknown State!', e.state);
		if (e instanceof StartStateNotFoundException)
			spawnModal('No Start State!', 'The state [s0] needs to exist.');
		else if (e instanceof DuplicateStatesException)
			spawnModal('Duplicate States!', 'The following duplicate states were found: [' + e.states + ']');
		else
			spawnModal('Syntax Error!', e.error);
		
		return;
	}
	
	spawnModal('Success!', 'No errors found.');
});

function printDebugRep() {
	var newRepresentation = "";
	
	var idx = debugMachine.inputTape.currentIndex;
	
	debugMachine.inputTape.tape.forEach(function(element, index, array) {
		if (index == idx)
			newRepresentation += '<span class="tm-current">';
	
		newRepresentation += element;
	
		if (index == idx)
			newRepresentation += '</span>';
	});
	
	$("#stateName").html(debugMachine.startState);
	
	$("#tmDebugTape").html(newRepresentation);
}

$("#openDebug").click(function() {
	try {
		debugMachine = createMachine();
		
		$("#debug").modal('show');
		
		$("#tmControl").html('<center><a href="#" class="btn btn-primary" id="tmDebugNext">Next</a></center>');
		
		printDebugRep();
	} catch (e) {
		spawnModal('Error!', 'An error has occurred - please validate your code first!');
	}
});

$("#run").click(function() {
	try {
		var TM = createMachine();
			
		var result = TM.run();
		
		var newRepresentation = "";
		
		var idx = TM.inputTape.currentIndex;
		
		TM.inputTape.tape.forEach(function(element, index, array) {
			if (index == idx)
				newRepresentation += '<span class="tm-current">';
		
			newRepresentation += element;
		
			if (index == idx)
				newRepresentation += '</span>';
		});
		
		$("#runStateName").html(result.result);
		
		$("#tmRunTape").html(newRepresentation);
			
		$("#runMdl").modal('show');
	} catch (e) {
		console.log(e);
		spawnModal('Error!', 'An error has occurred - please validate your code first!');
	}
});

$("#debug").on('click', '#tmDebugNext', function() {
	if (debugMachine.startState == 'accept' || debugMachine.startState == 'reject')
		return;

	debugMachine.step();

	printDebugRep();

	if (debugMachine.startState == 'accept') {
		$("#tmDebugNext").html('Operation Complete - Input Accepted!');

		$("#tmDebugNext").toggleClass('btn-primary');
		$("#tmDebugNext").toggleClass('btn-success');

		$("#tmDebugNext").attr('disabled', 'disabled');
	} else if (debugMachine.startState == 'reject') {
		$("#tmDebugNext").html('Operation Complete - Input Rejected!');

		$("#tmDebugNext").toggleClass('btn-primary');
		$("#tmDebugNext").toggleClass('btn-danger');

		$("#tmDebugNext").attr('disabled', 'disabled');
	}
});

$("#exampleBinaryPalindrome").click(function() {
	ace.edit("editor").setValue(binaryPalindrome().program);
	$("#tape").val(binaryPalindrome().tape);
});

$("#exampleBusyBeaver").click(function() {
	ace.edit("editor").setValue(busyBeaver().program);
	$("#tape").val(busyBeaver().tape);
});

$("#binaryMultiplicationMachine").click(function() {
	ace.edit("editor").setValue(binaryMultiplication().program);
	$("#tape").val(binaryMultiplication().tape);
});

$("#binaryToDec").click(function() {
	ace.edit("editor").setValue(binaryToDecimal().program);
	$("#tape").val(binaryToDecimal().tape);
});

$("#entscheidungsproblem").click(function() {
	ace.edit("editor").setValue(entscheidungsproblem().program);
	$("#tape").val(entscheidungsproblem().tape);
});

$("#err-missingState").click(function() {
	ace.edit("editor").setValue(missingState().program);
	$("#tape").val(missingState().tape);
});

$("#err-missingToken").click(function() {
	ace.edit("editor").setValue(missingToken().program);
	$("#tape").val(missingToken().tape);
});

$("#err-duplicateStateDefinition").click(function() {
	ace.edit("editor").setValue(duplicateState().program);
	$("#tape").val(duplicateState().tape);
});

var editor = ace.edit("editor");

editor.setTheme("ace/theme/chrome");
editor.setValue(binaryPalindrome().program);
editor.setOptions({
	maxLines: editor.session.getLength()
});
