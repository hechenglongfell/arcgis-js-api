/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,t,i,o,a,r,s,n,c,d){"use strict";let l=function(t){function i(e){var i;return(i=t.call(this,e)||this)._handles=new o,i.navigationMode="pan",i.view=null,i}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this._handles.add(a.when(this,"view.inputManager",this._setNavigationMode.bind(this)))},r.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},r.toggle=function(){"disabled"!==this.state&&(this.navigationMode="pan"!==this.navigationMode?"pan":"rotate",this._setNavigationMode())},r._setNavigationMode=function(){this.get("view.inputManager").primaryDragAction="pan"===this.navigationMode?"pan":"rotate"},e._createClass(i,[{key:"state",get:function(){return this.get("view.ready")&&"3d"===this.view.type?"ready":"disabled"}}]),i}(i);t.__decorate([r.property({readOnly:!0})],l.prototype,"state",null),t.__decorate([r.property()],l.prototype,"navigationMode",void 0),t.__decorate([r.property()],l.prototype,"view",void 0),l=t.__decorate([d.subclass("esri.widgets.NavigationToggleViewModel")],l);return l}));
