/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./Bloom","./Blur","./Colorize","./DropShadow","./Opacity"],(function(e,t,o,c,r,n){"use strict";function s(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const f={colorize:()=>new c.Colorize,blur:()=>new o.Blur,bloom:()=>new t.Bloom,opacity:()=>new n.Opacity,"drop-shadow":()=>new r.DropShadow};let i=function(){function e(){this._effectMap=new Map}var t=e.prototype;return t.dispose=function(){this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear()},t.getPostProcessingEffects=function(e){if(!e||0===e.length)return[];const t=[];for(const o of e){const e=s(o.type);let c=this._effectMap.get(e);c||(c=f[e](),this._effectMap.set(e,c)),t.push({postProcessingEffect:c,effect:o})}return t},e}();e.EffectManager=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
