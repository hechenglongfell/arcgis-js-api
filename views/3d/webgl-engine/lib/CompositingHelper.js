/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../core/maybe","./glUtil3D","../shaders/CompositingTechnique","../../../webgl/Util"],(function(e,t,r,i){"use strict";let o=function(){function o(e,t){this._rctx=e,this._techniqueRepository=t}var s=o.prototype;return s.dispose=function(){this._vao=e.disposeMaybe(this._vao)},s.compositeTransparent=function(e,t,o,s=1){const a=this._rctx;n.alphaMode=1,n.function=2,n.hasOpacityFactor=1!==s;const c=this._techniqueRepository.acquire(r.CompositingTechnique,n);a.useProgram(c.program),c.bindPipelineState(a),c.program.bindTexture(e,"colorTexture"),c.program.bindTexture(t,"alphaTexture"),c.program.bindTexture(o,"frontFaceTexture");const u=this.ensureVAO();a.bindVAO(u),a.drawArrays(5,0,i.vertexCount(u,"geometry")),c.release()},s.composite=function(e,t=0,o=1,s=0,a=0){const c=this._rctx;n.alphaMode=t,n.function=s,n.hasOpacityFactor=1!==o;const u=this._techniqueRepository.acquire(r.CompositingTechnique,n);c.useProgram(u.program),u.bindPipelineState(c),u.program.bindTexture(e,"tex"),n.hasOpacityFactor&&u.program.setUniform1f("opacity",o),3===s&&u.program.setUniform1i("overlayIdx",a);const p=this.ensureVAO();c.bindVAO(p),c.drawArrays(5,0,i.vertexCount(p,"geometry")),u.release()},s.ensureVAO=function(){return e.isNone(this._vao)&&(this._vao=t.createQuadVAO(this._rctx)),this._vao},o}();const n=new r.CompositingTechniqueConfiguration;return o}));
