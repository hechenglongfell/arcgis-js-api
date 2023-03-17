/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Handles","../../core/maybe","../../core/reactiveUtils","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/projection","../../properties/defaultUnit","./DistanceMeasurement2DTool","../support/InteractiveToolViewModel"],(function(e,t,i,n,s,o,r,a,l,u,c,d,p,h){"use strict";let y=function(t){function r(e){var n;return(n=t.call(this,e)||this).supportedViewType="2d",n.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views.",n._handles=new i,n.geodesicDistanceThreshold=1e5,n}e._inheritsLoose(r,t);var a=r.prototype;return a.initialize=function(){this._handles.add([s.watch((()=>n.unwrap(this.view)?.spatialReference),(()=>this.clear())),s.watch((()=>this.unit),(e=>{n.isSome(this.tool)&&(this.tool.unit=e)}),s.initial),s.watch((()=>this.geodesicDistanceThreshold),(e=>{n.isSome(this.tool)&&(this.tool.geodesicDistanceThreshold=e)}),s.initial)])},a.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},a.start=function(){var t=e._asyncToGenerator((function*(){const e=this.view;n.isSome(e)&&(yield s.whenOnce((()=>e.ready)),p.isProjectionEngineRequired(e.spatialReference)&&(yield c.load())),this.createTool({interactive:!0})}));function i(){return t.apply(this,arguments)}return i}(),a.clear=function(){this.removeTool()},a.constructTool=function(){return new p.DistanceMeasurement2DTool({view:n.unwrap(this.view),visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})},a._validateUnit=function(e){return this.unitOptions.includes(e)?e:this.unitOptions.includes(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]},a._validateUnits=function(e=[]){const t=e.filter((e=>o.measurementLengthUnits.includes(e)));return 0===t.length?o.measurementLengthUnits.slice():t},e._createClass(r,[{key:"measurement",get:function(){return n.isSome(this.tool)?this.tool.measurement:null}},{key:"measurementLabel",get:function(){return n.isSome(this.tool)?this.tool.measurementLabel:null}},{key:"state",get:function(){return this.disabled||n.isNone(this.view)||!p.isSupported(this.view?.spatialReference)?"disabled":n.isSome(this.tool)&&this.measurement?this.tool.active?"measuring":"measured":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){this._overrideIfSome("unit",this._validateUnit(e))}},{key:"unitOptions",get:function(){return o.measurementLengthUnits},set:function(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}}]),r}(h.InteractiveToolViewModel);t.__decorate([r.property(d.defaultUnitPropertyMetadata)],y.prototype,"defaultUnit",void 0),t.__decorate([r.property({type:Number})],y.prototype,"geodesicDistanceThreshold",void 0),t.__decorate([r.property({readOnly:!0})],y.prototype,"measurement",null),t.__decorate([r.property({readOnly:!0})],y.prototype,"measurementLabel",null),t.__decorate([r.property({readOnly:!0})],y.prototype,"state",null),t.__decorate([r.property({type:String})],y.prototype,"unit",null),t.__decorate([r.property({type:[String]})],y.prototype,"unitOptions",null),y=t.__decorate([u.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],y);return y}));
