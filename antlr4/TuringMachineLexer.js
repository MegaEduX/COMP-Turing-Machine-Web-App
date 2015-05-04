// Generated from TuringMachine.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\16J\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\3\2\3\2\3\3\3\3\3\4\3\4\3\5",
    "\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\6\t,\n\t\r\t\16\t-\5\t\60\n\t\3",
    "\n\6\n\63\n\n\r\n\16\n\64\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r",
    "\7\rA\n\r\f\r\16\rD\13\r\3\r\3\r\3\r\3\r\3\r\3B\2\16\3\3\5\4\7\5\t\6",
    "\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\3\2\4\5\2\62;C\\c|\5\2\13",
    "\f\17\17\"\"M\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3",
    "\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2",
    "\2\2\27\3\2\2\2\2\31\3\2\2\2\3\33\3\2\2\2\5\35\3\2\2\2\7\37\3\2\2\2",
    "\t!\3\2\2\2\13#\3\2\2\2\r%\3\2\2\2\17\'\3\2\2\2\21/\3\2\2\2\23\62\3",
    "\2\2\2\258\3\2\2\2\27:\3\2\2\2\31<\3\2\2\2\33\34\7n\2\2\34\4\3\2\2\2",
    "\35\36\7t\2\2\36\6\3\2\2\2\37 \7]\2\2 \b\3\2\2\2!\"\7_\2\2\"\n\3\2\2",
    "\2#$\7}\2\2$\f\3\2\2\2%&\7\177\2\2&\16\3\2\2\2\'(\t\2\2\2(\20\3\2\2",
    "\2)\60\5\17\b\2*,\5\17\b\2+*\3\2\2\2,-\3\2\2\2-+\3\2\2\2-.\3\2\2\2.",
    "\60\3\2\2\2/)\3\2\2\2/+\3\2\2\2\60\22\3\2\2\2\61\63\t\3\2\2\62\61\3",
    "\2\2\2\63\64\3\2\2\2\64\62\3\2\2\2\64\65\3\2\2\2\65\66\3\2\2\2\66\67",
    "\b\n\2\2\67\24\3\2\2\289\7,\2\29\26\3\2\2\2:;\7a\2\2;\30\3\2\2\2<=\7",
    "\61\2\2=>\7,\2\2>B\3\2\2\2?A\13\2\2\2@?\3\2\2\2AD\3\2\2\2BC\3\2\2\2",
    "B@\3\2\2\2CE\3\2\2\2DB\3\2\2\2EF\7,\2\2FG\7\61\2\2GH\3\2\2\2HI\b\r\2",
    "\2I\32\3\2\2\2\7\2-/\64B\3\b\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TuringMachineLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TuringMachineLexer.prototype = Object.create(antlr4.Lexer.prototype);
TuringMachineLexer.prototype.constructor = TuringMachineLexer;

TuringMachineLexer.EOF = antlr4.Token.EOF;
TuringMachineLexer.T__0 = 1;
TuringMachineLexer.T__1 = 2;
TuringMachineLexer.SN_BEG = 3;
TuringMachineLexer.SN_END = 4;
TuringMachineLexer.STATE_BEG = 5;
TuringMachineLexer.STATE_END = 6;
TuringMachineLexer.ALPNUM = 7;
TuringMachineLexer.ALPNUM_PLUS = 8;
TuringMachineLexer.WHITESP = 9;
TuringMachineLexer.WILDCARD = 10;
TuringMachineLexer.UNDERSC = 11;
TuringMachineLexer.COMMENT = 12;


TuringMachineLexer.modeNames = [ "DEFAULT_MODE" ];

TuringMachineLexer.literalNames = [ 'null', "'l'", "'r'", "'['", "']'", 
                                    "'{'", "'}'", 'null', 'null', 'null', 
                                    "'*'", "'_'" ];

TuringMachineLexer.symbolicNames = [ 'null', 'null', 'null', "SN_BEG", "SN_END", 
                                     "STATE_BEG", "STATE_END", "ALPNUM", 
                                     "ALPNUM_PLUS", "WHITESP", "WILDCARD", 
                                     "UNDERSC", "COMMENT" ];

TuringMachineLexer.ruleNames = [ "T__0", "T__1", "SN_BEG", "SN_END", "STATE_BEG", 
                                 "STATE_END", "ALPNUM", "ALPNUM_PLUS", "WHITESP", 
                                 "WILDCARD", "UNDERSC", "COMMENT" ];

TuringMachineLexer.grammarFileName = "TuringMachine.g4";



exports.TuringMachineLexer = TuringMachineLexer;

