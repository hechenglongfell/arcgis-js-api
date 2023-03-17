/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey","../../../../webgl/enums"],(function(e,t,a,o,n,i,r){"use strict";const s=e=>o.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:r.DataType.SHORT},{location:1,name:"a_id",count:4,type:r.DataType.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:r.DataType.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:r.DataType.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:r.DataType.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:r.DataType.BYTE},{location:6,name:"a_zoomRange",count:2,type:r.DataType.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",count:2,type:r.DataType.SHORT},{location:8,name:"a_texCoords",count:2,type:r.DataType.UNSIGNED_SHORT}]});let u=function(o){function n(){return o.apply(this,arguments)||this}e._inheritsLoose(n,o);var u=n.prototype;return u.dispose=function(){},u.getGeometryType=function(){return a.WGLGeometryType.TEXT},u.supportsSymbology=function(e){return!0},u.drawGeometry=function(e,a,o,n){const{context:u,painter:m,rendererInfo:y,state:l,passOptions:p,requestRender:c,allowDelayedRender:T}=e,f=i.TextMaterialKey.load(o.materialKey),_=t.isSome(p)&&"hittest"===p.type,{bufferLayouts:d,attributes:E}=s(f),N=m.materialManager.getMaterialProgram(e,f,"materials/text",E,n);if(T&&t.isSome(c)&&!N.compiled)return void c();u.useProgram(N);let D=r.PrimitiveType.TRIANGLES;_&&(D=r.PrimitiveType.POINTS),this._setSharedUniforms(N,e,a),m.textureManager.bindTextures(u,N,f),N.setUniformMatrix3fv("u_displayMat3",l.displayMat3),N.setUniformMatrix3fv("u_displayViewMat3",l.displayViewMat3),this._setSizeVVUniforms(f,N,y,a),this._setColorAndOpacityVVUniforms(f,N,y),this._setRotationVVUniforms(f,N,y);const S=o.target.getVAO(u,d,E),U=o.indexFrom*Uint32Array.BYTES_PER_ELEMENT;N.setUniform1f("u_isHaloPass",0),N.setUniform1f("u_isBackgroundPass",1),u.bindVAO(S),u.drawElements(D,o.indexCount,r.DataType.UNSIGNED_INT,U),N.setUniform1f("u_isHaloPass",1),N.setUniform1f("u_isBackgroundPass",0),u.drawElements(r.PrimitiveType.TRIANGLES,o.indexCount,r.DataType.UNSIGNED_INT,U),N.setUniform1f("u_isHaloPass",0),N.setUniform1f("u_isBackgroundPass",0),u.drawElements(D,o.indexCount,r.DataType.UNSIGNED_INT,U)},n}(n);return u}));
