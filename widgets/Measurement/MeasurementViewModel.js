/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../properties/defaultUnit"],(function(e,t,r,o,i,n,a,s,c){"use strict";let p=function(t){function r(e){var r;return(r=t.call(this,e)||this).activeTool=null,r.activeViewModel=null,r.view=null,r}return e._inheritsLoose(r,t),e._createClass(r,[{key:"areaUnit",get:function(){return this.defaultUnit},set:function(e){this._overrideIfSome("areaUnit",e)}},{key:"linearUnit",get:function(){return this.defaultUnit},set:function(e){this._overrideIfSome("linearUnit",e)}},{key:"state",get:function(){const{activeViewModel:e}=this;return e?e.state:"disabled"}}]),r}(r);t.__decorate([i.property({type:["area","distance","direct-line"]})],p.prototype,"activeTool",void 0),t.__decorate([i.property()],p.prototype,"activeViewModel",void 0),t.__decorate([i.property({type:o.measurementAreaUnits})],p.prototype,"areaUnit",null),t.__decorate([i.property(c.defaultUnitPropertyMetadata)],p.prototype,"defaultUnit",void 0),t.__decorate([i.property({type:o.measurementLengthUnits})],p.prototype,"linearUnit",null),t.__decorate([i.property({readOnly:!0})],p.prototype,"state",null),t.__decorate([i.property()],p.prototype,"view",void 0),p=t.__decorate([s.subclass("esri.widgets.Measurement.MeasurementViewModel")],p);return p}));
