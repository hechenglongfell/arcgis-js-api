/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],(function(e,n,r,t,i,s){"use strict";function l(e){return u.apply(this,arguments)}function u(){return(u=n._asyncToGenerator((function*(e){const{layer:n,renderer:r}=e;yield n.load();const i=r||n.renderer;if("unique-value"!==i.type)throw new t("unique-values-popup:invalid-parameters","renderer.type must be 'unique-value'");return{layer:n,renderer:i}}))).apply(this,arguments)}function o(e,n){return a.apply(this,arguments)}function a(){return(a=n._asyncToGenerator((function*(e,n,t="divide"){const{fieldInfos:i,expressionInfos:l}=yield s.getFieldAndExpressionInfos({renderer:e,layer:n,normFieldExpressionTemplate:t});return new r({content:yield s.getContentFromFieldInfos(n,{fieldInfos:i,expressionInfos:l}),fieldInfos:i,expressionInfos:l})}))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=n._asyncToGenerator((function*(e){const[{renderer:n,layer:r},t]=yield Promise.all([l(e),i.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),u={name:"unique-values",title:t.uniqueValues,value:yield o(n,r)},a=[];return s.hasNormalizedField(n)&&a.push({name:"unique-values-percent",title:t.uniqueValuesNormFieldAsPercent,value:yield o(n,r,"percentage")}),{primaryTemplate:u,secondaryTemplates:a}}))).apply(this,arguments)}e.getTemplates=p,Object.defineProperty(e,"__esModule",{value:!0})}));
