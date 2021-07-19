/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./assert","./character","./messages"],(function(e,t,i,s){"use strict";function n(e){return"0123456789abcdef".indexOf(e.toLowerCase())}function r(e){return"01234567".indexOf(e)}let h=function(){function e(e,t){this.source=e,this.errorHandler=t,this.trackComment=!1,this.isModule=!1,this.length=e.length,this.index=0,this.lineNumber=e.length>0?1:0,this.lineStart=0,this.curlyStack=[]}var h=e.prototype;return h.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}},h.restoreState=function(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart,this.curlyStack=e.curlyStack},h.eof=function(){return this.index>=this.length},h.throwUnexpectedToken=function(e=s.Messages.UnexpectedTokenIllegal){return this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},h.tolerateUnexpectedToken=function(e=s.Messages.UnexpectedTokenIllegal){this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},h.skipSingleLineComment=function(e){let t,s,n=[];for(this.trackComment&&(n=[],t=this.index-e,s={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{}});!this.eof();){const r=this.source.charCodeAt(this.index);if(++this.index,i.Character.isLineTerminator(r)){if(this.trackComment){s.end={line:this.lineNumber,column:this.index-this.lineStart-1};const i={multiLine:!1,slice:[t+e,this.index-1],range:[t,this.index-1],loc:s};n.push(i)}return 13===r&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,n}}if(this.trackComment){s.end={line:this.lineNumber,column:this.index-this.lineStart};const i={multiLine:!1,slice:[t+e,this.index],range:[t,this.index],loc:s};n.push(i)}return n},h.skipMultiLineComment=function(){let e,t,s=[];for(this.trackComment&&(s=[],e=this.index-2,t={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{}});!this.eof();){const n=this.source.charCodeAt(this.index);if(i.Character.isLineTerminator(n))13===n&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(42===n){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,this.trackComment){t.end={line:this.lineNumber,column:this.index-this.lineStart};const i={multiLine:!0,slice:[e+2,this.index-2],range:[e,this.index],loc:t};s.push(i)}return s}++this.index}else++this.index}if(this.trackComment){t.end={line:this.lineNumber,column:this.index-this.lineStart};const i={multiLine:!0,slice:[e+2,this.index],range:[e,this.index],loc:t};s.push(i)}return this.tolerateUnexpectedToken(),s},h.scanComments=function(){let e;this.trackComment&&(e=[]);let t=0===this.index;for(;!this.eof();){let s=this.source.charCodeAt(this.index);if(i.Character.isWhiteSpace(s))++this.index;else if(i.Character.isLineTerminator(s))++this.index,13===s&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t=!0;else if(47===s)if(s=this.source.charCodeAt(this.index+1),47===s){this.index+=2;const i=this.skipSingleLineComment(2);this.trackComment&&(e=e.concat(i)),t=!0}else{if(42!==s)break;{this.index+=2;const t=this.skipMultiLineComment();this.trackComment&&(e=e.concat(t))}}else if(t&&45===s){if(45!==this.source.charCodeAt(this.index+1)||62!==this.source.charCodeAt(this.index+2))break;{this.index+=3;const t=this.skipSingleLineComment(3);this.trackComment&&(e=e.concat(t))}}else{if(60!==s||this.isModule)break;if("!--"!==this.source.slice(this.index+1,this.index+4))break;{this.index+=4;const t=this.skipSingleLineComment(4);this.trackComment&&(e=e.concat(t))}}}return e},h.isFutureReservedWord=function(e){return!1},h.isStrictModeReservedWord=function(e){return!1},h.isRestrictedWord=function(e){return!1},h.isKeyword=function(e){switch((e=e.toLowerCase()).length){case 2:return"if"===e||"in"===e;case 3:return"var"===e||"for"===e;case 4:return"else"===e;case 5:return"break"===e;case 6:return"return"===e;case 8:return"function"===e||"continue"===e;default:return!1}},h.codePointAt=function(e){let t=this.source.charCodeAt(e);if(t>=55296&&t<=56319){const i=this.source.charCodeAt(e+1);if(i>=56320&&i<=57343){t=1024*(t-55296)+i-56320+65536}}return t},h.scanHexEscape=function(e){const t="u"===e?4:2;let s=0;for(let r=0;r<t;++r){if(this.eof()||!i.Character.isHexDigit(this.source.charCodeAt(this.index)))return null;s=16*s+n(this.source[this.index++])}return String.fromCharCode(s)},h.scanUnicodeCodePointEscape=function(){let e=this.source[this.index],t=0;for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],i.Character.isHexDigit(e.charCodeAt(0)));)t=16*t+n(e);return(t>1114111||"}"!==e)&&this.throwUnexpectedToken(),i.Character.fromCodePoint(t)},h.getIdentifier=function(){const e=this.index++;for(;!this.eof();){const t=this.source.charCodeAt(this.index);if(92===t)return this.index=e,this.getComplexIdentifier();if(t>=55296&&t<57343)return this.index=e,this.getComplexIdentifier();if(!i.Character.isIdentifierPart(t))break;++this.index}return this.source.slice(e,this.index)},h.getComplexIdentifier=function(){let e,t=this.codePointAt(this.index),s=i.Character.fromCodePoint(t);for(this.index+=s.length,92===t&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):(e=this.scanHexEscape("u"),null!==e&&"\\"!==e&&i.Character.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken()),s=e);!this.eof()&&(t=this.codePointAt(this.index),i.Character.isIdentifierPart(t));)e=i.Character.fromCodePoint(t),s+=e,this.index+=e.length,92===t&&(s=s.substr(0,s.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):(e=this.scanHexEscape("u"),null!==e&&"\\"!==e&&i.Character.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken()),s+=e);return s},h.octalToDecimal=function(e){let t="0"!==e,s=r(e);return!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(t=!0,s=8*s+r(this.source[this.index++]),"0123".indexOf(e)>=0&&!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(s=8*s+r(this.source[this.index++]))),{code:s,octal:t}},h.scanIdentifier=function(){let e;const t=this.index,i=92===this.source.charCodeAt(t)?this.getComplexIdentifier():this.getIdentifier();if(e=1===i.length?3:this.isKeyword(i)?4:"null"===i.toLowerCase()?5:"true"===i.toLowerCase()||"false"===i.toLowerCase()?1:3,3!==e&&t+i.length!==this.index){const e=this.index;this.index=t,this.tolerateUnexpectedToken(s.Messages.InvalidEscapedReservedWord),this.index=e}return{type:e,value:i,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},h.scanPunctuator=function(){const e=this.index;let t=this.source[this.index];switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index;break;case".":++this.index,"."===this.source[this.index]&&"."===this.source[this.index+1]&&(this.index+=2,t="...");break;case"}":++this.index,this.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;default:t=this.source.substr(this.index,4),">>>="===t?this.index+=4:(t=t.substr(0,3),"==="===t||"!=="===t||">>>"===t||"<<="===t||">>="===t||"**="===t?this.index+=3:(t=t.substr(0,2),"&&"===t||"||"===t||"=="===t||"!="===t||"+="===t||"-="===t||"*="===t||"/="===t||"++"===t||"--"===t||"<<"===t||">>"===t||"&="===t||"|="===t||"^="===t||"%="===t||"<="===t||">="===t||"=>"===t||"**"===t?this.index+=2:(t=this.source[this.index],"<>=!+-*%&|^/".indexOf(t)>=0&&++this.index)))}return this.index===e&&this.throwUnexpectedToken(),{type:7,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},h.scanHexLiteral=function(e){let t="";for(;!this.eof()&&i.Character.isHexDigit(this.source.charCodeAt(this.index));)t+=this.source[this.index++];return 0===t.length&&this.throwUnexpectedToken(),i.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+t,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},h.scanBinaryLiteral=function(e){let t,s="";for(;!this.eof()&&(t=this.source[this.index],"0"===t||"1"===t);)s+=this.source[this.index++];return 0===s.length&&this.throwUnexpectedToken(),this.eof()||(t=this.source.charCodeAt(this.index),(i.Character.isIdentifierStart(t)||i.Character.isDecimalDigit(t))&&this.throwUnexpectedToken()),{type:6,value:parseInt(s,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},h.scanOctalLiteral=function(e,t){let s="",n=!1;for(i.Character.isOctalDigit(e.charCodeAt(0))?(n=!0,s="0"+this.source[this.index++]):++this.index;!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index));)s+=this.source[this.index++];return n||0!==s.length||this.throwUnexpectedToken(),(i.Character.isIdentifierStart(this.source.charCodeAt(this.index))||i.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(s,8),octal:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},h.scanNumericLiteral=function(){const e=this.index;let s=this.source[e];t.assert(i.Character.isDecimalDigit(s.charCodeAt(0))||"."===s,"Numeric literal must start with a decimal digit or a decimal point");let n="";if("."!==s){if(n=this.source[this.index++],s=this.source[this.index],"0"===n){if("x"===s||"X"===s)return++this.index,this.scanHexLiteral(e);if("b"===s||"B"===s)return++this.index,this.scanBinaryLiteral(e);if("o"===s||"O"===s)return this.scanOctalLiteral(s,e)}for(;i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];s=this.source[this.index]}if("."===s){for(n+=this.source[this.index++];i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];s=this.source[this.index]}if("e"===s||"E"===s)if(n+=this.source[this.index++],s=this.source[this.index],"+"!==s&&"-"!==s||(n+=this.source[this.index++]),i.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++];else this.throwUnexpectedToken();return i.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(n),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},h.scanStringLiteral=function(){const e=this.index;let n=this.source[e];t.assert("'"===n||'"'===n,"String literal must starts with a quote"),++this.index;let r=!1,h="";for(;!this.eof();){let e=this.source[this.index++];if(e===n){n="";break}if("\\"===e)if(e=this.source[this.index++],e&&i.Character.isLineTerminator(e.charCodeAt(0)))++this.lineNumber,"\r"===e&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(e){case"u":if("{"===this.source[this.index])++this.index,h+=this.scanUnicodeCodePointEscape();else{const t=this.scanHexEscape(e);null===t&&this.throwUnexpectedToken(),h+=t}break;case"x":{const t=this.scanHexEscape(e);null===t&&this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),h+=t;break}case"n":h+="\n";break;case"r":h+="\r";break;case"t":h+="\t";break;case"b":h+="\b";break;case"f":h+="\f";break;case"v":h+="\v";break;case"8":case"9":h+=e,this.tolerateUnexpectedToken();break;default:if(e&&i.Character.isOctalDigit(e.charCodeAt(0))){const t=this.octalToDecimal(e);r=t.octal||r,h+=String.fromCharCode(t.code)}else h+=e}else{if(i.Character.isLineTerminator(e.charCodeAt(0)))break;h+=e}}return""!==n&&(this.index=e,this.throwUnexpectedToken()),{type:8,value:h,octal:r,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},h.scanTemplate=function(){let e="",t=!1;const n=this.index,r="`"===this.source[n];let h=!1,a=2;for(++this.index;!this.eof();){let n=this.source[this.index++];if("`"===n){a=1,h=!0,t=!0;break}if("$"===n){if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,t=!0;break}e+=n}else if("\\"===n)if(n=this.source[this.index++],i.Character.isLineTerminator(n.charCodeAt(0)))++this.lineNumber,"\r"===n&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(n){case"n":e+="\n";break;case"r":e+="\r";break;case"t":e+="\t";break;case"u":if("{"===this.source[this.index])++this.index,e+=this.scanUnicodeCodePointEscape();else{const t=this.index,i=this.scanHexEscape(n);null!==i?e+=i:(this.index=t,e+=n)}break;case"x":{const t=this.scanHexEscape(n);null===t&&this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),e+=t;break}case"b":e+="\b";break;case"f":e+="\f";break;case"v":e+="\v";break;default:"0"===n?(i.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral),e+="\0"):i.Character.isOctalDigit(n.charCodeAt(0))?this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral):e+=n}else i.Character.isLineTerminator(n.charCodeAt(0))?(++this.lineNumber,"\r"===n&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=n}return t||this.throwUnexpectedToken(),r||this.curlyStack.pop(),{type:10,value:this.source.slice(n+1,this.index-a),cooked:e,head:r,tail:h,lineNumber:this.lineNumber,lineStart:this.lineStart,start:n,end:this.index}},h.testRegExp=function(e,t){const i="￿";let n=e;t.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,((e,t,n)=>{const r=parseInt(t||n,16);return r>1114111&&this.throwUnexpectedToken(s.Messages.InvalidRegExp),r<=65535?String.fromCharCode(r):i})).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,i));try{RegExp(n)}catch(r){this.throwUnexpectedToken(s.Messages.InvalidRegExp)}try{return new RegExp(e,t)}catch(h){return null}},h.scanRegExpBody=function(){let e=this.source[this.index];t.assert("/"===e,"Regular expression literal must start with a slash");let n=this.source[this.index++],r=!1,h=!1;for(;!this.eof();)if(e=this.source[this.index++],n+=e,"\\"===e)e=this.source[this.index++],i.Character.isLineTerminator(e.charCodeAt(0))&&this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),n+=e;else if(i.Character.isLineTerminator(e.charCodeAt(0)))this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);else if(r)"]"===e&&(r=!1);else{if("/"===e){h=!0;break}"["===e&&(r=!0)}return h||this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),n.substr(1,n.length-2)},h.scanRegExpFlags=function(){let e="",t="";for(;!this.eof();){let s=this.source[this.index];if(!i.Character.isIdentifierPart(s.charCodeAt(0)))break;if(++this.index,"\\"!==s||this.eof())t+=s,e+=s;else if(s=this.source[this.index],"u"===s){++this.index;let i=this.index;const s=this.scanHexEscape("u");if(null!==s)for(t+=s,e+="\\u";i<this.index;++i)e+=this.source[i];else this.index=i,t+="u",e+="\\u";this.tolerateUnexpectedToken()}else e+="\\",this.tolerateUnexpectedToken()}return t},h.scanRegExp=function(){const e=this.index,t=this.scanRegExpBody(),i=this.scanRegExpFlags();return{type:9,value:"",pattern:t,flags:i,regex:this.testRegExp(t,i),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},h.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};const e=this.source.charCodeAt(this.index);return i.Character.isIdentifierStart(e)?this.scanIdentifier():40===e||41===e||59===e?this.scanPunctuator():39===e||34===e?this.scanStringLiteral():46===e?i.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():i.Character.isDecimalDigit(e)?this.scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():e>=55296&&e<57343&&i.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},e}();e.Scanner=h,Object.defineProperty(e,"__esModule",{value:!0})}));
