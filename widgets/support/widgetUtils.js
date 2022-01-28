/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/ArrayPool","../../core/has","../../core/Logger"],(function(t,e,r,i){"use strict";var n="[object Object]";function o(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(r){}return e}function a(t,e){return function(r){return t(e(r))}}var s=Function.prototype,l=Object.prototype,c=s.toString,u=l.hasOwnProperty,f=c.call(Object),g=l.toString,p=a(Object.getPrototypeOf,Object);function d(t){return!!t&&"object"==typeof t}function h(t){if(!d(t)||g.call(t)!=n||o(t))return!1;var e=p(t);if(null===e)return!0;var r=u.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==f}var m=h,b={exports:{}},v={},y={exports:{}},w={};function x(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}function k(t,e,r){}function A(t,e,r){}var T=/javascript\s*\:/gim;function L(t,e){return T.test(e)?"":e}w.whiteList=x(),w.getDefaultWhiteList=x,w.onAttr=k,w.onIgnoreAttr=A,w.safeAttrValue=L;var O={indexOf:function(t,e){var r,i;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var i,n;if(Array.prototype.forEach)return t.forEach(e,r);for(i=0,n=t.length;i<n;i++)e.call(r,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}};function I(t,e){";"!==(t=O.trimRight(t))[t.length-1]&&(t+=";");var r=t.length,i=!1,n=0,o=0,a="";function s(){if(!i){var r=O.trim(t.slice(n,o)),s=r.indexOf(":");if(-1!==s){var l=O.trim(r.slice(0,s)),c=O.trim(r.slice(s+1));if(l){var u=e(n,a.length,l,c,r);u&&(a+=u+"; ")}}}n=o+1}for(;o<r;o++){var l=t[o];if("/"===l&&"*"===t[o+1]){var c=t.indexOf("*/",o+2);if(-1===c)break;n=(o=c+1)+1,i=!1}else"("===l?i=!0:")"===l?i=!1:";"===l?i||s():"\n"===l&&s()}return O.trim(a)}var S=w,j=I;function C(t){return null==t}function E(t){var e={};for(var r in t)e[r]=t[r];return e}function z(t){(t=E(t||{})).whiteList=t.whiteList||S.whiteList,t.onAttr=t.onAttr||S.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||S.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||S.safeAttrValue,this.options=t}z.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,i=e.onAttr,n=e.onIgnoreAttr,o=e.safeAttrValue;return j(t,(function(t,e,a,s,l){var c=r[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=o(a,s)){var f,g={position:e,sourcePosition:t,source:l,isWhite:u};return u?C(f=i(a,s,g))?a+":"+s:f:C(f=n(a,s,g))?void 0:f}}))};var V=z;!function(t,e){var r=w,i=V;function n(t,e){return new i(e).process(t)}for(var o in(e=t.exports=n).FilterCSS=i,r)e[o]=r[o]}(y,y.exports);var F={indexOf:function(t,e){var r,i;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var i,n;if(Array.prototype.forEach)return t.forEach(e,r);for(i=0,n=t.length;i<n;i++)e.call(r,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}},W=y.exports.FilterCSS,P=y.exports.getDefaultWhiteList,_=F;function B(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var D=new W;function H(t,e,r){}function q(t,e,r){}function R(t,e,r){}function N(t,e,r){}function $(t){return t.replace(X,"&lt;").replace(M,"&gt;")}function U(t,e,r,i){if(r=st(r),"href"===e||"src"===e){if("#"===(r=_.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(J.lastIndex=0,J.test(r))return""}else if("style"===e){if(tt.lastIndex=0,tt.test(r))return"";if(et.lastIndex=0,et.test(r)&&(J.lastIndex=0,J.test(r)))return"";!1!==i&&(r=(i=i||D).process(r))}return r=lt(r)}var X=/</g,M=/>/g,G=/"/g,Q=/&quot;/g,Z=/&#([a-zA-Z0-9]*);?/gim,K=/&colon;?/gim,Y=/&newline;?/gim,J=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,tt=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,et=/u\s*r\s*l\s*\(.*/gi;function rt(t){return t.replace(G,"&quot;")}function it(t){return t.replace(Q,'"')}function nt(t){return t.replace(Z,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function ot(t){return t.replace(K,":").replace(Y," ")}function at(t){for(var e="",r=0,i=t.length;r<i;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return _.trim(e)}function st(t){return t=at(t=ot(t=nt(t=it(t))))}function lt(t){return t=$(t=rt(t))}function ct(){return""}function ut(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t);function i(e){return!!r||-1!==_.indexOf(t,e)}var n=[],o=!1;return{onIgnoreTag:function(t,r,a){if(i(t)){if(a.isClosing){var s="[/removed]",l=a.position+s.length;return n.push([!1!==o?o:a.position,l]),o=!1,s}return o||(o=a.position),"[removed]"}return e(t,r,a)},remove:function(t){var e="",r=0;return _.forEach(n,(function(i){e+=t.slice(r,i[0]),r=i[1]})),e+=t.slice(r)}}}function ft(t){for(var e="",r=0;r<t.length;){var i=t.indexOf("\x3c!--",r);if(-1===i){e+=t.slice(r);break}e+=t.slice(r,i);var n=t.indexOf("--\x3e",i);if(-1===n)break;r=n+3}return e}function gt(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}))).join("")}v.whiteList=B(),v.getDefaultWhiteList=B,v.onTag=H,v.onIgnoreTag=q,v.onTagAttr=R,v.onIgnoreTagAttr=N,v.safeAttrValue=U,v.escapeHtml=$,v.escapeQuote=rt,v.unescapeQuote=it,v.escapeHtmlEntities=nt,v.escapeDangerHtml5Entities=ot,v.clearNonPrintableCharacter=at,v.friendlyAttrValue=st,v.escapeAttrValue=lt,v.onIgnoreTagStripAll=ct,v.StripTagBody=ut,v.stripCommentTag=ft,v.stripBlankChar=gt,v.cssFilter=D,v.getDefaultCSSWhiteList=P;var pt={},dt=F;function ht(t){var e=dt.spaceIndex(t);if(-1===e)var r=t.slice(1,-1);else r=t.slice(1,e+1);return"/"===(r=dt.trim(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function mt(t){return"</"===t.slice(0,2)}function bt(t,e,r){var i="",n=0,o=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var f=t.charAt(s);if(!1===o){if("<"===f){o=s;continue}}else if(!1===a){if("<"===f){i+=r(t.slice(n,s)),o=s,n=s;continue}if(">"===f){i+=r(t.slice(n,o)),c=ht(u=t.slice(o,s+1)),i+=e(o,i.length,c,u,mt(u)),n=s+1,o=!1;continue}if('"'===f||"'"===f)for(var g=1,p=t.charAt(s-g);""===p.trim()||"="===p;){if("="===p){a=f;continue t}p=t.charAt(s-++g)}}else if(f===a){a=!1;continue}}return n<t.length&&(i+=r(t.substr(n))),i}var vt=/[^a-zA-Z0-9_:\.\-]/gim;function yt(t,e){var r=0,i=[],n=!1,o=t.length;function a(t,r){if(!((t=(t=dt.trim(t)).replace(vt,"").toLowerCase()).length<1)){var n=e(t,r||"");n&&i.push(n)}}for(var s=0;s<o;s++){var l,c=t.charAt(s);if(!1!==n||"="!==c)if(!1===n||s!==r||'"'!==c&&"'"!==c||"="!==t.charAt(s-1))if(/\s|\n|\t/.test(c)){if(t=t.replace(/\s|\n|\t/g," "),!1===n){if(-1===(l=wt(t,s))){a(dt.trim(t.slice(r,s))),n=!1,r=s+1;continue}s=l-1;continue}if(-1===(l=xt(t,s-1))){a(n,At(dt.trim(t.slice(r,s)))),n=!1,r=s+1;continue}}else;else{if(-1===(l=t.indexOf(c,s+1)))break;a(n,dt.trim(t.slice(r+1,l))),n=!1,r=(s=l)+1}else n=t.slice(r,s),r=s+1}return r<t.length&&(!1===n?a(t.slice(r)):a(n,At(dt.trim(t.slice(r))))),dt.trim(i.join(" "))}function wt(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function xt(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function kt(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}function At(t){return kt(t)?t.substr(1,t.length-2):t}pt.parseTag=bt,pt.parseAttr=yt;var Tt=y.exports.FilterCSS,Lt=v,Ot=pt,It=Ot.parseTag,St=Ot.parseAttr,jt=F;function Ct(t){return null==t}function Et(t){var e=jt.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=jt.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=jt.trim(t.slice(0,-1))),{html:t,closing:r}}function zt(t){var e={};for(var r in t)e[r]=t[r];return e}function Vt(t){(t=zt(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=Lt.onIgnoreTagStripAll),t.whiteList=t.whiteList||Lt.whiteList,t.onTag=t.onTag||Lt.onTag,t.onTagAttr=t.onTagAttr||Lt.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||Lt.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||Lt.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||Lt.safeAttrValue,t.escapeHtml=t.escapeHtml||Lt.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new Tt(t.css))}Vt.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this,r=e.options,i=r.whiteList,n=r.onTag,o=r.onIgnoreTag,a=r.onTagAttr,s=r.onIgnoreTagAttr,l=r.safeAttrValue,c=r.escapeHtml,u=e.cssFilter;r.stripBlankChar&&(t=Lt.stripBlankChar(t)),r.allowCommentTag||(t=Lt.stripCommentTag(t));var f=!1;if(r.stripIgnoreTagBody){f=Lt.StripTagBody(r.stripIgnoreTagBody,o);o=f.onIgnoreTag}var g=It(t,(function(t,e,r,f,g){var p,d={sourcePosition:t,position:e,isClosing:g,isWhite:i.hasOwnProperty(r)};if(!Ct(p=n(r,f,d)))return p;if(d.isWhite){if(d.isClosing)return"</"+r+">";var h=Et(f),m=i[r],b=St(h.html,(function(t,e){var i,n=-1!==jt.indexOf(m,t);return Ct(i=a(r,t,e,n))?n?(e=l(r,t,e,u))?t+'="'+e+'"':t:Ct(i=s(r,t,e,n))?void 0:i:i}));f="<"+r;return b&&(f+=" "+b),h.closing&&(f+=" /"),f+=">"}return Ct(p=o(r,f,d))?c(f):p}),c);return f&&(g=f.remove(g)),g};var Ft=Vt;!function(t,e){var r=v,i=pt,n=Ft;function o(t,e){return new n(e).process(t)}for(var a in(e=t.exports=o).filterXSS=o,e.FilterXSS=n,r)e[a]=r[a];for(var a in i)e[a]=i[a];function s(){return"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope}s()&&(self.filterXSS=t.exports)}(b,b.exports);var Wt,Pt,_t=function(){function t(t,e){var r,i=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,r,n){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?i.sanitizeUrl(r):b.exports.safeAttrValue(t,e,r,n)}},t&&!e?r=t:t&&e?(r=Object.create(this.arcgisFilterOptions),Object.keys(t).forEach((function(e){"whiteList"===e?r.whiteList=i._extendObjectOfArrays([i.arcgisWhiteList,t.whiteList||{}]):r[e]=t[e]}))):(r=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=r,this._xssFilter=new b.exports.FilterXSS(r)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t){var e=this._trim(t.substring(0,t.indexOf(":")));return"/"===t||"#"===t||"#"===t[0]||this.allowedProtocols.indexOf(e.toLowerCase())>-1?b.exports.escapeAttrValue(t):""},t.prototype.sanitizeHTMLAttribute=function(t,e,r,i){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(t,e,r,i):b.exports.safeAttrValue(t,e,r,i)},t.prototype.validate=function(t,e){void 0===e&&(e={});var r=this.sanitize(t,e);return{isValid:t===r,sanitized:r}},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(r){Array.isArray(t[r])&&Array.isArray(e[r])?e[r]=e[r].concat(t[r]):e[r]=t[r]}))})),e},t.prototype._iterateOverObject=function(t,e){var r=this;void 0===e&&(e={});try{var i=!1,n=void 0;if(Array.isArray(t))n=t.reduce((function(t,n){var o=r.validate(n,e);return o.isValid?t.concat([n]):(i=!0,t.concat([o.sanitized]))}),[]);else{if(!m(t)){if(e.allowUndefined&&void 0===t)return;return null}n=Object.keys(t).reduce((function(n,o){var a=t[o],s=r.validate(a,e);return s.isValid?n[o]=a:(i=!0,n[o]=s.sanitized),n}),{})}return i?n:t}catch(o){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}(),Bt=function(t){if("WebkitTransition"in t.style)Wt="webkitTransitionEnd",Pt="webkitAnimationEnd";else{if(!("transition"in t.style))throw new Error("Your browser is not supported!");Wt="transitionend",Pt="animationend"}},Dt=function(t){Wt||Bt(t)},Ht=function(t,e){return void 0===e&&(e=t+"-active"),function(r){Dt(r);var i=!1,n=function(o){i||(i=!0,r.removeEventListener(Wt,n),r.removeEventListener(Pt,n),r.classList.remove(t),r.classList.remove(e))};r.classList.add(t),r.addEventListener(Wt,n),r.addEventListener(Pt,n),requestAnimationFrame((function(){r.classList.add(e)}))}},qt=function(t,e){return void 0===e&&(e=t+"-active"),function(r,i){Dt(r);var n=!1,o=function(t){n||(n=!0,r.removeEventListener(Wt,o),r.removeEventListener(Pt,o),i())};r.classList.add(t),r.addEventListener(Wt,o),r.addEventListener(Pt,o),requestAnimationFrame((function(){r.classList.add(e)}))}};function Rt(t){const r=e.acquire();for(let e=0;e<arguments.length;e++){const t=arguments[e],i=typeof t;if("string"===i)r.push(t);else if(Array.isArray(t))r.push.apply(r,t);else if("object"===i)for(const e in t)t[e]&&r.push(e)}const i=r.join(" ");return e.release(r),i}function Nt(t){const e=null==t?void 0:t.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function $t(t){return Nt(t)?"rtl":"ltr"}function Ut(t){const e="data-node-ref";this[t.getAttribute(e)]=null}function Xt(t){const e="data-node-ref";this[t.getAttribute(e)]=t}function Mt(t,e){return("enter"===t?Ht:qt)(e)}i.getLogger("esri.widgets.support.widgetUtils");const Gt=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],Qt=Gt.reduce(((t,e)=>(t[e]=[],t)),{}),Zt=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],Kt=new _t({whiteList:Qt,onTagAttr:(t,e,r)=>{const i=`${e}="${r}"`;if(Zt.includes(e))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function Yt(t,e){const r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=r.top+r.height,o=i.top+i.height,a=r.top,s=i.top;(n>o||a<s)&&t.scrollIntoView({block:"end"})}function Jt(t){return"Enter"===t||" "===t}function te(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function ee(){return te().startsWith("dark")}function re(){return"calcite-theme-"+(ee()?"dark":"light")}t.additionalAllowedTags=Gt,t.classes=Rt,t.cssTransition=Mt,t.discardNode=Ut,t.getCalciteThemeClass=re,t.getDir=$t,t.getThemeName=te,t.isActivationKey=Jt,t.isDarkTheme=ee,t.isRTL=Nt,t.keepMenuItemWithinView=Yt,t.renderingSanitizer=Kt,t.safeAttrs=Zt,t.storeNode=Xt,Object.defineProperty(t,"__esModule",{value:!0})}));
