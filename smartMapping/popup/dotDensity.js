/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../PopupTemplate","../../core/Error","../../intl/messages","../../popup/ExpressionInfo","../../popup/FieldInfo","./support/utils","../statistics/support/predominanceUtils"],(function(e,n,t,i,r,o,s,d,l){"use strict";function a(e){return f.apply(this,arguments)}function f(){return(f=n._asyncToGenerator((function*(e){const{layer:n,renderer:t}=e;yield n.load();const r=t||n.renderer;if("dot-density"!==r.type)throw new i("dot-density-popup:invalid-parameters","renderer.type must be 'dot-density'");return{layer:n,renderer:r}}))).apply(this,arguments)}function p(e,n){return y.apply(this,arguments)}function y(){return(y=n._asyncToGenerator((function*(e,n){const{fieldInfos:i,expressionInfos:r}=yield d.getFieldAndExpressionInfos({renderer:e,layer:n});return new t({content:yield d.getContentFromFieldInfos(n,{fieldInfos:i,expressionInfos:r}),expressionInfos:r,fieldInfos:i})}))).apply(this,arguments)}function u(e,n,t){return c.apply(this,arguments)}function c(){return(c=n._asyncToGenerator((function*(e,n,i){const{fieldInfos:r,expressionInfos:a}=yield d.getFieldAndExpressionInfos({renderer:e,layer:n}),f=r.filter((e=>-1===e.fieldName.indexOf(d.expressionFieldPrefix))),p={fieldInfo:new s({fieldName:"expression/dot-density-categories-list"}),expressionInfo:new o({name:"dot-density-categories-list",title:i.listOfCategories,expression:l.getArcadeForOrderedFields(f,a)})},y=new t({expressionInfos:[p.expressionInfo],fieldInfos:[p.fieldInfo],title:i.competingFields,content:`{${p.fieldInfo.fieldName}}`});return{name:"dot-density-categories-list",title:i.orderedListOfValues,value:y}}))).apply(this,arguments)}function m(e,n,t){return I.apply(this,arguments)}function I(){return(I=n._asyncToGenerator((function*(e,n,i){const{fieldInfos:r,expressionInfos:a}=yield d.getFieldAndExpressionInfos({renderer:e,layer:n}),f=r.filter((e=>-1===e.fieldName.indexOf(d.expressionFieldPrefix))),p={fieldInfo:new s({fieldName:"expression/dot-density-category"}),expressionInfo:new o({name:"dot-density-category",title:i.predominantCategory,expression:l.getArcadeForPredominantCategoryAlias(f,a)})},y=new t({expressionInfos:[p.expressionInfo,...a],fieldInfos:[p.fieldInfo,...r],content:[{type:"text",text:`<div><b><font size="3">{${p.fieldInfo.fieldName}}</font></b></div>`},{type:"media",mediaInfos:{type:"pie-chart",title:i.competingFields,value:{fields:r.map((e=>e.fieldName))}}}]});return{name:"dot-density-category-chart",title:i.predominantCategoryWithChart,value:y}}))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=n._asyncToGenerator((function*(e){const[{renderer:n,layer:t},i]=yield Promise.all([a(e),r.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);return{primaryTemplate:{name:"dot-density",title:i.dotDensity,value:yield p(n,t)},secondaryTemplates:[yield u(n,t,i),yield m(n,t,i)]}}))).apply(this,arguments)}e.getTemplates=x,Object.defineProperty(e,"__esModule",{value:!0})}));
