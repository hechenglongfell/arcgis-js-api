/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../layers/support/fieldUtils"],(function(e,l,t,i){"use strict";function d(e){return p.apply(this,arguments)}function p(){return(p=l._asyncToGenerator((function*(e,l=e.popupTemplate){if(!t.isSome(l))return[];const d=yield l.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:p}=l,{objectIdField:n,typeIdField:s,globalIdField:u,relationships:o}=e;if(d.includes("*"))return["*"];const a=p?yield i.getFeatureEditFields(e):[],r=i.fixFields(e.fieldsIndex,[...d,...a]);return s&&r.push(s),r&&n&&e.fieldsIndex.has(n)&&-1===r.indexOf(n)&&r.push(n),r&&u&&e.fieldsIndex.has(u)&&-1===r.indexOf(u)&&r.push(u),o&&o.forEach((l=>{const{keyField:t}=l;r&&t&&e.fieldsIndex.has(t)&&-1===r.indexOf(t)&&r.push(t)})),r}))).apply(this,arguments)}function n(e,l){return e.popupTemplate?e.popupTemplate:t.isSome(l)&&l.defaultPopupTemplateEnabled&&t.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}e.getFetchPopupTemplate=n,e.getRequiredFields=d,Object.defineProperty(e,"__esModule",{value:!0})}));
