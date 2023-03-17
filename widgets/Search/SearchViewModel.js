/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../assets","../../config","../../Graphic","../../PopupTemplate","../../symbols","../../core/Accessor","../../core/Collection","../../core/Error","../../core/Evented","../../core/Handles","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/Point","../../geometry/SpatialReference","../../intl/locale","../../intl/messages","../../portal/Portal","../../views/support/layerViewUtils","./LayerSearchSource","./LocatorSearchSource","./SearchSource","./support/geometryUtils","./support/locatorUtils","../support/geolocationUtils","../support/GoTo","../../symbols/TextSymbol","../../symbols/PictureMarkerSymbol","../../symbols/SimpleLineSymbol","../../symbols/SimpleFillSymbol"],(function(e,t,r,o,s,n,i,a,l,u,c,p,h,d,g,y,_,f,m,S,v,w,b,x,T,I,L,P,G,R,E,F,A,C,O,N,k){"use strict";function M(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const D=()=>x.fetchMessageBundle("esri/widgets/Search/t9n/Search"),B="esri.widgets.Search.SearchViewModel",U=h.getLogger(B),V="highlight",j=l.ofType({key:e=>e.layer?"layer":"locator",base:G,typeMap:{layer:L,locator:P}}),J=w.WGS84,H="esri/images/search/search-symbol-32.png",W=/<(?:.|\s)*?>/g,Q=-1;let Z=function(t){function i(e){var o;return(o=t.call(this,e)||this)._handles=new p,o._gotoController=null,o._searching=null,o._createdFeatureLayers=[],o.autoNavigate=!0,o.autoSelect=!0,o.defaultPopupTemplate=null,o.defaultSources=new j,o.defaultSymbols={point:new O({url:r.getAssetUrl(H),size:24,width:24,height:24}),polyline:new N({color:[130,130,130,1],width:2}),polygon:new k({color:[235,235,235,.4],outline:{color:[130,130,130,1],width:2}})},o.includeDefaultSources=!0,o.maxInputLength=128,o.maxResults=6,o.maxSuggestions=6,o.messages=null,o.minSuggestCharacters=3,o.popupEnabled=!0,o.popupTemplate=null,o.portal=T.getDefault(),o.resultCount=null,o.resultGraphicEnabled=!0,o.resultGraphic=null,o.results=null,o.selectedSuggestion=null,o.searchAllEnabled=!0,o.selectedResult=null,o.sources=new j,o.suggestionDelay=350,o.suggestionCount=null,o.suggestions=null,o.suggestionsEnabled=!0,o.view=null,o}e._inheritsLoose(i,t);var a=i.prototype;return a.initialize=function(){var t=this;const r=function(){var r=e._asyncToGenerator((function*(){const e=yield D();t.messages=e,t.defaultPopupTemplate=new n({title:e.searchResult,content:"{Match_addr}"})}));return function(){return r.apply(this,arguments)}}();r(),this._handles.add([y.watch((()=>[this.includeDefaultSources,this.view,this.portal]),(()=>this._update()),y.initial),b.onLocaleChange(r)])},a.destroy=function(){this._destroyFeatureLayers(),this._abortGoTo(),this.clearGraphics(),this._handles.destroy(),this._handles=null},a.clear=function(){this.searchTerm=""},a.clearGraphics=function(){this._removeHighlight(),this._closePopup(),this.view&&this.view.graphics.remove(this.resultGraphic),this._set("resultGraphic",null)},a.search=function(e,t){this.emit("search-start"),this.clearGraphics();const r=this._createSuggestionForSearch(e),o=this.when().then((()=>this._getResultsFromSources(r,t).then((e=>{if(d.unwrap(t?.signal)?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:r.text,numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(o,e,r);const s=this._getFirstResult(o.results),n=(r.location&&s?s.name:r.text).replace(W,"");return this._set("searchTerm",n),(r.key&&"number"==typeof r.sourceIndex||r.location)&&this._set("selectedSuggestion",r),this._set("results",o.results),this._set("resultCount",o.results.reduce(((e,t)=>e+t.results.length),0)),this.emit("search-complete",o),this._selectFirstResult(s).then((()=>o))})))).then((e=>(this._clearSearching(),e)),(e=>{throw this._clearSearching(),e}));return this._searching=o,o},a.searchNearby=function(e){if(!this.locationEnabled){const e=new u("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});return U.error(e),Promise.reject(e)}const t=F.getCurrentPosition().then((t=>F.positionToPoint({position:t,view:this.view},e))).then((t=>this.search(t,e)));return this._searching=t,t.catch((()=>{})).then((()=>this._clearSearching())),t},a.select=function(e){if(this.clearGraphics(),!e){const t=new u("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e});return U.error(t),Promise.reject(t)}const{view:t}=this,r=M(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),o=this.allSources.at(r);if(!o){const e=new u("select:missing-source","Cannot select without a source.",{source:o});return U.error(e),Promise.reject(e)}const n=o instanceof L?this._getLayerSourcePopupTemplate(o):o.popupTemplate,i=o.resultSymbol||this._getDefaultSymbol(e),a=M(o,"resultGraphicEnabled")?o.resultGraphicEnabled:this.resultGraphicEnabled,l=M(o,"autoNavigate")?o.autoNavigate:this.autoNavigate,c=M(o,"popupEnabled")?o.popupEnabled:this.popupEnabled,p=c?n||this.popupTemplate||this.defaultPopupTemplate:null,{feature:h}=e;if(!h){const e=new u("select:missing-feature","Cannot select without a feature.",{feature:h});return U.error(e),Promise.reject(e)}const{attributes:y,geometry:_,layer:f,sourceLayer:m}=h,S=R.getPointFromGeometry(_),v={layerViewQuery:this._getLayerView(h),elevationQuery:t&&d.isSome(S)?R.getPointWithElevation(S,t).catch((()=>S)):Promise.resolve(S)};return g.eachAlways(v).then((n=>{const u=n.layerViewQuery.value,g=n.elevationQuery.value;i instanceof C&&(i.text=e.name);const S=t&&l?e.target||e.extent:null;return(d.isSome(S)?this._goToSearchResult(S):Promise.resolve()).then((()=>{const n=u?h:new s({geometry:_,symbol:i,attributes:y,layer:f,sourceLayer:m,popupTemplate:p}),l=c&&this.view?.popup,d=l&&n.getEffectivePopupTemplate(l.defaultPopupTemplateEnabled);return d&&t.popup.open({features:[n],location:g}),u&&I.highlightsSupported(u)&&!d&&this._highlightFeature({graphic:n,layerView:u}),!u&&a&&t&&t.graphics.push(n),this._setResultFloor(e),this._set("selectedResult",e),this._set("resultGraphic",n),this.emit("select-result",{result:e,source:o,sourceIndex:r}),e}))}))},a.suggest=function(e,t,r){const o=e||this.searchTerm;return this.emit("suggest-start",{searchTerm:o}),this._suggestTimer(t,r).then((()=>this._suggestImmediate(o,r).then((e=>(this._set("suggestions",e.results),this._set("suggestionCount",e.results.reduce(((e,t)=>e+t.results.length),0)),this.emit("suggest-complete",e),e)))))},a.when=function(){var t=e._asyncToGenerator((function*(){yield y.whenOnce((()=>!this.updating))}));function r(){return t.apply(this,arguments)}return r}(),a._update=function(){var t=e._asyncToGenerator((function*(){const{portal:e,view:t}=this;if(this.includeDefaultSources){const r=this._updatingPromise=g.eachAlways([e?.load(),t?.when()]);if(this.destroyed)return;if(yield r,r!==this._updatingPromise)return}yield y.whenOnce((()=>this.messages)),this.destroyed||this._updateDefaultSources(),this._updatingPromise=null}));function r(){return t.apply(this,arguments)}return r}(),a._clearSearching=function(){this._searching=null},a._convertHelperServices=function(){const e=this.portal?.helperServices?.geocode;if(!e)return[];return e.map((e=>{if(!1===e.placefinding)return;const t=o.apiKey&&E.isArcGISWorldGeocoder(e.url)?{url:E.meteredArcGISLocatorUrl}:null,r=P.fromJSON({...e,...t}),s=r.url;if(E.isArcGISWorldGeocoder(s)||E.isProxiedArcGISWorldGeocoder(s)||E.isMeteredArcGISWorldGeocoder(s)){const e=r.outFields||["Addr_type","Match_addr","StAddr","City"],t=r.placeholder||this.messages.placeholder,o="number"==typeof r.defaultZoomScale?r.defaultZoomScale:2500;r.set({singleLineFieldName:"SingleLine",outFields:e,placeholder:t,defaultZoomScale:o})}return r.singleLineFieldName?r:void 0})).filter(Boolean)},a._destroyFeatureLayers=function(){this._createdFeatureLayers.forEach((e=>e?.destroy())),this._createdFeatureLayers=[]},a._getLayerSources=function(e,t){const r=this.view?.map;return e.map((e=>{const o=r.findLayerById(e.id);if(!o)return;const s=this._getLayerJSON(e),n=L.fromJSON(s);return n.placeholder=t,this._getLayer(o,s).then((e=>{n.layer=e})),n})).filter(Boolean).toArray()},a._getTableSources=function(e,t){const r=this.view?.map;return e.map((e=>{const o=r.findTableById(e.id);if(!o)return;const s=this._getLayerJSON(e),n=L.fromJSON(s);return n.placeholder=t,this._getLayer(o,s).then((e=>{n.layer=e})),n})).filter(Boolean).toArray()},a._convertApplicationProperties=function(){const e=this.view?.map,t=e?.applicationProperties?.viewing?.search;if(!t)return[];const{enabled:r,hintText:o,layers:s,tables:n}=t;if(!r)return[];return[...this._getLayerSources(s,o),...this._getTableSources(n,o)]},a._getSubLayer=function(){var t=e._asyncToGenerator((function*(e,t){if(yield e.load(),!e.allSublayers)throw new Error;const r=e.allSublayers.find((e=>e.id===t.subLayer));if(!r)throw new Error;const o=yield r.createFeatureLayer();return this._createdFeatureLayers.push(o),o}));function r(e,r){return t.apply(this,arguments)}return r}(),a._getBuildingSubLayer=function(){var t=e._asyncToGenerator((function*(e,t){yield e.load();const r=e.allSublayers.find((e=>e.id===t.subLayer));if("building-component"!==r?.type)throw new Error;if(yield r.load(),null==r.associatedLayer)throw new Error;return yield r.associatedLayer.load(),r}));function r(e,r){return t.apply(this,arguments)}return r}(),a._getLayer=function(e,t){return"feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type?Promise.resolve(e):"map-image"===e.type?this._getSubLayer(e,t).catch((()=>{const t=new u("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e});return U.error(t),null})):"building-scene"===e.type?this._getBuildingSubLayer(e,t):Promise.resolve(null)},a._getLayerJSON=function(e){return"function"==typeof e.toJSON?e.toJSON():e},a._updateDefaultSources=function(){const{defaultSources:e,includeDefaultSources:t}=this;this._destroyFeatureLayers(),e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()])},a._abortGoTo=function(){this._gotoController&&this._gotoController.abort(),this._gotoController=null},a._clear=function(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")},a._closePopup=function(){const e=this.view?.popup,{resultGraphic:t}=this;if(!e||!t)return;const{selectedFeature:r}=e;r&&r===t&&e.close()},a._suggestTimer=function(e,t){const r=null!=e?e:this.suggestionDelay;return g.after(r,null,t&&t.signal)},a._createLocationForSearch=function(e){return e instanceof s?R.getPointFromGeometry(e.geometry):e instanceof v?e:Array.isArray(e)&&2===e.length?new v({longitude:e[0],latitude:e[1]}):null},a._createSuggestionForSearch=function(e){if(e&&M(e,"key")&&M(e,"text")&&M(e,"sourceIndex"))return e;const t=this._createLocationForSearch(e),r="string"==typeof e?e:this.searchTerm,{selectedSuggestion:o,selectedResult:s}=this,n=!e&&o&&s,i=n&&o.key===s.key&&o.sourceIndex===s.sourceIndex,a=n&&o.location;return i||a?o:{location:d.unwrap(t),text:t?"":r,sourceIndex:null,key:null}},a._getFirstResult=function(e){let t=null;return e&&e.some((e=>{const{results:r}=e,o=r[0],s=!!o;return s&&(t=o),s})),t},a._selectFirstResult=function(e){return this.autoSelect&&e?this.select(e):Promise.resolve(null)},a._suggestImmediate=function(e,t){return this.when().then((()=>this._getSuggestionsFromSources(e,t))).then((r=>{if(d.unwrap(t?.signal)?.aborted)return null;const o={activeSourceIndex:this.activeSourceIndex,searchTerm:e,numResults:0,numErrors:0,errors:[],results:[]};return this._formatResponse(o,r),o}))},a._formatSourceResponse=function(e,t,r){const o=t&&t.value||[],s=t&&t.error,n=this.allSources.at(r);if(s){const t={sourceIndex:r,source:n,error:s};e.errors.push(t),U.error(s),e.numErrors++}else{const t={sourceIndex:r,source:n,results:o};e.results.push(t),e.numResults+=o.length}},a._formatResponse=function(e,t,r){if(t)if(e.activeSourceIndex===Q){const o=r&&M(r,"sourceIndex")&&-1!==r.sourceIndex?r.sourceIndex:void 0;t.forEach(((t,r)=>{const s=void 0!==o?o:r;this._formatSourceResponse(e,t,s)}))}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)},a._getResultsFromSources=function(e,t){const{allSources:r}=this,o=!e.location&&M(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,s=[];if(!r.length){const e=new u("search:no-sources-defined","At least one source is required.",{allSources:r});return U.error(e),Promise.reject(e)}return o===Q?r.forEach(((r,o)=>{s.push(this._getResultsFromSource(e,o,t))})):s.push(this._getResultsFromSource(e,o,t)),g.eachAlways(s)},a._getSuggestionsFromSources=function(e,t){const{allSources:r,activeSourceIndex:o}=this,s=[];if(!r.length){const e=new u("suggest:no-sources-defined","At least one source is required.",{allSources:r});return U.error(e),Promise.reject(e)}return o===Q?r.forEach(((r,o)=>{s.push(this._getSuggestionsFromSource(e,o,t))})):s.push(this._getSuggestionsFromSource(e,o,t)),g.eachAlways(s)},a._getResultsFromSource=function(e,t,r){const o=this.allSources.at(t),{location:s=null}=e,n=this.view?.spatialReference||J,i=M(o,"maxResults")?o.maxResults:this.maxResults,a=!!(o instanceof L&&M(o,"exactMatch"))&&o.exactMatch,{view:l}=this;return o.getResults({view:l,sourceIndex:t,location:s,suggestResult:e,spatialReference:n,exactMatch:a,maxResults:i},r)},a._getSuggestionsFromSource=function(e,t,r){const o=this.allSources.at(t),s=M(o,"suggestionsEnabled")?o.suggestionsEnabled:this.suggestionsEnabled,n=e.length,i=M(o,"minSuggestCharacters")?o.minSuggestCharacters:this.minSuggestCharacters;if(s&&e.trim()&&n>=i){const s=this.view?.spatialReference||J,n=M(o,"maxSuggestions")?o.maxSuggestions:this.maxSuggestions,{view:i}=this,a=!!(o instanceof L&&M(o,"exactMatch"))&&o.exactMatch;return o.getSuggestions({view:i,sourceIndex:t,suggestTerm:e,spatialReference:s,maxSuggestions:n,exactMatch:a},r)}return Promise.resolve(null)},a._getLayerSourcePopupTemplate=function(e){const{layer:t}=e;if(t)return M(e,"popupTemplate")?e.popupTemplate:t.popupTemplate},a._getSourceIndexOfResult=function(e){const t=this.results;let r=null;return t.some((t=>t.results.some((o=>o===e&&(r=t.sourceIndex,!0))))),r},a._goToSearchResult=function(){var t=e._asyncToGenerator((function*(e){const t=!!e;this._abortGoTo();const r=new AbortController;this._gotoController=r;const o={target:{target:e},options:{animate:t,signal:r.signal}};yield this.callGoTo(o),this._gotoController=null}));function r(e){return t.apply(this,arguments)}return r}(),a._getDefaultSymbol=function(e){const{defaultSymbols:t}=this,r=e.feature?.geometry;if(d.isNone(r))return null;switch(r.type){case"point":case"multipoint":return t.point;case"polyline":return t.polyline;case"extent":case"polygon":return t.polygon;default:return null}},a._removeHighlight=function(){this._handles.remove(V)},a._getLayerView=function(){var t=e._asyncToGenerator((function*(e){const{view:t}=this;if(!e||!t||"building-component"===e.layer.type||"subtype-sublayer"===e.layer.type)return null;const{layer:r}=e;return yield t.when(),t.whenLayerView(r)}));function r(e){return t.apply(this,arguments)}return r}(),a._highlightFeature=function(e){const{graphic:t,layerView:r}=e,{attributes:o,layer:s}=t,{objectIdField:n}=s,i=o&&o[n],a=r.highlight(i||t);this._handles.add(a,V)},a._setResultFloor=function(e){const{view:t}=this,r=e.feature?.attributes,o=e.feature?.sourceLayer;if(o&&"floorInfo"in o&&o?.floorInfo?.floorField&&r){const e=r[o.floorInfo.floorField];t?.emit("select-result-floor",e)}},e._createClass(i,[{key:"activeSource",get:function(){return this.allSources.at(this.activeSourceIndex)??null}},{key:"activeSourceIndex",get:function(){return 1===this.allSources.length||!this.searchAllEnabled?0:Q},set:function(e){this._overrideIfSome("activeSourceIndex",e)}},{key:"allPlaceholder",get:function(){return this.messages?.allPlaceholder},set:function(e){this._overrideIfSome("allPlaceholder",e)}},{key:"allSources",get:function(){const{sources:e,defaultSources:t,includeDefaultSources:r}=this,o="function"==typeof r?r.call(null,{sources:e,defaultSources:t}):r?t.concat(e):e,s=this._get("allSources")||new j;return s.removeAll(),s.addMany(o.filter(Boolean)),s}},{key:"locationEnabled",get:function(){return this._get("locationEnabled")||F.supported()},set:function(e){if(void 0===e)return void this._clearOverride("locationEnabled");const t=F.supported();if(e&&!t){const e=new u("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});U.error(e)}this._override("locationEnabled",!!e&&t)}},{key:"placeholder",get:function(){const{allSources:e,activeSourceIndex:t,allPlaceholder:r}=this;if(t===Q)return r;const o=e.at(t);return o?o.placeholder:""}},{key:"searchTerm",get:function(){return this._get("searchTerm")||""},set:function(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}},{key:"state",get:function(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}},{key:"updating",get:function(){return null!=this._updatingPromise}}]),i}(A.GoToMixin(c.EventedMixin(a)));Z.ALL_INDEX=Q,t.__decorate([_.property()],Z.prototype,"_searching",void 0),t.__decorate([_.property()],Z.prototype,"_updatingPromise",void 0),t.__decorate([_.property({readOnly:!0,value:null})],Z.prototype,"activeSource",null),t.__decorate([_.property()],Z.prototype,"activeSourceIndex",null),t.__decorate([_.property()],Z.prototype,"allPlaceholder",null),t.__decorate([_.property({readOnly:!0})],Z.prototype,"allSources",null),t.__decorate([_.property()],Z.prototype,"autoNavigate",void 0),t.__decorate([_.property()],Z.prototype,"autoSelect",void 0),t.__decorate([_.property()],Z.prototype,"defaultPopupTemplate",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"defaultSources",void 0),t.__decorate([_.property()],Z.prototype,"defaultSymbols",void 0),t.__decorate([_.property()],Z.prototype,"includeDefaultSources",void 0),t.__decorate([_.property()],Z.prototype,"locationEnabled",null),t.__decorate([_.property()],Z.prototype,"maxInputLength",void 0),t.__decorate([_.property()],Z.prototype,"maxResults",void 0),t.__decorate([_.property()],Z.prototype,"maxSuggestions",void 0),t.__decorate([_.property()],Z.prototype,"messages",void 0),t.__decorate([_.property()],Z.prototype,"minSuggestCharacters",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"placeholder",null),t.__decorate([_.property()],Z.prototype,"popupEnabled",void 0),t.__decorate([_.property({type:n})],Z.prototype,"popupTemplate",void 0),t.__decorate([_.property({type:T})],Z.prototype,"portal",void 0),t.__decorate([_.property()],Z.prototype,"resultCount",void 0),t.__decorate([_.property()],Z.prototype,"resultGraphicEnabled",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"resultGraphic",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"results",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"selectedSuggestion",void 0),t.__decorate([_.property()],Z.prototype,"searchAllEnabled",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"selectedResult",void 0),t.__decorate([_.property()],Z.prototype,"searchTerm",null),t.__decorate([_.property({type:j})],Z.prototype,"sources",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"state",null),t.__decorate([_.property()],Z.prototype,"suggestionDelay",void 0),t.__decorate([_.property()],Z.prototype,"suggestionCount",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"suggestions",void 0),t.__decorate([_.property()],Z.prototype,"suggestionsEnabled",void 0),t.__decorate([_.property({readOnly:!0})],Z.prototype,"updating",null),t.__decorate([_.property()],Z.prototype,"view",void 0),t.__decorate([_.property()],Z.prototype,"clear",null),Z=t.__decorate([S.subclass(B)],Z);return Z}));
