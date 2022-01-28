/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../layers/support/commonProperties","../../layers/support/ExportImageParameters","../../renderers/support/clickToleranceUtils","../../support/arcadeOnDemand","./support/popupUtils","../support/floorFilterUtils"],(function(e,r,t,o,a,s,n,i,p,l,c,u,y,m,d,f,h){"use strict";const v=e=>{let i=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var n=t.prototype;return n.initialize=function(){this.exportImageParameters=new y.ExportImageParameters({layer:this.layer})},n.destroy=function(){this.exportImageParameters.destroy(),this.exportImageParameters=null},n.fetchPopupFeatures=function(){var e=r._asyncToGenerator((function*(e,t){var n=this;const{layer:i}=this;if(!e)return Promise.reject(new o("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const p=this.get("view.scale"),l=[],c=function(){var e=r._asyncToGenerator((function*(e){const r=0===e.minScale||p<=e.minScale,o=0===e.maxScale||p>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(c);else if(e.popupEnabled){const r=f.getFetchPopupTemplate(e,{...t,defaultPopupTemplateEnabled:!1});a.isSome(r)&&l.unshift({sublayer:e,popupTemplate:r})}}));return function(r){return e.apply(this,arguments)}}(),u=i.sublayers.toArray().reverse().map(c);yield Promise.all(u);const y=l.map(function(){var o=r._asyncToGenerator((function*({sublayer:r,popupTemplate:o}){yield r.load().catch((()=>{}));const s=r.createQuery(),i=a.isSome(t)?t.event:null,p=m.calculateTolerance({renderer:r.renderer,event:i}),l=n.createFetchPopupFeaturesQueryGeometry(e,p);if(s.geometry=l,s.outFields=yield f.getRequiredFields(r,o),"map-image"===n.layer.type&&"floors"in n.view){var c,u;const e=null==(c=n.view)||null==(u=c.floors)?void 0:u.clone(),t=h.getLayerFloorFilterClause(e,r);a.isSome(t)&&(s.where=s.where?`(${s.where}) AND (${t})`:t)}const y=yield n._loadArcadeModules(o);y&&y.arcadeUtils.hasGeometryOperations(o)||(s.maxAllowableOffset=l.width/p);return(yield r.queryFeatures(s)).features}));return function(e){return o.apply(this,arguments)}}());return(yield s.eachAlways(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}));function t(r,t){return e.apply(this,arguments)}return t}(),n.canResume=function(){var r;return!!e.prototype.canResume.call(this)&&(null==(r=this.timeExtent)||!r.isEmpty)},n._loadArcadeModules=function(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return d.loadArcade()},r._createClass(t,[{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}}]),t}(e);return t.__decorate([n.property()],i.prototype,"exportImageParameters",void 0),t.__decorate([n.property({readOnly:!0})],i.prototype,"exportImageVersion",null),t.__decorate([n.property()],i.prototype,"layer",void 0),t.__decorate([n.property()],i.prototype,"suspended",void 0),t.__decorate([n.property(u.combinedViewLayerTimeExtentProperty)],i.prototype,"timeExtent",void 0),i=t.__decorate([c.subclass("esri.views.layers.MapImageLayerView")],i),i};e.MapImageLayerView=v,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})}));
