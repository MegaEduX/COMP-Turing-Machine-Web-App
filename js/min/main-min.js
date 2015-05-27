function readSingleFile(e){var t=e.target.files[0];if(t){var a=new FileReader;a.onload=function(e){var t=e.target.result;displayContents(t)},a.readAsText(t)}}function displayContents(e){var t=window.atob(e);ace.edit("editor").setValue(t)}function InvalidStatesException(){}function createMachine(){var e=ace.edit("editor").getValue(),t=require("antlr4/index"),a=require("grammar/TuringMachineLexer.js"),n=require("grammar/TuringMachineListener.js"),r=require("grammar/TuringMachineParser.js"),i=require("grammar/TuringMachineErrorListener.js"),c=new t.InputStream(e),o=new a.TuringMachineLexer(c),l=new t.CommonTokenStream(o),u=new r.TuringMachineParser(l),s=new i.TuringMachineErrorListener;u.removeErrorListeners(),u.addErrorListener(s),u.buildParseTrees=!0;var d=u.r(),m=new n.TuringMachineListener;t.tree.ParseTreeWalker.DEFAULT.walk(m,d),console.log(m.states);var p=document.getElementById("tape").value.split(""),g=new Machine(p,m.states,"s0");if(!g.validateStates())throw new InvalidStatesException;return g}function spawnModal(e,t){$("#modal").modal("show"),$("#modalTitle").html(e),$("#modalMessage").html(t)}function printDebugRep(){var e="",t=debugMachine.inputTape.currentIndex;debugMachine.inputTape.tape.forEach(function(a,n,r){n==t&&(e+='<span class="tm-current">'),e+=a,n==t&&(e+="</span>")}),$("#stateName").html(debugMachine.startState),$("#tmDebugTape").html(e)}$("#new").click(function(){var e=ace.edit("editor");e.setValue("")}),document.getElementById("file-input").addEventListener("change",readSingleFile,!1),$("#open").click(function(){$("#file-input").click()}),$("#save").click(function(){var e=window.btoa(ace.edit("editor").getValue()),t=document.createElement("a");t.href="data:application/octet-stream,"+e,t.target="_blank",t.download="TuringExport.tm",document.body.appendChild(t),t.click()});var debugMachine=null;$("#validate").click(function(){try{createMachine()}catch(e){return void(e instanceof UnknownStateException?spawnModal("Unknown State!",e.state):spawnModal("Syntax Error!",e.error))}spawnModal("Success!","No errors found.")}),$("#openDebug").click(function(){try{debugMachine=createMachine(),$("#debug").modal("show"),$("#tmControl").html('<center><a href="#" class="btn btn-primary" id="tmDebugNext">Next</a></center>'),printDebugRep()}catch(e){spawnModal("Error!","An error has occurred - please validate your code first!")}}),$("#run").click(function(){try{var e=createMachine(),t=e.run(),a="",n=e.inputTape.currentIndex;e.inputTape.tape.forEach(function(e,t,r){t==n&&(a+='<span class="tm-current">'),a+=e,t==n&&(a+="</span>")}),$("#runStateName").html(t.result),$("#tmRunTape").html(a),$("#runMdl").modal("show")}catch(r){console.log(r),spawnModal("Error!","An error has occurred - please validate your code first!")}}),$("#debug").on("click","#tmDebugNext",function(){"accept"!=debugMachine.startState&&"reject"!=debugMachine.startState&&(debugMachine.step(),printDebugRep(),"accept"==debugMachine.startState?($("#tmDebugNext").html("Operation Complete - Input Accepted!"),$("#tmDebugNext").toggleClass("btn-primary"),$("#tmDebugNext").toggleClass("btn-success"),$("#tmDebugNext").attr("disabled","disabled")):"reject"==debugMachine.startState&&($("#tmDebugNext").html("Operation Complete - Input Rejected!"),$("#tmDebugNext").toggleClass("btn-primary"),$("#tmDebugNext").toggleClass("btn-danger"),$("#tmDebugNext").attr("disabled","disabled")))}),$("#exampleBinaryPalindrome").click(function(){ace.edit("editor").setValue(binaryPalindrome())}),$("#exampleBusyBeaver").click(function(){ace.edit("editor").setValue(busyBeaver())}),$("#binaryMultiplicationMachine").click(function(){ace.edit("editor").setValue(binaryMultiplication())}),$("#binaryToDec").click(function(){ace.edit("editor").setValue(binaryToDecimal())}),$("#entscheidungsproblem").click(function(){ace.edit("editor").setValue(entscheidungsproblem())});var editor=ace.edit("editor");editor.setTheme("ace/theme/chrome"),editor.setValue(binaryPalindrome()),editor.setOptions({maxLines:editor.session.getLength()});