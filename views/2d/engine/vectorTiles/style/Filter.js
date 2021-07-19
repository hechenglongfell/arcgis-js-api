/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../expression/expression","../expression/types"],(function(e,r){"use strict";return function(){function t(e){this._expression=e}return t.prototype.filter=function(e,r){if(!this._expression)return!0;try{return this._expression.evaluate(e,r)}catch(t){return console.log(t.message),!0}},t.createFilter=function(n){if(!n)return null;this.isLegacyFilter(n)&&(n=this.convertLegacyFilter(n));try{return new t(e.createExpression(n,null,r.BooleanType))}catch(s){return console.log(s.message),null}},t.isLegacyFilter=function(e){if(!Array.isArray(e))return!0;if(0===e.length)return!0;switch(e[0]){case"==":case"!=":case">":case"<":case">=":case"<=":return 3===e.length&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"in":return e.length>=3&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"!in":return!0;case"any":case"all":for(let r=1;r<e.length;r++)if(!this.isLegacyFilter(e[1]))return!1;return!0;case"none":return!0;case"has":return 2===e.length&&("$id"===e[1]||"$type"===e[1]);case"!has":return!0;default:return!1}},t.convertLegacyFilter=function(e){if(!Array.isArray(e)||0===e.length)return!0;const r=e[0];if(1===e.length)return"any"!==r;switch(r){case"==":return t.convertComparison("==",e[1],e[2]);case"!=":return t.negate(t.convertComparison("==",e[1],e[2]));case">":case"<":case">=":case"<=":return t.convertComparison(r,e[1],e[2]);case"in":return t.convertIn(e[1],e.slice(2));case"!in":return t.negate(t.convertIn(e[1],e.slice(2)));case"any":case"all":case"none":return t.convertCombining(r,e.slice(1));case"has":return t.convertHas(e[1]);case"!has":return t.negate(t.convertHas(e[1]));default:throw new Error("Unexpected legacy filter.")}},t.convertComparison=function(e,r,t){switch(r){case"$type":return[e,["geometry-type"],t];case"$id":return[e,["id"],t];default:return[e,["get",r],t]}},t.convertIn=function(e,r){switch(e){case"$type":return["in",["geometry-type"],["literal",r]];case"$id":return["in",["id"],["literal",r]];default:return["in",["get",e],["literal",r]]}},t.convertHas=function(e){switch(e){case"$type":return!0;case"$id":return["has-id"];default:return["has",e]}},t.convertCombining=function(e,r){return[e].concat(r.map(this.convertLegacyFilter))},t.negate=function(e){return["!",e]},t}()}));
