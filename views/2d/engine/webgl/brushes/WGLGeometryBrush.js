/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","./WGLBrush"],(function(t,e,i,n){"use strict";return function(n){function r(){return n.apply(this,arguments)||this}t._inheritsLoose(r,n);var s=r.prototype;return s.prepareState=function({context:t},e,i){const n=i&&-1!==i.indexOf("id");t.setBlendingEnabled(!n),t.setBlendFunctionSeparate(1,771,1,771),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilFunction(514,e.stencilRef,255)},s.draw=function(t,i,n){const r=this.getGeometryType();i.commit(t);const s=i.getGeometry(r);e.isNone(s)||(t.timeline.begin(this.name),t.attributeView.bindTextures(t.context),s.forEachCommand((e=>this.drawGeometry(t,i,e,n))))},s._setSharedUniforms=function(t,e,n){const{displayLevel:r,pixelRatio:s,state:a}=e;t.setUniform1f("u_pixelRatio",s),t.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),t.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),t.setUniform1f("u_currentZoom",Math.round(r*i.MIN_MAX_ZOOM_PRECISION_FACTOR)),t.setUniform1i("u_attributeTextureSize",e.attributeView.size),t.setUniform1i("u_attributeData0",i.TEXTURE_BINDING_ATTRIBUTE_DATA_0),t.setUniform1i("u_attributeData1",i.TEXTURE_BINDING_ATTRIBUTE_DATA_1),t.setUniform1i("u_attributeData2",i.TEXTURE_BINDING_ATTRIBUTE_DATA_2),t.setUniform1i("u_attributeData3",i.TEXTURE_BINDING_ATTRIBUTE_DATA_3)},r}(n)}));
