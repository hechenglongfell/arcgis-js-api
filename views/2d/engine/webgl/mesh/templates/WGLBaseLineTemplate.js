/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/maybe","../../definitions","../../enums","../../number","../../TurboLine","../../materialKey/MaterialKey","./templateUtils"],(function(e,t,i,r,o,s,n,l){"use strict";const a=8,h=16,u=65535,d=o=>function(o){function a(...e){var t;return(t=o.call(this,...e)||this).tessellationProperties={},t._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0},t.geometryType=r.WGLGeometryType.LINE,t}e._inheritsLoose(a,o);var h=a.prototype;return h.writeGeometry=function(e,t,i,r){this._writeGeometry(e,t,i,r)},h._initializeTessellator=function(e){const t=n.LineMaterialKey.load(this._materialKey),r=n.FillMaterialKey.load(this._materialKey),o=this._tessellationOptions,l=t.vvSizeFieldStops||t.vvSizeMinMaxValue||t.vvSizeScaleStops||t.vvSizeUnitValue,a=this.tessellationProperties._halfWidth<i.THIN_LINE_HALF_WIDTH_THRESHOLD&&!e&&!l;this.tessellationProperties.minMaxZoom=this._minMaxZoom,o.wrapDistance=u,o.textured=this._isDashed||this._hasPattern,o.offset=this.tessellationProperties.offset,o.halfWidth=this.tessellationProperties._halfWidth;const h=a?0:1,d=r.outlinedFill?c:_;this._lineTessellator=new s.LineTessellation(d(this.tessellationProperties,h,h),f(this.tessellationProperties),a)},h._write=function(e,t,i){const r="esriGeometryPoint"===t.geometryType;e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,i,r),e.recordEnd()},h._writeGeometry=function(e,i,r,o){const s=null!=r?r:i.readLegacyGeometryForDisplay(),n=this._getLines(s,o);t.isNone(n)||this._writeVertices(e,i,n)},h._getLines=function(e,i){if(t.isNone(e))return null;const r=e.paths||e.rings;if(t.isNone(r))return null;const o=i?256:16;return l.clipLinesMarshall(r,o)},h._writeVertices=function(e,t,i){const r=t.getDisplayId(),o=e.vertexCount(),s=this.tessellationProperties,l=this._tessellationOptions;s.out=e,s.id=r,s.indexCount=0,s.vertexCount=0,s.offset=o,l.capType=this._capType,l.joinType=this._joinType;const a=n.FillMaterialKey.load(this._materialKey);this.tessellationProperties.key=a.outlinedFill?a:n.LineMaterialKey.load(this._materialKey);for(const{line:n,start:h}of i)l.initialDistance=h%u,this._lineTessellator.tessellate(n,l)},a}(o),_=(e,t,i)=>(r,s,n,l,u,d,_,c,f,p,x)=>{const y=o.i1616to32(x,Math.ceil(h*e._halfWidth)),v=o.i8888to32(Math.round(h*_),Math.round(h*c),Math.round(h*f),Math.round(h*p)),W=o.i8888to32(h*u,h*d,0,e._bitset),m=e.out;return m.vertexBounds(r,s,t,i),m.vertexWrite(o.i1616to32(a*r,a*s)),m.vertexWrite(e.id),m.vertexWrite(e._fillColor),m.vertexWrite(v),m.vertexWrite(y),m.vertexWrite(e._tl),m.vertexWrite(e._br),m.vertexWrite(W),m.vertexWrite(o.i1616to32(Math.ceil(h*e._halfReferenceWidth),0)),m.vertexWrite(e.minMaxZoom),m.vertexEnd(),e.offset+e.vertexCount++},c=(e,t,i)=>(r,s,n,l,u,d,_,c,f,p,x)=>{const y=o.i8888to32(0,0,h*e._halfWidth,h*e._halfReferenceWidth),v=o.i8888to32(h*_+128,h*c+128,h*f+128,h*p+128),W=e.out,m=e._bitset<<24|e.id;return W.vertexBounds(r,s,t,i),W.vertexWrite(o.i1616to32(a*r,a*s)),W.vertexWrite(m),W.vertexWrite(e._fillColor),e.key.simple||(W.vertexWrite(0),W.vertexWrite(0)),W.vertexWrite(y),W.vertexWrite(v),e.key.simple||W.vertexWrite(e.minMaxZoom),W.vertexEnd(),e.offset+e.vertexCount++},f=e=>(t,i,r)=>{const o=e.out;o.indexWrite(t),o.indexWrite(i),o.indexWrite(r),e.indexCount+=3};return d}));
