/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/collectionUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../analysisTools/lineOfSight/LineOfSightTool","./LineOfSightViewData"],(function(e,t,r,i,o,s,n,c,a,l,p,g){"use strict";e.LineOfSight=function(e){function r(t){var r;return(r=e.call(this,t)||this).observer=null,r.viewData=new g.LineOfSightViewData,r.visible=!0,r}return t._inheritsLoose(r,e),t._createClass(r,[{key:"targets",get:function(){return this._get("targets")||new p.LineOfSightTargetCollection},set:function(e){this._set("targets",o.referenceSetter(e,this.targets,p.LineOfSightTargetCollection))}}]),r}(i),r.__decorate([s.property()],e.LineOfSight.prototype,"observer",void 0),r.__decorate([s.property({type:p.LineOfSightTargetCollection,cast:o.castForReferenceSetter,nonNullable:!0})],e.LineOfSight.prototype,"targets",null),r.__decorate([s.property()],e.LineOfSight.prototype,"viewData",void 0),r.__decorate([s.property()],e.LineOfSight.prototype,"visible",void 0),e.LineOfSight=r.__decorate([l.subclass("esri.views.3d.interactive.graphics.LineOfSight.LineOfSight")],e.LineOfSight),Object.defineProperty(e,"__esModule",{value:!0})}));
