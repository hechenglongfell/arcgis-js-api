/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/handleUtils","../../core/maybe","../../core/memoize","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../layers/support/ElevationQuery","../../support/elevationInfoUtils","./ElevationProfileLine"],(function(e,t,o,r,n,i,a,l,s,p,c,u,v,y,d){"use strict";let f=function(t){function l(e){var r;return(r=t.call(this,e)||this).type="input",r.color=new o("#00c8c8"),r.viewVisualizationEnabled=!1,r.numSamplesForPreview=50,r.numSamplesPerChunk=500,r.chartFillEnabled=!1,r.chartStrokeOffsetY=-1,r._getQueryElevationDependencies=i.memoize(((e,t,o,r,i)=>n.applySome(e,(e=>({elevationInfo:e,visibleLayers:t,view:o,stationary:r,spatialReference:i}))))),r}e._inheritsLoose(l,t);var s=l.prototype;return s.queryElevation=function(){var t=e._asyncToGenerator((function*(e,{noDataValue:t,signal:o}){const r=this.queryElevationDependencies;if(n.isNone(r))throw new Error("ElevationProfileLineInput: no dependencies");const{view:i,elevationInfo:a,spatialReference:l}=r;if("on-the-ground"===a.mode&&"3d"===i.type){const r=yield v.GeometryDescriptor.fromGeometry(e).project(l,o),a=i.elevationProvider;return r.coordinates.forEach((e=>{e.z=n.unwrapOr(a.getElevation(e.x,e.y,0,l,"ground"),0)})),{geometry:r.export(),noDataValue:t}}return{geometry:e,noDataValue:t}}));function o(e,o){return t.apply(this,arguments)}return o}(),s.attach=function(e){const o=()=>this._onChange();return r.handlesGroup([t.prototype.attach.call(this,e),this.watch("queryElevationDependencies",o),a.on(e,"view.elevationProvider","elevation-change",o)])},e._createClass(l,[{key:"queryElevationDependencies",get:function(){const e=this._viewModel.view;return n.isNone(e)?null:this._getQueryElevationDependencies(this._elevationInfo,this._visibleLayers,e,e.stationary,e.spatialReference)}},{key:"available",get:function(){return!this._viewModel.inputIsSketched}},{key:"_elevationInfo",get:function(){return n.applySome(this._viewModel.input,y.getGraphicEffectiveElevationInfo)}},{key:"_visibleLayers",get:function(){var e;const t=null==(e=this._viewModel)?void 0:e.view,o=n.applySome(t,(e=>{var t,o;return null==(t=e.map)||null==(o=t.allLayers)?void 0:o.filter((e=>e.visible)).toArray()}));return n.unwrapOr(o,[])}}]),l}(d.ElevationProfileLine);return t.__decorate([l.property({type:o,nonNullable:!0})],f.prototype,"color",void 0),t.__decorate([l.property()],f.prototype,"viewVisualizationEnabled",void 0),t.__decorate([l.property()],f.prototype,"queryElevationDependencies",null),t.__decorate([l.property()],f.prototype,"available",null),t.__decorate([l.property()],f.prototype,"_elevationInfo",null),t.__decorate([l.property()],f.prototype,"_visibleLayers",null),f=t.__decorate([u.subclass("esri.widgets.ElevationProfile.ElevationProfileLineInput")],f),f}));
