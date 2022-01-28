/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/collectionUtils","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./VoxelIsosurface","./VoxelTransferFunctionStyle","./VoxelUniqueValue"],(function(e,r,t,s,o,u,i,n,l,a,c,p,y){"use strict";let d=function(r){function o(e){var s;return(s=r.call(this,e)||this).variableId=0,s.label=null,s.transferFunction=null,s.uniqueValues=new t,s.isosurfaces=new t,s}return e._inheritsLoose(o,r),e._createClass(o,[{key:"uniqueValues",set:function(e){this._set("uniqueValues",s.referenceSetter(e,this._get("uniqueValues"),t.ofType(y)))}},{key:"isosurfaces",set:function(e){this._set("isosurfaces",s.referenceSetter(e,this._get("isosurfaces"),t.ofType(c)))}}]),o}(o.JSONSupport);r.__decorate([u.property({type:l.Integer,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"variableId",void 0),r.__decorate([u.property({type:String,json:{write:!0}})],d.prototype,"label",void 0),r.__decorate([u.property({type:p,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],d.prototype,"transferFunction",void 0),r.__decorate([u.property({type:t.ofType(y),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],d.prototype,"uniqueValues",null),r.__decorate([u.property({type:t.ofType(c),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,r=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&r}}}}})],d.prototype,"isosurfaces",null),d=r.__decorate([a.subclass("esri.layers.support.VoxelVariableStyle")],d);return d}));
