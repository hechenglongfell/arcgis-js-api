/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,t,o,r,s,i,n,a,p,c){"use strict";let d=function(t){function o(e){var o;return(o=t.call(this,e)||this)._handles=new r,o.state="pending",o.url="",o}e._inheritsLoose(o,t);var i=o.prototype;return i.initialize=function(){this._handles.add([s.init(this,["extension","name"],(()=>this._setFormattedFileName()))])},i.destroy=function(){this._handles.destroy()},i._setFormattedFileName=function(){if(!this.name||!this.extension)return;let e=this.name+"."+this.extension;this.count&&(e=this.name+"("+this.count+")."+this.extension),this.formattedName=e},o}(o);t.__decorate([i.property()],d.prototype,"count",void 0),t.__decorate([i.property()],d.prototype,"error",void 0),t.__decorate([i.property()],d.prototype,"extension",void 0),t.__decorate([i.property()],d.prototype,"formattedName",void 0),t.__decorate([i.property()],d.prototype,"name",void 0),t.__decorate([i.property()],d.prototype,"state",void 0),t.__decorate([i.property()],d.prototype,"url",void 0),d=t.__decorate([c.subclass("esri.widgets.print.FileLink")],d);return d}));
