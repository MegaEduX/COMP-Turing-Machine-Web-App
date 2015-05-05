// Generated from TuringMachine.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\20R\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2",
    "\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\6\t\60\n\t",
    "\r\t\16\t\61\5\t\64\n\t\3\n\6\n\67\n\n\r\n\16\n8\3\n\3\n\3\13\3\13\3",
    "\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\7\17I\n\17\f\17\16\17L",
    "\13\17\3\17\3\17\3\17\3\17\3\17\3J\2\20\3\3\5\4\7\5\t\6\13\7\r\b\17",
    "\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\3\2\5\5\2\62;C\\c|\5\2\13",
    "\f\17\17\"\"\4\2*+<<U\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2",
    "\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2",
    "\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\3\37",
    "\3\2\2\2\5!\3\2\2\2\7#\3\2\2\2\t%\3\2\2\2\13\'\3\2\2\2\r)\3\2\2\2\17",
    "+\3\2\2\2\21\63\3\2\2\2\23\66\3\2\2\2\25<\3\2\2\2\27>\3\2\2\2\31@\3",
    "\2\2\2\33B\3\2\2\2\35D\3\2\2\2\37 \7n\2\2 \4\3\2\2\2!\"\7t\2\2\"\6\3",
    "\2\2\2#$\7]\2\2$\b\3\2\2\2%&\7_\2\2&\n\3\2\2\2\'(\7}\2\2(\f\3\2\2\2",
    ")*\7\177\2\2*\16\3\2\2\2+,\t\2\2\2,\20\3\2\2\2-\64\5\17\b\2.\60\5\17",
    "\b\2/.\3\2\2\2\60\61\3\2\2\2\61/\3\2\2\2\61\62\3\2\2\2\62\64\3\2\2\2",
    "\63-\3\2\2\2\63/\3\2\2\2\64\22\3\2\2\2\65\67\t\3\2\2\66\65\3\2\2\2\67",
    "8\3\2\2\28\66\3\2\2\289\3\2\2\29:\3\2\2\2:;\b\n\2\2;\24\3\2\2\2<=\7",
    ",\2\2=\26\3\2\2\2>?\7a\2\2?\30\3\2\2\2@A\t\4\2\2A\32\3\2\2\2BC\13\2",
    "\2\2C\34\3\2\2\2DE\7\61\2\2EF\7,\2\2FJ\3\2\2\2GI\13\2\2\2HG\3\2\2\2",
    "IL\3\2\2\2JK\3\2\2\2JH\3\2\2\2KM\3\2\2\2LJ\3\2\2\2MN\7,\2\2NO\7\61\2",
    "\2OP\3\2\2\2PQ\b\17\2\2Q\36\3\2\2\2\7\2\61\638J\3\b\2\2"].join("");


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
TuringMachineLexer.MISC = 12;
TuringMachineLexer.ANYCHAR = 13;
TuringMachineLexer.COMMENT = 14;


TuringMachineLexer.modeNames = [ "DEFAULT_MODE" ];

TuringMachineLexer.literalNames = [ 'null', "'l'", "'r'", "'['", "']'", 
                                    "'{'", "'}'", 'null', 'null', 'null', 
                                    "'*'", "'_'" ];

TuringMachineLexer.symbolicNames = [ 'null', 'null', 'null', "SN_BEG", "SN_END", 
                                     "STATE_BEG", "STATE_END", "ALPNUM", 
                                     "ALPNUM_PLUS", "WHITESP", "WILDCARD", 
                                     "UNDERSC", "MISC", "ANYCHAR", "COMMENT" ];

TuringMachineLexer.ruleNames = [ "T__0", "T__1", "SN_BEG", "SN_END", "STATE_BEG", 
                                 "STATE_END", "ALPNUM", "ALPNUM_PLUS", "WHITESP", 
                                 "WILDCARD", "UNDERSC", "MISC", "ANYCHAR", 
                                 "COMMENT" ];

TuringMachineLexer.grammarFileName = "TuringMachine.g4";



exports.TuringMachineLexer = TuringMachineLexer;

