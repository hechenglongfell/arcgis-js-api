/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/ArrayPool","../../core/handleUtils","../../core/has","../../core/Logger","./vnodeCache"],(function(t,e,r,i,n,o){"use strict";var a=function(t){if("object"!=typeof t||null===t)return!1;if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e},s={exports:{}},l={},c={exports:{}},u={};function f(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}function g(t,e,r){}function p(t,e,r){}var d=/javascript\s*\:/gim;function h(t,e){return d.test(e)?"":e}u.whiteList=f(),u.getDefaultWhiteList=f,u.onAttr=g,u.onIgnoreAttr=p,u.safeAttrValue=h;var m={indexOf:function(t,e){var r,i;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var i,n;if(Array.prototype.forEach)return t.forEach(e,r);for(i=0,n=t.length;i<n;i++)e.call(r,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}};function b(t,e){";"!==(t=m.trimRight(t))[t.length-1]&&(t+=";");var r=t.length,i=!1,n=0,o=0,a="";function s(){if(!i){var r=m.trim(t.slice(n,o)),s=r.indexOf(":");if(-1!==s){var l=m.trim(r.slice(0,s)),c=m.trim(r.slice(s+1));if(l){var u=e(n,a.length,l,c,r);u&&(a+=u+"; ")}}}n=o+1}for(;o<r;o++){var l=t[o];if("/"===l&&"*"===t[o+1]){var c=t.indexOf("*/",o+2);if(-1===c)break;n=(o=c+1)+1,i=!1}else"("===l?i=!0:")"===l?i=!1:";"===l?i||s():"\n"===l&&s()}return m.trim(a)}var v=u,y=b;function w(t){return null==t}function x(t){var e={};for(var r in t)e[r]=t[r];return e}function A(t){(t=x(t||{})).whiteList=t.whiteList||v.whiteList,t.onAttr=t.onAttr||v.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||v.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||v.safeAttrValue,this.options=t}A.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,i=e.onAttr,n=e.onIgnoreAttr,o=e.safeAttrValue;return y(t,(function(t,e,a,s,l){var c=r[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=o(a,s)){var f,g={position:e,sourcePosition:t,source:l,isWhite:u};return u?w(f=i(a,s,g))?a+":"+s:f:w(f=n(a,s,g))?void 0:f}}))};var k=A;!function(t,e){var r=u,i=k;function n(t,e){return new i(e).process(t)}for(var o in(e=t.exports=n).FilterCSS=i,r)e[o]=r[o]}(c,c.exports);var L={indexOf:function(t,e){var r,i;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var i,n;if(Array.prototype.forEach)return t.forEach(e,r);for(i=0,n=t.length;i<n;i++)e.call(r,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}},T=c.exports.FilterCSS,O=c.exports.getDefaultWhiteList,I=L;function S(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var j=new T;function C(t,e,r){}function z(t,e,r){}function E(t,e,r){}function V(t,e,r){}function F(t){return t.replace(P,"&lt;").replace(H,"&gt;")}function W(t,e,r,i){if(r=K(r),"href"===e||"src"===e){if("#"===(r=I.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(M.lastIndex=0,M.test(r))return""}else if("style"===e){if(N.lastIndex=0,N.test(r))return"";if($.lastIndex=0,$.test(r)&&(M.lastIndex=0,M.test(r)))return"";!1!==i&&(r=(i=i||j).process(r))}return r=Y(r)}var P=/</g,H=/>/g,R=/"/g,_=/&quot;/g,B=/&#([a-zA-Z0-9]*);?/gim,q=/&colon;?/gim,D=/&newline;?/gim,M=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,N=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,$=/u\s*r\s*l\s*\(.*/gi;function U(t){return t.replace(R,"&quot;")}function X(t){return t.replace(_,'"')}function Z(t){return t.replace(B,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function G(t){return t.replace(q,":").replace(D," ")}function Q(t){for(var e="",r=0,i=t.length;r<i;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return I.trim(e)}function K(t){return t=Q(t=G(t=Z(t=X(t))))}function Y(t){return t=F(t=U(t))}function J(){return""}function tt(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t);function i(e){return!!r||-1!==I.indexOf(t,e)}var n=[],o=!1;return{onIgnoreTag:function(t,r,a){if(i(t)){if(a.isClosing){var s="[/removed]",l=a.position+s.length;return n.push([!1!==o?o:a.position,l]),o=!1,s}return o||(o=a.position),"[removed]"}return e(t,r,a)},remove:function(t){var e="",r=0;return I.forEach(n,(function(i){e+=t.slice(r,i[0]),r=i[1]})),e+=t.slice(r)}}}function et(t){for(var e="",r=0;r<t.length;){var i=t.indexOf("\x3c!--",r);if(-1===i){e+=t.slice(r);break}e+=t.slice(r,i);var n=t.indexOf("--\x3e",i);if(-1===n)break;r=n+3}return e}function rt(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}))).join("")}l.whiteList=S(),l.getDefaultWhiteList=S,l.onTag=C,l.onIgnoreTag=z,l.onTagAttr=E,l.onIgnoreTagAttr=V,l.safeAttrValue=W,l.escapeHtml=F,l.escapeQuote=U,l.unescapeQuote=X,l.escapeHtmlEntities=Z,l.escapeDangerHtml5Entities=G,l.clearNonPrintableCharacter=Q,l.friendlyAttrValue=K,l.escapeAttrValue=Y,l.onIgnoreTagStripAll=J,l.StripTagBody=tt,l.stripCommentTag=et,l.stripBlankChar=rt,l.cssFilter=j,l.getDefaultCSSWhiteList=O;var it={},nt=L;function ot(t){var e,r=nt.spaceIndex(t);return e=-1===r?t.slice(1,-1):t.slice(1,r+1),"/"===(e=nt.trim(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}function at(t){return"</"===t.slice(0,2)}function st(t,e,r){var i="",n=0,o=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var f=t.charAt(s);if(!1===o){if("<"===f){o=s;continue}}else if(!1===a){if("<"===f){i+=r(t.slice(n,s)),o=s,n=s;continue}if(">"===f){i+=r(t.slice(n,o)),c=ot(u=t.slice(o,s+1)),i+=e(o,i.length,c,u,at(u)),n=s+1,o=!1;continue}if('"'===f||"'"===f)for(var g=1,p=t.charAt(s-g);""===p.trim()||"="===p;){if("="===p){a=f;continue t}p=t.charAt(s-++g)}}else if(f===a){a=!1;continue}}return n<t.length&&(i+=r(t.substr(n))),i}var lt=/[^a-zA-Z0-9\\_:.-]/gim;function ct(t,e){var r=0,i=0,n=[],o=!1,a=t.length;function s(t,r){if(!((t=(t=nt.trim(t)).replace(lt,"").toLowerCase()).length<1)){var i=e(t,r||"");i&&n.push(i)}}for(var l=0;l<a;l++){var c,u=t.charAt(l);if(!1!==o||"="!==u)if(!1===o||l!==i)if(/\s|\n|\t/.test(u)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(c=ut(t,l))){s(nt.trim(t.slice(r,l))),o=!1,r=l+1;continue}l=c-1;continue}if(-1===(c=gt(t,l-1))){s(o,dt(nt.trim(t.slice(r,l)))),o=!1,r=l+1;continue}}else;else{if(-1===(c=t.indexOf(u,l+1)))break;s(o,nt.trim(t.slice(i+1,c))),o=!1,r=(l=c)+1}else o=t.slice(r,l),r=l+1,i='"'===t.charAt(r)||"'"===t.charAt(r)?r:ft(t,l+1)}return r<t.length&&(!1===o?s(t.slice(r)):s(o,dt(nt.trim(t.slice(r))))),nt.trim(n.join(" "))}function ut(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function ft(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"'"===r||'"'===r?e:-1}}function gt(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function pt(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}function dt(t){return pt(t)?t.substr(1,t.length-2):t}it.parseTag=st,it.parseAttr=ct;var ht=c.exports.FilterCSS,mt=l,bt=it,vt=bt.parseTag,yt=bt.parseAttr,wt=L;function xt(t){return null==t}function At(t){var e=wt.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=wt.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=wt.trim(t.slice(0,-1))),{html:t,closing:r}}function kt(t){var e={};for(var r in t)e[r]=t[r];return e}function Lt(t){var e={};for(var r in t)Array.isArray(t[r])?e[r.toLowerCase()]=t[r].map((function(t){return t.toLowerCase()})):e[r.toLowerCase()]=t[r];return e}function Tt(t){(t=kt(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=mt.onIgnoreTagStripAll),t.whiteList||t.allowList?t.whiteList=Lt(t.whiteList||t.allowList):t.whiteList=mt.whiteList,t.onTag=t.onTag||mt.onTag,t.onTagAttr=t.onTagAttr||mt.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||mt.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||mt.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||mt.safeAttrValue,t.escapeHtml=t.escapeHtml||mt.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new ht(t.css))}Tt.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this,r=e.options,i=r.whiteList,n=r.onTag,o=r.onIgnoreTag,a=r.onTagAttr,s=r.onIgnoreTagAttr,l=r.safeAttrValue,c=r.escapeHtml,u=e.cssFilter;r.stripBlankChar&&(t=mt.stripBlankChar(t)),r.allowCommentTag||(t=mt.stripCommentTag(t));var f=!1;r.stripIgnoreTagBody&&(f=mt.StripTagBody(r.stripIgnoreTagBody,o),o=f.onIgnoreTag);var g=vt(t,(function(t,e,r,f,g){var p={sourcePosition:t,position:e,isClosing:g,isWhite:Object.prototype.hasOwnProperty.call(i,r)},d=n(r,f,p);if(!xt(d))return d;if(p.isWhite){if(p.isClosing)return"</"+r+">";var h=At(f),m=i[r],b=yt(h.html,(function(t,e){var i=-1!==wt.indexOf(m,t),n=a(r,t,e,i);return xt(n)?i?(e=l(r,t,e,u))?t+'="'+e+'"':t:xt(n=s(r,t,e,i))?void 0:n:n}));return f="<"+r,b&&(f+=" "+b),h.closing&&(f+=" /"),f+=">"}return xt(d=o(r,f,p))?c(f):d}),c);return f&&(g=f.remove(g)),g};var Ot=Tt;!function(t,e){var r=l,i=it,n=Ot;function o(t,e){return new n(e).process(t)}function a(){return"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope}(e=t.exports=o).filterXSS=o,e.FilterXSS=n,function(){for(var t in r)e[t]=r[t];for(var n in i)e[n]=i[n]}(),a()&&(self.filterXSS=t.exports)}(s,s.exports);var It,St,jt=function(){function t(t,e){var r,i=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,r,n){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?i.sanitizeUrl(r):s.exports.safeAttrValue(t,e,r,n)}},this._entityMap={"&":"&#x38;","<":"&#x3C;",">":"&#x3E;",'"':"&#x22;","'":"&#x27;","/":"&#x2F;"},t&&!e?r=t:t&&e?(r=Object.create(this.arcgisFilterOptions),Object.keys(t).forEach((function(e){"whiteList"===e?r.whiteList=i._extendObjectOfArrays([i.arcgisWhiteList,t.whiteList||{}]):r[e]=t[e]}))):(r=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=r,this._xssFilter=new s.exports.FilterXSS(r)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t,e){var r=(null!=e?e:{}).isProtocolRequired,i=void 0===r||r,n=this._trim(t.substring(0,t.indexOf(":"))),o="/"===t,a=/^#/.test(t),l=n&&this.allowedProtocols.indexOf(n.toLowerCase())>-1;return o||a||l?s.exports.escapeAttrValue(t):n||i?"":s.exports.escapeAttrValue("https://".concat(t))},t.prototype.sanitizeHTMLAttribute=function(t,e,r,i){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(t,e,r,i):s.exports.safeAttrValue(t,e,r,i)},t.prototype.validate=function(t,e){void 0===e&&(e={});var r=this.sanitize(t,e);return{isValid:t===r,sanitized:r}},t.prototype.encodeHTML=function(t){var e=this;return String(t).replace(/[&<>"'\/]/g,(function(t){return e._entityMap[t]}))},t.prototype.encodeAttrValue=function(t){var e=/^[a-zA-Z0-9]$/;return String(t).replace(/[\x00-\xFF]/g,(function(r,i){return e.test(r)?r:"&#x".concat(Number(t.charCodeAt(i)).toString(16),";")}))},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(r){Array.isArray(t[r])&&Array.isArray(e[r])?e[r]=e[r].concat(t[r]):e[r]=t[r]}))})),e},t.prototype._iterateOverObject=function(t,e){var r=this;void 0===e&&(e={});try{var i=!1,n=void 0;if(Array.isArray(t))n=t.reduce((function(t,n){var o=r.validate(n,e);return o.isValid?t.concat([n]):(i=!0,t.concat([o.sanitized]))}),[]);else{if(!a(t)){if(e.allowUndefined&&void 0===t)return;return null}n=Object.keys(t).reduce((function(n,o){var a=t[o],s=r.validate(a,e);return s.isValid?n[o]=a:(i=!0,n[o]=s.sanitized),n}),{})}return i?n:t}catch(o){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}(),Ct=function(t){if("WebkitTransition"in t.style)It="webkitTransitionEnd",St="webkitAnimationEnd";else{if(!("transition"in t.style))throw new Error("Your browser is not supported!");It="transitionend",St="animationend"}},zt=function(t){It||Ct(t)},Et=function(t,e){return void 0===e&&(e=t+"-active"),function(r){zt(r);var i=!1,n=function(o){i||(i=!0,r.removeEventListener(It,n),r.removeEventListener(St,n),r.classList.remove(t),r.classList.remove(e))};r.classList.add(t),r.addEventListener(It,n),r.addEventListener(St,n),requestAnimationFrame((function(){r.classList.add(e)}))}},Vt=function(t,e){return void 0===e&&(e=t+"-active"),function(r,i){zt(r);var n=!1,o=function(t){n||(n=!0,r.removeEventListener(It,o),r.removeEventListener(St,o),i())};r.classList.add(t),r.addEventListener(It,o),r.addEventListener(St,o),requestAnimationFrame((function(){r.classList.add(e)}))}};const Ft=n.getLogger("esri.widgets.support.widgetUtils");function Wt(t){const r=e.acquire();for(let e=0;e<arguments.length;e++){const t=arguments[e],i=typeof t;if("string"===i)r.push(t);else if(Array.isArray(t))r.push.apply(r,t);else if("object"===i)for(const e in t)t[e]&&r.push(e)}const i=r.join(" ");return e.release(r),i}const Pt=(()=>{const t=new Map,e=new ResizeObserver((e=>{o.clearVNodeCache();for(const r of e)t.get(r.target)?.(r)}));return(i,n,o)=>(t.has(i)&&Ft.error("Already observing element",i),t.set(i,n),e.observe(i,o),r.makeHandle((()=>{e.unobserve(i),t.delete(i)})))})();function Ht(t){const e=t?.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function Rt(t){return Ht(t)?"rtl":"ltr"}function _t(t){const e="data-node-ref";this[t.getAttribute(e)]=null}function Bt(t){const e="data-node-ref";this[t.getAttribute(e)]=t}function qt(t,e){return("enter"===t?Et:Vt)(e)}const Dt=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],Mt=Dt.reduce(((t,e)=>(t[e]=[],t)),{}),Nt=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],$t=new jt({whiteList:Mt,onTagAttr:(t,e,r)=>{const i=`${e}="${r}"`;if(Nt.includes(e))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function Ut(t,e){const r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),n=r.top+r.height,o=i.top+i.height,a=r.top,s=i.top;(n>o||a<s)&&t.scrollIntoView({block:"end"})}function Xt(t){return"Enter"===t||" "===t}t.additionalAllowedTags=Dt,t.classes=Wt,t.cssTransition=qt,t.discardNode=_t,t.getDir=Rt,t.isActivationKey=Xt,t.isRTL=Ht,t.keepMenuItemWithinView=Ut,t.onResize=Pt,t.renderingSanitizer=$t,t.safeAttrs=Nt,t.storeNode=Bt,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
