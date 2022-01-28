/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../PixelBlock","../RasterInfo","../RasterStorageInfo","./BaseRaster","./pamParser","./xmlUtilities","../rasterFormats/utils","../rasterFunctions/pixelUtils","../../../geometry/SpatialReference","../../../geometry/Extent","../../../geometry/Point"],(function(e,t,r,n,s,o,i,a,l,c,u,f,p,h,g,d,m,y,x,b,I){"use strict";const w=new Map;w.set("Int8","s8"),w.set("UInt8","u8"),w.set("Int16","s16"),w.set("UInt16","u16"),w.set("Int32","s32"),w.set("UInt32","u32"),w.set("Float32","f32"),w.set("Float64","f32"),w.set("Double64","f32");const _=new Map;_.set("none",{blobExtension:".til",isOneSegment:!0,decoderFormat:"bip"}),_.set("lerc",{blobExtension:".lrc",isOneSegment:!1,decoderFormat:"lerc"}),_.set("deflate",{blobExtension:".pzp",isOneSegment:!0,decoderFormat:"deflate"}),_.set("jpeg",{blobExtension:".pjg",isOneSegment:!0,decoderFormat:"jpg"});let A=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._files=null,e._storageIndex=null,e.datasetFormat="MRF",e}e._inheritsLoose(r,t);var o=r.prototype;return o.open=function(){var t=e._asyncToGenerator((function*(e){var t;yield this.init(),this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const r=e?s.unwrap(e.signal):null,n=yield this.request(this.url,{responseType:"xml",signal:r}),{rasterInfo:o,files:i}=this._parseHeader(n.data);if(-1===(null==(t=this.ioConfig.skipExtensions)?void 0:t.indexOf("aux.xml"))){const t=yield this._fetchAuxiliaryData(e);var a;if(null!=t)o.statistics=null!=(a=t.statistics)?a:o.statistics,o.histograms=t.histograms,t.histograms&&!s.isSome(o.statistics)&&(o.statistics=y.estimateStatisticsFromHistograms(t.histograms))}this._set("rasterInfo",o),this._files=i;const l=yield this.request(i.index,{responseType:"array-buffer",signal:r});this._storageIndex=this._parseIndex(l.data);const{blockWidth:c,blockHeight:u}=this.rasterInfo.storageInfo,f=this.rasterInfo.storageInfo.pyramidScalingFactor,{width:p,height:h}=this.rasterInfo,g=[],d=this._getBandSegmentCount();let m=0,x=-1;for(;m<this._storageIndex.length;){x++;const e=Math.ceil(p/c/f**x)-1,t=Math.ceil(h/u/f**x)-1;m+=1*e*(1*t)*d*4,g.push({maxRow:t,maxCol:e,minCol:0,minRow:0})}this.rasterInfo.storageInfo.blockBoundary=g,x>0&&(this.rasterInfo.storageInfo.firstPyramidLevel=1,this.rasterInfo.storageInfo.maximumPyramidLevel=x),this.updateTileInfo()}));function r(e){return t.apply(this,arguments)}return r}(),o.fetchRawTile=function(){var t=e._asyncToGenerator((function*(e,t,r,n={}){const{blockWidth:o,blockHeight:i,blockBoundary:a}=this.rasterInfo.storageInfo,l=a[e];if(!l||l.maxRow<t||l.maxCol<r||l.minRow>t||l.minCol>r)return null;const{bandCount:c,pixelType:f}=this.rasterInfo,{ranges:p,actualTileWidth:h,actualTileHeight:g}=this._getTileLocation(e,t,r);if(!p||0===p.length)return null;if(0===p[0].from&&0===p[0].to){const e=new Uint8Array(o*i);return new u({width:o,height:i,pixels:null,mask:e,validPixelCount:0})}const{bandIds:d}=this.ioConfig,m=this._getBandSegmentCount(),y=[];let x=0;for(x=0;x<m;x++)(!d||d.indexOf[x]>-1)&&y.push(this.request(this._files.data,{range:{from:p[x].from,to:p[x].to},responseType:"array-buffer",signal:n.signal}));const b=yield Promise.all(y),I=b.map((e=>e.data.byteLength)).reduce(((e,t)=>e+t)),w=new Uint8Array(I);let A=0;for(x=0;x<m;x++)w.set(new Uint8Array(b[x].data),A),A+=b[x].data.byteLength;const F=_.get(this.rasterInfo.storageInfo.compression).decoderFormat,E=yield this.decodePixelBlock(w.buffer,{width:o,height:i,format:F,planes:(null==d?void 0:d.length)||c,pixelType:f});if(s.isSome(this.rasterInfo.noDataValue)&&"lerc"!==F&&!E.mask){const e=this.rasterInfo.noDataValue[0];if(null!=e){const t=E.width*E.height,r=new Uint8Array(t);if(Math.abs(e)>1e24)for(x=0;x<t;x++)Math.abs((E.pixels[0][x]-e)/e)>1e-6&&(r[x]=1);else for(x=0;x<t;x++)E.pixels[0][x]!==e&&(r[x]=1);E.mask=r}}let M=0,S=0;if(h!==o||g!==i){let e=E.mask;if(e)for(x=0;x<i;x++)if(S=x*o,x<g)for(M=h;M<o;M++)e[S+M]=0;else for(M=0;M<o;M++)e[S+M]=0;else for(e=new Uint8Array(o*i),E.mask=e,x=0;x<g;x++)for(S=x*o,M=0;M<h;M++)e[S+M]=1}return E}));function r(e,r,n){return t.apply(this,arguments)}return r}(),o._parseIndex=function(e){if(e.byteLength%16>0)throw"invalid array buffer must be multiples of 16";let t,r,n,s,o,i;if(m.isPlatformLittleEndian){for(r=new Uint8Array(e),s=new ArrayBuffer(e.byteLength),n=new Uint8Array(s),o=0;o<e.byteLength/4;o++)for(i=0;i<4;i++)n[4*o+i]=r[4*o+3-i];t=new Uint32Array(s)}else t=new Uint32Array(e);return t},o._getBandSegmentCount=function(){return _.get(this.rasterInfo.storageInfo.compression).isOneSegment?1:this.rasterInfo.bandCount},o._getTileLocation=function(e,t,r){const{blockWidth:n,blockHeight:s,pyramidScalingFactor:o}=this.rasterInfo.storageInfo,{width:i,height:a}=this.rasterInfo,l=this._getBandSegmentCount();let c,u,f,p=0,h=0;for(f=0;f<e;f++)h=o**f,c=Math.ceil(i/n/h),u=Math.ceil(a/s/h),p+=c*u;h=o**e,c=Math.ceil(i/n/h),u=Math.ceil(a/s/h),p+=t*c+r,p*=4*l;const g=this._storageIndex.subarray(p,p+4*l);let d=0,m=0;const y=[];for(let x=0;x<l;x++)d=g[4*x+0]*2**32+g[4*x+1],m=d+g[4*x+2]*2**32+g[4*x+3],y.push({from:d,to:m});return{ranges:y,actualTileWidth:r<c-1?n:Math.ceil(i/h)-n*(c-1),actualTileHeight:t<u-1?s:Math.ceil(a/h)-s*(u-1)}},o._parseHeader=function(e){const t=d.getElement(e,"MRF_META/Raster");if(!t)throw new n("mrf:open","not a valid MRF format");const r=d.getElement(t,"Size"),s=parseInt(r.getAttribute("x"),10),o=parseInt(r.getAttribute("y"),10),i=parseInt(r.getAttribute("c"),10),a=(d.getElementValue(t,"Compression")||"none").toLowerCase();if(!_.has(a))throw new n("mrf:open","currently does not support compression "+a);const l=d.getElementValue(t,"DataType")||"UInt8",c=w.get(l);if(null==c)throw new n("mrf:open","currently does not support pixel type "+l);const u=d.getElement(t,"PageSize"),h=parseInt(u.getAttribute("x"),10),m=parseInt(u.getAttribute("y"),10),y=d.getElement(t,"DataValues");let A,F;y&&(F=y.getAttribute("NoData"),null!=F&&(A=F.trim().split(" ").map((e=>parseFloat(e)))));if(d.getElement(e,"MRF_META/CachedSource"))throw new n("mrf:open","currently does not support MRF referencing other data files");const E=d.getElement(e,"MRF_META/GeoTags"),M=d.getElement(E,"BoundingBox");if(null==M)throw new n("mrf:open","missing node MRF_META/GeoTags/BoundingBox");const S=parseFloat(M.getAttribute("minx")),T=parseFloat(M.getAttribute("miny")),R=parseFloat(M.getAttribute("maxx")),k=parseFloat(M.getAttribute("maxy")),C=d.getElementValue(E,"Projection")||"",v=d.getElementValue(e,"datafile"),B=d.getElementValue(e,"IndexFile");let U;if("LOCAL_CS[]"!==C)if(C.toLowerCase().startsWith("epsg:")){const e=Number(C.slice(5));isNaN(e)||0===e||(U=new x({wkid:e}))}else U=g.parseSpatialReference(C);const L=new b(S,T,R,k);L.spatialReference=U;const P=d.getElement(e,"MRF_META/Rsets"),H=parseInt(P&&P.getAttribute("scale")||"2",10),O=new p({origin:new I({x:L.xmin,y:L.ymax,spatialReference:U}),blockWidth:h,blockHeight:m,pyramidBlockWidth:h,pyramidBlockHeight:m,compression:a,pyramidScalingFactor:H}),D=new I({x:(R-S)/s,y:(k-T)/o,spatialReference:U});return{rasterInfo:new f({width:s,height:o,extent:L,spatialReference:U,bandCount:i,pixelType:c,pixelSize:D,noDataValue:A,storageInfo:O}),files:{mrf:this.url,index:B||this.url.replace(".mrf",".idx"),data:v||this.url.replace(".mrf",_.get(a).blobExtension)}}},o._fetchAuxiliaryData=function(){var t=e._asyncToGenerator((function*(e){try{const{data:t}=yield this.request(this.url+".aux.xml",{responseType:"xml",signal:null==e?void 0:e.signal});return g.parsePAMInfo(t)}catch{return null}}));function r(e){return t.apply(this,arguments)}return r}(),r}(h);t.__decorate([o.property()],A.prototype,"_files",void 0),t.__decorate([o.property()],A.prototype,"_storageIndex",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],A.prototype,"datasetFormat",void 0),A=t.__decorate([c.subclass("esri.layers.support.rasterIO.MRFRaster")],A);return A}));
