/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/pbf","../../../../core/promiseUtils","../../../../geometry/libtess","../../../../geometry/support/TileClipper","./Feature","./IndexMemoryBuffer","./SourceLayerData","./VertexMemoryBuffer","./buckets/CircleBucket","./buckets/FillBucket","./buckets/LineBucket","./buckets/SymbolBucket","./style/StyleDefinition","../../tiling/enums"],(function(e,t,r,s,i,n,o,l,c,a,u,f,y,p,h){"use strict";const _=8,d=14,T=5;let m=function(){function m(e,r,s,n,o){if(this._pbfTiles={},this._tileClippers={},this._client=s,this._tile=r,o){this._styleLayerUIDs=new Set;for(const e of o)this._styleLayerUIDs.add(e)}this._styleRepository=n,this._layers=this._styleRepository?.layers??[];const[l,c,a]=r.tileKey.split("/").map(parseFloat);this._level=l;const u=_+Math.max((this._level-d)*T,0);for(const f of Object.keys(e)){const r=e[f];this._pbfTiles[f]=new t(new Uint8Array(r.protobuff),new DataView(r.protobuff));if(r.refKey){const[e]=r.refKey.split("/").map(parseFloat),t=l-e;if(t>0){const e=(1<<t)-1,r=c&e,s=a&e;this._tileClippers[f]=new i.TileClipper(t,r,s,8,u)}}this._tileClippers[f]||(this._tileClippers[f]=new i.SimpleBuilder)}}var B=m.prototype;return B._canParseStyleLayer=function(e){return!this._styleLayerUIDs||this._styleLayerUIDs.has(e)},B.parse=function(){var t=e._asyncToGenerator((function*(e){const t=s.loadLibtess(),r=this._initialize(e),{returnedBuckets:i}=r;this._processLayers(r),this._linkReferences(r),this._filterFeatures(r);const n=[],o=new Set,l=(e,t)=>{o.has(e)||(n.push({name:e,repeat:t}),o.add(e))},c={};for(const s of i)s.getResources(s.tileClipper,l,c);if(this._tile.status===h.TileStatus.INVALID)return[];const a=this._fetchResources(n,c,e);return Promise.all([...a,t]).then((()=>this._processFeatures(r.returnedBuckets)))}));function r(e){return t.apply(this,arguments)}return r}(),B._initialize=function(e){return{signal:e&&e.signal,sourceNameToTileData:this._parseTileData(this._pbfTiles),layers:this._layers,zoom:this._level,sourceNameToTileClipper:this._tileClippers,sourceNameToUniqueSourceLayerBuckets:{},sourceNameToUniqueSourceLayers:{},returnedBuckets:[],layerIdToBucket:{},referencerUIDToReferencedId:new Map}},B._processLayers=function(e){const{sourceNameToTileData:t,layers:r,zoom:s,sourceNameToTileClipper:i,sourceNameToUniqueSourceLayerBuckets:n,sourceNameToUniqueSourceLayers:o,returnedBuckets:l,layerIdToBucket:c,referencerUIDToReferencedId:a}=e;for(let u=r.length-1;u>=0;u--){const e=r[u];if(!this._canParseStyleLayer(e.uid)||e.minzoom&&s<Math.floor(e.minzoom)||e.maxzoom&&s>=e.maxzoom||e.type===p.StyleLayerType.BACKGROUND)continue;if(!t[e.source]||!i[e.source])continue;const f=t[e.source],y=i[e.source],h=e.sourceLayer,_=f[h];if(_){let t=o[e.source];if(t||(t=o[e.source]=new Set),t.add(e.sourceLayer),e.refLayerId)a.set(e.uid,e.refLayerId);else{const t=this._createBucket(e);if(t){t.layerUIDs=[e.uid],t.layerExtent=_.extent,t.tileClipper=y;let r=n[e.source];r||(r=n[e.source]={});let s=r[h];s||(s=r[h]=[]),s.push(t),l.push(t),c[e.id]=t}}}}},B._linkReferences=function(e){const{layerIdToBucket:t,referencerUIDToReferencedId:r}=e;r.forEach(((e,r)=>{t[e]&&t[e].layerUIDs.push(r)}))},B._filterFeatures=function(e){const{signal:t,sourceNameToTileData:s,sourceNameToUniqueSourceLayerBuckets:i,sourceNameToUniqueSourceLayers:o}=e,l=10*this._level,c=10*(this._level+1),a=[],u=[];for(const r of Object.keys(o)){o[r].forEach((e=>{a.push(e),u.push(r)}))}for(let f=0;f<a.length;f++){const e=u[f],o=a[f];if(!s[e]||!i[e])continue;const y=s[e][o],p=i[e][o];if(!p||0===p.length)continue;if(r.isAborted(t))return;const h=y.getData();for(;h.nextTag(2);){const e=h.getMessage(),t=new n(e,y);e.release();const r=t.values;if(r){const e=r._minzoom;if(e&&e>=c)continue;const t=r._maxzoom;if(t&&t<=l)continue}for(const s of p)s.pushFeature(t)}}},B._fetchResources=function(e,t,r){const s=[],i=this._tile.getWorkerTileHandler();let n,o;e.length>0&&(n=i.fetchSprites(e,this._client,r),s.push(n));for(const l in t){const e=t[l];e.size>0&&(o=i.fetchGlyphs(this._tile.tileKey,l,e,this._client,r),s.push(o))}return s},B._processFeatures=function(e){const t=e.filter((e=>e.hasFeatures()||this._canParseStyleLayer(e.layer.uid)));for(const r of t)r.processFeatures(r.tileClipper);return t},B._parseTileData=function(e){const t={};for(const r of Object.keys(e)){const s=e[r],i={};for(;s.next();)switch(s.tag()){case 3:{const e=s.getMessage(),t=new l(e);e.release(),i[t.name]=t;break}default:s.skip()}t[r]=i}return t},B._createBucket=function(e){switch(e.type){case p.StyleLayerType.BACKGROUND:return null;case p.StyleLayerType.FILL:return this._createFillBucket(e);case p.StyleLayerType.LINE:return this._createLineBucket(e);case p.StyleLayerType.CIRCLE:return this._createCircleBucket(e);case p.StyleLayerType.SYMBOL:return this._createSymbolBucket(e)}},B._createFillBucket=function(e){return new u(e,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new c.FillVertexBuffer(e.fillMaterial.getStride()),new o.TriangleIndexBuffer,new c.OutlineVertexBuffer(e.outlineMaterial.getStride()),new o.TriangleIndexBuffer)},B._createLineBucket=function(e){return new f(e,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new c.LineVertexBuffer(e.lineMaterial.getStride()),new o.TriangleIndexBuffer)},B._createCircleBucket=function(e){return new a(e,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new c.CircleVertexBuffer(e.circleMaterial.getStride()),new o.TriangleIndexBuffer)},B._createSymbolBucket=function(e){const t=this._tile;return new y(e,this._level,new c.SymbolVertexBuffer(e.iconMaterial.getStride()),new o.TriangleIndexBuffer,new c.SymbolVertexBuffer(e.textMaterial.getStride()),new o.TriangleIndexBuffer,t.placementEngine,t.getWorkerTileHandler())},m}();return m}));
