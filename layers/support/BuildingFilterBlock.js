/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./BuildingFilterMode","./BuildingFilterModeSolid","./BuildingFilterModeWireFrame","./BuildingFilterModeXRay"],(function(e,r,t,o,i,s,l,n,p,u,c,a,d){"use strict";var y;const f={nonNullable:!0,types:{key:"type",base:u,typeMap:{solid:c,"wire-frame":a,"x-ray":d}},json:{read:e=>{switch(e&&e.type){case"solid":return c.fromJSON(e);case"wireFrame":return a.fromJSON(e);case"x-ray":return d.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let S=y=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).filterExpression=null,e.filterMode=new c,e.title="",e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new y({filterExpression:this.filterExpression,filterMode:o.clone(this.filterMode),title:this.title})},t}(t.JSONSupport);return r.__decorate([i.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"filterExpression",void 0),r.__decorate([i.property(f)],S.prototype,"filterMode",void 0),r.__decorate([i.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"title",void 0),S=y=r.__decorate([p.subclass("esri.layers.support.BuildingFilterBlock")],S),S}));
