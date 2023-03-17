/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../config","../geometry","../Graphic","../PopupTemplate","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/PieChartRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../core/Collection","../core/Error","../core/HandleOwner","../core/Logger","../core/maybe","../core/MultiOriginJSONSupport","../core/object","../core/promiseUtils","../core/reactiveUtils","../core/unitUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/accessorSupport/originUtils","../geometry/Extent","../geometry/projection","../geometry/support/spatialReferenceUtils","./Layer","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/arcgisLayerUrl","./support/RouteSymbols","../portal/Portal","../portal/PortalItem","../portal/support/portalItemUtils","../rest/networkService","../rest/route","../rest/support/DirectionLine","../rest/support/DirectionPoint","../rest/support/PointBarrier","../rest/support/PolygonBarrier","../rest/support/PolylineBarrier","../rest/support/RouteInfo","../rest/support/RouteParameters","../rest/support/RouteSettings","../rest/support/Stop","../geometry/SpatialReference","../geometry/Multipoint"],(function(e,t,r,o,i,n,s,a,l,u,p,c,y,d,m,f,h,S,w,g,_,b,v,B,N,P,I,R,L,D,C,O,T,F,k,x,A,G,J,M,U,j,q,W,E,V,H,z,K,Q,Y,Z,$,X,ee,te,re,oe,ie){"use strict";function ne(e){return e.length?e:null}function se(e){switch(e){case"esriGeometryPoint":return{type:"esriSMS",style:"esriSMSCircle",size:12,color:[0,0,0,0],outline:se("esriGeometryPolyline")};case"esriGeometryPolyline":return{type:"esriSLS",style:"esriSLSSolid",width:1,color:[0,0,0,0]};case"esriGeometryPolygon":return{type:"esriSFS",style:"esriSFSNull",outline:se("esriGeometryPolyline")}}}function ae(e){return"layers"in e}function le(e){return"esri.rest.support.FeatureSet"===e.declaredClass}function ue(e){return"esri.rest.support.NetworkFeatureSet"===e.declaredClass}function pe(e,t,r){const o=t.networkDataset?.networkAttributes,i=o?.filter((({usageType:e})=>"cost"===e))??[],n=r.travelMode??t.defaultTravelMode;if(g.isNone(n))return void Be.warn("route-layer:missing-travel-mode","The routing service must have a default travel mode or one must be specified in the route parameter.");const{timeAttributeName:s,distanceAttributeName:a}=n,l=i.find((({name:e})=>e===s)),u=i.find((({name:e})=>e===a)),p=g.unwrap(r.travelMode)?.impedanceAttributeName??g.unwrap(r.impedanceAttribute)??t.impedance,c=l?.units,y=u?.units;if(!c||!y)throw new h("routelayer:unknown-impedance-units","the units of either the distance or time impedance are unknown");const d=r.directionsLanguage??t.directionsLanguage,m=g.unwrap(r.accumulateAttributes)??t.accumulateAttributeNames??[],f=new Set(i.filter((({name:e})=>e===s||e===a||e===p||null!=e&&m.includes(e))).map((({name:e})=>e))),S=e=>{for(const t in e)f.has(t)||delete e[t]};for(const h of e.pointBarriers)g.isSome(h.costs)&&(h.addedCost=h.costs[p]??0,S(h.costs));for(const h of e.polygonBarriers)g.isSome(h.costs)&&(h.scaleFactor=h.costs[p]??1,S(h.costs));for(const h of e.polylineBarriers)g.isSome(h.costs)&&(h.scaleFactor=h.costs[p]??1,S(h.costs));const{routeInfo:w}=e,{findBestSequence:_,preserveFirstStop:b,preserveLastStop:v,startTimeIsUTC:B,timeWindowsAreUTC:N}=r;w.analysisSettings=new te({accumulateAttributes:m,directionsLanguage:d,findBestSequence:_,preserveFirstStop:b,preserveLastStop:v,startTimeIsUTC:B,timeWindowsAreUTC:N,travelMode:n}),w.totalDuration=de(w.totalCosts?.[s]??0,c),w.totalDistance=me(w.totalCosts?.[a]??0,y),w.totalLateDuration=de(w.totalViolations?.[s]??0,c),w.totalWaitDuration=de(w.totalWait?.[s]??0,c),g.isSome(w.totalCosts)&&S(w.totalCosts),g.isSome(w.totalViolations)&&S(w.totalViolations),g.isSome(w.totalWait)&&S(w.totalWait);for(const h of e.stops)g.isSome(h.serviceCosts)&&(h.serviceDuration=de(h.serviceCosts[s]??0,c),h.serviceDistance=me(h.serviceCosts[a]??0,y),S(h.serviceCosts)),g.isSome(h.cumulativeCosts)&&(h.cumulativeDuration=de(h.cumulativeCosts[s]??0,c),h.cumulativeDistance=me(h.cumulativeCosts[a]??0,y),S(h.cumulativeCosts)),g.isSome(h.violations)&&(h.lateDuration=de(h.violations[s]??0,c),S(h.violations)),g.isSome(h.wait)&&(h.waitDuration=de(h.wait[s]??0,c),S(h.wait))}function ce(e){return ye.apply(this,arguments)}function ye(){return ye=e._asyncToGenerator((function*(e){const t=oe.WGS84;return yield k.initializeProjection(e.spatialReference,t),k.project(e,t)})),ye.apply(this,arguments)}function de(e,t){switch(t){case"seconds":return e/60;case"hours":return 60*e;case"days":return 60*e*24;default:return e}}function me(e,t){return"decimal-degrees"===t||"points"===t||"unknown"===t?e:N.convertUnit(e,t,"meters")}function fe(e){const{attributes:t,geometry:r,popupTemplate:o,symbol:i}=e.toGraphic().toJSON();return{attributes:t,geometry:r,popupInfo:o,symbol:i}}const he=f.ofType(K),Se=f.ofType(Q),we=f.ofType(Y),ge=f.ofType(Z),_e=f.ofType($),be=f.ofType(re),ve="esri.layers.RouteLayer",Be=w.getLogger(ve);let Ne=function(t){function o(e){var r;(r=t.call(this,e)||this)._cachedServiceDescription=null,r._featureCollection=null,r._type="Feature Collection",r.defaultSymbols=new q,r.directionLines=null,r.directionPoints=null,r.featureCollectionType="route",r.legendEnabled=!1,r.maxScale=0,r.minScale=0,r.pointBarriers=new we,r.polygonBarriers=new ge,r.polylineBarriers=new _e,r.routeInfo=null,r.spatialReference=oe.WGS84,r.stops=new be,r.type="route";const o=()=>{r._setStopSymbol(r.stops)};return r.addHandles(B.on((()=>r.stops),"change",o,{sync:!0,onListenerAdd:o})),r}e._inheritsLoose(o,t);var s=o.prototype;return s.writeFeatureCollectionWebmap=function(e,t,r,o){const i=[this._writePolygonBarriers(),this._writePolylineBarriers(),this._writePointBarriers(),this._writeRouteInfo(),this._writeDirectionLines(),this._writeDirectionPoints(),this._writeStops()].filter((e=>!!e)),n=i.map(((e,t)=>t)),s="web-map"===o.origin?"featureCollection.layers":"layers";b.setDeepValue(s,i,t),t.opacity=this.opacity,t.visibility=this.visible,t.visibleLayers=n},s.readDirectionLines=function(e,t){return this._getNetworkFeatures(t,"DirectionLines",(e=>K.fromGraphic(e)))},s.readDirectionPoints=function(e,t){return this._getNetworkFeatures(t,"DirectionPoints",(e=>Q.fromGraphic(e)))},s.readMaxScale=function(e,t){const r=(ae(t)?t.layers:t.featureCollection?.layers)?.find((e=>g.isSome(e.layerDefinition.maxScale)));return r?.layerDefinition.maxScale??0},s.readMinScale=function(e,t){const r=(ae(t)?t.layers:t.featureCollection?.layers)?.find((e=>g.isSome(e.layerDefinition.minScale)));return r?.layerDefinition.minScale??0},s.readPointBarriers=function(e,t){return this._getNetworkFeatures(t,"Barriers",(e=>Y.fromGraphic(e)))},s.readPolygonBarriers=function(e,t){return this._getNetworkFeatures(t,"PolygonBarriers",(e=>Z.fromGraphic(e)))},s.readPolylineBarriers=function(e,t){return this._getNetworkFeatures(t,"PolylineBarriers",(e=>$.fromGraphic(e)))},s.readRouteInfo=function(e,t){const r=this._getNetworkFeatures(t,"RouteInfo",(e=>X.fromGraphic(e)));return r.length>0?r.getItemAt(0):null},s.readSpatialReference=function(e,t){const r=ae(t)?t.layers:t.featureCollection?.layers;if(!r?.length)return oe.WGS84;const{layerDefinition:o,featureSet:i}=r[0],n=i.features[0],s=g.unwrap(n?.geometry)?.spatialReference??i.spatialReference??o.spatialReference??o.extent.spatialReference??x.WGS84;return oe.fromJSON(s)},s.readStops=function(e,t){return this._getNetworkFeatures(t,"Stops",(e=>re.fromGraphic(e)),(e=>this._setStopSymbol(e)))},s.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)},s.removeAll=function(){this.removeResult(),this.pointBarriers.removeAll(),this.polygonBarriers.removeAll(),this.polylineBarriers.removeAll(),this.stops.removeAll()},s.removeResult=function(){g.isSome(this.directionLines)&&(this.directionLines.removeAll(),this._set("directionLines",null)),g.isSome(this.directionPoints)&&(this.directionPoints.removeAll(),this._set("directionPoints",null)),g.isSome(this.routeInfo)&&this._set("routeInfo",null)},s.save=function(){var t=e._asyncToGenerator((function*(){yield this.load();const{fullExtent:e,portalItem:t}=this;if(!t)throw new h("routelayer:portal-item-not-set","save() requires to the layer to have a portal item");if(!t.id)throw new h("routelayer:portal-item-not-saved","Please use saveAs() first to save the routelayer");if("Feature Collection"!==t.type)throw new h("routelayer:portal-item-wrong-type",'Portal item needs to have type "Feature Collection"');if(g.isNone(this.routeInfo))throw new h("routelayer:route-unsolved","save() requires a solved route");const{portal:r}=t;yield r.signIn(),r.user||(yield t.reload());const{itemUrl:o,itemControl:i}=t;if("admin"!==i&&"update"!==i)throw new h("routelayer:insufficient-permissions","To save this layer, you need to be the owner or an administrator of your organization");const n={messages:[],origin:"portal-item",portal:r,url:o?P.urlToObject(o):void 0,writtenProperties:[]},s=this.write(void 0,n);return t.extent=yield ce(e),t.title=this.title,yield t.update({data:s}),t}));function r(){return t.apply(this,arguments)}return r}(),s.saveAs=function(){var t=e._asyncToGenerator((function*(e,t={}){if(yield this.load(),g.isNone(this.routeInfo))throw new h("routelayer:route-unsolved","saveAs() requires a solved route");const r=E.from(e).clone();r.extent??(r.extent=yield ce(this.fullExtent)),r.id=null,r.portal??(r.portal=W.getDefault()),r.title??(r.title=this.title),r.type="Feature Collection",r.typeKeywords=["Data","Feature Collection",V.TypeKeyword.MULTI_LAYER,"Route Layer"];const{portal:o}=r,i={messages:[],origin:"portal-item",portal:o,url:null,writtenProperties:[]};yield o.signIn();const n=t?.folder,s=this.write(void 0,i);return yield o.user?.addItem({item:r,folder:n,data:s}),this.portalItem=r,T.updateOrigins(i),i.portalItem=r,r}));function r(e){return t.apply(this,arguments)}return r}(),s.solve=function(){var t=e._asyncToGenerator((function*(e,t){const r=e?.stops??this.stops,o=e?.pointBarriers??ne(this.pointBarriers),i=e?.polylineBarriers??ne(this.polylineBarriers),n=e?.polygonBarriers??ne(this.polygonBarriers);if(g.isNone(r))throw new h("routelayer:undefined-stops","the route layer must have stops defined in the route parameters.");if((le(r)||ue(r))&&r.features.length<2||f.isCollection(r)&&r.length<2)throw new h("routelayer:insufficent-stops","the route layer must have two or more stops to solve a route.");if(f.isCollection(r))for(const f of r)f.routeName=null;const s=e?.apiKey,a=this.url,l=yield this._getServiceDescription(a,s,t),u=e?.travelMode??l.defaultTravelMode,p=g.unwrap(e?.accumulateAttributes)??[];g.isSome(u)&&(p.push(u.distanceAttributeName),u.timeAttributeName&&p.push(u.timeAttributeName));const c={startTime:new Date},y={accumulateAttributes:p,directionsOutputType:"featuresets",ignoreInvalidLocations:!0,pointBarriers:o,polylineBarriers:i,polygonBarriers:n,preserveFirstStop:!0,preserveLastStop:!0,returnBarriers:!!o,returnDirections:!0,returnPolygonBarriers:!!n,returnPolylineBarriers:!!i,returnRoutes:!0,returnStops:!0,stops:r},d=e?ee.from(e):new ee;for(const f in c)null==d[f]&&(d[f]=c[f]);let m;d.set(y);try{m=yield z.solve(a,d,t)}catch(w){throw v.isAbortError(w)?w:new h("routelayer:failed-route-request","the routing request failed",{error:w})}const S=this._toRouteLayerSolution(m);return this._isOverridden("title")||(this.title=g.unwrapOrValue(S.routeInfo.name,"Route")),pe(S,l,d),S}));function r(e,r){return t.apply(this,arguments)}return r}(),s.update=function(e){const{stops:t,directionLines:r,directionPoints:o,pointBarriers:i,polylineBarriers:n,polygonBarriers:s,routeInfo:a}=e;this.set({stops:t,pointBarriers:i,polylineBarriers:n,polygonBarriers:s}),this._set("directionLines",r),this._set("directionPoints",o),this._set("routeInfo",a),g.isSome(a.geometry)&&(this.spatialReference=a.geometry.spatialReference)},s._getNetworkFeatures=function(e,t,r,o){const s=(ae(e)?e.layers:e.featureCollection?.layers)?.find((e=>e.layerDefinition.name===t));if(g.isNone(s))return new f;const{layerDefinition:a,popupInfo:l,featureSet:u}=s,p=a.drawingInfo.renderer,{features:c}=u,y=u.spatialReference??a.spatialReference??a.extent.spatialReference??x.WGS84,d=p&&m.read(p),h=oe.fromJSON(y),S=c.map((e=>{const o=i.fromJSON(e);g.isSome(o.geometry)&&g.isSome(e.geometry)&&g.isNone(e.geometry.spatialReference)&&(o.geometry.spatialReference=h);const s=r(o);return s.symbol??(s.symbol=d?.getSymbol(o)??this._getNetworkSymbol(t)),s.popupTemplate??(s.popupTemplate=l&&n.fromJSON(l)),s}));return o&&S.some((e=>!e.symbol))&&o(S),new f(S)},s._getNetworkSymbol=function(e){switch(e){case"Barriers":return this.defaultSymbols.pointBarriers;case"DirectionPoints":return this.defaultSymbols.directionPoints;case"DirectionLines":return this.defaultSymbols.directionLines;case"PolylineBarriers":return this.defaultSymbols.polylineBarriers;case"PolygonBarriers":return this.defaultSymbols.polygonBarriers;case"RouteInfo":return this.defaultSymbols.routeInfo;case"Stops":return null}},s._getServiceDescription=function(){var t=e._asyncToGenerator((function*(e,t,r){if(g.isSome(this._cachedServiceDescription)&&this._cachedServiceDescription.url===e)return this._cachedServiceDescription.serviceDescription;const o=yield H.fetchServiceDescription(e,t,r);return this._cachedServiceDescription={serviceDescription:o,url:e},o}));function r(e,r,o){return t.apply(this,arguments)}return r}(),s._setStopSymbol=function(e){if(!e||0===e.length)return;if(g.isNone(this.defaultSymbols.stops))return;if(e.every((e=>g.isSome(e.symbol))))return;const{first:t,last:r,middle:o,unlocated:i,waypoint:n,break:s}=this.defaultSymbols.stops;if(g.isNone(this.routeInfo)||1===e.length)return void e.forEach(((i,n)=>{switch(n){case 0:i.symbol=t;break;case e.length-1:i.symbol=r;break;default:i.symbol=o}}));const a=e.map((e=>e.sequence)).filter((e=>g.isSome(e))),l=Math.min(...a),u=Math.max(...a);for(const p of e)p.sequence!==l?p.sequence!==u?"ok"===p.status||"not-located-on-closest"===p.status?"waypoint"!==p.locationType?"break"!==p.locationType?p.symbol=o:p.symbol=s:p.symbol=n:p.symbol=i:p.symbol=r:p.symbol=t},s._toRouteLayerSolution=function(e){const t=e.routeResults[0].stops?.map((e=>re.fromJSON(e.toJSON())));this._setStopSymbol(t);const r=new be(t),o=new ge(e.polygonBarriers?.map((e=>{const t=Z.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.polygonBarriers,t}))),i=new _e(e.polylineBarriers?.map((e=>{const t=$.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.polylineBarriers,t}))),n=new we(e.pointBarriers?.map((e=>{const t=Y.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.pointBarriers,t}))),s=e.routeResults[0].route?.toJSON(),a=X.fromJSON(s);a.symbol=this.defaultSymbols.routeInfo;const l=new Se(e.routeResults[0].directionPoints?.features.map((e=>{const t=Q.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.directionPoints,t})));return{directionLines:new he(e.routeResults[0].directionLines?.features.map((e=>{const t=K.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.directionLines,t}))),directionPoints:l,pointBarriers:n,polygonBarriers:o,polylineBarriers:i,routeInfo:a,stops:r}},s._writeDirectionLines=function(){return this._writeNetworkFeatures(this.directionLines,this.defaultSymbols.directionLines,"esriGeometryPolyline",K.fields,K.popupInfo,"DirectionLines","Direction Lines")},s._writeDirectionPoints=function(){return this._writeNetworkFeatures(this.directionPoints,this.defaultSymbols.directionPoints,"esriGeometryPoint",Q.fields,Q.popupInfo,"DirectionPoints","Direction Points")},s._writeNetworkFeatures=function(e,t,r,o,i,n,s){if(g.isNone(e)||!e.length)return null;const a=this.spatialReference.toJSON(),{fullExtent:l,maxScale:u,minScale:p}=this;return{featureSet:{features:e.toArray().map((e=>fe(e))),geometryType:r,spatialReference:a},layerDefinition:{capabilities:"Query,Update,Editing",drawingInfo:{renderer:{type:"simple",symbol:g.isSome(t)?t.toJSON():se(r)}},extent:l.toJSON(),fields:o,geometryType:r,hasM:!1,hasZ:!1,maxScale:u,minScale:p,name:n,objectIdField:"ObjectID",spatialReference:a,title:s,type:"Feature Layer",typeIdField:""},popupInfo:i}},s._writePointBarriers=function(){return this._writeNetworkFeatures(this.pointBarriers,this.defaultSymbols.pointBarriers,"esriGeometryPoint",Y.fields,Y.popupInfo,"Barriers","Point Barriers")},s._writePolygonBarriers=function(){return this._writeNetworkFeatures(this.polygonBarriers,this.defaultSymbols.polygonBarriers,"esriGeometryPolygon",Z.fields,Z.popupInfo,"PolygonBarriers","Polygon Barriers")},s._writePolylineBarriers=function(){return this._writeNetworkFeatures(this.polylineBarriers,this.defaultSymbols.polylineBarriers,"esriGeometryPolyline",$.fields,$.popupInfo,"PolylineBarriers","Line Barriers")},s._writeRouteInfo=function(){return this._writeNetworkFeatures(g.isSome(this.routeInfo)?new f([this.routeInfo]):null,this.defaultSymbols.routeInfo,"esriGeometryPolyline",X.fields,X.popupInfo,"RouteInfo","Route Details")},s._writeStops=function(){const e=this._writeNetworkFeatures(this.stops,null,"esriGeometryPoint",re.fields,re.popupInfo,"Stops","Stops");if(g.isNone(e))return null;const{stops:t}=this.defaultSymbols,r=g.isSome(t)&&g.isSome(t.first)&&t.first.toJSON(),o=g.isSome(t)&&g.isSome(t.middle)&&t.middle.toJSON(),i=g.isSome(t)&&g.isSome(t.last)&&t.last.toJSON();return e.layerDefinition.drawingInfo.renderer={type:"uniqueValue",field1:"Sequence",defaultSymbol:o,uniqueValueInfos:[{value:"1",symbol:r,label:"First Stop"},{value:`${this.stops.length}`,symbol:i,label:"Last Stop"}]},e},e._createClass(o,[{key:"fullExtent",get:function(){const e=new F({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:oe.WGS84});if(g.isSome(this.routeInfo)&&g.isSome(this.routeInfo.geometry))return this.routeInfo.geometry.extent??e;if(g.isNone(this.stops))return e;const t=this.stops.filter((e=>g.isSome(e.geometry)));if(t.length<2)return e;const{spatialReference:r}=t.getItemAt(0).geometry;if(g.isNone(r))return e;const o=t.toArray().map((e=>{const t=e.geometry;return[t.x,t.y]}));return new ie({points:o,spatialReference:r}).extent}},{key:"title",get:function(){return g.isSome(this.routeInfo)&&g.isSome(this.routeInfo.name)?this.routeInfo.name:"Route"},set:function(e){this._overrideIfSome("title",e)}},{key:"url",get:function(){return r.routeServiceUrl},set:function(e){null!=e?this._set("url",j.sanitizeUrl(e,Be)):this._set("url",r.routeServiceUrl)}}]),o}(G.BlendLayer(U.ScaleRangeLayer(J.OperationalLayer(M.PortalLayer(_.MultiOriginJSONMixin(S.HandleOwnerMixin(A)))))));t.__decorate([I.property({readOnly:!0,json:{read:!1,origins:{"portal-item":{write:{allowNull:!0,ignoreOrigin:!0}},"web-map":{write:{overridePolicy(){return{allowNull:!0,ignoreOrigin:null==this.portalItem}}}}}}})],Ne.prototype,"_featureCollection",void 0),t.__decorate([O.writer(["web-map","portal-item"],"_featureCollection")],Ne.prototype,"writeFeatureCollectionWebmap",null),t.__decorate([I.property({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{target:"type",overridePolicy(){return{ignoreOrigin:null!=this.portalItem}}}}}}})],Ne.prototype,"_type",void 0),t.__decorate([I.property({nonNullable:!0,type:q})],Ne.prototype,"defaultSymbols",void 0),t.__decorate([I.property({readOnly:!0})],Ne.prototype,"directionLines",void 0),t.__decorate([D.reader(["web-map","portal-item"],"directionLines",["layers","featureCollection.layers"])],Ne.prototype,"readDirectionLines",null),t.__decorate([I.property({readOnly:!0})],Ne.prototype,"directionPoints",void 0),t.__decorate([D.reader(["web-map","portal-item"],"directionPoints",["layers","featureCollection.layers"])],Ne.prototype,"readDirectionPoints",null),t.__decorate([I.property({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],Ne.prototype,"featureCollectionType",void 0),t.__decorate([I.property({readOnly:!0})],Ne.prototype,"fullExtent",null),t.__decorate([I.property({json:{origins:{"web-map":{name:"featureCollection.showLegend"}},write:!0}})],Ne.prototype,"legendEnabled",void 0),t.__decorate([I.property({type:["show","hide"]})],Ne.prototype,"listMode",void 0),t.__decorate([I.property({type:Number,nonNullable:!0,json:{write:!1}})],Ne.prototype,"maxScale",void 0),t.__decorate([D.reader(["web-map","portal-item"],"maxScale",["layers","featureCollection.layers"])],Ne.prototype,"readMaxScale",null),t.__decorate([I.property({type:Number,nonNullable:!0,json:{write:!1}})],Ne.prototype,"minScale",void 0),t.__decorate([D.reader(["web-map","portal-item"],"minScale",["layers","featureCollection.layers"])],Ne.prototype,"readMinScale",null),t.__decorate([I.property({type:["ArcGISFeatureLayer"],value:"ArcGISFeatureLayer"})],Ne.prototype,"operationalLayerType",void 0),t.__decorate([I.property({nonNullable:!0,type:f.ofType(Y)})],Ne.prototype,"pointBarriers",void 0),t.__decorate([D.reader(["web-map","portal-item"],"pointBarriers",["layers","featureCollection.layers"])],Ne.prototype,"readPointBarriers",null),t.__decorate([I.property({nonNullable:!0,type:f.ofType(Z)})],Ne.prototype,"polygonBarriers",void 0),t.__decorate([D.reader(["web-map","portal-item"],"polygonBarriers",["layers","featureCollection.layers"])],Ne.prototype,"readPolygonBarriers",null),t.__decorate([I.property({nonNullable:!0,type:f.ofType($)})],Ne.prototype,"polylineBarriers",void 0),t.__decorate([D.reader(["web-map","portal-item"],"polylineBarriers",["layers","featureCollection.layers"])],Ne.prototype,"readPolylineBarriers",null),t.__decorate([I.property({readOnly:!0})],Ne.prototype,"routeInfo",void 0),t.__decorate([D.reader(["web-map","portal-item"],"routeInfo",["layers","featureCollection.layers"])],Ne.prototype,"readRouteInfo",null),t.__decorate([I.property({type:oe})],Ne.prototype,"spatialReference",void 0),t.__decorate([D.reader(["web-map","portal-item"],"spatialReference",["layers","featureCollection.layers"])],Ne.prototype,"readSpatialReference",null),t.__decorate([I.property({nonNullable:!0,type:f.ofType(re)})],Ne.prototype,"stops",void 0),t.__decorate([D.reader(["web-map","portal-item"],"stops",["layers","featureCollection.layers"])],Ne.prototype,"readStops",null),t.__decorate([I.property()],Ne.prototype,"title",null),t.__decorate([I.property({readOnly:!0,json:{read:!1}})],Ne.prototype,"type",void 0),t.__decorate([I.property()],Ne.prototype,"url",null),Ne=t.__decorate([C.subclass(ve)],Ne);return Ne}));
