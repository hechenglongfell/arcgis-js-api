/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],(function(e,n,r,t,s,i){"use strict";function l(e){return o.apply(this,arguments)}function o(){return(o=n._asyncToGenerator((function*(e){const{layer:n,renderer:r}=e;yield n.load();const s=r||n.renderer;if("simple"!==s.type)throw new t("simple-popup:invalid-parameters","renderer.type must be 'simple'");return{layer:n,renderer:s}}))).apply(this,arguments)}function p(e,n){return a.apply(this,arguments)}function a(){return(a=n._asyncToGenerator((function*(e,n,t="divide"){const{fieldInfos:s,expressionInfos:l}=yield i.getFieldAndExpressionInfos({renderer:e,layer:n,normFieldExpressionTemplate:t});return new r({content:yield i.getContentFromFieldInfos(n,{fieldInfos:s,expressionInfos:l}),expressionInfos:l,fieldInfos:s})}))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=n._asyncToGenerator((function*(e){const[{renderer:n,layer:r},t]=yield Promise.all([l(e),s.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),o=[];if(!i.getPrimaryVisualVariables(n).length)return null;const a={name:"simple",title:t.simple,value:yield p(n,r)};return i.hasNormalizedField(n)&&o.push({name:"simple-percent",title:t.simpleNormFieldAsPercent,value:yield p(n,r,"percentage")}),{primaryTemplate:a,secondaryTemplates:o}}))).apply(this,arguments)}e.getTemplates=u,Object.defineProperty(e,"__esModule",{value:!0})}));
