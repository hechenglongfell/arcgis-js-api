/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","./enums","./WGLContainer","./brushes/WGLBrushInfo","./brushes/WGLBrushStencil"],(function(e,r,t,s,n,i){"use strict";const l=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;return function(s){function a(e){var r;return(r=s.call(this)||this)._tileInfoView=e,r}e._inheritsLoose(a,s);var o=a.prototype;return o.renderChildren=function(e){this.sortChildren(l),this.setStencilReference(e),s.prototype.renderChildren.call(this,e)},o.createRenderParams=function(e){const{state:r}=e,t=s.prototype.createRenderParams.call(this,e);return t.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,t.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),t},o.prepareRenderPasses=function(e){const l=s.prototype.prepareRenderPasses.call(this,e);return l.push(e.registerRenderPass({name:"stencil",brushes:[i],drawPhase:t.WGLDrawPhase.DEBUG|t.WGLDrawPhase.MAP|t.WGLDrawPhase.HIGHLIGHT,target:()=>this.getStencilTarget()})),r("esri-tiles-debug")&&l.push(e.registerRenderPass({name:"tileInfo",brushes:[n],drawPhase:t.WGLDrawPhase.DEBUG,target:()=>this.children})),l},o.getStencilTarget=function(){return this.children},o.setStencilReference=function(e){let r=1;for(const t of this.children)t.stencilRef=r++},e._createClass(a,[{key:"requiresDedicatedFBO",get:function(){return!1}}]),a}(s)}));
