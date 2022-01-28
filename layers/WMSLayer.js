/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../config","../Graphic","../PopupTemplate","../request","../core/Collection","../core/CollectionFlattener","../core/HandleOwner","../core/jsonMap","../core/lang","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/accessorSupport/write","../geometry/Extent","../geometry/SpatialReference","../geometry/support/scaleUtils","../geometry/support/spatialReferenceUtils","./Layer","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/arcgisLayerUrl","./support/commonProperties","./support/ExportWMSImageParameters","./support/WMSSublayer","./support/wmsUtils"],(function(e,r,t,o,a,i,s,n,l,p,u,c,y,d,m,f,g,h,_,b,w,v,S,x,I,E,R,O,L,P,U,M,F,T,j,q,W){"use strict";const C=new p.JSONMap({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let N=function(r){function s(...t){var o;return(o=r.call(this,...t)||this).allSublayers=new n({getCollections:()=>[o.sublayers],getChildrenFunction:e=>e.sublayers}),o.customParameters=null,o.customLayerParameters=null,o.copyright=null,o.description=null,o.dimensions=null,o.fullExtent=null,o.fullExtents=null,o.featureInfoFormat=null,o.featureInfoUrl=null,o.imageFormat=null,o.imageMaxHeight=2048,o.imageMaxWidth=2048,o.imageTransparency=!0,o.legendEnabled=!0,o.mapUrl=null,o.isReference=null,o.operationalLayerType="WMS",o.spatialReference=null,o.spatialReferences=null,o.sublayers=null,o.type="wms",o.url=null,o.version=null,o.watch("sublayers",((r,t)=>{if(t){for(const e of t)e.layer=null;o.handles.remove("wms-sublayer")}if(r){for(const t of r)t.parent=e._assertThisInitialized(o),t.layer=e._assertThisInitialized(o);o.handles.add([r.on("after-add",(({item:r})=>{r.parent=e._assertThisInitialized(o),r.layer=e._assertThisInitialized(o)})),r.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"wms-sublayer")}}),!0),o}e._inheritsLoose(s,r);var l=s.prototype;return l.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},l.load=function(e){const r=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(d.throwIfAbortError).then((()=>this._fetchService(r)))),Promise.resolve(this)},l.readFullExtentFromItemOrMap=function(e,r){const t=r.extent;return new v({xmin:t[0][0],ymin:t[0][1],xmax:t[1][0],ymax:t[1][1]})},l.writeFullExtent=function(e,r){r.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]},l.readImageFormat=function(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("image/png")>-1?"image/png":t&&t[0]},l.readSpatialReferenceFromItemOrDocument=function(e,r){return new S(r.spatialReferences[0])},l.writeSpatialReferences=function(e,r){const t=this.spatialReference&&this.spatialReference.wkid;e&&t?(r.spatialReferences=e.filter((e=>e!==t)),r.spatialReferences.unshift(t)):r.spatialReferences=e},l.readSublayersFromItemOrMap=function(e,r,t){return H(r.layers,t,r.visibleLayers)},l.readSublayers=function(e,r,t){return H(r.layers,t)},l.writeSublayers=function(e,r,t,o){r.layers=[];const a=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(a.has(e.parent.id)?a.get(e.parent.id).push(e.id):a.set(e.parent.id,[e.id]))})),i.forEach((e=>{const t={sublayer:e,...o},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},t);if(a.has(e.id)&&(i.sublayerIds=a.get(e.id)),!e.sublayers&&e.name){const o=e.write({},t);delete o.id,r.layers.push(o)}})),r.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))},l.createExportImageParameters=function(e,r,t,o){const a=o&&o.pixelRatio||1,i=x.getScale({extent:e,width:r})*a,s=new j.ExportWMSImageParameters({layer:this,scale:i}),{xmin:n,ymin:l,xmax:p,ymax:u,spatialReference:c}=e,y=W.normalizeWKID(c,this.spatialReferences),d="1.3.0"===this.version&&W.coordsReversedForWKID(y)?`${l},${n},${u},${p}`:`${n},${l},${p},${u}`,m=s.toJSON();return{bbox:d,["1.3.0"===this.version?"crs":"srs"]:isNaN(y)?void 0:"EPSG:"+y,...m}},l.fetchImage=function(){var r=e._asyncToGenerator((function*(e,r,t,o){var a,s;const n=this.mapUrl,l=this.createExportImageParameters(e,r,t,o);if(!l.layers){const e=document.createElement("canvas");return e.width=r,e.height=t,e}const p=null==o||null==(a=o.timeExtent)?void 0:a.start,u=null==o||null==(s=o.timeExtent)?void 0:s.end,y=c.isSome(p)&&c.isSome(u)?p.getTime()===u.getTime()?W.toISOString(p):`${W.toISOString(p)}/${W.toISOString(u)}`:void 0,d={responseType:"image",query:this._mixCustomParameters({width:r,height:t,...l,time:y,...this.refreshParameters}),signal:null==o?void 0:o.signal};return i(n,d).then((e=>e.data))}));function t(e,t,o,a){return r.apply(this,arguments)}return t}(),l.fetchFeatureInfo=function(e,r,t,i,s){const n=x.getScale({extent:e,width:r}),l=new j.ExportWMSImageParameters({layer:this,scale:n}),p=W.getPopupLayers(l.visibleSublayers);if(!this.featureInfoUrl||!p)return null;const u="1.3.0"===this.version?{I:i,J:s}:{x:i,y:s},c={query_layers:p,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:r,height:t,...u},y={...this.createExportImageParameters(e,r,t),...c},d=this._mixCustomParameters(y),f=m.addQueryParameters(this.featureInfoUrl,d),g=document.createElement("iframe");g.src=f,g.style.border="none",g.style.margin="0",g.style.width="100%",g.setAttribute("sandbox","");const h=new a({title:this.title,content:g});return new o({sourceLayer:this,popupTemplate:h})},l.findSublayerById=function(e){return this.allSublayers.find((r=>r.id===e))},l.findSublayerByName=function(e){return this.allSublayers.find((r=>r.name===e))},l.supportsSpatialReference=function(e){return F.isWmsServer(this.url)||this.spatialReferences.some((r=>{const t=900913===r?S.WebMercator:new S({wkid:r});return I.equals(t,e)}))},l._fetchService=function(){var r=e._asyncToGenerator((function*(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const r=yield i(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=W.parseCapabilities(r.data)}if(this.parsedUrl){const e=new m.Url(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==t.request.httpsDomains.indexOf(e.host)||t.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}));function o(e){return r.apply(this,arguments)}return o}(),l._mixCustomParameters=function(e){if(!this.customLayerParameters&&!this.customParameters)return e;const r={...this.customParameters,...this.customLayerParameters};for(const t in r)e[t.toLowerCase()]=r[t];return e},s}(l.HandleOwnerMixin(R.BlendLayer(M.TemporalLayer(P.RefreshableLayer(U.ScaleRangeLayer(O.OperationalLayer(L.PortalLayer(y.MultiOriginJSONMixin(E)))))))));function $(e,r){return e.some((e=>{for(const t in e)if(w.willPropertyWrite(e,t,null,r))return!0;return!1}))}function H(e,r,t){const o=new Map;e.every((e=>null==e.id))&&(e=u.clone(e)).forEach(((e,r)=>e.id=r));for(const i of e){const e=new q;e.read(i,r),-1===(null==t?void 0:t.indexOf(e.name))&&(e.visible=!1),o.set(e.id,e)}const a=[];for(const i of e){const e=o.get(i.id);if(null!=i.parentLayerId&&i.parentLayerId>=0){const r=o.get(i.parentLayerId);r.sublayers||(r.sublayers=new s),r.sublayers.unshift(e)}else a.unshift(e)}return a}r.__decorate([f.property({readOnly:!0})],N.prototype,"allSublayers",void 0),r.__decorate([f.property({json:{type:Object,write:!0}})],N.prototype,"customParameters",void 0),r.__decorate([f.property({json:{type:Object,write:!0}})],N.prototype,"customLayerParameters",void 0),r.__decorate([f.property({type:String,json:{write:!0}})],N.prototype,"copyright",void 0),r.__decorate([f.property()],N.prototype,"description",void 0),r.__decorate([f.property({readOnly:!0})],N.prototype,"dimensions",void 0),r.__decorate([f.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],N.prototype,"fullExtent",void 0),r.__decorate([h.reader(["web-document","portal-item"],"fullExtent",["extent"])],N.prototype,"readFullExtentFromItemOrMap",null),r.__decorate([b.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],N.prototype,"writeFullExtent",null),r.__decorate([f.property()],N.prototype,"fullExtents",void 0),r.__decorate([f.property({type:String,json:{write:{ignoreOrigin:!0}}})],N.prototype,"featureInfoFormat",void 0),r.__decorate([f.property({type:String,json:{write:{ignoreOrigin:!0}}})],N.prototype,"featureInfoUrl",void 0),r.__decorate([f.property({type:String,json:{origins:{"web-document":{default:"image/png",type:C.jsonValues,read:{reader:C.read,source:"format"},write:{writer:C.write,target:"format"}}}}})],N.prototype,"imageFormat",void 0),r.__decorate([h.reader("imageFormat",["supportedImageFormatTypes"])],N.prototype,"readImageFormat",null),r.__decorate([f.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],N.prototype,"imageMaxHeight",void 0),r.__decorate([f.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],N.prototype,"imageMaxWidth",void 0),r.__decorate([f.property()],N.prototype,"imageTransparency",void 0),r.__decorate([f.property(T.legendEnabled)],N.prototype,"legendEnabled",void 0),r.__decorate([f.property({type:["show","hide","hide-children"]})],N.prototype,"listMode",void 0),r.__decorate([f.property({type:String,json:{write:{ignoreOrigin:!0}}})],N.prototype,"mapUrl",void 0),r.__decorate([f.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],N.prototype,"isReference",void 0),r.__decorate([f.property({type:["WMS"]})],N.prototype,"operationalLayerType",void 0),r.__decorate([f.property({type:S,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],N.prototype,"spatialReference",void 0),r.__decorate([h.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],N.prototype,"readSpatialReferenceFromItemOrDocument",null),r.__decorate([f.property({type:[g.Integer],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],N.prototype,"spatialReferences",void 0),r.__decorate([b.writer(["web-document","portal-item"],"spatialReferences")],N.prototype,"writeSpatialReferences",null),r.__decorate([f.property({type:s.ofType(q),json:{write:{target:"layers",overridePolicy(e,r,t){if($(this.allSublayers,t))return{ignoreOrigin:!0}}}}})],N.prototype,"sublayers",void 0),r.__decorate([h.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],N.prototype,"readSublayersFromItemOrMap",null),r.__decorate([h.reader("service","sublayers",["layers"])],N.prototype,"readSublayers",null),r.__decorate([b.writer("sublayers",{layers:{type:[q]},visibleLayers:{type:[String]}})],N.prototype,"writeSublayers",null),r.__decorate([f.property({json:{read:!1},readOnly:!0,value:"wms"})],N.prototype,"type",void 0),r.__decorate([f.property(T.url)],N.prototype,"url",void 0),r.__decorate([f.property({type:String,json:{write:{ignoreOrigin:!0}}})],N.prototype,"version",void 0),N=r.__decorate([_.subclass("esri.layers.WMSLayer")],N);return N}));
