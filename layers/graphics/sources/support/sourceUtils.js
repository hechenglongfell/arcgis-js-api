/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry/support/spatialReferenceUtils","../../../support/fieldUtils"],(function(e,t,i,n,r){"use strict";let l=function(){this.code=null,this.description=null},o=function(e){this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e};function s(e){return new o(e)}let u=function(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e};function a(e){return new u(e)}const c=new Set;function d(e,t,i,n,l=!1,o){c.clear();for(const u in i){const n=e.get(u);if(!n)continue;const a=i[u],d=f(n,a);if(d!==a&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:a,sanitizedValue:d}}),c.add(n.name),n&&(l||n.editable)){const e=r.validateFieldValue(n,d);if(e)return s(r.validationErrorToString(e,n,d));t[n.name]=d}}if(n)for(const r of n)if(!c.has(r.name))return s(`missing required field "${r.name}"`);return null}function f(e,t){let i=t;return"string"==typeof t&&r.isNumericField(e)?i=parseFloat(t):null!=t&&r.isStringField(e)&&"string"!=typeof t&&(i=String(t)),r.sanitizeNullFieldValue(i)}let p;function y(e,t){if(!e||!n.isValid(t))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}function h(){return g.apply(this,arguments)}function g(){return(g=i._asyncToGenerator((function*(){return p||(p=yield new Promise((function(t,i){e(["../../../../geometry/geometryEngineJSON"],t,i)})),p)}))).apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return(b=i._asyncToGenerator((function*(e,t){!n.isValid(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||(yield h())}))).apply(this,arguments)}t.createFeatureEditErrorResult=s,t.createFeatureEditSuccessResult=a,t.loadGeometryEngine=h,t.loadGeometryEngineForSimplify=m,t.mixAttributes=d,t.simplify=y,Object.defineProperty(t,"__esModule",{value:!0})}));
