/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../../../support/elevationInfoUtils","../snappingUtils","./queryEngineUtils","./snappingCandidateElevationAlignment","./snappingCandidateElevationFilter","./symbologySnappingCandidates"],(function(e,t,n,o,i,r,a,p,l,s,c,u,y,g,d,S,h){"use strict";e.FeatureCollectionSnappingSource=function(e){t._inheritsLoose(o,e);var n=o.prototype;function o(t){var n;return(n=e.call(this,t)||this).view=null,n._layerView3D=null,n}return n.initialize=function(){const{view:e}=this,{layer:t}=this.layerSource;i.isSome(e)&&"3d"===e.type&&"subtype-group"!==t.type&&(e.whenLayerView(t).then((e=>this._layerView3D=e)),this.addHandles([e.elevationProvider.on("elevation-change",(({context:e})=>{const{elevationInfo:n}=t;u.elevationContextAffectsAlignment(e,n)&&this._snappingElevationAligner.notifyElevationSourceChange()})),a.watch((()=>t.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),a.initial),a.watch((()=>i.isSome(this._layerView3D)?this._layerView3D.processor?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),a.initial),a.on((()=>i.toNullable(this._layerView3D)?.layer),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))]))},n.refresh=function(){},n.fetchCandidates=function(){var e=t._asyncToGenerator((function*(e,t){const{layer:n}=this.layerSource,o=n.source;if(!o?.querySnapping)return[];const a=y.makeFilter(n),p=y.makeSnappingQuery(e,i.unwrap(this.view)?.type??"2d",a),l=yield o.querySnapping(p,{signal:t});r.throwIfAborted(t);const s=yield this._snappingElevationAligner.alignCandidates(l.candidates,t);r.throwIfAborted(t);const c=yield this._symbologySnappingFetcher.fetch(s,t);r.throwIfAborted(t);const u=0===c.length?s:[...s,...c],d=this._snappingElevationFilter.filter(p,u),S=this._getGroundElevation;return d.map((e=>g.convertSnappingCandidate(e,S)))}));function n(t,n){return e.apply(this,arguments)}return n}(),t._createClass(o,[{key:"availability",get:function(){return 1}},{key:"updating",get:function(){return this.layerSource.updating}},{key:"_snappingElevationAligner",get:function(){const{view:e}=this,{layer:n}=this.layerSource,o=i.isSome(e)&&"3d"===e.type;if(!o||"subtype-group"===n.type)return d.getSnappingCandidateElevationAligner();const a=function(){var o=t._asyncToGenerator((function*(t,o){return(yield r.whenOrAbort(e.whenLayerView(n),o)).elevationAlignPointsInFeatures(t,o)}));return function(e,t){return o.apply(this,arguments)}}();return d.getSnappingCandidateElevationAligner(o,{elevationInfo:n.elevationInfo,alignPointsInFeatures:a,spatialReference:e.spatialReference})}},{key:"_snappingElevationFilter",get:function(){const{view:e}=this,t=i.isSome(e)&&"3d"===e.type&&"subtype-group"!==this.layerSource.layer.type;return S.getSnappingCandidateElevationFilter(t)}},{key:"_symbologySnappingFetcher",get:function(){const{view:e}=this,{layer:n}=this.layerSource;return i.isSome(e)&&"3d"===e.type&&"subtype-group"!==n.type?h.getSymbologySnappingCandidatesFetcher(this._symbologySnappingSupported,function(){var o=t._asyncToGenerator((function*(t,o){const i=yield e.whenLayerView(n);return r.throwIfAborted(o),i.queryForSymbologySnapping({candidates:t,spatialReference:e.spatialReference},o)}));return function(e,t){return o.apply(this,arguments)}}()):h.getSymbologySnappingCandidatesFetcher()}},{key:"_symbologySnappingSupported",get:function(){return i.isSome(this._layerView3D)&&this._layerView3D.symbologySnappingSupported}},{key:"_getGroundElevation",get:function(){return g.makeGetGroundElevation(this.view)}}]),o}(o),n.__decorate([p.property({constructOnly:!0})],e.FeatureCollectionSnappingSource.prototype,"layerSource",void 0),n.__decorate([p.property({constructOnly:!0})],e.FeatureCollectionSnappingSource.prototype,"view",void 0),n.__decorate([p.property()],e.FeatureCollectionSnappingSource.prototype,"_snappingElevationAligner",null),n.__decorate([p.property()],e.FeatureCollectionSnappingSource.prototype,"_snappingElevationFilter",null),n.__decorate([p.property()],e.FeatureCollectionSnappingSource.prototype,"_symbologySnappingFetcher",null),n.__decorate([p.property()],e.FeatureCollectionSnappingSource.prototype,"_layerView3D",void 0),n.__decorate([p.property()],e.FeatureCollectionSnappingSource.prototype,"_symbologySnappingSupported",null),n.__decorate([p.property()],e.FeatureCollectionSnappingSource.prototype,"_getGroundElevation",null),e.FeatureCollectionSnappingSource=n.__decorate([c.subclass("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],e.FeatureCollectionSnappingSource),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
