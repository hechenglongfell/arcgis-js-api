/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e,i=32774,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function i(t,e,i,n,s=32774,l=32774,r=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}const n={face:1029,mode:2305},s={face:1028,mode:2305},l=t=>2===t?n:1===t?s:null,r={zNear:0,zFar:1},o={r:!0,g:!0,b:!0,a:!0};function a(t){return I.intern(t)}function c(t){return b.intern(t)}function h(t){return m.intern(t)}function u(t){return k.intern(t)}function d(t){return P.intern(t)}function p(t){return D.intern(t)}function f(t){return w.intern(t)}function _(t){return B.intern(t)}function g(t){return F.intern(t)}let v=function(){function t(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}return t.prototype.intern=function(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)},t}();function W(t){return"["+t.join(",")+"]"}const I=new v(S,(t=>({__tag:"Blending",...t})));function S(t){return t?W([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const b=new v(T,(t=>({__tag:"Culling",...t})));function T(t){return t?W([t.face,t.mode]):null}const m=new v(y,(t=>({__tag:"PolygonOffset",...t})));function y(t){return t?W([t.factor,t.units]):null}const k=new v(O,(t=>({__tag:"DepthTest",...t})));function O(t){return t?W([t.func]):null}const P=new v(C,(t=>({__tag:"StencilTest",...t})));function C(t){return t?W([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const D=new v(R,(t=>({__tag:"DepthWrite",...t})));function R(t){return t?W([t.zNear,t.zFar]):null}const w=new v(A,(t=>({__tag:"ColorWrite",...t})));function A(t){return t?W([t.r,t.g,t.b,t.a]):null}const B=new v(z,(t=>({__tag:"StencilWrite",...t})));function z(t){return t?W([t.mask]):null}const F=new v(j,(t=>({blending:a(t.blending),culling:c(t.culling),polygonOffset:h(t.polygonOffset),depthTest:u(t.depthTest),stencilTest:d(t.stencilTest),depthWrite:p(t.depthWrite),colorWrite:f(t.colorWrite),stencilWrite:_(t.stencilWrite)})));function j(t){return t?W([S(t.blending),T(t.culling),y(t.polygonOffset),O(t.depthTest),C(t.stencilTest),R(t.depthWrite),A(t.colorWrite),z(t.stencilWrite)]):null}let K=function(){function t(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}var e=t.prototype;return e.setPipeline=function(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1},e.invalidateBlending=function(){this._blendingInvalid=!0,this._pipelineInvalid=!0},e.invalidateCulling=function(){this._cullingInvalid=!0,this._pipelineInvalid=!0},e.invalidatePolygonOffset=function(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0},e.invalidateDepthTest=function(){this._depthTestInvalid=!0,this._pipelineInvalid=!0},e.invalidateStencilTest=function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0},e.invalidateDepthWrite=function(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0},e.invalidateColorWrite=function(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0},e.invalidateStencilWrite=function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0},e.setBlending=function(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1},e.setCulling=function(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1},e.setPolygonOffset=function(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1},e.setDepthTest=function(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1},e.setStencilTest=function(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1},e.setDepthWrite=function(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1},e.setColorWrite=function(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1},e.setStencilWrite=function(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1},e.setSubState=function(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t},t}();t.StateTracker=K,t.backFaceCullingParams=n,t.cullingParams=l,t.defaultColorWriteParams=o,t.defaultDepthWriteParams=r,t.frontFaceCullingParams=s,t.makeBlending=a,t.makeColorWrite=f,t.makeCulling=c,t.makeDepthTest=u,t.makeDepthWrite=p,t.makePipelineState=g,t.makePolygonOffset=h,t.makeStencilTest=d,t.makeStencilWrite=_,t.separateBlendingParams=i,t.simpleBlendingParams=e,Object.defineProperty(t,"__esModule",{value:!0})}));
