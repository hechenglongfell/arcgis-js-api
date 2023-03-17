/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/PooledArray","../../../../core/promiseUtils","./depthRange","./RenderSlot"],(function(e,n,t,r,i,s){"use strict";let o=function(){function e(e){this._context=e,this._renderPlugins=new t,this._slots=[];for(let n=0;n<s.RenderSlot.MAX_SLOTS;++n)this._slots[n]=[]}var o=e.prototype;return o.add=function(e,n,t){const i=()=>{if(t?.aborted)throw n.uninitializeRenderContext(),r.createAbortError();this._renderPlugins.push(n);for(const t of e)this._slots[t].push(n);this._context.requestRender()},s=n.initializeRenderContext(this._context,t);if(r.isPromiseLike(s))return s.then(i);i()},o.remove=function(e){if(null!=this._renderPlugins.removeUnordered(e)){for(let n=0;n<this._slots.length;++n)this._slots[n]=this._slots[n].filter((n=>n!==e));e.uninitializeRenderContext(),this._context.requestRender()}},o.prepareRender=function(){this._renderPlugins.forAll((e=>{e.prepareRender&&e.prepareRender(this._context.renderContext)}))},o.updateAnimation=function(e){let n=!1;return this._renderPlugins.forAll((t=>{t.updateAnimation&&(n=t.updateAnimation(e)||n)})),n},o.render=function(){const e=this._slots[this._context.renderContext.bindParameters.slot],n=new Array;e.filter((e=>{if(!e.canRender)return!1;if(u(e)){const t=e.prepareTechnique(this._context.renderContext);return!!t&&(n.push(t),!0)}return n.push(null),!0})).forEach(((e,t)=>e.render(this._context.renderContext,n[t])))},o.queryDepthRange=function(e){const n=l;return n.near=1/0,n.far=-1/0,this._renderPlugins.forAll((t=>{if(t.queryDepthRange){const r=t.queryDepthRange(e);r&&i.union(n,r,n)}})),n},n._createClass(e,[{key:"needsTransparentPass",get:function(){return this._renderPlugins.some((e=>!!e.needsTransparentPass))}},{key:"needsHighlight",get:function(){return this._renderPlugins.some((e=>!!e.needsHighlight))}},{key:"needsLinearDepth",get:function(){return this._renderPlugins.some((e=>!!e.needsLinearDepth))}},{key:"needsLaserlineWithContrastControl",get:function(){const e=this._slots[s.RenderSlot.LASERLINES_CONTRAST_CONTROL];return!!e&&e.length>0}},{key:"renderOccludedFlags",get:function(){return this._renderPlugins.reduce(((e,n)=>e|n.renderOccludedFlags),0)}}]),e}();function u(e){return"prepareTechnique"in e}const l={near:0,far:0};e.RenderPluginManager=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
