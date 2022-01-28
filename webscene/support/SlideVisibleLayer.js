/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,o,t,i,l,a){"use strict";var c;e.SlideVisibleLayer=c=function(e){function s(r){var s;return(s=e.call(this,r)||this).id="",s.sublayerIds=null,s}return r._inheritsLoose(s,e),s.prototype.clone=function(){return new c({id:this.id,sublayerIds:t.clone(this.sublayerIds)})},s}(o.JSONSupport),s.__decorate([i.property({type:String,json:{write:!0}})],e.SlideVisibleLayer.prototype,"id",void 0),s.__decorate([i.property({type:[l.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],e.SlideVisibleLayer.prototype,"sublayerIds",void 0),e.SlideVisibleLayer=c=s.__decorate([a.subclass("esri.webscene.support.SlideVisibleLayer")],e.SlideVisibleLayer);const u=e.SlideVisibleLayer;e.default=u,Object.defineProperty(e,"__esModule",{value:!0})}));
