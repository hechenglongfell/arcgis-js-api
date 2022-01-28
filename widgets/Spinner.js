/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/maybe","../core/promiseUtils","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./Spinner/SpinnerViewModel","./support/widgetUtils","../core/Logger","./support/jsxFactory"],(function(e,i,t,o,s,n,r,a,c,l,p,h,d,u,v,_){"use strict";const w={base:"esri-spinner",spinnerStart:"esri-spinner--start",spinnerFinish:"esri-spinner--finish"};let f=function(i){function n(e,t){var o;return(o=i.call(this,e,t)||this)._animationDelay=500,o._animationPromise=null,o.location=null,o.view=null,o.viewModel=new d,o.visible=!1,o}e._inheritsLoose(n,i);var r=n.prototype;return r.initialize=function(){this.own([s.watch(this,"visible",(e=>this._visibleChange(e)))])},r.destroy=function(){this._animationPromise=null},r.show=function(e){const{location:i,promise:t}=e;i&&(this.viewModel.location=i),this.visible=!0;const o=()=>this.hide();t&&t.catch((()=>{})).then(o)},r.hide=function(){this.visible=!1},r.render=function(){const{visible:e}=this,{screenLocation:i}=this.viewModel,t=!!i,o=e&&t,s=!e&&t,n={[w.spinnerStart]:o,[w.spinnerFinish]:s},r=this._getPositionStyles();return _.tsx("div",{class:this.classes(w.base,n),styles:r})},r._visibleChange=function(e){if(e)return void(this.viewModel.screenLocationEnabled=!0);const i=o.after(this._animationDelay);this._animationPromise=i,i.catch((()=>{})).then((()=>{this._animationPromise===i&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)}))},r._getPositionStyles=function(){const{screenLocation:e,view:i}=this.viewModel;if(!i||t.isNone(e))return{};const{padding:o}=i;return{left:e.x-o.left+"px",top:e.y-o.top+"px"}},n}(h);i.__decorate([n.aliasOf("viewModel.location")],f.prototype,"location",void 0),i.__decorate([n.aliasOf("viewModel.view")],f.prototype,"view",void 0),i.__decorate([l.property({type:d})],f.prototype,"viewModel",void 0),i.__decorate([n.aliasOf("viewModel.visible")],f.prototype,"visible",void 0),f=i.__decorate([p.subclass("esri.widgets.Spinner")],f);return f}));
