"use strict";(self.webpackChunkurdf_documentation=self.webpackChunkurdf_documentation||[]).push([[4162],{5937:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(2453),n=i(4886);const r=(e,t)=>s.A.lang.round(n.A.parse(e)[t])},53:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(1641);const n=function(e){return(0,s.A)(e,4)}},4162:(e,t,i)=>{i.d(t,{diagram:()=>X});var s,n,r=i(9702),l=i(53),o=i(5937),a=i(5582),c=i(8055),u=i(697),h=i(6312),d=(i(4353),i(6750),i(2838),function(){var e=function(e,t,i,s){for(i=i||{},s=e.length;s--;i[e[s]]=t);return i},t=[1,7],i=[1,13],s=[1,14],n=[1,15],r=[1,19],l=[1,16],o=[1,17],a=[1,18],c=[8,30],u=[8,21,28,29,30,31,32,40,44,47],h=[1,23],d=[1,24],g=[8,15,16,21,28,29,30,31,32,40,44,47],y=[8,15,16,21,27,28,29,30,31,32,40,44,47],p=[1,49],b={trace:function(){},yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:function(e,t,i,s,n,r,l){var o=r.length-1;switch(n){case 4:s.getLogger().debug("Rule: separator (NL) ");break;case 5:s.getLogger().debug("Rule: separator (Space) ");break;case 6:s.getLogger().debug("Rule: separator (EOF) ");break;case 7:s.getLogger().debug("Rule: hierarchy: ",r[o-1]),s.setHierarchy(r[o-1]);break;case 8:s.getLogger().debug("Stop NL ");break;case 9:s.getLogger().debug("Stop EOF ");break;case 10:s.getLogger().debug("Stop NL2 ");break;case 11:s.getLogger().debug("Stop EOF2 ");break;case 12:s.getLogger().debug("Rule: statement: ",r[o]),"number"==typeof r[o].length?this.$=r[o]:this.$=[r[o]];break;case 13:s.getLogger().debug("Rule: statement #2: ",r[o-1]),this.$=[r[o-1]].concat(r[o]);break;case 14:s.getLogger().debug("Rule: link: ",r[o],e),this.$={edgeTypeStr:r[o],label:""};break;case 15:s.getLogger().debug("Rule: LABEL link: ",r[o-3],r[o-1],r[o]),this.$={edgeTypeStr:r[o],label:r[o-1]};break;case 18:const t=parseInt(r[o]),i=s.generateId();this.$={id:i,type:"space",label:"",width:t,children:[]};break;case 23:s.getLogger().debug("Rule: (nodeStatement link node) ",r[o-2],r[o-1],r[o]," typestr: ",r[o-1].edgeTypeStr);const n=s.edgeStrToEdgeData(r[o-1].edgeTypeStr);this.$=[{id:r[o-2].id,label:r[o-2].label,type:r[o-2].type,directions:r[o-2].directions},{id:r[o-2].id+"-"+r[o].id,start:r[o-2].id,end:r[o].id,label:r[o-1].label,type:"edge",directions:r[o].directions,arrowTypeEnd:n,arrowTypeStart:"arrow_open"},{id:r[o].id,label:r[o].label,type:s.typeStr2Type(r[o].typeStr),directions:r[o].directions}];break;case 24:s.getLogger().debug("Rule: nodeStatement (abc88 node size) ",r[o-1],r[o]),this.$={id:r[o-1].id,label:r[o-1].label,type:s.typeStr2Type(r[o-1].typeStr),directions:r[o-1].directions,widthInColumns:parseInt(r[o],10)};break;case 25:s.getLogger().debug("Rule: nodeStatement (node) ",r[o]),this.$={id:r[o].id,label:r[o].label,type:s.typeStr2Type(r[o].typeStr),directions:r[o].directions,widthInColumns:1};break;case 26:s.getLogger().debug("APA123",this?this:"na"),s.getLogger().debug("COLUMNS: ",r[o]),this.$={type:"column-setting",columns:"auto"===r[o]?-1:parseInt(r[o])};break;case 27:s.getLogger().debug("Rule: id-block statement : ",r[o-2],r[o-1]),s.generateId(),this.$={...r[o-2],type:"composite",children:r[o-1]};break;case 28:s.getLogger().debug("Rule: blockStatement : ",r[o-2],r[o-1],r[o]);const l=s.generateId();this.$={id:l,type:"composite",label:"",children:r[o-1]};break;case 29:s.getLogger().debug("Rule: node (NODE_ID separator): ",r[o]),this.$={id:r[o]};break;case 30:s.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",r[o-1],r[o]),this.$={id:r[o-1],label:r[o].label,typeStr:r[o].typeStr,directions:r[o].directions};break;case 31:s.getLogger().debug("Rule: dirList: ",r[o]),this.$=[r[o]];break;case 32:s.getLogger().debug("Rule: dirList: ",r[o-1],r[o]),this.$=[r[o-1]].concat(r[o]);break;case 33:s.getLogger().debug("Rule: nodeShapeNLabel: ",r[o-2],r[o-1],r[o]),this.$={typeStr:r[o-2]+r[o],label:r[o-1]};break;case 34:s.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",r[o-3],r[o-2]," #3:",r[o-1],r[o]),this.$={typeStr:r[o-3]+r[o],label:r[o-2],directions:r[o-1]};break;case 35:case 36:this.$={type:"classDef",id:r[o-1].trim(),css:r[o].trim()};break;case 37:this.$={type:"applyClass",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 38:this.$={type:"applyStyles",id:r[o-1].trim(),stylesStr:r[o].trim()}}},table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:t,22:8,23:9,24:10,25:11,26:12,28:i,29:s,31:n,32:r,40:l,44:o,47:a},{8:[1,20]},e(c,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:t,28:i,29:s,31:n,32:r,40:l,44:o,47:a}),e(u,[2,16],{14:22,15:h,16:d}),e(u,[2,17]),e(u,[2,18]),e(u,[2,19]),e(u,[2,20]),e(u,[2,21]),e(u,[2,22]),e(g,[2,25],{27:[1,25]}),e(u,[2,26]),{19:26,26:12,32:r},{11:27,13:4,19:5,20:6,21:t,22:8,23:9,24:10,25:11,26:12,28:i,29:s,31:n,32:r,40:l,44:o,47:a},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(y,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(c,[2,13]),{26:35,32:r},{32:[2,14]},{17:[1,36]},e(g,[2,24]),{11:37,13:4,14:22,15:h,16:d,19:5,20:6,21:t,22:8,23:9,24:10,25:11,26:12,28:i,29:s,31:n,32:r,40:l,44:o,47:a},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(y,[2,30]),{18:[1,43]},{18:[1,44]},e(g,[2,23]),{18:[1,45]},{30:[1,46]},e(u,[2,28]),e(u,[2,35]),e(u,[2,36]),e(u,[2,37]),e(u,[2,38]),{37:[1,47]},{34:48,35:p},{15:[1,50]},e(u,[2,27]),e(y,[2,33]),{39:[1,51]},{34:52,35:p,39:[2,31]},{32:[2,15]},e(y,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:function(e,t){if(!t.recoverable){var i=new Error(e);throw i.hash=t,i}this.trace(e)},parse:function(e){var t=this,i=[0],s=[],n=[null],r=[],l=this.table,o="",a=0,c=0,u=r.slice.call(arguments,1),h=Object.create(this.lexer),d={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(d.yy[g]=this.yy[g]);h.setInput(e,d.yy),d.yy.lexer=h,d.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var y=h.yylloc;r.push(y);var p=h.options&&h.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,x,L,S,f,m,_,k,E,w={};;){if(x=i[i.length-1],this.defaultActions[x]?L=this.defaultActions[x]:(null==b&&(E=void 0,"number"!=typeof(E=s.pop()||h.lex()||1)&&(E instanceof Array&&(E=(s=E).pop()),E=t.symbols_[E]||E),b=E),L=l[x]&&l[x][b]),void 0===L||!L.length||!L[0]){var v="";for(f in k=[],l[x])this.terminals_[f]&&f>2&&k.push("'"+this.terminals_[f]+"'");v=h.showPosition?"Parse error on line "+(a+1)+":\n"+h.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(v,{text:h.match,token:this.terminals_[b]||b,line:h.yylineno,loc:y,expected:k})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+b);switch(L[0]){case 1:i.push(b),n.push(h.yytext),r.push(h.yylloc),i.push(L[1]),b=null,c=h.yyleng,o=h.yytext,a=h.yylineno,y=h.yylloc;break;case 2:if(m=this.productions_[L[1]][1],w.$=n[n.length-m],w._$={first_line:r[r.length-(m||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(m||1)].first_column,last_column:r[r.length-1].last_column},p&&(w._$.range=[r[r.length-(m||1)].range[0],r[r.length-1].range[1]]),void 0!==(S=this.performAction.apply(w,[o,c,a,d.yy,L[1],n,r].concat(u))))return S;m&&(i=i.slice(0,-1*m*2),n=n.slice(0,-1*m),r=r.slice(0,-1*m)),i.push(this.productions_[L[1]][0]),n.push(w.$),r.push(w._$),_=l[i[i.length-2]][i[i.length-1]],i.push(_);break;case 3:return!0}}return!0}},x={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var i,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,i,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((i=this._input.match(this.rules[n[r]]))&&(!t||i[0].length>t[0].length)){if(t=i,s=r,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,n[r])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,n[s]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,i,s){switch(i){case 0:return 10;case 1:return e.getLogger().debug("Found space-block"),31;case 2:return e.getLogger().debug("Found nl-block"),31;case 3:return e.getLogger().debug("Found space-block"),29;case 4:e.getLogger().debug(".",t.yytext);break;case 5:e.getLogger().debug("_",t.yytext);break;case 6:return 5;case 7:return t.yytext=-1,28;case 8:return t.yytext=t.yytext.replace(/columns\s+/,""),e.getLogger().debug("COLUMNS (LEX)",t.yytext),28;case 9:case 77:case 78:case 100:this.pushState("md_string");break;case 10:return"MD_STR";case 11:case 35:case 80:this.popState();break;case 12:this.pushState("string");break;case 13:e.getLogger().debug("LEX: POPPING STR:",t.yytext),this.popState();break;case 14:return e.getLogger().debug("LEX: STR end:",t.yytext),"STR";case 15:return t.yytext=t.yytext.replace(/space\:/,""),e.getLogger().debug("SPACE NUM (LEX)",t.yytext),21;case 16:return t.yytext="1",e.getLogger().debug("COLUMNS (LEX)",t.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:case 39:case 41:case 42:case 45:return this.popState(),e.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),e.getLogger().debug("Lex: ))"),"NODE_DEND";case 43:return this.popState(),e.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),e.getLogger().debug("Lex: -)"),"NODE_DEND";case 46:return this.popState(),e.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),e.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),e.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:case 50:return this.popState(),e.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),e.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),e.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),e.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),e.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return e.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return e.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return e.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:case 60:case 61:case 62:case 65:return e.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return e.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 63:return e.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return e.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 66:case 67:case 68:case 69:case 70:case 71:case 72:return this.pushState("NODE"),36;case 73:return e.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),e.getLogger().debug("LEX ARR START"),38;case 75:return e.getLogger().debug("Lex: NODE_ID",t.yytext),32;case 76:return e.getLogger().debug("Lex: EOF",t.yytext),8;case 79:return"NODE_DESCR";case 81:e.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:e.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return e.getLogger().debug("LEX: NODE_DESCR:",t.yytext),"NODE_DESCR";case 84:e.getLogger().debug("LEX POPPING"),this.popState();break;case 85:e.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (right): dir:",t.yytext),"DIR";case 87:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (left):",t.yytext),"DIR";case 88:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (x):",t.yytext),"DIR";case 89:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (y):",t.yytext),"DIR";case 90:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (up):",t.yytext),"DIR";case 91:return t.yytext=t.yytext.replace(/^,\s*/,""),e.getLogger().debug("Lex (down):",t.yytext),"DIR";case 92:return t.yytext="]>",e.getLogger().debug("Lex (ARROW_DIR end):",t.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return e.getLogger().debug("Lex: LINK","#"+t.yytext+"#"),15;case 94:case 95:case 96:return e.getLogger().debug("Lex: LINK",t.yytext),15;case 97:case 98:case 99:return e.getLogger().debug("Lex: START_LINK",t.yytext),this.pushState("LLABEL"),16;case 101:return e.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),e.getLogger().debug("Lex: LINK","#"+t.yytext+"#"),15;case 103:case 104:return this.popState(),e.getLogger().debug("Lex: LINK",t.yytext),15;case 105:return e.getLogger().debug("Lex: COLON",t.yytext),t.yytext=t.yytext.slice(1),27}},rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};function L(){this.yy={}}return b.lexer=x,L.prototype=b,b.Parser=L,new L}());d.parser=d;const g=d;let y={},p=[],b={};const x="color",L="fill",S=(0,r.c)();let f={};const m=function(e,t=""){void 0===f[e]&&(f[e]={id:e,styles:[],textStyles:[]});const i=f[e];null!=t&&t.split(",").forEach((e=>{const t=e.replace(/([^;]*);/,"$1").trim();if(e.match(x)){const e=t.replace(L,"bgFill").replace(x,L);i.textStyles.push(e)}i.styles.push(t)}))},_=function(e,t=""){const i=y[e];null!=t&&(i.styles=t.split(","))},k=function(e,t){e.split(",").forEach((function(e){let i=y[e];if(void 0===i){const t=e.trim();y[t]={id:t,type:"na",children:[]},i=y[t]}i.classes||(i.classes=[]),i.classes.push(t)}))},E=(e,t)=>{const i=e.flat(),s=[];for(const o of i)if(o.label&&(o.label=(n=o.label,r.e.sanitizeText(n,S))),"classDef"!==o.type)if("applyClass"!==o.type)if("applyStyles"!==o.type)if("column-setting"===o.type)t.columns=o.columns||-1;else if("edge"===o.type)b[o.id]?b[o.id]++:b[o.id]=1,o.id=b[o.id]+"-"+o.id,p.push(o);else{o.label||("composite"===o.type?o.label="":o.label=o.id);const e=!y[o.id];if(e?y[o.id]=o:("na"!==o.type&&(y[o.id].type=o.type),o.label!==o.id&&(y[o.id].label=o.label)),o.children&&E(o.children,o),"space"===o.type){const e=o.width||1;for(let t=0;t<e;t++){const e=(0,l.A)(o);e.id=e.id+"-"+t,y[e.id]=e,s.push(e)}}else e&&s.push(o)}else(null==o?void 0:o.stylesStr)&&_(o.id,null==o?void 0:o.stylesStr);else k(o.id,(null==o?void 0:o.styleClass)||"");else m(o.id,o.css);var n;t.children=s};let w=[],v={id:"root",type:"composite",children:[],columns:-1};let D=0;const $={getConfig:()=>(0,r.F)().block,typeStr2Type:function(e){switch(r.l.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return r.l.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}},edgeTypeStr2Type:function(e){return r.l.debug("typeStr2Type",e),"=="===e?"thick":"normal"},edgeStrToEdgeData:function(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}},getLogger:()=>console,getBlocksFlat:()=>[...Object.values(y)],getBlocks:()=>w||[],getEdges:()=>p,setHierarchy:e=>{v.children=e,E(e,v),w=v.children},getBlock:e=>y[e],setBlock:e=>{y[e.id]=e},getColumns:e=>{const t=y[e];return t?t.columns?t.columns:t.children?t.children.length:-1:-1},getClasses:function(){return f},clear:()=>{r.l.debug("Clear called"),(0,r.v)(),v={id:"root",type:"composite",children:[],columns:-1},y={root:v},w=[],f={},p=[],b={}},generateId:()=>(D++,"id-"+Math.random().toString(36).substr(2,12)+"-"+D)},N=(e,t)=>{const i=o.A,s=i(e,"r"),n=i(e,"g"),r=i(e,"b");return a.A(s,n,r,t)},I=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${N(e.edgeLabelBackground,.5)};\n    // background-color:\n  }\n\n  .node .cluster {\n    // fill: ${N(e.mainBkg,.5)};\n    fill: ${N(e.clusterBkg,.5)};\n    stroke: ${N(e.clusterBorder,.2)};\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`;function T(e,t,i=!1){var s,n,l;const o=e;let a="default";((null==(s=null==o?void 0:o.classes)?void 0:s.length)||0)>0&&(a=((null==o?void 0:o.classes)||[]).join(" ")),a+=" flowchart-label";let c,u=0,h="";switch(o.type){case"round":u=5,h="rect";break;case"composite":u=0,h="composite",c=0;break;case"square":case"group":default:h="rect";break;case"diamond":h="question";break;case"hexagon":h="hexagon";break;case"block_arrow":h="block_arrow";break;case"odd":case"rect_left_inv_arrow":h="rect_left_inv_arrow";break;case"lean_right":h="lean_right";break;case"lean_left":h="lean_left";break;case"trapezoid":h="trapezoid";break;case"inv_trapezoid":h="inv_trapezoid";break;case"circle":h="circle";break;case"ellipse":h="ellipse";break;case"stadium":h="stadium";break;case"subroutine":h="subroutine";break;case"cylinder":h="cylinder";break;case"doublecircle":h="doublecircle"}const d=(0,r.k)((null==o?void 0:o.styles)||[]),g=o.label,y=o.size||{width:0,height:0,x:0,y:0};return{labelStyle:d.labelStyle,shape:h,labelText:g,rx:u,ry:u,class:a,style:d.style,id:o.id,directions:o.directions,width:y.width,height:y.height,x:y.x,y:y.y,positioned:i,intersect:void 0,type:o.type,padding:c??((null==(l=null==(n=(0,r.F)())?void 0:n.block)?void 0:l.padding)||0)}}async function z(e,t,i){const s=T(t,0,!1);if("group"===s.type)return;const n=await(0,c.e)(e,s),r=n.node().getBBox(),l=i.getBlock(s.id);l.size={width:r.width,height:r.height,x:0,y:0,node:n},i.setBlock(l),n.remove()}async function A(e,t,i){const s=T(t,0,!0);"space"!==i.getBlock(s.id).type&&(await(0,c.e)(e,s),t.intersect=null==s?void 0:s.intersect,(0,c.p)(s))}async function C(e,t,i,s){for(const n of t)await s(e,n,i),n.children&&await C(e,n.children,i,s)}const O=(null==(n=null==(s=(0,r.c)())?void 0:s.block)?void 0:n.padding)||8;function R(e,t){if(0===e||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(t<0||!Number.isInteger(t))throw new Error("Position must be a non-negative integer."+t);if(e<0)return{px:t,py:0};if(1===e)return{px:0,py:t};return{px:t%e,py:Math.floor(t/e)}}const B=e=>{let t=0,i=0;for(const s of e.children){const{width:n,height:l,x:o,y:a}=s.size||{width:0,height:0,x:0,y:0};r.l.debug("getMaxChildSize abc95 child:",s.id,"width:",n,"height:",l,"x:",o,"y:",a,s.type),"space"!==s.type&&(n>t&&(t=n/(e.widthInColumns||1)),l>i&&(i=l))}return{width:t,height:i}};function F(e,t,i=0,s=0){var n,l,o,a,c,u,h,d,g,y,p;r.l.debug("setBlockSizes abc95 (start)",e.id,null==(n=null==e?void 0:e.size)?void 0:n.x,"block width =",null==e?void 0:e.size,"sieblingWidth",i),(null==(l=null==e?void 0:e.size)?void 0:l.width)||(e.size={width:i,height:s,x:0,y:0});let b=0,x=0;if((null==(o=e.children)?void 0:o.length)>0){for(const i of e.children)F(i,t);const n=B(e);b=n.width,x=n.height,r.l.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",b,x);for(const t of e.children)t.size&&(r.l.debug(`abc95 Setting size of children of ${e.id} id=${t.id} ${b} ${x} ${t.size}`),t.size.width=b*(t.widthInColumns||1)+O*((t.widthInColumns||1)-1),t.size.height=x,t.size.x=0,t.size.y=0,r.l.debug(`abc95 updating size of ${e.id} children child:${t.id} maxWidth:${b} maxHeight:${x}`));for(const i of e.children)F(i,t,b,x);const l=e.columns||-1;let o=0;for(const t of e.children)o+=t.widthInColumns||1;let d=e.children.length;l>0&&l<o&&(d=l),e.widthInColumns;const g=Math.ceil(o/d);let y=d*(b+O)+O,p=g*(x+O)+O;if(y<i){r.l.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${i} sieblingHeight ${s} width ${y}`),y=i,p=s;const t=(i-d*O-O)/d,n=(s-g*O-O)/g;r.l.debug("Size indata abc88",e.id,"childWidth",t,"maxWidth",b),r.l.debug("Size indata abc88",e.id,"childHeight",n,"maxHeight",x),r.l.debug("Size indata abc88 xSize",d,"padding",O);for(const i of e.children)i.size&&(i.size.width=t,i.size.height=n,i.size.x=0,i.size.y=0)}if(r.l.debug(`abc95 (finale calc) ${e.id} xSize ${d} ySize ${g} columns ${l}${e.children.length} width=${Math.max(y,(null==(a=e.size)?void 0:a.width)||0)}`),y<((null==(c=null==e?void 0:e.size)?void 0:c.width)||0)){y=(null==(u=null==e?void 0:e.size)?void 0:u.width)||0;const t=l>0?Math.min(e.children.length,l):e.children.length;if(t>0){const i=(y-t*O-O)/t;r.l.debug("abc95 (growing to fit) width",e.id,y,null==(h=e.size)?void 0:h.width,i);for(const t of e.children)t.size&&(t.size.width=i)}}e.size={width:y,height:p,x:0,y:0}}r.l.debug("setBlockSizes abc94 (done)",e.id,null==(d=null==e?void 0:e.size)?void 0:d.x,null==(g=null==e?void 0:e.size)?void 0:g.width,null==(y=null==e?void 0:e.size)?void 0:y.y,null==(p=null==e?void 0:e.size)?void 0:p.height)}function P(e,t){var i,s,n,l,o,a,c,u,h,d,g,y,p,b,x,L,S;r.l.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${null==(i=null==e?void 0:e.size)?void 0:i.x} y: ${null==(s=null==e?void 0:e.size)?void 0:s.y} width: ${null==(n=null==e?void 0:e.size)?void 0:n.width}`);const f=e.columns||-1;if(r.l.debug("layoutBlocks columns abc95",e.id,"=>",f,e),e.children&&e.children.length>0){const t=(null==(o=null==(l=null==e?void 0:e.children[0])?void 0:l.size)?void 0:o.width)||0,i=e.children.length*t+(e.children.length-1)*O;r.l.debug("widthOfChildren 88",i,"posX");let s=0;r.l.debug("abc91 block?.size?.x",e.id,null==(a=null==e?void 0:e.size)?void 0:a.x);let n=(null==(c=null==e?void 0:e.size)?void 0:c.x)?(null==(u=null==e?void 0:e.size)?void 0:u.x)+(-(null==(h=null==e?void 0:e.size)?void 0:h.width)/2||0):-O,x=0;for(const l of e.children){const t=e;if(!l.size)continue;const{width:i,height:o}=l.size,{px:a,py:c}=R(f,s);if(c!=x&&(x=c,n=(null==(d=null==e?void 0:e.size)?void 0:d.x)?(null==(g=null==e?void 0:e.size)?void 0:g.x)+(-(null==(y=null==e?void 0:e.size)?void 0:y.width)/2||0):-O,r.l.debug("New row in layout for block",e.id," and child ",l.id,x)),r.l.debug(`abc89 layout blocks (child) id: ${l.id} Pos: ${s} (px, py) ${a},${c} (${null==(p=null==t?void 0:t.size)?void 0:p.x},${null==(b=null==t?void 0:t.size)?void 0:b.y}) parent: ${t.id} width: ${i}${O}`),t.size){const e=i/2;l.size.x=n+O+e,r.l.debug(`abc91 layout blocks (calc) px, pyid:${l.id} startingPos=X${n} new startingPosX${l.size.x} ${e} padding=${O} width=${i} halfWidth=${e} => x:${l.size.x} y:${l.size.y} ${l.widthInColumns} (width * (child?.w || 1)) / 2 ${i*((null==l?void 0:l.widthInColumns)||1)/2}`),n=l.size.x+e,l.size.y=t.size.y-t.size.height/2+c*(o+O)+o/2+O,r.l.debug(`abc88 layout blocks (calc) px, pyid:${l.id}startingPosX${n}${O}${e}=>x:${l.size.x}y:${l.size.y}${l.widthInColumns}(width * (child?.w || 1)) / 2${i*((null==l?void 0:l.widthInColumns)||1)/2}`)}l.children&&P(l),s+=(null==l?void 0:l.widthInColumns)||1,r.l.debug("abc88 columnsPos",l,s)}}r.l.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${null==(x=null==e?void 0:e.size)?void 0:x.x} y: ${null==(L=null==e?void 0:e.size)?void 0:L.y} width: ${null==(S=null==e?void 0:e.size)?void 0:S.width}`)}function Y(e,{minX:t,minY:i,maxX:s,maxY:n}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&"root"!==e.id){const{x:r,y:l,width:o,height:a}=e.size;r-o/2<t&&(t=r-o/2),l-a/2<i&&(i=l-a/2),r+o/2>s&&(s=r+o/2),l+a/2>n&&(n=l+a/2)}if(e.children)for(const r of e.children)({minX:t,minY:i,maxX:s,maxY:n}=Y(r,{minX:t,minY:i,maxX:s,maxY:n}));return{minX:t,minY:i,maxX:s,maxY:n}}function K(e){const t=e.getBlock("root");if(!t)return;F(t,e,0,0),P(t),r.l.debug("getBlocks",JSON.stringify(t,null,2));const{minX:i,minY:s,maxX:n,maxY:l}=Y(t);return{x:i,y:s,width:n-i,height:l-s}}const X={parser:g,db:$,renderer:{draw:async function(e,t,i,s){const{securityLevel:n,block:l}=(0,r.F)(),o=s.db;let a;"sandbox"===n&&(a=(0,h.Ltv)("#i"+t));const d="sandbox"===n?(0,h.Ltv)(a.nodes()[0].contentDocument.body):(0,h.Ltv)("body"),g="sandbox"===n?d.select(`[id="${t}"]`):(0,h.Ltv)(`[id="${t}"]`);(0,c.a)(g,["point","circle","cross"],s.type,t);const y=o.getBlocks(),p=o.getBlocksFlat(),b=o.getEdges(),x=g.insert("g").attr("class","block");await async function(e,t,i){await C(e,t,i,z)}(x,y,o);const L=K(o);if(await async function(e,t,i){await C(e,t,i,A)}(x,y,o),await async function(e,t,i,s,n){const r=new u.T({multigraph:!0,compound:!0});r.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(const l of i)l.size&&r.setNode(l.id,{width:l.size.width,height:l.size.height,intersect:l.intersect});for(const l of t)if(l.start&&l.end){const t=s.getBlock(l.start),i=s.getBlock(l.end);if((null==t?void 0:t.size)&&(null==i?void 0:i.size)){const s=t.size,o=i.size,a=[{x:s.x,y:s.y},{x:s.x+(o.x-s.x)/2,y:s.y+(o.y-s.y)/2},{x:o.x,y:o.y}];await(0,c.h)(e,{v:l.start,w:l.end,name:l.id},{...l,arrowTypeEnd:l.arrowTypeEnd,arrowTypeStart:l.arrowTypeStart,points:a,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",r,n),l.label&&(await(0,c.f)(e,{...l,label:l.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:l.arrowTypeEnd,arrowTypeStart:l.arrowTypeStart,points:a,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),await(0,c.j)({...l,x:a[1].x,y:a[1].y},{originalPath:a}))}}}(x,b,p,o,t),L){const e=L,t=Math.max(1,Math.round(e.width/e.height*.125)),i=e.height+t+10,s=e.width+10,{useMaxWidth:n}=l;(0,r.i)(g,i,s,!!n),r.l.debug("Here Bounds",L,e),g.attr("viewBox",`${e.x-5} ${e.y-5} ${e.width+10} ${e.height+10}`)}(0,h.UMr)(h.zt)},getClasses:function(e,t){return t.db.getClasses()}},styles:I}}}]);