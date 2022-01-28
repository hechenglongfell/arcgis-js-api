/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/domUtils","../../core/maybe","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../Widget","./widgetUtils","../../core/Logger","./jsxFactory"],(function(e,t,n,r,o,i,a,s,c,f,p,u,l,d){"use strict";function h(e,t){var n=e.getBoundingClientRect(),r=1,o=1;return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function m(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(e){return e instanceof m(e).Element||e instanceof Element}function g(e){return e instanceof m(e).HTMLElement||e instanceof HTMLElement}function b(e){return"undefined"!=typeof ShadowRoot&&(e instanceof m(e).ShadowRoot||e instanceof ShadowRoot)}function w(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function x(e){return e!==m(e)&&g(e)?w(e):v(e)}function O(e){return e?(e.nodeName||"").toLowerCase():null}function _(e){return((y(e)?e.ownerDocument:e.document)||window.document).documentElement}function j(e){return h(_(e)).left+v(e).scrollLeft}function E(e){return m(e).getComputedStyle(e)}function D(e){var t=E(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function P(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}function k(e,t,n){void 0===n&&(n=!1);var r=g(t);g(t)&&P(t);var o=_(t),i=h(e),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&(("body"!==O(t)||D(o))&&(a=x(t)),g(t)?((s=h(t)).x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=j(o))),{x:i.left+a.scrollLeft-s.x,y:i.top+a.scrollTop-s.y,width:i.width,height:i.height}}function C(e){var t=h(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function A(e){return"html"===O(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||_(e)}function L(e){return["html","body","#document"].indexOf(O(e))>=0?e.ownerDocument.body:g(e)&&D(e)?e:L(A(e))}function M(e,t){var n;void 0===t&&(t=[]);var r=L(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=m(r),a=o?[i].concat(i.visualViewport||[],D(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(M(A(a)))}function S(e){return["table","td","th"].indexOf(O(e))>=0}function W(e){return g(e)&&"fixed"!==E(e).position?e.offsetParent:null}function B(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&g(e)&&"fixed"===E(e).position)return null;for(var n=A(e);g(n)&&["html","body"].indexOf(O(n))<0;){var r=E(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}function N(e){for(var t=m(e),n=W(e);n&&S(n)&&"static"===E(n).position;)n=W(n);return n&&("html"===O(n)||"body"===O(n)&&"static"===E(n).position)?t:n||B(e)||t}var R="top",H="bottom",T="right",q="left",U="auto",F=[R,H,T,q],I="start",V="end",z="clippingParents",X="viewport",Y="popper",G="reference",J=F.reduce((function(e,t){return e.concat([t+"-"+I,t+"-"+V])}),[]),K=[].concat(F,[U]).reduce((function(e,t){return e.concat([t,t+"-"+I,t+"-"+V])}),[]),Q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function $(e){var t=Z(e);return Q.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function ee(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function te(e){return e.split("-")[0]}function ne(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}function re(e){var t=m(e),n=_(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+j(e),y:s}}var oe=Math.max,ie=Math.min,ae=Math.round;function se(e){var t,n=_(e),r=v(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=oe(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=oe(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+j(e),c=-r.scrollTop;return"rtl"===E(o||n).direction&&(s+=oe(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function ce(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&b(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pe(e){var t=h(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function ue(e,t){return t===X?fe(re(e)):g(t)?pe(t):fe(se(_(e)))}function le(e){var t=M(A(e)),n=["absolute","fixed"].indexOf(E(e).position)>=0&&g(e)?N(e):e;return y(n)?t.filter((function(e){return y(e)&&ce(e,n)&&"body"!==O(e)})):[]}function de(e,t,n){var r="clippingParents"===t?le(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ue(e,n);return t.top=oe(r.top,t.top),t.right=ie(r.right,t.right),t.bottom=ie(r.bottom,t.bottom),t.left=oe(r.left,t.left),t}),ue(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function he(e){return e.split("-")[1]}function me(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?te(o):null,a=o?he(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case R:t={x:s,y:n.y-r.height};break;case H:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case q:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?me(i):null;if(null!=f){var p="y"===f?"height":"width";switch(a){case I:t[f]=t[f]-(n[p]/2-r[p]/2);break;case V:t[f]=t[f]+(n[p]/2-r[p]/2)}}return t}function ye(){return{top:0,right:0,bottom:0,left:0}}function ge(e){return Object.assign({},ye(),e)}function be(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function we(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?z:i,s=n.rootBoundary,c=void 0===s?X:s,f=n.elementContext,p=void 0===f?Y:f,u=n.altBoundary,l=void 0!==u&&u,d=n.padding,m=void 0===d?0:d,v=ge("number"!=typeof m?m:be(m,F)),g=p===Y?G:Y,b=e.rects.popper,w=e.elements[l?g:p],x=de(y(w)?w:w.contextElement||_(e.elements.popper),a,c),O=h(e.elements.reference),j=ve({reference:O,element:b,strategy:"absolute",placement:o}),E=fe(Object.assign({},b,j)),D=p===Y?E:O,P={top:x.top-D.top+v.top,bottom:D.bottom-x.bottom+v.bottom,left:x.left-D.left+v.left,right:D.right-x.right+v.right},k=e.modifiersData.offset;if(p===Y&&k){var C=k[o];Object.keys(P).forEach((function(e){var t=[T,H].indexOf(e)>=0?1:-1,n=[R,H].indexOf(e)>=0?"y":"x";P[e]+=C[n]*t}))}return P}var xe={placement:"bottom",modifiers:[],strategy:"absolute"};function Oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function _e(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?xe:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},xe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var a="function"==typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,a),o.scrollParents={reference:y(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var s=$(ne([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),f(),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Oe(t,n)){o.rects={reference:k(t,N(n),"fixed"===o.options.strategy),popper:C(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,p=void 0===f?{}:f,u=i.name;"function"==typeof a&&(o=a({state:o,options:p,name:u,instance:c})||o)}else o.reset=!1,r=-1}}},update:ee((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!Oe(e,t))return c;function f(){o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var s=i({state:o,name:t,instance:c,options:r}),f=function(){};a.push(s||f)}}))}function p(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var je={passive:!0};function Ee(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=m(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,je)})),s&&c.addEventListener("resize",n.update,je),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,je)})),s&&c.removeEventListener("resize",n.update,je)}}function De(e){var t=e.state,n=e.name;t.modifiersData[n]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Pe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ke(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:ae(ae(t*r)/r)||0,y:ae(ae(n*r)/r)||0}}function Ce(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,f=e.adaptive,p=e.roundOffsets,u=!0===p?ke(a):"function"==typeof p?p(a):a,l=u.x,d=void 0===l?0:l,h=u.y,v=void 0===h?0:h,y=a.hasOwnProperty("x"),g=a.hasOwnProperty("y"),b=q,w=R,x=window;if(f){var O=N(n),j="clientHeight",D="clientWidth";O===m(n)&&"static"!==E(O=_(n)).position&&"absolute"===s&&(j="scrollHeight",D="scrollWidth"),O=O,o!==R&&(o!==q&&o!==T||i!==V)||(w=H,v-=O[j]-r.height,v*=c?1:-1),o!==q&&(o!==R&&o!==H||i!==V)||(b=T,d-=O[D]-r.width,d*=c?1:-1)}var P,k=Object.assign({position:s},f&&Pe);return c?Object.assign({},k,((P={})[w]=g?"0":"",P[b]=y?"0":"",P.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",P)):Object.assign({},k,((t={})[w]=g?v+"px":"",t[b]=y?d+"px":"",t.transform="",t))}function Ae(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:te(t.placement),variation:he(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ce(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ce(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}function Le(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];g(o)&&O(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))}function Me(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});g(r)&&O(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}}function Se(e,t,n){var r=te(e),o=[q,R].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[q,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function We(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=K.reduce((function(e,n){return e[n]=Se(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[r]=a}var Be={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return Be[e]}))}var Re={start:"end",end:"start"};function He(e){return e.replace(/start|end/g,(function(e){return Re[e]}))}function Te(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?K:c,p=he(r),u=p?s?J:J.filter((function(e){return he(e)===p})):F,l=u.filter((function(e){return f.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=we(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[te(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}function qe(e){if(te(e)===U)return[];var t=Ne(e);return[He(e),t,He(t)]}function Ue(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=te(v),g=c||(y===v||!h?[Ne(v)]:qe(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(te(n)===U?Te(t,{placement:n,boundary:p,rootBoundary:u,padding:f,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,_=!0,j=b[0],E=0;E<b.length;E++){var D=b[E],P=te(D),k=he(D)===I,C=[R,H].indexOf(P)>=0,A=C?"width":"height",L=we(t,{placement:D,boundary:p,rootBoundary:u,altBoundary:l,padding:f}),M=C?k?T:q:k?H:R;w[A]>x[A]&&(M=Ne(M));var S=Ne(M),W=[];if(i&&W.push(L[P]<=0),s&&W.push(L[M]<=0,L[S]<=0),W.every((function(e){return e}))){j=D,_=!1;break}O.set(D,W)}if(_)for(var B=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},N=h?3:1;N>0;N--){if("break"===B(N))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}}function Fe(e){return"x"===e?"y":"x"}function Ie(e,t,n){return oe(e,ie(t,n))}function Ve(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,h=n.tetherOffset,m=void 0===h?0:h,v=we(t,{boundary:c,rootBoundary:f,padding:u,altBoundary:p}),y=te(t.placement),g=he(t.placement),b=!g,w=me(y),x=Fe(w),O=t.modifiersData.popperOffsets,_=t.rects.reference,j=t.rects.popper,E="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,D={x:0,y:0};if(O){if(i||s){var P="y"===w?R:q,k="y"===w?H:T,A="y"===w?"height":"width",L=O[w],M=O[w]+v[P],S=O[w]-v[k],W=d?-j[A]/2:0,B=g===I?_[A]:j[A],U=g===I?-j[A]:-_[A],F=t.elements.arrow,V=d&&F?C(F):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ye(),X=z[P],Y=z[k],G=Ie(0,_[A],V[A]),J=b?_[A]/2-W-G-X-E:B-G-X-E,K=b?-_[A]/2+W+G+Y+E:U+G+Y+E,Q=t.elements.arrow&&N(t.elements.arrow),Z=Q?"y"===w?Q.clientTop||0:Q.clientLeft||0:0,$=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ee=O[w]+J-$-Z,ne=O[w]+K-$;if(i){var re=Ie(d?ie(M,ee):M,L,d?oe(S,ne):S);O[w]=re,D[w]=re-L}if(s){var ae="x"===w?R:q,se="x"===w?H:T,ce=O[x],fe=ce+v[ae],pe=ce-v[se],ue=Ie(d?ie(fe,ee):fe,ce,d?oe(pe,ne):pe);O[x]=ue,D[x]=ue-ce}}t.modifiersData[r]=D}}var ze=function(e,t){return ge("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:be(e,F))};function Xe(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=te(n.placement),c=me(s),f=[q,T].indexOf(s)>=0?"height":"width";if(i&&a){var p=ze(o.padding,n),u=C(i),l="y"===c?R:q,d="y"===c?H:T,h=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],m=a[c]-n.rects.reference[c],v=N(i),y=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,g=h/2-m/2,b=p[l],w=y-u[f]-p[d],x=y/2-u[f]/2+g,O=Ie(b,x,w),_=c;n.modifiersData[r]=((t={})[_]=O,t.centerOffset=O-x,t)}}function Ye(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ce(t.elements.popper,r)&&(t.elements.arrow=r)}function Ge(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Je(e){return[R,T,H,q].some((function(t){return e[t]>=0}))}function Ke(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=we(t,{elementContext:"reference"}),s=we(t,{altBoundary:!0}),c=Ge(a,r),f=Ge(s,o,i),p=Je(c),u=Je(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}var Qe=_e({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ee,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:De,data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ae,data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:Le,effect:Me,requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:We},{name:"flip",enabled:!0,phase:"main",fn:Ue,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:Ve,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:Xe,effect:Ye,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ke}]});const Ze=["bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end"],$e={base:"esri-popover",open:"esri-popover--open"},et={position:"fixed","z-index":"1000"};let tt=function(t){function i(e,n){var o;return(o=t.call(this,e,n)||this)._popper=null,o._contentNode=null,o._renderAttached=!1,o._rootNode=null,o.anchorElement=null,o.offset=[0,0],o.open=!1,o.renderContentFunction=null,o._afterRootCreate=e=>{o._rootNode=e},o._afterContentCreate=e=>{o._contentNode=e},o._updatePosition=()=>{r.isSome(o._popper)&&o._popper.update()},o}e._inheritsLoose(i,t);var a=i.prototype;return a.initialize=function(){this.when((()=>{this._projector.append(document.body,this.render),this._renderAttached=!0})),this.own(o.init(this,["open","anchorElement"],(()=>this._buildPopper())),o.init(this,["placement","offset"],(()=>this._setPopperOptions())))},a.destroy=function(){this.owner=null,this.anchorElement=null,this.renderContentFunction=null,this._renderAttached&&(this._projector.detach(this.render),this._renderAttached=!1),r.isSome(this._rootNode)&&(n.remove(this._rootNode),this._rootNode=null),this._contentNode=null,r.isSome(this._popper)&&(this._popper.destroy(),this._popper=null)},a.render=function(){var e;const{open:t,owner:n,renderContentFunction:r}=this;return d.tsx("div",{afterCreate:this._afterRootCreate,class:this.classes($e.base,t?$e.open:null),styles:et},d.tsx("div",{dir:u.getDir(null==(e=this.owner)?void 0:e.container),afterCreate:this._afterContentCreate,afterUpdate:this._updatePosition},t&&(null==r?void 0:r.call(n))))},a._buildPopper=function(){r.isSome(this._popper)&&(this._popper.destroy(),this._popper=null);const e=this._contentNode;if(r.isNone(e))return;if(!this.open||!this.renderContentFunction)return;const t=this._getAnchor();t&&(this._popper=Qe(t,e),this._setPopperOptions())},a._setPopperOptions=function(){const{placement:e,offset:t,_popper:n}=this;r.isNone(n)||(n.setOptions({placement:e,modifiers:[{name:"offset",options:{offset:t}}]}),n.forceUpdate())},a._getAnchor=function(){const{anchorElement:e}=this;return n.byId("function"==typeof e?e():e)},e._createClass(i,[{key:"container",set:function(e){}},{key:"owner",set:function(e){this._set("owner",e)}},{key:"placement",get:function(){return"top"},set:function(e){-1!==Ze.indexOf(e)?this._override("placement",e):this._clearOverride("placement")}}]),i}(p);t.__decorate([i.property()],tt.prototype,"anchorElement",void 0),t.__decorate([i.property()],tt.prototype,"container",null),t.__decorate([i.property()],tt.prototype,"offset",void 0),t.__decorate([i.property()],tt.prototype,"open",void 0),t.__decorate([i.property()],tt.prototype,"owner",null),t.__decorate([i.property()],tt.prototype,"placement",null),t.__decorate([i.property()],tt.prototype,"renderContentFunction",void 0),tt=t.__decorate([f.subclass("esri.widgets.support.Popover")],tt);return tt}));
