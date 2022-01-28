/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./PointSizeAlgorithm"],(function(t,e,o,r,i,s,a,l,p,c){"use strict";var n;t.PointSizeSplatAlgorithm=n=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).type="splat",e.scaleFactor=1,e}return e._inheritsLoose(o,t),o.prototype.clone=function(){return new n({scaleFactor:this.scaleFactor})},o}(c.default),o.__decorate([l.enumeration({pointCloudSplatAlgorithm:"splat"})],t.PointSizeSplatAlgorithm.prototype,"type",void 0),o.__decorate([r.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],t.PointSizeSplatAlgorithm.prototype,"scaleFactor",void 0),t.PointSizeSplatAlgorithm=n=o.__decorate([p.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],t.PointSizeSplatAlgorithm);const u=t.PointSizeSplatAlgorithm;t.default=u,Object.defineProperty(t,"__esModule",{value:!0})}));
