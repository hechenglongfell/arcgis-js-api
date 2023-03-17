/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../../../core/promiseUtils","../../../core/sql/WhereClause","../../../geometry/SpatialReference"],(function(e,t,n,r,i,s,a,u,l){"use strict";let c=function(c){function h(e){var t;return(t=c.call(this,e)||this).declaredClass="esri.arcade.featureset.actions.AttributeFilter",t._maxProcessing=1e3,t._parent=e.parentfeatureset,e.whereclause instanceof u.WhereClause?(t._whereclause=e.whereclause,t._whereClauseFunction=null):(t._whereClauseFunction=e.whereclause,t._whereclause=null),t}e._inheritsLoose(h,c);var o=h.prototype;return o._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.typeIdField="",this.objectIdField="",this.globalIdField="",this.spatialReference=new l({wkid:4326}),this.geometryType=i.layerGeometryEsriConstants.point)},o._getSet=function(){var t=e._asyncToGenerator((function*(e){if(null===this._wset){yield this._ensureLoaded();const t=yield this._parent._getFilteredSet("",null,this._whereclause,null,e);return this._checkCancelled(e),null!==this._whereClauseFunction?this._wset=new r(t._candidates.slice(0).concat(t._known.slice(0)),[],t._ordered,this._clonePageDefinition(t.pagesDefinition)):this._wset=new r(t._candidates.slice(0),t._known.slice(0),t._ordered,this._clonePageDefinition(t.pagesDefinition)),this._wset}return this._wset}));function n(e){return t.apply(this,arguments)}return n}(),o._isInFeatureSet=function(e){let t=this._parent?._isInFeatureSet(e);return t===i.IdState.NotInFeatureSet?t:(t=this._idstates[e],void 0===t?i.IdState.Unknown:t)},o._getFeature=function(e,t,n){return this._parent._getFeature(e,t,n)},o._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},o._featureFromCache=function(e){return this._parent._featureFromCache(e)},o.executeWhereClause=function(e){return this._whereclause?.testFeature(e)??!1},o.executeWhereClauseDeferred=function(){var t=e._asyncToGenerator((function*(e){if(null!==this._whereClauseFunction){const t=this._whereClauseFunction(e);return a.isPromiseLike(t),t}return this.executeWhereClause(e)}));function n(e){return t.apply(this,arguments)}return n}(),o._fetchAndRefineFeatures=function(){var t=e._asyncToGenerator((function*(e,t,n){const s=new r([],e,!1,null),a=Math.min(t,e.length);if(yield this._parent?._getFeatures(s,-1,a,n),this._checkCancelled(n),null==this._whereClauseFunction){for(let t=0;t<a;t++){const n=this._parent?._featureFromCache(e[t]);!0===this.executeWhereClause(n)?this._idstates[e[t]]=i.IdState.InFeatureSet:this._idstates[e[t]]=i.IdState.NotInFeatureSet}return"success"}const u=[];for(let r=0;r<a;r++){const t=this._parent?._featureFromCache(e[r]);u.push(yield this.executeWhereClauseDeferred(t))}for(let r=0;r<t;r++)!0===u[r]?this._idstates[e[r]]=i.IdState.InFeatureSet:this._idstates[e[r]]=i.IdState.NotInFeatureSet;return"success"}));function n(e,n,r){return t.apply(this,arguments)}return n}(),o._getFilteredSet=function(){var t=e._asyncToGenerator((function*(e,t,n,i,a){null!==this._whereClauseFunction||(null!==n?null!==this._whereclause&&(n=s.combine(this._whereclause,n)):n=this._whereclause),yield this._ensureLoaded();const u=yield this._parent._getFilteredSet(e,t,n,i,a);let l;return this._checkCancelled(a),l=null!==this._whereClauseFunction?new r(u._candidates.slice(0).concat(u._known.slice(0)),[],u._ordered,this._clonePageDefinition(u.pagesDefinition)):new r(u._candidates.slice(0),u._known.slice(0),u._ordered,this._clonePageDefinition(u.pagesDefinition)),l}));function n(e,n,r,i,s){return t.apply(this,arguments)}return n}(),o._stat=function(){var t=e._asyncToGenerator((function*(e,t,n,r,i,a,u){if(null!==this._whereClauseFunction)return null===i&&""===n&&null===r?this._manualStat(e,t,a,u):{calculated:!1};let l=this._whereclause;null!==i&&null!==this._whereclause&&(l=s.combine(this._whereclause,i));const c=yield this._parent._stat(e,t,n,r,l,a,u);return!1===c.calculated?null===i&&""===n&&null===r?this._manualStat(e,t,a,u):{calculated:!1}:c}));function n(e,n,r,i,s,a,u){return t.apply(this,arguments)}return n}(),o._canDoAggregates=function(){var t=e._asyncToGenerator((function*(e,t,n,r,i){return null===this._whereClauseFunction&&(null!==i?null!==this._whereclause&&(i=s.combine(this._whereclause,i)):i=this._whereclause,null!==this._parent&&this._parent._canDoAggregates(e,t,n,r,i))}));function n(e,n,r,i,s){return t.apply(this,arguments)}return n}(),o._getAggregatePagesDataSourceDefinition=function(){var n=e._asyncToGenerator((function*(e,n,r,i,a,u,l){if(null===this._parent)throw new t.FeatureSetError(t.FeatureSetErrorCodes.NeverReach);return null!==a?null!==this._whereclause&&(a=s.combine(this._whereclause,a)):a=this._whereclause,this._parent._getAggregatePagesDataSourceDefinition(e,n,r,i,a,u,l)}));function r(e,t,r,i,s,a,u){return n.apply(this,arguments)}return r}(),h.registerAction=function(){n._featuresetFunctions.filter=function(e){if("function"==typeof e)return new h({parentfeatureset:this,whereclause:e});let t=null;return e instanceof u.WhereClause&&(t=e),new h({parentfeatureset:this,whereclause:t})}},h}(n);return c}));
