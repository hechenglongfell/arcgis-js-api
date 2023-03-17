/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Accessor","../../../core/Collection","../../../core/Error","../../../core/has","../../../core/MapUtils","../../../core/maybe","../../../core/promiseUtils","../../../core/reactiveUtils","../../../core/unitUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../../geometry/Extent","../../../geometry/support/scaleUtils","../../../layers/support/floorFilterUtils","../../../renderers/support/clickToleranceUtils","../../../rest/identify","../../../rest/support/IdentifyParameters","../../../support/arcadeOnDemand","../../../symbols/SimpleMarkerSymbol","./popupUtils"],(function(e,t,r,i,o,n,s,a,l,u,c,p,y,h,f,d,g,m,v,b,w,_,S,G,F,P,T){"use strict";let x=null;function V(e,t){return"tile"===t.type||"map-image"===t.type}function M(e,t,r){const i=[],o=e=>{const n=0===e.minScale||t<=e.minScale,s=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&s)if(e.sublayers)e.sublayers.forEach(o);else if(e.popupEnabled){const t=T.getFetchPopupTemplate(e,{...r,defaultPopupTemplateEnabled:!1});c.isSome(t)&&i.unshift({sublayer:e,popupTemplate:t})}};return(e?.toArray()??[]).reverse().map(o),i}function L(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?F.loadArcade():Promise.resolve()}function U(e,t){return H.apply(this,arguments)}function H(){return(H=r._asyncToGenerator((function*(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return yield Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return!1}}))).apply(this,arguments)}function R(e,t){return A.apply(this,arguments)}function A(){return(A=r._asyncToGenerator((function*(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?yield Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}))).apply(this,arguments)}t.MapServiceLayerViewHelper=function(t){function i(e){var i;return(i=t.call(this,e)||this)._featuresResolutions=new WeakMap,i.highlightGraphics=null,i.highlightGraphicUpdated=null,i.updateHighlightedFeatures=p.debounce(function(){var e=r._asyncToGenerator((function*(e){i.destroyed||i.updatingHandles.addPromise(i._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}));return function(t){return e.apply(this,arguments)}}()),i}r._inheritsLoose(i,t);var n=i.prototype;return n.initialize=function(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([y.on((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])},n.fetchPopupFeatures=function(){var e=r._asyncToGenerator((function*(e,t){const{layerView:{layer:r,view:{scale:i}}}=this;if(!e)throw new a("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const o=M(r.sublayers,i,t);if(!o.length)return[];const n=yield U(r,o);if(!((r.capabilities?.operations?.supportsIdentify??!0)&&r.version>=10.5)&&!n)throw new a("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return n?this._fetchPopupFeaturesUsingQueries(e,o,t):this._fetchPopupFeaturesUsingIdentify(e,o,t)}));function t(t,r){return e.apply(this,arguments)}return t}(),n.clearHighlights=function(){this.highlightGraphics?.removeAll()},n.highlight=function(e){const t=this.highlightGraphics;if(!t)return{remove(){}};let r=null;if(e instanceof o?r=[e]:s.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(c.isSome),!r||!r.length)return{remove:()=>{}};for(const i of r){const e=i.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(i.visible=!1)}return t.addMany(r),{remove:()=>{t.removeMany(r??[])}}},n._updateHighlightedFeaturesSymbols=function(){var t=r._asyncToGenerator((function*(t){const{layerView:{view:i},highlightGraphics:o,highlightGraphicUpdated:n}=this;if(o&&n)for(const s of t){const t=s.sourceLayer&&"renderer"in s.sourceLayer&&s.sourceLayer.renderer;s.sourceLayer&&"geometryType"in s.sourceLayer&&"point"===s.sourceLayer.geometryType&&t&&"getSymbolAsync"in t&&t.getSymbolAsync(s).then(function(){var a=r._asyncToGenerator((function*(r){r||(r=new P);let a=null;const l="visualVariables"in t?t.visualVariables?.find((e=>"size"===e.type)):void 0;l&&(x||(x=(yield new Promise(((t,r)=>e(["../../../renderers/visualVariables/support/visualVariableUtils"],t,r)))).getSize),a=x(l,s,{view:i.type,scale:i.scale,shape:"simple-marker"===r.type?r.style:null})),a||(a="width"in r&&"height"in r&&null!=r.width&&null!=r.height?Math.max(r.width,r.height):"size"in r?r.size:16),o.includes(s)&&(s.symbol=new P({style:"square",size:a,xoffset:"xoffset"in r?r.xoffset:0,yoffset:"yoffset"in r?r.yoffset:0}),n(s,"symbol"),s.visible=!0)}));return function(e){return a.apply(this,arguments)}}())}}));function i(e){return t.apply(this,arguments)}return i}(),n._updateHighlightedFeaturesGeometries=function(){var e=r._asyncToGenerator((function*(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(this._highlightGeometriesResolution=e,!o||!i?.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),s=new Map;for(const c of i)if(!this._featuresResolutions.has(c)||this._featuresResolutions.get(c)>n){const e=c.sourceLayer;u.getOrCreateMapValue(s,e,(()=>new Map)).set(c.getObjectId(),c)}const a=Array.from(s,(([e,t])=>{const i=e.createQuery();return i.objectIds=[...t.keys()],i.outFields=[e.objectIdField],i.returnGeometry=!0,i.maxAllowableOffset=n,i.outSpatialReference=r.spatialReference,e.queryFeatures(i)})),l=yield Promise.all(a);if(!this.destroyed)for(const{features:u}of l)for(const e of u){const t=e.sourceLayer,r=s.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,o(r,"geometry"),this._featuresResolutions.set(r,n))}}));function t(t){return e.apply(this,arguments)}return t}(),n._getTargetResolution=function(e){const t=e*h.getMetersPerUnitForSR(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r},n._fetchPopupFeaturesUsingIdentify=function(){var e=r._asyncToGenerator((function*(e,t,r){const i=yield this._createIdentifyParameters(e,t,r);if(c.isNone(i))return[];const{results:o}=yield S.identify(this.layerView.layer.parsedUrl,i);return o.map((e=>e.feature))}));function t(t,r,i){return e.apply(this,arguments)}return t}(),n._createIdentifyParameters=function(){var e=r._asyncToGenerator((function*(e,t,r){const{floors:i,layer:o,timeExtent:n,view:{spatialReference:s,scale:a}}=this.layerView,u=c.isSome(r)?r.event:null;if(!t.length)return null;yield Promise.all(t.map((({sublayer:e})=>e.load().catch((()=>{})))));const p=Math.min(l("mapservice-popup-identify-max-tolerance"),o.allSublayers.reduce(((e,t)=>t.renderer?_.calculateTolerance({renderer:t.renderer,event:u}):e),2)),y=this.createFetchPopupFeaturesQueryGeometry(e,p),h=b.getResolutionForScale(a,s),f=Math.round(y.width/h),d=new v({xmin:y.center.x-h*f,ymin:y.center.y-h*f,xmax:y.center.x+h*f,ymax:y.center.y+h*f,spatialReference:y.spatialReference});return new G({floors:i,gdbVersion:"gdbVersion"in o?o.gdbVersion:void 0,geometry:e,height:f,layerOption:"popup",mapExtent:d,returnGeometry:!0,spatialReference:s,sublayers:o.sublayers,timeExtent:n,tolerance:p,width:f})}));function t(t,r,i){return e.apply(this,arguments)}return t}(),n._fetchPopupFeaturesUsingQueries=function(){var e=r._asyncToGenerator((function*(e,t,i){var o=this;const{layerView:{floors:n,timeExtent:s}}=this,a=c.isSome(i)?i.event:null,l=t.map(function(){var t=r._asyncToGenerator((function*({sublayer:t,popupTemplate:r}){if(yield t.load().catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];const i=t.createQuery(),l=_.calculateTolerance({renderer:t.renderer,event:a}),u=o.createFetchPopupFeaturesQueryGeometry(e,l);if(i.geometry=u,i.outFields=yield T.getRequiredFields(t,r),i.timeExtent=s,n){const e=n.clone(),r=w.getLayerFloorFilterClause(e,t);c.isSome(r)&&(i.where=i.where?`(${i.where}) AND (${r})`:r)}const p=o._getTargetResolution(u.width/l),y=yield L(r),h="point"===t.geometryType||y&&y.arcadeUtils.hasGeometryOperations(r);h||(i.maxAllowableOffset=p);let{features:f}=yield t.queryFeatures(i);const d=h?0:p;f=yield R(t,f);for(const e of f)o._featuresResolutions.set(e,d);return f}));return function(e){return t.apply(this,arguments)}}());return(yield p.eachAlways(l)).reverse().reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}));function t(t,r,i){return e.apply(this,arguments)}return t}(),i}(n),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"layerView",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"highlightGraphics",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"highlightGraphicUpdated",void 0),i.__decorate([f.property({constructOnly:!0})],t.MapServiceLayerViewHelper.prototype,"updatingHandles",void 0),t.MapServiceLayerViewHelper=i.__decorate([m.subclass("esri.views.layers.support.MapService")],t.MapServiceLayerViewHelper),t.collectPopupProviders=M,t.isMapServiceLayerView=V,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
