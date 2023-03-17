/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../Widget","./FeatureContent","./FeatureFields","./FeatureMedia","./FeatureExpression/FeatureExpressionViewModel","../support/widgetUtils","../support/jsxFactory"],(function(e,t,n,i,s,o,r,d,a,l,c,u,p,g){"use strict";const h={iconLoading:"esri-icon-loading-indicator esri-rotating",base:"esri-feature-expression",loadingSpinnerContainer:"esri-feature__loading-container",spinner:"esri-feature__loading-spinner"};let _=function(t){function i(e,n){var i;return(i=t.call(this,e,n)||this)._contentWidget=null,i.viewModel=new u,i}e._inheritsLoose(i,t);var s=i.prototype;return s.initialize=function(){this.addHandles(n.watch((()=>this.viewModel?.contentElementViewModel),(()=>this._setupExpressionWidget()),n.initial))},s.destroy=function(){this._destroyContentWidget()},s.renderLoading=function(){return g.tsx("div",{key:"loading-container",class:h.loadingSpinnerContainer},g.tsx("span",{class:this.classes(h.iconLoading,h.spinner)}))},s.render=function(){const{state:e}=this.viewModel;return g.tsx("div",{class:h.base},"loading"===e?this.renderLoading():"disabled"===e?null:this._contentWidget?.render())},s._destroyContentWidget=function(){const{_contentWidget:e}=this;e&&(e.viewModel=null,e.destroy()),this._contentWidget=null},s._setupExpressionWidget=function(){const{contentElementViewModel:e,contentElement:t}=this.viewModel,n=t?.type;this._destroyContentWidget();const i=e?"fields"===n?new l({viewModel:e}):"media"===n?new c({viewModel:e}):"text"===n?new a({viewModel:e}):null:null;this._contentWidget=i,this.scheduleRender()},i}(d);t.__decorate([i.property({type:u})],_.prototype,"viewModel",void 0),_=t.__decorate([r.subclass("esri.widgets.Feature.FeatureExpression")],_);return _}));
