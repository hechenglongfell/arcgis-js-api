/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../chunks/persistableUrlUtils"],(function(e,r,o,t,c,s,i,n,p,u,a,l){"use strict";var y;const d=t.strict()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});e.ObjectSymbol3DLayerResource=y=function(e){function o(){return e.apply(this,arguments)||this}return r._inheritsLoose(o,e),o.prototype.clone=function(){return new y({href:this.href,primitive:this.primitive})},o}(c.JSONSupport),o.__decorate([s.property({type:String,json:{read:l.read,write:l.write}})],e.ObjectSymbol3DLayerResource.prototype,"href",void 0),o.__decorate([u.enumeration(d)],e.ObjectSymbol3DLayerResource.prototype,"primitive",void 0),e.ObjectSymbol3DLayerResource=y=o.__decorate([a.subclass("esri.symbols.support.ObjectSymbol3DLayerResource")],e.ObjectSymbol3DLayerResource);const b="sphere";var h=e.ObjectSymbol3DLayerResource;e.default=h,e.defaultPrimitive=b,Object.defineProperty(e,"__esModule",{value:!0})}));
