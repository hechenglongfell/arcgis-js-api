/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/uuid","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./BuildingFilterAuthoringInfo","./BuildingFilterAuthoringInfoCheckbox","./BuildingFilterBlock"],(function(e,r,t,o,i,n,s,c,p,l,u,d,a,y){"use strict";var f;const h=t.ofType(y);let g=f=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).description=null,e.filterBlocks=null,e.id=n.generateUUID(),e.name=null,e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new f({description:this.description,filterBlocks:i.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:i.clone(this.filterAuthoringInfo)})},t}(o.JSONSupport);return r.__decorate([s.property({type:String,json:{write:!0}})],g.prototype,"description",void 0),r.__decorate([s.property({type:h,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),r.__decorate([s.property({types:{key:"type",base:d,typeMap:{checkbox:a}},json:{read:e=>{switch(e&&e.type){case"checkbox":return a.fromJSON(e);default:return null}},write:!0}})],g.prototype,"filterAuthoringInfo",void 0),r.__decorate([s.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),r.__decorate([s.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=f=r.__decorate([u.subclass("esri.layers.support.BuildingFilter")],g),g}));
