/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../views/2d/engine/webgl/enums","../../views/2d/engine/webgl/materialKey/MaterialKey"],(function(e,t,n,a){"use strict";const l={marker:n.WGLGeometryType.MARKER,fill:n.WGLGeometryType.FILL,line:n.WGLGeometryType.LINE,text:n.WGLGeometryType.TEXT};let i=function(){function e(e,t,i,s){const o={minScale:t?.minScale,maxScale:t?.maxScale},c=r(o);this.layers=e,this.data=t,this.hash=this._createHash()+c,this.rendererKey=i;const y={isOutline:!1,placement:null,symbologyType:n.WGLSymbologyType.DEFAULT,vvFlags:i};for(const n of e){const e=l[n.type];y.isOutline="line"===n.type&&n.isOutline,n.materialKey=a.createMaterialKey(e,y),n.maxVVSize=s,n.scaleInfo=o,n.templateHash+=c}}return e.prototype._createHash=function(){let e="";for(const t of this.layers)e+=t.templateHash;return e},t._createClass(e,[{key:"type",get:function(){return"expanded-cim"}}]),e}();function r(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}e.ExpandedCIM=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
