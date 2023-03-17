/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../views/3d/environment/SunnyWeather","../../views/3d/environment/weather","../lightingTypes","../SunLighting"],(function(e,t,r,n,o,i,s,p,c,l,a,u){"use strict";var h;e.SlideEnvironment=h=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).lighting=new u,t.weather=new c,t}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new h({lighting:o.clone(this.lighting),weather:o.clone(this.weather)})},r}(n.JSONSupport),r.__decorate([i.property({types:a.lightingTypes,json:{write:!0}})],e.SlideEnvironment.prototype,"lighting",void 0),r.__decorate([i.property({types:l.weatherTypes,json:{write:!0}})],e.SlideEnvironment.prototype,"weather",void 0),e.SlideEnvironment=h=r.__decorate([p.subclass("esri.webscene.Environment")],e.SlideEnvironment),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
