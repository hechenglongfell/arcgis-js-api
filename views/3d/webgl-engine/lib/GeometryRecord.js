/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/ObjectPool","../../../../core/uid","../../../../chunks/vec3"],(function(t,e,i,r,n,s){"use strict";let o=function(){function t(){this._disposed=!1}var r=t.prototype;return r.acquire=function(t,e,i,r,s,o){this.id=n.generateUID(),this.geometry=t,this.material=e,this.transformation=i,this.instanceParameters=r,this.origin=s,this._shaderTransformation=o,this._disposed=!1},r.release=function(){this._disposed=!1},r.dispose=function(){this._disposed=!0},r.getStaticTransformation=function(){return this.transformation},r.getShaderTransformation=function(){return i.isSome(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation},r.computeAttachmentOrigin=function(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(s.transformMat4(t,t,this.getStaticTransformation()),!0)},e._createClass(t,[{key:"disposed",get:function(){return this._disposed}},{key:"shaderTransformation",get:function(){return this._shaderTransformation}}]),t}();o.pool=new r(o),t.GeometryRecord=o,Object.defineProperty(t,"__esModule",{value:!0})}));
