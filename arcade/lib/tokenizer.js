/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./error-handler","./nodes","./scanner","./token"],(function(e,t,n,s,r){"use strict";let i=function(){function e(){this.values=[],this.curly=this.paren=-1}var t=e.prototype;return t.beforeFunctionExpression=function(e){return["(","{","[","return",",",...n.AssignmentOperators,...n.BinaryOperators,...n.LogicalOperators,...n.UnaryOperators].indexOf(e)>=0},t.isRegexStart=function(){const e=this.values[this.values.length-1];let t=null!==e;switch(e){case"this":case"]":t=!1;break;case")":{const e=this.values[this.paren-1];t="if"===e||"while"===e||"for"===e||"with"===e}break;case"}":if(t=!0,"function"===this.values[this.curly-3]){const e=this.values[this.curly-4];t=!!e&&!this.beforeFunctionExpression(e)}else if("function"===this.values[this.curly-4]){const e=this.values[this.curly-5];t=!e||!this.beforeFunctionExpression(e)}}return t},t.push=function(e){7===e.type||4===e.type?("{"===e.value?this.curly=this.values.length:"("===e.value&&(this.paren=this.values.length),this.values.push(e.value)):this.values.push(null)},e}(),a=function(){function e(e,n){this.errorHandler=new t.ErrorHandler,this.errorHandler.tolerant=!!n&&("boolean"==typeof n.tolerant&&n.tolerant),this.scanner=new s.Scanner(e,this.errorHandler),this.scanner.trackComment=!!n&&("boolean"==typeof n.comment&&n.comment),this.trackRange=!!n&&("boolean"==typeof n.range&&n.range),this.trackLoc=!!n&&("boolean"==typeof n.loc&&n.loc),this.buffer=[],this.reader=new i}var n=e.prototype;return n.errors=function(){return this.errorHandler.errors},n.getNextToken=function(){if(0===this.buffer.length){const t=this.scanner.scanComments();if(t)for(let e=0;e<t.length;++e){const n=t[e],s=this.scanner.source.slice(n.slice[0],n.slice[1]),r={type:n.multiLine?"BlockComment":"LineComment",value:s};this.trackRange&&(r.range=n.range),this.trackLoc&&(r.loc=n.loc),this.buffer.push(r)}if(!this.scanner.eof()){let t=null;this.trackLoc&&(t={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{line:0,column:0}});let n;if("/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()){const t=this.scanner.saveState();try{n=this.scanner.scanRegExp()}catch(e){this.scanner.restoreState(t),n=this.scanner.lex()}}else n=this.scanner.lex();this.reader.push(n);const s={type:r.TokenName[n.type],value:this.scanner.source.slice(n.start,n.end)};if(this.trackRange&&(s.range=[n.start,n.end]),this.trackLoc&&t&&(t.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},s.loc=t),9===n.type){const e=n.pattern,t=n.flags;s.regex={pattern:e,flags:t}}this.buffer.push(s)}}return this.buffer.shift()},e}();e.Tokenizer=a,Object.defineProperty(e,"__esModule",{value:!0})}));
