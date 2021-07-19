/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/screenUtils","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],(function(t,e,i,s,o,r,a,n,l,c){"use strict";return function(n){function l(t,r,l){var c;(c=n.call(this,t)||this)._minMaxZoom=o.i1616to32(Math.round(r*s.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(l*s.MIN_MAX_ZOOM_PRECISION_FACTOR)),c._cimLineLayer=t;let h=0;a.isFunction(t.width)||(h=.5*e.pt2px(t.width));const _=(i,s,o)=>a.isFunction(t.width)?.5*e.pt2px(t.width(i,s,o)):h;if(c._dynamicPropertyMap.set("_halfWidth",_),a.isFunction(t.cap)?c._dynamicPropertyMap.set("_capType",t.cap):c._capType=t.cap,a.isFunction(t.join)?c._dynamicPropertyMap.set("_joinType",t.join):c._joinType=t.join,a.isFunction(t.color)){const e=(e,s,o)=>{const r=t.color(e,s,o);return r&&i.premultiplyAlphaRGBA(r)||0};c._dynamicPropertyMap.set("_fillColor",e)}else{const e=t.color;c._fillColor=e&&i.premultiplyAlphaRGBA(e)||0}if(a.isFunction(t.miterLimit)){const e=(e,i,s)=>a.getLimitCosine(t.miterLimit(e,i,s));c._dynamicPropertyMap.set("_miterLimitCosine",e)}else c._miterLimitCosine=a.getLimitCosine(t.miterLimit);return c._scaleFactor=t.scaleFactor||1,c._isDashed=t.isDashed,c._effects=t.effects,c.tessellationProperties._bitset=t.colorLocked?1:0,c._materialKey=t.materialKey,c._initializeTessellator(!0),c}return t._inheritsLoose(l,n),l.fromCIMLine=function(t,e){const[i,s]=a.getMinMaxZoom(t.scaleInfo,e);return new l(t,i,s)},l.prototype.bindFeature=function(t,e,i){const a=t.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,s)=>{this[s]=t(a,e,i)})),this._halfWidth*=this._scaleFactor;const n=this._materialCache,l=(0,this._cimLineLayer.materialHash)(a,e,i),h=n.get(l);let _=null;if(h&&c.ok(h.spriteMosaicItem)&&(_=h.spriteMosaicItem),_){this._hasPattern=!0;const{rect:t,width:e,height:i}=_,r=t.x+s.SPRITE_PADDING,a=t.y+s.SPRITE_PADDING,n=r+e,l=a+i;this.tessellationProperties._tl=o.i1616to32(r,a),this.tessellationProperties._br=o.i1616to32(n,l)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties.offset=0,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;const p=r.LineMaterialKey.load(this._materialKey);_&&(p.sdf=_.sdf,p.pattern=!0,p.textureBinding=_.textureBinding),this._materialKey=p.data},l}(n(l))}));
