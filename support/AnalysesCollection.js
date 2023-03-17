/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Logger","../core/maybe","../core/accessorSupport/ensureType","../core/arrayUtils","../core/Error","../core/has","../core/accessorSupport/decorators/subclass","../core/support/OwningCollection"],(function(e,o,n,r,s,t,l,i,a,c,u){"use strict";e.AnalysesCollection=function(e){function n(o){var n;return(n=e.call(this,o)||this).handles.add(n.on("before-add",(e=>{s.isNone(e.item)||e.item.parent===n.owner&&(r.getLogger(n.declaredClass).warn("Analysis inside the collection must be unique. Not adding this element again."),e.preventDefault())}))),n}o._inheritsLoose(n,e);var t=n.prototype;return t._own=function(e){e.parent=this.owner},t._release=function(e){e.parent=null},n}(u.OwningCollection),e.AnalysesCollection=n.__decorate([c.subclass("esri.support.AnalysesCollection")],e.AnalysesCollection),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
