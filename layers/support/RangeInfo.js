/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,n,p,a,s,c){"use strict";e.RangeInfo=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).name=null,r.field=null,r.currentRangeExtent=null,r.fullRangeExtent=null,r.type="rangeInfo",r}return r._inheritsLoose(o,e),o}(t.JSONSupport),o.__decorate([n.property({type:String,json:{read:!0,write:!0}})],e.RangeInfo.prototype,"name",void 0),o.__decorate([n.property({type:String,json:{read:!0,write:!0}})],e.RangeInfo.prototype,"field",void 0),o.__decorate([n.property({type:[Number],json:{read:!0,write:!0}})],e.RangeInfo.prototype,"currentRangeExtent",void 0),o.__decorate([n.property({type:[Number],json:{read:!0,write:!0}})],e.RangeInfo.prototype,"fullRangeExtent",void 0),o.__decorate([n.property({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],e.RangeInfo.prototype,"type",void 0),e.RangeInfo=o.__decorate([c.subclass("esri.layers.support.RangeInfo")],e.RangeInfo);const u=e.RangeInfo;e.default=u,Object.defineProperty(e,"__esModule",{value:!0})}));
