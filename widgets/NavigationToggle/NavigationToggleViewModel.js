/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,t,i,o,r,a,n,s){"use strict";let c=function(t){function i(e){var i;return(i=t.call(this,e)||this).navigationMode="pan",i.view=null,i}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this.own(o.when((()=>this.view?.inputManager),(()=>this._setNavigationMode())))},r.destroy=function(){this.view=null},r.toggle=function(){"disabled"!==this.state&&(this.navigationMode="pan"!==this.navigationMode?"pan":"rotate",this._setNavigationMode())},r._setNavigationMode=function(){this.get("view.inputManager").primaryDragAction="pan"===this.navigationMode?"pan":"rotate"},e._createClass(i,[{key:"state",get:function(){return this.get("view.ready")&&"3d"===this.view?.type?"ready":"disabled"}}]),i}(i);t.__decorate([r.property({readOnly:!0})],c.prototype,"state",null),t.__decorate([r.property()],c.prototype,"navigationMode",void 0),t.__decorate([r.property()],c.prototype,"view",void 0),c=t.__decorate([s.subclass("esri.widgets.NavigationToggleViewModel")],c);return c}));
