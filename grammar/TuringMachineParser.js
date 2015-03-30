// Generated from TuringMachine.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TuringMachineListener = require('./TuringMachineListener').TuringMachineListener;
var grammarFileName = "TuringMachine.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\16.\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\6",
    "\2\22\n\2\r\2\16\2\23\3\3\3\3\3\3\3\3\3\3\6\3\33\n\3\r\3\16\3\34\3\3",
    "\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\2\2\t\2",
    "\4\6\b\n\f\16\2\4\4\2\t\t\f\r\4\2\3\4\f\f(\2\21\3\2\2\2\4\25\3\2\2\2",
    "\6 \3\2\2\2\b%\3\2\2\2\n\'\3\2\2\2\f)\3\2\2\2\16+\3\2\2\2\20\22\5\4",
    "\3\2\21\20\3\2\2\2\22\23\3\2\2\2\23\21\3\2\2\2\23\24\3\2\2\2\24\3\3",
    "\2\2\2\25\26\7\5\2\2\26\27\5\b\5\2\27\30\7\6\2\2\30\32\7\7\2\2\31\33",
    "\5\6\4\2\32\31\3\2\2\2\33\34\3\2\2\2\34\32\3\2\2\2\34\35\3\2\2\2\35",
    "\36\3\2\2\2\36\37\7\b\2\2\37\5\3\2\2\2 !\5\f\7\2!\"\5\f\7\2\"#\5\16",
    "\b\2#$\5\n\6\2$\7\3\2\2\2%&\7\n\2\2&\t\3\2\2\2\'(\7\n\2\2(\13\3\2\2",
    "\2)*\t\2\2\2*\r\3\2\2\2+,\t\3\2\2,\17\3\2\2\2\4\23\34"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'l'", "'r'", "'['", "']'", "'{'", "'}'", 'null', 
                     'null', 'null', "'*'", "'_'" ];

var symbolicNames = [ 'null', 'null', 'null', "SN_BEG", "SN_END", "STATE_BEG", 
                      "STATE_END", "ALPNUM", "ALPNUM_PLUS", "WHITESP", "WILDCARD", 
                      "UNDERSC", "COMMENT" ];

var ruleNames =  [ "r", "statedef", "tuple", "statename", "state", "symbol", 
                   "dir" ];

function TuringMachineParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TuringMachineParser.prototype = Object.create(antlr4.Parser.prototype);
TuringMachineParser.prototype.constructor = TuringMachineParser;

Object.defineProperty(TuringMachineParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TuringMachineParser.EOF = antlr4.Token.EOF;
TuringMachineParser.T__0 = 1;
TuringMachineParser.T__1 = 2;
TuringMachineParser.SN_BEG = 3;
TuringMachineParser.SN_END = 4;
TuringMachineParser.STATE_BEG = 5;
TuringMachineParser.STATE_END = 6;
TuringMachineParser.ALPNUM = 7;
TuringMachineParser.ALPNUM_PLUS = 8;
TuringMachineParser.WHITESP = 9;
TuringMachineParser.WILDCARD = 10;
TuringMachineParser.UNDERSC = 11;
TuringMachineParser.COMMENT = 12;

TuringMachineParser.RULE_r = 0;
TuringMachineParser.RULE_statedef = 1;
TuringMachineParser.RULE_tuple = 2;
TuringMachineParser.RULE_statename = 3;
TuringMachineParser.RULE_state = 4;
TuringMachineParser.RULE_symbol = 5;
TuringMachineParser.RULE_dir = 6;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.statedef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatedefContext);
    } else {
        return this.getTypedRuleContext(StatedefContext,i);
    }
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitR(this);
	}
};




TuringMachineParser.RContext = RContext;

TuringMachineParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TuringMachineParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 14;
            this.statedef();
            this.state = 17; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===TuringMachineParser.SN_BEG);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatedefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_statedef;
    return this;
}

StatedefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatedefContext.prototype.constructor = StatedefContext;

StatedefContext.prototype.SN_BEG = function() {
    return this.getToken(TuringMachineParser.SN_BEG, 0);
};

StatedefContext.prototype.statename = function() {
    return this.getTypedRuleContext(StatenameContext,0);
};

StatedefContext.prototype.SN_END = function() {
    return this.getToken(TuringMachineParser.SN_END, 0);
};

StatedefContext.prototype.STATE_BEG = function() {
    return this.getToken(TuringMachineParser.STATE_BEG, 0);
};

