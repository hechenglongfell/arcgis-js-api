/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec4f32","../../../../webgl/BufferObject","../../../../webgl/FramebufferObject","../../../../../core/has","../../../../webgl/enums","../../../../webgl/RenderingContext","../../../../../chunks/builtins","../../../../webgl/programUtils","../../../../webgl/Texture","../../../../webgl/VertexArrayObject","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms"],(function(t,e,r,i,n,o,s,a,l,u,c,f,g,d){"use strict";const h=300,_=32;return function(i){function n(){var t;return(t=i.apply(this,arguments)||this)._color=e.fromValues(1,0,0,1),t}t._inheritsLoose(n,i);var o=n.prototype;return o.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},o.prepareState=function({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(1,771,1,771),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1)},o.draw=function(t,e){const{context:r}=t;if(!e.isReady)return;this._loadWGLResources(r),r.bindVAO(this._outlineVertexArrayObject),r.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",e.coordRange[0],e.coordRange[1]),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.drawArrays(3,0,4),r.bindVAO();const i=this._getTexture(r,e);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.useProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",e.coordRange[0]/e.size[0],e.coordRange[1]/e.size[1]),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())},o._loadWGLResources=function(t){if(this._outlineProgram&&this._tileInfoProgram)return;const e=l.createProgram(t,g.background),i=l.createProgram(t,d.tileInfo),n={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},o=new Int8Array([0,0,1,0,1,1,0,1]),s=r.createVertex(t,35044,o),a=new c(t,g.background.attributes,n,{geometry:s}),u=new Int8Array([0,0,1,0,0,1,1,1]),f=r.createVertex(t,35044,u),h=new c(t,d.tileInfo.attributes,n,{geometry:f});this._outlineProgram=e,this._tileInfoProgram=i,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=h},o._getTexture=function(t,e){if(e.texture&&e.triangleCountReportedInDebug===e.triangleCount)return e.texture;e.triangleCountReportedInDebug=e.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width",`${h}`),this._canvas.setAttribute("height",`${_}`),this._canvas.setAttribute("style","display:none"));const r=e.triangleCount;let i=e.key.id;e.triangleCount>0&&(i+=`, ${r}`);const n=this._canvas,o=n.getContext("2d");return o.font="24px sans-serif",o.textAlign="left",o.textBaseline="top",o.clearRect(0,0,h,_),r>1e5?(o.fillStyle="red",o.fillRect(0,0,h,_),o.fillStyle="black"):(o.clearRect(0,0,h,_),o.fillStyle="blue"),o.fillText(i,0,0),e.texture=new u(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071},n),e.texture},n}(f)}));
