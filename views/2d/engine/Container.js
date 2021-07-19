/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/has","./DisplayObject","../../layers/effects/EffectList"],(function(t,e,i,n,s){"use strict";const r=i("mapview-transitions-duration");let c=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._childrenSet=new Set,e.children=[],e._effectList=null,e}e._inheritsLoose(i,t);var n=i.prototype;return n.updateTransitionProperties=function(e,i){t.prototype.updateTransitionProperties.call(this,e,i),this._effectList&&(this._effectList.transitionStep(e,i),this._effectList.transitioning&&this.requestRender())},n.doRender=function(t){const e=this.createRenderParams(t);this.renderChildren(e)},n.addChild=function(t){return this.addChildAt(t,this.children.length)},n.addChildAt=function(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t},n.contains=function(t){return this._childrenSet.has(t)},n.removeAllChildren=function(){this._childrenSet.clear();for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0},n.removeChild=function(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t},n.removeChildAt=function(t){if(t<0||t>=this.children.length)return null;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e},n.sortChildren=function(t){return this.children.sort(t)},n.onAttach=function(){t.prototype.onAttach.call(this);const e=this.stage;for(const t of this.children)t.stage=e},n.onDetach=function(){t.prototype.onDetach.call(this);for(const t of this.children)t.stage=null},n.renderChildren=function(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)},n.createRenderParams=function(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}},e._createClass(i,[{key:"blendMode",get:function(){return this._blendMode},set:function(t){this._blendMode=t,this.requestRender()}},{key:"clips",get:function(){return this._clips},set:function(t){this._clips=t,this.children.forEach((e=>e.clips=t))}},{key:"computedEffects",get:function(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}},{key:"effect",get:function(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""},set:function(t){(this._effectList||t)&&(this._effectList||(this._effectList=new s.default(r)),this._effectList.effect=t,this.requestRender())}}]),i}(n.DisplayObject);t.Container=c,Object.defineProperty(t,"__esModule",{value:!0})}));
