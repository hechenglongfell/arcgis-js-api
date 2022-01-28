/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,t,i,n,o,s,a,r,l,p){"use strict";let c=function(t){function i(e){var i;return(i=t.call(this,e)||this)._viewpointHandle=null,i._handles=new n,i.group=null,i}e._inheritsLoose(i,t);var s=i.prototype;return s.initialize=function(){this._handles.add(o.on(this,"view.ui","expand",(e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse()})))},s.destroy=function(){this._viewpointHandle=null,this.view=null,this._handles.destroy(),this._handles=null},s._viewpointHandleChange=function(e){this._viewpointHandle&&(e?o.whenTrueOnce(this.view,"stationary",(()=>this._viewpointHandle.resume())):this._viewpointHandle.pause())},s._watchViewpoint=function(){const e="viewpoint";this._handles.remove(e),this._viewpointHandle=null;const{autoCollapse:t,view:i}=this;if(i&&t){const t="3d"===i.type?"camera":"viewpoint",n=o.pausable(i,t,(()=>this._collapse()));this._handles.add(n,e),this._viewpointHandle=n}},s._collapse=function(){this.expanded=!1},e._createClass(i,[{key:"autoCollapse",set:function(e){this._set("autoCollapse",e),this._watchViewpoint()}},{key:"expanded",set:function(e){const t=!!e;this._set("expanded",t);const i=this.get("view.ui");i&&i.emit("expand",{target:this}),this._viewpointHandleChange(t)}},{key:"state",get:function(){return this.get("view.ready")?"ready":"disabled"}},{key:"view",set:function(e){this._get("view")!==e&&(this._set("view",e),e&&o.whenTrueOnce(e,"ready",(()=>{this.view===e&&this._watchViewpoint()})))}}]),i}(i);t.__decorate([s.property({value:!1})],c.prototype,"autoCollapse",null),t.__decorate([s.property({value:!1})],c.prototype,"expanded",null),t.__decorate([s.property()],c.prototype,"group",void 0),t.__decorate([s.property({readOnly:!0})],c.prototype,"state",null),t.__decorate([s.property({value:null})],c.prototype,"view",null),c=t.__decorate([p.subclass("esri.widgets.Expand.ExpandViewModel")],c);return c}));
