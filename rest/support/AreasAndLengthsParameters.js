/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/Polygon"],(function(e,t,r,s,o,i,n,a,p){"use strict";const l=new r.JSONMap({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),c=new r.JSONMap({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),u=new r.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let y=function(t){function r(e){var r;return(r=t.call(this,e)||this).areaUnit=null,r.calculationType=null,r.lengthUnit=null,r.polygons=null,r}return e._inheritsLoose(r,t),r.prototype.toJSON=function(){const e={};if(this.polygons&&this.polygons.length>0){const t=this.polygons.map((e=>e.toJSON()));e.polygons=JSON.stringify(t);const r=this.polygons[0].spatialReference;e.sr=r.wkid?r.wkid:JSON.stringify(r.toJSON())}if(this.lengthUnit&&(e.lengthUnit=u.toJSON(this.lengthUnit)),this.areaUnit){const t=c.toJSON(this.areaUnit);e.areaUnit="string"==typeof t?JSON.stringify({areaUnit:t}):t}return this.calculationType&&(e.calculationType=l.toJSON(this.calculationType)),e},r}(s.JSONSupport);t.__decorate([o.property({type:String,json:{write:!0}})],y.prototype,"areaUnit",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],y.prototype,"calculationType",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],y.prototype,"lengthUnit",void 0),t.__decorate([o.property({type:[p],json:{write:!0}})],y.prototype,"polygons",void 0),y=t.__decorate([a.subclass("esri.rest.support.AreasAndLengthsParameters")],y);return y}));
