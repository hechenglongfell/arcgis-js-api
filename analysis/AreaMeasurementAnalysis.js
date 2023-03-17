/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Analysis","../core/arrayUtils","../core/Logger","../core/maybe","../core/unitUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/Polygon"],(function(e,r,t,o,s,n,i,l,u,a,p){"use strict";let c=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="area-measurement",t.unit=null,t}return e._inheritsLoose(t,r),t.prototype.clear=function(){this.geometry=null},e._createClass(t,[{key:"geometry",set:function(e){n.isNone(e)?this._set("geometry",null):(e.rings.length>1&&s.getLogger(this.declaredClass).warn("Measuring polygons with multiple rings is not supported."),this._set("geometry",e.clone()))}},{key:"requiredPropertiesForEditing",get:function(){if(n.isSome(this.geometry)&&1===this.geometry.rings.length){const e=this.geometry.rings[0];if(e.length<=2||!o.equals(e[0],e[e.length-1]))return[null]}return[this.geometry]}}]),t}(t);r.__decorate([l.property({type:["area-measurement"]})],c.prototype,"type",void 0),r.__decorate([l.property({value:null,type:p})],c.prototype,"geometry",null),r.__decorate([l.property({type:i.measurementAreaUnits,value:null})],c.prototype,"unit",void 0),r.__decorate([l.property({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=r.__decorate([a.subclass("esri.analysis.AreaMeasurementAnalysis")],c);return c}));
