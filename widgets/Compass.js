/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Compass/CompassViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","../core/Logger","./support/jsxFactory","./support/widgetUtils"],(function(e,s,o,t,r,i,a,c,n,l,d,p,u,v,_){"use strict";const b={base:"esri-compass esri-widget--button esri-widget",text:"esri-icon-font-fallback-text",icon:"esri-compass__icon",rotationIcon:"esri-icon-dial",northIcon:"esri-icon-compass",widgetIcon:"esri-icon-locate-circled",interactive:"esri-interactive",disabled:"esri-disabled"};let g=function(s){function o(e,o){var t;return(t=s.call(this,e,o)||this).goToOverride=null,t.iconClass=b.widgetIcon,t.label=void 0,t.messages=null,t.view=null,t.viewModel=new l,t}e._inheritsLoose(o,s);var t=o.prototype;return t.reset=function(){return this.viewModel.reset()},t.render=function(){const{orientation:e,state:s}=this.viewModel,o="disabled"===s,t="compass"===("rotation"===s?"rotation":"compass"),r=o?-1:0,i={[b.disabled]:o,[b.interactive]:!o},a={[b.northIcon]:t,[b.rotationIcon]:!t},{messages:c}=this;return v.tsx("div",{bind:this,class:this.classes(b.base,i),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:r,"aria-label":c.reset,title:c.reset},v.tsx("span",{"aria-hidden":"true",class:this.classes(b.icon,a),styles:this._toRotationTransform(e)}),v.tsx("span",{class:b.text},c.reset))},t._reset=function(){this.viewModel.reset()},t._toRotationTransform=function(e){return{transform:`rotateZ(${e.z}deg)`}},o}(n);s.__decorate([o.aliasOf("viewModel.goToOverride")],g.prototype,"goToOverride",void 0),s.__decorate([a.property()],g.prototype,"iconClass",void 0),s.__decorate([a.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0),s.__decorate([a.property(),p.messageBundle("esri/widgets/Compass/t9n/Compass")],g.prototype,"messages",void 0),s.__decorate([o.aliasOf("viewModel.view")],g.prototype,"view",void 0),s.__decorate([a.property({type:l})],g.prototype,"viewModel",void 0),s.__decorate([d.accessibleHandler()],g.prototype,"_reset",null),g=s.__decorate([c.subclass("esri.widgets.Compass")],g);return g}));
