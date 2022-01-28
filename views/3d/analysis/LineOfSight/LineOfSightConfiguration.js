/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Color","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,i,n,p,u,c,d){"use strict";e.LineOfSightConfiguration=function(e){function r(o){var r;return(r=e.call(this,o)||this).innerWidth=2,r.outerWidth=8,r.visibleInnerColor=new t([3,252,111,1]),r.visibleOuterColor=new t([3,252,111,.15]),r.occludedInnerColor=new t([252,3,69,1]),r.occludedOuterColor=new t([252,3,69,.1]),r.undefinedInnerColor=new t([255,255,255,1]),r.undefinedOuterColor=new t([127,127,127,.2]),r}return o._inheritsLoose(r,e),r}(i),r.__decorate([n.property({type:Number})],e.LineOfSightConfiguration.prototype,"innerWidth",void 0),r.__decorate([n.property({type:Number})],e.LineOfSightConfiguration.prototype,"outerWidth",void 0),r.__decorate([n.property({type:t})],e.LineOfSightConfiguration.prototype,"visibleInnerColor",void 0),r.__decorate([n.property({type:t})],e.LineOfSightConfiguration.prototype,"visibleOuterColor",void 0),r.__decorate([n.property({type:t})],e.LineOfSightConfiguration.prototype,"occludedInnerColor",void 0),r.__decorate([n.property({type:t})],e.LineOfSightConfiguration.prototype,"occludedOuterColor",void 0),r.__decorate([n.property({type:t})],e.LineOfSightConfiguration.prototype,"undefinedInnerColor",void 0),r.__decorate([n.property({type:t})],e.LineOfSightConfiguration.prototype,"undefinedOuterColor",void 0),e.LineOfSightConfiguration=r.__decorate([d.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightConfiguration")],e.LineOfSightConfiguration),Object.defineProperty(e,"__esModule",{value:!0})}));
