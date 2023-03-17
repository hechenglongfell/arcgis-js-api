/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./error-handler","./scanner","./types"],(function(e,n,t,r){"use strict";let s=function(){function e(e,r){this.errorHandler=new n.ErrorHandler,this.errorHandler.tolerant=!!r&&("boolean"==typeof r.tolerant&&r.tolerant),this.scanner=new t.Scanner(e,this.errorHandler),this.trackComments=!!r&&("boolean"==typeof r.comment&&r.comment),this.buffer=[]}var s=e.prototype;return s.errors=function(){return this.errorHandler.errors},s.getNextToken=function(){if(0===this.buffer.length){const e=this.scanner.scanComments();if(this.trackComments&&e&&e.forEach((e=>{const n=this.scanner.source.slice(e.start,e.end),t={type:e.multiLine?r.Syntax.BlockComment:r.Syntax.LineComment,value:n,range:e.range,loc:e.loc};this.buffer.push(t)})),!this.scanner.eof()){const e={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},n=this.scanner.lex(),t={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},s={type:r.TokenNames[n.type],value:this.scanner.source.slice(n.start,n.end),range:[n.start,n.end],loc:{start:e,end:t}};this.buffer.push(s)}}return this.buffer.shift()},e}();e.Tokenizer=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
