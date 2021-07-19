/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Logger","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../core/sql/WhereClause","../i3s/I3SUtil"],(function(e,r,i,s,n,o,t,p,a,l){"use strict";const d=s.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),u=e=>{let s=function(e){function i(){var r;return(r=e.apply(this,arguments)||this)._definitionExpressionErrors=0,r._maxDefinitionExpressionErrors=20,r.logError=e=>{r._definitionExpressionErrors<r._maxDefinitionExpressionErrors&&d.error("Error while evaluating definitionExpression: "+e),r._definitionExpressionErrors++,r._definitionExpressionErrors===r._maxDefinitionExpressionErrors&&d.error("Further errors are ignored")},r}r._inheritsLoose(i,e);var s=i.prototype;return s._evaluateClause=function(e,r){try{return e.testFeature(r)}catch(i){return this.logError(i),!1}},s._addDefinitionExpressionToQuery=function(e){if(!this.parsedDefinitionExpression)return e;const r=this.i3slayer.definitionExpression,i=e.clone();return i.where?i.where=`(${r}) AND (${i.where})`:i.where=r,i},r._createClass(i,[{key:"parsedDefinitionExpression",get:function(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const e=a.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return d.error("definitionExpression is using non standard function"),null;const r=[],i=e.fieldNames;return l.findFieldsCaseInsensitive(i,this.i3slayer.fields,{missingFields:r}),r.length>0?(d.error(`definitionExpression references unknown fields: ${r.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return d.error("Failed to parse definitionExpression: "+e),null}}},{key:"definitionExpressionFields",get:function(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}}]),i}(e);return i.__decorate([n.property()],s.prototype,"i3slayer",void 0),i.__decorate([n.property({readOnly:!0})],s.prototype,"parsedDefinitionExpression",null),i.__decorate([n.property({readOnly:!0})],s.prototype,"definitionExpressionFields",null),s=i.__decorate([p.subclass("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],s),s};e.DefinitionExpressionSceneLayerView=u,Object.defineProperty(e,"__esModule",{value:!0})}));
