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
	var decodedData = window.atob(contents);

	ace.edit('editor').setValue(decodedData);
}

document.getElementById('file-input')
	.addEventListener('change', readSingleFile, false);

$("#open").click(function() {
	$("#file-input").click();
});

$("#save").click(function() {
	var encodedData = window.btoa(ace.edit("editor").getValue());

	var a = document.createElement('a');
	a.href = 'data:application/octet-stream,' + encodedData;
	a.target = '_blank';
	a.download = 'TuringExport.tm';

	document.body.appendChild(a);

	a.click();
});

var debugMachine = null;

function createMachine() {
	var input = ace.edit("editor").getValue();

	var antlr4 = require("antlr4/index");

	var TuringMachineLexer = require("grammar/TuringMachineLexer.js");
	var TuringMachineListener = require("grammar/TuringMachineListener.js");
	var TuringMachineParser = require("grammar/TuringMachineParser.js");

	var chars = new antlr4.InputStream(input);
	var lexer = new TuringMachineLexer.TuringMachineLexer(chars);

	var tokens = new antlr4.CommonTokenStream(lexer);

	var parser = new TuringMachineParser.TuringMachineParser(tokens);

	parser.buildParseTrees = true;

	var tree = parser.r();

	var evaluator = new TuringMachineListener.TuringMachineListener();

	antlr4.tree.ParseTreeWalker.DEFAULT.walk(evaluator, tree);

	console.log(evaluator.states);

	var tape = document.getElementById("tape").value.split('');

	var TM = new Machine(tape, evaluator.states, 's0');

	return TM;
}

$("#validate").click(function() {

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
	debugMachine = createMachine();

	$("#debug").modal('show');
	
	$("#tmControl").html('<center><a href="#" class="btn btn-primary" id="tmDebugNext">Next</a></center>');
	
	printDebugRep();
});

$("#run").click(function() {
	var TM = createMachine();

	var result = TM.run();

	alert('Tape: [' + result.tape.compressedTape().join(' ') + ']\nResult: ' + result.result);
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
	ace.edit("editor").setValue(binaryPalindrome());
});

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.setValue(binaryPalindrome());
editor.setOptions({
	maxLines: editor.session.getLength()
});