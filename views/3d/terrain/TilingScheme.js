/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/mathUtils","../../../core/maybe","../../../core/unitUtils","../../../geometry/Extent","../../../geometry/projection","../../../geometry/SpatialReference","../../../geometry/support/aaBoundingRect","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils","../../../layers/support/TileInfo"],(function(e,t,i,n,s,l,o,r,a,c,u,h){"use strict";const f=12;let p=function(){function r(e){const t=r.checkUnsupported(e);if(n.isSome(t))throw t;const i=n.unwrap(e);this.spatialReference=i.spatialReference,this._isWebMercator=this.spatialReference.isWebMercator,this._isGCS=o.canProjectToWGS84ComparableLonLat(this.spatialReference)||c.isMars(this.spatialReference)||c.isMoon(this.spatialReference),this.origin=[i.origin.x,i.origin.y],this.pixelSize=i.size[0],this.dpi=i.dpi;const s=i.lods.reduce((function(e,t,i){return t.level<e.min&&(e.min=t.level,e.minIndex=i),e.max=Math.max(e.max,t.level),e}),{min:1/0,minIndex:0,max:-1/0}),l=i.lods[s.minIndex],a=2**l.level;let u=l.resolution*a,h=l.scale*a;this.levels=new Array(s.max+1);for(let n=0;n<this.levels.length;n++)this.levels[n]={resolution:u,scale:h,tileSize:[u*i.size[0],u*i.size[1]]},u/=2,h/=2}var a=r.prototype;return a.clone=function(){return new r(this.toTileInfo())},a.toTileInfo=function(){return new h({dpi:this.dpi,origin:{x:this.origin[0],y:this.origin[1],spatialReference:this.spatialReference},size:[this.pixelSize,this.pixelSize],spatialReference:this.spatialReference,lods:this.levels.map(((e,t)=>({level:t,scale:e.scale,resolution:e.resolution})))})},a.getExtent=function(e,t,i,n){const s=this.levels[e],l=s.tileSize[0],o=s.tileSize[1];n[0]=this.origin[0]+i*l,n[2]=n[0]+l,n[3]=this.origin[1]-t*o,n[1]=n[3]-o},a.convertExtentToRadians=function(e,t){this._isWebMercator?(t[0]=u.x2lon(e[0]),t[1]=u.y2lat(e[1]),t[2]=u.x2lon(e[2]),t[3]=u.y2lat(e[3])):this._isGCS&&(t[0]=i.deg2rad(e[0]),t[1]=i.deg2rad(e[1]),t[2]=i.deg2rad(e[2]),t[3]=i.deg2rad(e[3]))},a.getExtentGeometry=function(e,t,i,n=new l){return this.getExtent(e,t,i,g),n.spatialReference=this.spatialReference,n.xmin=g[0],n.ymin=g[1],n.xmax=g[2],n.ymax=g[3],n.zmin=void 0,n.zmax=void 0,n},a.ensureMaxLod=function(e){if(null==e)return!1;let t=!1;for(;this.levels.length<=e;){const e=this.levels[this.levels.length-1],i=e.resolution/2;this.levels.push({resolution:i,scale:e.scale/2,tileSize:[i*this.pixelSize,i*this.pixelSize]}),t=!0}return t},a.capMaxLod=function(e){this.levels.length>e+1&&(this.levels.length=e+1)},a.getMaxLod=function(){return this.levels.length-1},a.scaleAtLevel=function(e){return this.levels[0].scale/2**e},a.levelAtScale=function(e){const t=this.levels[0].scale;return e>=t?0:Math.log(t/e)*Math.LOG2E},a.resolutionAtLevel=function(e){return this.levels[0].resolution/2**e},a.compatibleWith=function(e){if(!(e instanceof r)){if(r.checkUnsupported(e))return!1;e=new r(e)}if(!e.spatialReference.equals(this.spatialReference))return!1;if(e.pixelSize!==this.pixelSize)return!1;const t=Math.min(this.levels.length,e.levels.length)-1,n=this.levels[t].resolution;let s=.5*n;if(!i.floatEqualAbsolute(e.origin[0],this.origin[0],s)||!i.floatEqualAbsolute(e.origin[1],this.origin[1],s))return!1;return s=.5*n/2**t/this.pixelSize*f,i.floatEqualAbsolute(n,e.levels[t].resolution,s)},a.rootTilesInExtent=function(e,t=null,i=1/0){const s=new Array,l=this.levels[0].tileSize;if(n.isNone(e)||0===l[0]||0===l[1])return s;r.computeRowColExtent(e,l,this.origin,g);let o=g[1],a=g[3],c=g[0],u=g[2];const h=u-c,f=a-o;if(h*f>i){const e=Math.floor(Math.sqrt(i));f>e&&(o=o+Math.floor(.5*f)-Math.floor(.5*e),a=o+e),h>e&&(c=c+Math.floor(.5*h)-Math.floor(.5*e),u=c+e)}for(let n=o;n<a;n++)for(let e=c;e<u;e++)s.push([0,n,e]);return n.isSome(t)&&(t[0]=this.origin[0]+c*l[0],t[1]=this.origin[1]-a*l[1],t[2]=this.origin[0]+u*l[0],t[3]=this.origin[1]-o*l[1]),s},r.computeRowColExtent=function(e,t,i,n){const s=.001*(e[2]-e[0]+(e[3]-e[1]));n[0]=Math.max(0,Math.floor((e[0]+s-i[0])/t[0])),n[2]=Math.max(0,Math.ceil((e[2]-s-i[0])/t[0])),n[1]=Math.max(0,Math.floor((i[1]-e[3]+s)/t[1])),n[3]=Math.max(0,Math.ceil((i[1]-e[1]-s)/t[1]))},r.isPowerOfTwo=function(e){const t=e.lods,n=t[0].resolution*2**t[0].level;return!t.some((function(e){return!i.floatEqualRelative(e.resolution,n/2**e.level)}))},r.hasGapInLevels=function(e){const t=e.lods.map((function(e){return e.level}));t.sort((function(e,t){return e-t}));for(let i=1;i<t.length;i++)if(t[i]!==t[0]+i)return!0;return!1},r.tileSizeSupported=function(e){const t=e.size[1];return t===e.size[0]&&0==(t&t-1)&&t>=128&&t<=512},r.hasOriginPerLODs=function(e){const t=e.origin;return e.lods.some((e=>null!=e.origin&&(e.origin[0]!==t.x||e.origin[1]!==t.y)))},r.checkUnsupported=function(e){return n.isNone(e)?new t("tilingscheme:tile-info-missing","Tiling scheme must have tiling information"):e.lods.length<1?new t("tilingscheme:generic","Tiling scheme must have at least one level"):r.isPowerOfTwo(e)?r.hasGapInLevels(e)?new t("tilingscheme:gaps","Tiling scheme levels must not have gaps between min and max level"):r.tileSizeSupported(e)?r.hasOriginPerLODs(e)?new t("tilingscheme:multiple-origin","Tiling scheme levels must not have their own origin"):null:new t("tilingscheme:tile-size","Tiles must be square and size must be one of [128, 256, 512]"):new t("tilingscheme:power-of-two","Tiling scheme must be power of two")},r.fromExtent=function(e,t){const i=e[2]-e[0],n=e[3]-e[1],l=s.getMetersPerUnitForSR(t),o=1.2*Math.max(i,n),a=256,c=96,u=.0254,f=new r(new h({size:[a,a],origin:{x:e[0]-.5*(o-i),y:e[3]+.5*(o-n)},lods:[{level:0,resolution:o/a,scale:1/(a/c*u/(o*l))}],spatialReference:t}));return f.ensureMaxLod(20),f},r.makeWebMercatorAuxiliarySphere=function(e){const t=new r(r.WebMercatorAuxiliarySphereTileInfo);return t.ensureMaxLod(e),t},r.makeGCSWithTileSize=function(e,t=256,i=16){const n=256/t,s=new r(new h({size:[t,t],origin:{x:-180,y:90,spatialReference:e},spatialReference:e,lods:[{level:0,resolution:.703125*n,scale:295497598.570834*n}]}));return s.ensureMaxLod(i),s},e._createClass(r,[{key:"test",get:function(){return{isWebMercator:this._isWebMercator,isGCS:this._isGCS}}}]),r}();p.WebMercatorAuxiliarySphereTileInfo=new h({size:[256,256],origin:{x:-20037508.342787,y:20037508.342787,spatialReference:r.WebMercator},spatialReference:r.WebMercator,lods:[{level:0,resolution:156543.03392800014,scale:591657527.591555}]}),p.WebMercatorAuxiliarySphere=p.makeWebMercatorAuxiliarySphere(19);const g=a.create();return p}));