StatedefContext.prototype.STATE_END = function() {
    return this.getToken(TuringMachineParser.STATE_END, 0);
};

StatedefContext.prototype.tuple = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TupleContext);
    } else {
        return this.getTypedRuleContext(TupleContext,i);
    }
};

StatedefContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterStatedef(this);
	}
};

StatedefContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitStatedef(this);
	}
};




TuringMachineParser.StatedefContext = StatedefContext;

TuringMachineParser.prototype.statedef = function() {

    var localctx = new StatedefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TuringMachineParser.RULE_statedef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.match(TuringMachineParser.SN_BEG);
        this.state = 20;
        this.statename();
        this.state = 21;
        this.match(TuringMachineParser.SN_END);
        this.state = 22;
        this.match(TuringMachineParser.STATE_BEG);
        this.state = 24; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 23;
            this.tuple();
            this.state = 26; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TuringMachineParser.ALPNUM) | (1 << TuringMachineParser.WILDCARD) | (1 << TuringMachineParser.UNDERSC))) !== 0));
        this.state = 28;
        this.match(TuringMachineParser.STATE_END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_tuple;
    return this;
}

TupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleContext.prototype.constructor = TupleContext;

TupleContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

TupleContext.prototype.dir = function() {
    return this.getTypedRuleContext(DirContext,0);
};

TupleContext.prototype.state = function() {
    return this.getTypedRuleContext(StateContext,0);
};

TupleContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterTuple(this);
	}
};

TupleContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitTuple(this);
	}
};




TuringMachineParser.TupleContext = TupleContext;

TuringMachineParser.prototype.tuple = function() {

    var localctx = new TupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TuringMachineParser.RULE_tuple);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.symbol();
        this.state = 31;
        this.symbol();
        this.state = 32;
        this.dir();
        this.state = 33;
        this.state();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatenameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_statename;
    return this;
}

StatenameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatenameContext.prototype.constructor = StatenameContext;

StatenameContext.prototype.ALPNUM_PLUS = function() {
    return this.getToken(TuringMachineParser.ALPNUM_PLUS, 0);
};

StatenameContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterStatename(this);
	}
};

StatenameContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitStatename(this);
	}
};




TuringMachineParser.StatenameContext = StatenameContext;

TuringMachineParser.prototype.statename = function() {

    var localctx = new StatenameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TuringMachineParser.RULE_statename);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(TuringMachineParser.ALPNUM_PLUS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_state;
    return this;
}

StateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StateContext.prototype.constructor = StateContext;

StateContext.prototype.ALPNUM_PLUS = function() {
    return this.getToken(TuringMachineParser.ALPNUM_PLUS, 0);
};

StateContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterState(this);
	}
};

StateContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitState(this);
	}
};




TuringMachineParser.StateContext = StateContext;

TuringMachineParser.prototype.state = function() {

    var localctx = new StateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TuringMachineParser.RULE_state);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(TuringMachineParser.ALPNUM_PLUS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.ALPNUM = function() {
    return this.getToken(TuringMachineParser.ALPNUM, 0);
};

SymbolContext.prototype.UNDERSC = function() {
    return this.getToken(TuringMachineParser.UNDERSC, 0);
};

SymbolContext.prototype.WILDCARD = function() {
    return this.getToken(TuringMachineParser.WILDCARD, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitSymbol(this);
	}
};




TuringMachineParser.SymbolContext = SymbolContext;

TuringMachineParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TuringMachineParser.RULE_symbol);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TuringMachineParser.ALPNUM) | (1 << TuringMachineParser.WILDCARD) | (1 << TuringMachineParser.UNDERSC))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DirContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TuringMachineParser.RULE_dir;
    return this;
}

DirContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirContext.prototype.constructor = DirContext;


DirContext.prototype.enterRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.enterDir(this);
	}
};

DirContext.prototype.exitRule = function(listener) {
    if(listener instanceof TuringMachineListener ) {
        listener.exitDir(this);
	}
};




TuringMachineParser.DirContext = DirContext;

TuringMachineParser.prototype.dir = function() {

    var localctx = new DirContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TuringMachineParser.RULE_dir);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TuringMachineParser.T__0) | (1 << TuringMachineParser.T__1) | (1 << TuringMachineParser.WILDCARD))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TuringMachineParser = TuringMachineParser;
