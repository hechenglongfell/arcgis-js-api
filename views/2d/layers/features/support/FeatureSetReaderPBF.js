/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/pbf","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/OptimizedFeature","../../../../../layers/graphics/OptimizedGeometry","./FeatureSetReader","./FeatureSetReaderPBFHeader"],(function(e,t,r,n,i,s,a,o,h,u,c){"use strict";const d=n.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF"),f=268435455;function _(e){return e.toLowerCase().trim()}function l(e){try{const t=2,r=new s(new Uint8Array(e),new DataView(e));for(;r.next();)switch(r.tag()){case t:return g(r.getMessage());default:r.skip()}}catch(t){const e=new r("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:t});d.error(e)}return null}function g(e){const t=1;for(;e.next();)switch(e.tag()){case t:return e.getMessage();default:e.skip()}return null}function y(e){const t=1,r=2,n=3,i=4,s=5,a=6,o=7,h=8,u=9,c=e.getLength(),d=e.pos()+c;for(;e.pos()<d&&e.next();)switch(e.tag()){case t:return e.getString();case r:return e.getFloat();case n:return e.getDouble();case i:return e.getSInt32();case s:return e.getUInt32();case a:return e.getInt64();case o:return e.getUInt64();case h:return e.getSInt64();case u:return e.getBool();default:return e.skip(),null}return null}let p=function(e){function r(t,r,n,i){var s;return(s=e.call(this,t)||this)._hasNext=!1,s._isPoints=!1,s._isPolygons=!1,s._featureIndex=-1,s._featureOffset=0,s._cache={area:0,unquantGeometry:void 0,geometry:void 0,centroid:void 0,legacyFeature:void 0,optFeature:void 0},s._geometryType=i,s._reader=r,s._header=n,s._hasNext=n.hasFeatures,s._isPoints="esriGeometryPoint"===i,s._isPolygons="esriGeometryPolygon"===i,s}t._inheritsLoose(r,e),r.fromBuffer=function(e,t,n=!1){const i=l(e),s=c.parseHeader(i,"esriGeometryPoint"===t,n);return new r(u.FeatureSetReader.createInstance(),i,s,t)};var n=r.prototype;return n.getSize=function(){return this.size},n.getQuantizationTransform=function(){return this._header.transform},n.getCursor=function(){return this.copy()},n.getIndex=function(){return this._featureIndex},n.setIndex=function(e){this._cache.area=0,this._cache.unquantGeometry=void 0,this._cache.geometry=void 0,this._cache.centroid=void 0,this._cache.legacyFeature=void 0,this._cache.optFeature=void 0,this._featureIndex=e},n.getAttributeHash=function(){let e="";return this._header.fields.forEach((({index:t})=>{e+=this._readAttributeAtIndex(t)+"."})),e},n.getObjectId=function(){return this._readAttributeAtIndex(this._header.objectIdFieldIndex)},n.getDisplayId=function(){return this._header.displayIds[this._featureIndex]},n.setDisplayId=function(e){this._header.displayIds[this._featureIndex]=e},n.getGroupId=function(){return this._header.groupIds[this._featureIndex]},n.setGroupId=function(e){this._header.groupIds[this._featureIndex]=e},n.readLegacyFeature=function(){if(void 0===this._cache.legacyFeature){var e;const t=this.readCentroid(),r={attributes:this.readAttributes(),geometry:this._isPoints?this.readLegacyPointGeometry():this.readLegacyGeometry(),centroid:null!=(e=t&&{x:t.coords[0],y:t.coords[1]})?e:null};return this._cache.legacyFeature=r,r}return this._cache.legacyFeature},n.readOptimizedFeature=function(){if(void 0===this._cache.optFeature){const e=new o(this.readGeometry(),this.readAttributes(),this.readCentroid());return e.objectId=this.getObjectId(),e.displayId=this.getDisplayId(),this._cache.optFeature=e,e}return this._cache.optFeature},n.getXHydrate=function(){const e=this._header.centroid[2*this._featureIndex],t=this.getQuantizationTransform();return i.isNone(t)?e:e*t.scale[0]+t.translate[0]},n.getYHydrate=function(){const e=this._header.centroid[2*this._featureIndex+1],t=this.getQuantizationTransform();return i.isNone(t)?e:t.translate[1]-e*t.scale[1]},n.getX=function(){return this._header.centroid[2*this._featureIndex]*this._sx+this._tx},n.getY=function(){return this._header.centroid[2*this._featureIndex+1]*this._sy+this._ty},n.readLegacyPointGeometry=function(){return{x:this.getX(),y:this.getY()}},n.readLegacyGeometry=function(){const e=this.readGeometry();return a.convertToGeometry(e,this.geometryType,!1,!1)},n.readLegacyCentroid=function(){const e=this.readCentroid();if(!e)return null;const[t,r]=e.coords;return{x:t,y:r}},n.readGeometryArea=function(){return this._cache.area||this.readGeometry(),this._cache.area},n.readUnquantizedGeometry=function(){if(void 0===this._cache.unquantGeometry){const e=this.readGeometry();if(!e)return this._cache.unquantGeometry=null,null;const t=e.clone(),r=t.lengths,n=t.coords;for(let i=0,s=2;i<r.length;i++,s+=2){const e=r[i];for(let t=1;t<e;t+=1,s+=2)n[s]+=n[s-2],n[s+1]+=n[s-1]}return this._cache.unquantGeometry=t,t}return this._cache.unquantGeometry},n.readHydratedGeometry=function(){if(this._isPoints){if(this._header.centroid[2*this._featureIndex]===f)return null;const e=this.getXHydrate(),t=this.getYHydrate();return new h([],[e,t])}const e=this.readGeometry();if(!e)return null;const t=e.clone(),r=this.getQuantizationTransform();return i.isSome(r)&&a.unquantizeOptimizedGeometry(t,t,this.hasZ,this.hasM,r),t},n.readGeometry=function(){if(void 0===this._cache.geometry){let t=null;if(this._isPoints){if(this._header.centroid[2*this._featureIndex]===f)return null;const e=this.getX(),r=this.getY();t=new h([],[e,r])}else{const r=this._header.offsets.geometry[this._featureIndex],n=this._reader;if(0===r)return null;n.move(r);try{t=this._parseGeometry(n)}catch(e){return console.error("Failed to parse geometry!",e),null}}return this._cache.geometry=t,t}return this._cache.geometry},n.readCentroid=function(){if(void 0===this._cache.centroid){let e=null;const t=this._header.centroid[2*this._featureIndex]+this._tx,r=this._header.centroid[2*this._featureIndex+1]+this._ty;return t===f?(e=this._computeCentroid(),e&&(this._header.centroid[2*this._featureIndex]=e.coords[0]-this._tx,this._header.centroid[2*this._featureIndex+1]=e.coords[1]-this._ty)):e=new h([],[t,r]),this._cache.centroid=e,e}return this._cache.centroid},n.copy=function(){const e=this._reader.clone(),t=new r(this.instance,e,this._header,this.geometryType);return this.copyInto(t),t},n.next=function(){for(this._cache.area=0,this._cache.unquantGeometry=void 0,this._cache.geometry=void 0,this._cache.centroid=void 0,this._cache.legacyFeature=void 0,this._cache.optFeature=void 0;++this._featureIndex<this.size&&!this._getExists(););return this._featureIndex<this.size},n._readAttribute=function(e,t){const r=this._header.hasField(e)?e:_(e),n=this._header.getFieldIndex(r);if(null==n)return;const i=this._readAttributeAtIndex(n);if(!t)return i;if(null==i)return i;return this._header.isDateField(r)?new Date(i):i},n._readAttributes=function(){const e={};return this._header.fields.forEach((({fieldName:t,index:r})=>{e[t]=this._readAttributeAtIndex(r)})),e},n.copyInto=function(t){e.prototype.copyInto.call(this,t),t._featureIndex=this._featureIndex,t._featureOffset=this._featureOffset,t._hasNext=this._hasNext},n._readAttributeAtIndex=function(e){const t=this._header.offsets.attributes[this._featureIndex*this._header.fieldCount+e],r=this._reader;return r.move(t),y(r)},n._preprocessPolygon=function(e,t){let r=0,n=0,i=0,s=!1,a=!1,o=!1,u=-1;const c=1e6,d=[];let f=0,_=!1;for(let h=0;h<t.length;h++){const l=t[h];let g=e[2*r],y=e[2*r+1],p=0;for(let t=1;t<l;t++){const n=g,i=y,s=g+e[2*(r+t)],a=y+e[2*(r+t)+1];g=s,y=a,p+=.5*((s-n)*(a+i))}const I=p>0;if(I&&_&&(n+=l),I||(u++,_=!1),u>=c)break;f+=p,s&&I&&a&&(o=!0);{e[2*i]=e[2*n],e[2*i+++1]=e[2*n+++1];let t=1,r=e[2*n],s=e[2*n+++1];for(let a=2;a<l;a++){const a=e[2*n],o=e[2*n+++1];0===r*o-a*s&&r*a+s*o>0?(r+=a,s+=o):(e[2*i]=r,e[2*i+++1]=s,t++,r=a,s=o)}e[2*i]=r,e[2*i+++1]=s,t++,d.push(t)}s=!1,a=!0,r+=l}return d.length?(this._cache.area=Math.abs(f),new h(d,e,o)):null},n._parseGeometry=function(e){const t=1,r=2,n=3,i=e.getLength(),s=e.pos()+i,a=[],o=[];for(;e.pos()<s&&e.next();)switch(e.tag()){case r:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;)o.push(e.getUInt32());break}case n:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;)a.push(e.getSInt32()),a.push(e.getSInt32()),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();break}case t:default:e.skip()}let u=0;for(const h of o)a[2*u]+=this._tx,a[2*u+1]+=this._ty,u+=h;return this._isPolygons?this._preprocessPolygon(a,o):new h(o,a)},t._createClass(r,[{key:"geometryType",get:function(){return this._geometryType}},{key:"size",get:function(){return this._header.featureCount}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}},{key:"stride",get:function(){return 2+(this.hasZ?1:0)+(this.hasM?1:0)}},{key:"hasFeatures",get:function(){return this._header.hasFeatures}},{key:"hasNext",get:function(){return this._hasNext}},{key:"exceededTransferLimit",get:function(){return this._header.exceededTransferLimit}}]),r}(u.FeatureSetReader);e.FeatureSetReaderPBF=p,Object.defineProperty(e,"__esModule",{value:!0})}));
