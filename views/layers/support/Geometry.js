/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../geometry/Geometry","../../../geometry/support/jsonUtils","./ClipArea","../../../geometry/Extent","../../../geometry/Polygon"],(function(e,r,t,o,s,n,p,y,c,a,i,u,l){"use strict";var g;const m={base:c,key:"type",typeMap:{extent:u,polygon:l}};let _=g=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).type="geometry",e.geometry=null,e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new g({geometry:this.geometry.clone()})},e._createClass(t,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),t}(i);r.__decorate([o.property({types:m,json:{read:a.fromJSON,write:!0}})],_.prototype,"geometry",void 0),r.__decorate([o.property({readOnly:!0})],_.prototype,"version",null),_=g=r.__decorate([y.subclass("esri.views.layers.support.Geometry")],_);return _}));
