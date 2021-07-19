/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../symbols","../../core/Collection","../../core/Error","../../core/Handles","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/support/webMercatorUtils","../../layers/Layer","../../support/actions/ActionBase","../../support/actions/ActionButton","../../support/actions/ActionToggle","../../symbols/support/symbolUtils","../../views/input/InputManager","../../views/support/layerViewUtils","../Feature/FeatureViewModel","./actions","./actionUtils","../support/AnchorElementViewModel","../support/GoTo","../../geometry/Point","../../symbols/SimpleFillSymbol"],(function(e,t,o,r,n,i,s,a,l,u,c,h,p,d,g,f,y,_,w,F,m,v,C,b,P,E,A,M,V,T,O){"use strict";const x=i.ofType({key:"type",defaultKeyValue:"button",base:w,typeMap:{button:F,toggle:m}}),L=()=>[E.zoomToFeature.clone()],I=()=>[E.zoomToClusteredFeatures.clone(),E.browseClusteredFeatures.clone()],k="esri.widgets.Popup.PopupViewModel",G=l.getLogger(k);let S=function(t){function o(e){var o;return(o=t.call(this,e)||this)._handles=new a,o._pendingPromises=new Set,o._fetchFeaturesController=null,o._selectedClusterFeature=null,o.featurePage=null,o.actions=new x,o.defaultPopupTemplateEnabled=!1,o.autoCloseEnabled=!1,o.autoOpenEnabled=!0,o.browseClusterEnabled=!1,o.content=null,o.featuresPerPage=20,o.featureViewModels=[],o.highlightEnabled=!0,o.includeDefaultActions=!0,o.selectedClusterBoundaryFeature=new r({symbol:new O({outline:{width:1.5,color:"cyan"},style:"none"})}),o.title=null,o.updateLocationEnabled=!1,o.view=null,o.visible=!1,o.zoomFactor=4,o.zoomToLocation=null,o}e._inheritsLoose(o,t);var n=o.prototype;return n.initialize=function(){this._handles.add([h.init(this,["autoOpenEnabled","view"],(()=>this._autoOpenEnabledChange())),this.on("view-change",(()=>this._autoClose())),h.watch(this,["highlightEnabled","selectedFeature","visible","view"],(()=>this._highlightFeature())),h.watch(this,"view.animation.state",(e=>this._animationStateChange(e))),h.watch(this,"location",(e=>this._locationChange(e))),h.watch(this,"selectedFeature",(e=>this._selectedFeatureChange(e))),h.watch(this,["selectedFeatureIndex","featureCount","featuresPerPage"],(()=>this._selectedFeatureIndexChange())),h.watch(this,["featurePage","selectedFeatureIndex","featureCount","featuresPerPage, featureViewModels"],(()=>this._setGraphicOnFeatureViewModels())),h.watch(this,"featureViewModels",(()=>this._featureViewModelsChange())),this.on("trigger-action",(e=>A.triggerAction({event:e,view:this.view}))),h.whenFalse(this,"waitingForResult",(()=>this._waitingForResultChange()),!0),h.watch(this,["features","view","view.map","view.spatialReference"],(()=>this._updateFeatureVMs())),h.watch(this,["view.scale"],this._viewScaleChange),h.whenFalse(this,"visible",(()=>this.browseClusterEnabled=!1)),h.watch(this,"browseClusterEnabled",(e=>e?this.enableClusterBrowsing():this.disableClusterBrowsing()))])},n.destroy=function(){this._cancelFetchingFeatures(),this._handles.destroy(),this._handles=null,this._pendingPromises.clear(),this.browseClusterEnabled=!1,this.view=null},n.centerAtLocation=function(){const{view:e}=this,t=A.getSelectedTarget(this);if(!t){const o=new s("center-at-location:invalid-target-or-view","Cannot center at a location without a target and view.",{target:t,view:e});return G.error(o),Promise.reject(o)}return this.callGoTo({target:{target:t,scale:e.scale}})},n.clear=function(){this.set({promises:[],features:[],content:null,title:null,location:null})},n.fetchFeatures=function(e,t){const{view:o}=this;if(!o||!e){const t=new s("fetch-features:invalid-screenpoint-or-view","Cannot fetch features without a screenPoint and view.",{screenPoint:e,view:o});return G.error(t),Promise.reject(t)}return o.fetchPopupFeatures(e,{event:t&&t.event,defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,signal:t&&t.signal})},n.open=function(e){const t={updateLocationEnabled:!1,promises:[],fetchFeatures:!1,...e,visible:!0},{fetchFeatures:o}=t;delete t.fetchFeatures,o&&this._setFetchFeaturesPromises(t.location),this.set(t)},n.triggerAction=function(e){const t=this.allActions.getItemAt(e);t&&!t.disabled&&this.emit("trigger-action",{action:t})},n.next=function(){return this.selectedFeatureIndex=this.selectedFeatureIndex+1,this},n.previous=function(){return this.selectedFeatureIndex=this.selectedFeatureIndex-1,this},n.disableClusterBrowsing=function(){A.removeClusteredFeaturesForBrowsing(this),this._clearBrowsedClusterGraphics()},n.enableClusterBrowsing=function(){var t=e._asyncToGenerator((function*(){yield A.displayClusterExtent(this),yield A.browseAggregateFeatures(this)}));function o(){return t.apply(this,arguments)}return o}(),n._animationStateChange=function(e){this.zoomToLocation||(E.zoomToFeature.disabled="waiting-for-target"===e)},n._clearBrowsedClusterGraphics=function(){var e;const t=null==(e=this.view)?void 0:e.graphics;t&&(t.remove(this.selectedClusterBoundaryFeature),t.remove(this._selectedClusterFeature)),this._selectedClusterFeature=null,this.selectedClusterBoundaryFeature.geometry=null},n._viewScaleChange=function(){var e;(null!=(e=this.selectedFeature)&&e.isAggregate||this.browseClusterEnabled)&&(this.browseClusterEnabled=!1,this.visible=!1)},n._locationChange=function(e){const{selectedFeature:t,updateLocationEnabled:o}=this;o&&e&&(!t||t.geometry)&&this.centerAtLocation()},n._selectedFeatureIndexChange=function(){this.featurePage=this.featureCount>1?Math.floor(this.selectedFeatureIndex/this.featuresPerPage)+1:null},n._featureViewModelsChange=function(){this.featurePage=this.featureCount>1?1:null},n._setGraphicOnFeatureViewModels=function(){const{features:e,featureCount:t,featurePage:o,featuresPerPage:r,featureViewModels:n}=this;if(null===o)return;const i=((o-1)*r+t)%t,s=i+r;n.slice(i,s).forEach(((t,o)=>{t&&!t.graphic&&(t.graphic=e[i+o])}))},n._selectedFeatureChange=function(){var t=e._asyncToGenerator((function*(e){if(!e)return;const{location:t,updateLocationEnabled:o,view:r}=this;if(this.browseClusterEnabled){if(this._selectedClusterFeature&&(r.graphics.remove(this._selectedClusterFeature),this._selectedClusterFeature=null),e.isAggregate)return;return e.symbol=yield v.getDisplayedSymbol(e),this._selectedClusterFeature=e,void r.graphics.add(this._selectedClusterFeature)}!o&&t||!e.geometry?o&&!e.geometry&&this.centerAtLocation().then((()=>{this.location=r.center.clone()})):this.location=u.unwrap(this._getPointFromGeometry(e.geometry))}));function o(e){return t.apply(this,arguments)}return o}(),n._waitingForResultChange=function(){!this.featureCount&&this.promises&&(this.visible=!1)},n._setFetchFeaturesPromises=function(e){return this._fetchFeaturesWithController(this._getScreenPoint(e||this.location)).then((e=>{const{clientOnlyGraphics:t,promisesPerLayerView:o}=e,r=Promise.resolve(t),n=o.map((e=>e.promise));this.promises=[r,...n]}))},n._destroyFeatureVMs=function(){this.featureViewModels.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("featureViewModels",[])},n._updateFeatureVMs=function(){const{selectedFeature:e,features:t,featureViewModels:o}=this;if(null!=e&&e.isAggregate||(this.browseClusterEnabled=!1),this._destroyFeatureVMs(),!t||!t.length)return;const r=o.slice(0),n=[];t.forEach(((t,o)=>{if(!t)return;let i=null;if(r.some(((e,o)=>(e&&e.graphic===t&&(i=e,r.splice(o,1)),!!i))),i)n[o]=i;else{var s,a;const r=new P({defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled,spatialReference:null==(s=this.view)?void 0:s.spatialReference,graphic:t===e?t:null,map:null==(a=this.view)?void 0:a.map,view:this.view});n[o]=r}})),r.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("featureViewModels",n)},n._getScreenPoint=function(e){const{view:t}=this;return t&&e&&"function"==typeof t.toScreen?t.toScreen(e):null},n._autoOpenEnabledChange=function(){const e="auto-fetch-features",{_handles:t,autoOpenEnabled:o}=this;if(t.remove(e),o&&this.view){const o=this.view.on("click",(e=>{"mouse"===e.pointerType&&0!==e.button||this._fetchFeaturesAndOpen(e)}),C.ViewEventPriorities.WIDGET);t.add(o,e)}},n._cancelFetchingFeatures=function(){const e=this._fetchFeaturesController;e&&e.abort(),this._fetchFeaturesController=null,this.notifyChange("waitingForResult")},n._fetchFeaturesWithController=function(e,t){this._cancelFetchingFeatures();const o=c.createAbortController(),{signal:r}=o;this._fetchFeaturesController=o,this.notifyChange("waitingForResult");const n=this.fetchFeatures(e,{signal:r,event:t});return n.catch((()=>{})).then((()=>{this._fetchFeaturesController=null,this.notifyChange("waitingForResult")})),n},n._fetchFeaturesAndOpen=function(e){const{screenPoint:t,mapPoint:o}=e,{view:r}=this;this._fetchFeaturesWithController(t,e).then((e=>{const{clientOnlyGraphics:t,promisesPerLayerView:n,location:i}=e,s=[Promise.resolve(t),...n.map((e=>e.promise))];return r.popup.open({location:i||o,promises:s}),e}))},n._updatePendingPromises=function(e){e&&this._pendingPromises.has(e)&&(this._pendingPromises.delete(e),this.notifyChange("pendingPromisesCount"))},n._autoClose=function(){this.autoCloseEnabled&&(this.visible=!1)},n._getPointFromGeometry=function(e){return u.isNone(e)?null:"point"===e.type?e:"extent"===e.type?e.center:"polygon"===e.type?e.centroid:"multipoint"===e.type||"polyline"===e.type?e.extent.center:null},n._getLayerView=function(){var t=e._asyncToGenerator((function*(e,t){return yield e.when(),e.whenLayerView(t)}));function o(e,o){return t.apply(this,arguments)}return o}(),n._highlightFeature=function(){var t=e._asyncToGenerator((function*(){const e="highlight";this._handles.remove(e);const{selectedFeature:t,highlightEnabled:o,view:r,visible:n}=this;if(!(t&&r&&o&&n))return;let{layer:i,sourceLayer:s}=t;if("map-notes"!==(null==s?void 0:s.type)&&"subtype-group"!==(null==s?void 0:s.type)||(i=s),!(i&&i instanceof _))return;const a=this._getLayerView(r,i);this._highlightPromise=a;const l=yield a;if(!(l&&b.highlightsSupported(l)&&this._highlightPromise===a&&this.selectedFeature&&this.highlightEnabled&&this.visible))return;const u="objectIdField"in i&&i.objectIdField,c=t.attributes,h=c&&u&&c[u],p=l.highlight(h||t);this._handles.add(p,e)}));function o(){return t.apply(this,arguments)}return o}(),n._updateFeatures=function(e){const{features:t}=this;if(!e||!e.length)return;if(!t.length)return void(this.features=e);const o=e.filter((e=>-1===t.indexOf(e)));this.features=t.concat(o)},e._createClass(o,[{key:"isLoadingFeature",get:function(){return this.featureViewModels.some((e=>e.waitingForContent))}},{key:"active",get:function(){return!(!this.visible||this.waitingForResult)}},{key:"allActions",get:function(){const e=this._get("allActions")||new x;e.removeAll();const{actions:t,defaultActions:o,defaultPopupTemplateEnabled:r,includeDefaultActions:n,selectedFeature:i}=this,s=n?o.concat(t):t,a=i&&("function"==typeof i.getEffectivePopupTemplate&&i.getEffectivePopupTemplate(r)||i.popupTemplate),l=a&&a.actions,u=a&&a.overwriteActions?l:l?l.concat(s):s;return u&&u.filter(Boolean).forEach((t=>e.add(t))),e}},{key:"defaultActions",get:function(){var e;const t=this._get("defaultActions")||new x;return t.removeAll(),t.addMany(null!=(e=this.selectedFeature)&&e.isAggregate?I():L()),t}},{key:"featureCount",get:function(){return this.features.length}},{key:"features",get:function(){return this._get("features")||[]},set:function(e){const t=e||[];this._set("features",t);const{pendingPromisesCount:o,promiseCount:r,selectedFeatureIndex:n}=this,i=r&&t.length;i&&o&&-1===n?this.selectedFeatureIndex=0:i&&-1!==n||(this.selectedFeatureIndex=t.length?0:-1)}},{key:"location",get:function(){return this._get("location")||null},set:function(e){const t=this.get("view.spatialReference.isWebMercator");e&&e.get("spatialReference.isWGS84")&&t&&(e=y.geographicToWebMercator(e)),this._set("location",e)}},{key:"pendingPromisesCount",get:function(){return this._pendingPromises.size}},{key:"waitingForResult",get:function(){return!(!(!!this._fetchFeaturesController||this.pendingPromisesCount>0)||0!==this.featureCount)}},{key:"promiseCount",get:function(){return this.promises.length}},{key:"promises",get:function(){return this._get("promises")||[]},set:function(e){if(this._pendingPromises.clear(),this.features=[],!Array.isArray(e)||!e.length)return this._set("promises",[]),void this.notifyChange("pendingPromisesCount");this._set("promises",e),(e=e.slice(0)).forEach((e=>{this._pendingPromises.add(e);const t=t=>{this._pendingPromises.has(e)&&this._updateFeatures(t),this._updatePendingPromises(e)},o=()=>this._updatePendingPromises(e);e.then(t,o)})),this.notifyChange("pendingPromisesCount")}},{key:"selectedFeature",get:function(){const{features:e,selectedFeatureIndex:t}=this;if(-1===t)return null;return e[t]||null}},{key:"selectedFeatureIndex",get:function(){const e=this._get("selectedFeatureIndex");return"number"==typeof e?e:-1},set:function(e){const{featureCount:t}=this;e=isNaN(e)||e<-1||!t?-1:(e+t)%t,this._set("selectedFeatureIndex",e)}},{key:"selectedFeatureViewModel",get:function(){return this.featureViewModels[this.selectedFeatureIndex]||null}},{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}}]),o}(V.GoToMixin(M));return t.__decorate([p.property()],S.prototype,"featurePage",void 0),t.__decorate([p.property()],S.prototype,"isLoadingFeature",null),t.__decorate([p.property({type:x})],S.prototype,"actions",void 0),t.__decorate([p.property({readOnly:!0})],S.prototype,"active",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"allActions",null),t.__decorate([p.property({type:Boolean})],S.prototype,"defaultPopupTemplateEnabled",void 0),t.__decorate([p.property()],S.prototype,"autoCloseEnabled",void 0),t.__decorate([p.property()],S.prototype,"autoOpenEnabled",void 0),t.__decorate([p.property()],S.prototype,"browseClusterEnabled",void 0),t.__decorate([p.property()],S.prototype,"content",void 0),t.__decorate([p.property({type:x,readOnly:!0})],S.prototype,"defaultActions",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"featureCount",null),t.__decorate([p.property()],S.prototype,"features",null),t.__decorate([p.property()],S.prototype,"featuresPerPage",void 0),t.__decorate([p.property({readOnly:!0})],S.prototype,"featureViewModels",void 0),t.__decorate([p.property()],S.prototype,"highlightEnabled",void 0),t.__decorate([p.property()],S.prototype,"includeDefaultActions",void 0),t.__decorate([p.property({type:T})],S.prototype,"location",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"pendingPromisesCount",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"selectedClusterBoundaryFeature",void 0),t.__decorate([p.property({readOnly:!0})],S.prototype,"waitingForResult",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"promiseCount",null),t.__decorate([p.property()],S.prototype,"promises",null),t.__decorate([p.property({value:null,readOnly:!0})],S.prototype,"selectedFeature",null),t.__decorate([p.property({value:-1})],S.prototype,"selectedFeatureIndex",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"selectedFeatureViewModel",null),t.__decorate([p.property({readOnly:!0})],S.prototype,"state",null),t.__decorate([p.property()],S.prototype,"title",void 0),t.__decorate([p.property()],S.prototype,"updateLocationEnabled",void 0),t.__decorate([p.property()],S.prototype,"view",void 0),t.__decorate([p.property()],S.prototype,"visible",void 0),t.__decorate([p.property()],S.prototype,"zoomFactor",void 0),t.__decorate([p.property()],S.prototype,"zoomToLocation",void 0),t.__decorate([p.property()],S.prototype,"centerAtLocation",null),S=t.__decorate([f.subclass(k)],S),S}));
