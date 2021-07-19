/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/maybe","../visualVariables/support/visualVariableUtils"],(function(e,t,i,o,r){"use strict";function n(e,t){if(!e||e.symbol)return null;const i=t&&t.renderer;return e&&o.isSome(i)&&i.getObservationRenderer?i.getObservationRenderer(e):i}function a(e,t){if(o.isSome(e.symbol))return e.symbol;const i=n(e,t);return o.isSome(i)&&"dot-density"!==i.type?i.getSymbol(e,t):null}function l(e,t){const i=n(e,t),l=a(e,t);if(o.isNone(l))return null;const s={renderer:i,symbol:l};if(o.isNone(i)||!("visualVariables"in i)||!i.visualVariables)return s;const u=r.getVisualVariableValues(i,e,t),c=["proportional","proportional","proportional"];for(const{variable:o,value:r}of u)switch(o.type){case"color":s.color=r.toRgba();break;case"size":if("outline"===o.target)s.outlineSize=r;else{const e=o.axis,t=o.useSymbolValue?"symbol-value":r;switch(e){case"width":c[0]=t;break;case"depth":c[1]=t;break;case"height":c[2]=t;break;case"width-and-depth":c[0]=c[1]=t;break;default:c[0]=c[1]=c[2]=t}}break;case"opacity":s.opacity=r;break;case"rotation":switch(o.axis){case"tilt":s.tilt=r;break;case"roll":s.roll=r;break;default:s.heading=r}}return"proportional"===c[0]&&"proportional"===c[1]&&"proportional"===c[2]||(s.size=c),s}function s(e,t){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(e,t){if(o.isSome(e.symbol))return e.symbol;const i=n(e,t);return o.isSome(i)&&i.getSymbolAsync(e,{...t,abortOptions:{signal:t.signal}})}))).apply(this,arguments)}function c(e,t){return p.apply(this,arguments)}function p(){return(p=t._asyncToGenerator((function*(e,t){const o=n(e,t),a=yield s(e,t);if(!a)return null;const l={renderer:o,symbol:a};if(!o||!("visualVariables"in o)||!o.visualVariables)return l;const u=r.getVisualVariableValues(o,e,t),c=["proportional","proportional","proportional"];for(const{variable:r,value:n}of u)if("color"===r.type)l.color=i.toUnitRGBA(n);else if("size"===r.type)if("outline"===r.target)l.outlineSize=n;else{const e=r.axis,t=r.useSymbolValue?"symbol-value":n;"width"===e?c[0]=t:"depth"===e?c[1]=t:"height"===e?c[2]=t:c[0]=c[1]="width-and-depth"===e?t:c[2]=t}else"opacity"===r.type?l.opacity=n:"rotation"===r.type&&"tilt"===r.axis?l.tilt=n:"rotation"===r.type&&"roll"===r.axis?l.roll=n:"rotation"===r.type&&(l.heading=n);return(isFinite(c[0])||isFinite(c[1])||isFinite(c[2]))&&(l.size=c),l}))).apply(this,arguments)}function b(e,t=0){const i=e[t];return"number"==typeof i&&isFinite(i)?i:null}function y(e){for(let t=0;t<3;t++){const i=e[t];if("number"==typeof i)return isFinite(i)?i:0}return 0}e.getDriverAxisSizeValue=b,e.getDriverAxisSizeValueAny=y,e.getRenderer=n,e.getRenderingInfo=l,e.getRenderingInfoAsync=c,e.getSymbolAsync=s,Object.defineProperty(e,"__esModule",{value:!0})}));
