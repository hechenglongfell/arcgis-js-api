/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./support/ColormapInfo","./support/colorRampUtils"],(function(o,r,e,t,a,c,s,p,n,l){"use strict";var u;let i=u=function(r){function e(o){var e;return(e=r.call(this,o)||this).colormapInfos=null,e.type="raster-colormap",e}o._inheritsLoose(e,r),e.createFromColormap=function(o,r){if(!o)return null;const e=5===o[0].length,t=[...o].sort((o=>o[0][0]-o[1][0])).map((o=>n.fromJSON({value:o[0],color:e?o.slice(1,5):o.slice(1,4).concat([255]),label:r?r[o[0]]??"":o[0]})));return new u({colormapInfos:t})},e.createFromColorramp=function(o){const r=l.convertColorRampToColormap(o);return u.createFromColormap(r)};var t=e.prototype;return t.clone=function(){return new u({colormapInfos:this.colormapInfos.map((o=>o.toJSON()))})},t.extractColormap=function(){return this.colormapInfos.map((({value:o,color:r})=>[o,r.r,r.g,r.b,r.a>1?r.a:255*r.a&255])).sort(((o,r)=>o[0]-r[0]))},e}(e.JSONSupport);r.__decorate([t.property({type:[n],json:{write:!0}})],i.prototype,"colormapInfos",void 0),r.__decorate([s.enumeration({rasterColormap:"raster-colormap"})],i.prototype,"type",void 0),i=u=r.__decorate([p.subclass("esri.renderers.RasterColormapRenderer")],i);return i}));
