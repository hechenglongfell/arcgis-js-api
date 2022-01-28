/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/pbf","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/OptimizedFeature","../../../../../layers/graphics/OptimizedGeometry","./FeatureSetReader","./FeatureSetReaderPBFHeader"],(function(e,t,r,n,s,i,a,o,h,u,c){"use strict";const d=n.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF"),f=!0,g=268435455,l=128,_=128e3,y={small:{delta:new Int32Array(l),decoded:new Int32Array(l)},large:{delta:new Int32Array(_),decoded:new Int32Array(_)}};function I(e){return e<=y.small.delta.length?y.small:(e<=y.large.delta.length||(y.large.delta=new Int32Array(Math.round(1.25*e)),y.large.decoded=new Int32Array(Math.round(1.25*e))),y.large)}function p(e){return e.toLowerCase().trim()}function m(e){try{const t=2,r=new i(new Uint8Array(e),new DataView(e));for(;r.next();){if(r.tag()===t)return x(r.getMessage());r.skip()}}catch(t){const e=new r("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:t});d.error(e)}return null}function x(e){const t=1;for(;e.next();){if(e.tag()===t)return e.getMessage();e.skip()}return null}function S(e){const t=1,r=2,n=3,s=4,i=5,a=6,o=7,h=8,u=9,c=e.getLength(),d=e.pos()+c;for(;e.pos()<d&&e.next();)switch(e.tag()){case t:return e.getString();case r:return e.getFloat();case n:return e.getDouble();case s:return e.getSInt32();case i:return e.getUInt32();case a:return e.getInt64();case o:return e.getUInt64();case h:return e.getSInt64();case u:return e.getBool();default:return e.skip(),null}return null}function F(e,t,r,n,s,i){return.5*Math.abs(e*n+r*i+s*t-e*i-r*t-s*n)}function G(e,t,r,n){return 0===e*n-r*t&&e*r+t*n>0}let v=function(e){function r(t,r,n,s){var i;return(i=e.call(this,t)||this)._hasNext=!1,i._isPoints=!1,i._featureIndex=-1,i._featureOffset=0,i._cache={area:0,unquantGeometry:void 0,geometry:void 0,centroid:void 0,legacyFeature:void 0,optFeature:void 0},i._geometryType=s,i._reader=r,i._header=n,i._hasNext=n.hasFeatures,i._isPoints="esriGeometryPoint"===s,i}t._inheritsLoose(r,e),r.fromBuffer=function(e,t,n=!1){const s=m(e),i=c.parseHeader(s,"esriGeometryPoint"===t,n);return new r(u.FeatureSetReader.createInstance(),s,i,t)};var n=r.prototype;return n.getSize=function(){return this.size},n.getQuantizationTransform=function(){return this._header.transform},n.getCursor=function(){return this.copy()},n.getIndex=function(){return this._featureIndex},n.setIndex=function(e){this._cache.area=0,this._cache.unquantGeometry=void 0,this._cache.geometry=void 0,this._cache.centroid=void 0,this._cache.legacyFeature=void 0,this._cache.optFeature=void 0,this._featureIndex=e},n.getAttributeHash=function(){let e="";return this._header.fields.forEach((({index:t})=>{e+=this._readAttributeAtIndex(t)+"."})),e},n.getObjectId=function(){return this._readAttributeAtIndex(this._header.objectIdFieldIndex)},n.getDisplayId=function(){return this._header.displayIds[this._featureIndex]},n.setDisplayId=function(e){this._header.displayIds[this._featureIndex]=e},n.getGroupId=function(){return this._header.groupIds[this._featureIndex]},n.setGroupId=function(e){this._header.groupIds[this._featureIndex]=e},n.readLegacyFeature=function(){if(void 0===this._cache.legacyFeature){var e;const t=this.readCentroid(),r={attributes:this.readAttributes(),geometry:this._isPoints?this.readLegacyPointGeometry():this.readLegacyGeometry(),centroid:null!=(e=t&&{x:t.coords[0],y:t.coords[1]})?e:null};return this._cache.legacyFeature=r,r}return this._cache.legacyFeature},n.readOptimizedFeature=function(){if(void 0===this._cache.optFeature){const e=new o.default(this.readGeometry(),this.readAttributes(),this.readCentroid());return e.objectId=this.getObjectId(),e.displayId=this.getDisplayId(),this._cache.optFeature=e,e}return this._cache.optFeature},n.getXHydrated=function(){const e=this._header.centroid[2*this._featureIndex],t=this.getQuantizationTransform();return s.isNone(t)?e:e*t.scale[0]+t.translate[0]},n.getYHydrated=function(){const e=this._header.centroid[2*this._featureIndex+1],t=this.getQuantizationTransform();return s.isNone(t)?e:t.translate[1]-e*t.scale[1]},n.getX=function(){return this._header.centroid[2*this._featureIndex]*this._sx+this._tx},n.getY=function(){return this._header.centroid[2*this._featureIndex+1]*this._sy+this._ty},n.readLegacyPointGeometry=function(){return{x:this.getX(),y:this.getY()}},n.readLegacyGeometry=function(e){const t=this.readGeometry(e);return a.convertToGeometry(t,this.geometryType,!1,!1)},n.readLegacyCentroid=function(){const e=this.readCentroid();if(!e)return null;const[t,r]=e.coords;return{x:t,y:r}},n.readGeometryArea=function(){return this._cache.area||this.readGeometry(!0),this._cache.area},n.readUnquantizedGeometry=function(e=!1){if(void 0===this._cache.unquantGeometry){const t=this.readGeometry(e);if(!t)return this._cache.unquantGeometry=null,null;const r=I(t.coords.length).decoded,n=t.clone(r),s=n.coords;let i=0;for(const e of n.lengths){for(let t=1;t<e;t++){const e=2*(i+t),r=2*(i+t-1);s[e]+=s[r],s[e+1]+=s[r+1]}i+=e}return this._cache.unquantGeometry=n,n}return this._cache.unquantGeometry},n.readHydratedGeometry=function(){if(this._isPoints){if(this._header.centroid[2*this._featureIndex]===g)return null;const e=this.getXHydrated(),t=this.getYHydrated();return new h([],[e,t])}const e=this.readGeometry();if(!e)return null;const t=e.clone(),r=this.getQuantizationTransform();return s.isSome(r)&&a.unquantizeOptimizedGeometry(t,t,this.hasZ,this.hasM,r),t},n.readGeometry=function(e=!1){if(void 0===this._cache.geometry){let r=null;if(this._isPoints){if(this._header.centroid[2*this._featureIndex]===g)return null;const e=this.getX(),t=this.getY();r=new h([],[e,t])}else{const n=this._header.offsets.geometry[this._featureIndex],s=this._reader;if(0===n)return null;s.move(n);try{r=e?this._parseGeometryForDisplay(s):this._parseGeometry(s)}catch(t){return console.error("Failed to parse geometry!",t),null}}return this._cache.geometry=r,r}return this._cache.geometry},n.readCentroid=function(){if(void 0===this._cache.centroid){let e=null;const t=this._header.centroid[2*this._featureIndex]+this._tx,r=this._header.centroid[2*this._featureIndex+1]+this._ty;return t===g?(e=this._computeCentroid(),e&&(this._header.centroid[2*this._featureIndex]=e.coords[0]-this._tx,this._header.centroid[2*this._featureIndex+1]=e.coords[1]-this._ty)):e=new h([],[t,r]),this._cache.centroid=e,e}return this._cache.centroid},n.copy=function(){const e=this._reader.clone(),t=new r(this.instance,e,this._header,this.geometryType);return this.copyInto(t),t},n.next=function(){for(this._cache.area=0,this._cache.unquantGeometry=void 0,this._cache.geometry=void 0,this._cache.centroid=void 0,this._cache.legacyFeature=void 0,this._cache.optFeature=void 0;++this._featureIndex<this.size&&!this._getExists(););return this._featureIndex<this.size},n._readAttribute=function(e,t){const r=this._header.hasField(e)?e:p(e),n=this._header.getFieldIndex(r);if(null==n)return;const s=this._readAttributeAtIndex(n);if(!t)return s;if(null==s)return s;return this._header.isDateField(r)?new Date(s):s},n._readAttributes=function(){const e={};return this._header.fields.forEach((({fieldName:t,index:r})=>{e[t]=this._readAttributeAtIndex(r)})),e},n.copyInto=function(t){e.prototype.copyInto.call(this,t),t._featureIndex=this._featureIndex,t._featureOffset=this._featureOffset,t._hasNext=this._hasNext},n._readAttributeAtIndex=function(e){const t=this._header.offsets.attributes[this._featureIndex*this._header.fieldCount+e],r=this._reader;return r.move(t),S(r)},n._parseGeometry=function(e){const t=2,r=3,n=e.getLength(),s=e.pos()+n,i=[],a=[];for(;e.pos()<s&&e.next();)switch(e.tag()){case t:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;)a.push(e.getUInt32());break}case r:{const t=e.getUInt32(),r=e.pos()+t;for(i.push(e.getSInt32()+this._tx),i.push(e.getSInt32()+this._ty),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();e.pos()<r;)i.push(e.getSInt32()),i.push(e.getSInt32()),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();break}default:e.skip()}return new h(a,i)},n._parseGeometryForDisplay=function(e){const t=2,r=3,n=e.getLength(),s=e.pos()+n,i=[],a=[];let o=0,u=0,c=null,d=0;const g="esriGeometryPolygon"===this.geometryType;for(;e.pos()<s&&e.next();)switch(e.tag()){case t:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;){const t=e.getUInt32();i.push(t),o+=t}c=I(2*o).delta;break}case r:{e.getUInt32();const t=2+(this.hasZ?1:0)+(this.hasM?1:0);for(const r of i)if(u+t*r>c.length)for(let t=0;t<r;t++)e.getSInt32(),e.getSInt32(),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();else if(g&&f){const t=this.getAreaSimplificationThreshold(r,this._header.vertexCount);let n=2,s=1;const i=!1;let o=e.getSInt32(),h=e.getSInt32();c[u++]=o,c[u++]=h,this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();let f=e.getSInt32(),g=e.getSInt32();for(this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();n<r;){let r=e.getSInt32(),i=e.getSInt32();this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();const a=o+f,l=h+g;F(o,h,a,l,a+r,l+i)>=t?(d+=-.5*(a-o)*(l+h),s>1&&G(c[u-2],c[u-1],f,g)?(c[u-2]+=f,c[u-1]+=g):(c[u++]=f,c[u++]=g,s++),o=a,h=l):(r+=f,i+=g),f=r,g=i,n++}s<3||i?u-=2*s:(d+=-.5*(o+f-o)*(h+g+h),G(c[u-2],c[u-1],f,g)?(c[u-2]+=f,c[u-1]+=g,a.push(s)):(c[u++]=f,c[u++]=g,a.push(++s)))}else{let t=0,n=e.getSInt32(),s=e.getSInt32();this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32(),c[u++]=n,c[u++]=s,t+=1;for(let i=1;i<r;i++){const r=e.getSInt32(),a=e.getSInt32(),o=n+r,h=s+a;d+=-.5*(o-n)*(h+s),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32(),i>2&&G(c[u-2],c[u-1],r,a)?(c[u-2]+=r,c[u-1]+=a):(c[u++]=r,c[u++]=a,t+=1),n=o,s=h}a.push(t)}break}default:e.skip()}if(this._cache.area=d,!a.length)return null;if(this._tx||this._ty){let e=0;for(const t of a)c[2*e]+=this._tx,c[2*e+1]+=this._ty,e+=t}return new h(a,c)},t._createClass(r,[{key:"geometryType",get:function(){return this._geometryType}},{key:"size",get:function(){return this._header.featureCount}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}},{key:"stride",get:function(){return 2+(this.hasZ?1:0)+(this.hasM?1:0)}},{key:"hasFeatures",get:function(){return this._header.hasFeatures}},{key:"hasNext",get:function(){return this._hasNext}},{key:"exceededTransferLimit",get:function(){return this._header.exceededTransferLimit}}]),r}(u.FeatureSetReader);e.FeatureSetReaderPBF=v,Object.defineProperty(e,"__esModule",{value:!0})}));
