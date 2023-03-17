/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,l,s,i,p){"use strict";var c;let n=c=function(o){function t(e){var t;return(t=o.call(this,e)||this).floorField=null,t.viewAllMode=!1,t.viewAllLevelIds=new r,t}return e._inheritsLoose(t,o),t.prototype.clone=function(){return new c({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})},t}(t.JSONSupport);o.__decorate([l.property({type:String,json:{write:!0}})],n.prototype,"floorField",void 0),o.__decorate([l.property({json:{read:!1,write:!1}})],n.prototype,"viewAllMode",void 0),o.__decorate([l.property({json:{read:!1,write:!1}})],n.prototype,"viewAllLevelIds",void 0),n=c=o.__decorate([p.subclass("esri.layers.support.LayerFloorInfo")],n);return n}));
