/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../core/maybe","./glUtil3D","../shaders/CompositingTechnique","../../../webgl/Util"],(function(e,t,i,o){"use strict";let r=function(){function r(e,t){this._rctx=e,this._techniqueRepository=t}var s=r.prototype;return s.dispose=function(){this._vao=e.disposeMaybe(this._vao)},s.compositeTransparent=function(e,t,r,s=1){const a=this._rctx;n.alphaMode=1,n.function=2,n.hasOpacityFactor=1!==s;const c=this._techniqueRepository.acquire(i.CompositingTechnique,n);a.useProgram(c.program),c.bindPipelineState(a),c.program.bindTexture(e,"colorTexture"),c.program.bindTexture(t,"alphaTexture"),c.program.bindTexture(r,"frontFaceTexture");const u=this.ensureVAO();a.bindVAO(u),a.drawArrays(5,0,o.vertexCount(u,"geometry")),c.release()},s.compositeSpecial=function(e,t){this.composite(e,0,1,t)},s.composite=function(e,t=0,r=1,s=0,a=0){const c=this._rctx;n.alphaMode=t,n.function=s,n.hasOpacityFactor=1!==r;const u=this._techniqueRepository.acquire(i.CompositingTechnique,n);c.useProgram(u.program),u.bindPipelineState(c),u.program.bindTexture(e,"tex"),n.hasOpacityFactor&&u.program.setUniform1f("opacity",r),3===s&&u.program.setUniform1i("overlayIdx",a);const p=this.ensureVAO();c.bindVAO(p),c.drawArrays(5,0,o.vertexCount(p,"geometry")),u.release()},s.ensureVAO=function(){return e.isNone(this._vao)&&(this._vao=t.createQuadVAO(this._rctx)),this._vao},r}();const n=new i.CompositingTechniqueConfiguration;return r}));
