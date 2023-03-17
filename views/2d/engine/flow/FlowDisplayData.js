/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Logger"],(function(t,e){"use strict";let i=function(){function i(t,e,i,s){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=i,this.pixelRatio=s}var s=i.prototype;return s.load=function(){var e=t._asyncToGenerator((function*(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},i=yield this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:i}}));function i(){return e.apply(this,arguments)}return i}(),s.attach=function(t){if("loaded"!==this.state.name)return void e.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const i=this.state.resources;i.attach(t),this.state={name:"attached",resources:i}},s.detach=function(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})},s.update=function(t){if(!this.flowStyle.isCompatible(t.flowStyle))return!1;return!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0)},i}();return i}));
