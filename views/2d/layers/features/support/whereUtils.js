/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger"],(function(e,r,t,n,a){"use strict";const s=a.getLogger("esri.views.2d.layers.features.support.whereUtils"),i={getAttribute:(e,r)=>e.field(r)};function o(e,r){return u.apply(this,arguments)}function u(){return(u=t._asyncToGenerator((function*(r,t){const a=yield new Promise(((r,t)=>e(["../../../../../core/sql/WhereClause"],r,t)));try{const e=a.WhereClause.create(r,t);if(!e.isStandardized){const r=new n("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",e);s.error(r)}return r=>{const t=r.readArcadeFeature();return e.testFeature(t,i)}}catch(o){return s.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}))).apply(this,arguments)}r.createWhereClause=o,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
