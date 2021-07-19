/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/maybe","../brushes","../Container","./ClippingInfo","./enums"],(function(e,r,n,s,t,i,a){"use strict";return function(r){function t(){var e;return(e=r.apply(this,arguments)||this).name=e.constructor.name,e}e._inheritsLoose(t,r);var o=t.prototype;return o.doRender=function(e){const r=this.createRenderParams(e),{painter:n,globalOpacity:s,profiler:t,drawPhase:i}=r,o=i===a.WGLDrawPhase.LABEL?1:s*this.computedOpacity;t.recordContainerStart(this.name),n.beforeRenderLayer(r,this._clippingInfos?255:0,o),this.updateTransforms(e.state),this.renderChildren(r),n.compositeLayer(r,o),t.recordContainerEnd()},o.renderChildren=function(e){n.isNone(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const n of this.children)n.beforeRender(e);for(const n of this._renderPasses)try{n.render(e)}catch(r){}for(const n of this.children)n.afterRender(e)},o.createRenderParams=function(e){return{...e,requireFBO:this.requiresDedicatedFBO}},o.prepareRenderPasses=function(e){return[e.registerRenderPass({name:"clip",brushes:[s.brushes.clip],target:()=>this._clippingInfos,drawPhase:a.WGLDrawPhase.MAP|a.WGLDrawPhase.LABEL|a.WGLDrawPhase.LABEL_ALPHA|a.WGLDrawPhase.DEBUG|a.WGLDrawPhase.HIGHLIGHT})]},o.updateTransforms=function(e){for(const r of this.children)r.setTransform(e)},o.onAttach=function(){r.prototype.onAttach.call(this),this._updateClippingInfo()},o.onDetach=function(){r.prototype.onDetach.call(this),this._updateClippingInfo()},o._updateClippingInfo=function(){if(n.isSome(this._clippingInfos)&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null),!this.stage)return;const e=this._clips;n.isSome(e)&&e.length&&(this._clippingInfos=e.items.map((e=>i.fromClipArea(this.stage,e)))),this.requestRender()},e._createClass(t,[{key:"clips",set:function(e){this._clips=e,this.children.forEach((r=>r.clips=e)),this._updateClippingInfo()}}]),t}(t.Container)}));
