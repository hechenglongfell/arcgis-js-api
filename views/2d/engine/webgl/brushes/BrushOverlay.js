/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","../Utils","./WGLBrush","../../../../webgl/enums"],(function(e,t,n,r,a,i){"use strict";const o=()=>r.createProgramDescriptor("overlay",{geometry:[{location:0,name:"a_pos",count:2,type:i.DataType.FLOAT}],tex:[{location:1,name:"a_uv",count:2,type:i.DataType.UNSIGNED_SHORT}]});let s=function(r){function a(){var e;return(e=r.apply(this,arguments)||this)._desc={vsPath:"overlay/overlay",fsPath:"overlay/overlay",attributes:new Map([["a_pos",0],["a_uv",1]])},e}e._inheritsLoose(a,r);var s=a.prototype;return s.dispose=function(){},s.prepareState=function({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setBlendFunctionSeparate(i.BlendFactor.ONE,i.BlendFactor.ONE_MINUS_SRC_ALPHA,i.BlendFactor.ONE,i.BlendFactor.ONE_MINUS_SRC_ALPHA),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(i.CompareFunction.GREATER,255,255)},s.draw=function(e,r){const{context:a,painter:s,requestRender:c,allowDelayedRender:u}=e;if(!r.isReady)return;const{computedOpacity:l,dvsMat3:p,isWrapAround:d,perspectiveTransform:_,texture:m}=r;e.timeline.begin(this.name);const f=s.materialManager.getProgram(this._desc);if(u&&t.isSome(c)&&!f.compiled)return void c();const y=o(),v=r.getVAO(a,y.bufferLayouts,y.attributes);if(!v)return;a.bindVAO(v),a.useProgram(f),a.bindTexture(m,n.TEXTURE_BINDING_BITMAP),f.setUniformMatrix3fv("u_dvsMat3",p),f.setUniform1i("u_texture",n.TEXTURE_BINDING_BITMAP),f.setUniform1f("u_opacity",l),f.setUniform2fv("u_perspective",_);const T=d?10:4;a.drawArrays(i.PrimitiveType.TRIANGLE_STRIP,0,T),a.bindVAO(),e.timeline.end(this.name)},a}(a);return s}));
