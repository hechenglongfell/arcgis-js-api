/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../core/arrayUtils","../../../../../core/maybe","../enums"],(function(e,r,t){"use strict";return function(){function s(e,r){var s;this.brushes=e,this.name=r.name,this.drawPhase=r.drawPhase||t.WGLDrawPhase.MAP,this._targetFn=r.target,this.effects=r.effects||[],this.enableDefaultDraw=null!=(s=r.enableDefaultDraw)?s:()=>!0}var a=s.prototype;return a.render=function(e){const{context:r,profiler:t}=e,s=this._targetFn(),a=this.drawPhase&e.drawPhase;if(t.recordPassStart(this.name),a){this.enableDefaultDraw()&&this._doRender(e,s),t.recordPassEnd();for(const a of this.effects){if(!a.enable())continue;const n=a.apply;t.recordPassStart(this.name+"."+n.name),t.recordBrushStart(n.name);const i=a.args&&a.args(),{x:o,y:f,width:d,height:h}=r.getViewport(),c=r.getBoundFramebufferObject();n.bind(e,i),this._doRender(e,s,n.defines),n.draw(e,i),n.unbind(e,i),r.bindFramebuffer(c),r.setViewport(o,f,d,h),t.recordBrushEnd(),t.recordPassEnd()}}},a._doRender=function(t,s,a){if(!r.isNone(s))if(e.isArrayLike(s)){for(const e of s)if(e.visible)for(const r of this.brushes)t.profiler.recordBrushStart(r.name),r.prepareState(t,e,a),r.draw(t,e,a),t.profiler.recordBrushEnd()}else for(const e of this.brushes)t.profiler.recordBrushStart(e.name),e.prepareState(t,s,a),e.draw(t,s,a),t.profiler.recordBrushEnd()},s}()}));
