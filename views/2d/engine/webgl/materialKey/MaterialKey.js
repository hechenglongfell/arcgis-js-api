/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../alignmentUtils","../enums"],(function(t,e,i,n,o){"use strict";function s(t,e,i){const n=o.WGLVVFlag.SIZE_FIELD_STOPS|o.WGLVVFlag.SIZE_MINMAX_VALUE|o.WGLVVFlag.SIZE_SCALE_STOPS|o.WGLVVFlag.SIZE_UNIT_VALUE,s=(e&(o.WGLVVTarget.FIELD_TARGETS_OUTLINE|o.WGLVVTarget.MINMAX_TARGETS_OUTLINE|o.WGLVVTarget.SCALE_TARGETS_OUTLINE|o.WGLVVTarget.UNIT_TARGETS_OUTLINE))>>>4;return t===o.WGLGeometryType.LINE&&i.isOutline||t===o.WGLGeometryType.FILL&&E(i.symbologyType)?n&s:n&~s}const r=0,a=8,y=7,l=8,u=11,p=11,v=12,c=13,h=14,S=15,V=16,f=17,L=18,T=19,g=20,m=21,d=26,G=Object.keys(o.WGLSymbologyType).filter((t=>"number"==typeof o.WGLSymbologyType[t])).reduce(((t,e)=>({...t,[e]:o.WGLSymbologyType[e]})),{});function b(t){return t===o.WGLSymbologyType.SIMPLE||t===o.WGLSymbologyType.OUTLINE_FILL_SIMPLE}function E(t){return t===o.WGLSymbologyType.OUTLINE_FILL||t===o.WGLSymbologyType.OUTLINE_FILL_SIMPLE}function _(t){return b(t.symbologyType)}function M(t){return E(t.symbologyType)}function z(t,e){switch(t){case o.WGLGeometryType.FILL:return B.from(e);case o.WGLGeometryType.LINE:return C.from(e);case o.WGLGeometryType.MARKER:return k.from(e);case o.WGLGeometryType.TEXT:return R.from(e);case o.WGLGeometryType.LABEL:return w.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function W(t){switch(F.load(t).geometryType){case o.WGLGeometryType.MARKER:return new k(t);case o.WGLGeometryType.FILL:return new B(t);case o.WGLGeometryType.LINE:return new C(t);case o.WGLGeometryType.TEXT:return new R(t);case o.WGLGeometryType.LABEL:return new w(t)}}let F=function(){function t(t){this._data=0,this._data=t}t.load=function(t){const e=this.shared;return e.data=t,e};var n=t.prototype;return n.setBit=function(t,e){const i=1<<t;e?this._data|=i:this._data&=~i},n.bit=function(t){return(this._data&1<<t)>>t},n.setBits=function(t,e,i){for(let n=e,o=0;n<i;n++,o++)this.setBit(n,0!=(t&1<<o))},n.bits=function(t,e){let i=0;for(let n=t,o=0;n<e;n++,o++)i|=this.bit(n)<<o;return i},n.hasVV=function(){return!1},n.setVV=function(t,e){},n.getVariation=function(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:o.WGLSymbologyType[this.symbologyType],options:G,namespace:"SYMBOLOGY_TYPE"}}},n.getVariationHash=function(){return this._data&~(y&this.textureBinding)},e._createClass(t,[{key:"data",get:function(){return this._data},set:function(t){this._data=t??0}},{key:"geometryType",get:function(){return this.bits(l,u)},set:function(t){this.setBits(t,l,u)}},{key:"mapAligned",get:function(){return!!this.bit(g)},set:function(t){this.setBit(g,t)}},{key:"sdf",get:function(){return!!this.bit(p)},set:function(t){this.setBit(p,t??!1)}},{key:"pattern",get:function(){return!!this.bit(v)},set:function(t){this.setBit(v,t)}},{key:"textureBinding",get:function(){return this.bits(r,a)},set:function(t){this.setBits(t,r,a)}},{key:"symbologyType",get:function(){return this.bits(m,d)},set:function(t){this.setBits(t,m,d)}},{key:"geometryTypeString",get:function(){switch(this.geometryType){case o.WGLGeometryType.FILL:return"fill";case o.WGLGeometryType.MARKER:return"marker";case o.WGLGeometryType.LINE:return"line";case o.WGLGeometryType.TEXT:return"text";case o.WGLGeometryType.LABEL:return"label";default:throw new i(`Unable to handle unknown geometryType: ${this.geometryType}`)}}}]),t}();F.shared=new F(0);const I=t=>function(t){function i(){return t.apply(this,arguments)||this}e._inheritsLoose(i,t);var n=i.prototype;return n.hasVV=function(){return t.prototype.hasVV.call(this)||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue},n.setVV=function(e,i){t.prototype.setVV.call(this,e,i);const n=s(this.geometryType,e,i)&e;this.vvSizeMinMaxValue=!!(n&o.WGLVVFlag.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(n&o.WGLVVFlag.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(n&o.WGLVVFlag.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(n&o.WGLVVFlag.SIZE_SCALE_STOPS)},e._createClass(i,[{key:"vvSizeMinMaxValue",get:function(){return 0!==this.bit(V)},set:function(t){this.setBit(V,t)}},{key:"vvSizeScaleStops",get:function(){return 0!==this.bit(f)},set:function(t){this.setBit(f,t)}},{key:"vvSizeFieldStops",get:function(){return 0!==this.bit(L)},set:function(t){this.setBit(L,t)}},{key:"vvSizeUnitValue",get:function(){return 0!==this.bit(T)},set:function(t){this.setBit(T,t)}}]),i}(t),O=t=>function(t){function i(){return t.apply(this,arguments)||this}e._inheritsLoose(i,t);var n=i.prototype;return n.hasVV=function(){return t.prototype.hasVV.call(this)||this.vvRotation},n.setVV=function(e,i){t.prototype.setVV.call(this,e,i),this.vvRotation=!i.isOutline&&!!(e&o.WGLVVFlag.ROTATION)},e._createClass(i,[{key:"vvRotation",get:function(){return 0!==this.bit(S)},set:function(t){this.setBit(S,t)}}]),i}(t),A=t=>function(t){function i(){return t.apply(this,arguments)||this}e._inheritsLoose(i,t);var n=i.prototype;return n.hasVV=function(){return t.prototype.hasVV.call(this)||this.vvColor},n.setVV=function(e,i){t.prototype.setVV.call(this,e,i),this.vvColor=!i.isOutline&&!!(e&o.WGLVVFlag.COLOR)},e._createClass(i,[{key:"vvColor",get:function(){return 0!==this.bit(c)},set:function(t){this.setBit(c,t)}}]),i}(t),U=t=>function(t){function i(){return t.apply(this,arguments)||this}e._inheritsLoose(i,t);var n=i.prototype;return n.hasVV=function(){return t.prototype.hasVV.call(this)||this.vvOpacity},n.setVV=function(e,i){t.prototype.setVV.call(this,e,i),this.vvOpacity=!i.isOutline&&!!(e&o.WGLVVFlag.OPACITY)},e._createClass(i,[{key:"vvOpacity",get:function(){return 0!==this.bit(h)},set:function(t){this.setBit(h,t)}}]),i}(t);let B=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i.load=function(t){const e=this.shared;return e.data=t,e},i.from=function(t){const{symbologyType:e,vvFlags:i}=t,n=this.load(0);return n.geometryType=o.WGLGeometryType.FILL,n.symbologyType=e,e!==o.WGLSymbologyType.DOT_DENSITY&&n.setVV(i,t),n.data},i.prototype.getVariation=function(){return{...t.prototype.getVariation.call(this),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}},i}(A(U(I(F))));B.shared=new B(0);let k=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i.load=function(t){const e=this.shared;return e.data=t,e},i.from=function(t){const{symbologyType:e,vvFlags:i}=t,n=this.load(0);return n.geometryType=o.WGLGeometryType.MARKER,n.symbologyType=e,e!==o.WGLSymbologyType.HEATMAP&&n.setVV(i,t),n.data},i.prototype.getVariation=function(){return{...t.prototype.getVariation.call(this),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}},i}(A(U(O(I(F)))));k.shared=new k(0);let C=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i.load=function(t){const e=this.shared;return e.data=t,e},i.from=function(t){const e=this.load(0);return e.geometryType=o.WGLGeometryType.LINE,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data},i.prototype.getVariation=function(){return{...t.prototype.getVariation.call(this),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}},i}(A(U(I(F))));C.shared=new C(0);let R=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i.load=function(t){const e=this.shared;return e.data=t,e},i.from=function(t){const e=this.load(0);return e.geometryType=o.WGLGeometryType.TEXT,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.data},i.prototype.getVariation=function(){return{...t.prototype.getVariation.call(this),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}},i}(A(U(O(I(F)))));R.shared=new R(0);let w=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i.load=function(t){const e=this.shared;return e.data=t,e},i.from=function(t){const e=this.load(0);return e.geometryType=o.WGLGeometryType.LABEL,e.symbologyType=t.symbologyType,e.setVV(t.vvFlags,t),e.mapAligned=n.isMapAligned(t.placement),e.data},i.prototype.getVariation=function(){return{...t.prototype.getVariation.call(this),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}},i}(I(F));w.shared=new w(0),t.FillMaterialKey=B,t.LabelMaterialKey=w,t.LineMaterialKey=C,t.MarkerMaterialKey=k,t.MaterialKeyBase=F,t.TextMaterialKey=R,t.createMaterialKey=z,t.hasOutlineFillSymbology=M,t.hasSimpleSymbology=_,t.hydrateMaterialKey=W,t.isOutlineFillSymbology=E,t.isSimpleSymbology=b,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
