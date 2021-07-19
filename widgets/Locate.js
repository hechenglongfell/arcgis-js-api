/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Locate/LocateViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","./support/widgetUtils"],(function(e,o,t,a,s,i,r,l,c,n,d,p,u,g,v){"use strict";const _={base:"esri-locate esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-icon",locate:"esri-icon-locate",loading:"esri-icon-loading-indicator",rotating:"esri-rotating",widgetIcon:"esri-icon-north-navigation",disabled:"esri-disabled",hidden:"esri-hidden"};let b=function(o){function t(e,t){var a;return(a=o.call(this,e,t)||this).geolocationOptions=null,a.goToLocationEnabled=null,a.goToOverride=null,a.graphic=null,a.iconClass=_.widgetIcon,a.label=void 0,a.messages=null,a.messagesCommon=null,a.popupEnabled=null,a.scale=null,a.useHeadingEnabled=null,a.view=null,a.viewModel=new n,a}e._inheritsLoose(t,o);var a=t.prototype;return a.cancelLocate=function(){},a.locate=function(){},a.render=function(){const e=this.get("viewModel.state"),o="locating"===e,t={[_.disabled]:"disabled"===e,[_.hidden]:"feature-unsupported"===e},a={[_.loading]:o,[_.rotating]:o,[_.locate]:!o},s="locating"===e?this.messagesCommon.cancel:this.messages.title;return g.tsx("div",{bind:this,class:this.classes(_.base,t),hidden:"feature-unsupported"===e,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":s,title:s},g.tsx("span",{"aria-hidden":"true",class:this.classes(_.icon,a)}),g.tsx("span",{class:_.text},this.messages.title))},a._locate=function(){const{viewModel:e}=this;"locating"===e.state?e.cancelLocate():e.locate()},t}(c);return o.__decorate([t.aliasOf("viewModel.geolocationOptions")],b.prototype,"geolocationOptions",void 0),o.__decorate([t.aliasOf("viewModel.goToLocationEnabled")],b.prototype,"goToLocationEnabled",void 0),o.__decorate([t.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0),o.__decorate([t.aliasOf("viewModel.graphic")],b.prototype,"graphic",void 0),o.__decorate([r.property()],b.prototype,"iconClass",void 0),o.__decorate([r.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0),o.__decorate([r.property(),p.messageBundle("esri/widgets/Locate/t9n/Locate")],b.prototype,"messages",void 0),o.__decorate([r.property(),p.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0),o.__decorate([t.aliasOf("viewModel.popupEnabled")],b.prototype,"popupEnabled",void 0),o.__decorate([t.aliasOf("viewModel.scale")],b.prototype,"scale",void 0),o.__decorate([t.aliasOf("viewModel.useHeadingEnabled")],b.prototype,"useHeadingEnabled",void 0),o.__decorate([t.aliasOf("viewModel.view")],b.prototype,"view",void 0),o.__decorate([r.property({type:n}),u.vmEvent(["locate","locate-error"])],b.prototype,"viewModel",void 0),o.__decorate([t.aliasOf("viewModel.cancelLocate")],b.prototype,"cancelLocate",null),o.__decorate([t.aliasOf("viewModel.locate")],b.prototype,"locate",null),o.__decorate([d.accessibleHandler()],b.prototype,"_locate",null),b=o.__decorate([l.subclass("esri.widgets.Locate")],b),b}));
