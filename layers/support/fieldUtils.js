/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/maybe","../../core/object","./domains","../../support/arcadeOnDemand"],(function(e,n,i,t,r,l,o,a){"use strict";const s=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],u=["field","normalizationField"];function d(e,n){if(null!=e&&null!=n)for(const i of Array.isArray(e)?e:[e])if(c(s,i,n),"visualVariables"in i&&i.visualVariables)for(const e of i.visualVariables)c(u,e,n)}function c(e,n,i){if(e)for(const t of e){const e=l.getDeepValue(t,n),r=e&&"function"!=typeof e&&i.get(e);r&&l.setDeepValue(t,r.name,n)}}function f(e,n){if(null!=e&&null!=n&&n.fields.length)if("startField"in e){const i=n.get(e.startField),t=n.get(e.endField);e.startField=i&&i.name||null,e.endField=t&&t.name||null}else{const i=n.get(e.startTimeField),t=n.get(e.endTimeField);e.startTimeField=i&&i.name||null,e.endTimeField=t&&t.name||null}}const p=new Set;function m(e,n){return e&&n?(p.clear(),y(p,e,n),Array.from(p).sort()):[]}function y(e,n,i){var t;if(i)if(null!=n&&null!=(t=n.fields)&&t.length)if(i.includes("*"))for(const{name:r}of n.fields)e.add(r);else for(const r of i)g(e,n,r);else{if(i.includes("*"))return e.clear(),void e.add("*");for(const n of i)e.add(n)}}function g(e,n,i){if("string"==typeof i)if(n){const t=n.get(i);t&&e.add(t.name)}else e.add(i)}function F(e,n){return r.isNone(n)||r.isNone(e)?[]:n.includes("*")?e.fields.map((e=>e.name)):n}function T(e,n,i=1){if(!n||!e)return[];if(n.includes("*"))return["*"];const t=m(e,n);return t.length/e.fields.length>=i?["*"]:t}function I(e,n,i){return h.apply(this,arguments)}function h(){return(h=i._asyncToGenerator((function*(e,n,i){if(!i)return;const{arcadeUtils:t}=yield a.loadArcade(),r=t.extractFieldNames(i);for(const l of r)g(e,n,l)}))).apply(this,arguments)}function b(e,n,i){return V.apply(this,arguments)}function V(){return(V=i._asyncToGenerator((function*(n,i,r){if(r&&"1=1"!==r){const l=(yield new Promise((function(n,i){e(["../../core/sql/WhereClause"],n,i)}))).WhereClause.create(r,i);if(!l.isStandardized)throw new t("fieldUtils:collectFilterFields","Where clause is not standardized");y(n,i,l.fieldNames)}}))).apply(this,arguments)}function E({displayField:e,fields:n}){return e||(n&&n.length?N(n,"name-or-title")||N(n,"unique-identifier")||N(n,"type-or-category")||x(n):null)}function x(e){for(const n of e){if(!n||!n.name)continue;const e=n.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return n.name}return null}function N(e,n){for(const i of e)if(i&&i.valueType&&i.valueType===n)return i.name;return null}function S(e){return _.apply(this,arguments)}function _(){return(_=i._asyncToGenerator((function*(e){if(!e)return[];const n=new Set;return yield v(n,e),Array.from(n).sort()}))).apply(this,arguments)}function v(e,n){return D.apply(this,arguments)}function D(){return(D=i._asyncToGenerator((function*(e,n){if(!n)return;const i=l.getDeepValue("elevationInfo.featureExpressionInfo",n);return i?i.collectRequiredFields(e,n.fieldsIndex):void 0}))).apply(this,arguments)}function A(e,n,i){return R.apply(this,arguments)}function R(){return(R=i._asyncToGenerator((function*(e,n,i){i.outStatistic.onStatisticValueExpression?I(e,n,i.outStatistic.onStatisticValueExpression):e.add(i.outStatistic.onStatisticField)}))).apply(this,arguments)}function G(e,n,i){return w.apply(this,arguments)}function w(){return(w=i._asyncToGenerator((function*(e,n,i){n&&i&&"cluster"===i.type&&i.fields&&(yield Promise.all(i.fields.map((i=>A(e,n.fieldsIndex,i)))))}))).apply(this,arguments)}function O(e,n,i){return $.apply(this,arguments)}function $(){return($=i._asyncToGenerator((function*(e,n,i){n&&(n.timeInfo&&r.isSome(i)&&i.timeExtent&&y(e,n.fieldsIndex,[n.timeInfo.startField,n.timeInfo.endField]),n.floorInfo&&y(e,n.fieldsIndex,[n.floorInfo.floorField]),r.isSome(i)&&r.isSome(i.where)&&(yield b(e,n.fieldsIndex,i.where)))}))).apply(this,arguments)}function L(e){return U.apply(this,arguments)}function U(){return(U=i._asyncToGenerator((function*(e){if(!e)return[];const n="timeInfo"in e&&e.timeInfo;return n?m(e.fieldsIndex,[e.trackIdField,n.startField,n.endField]):[]}))).apply(this,arguments)}function k(e){if(!e)return[];const n="editFieldsInfo"in e&&e.editFieldsInfo;return n?m(e.fieldsIndex,[n&&n.creatorField,n&&n.creationDateField,n&&n.editorField,n&&n.editDateField]):[]}function P(e){if(!e)return[];const n=e.geometryFieldsInfo;return n?m(e.fieldsIndex,[n.shapeAreaField,n.shapeLengthField]):[]}function z(e){return M.apply(this,arguments)}function M(){return(M=i._asyncToGenerator((function*(e){if(!e)return[];const n=new Set;return yield q(n,e),Array.from(n).sort()}))).apply(this,arguments)}function q(e,n){return C.apply(this,arguments)}function C(){return(C=i._asyncToGenerator((function*(e,n){const{labelingInfo:i,fieldsIndex:t}=n;i&&i.length&&(yield Promise.all(i.map((n=>W(e,t,n)))))}))).apply(this,arguments)}function W(e,n,i){return Y.apply(this,arguments)}function Y(){return(Y=i._asyncToGenerator((function*(e,n,i){if(!i)return;const t=i.getLabelExpression(),r=i.where;if("arcade"===t.type)yield I(e,n,t.expression);else{const i=t.expression.match(/{[^}]*}/g);i&&i.forEach((i=>{g(e,n,i.slice(1,-1))}))}yield b(e,n,r)}))).apply(this,arguments)}function j(e){const n=e.defaultValue;return void 0!==n&&ee(e,n)?n:e.nullable?null:void 0}function H(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function J(e){return null===e||H(e)}const X="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function B(e){return null===e||X(e)}function K(e){return null!=e&&"string"==typeof e}function Q(e){return null===e||K(e)}function Z(){return!0}function ee(e,n){let i;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":i=e.nullable?B:X;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":i=e.nullable?J:H;break;case"string":case"esriFieldTypeString":i=e.nullable?Q:K;break;default:i=Z}return 1===arguments.length?i:i(n)}const ne=["integer","small-integer","single","double"],ie=new Set([...ne,"esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function te(e){return null!=e&&ie.has(e.type)}function re(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}function le(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)}function oe(e,n){return null===se(e,n)}function ae(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function se(e,i){return e.nullable&&null===i?null:te(e)&&!ue(e.type,Number(i))?n.NumericRangeValidationError.OUT_OF_RANGE:ee(e,i)?e.domain?o.validateDomainValue(e.domain,i):null:n.TypeValidationError.INVALID_TYPE}function ue(e,n){const i="string"==typeof e?ce(e):e;return!!i&&(i.isInteger?X(n)&&n>=i.min&&n<=i.max:n>=i.min&&n<=i.max)}function de(e){const n=o.getDomainRange(e.domain);return n||(te(e)?ce(e.type):void 0)}function ce(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return pe;case"esriFieldTypeInteger":case"integer":return me;case"esriFieldTypeSingle":case"single":return ye;case"esriFieldTypeDouble":case"double":return ge}}function fe(e){if(!H(e))return null;if(X(e)){if(e>=pe.min&&e<=pe.max)return"esriFieldTypeSmallInteger";if(e>=me.min&&e<=me.max)return"esriFieldTypeInteger"}return e>=ye.min&&e<=ye.max?"esriFieldTypeSingle":"esriFieldTypeDouble"}n.NumericRangeValidationError=void 0,(n.NumericRangeValidationError||(n.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",n.TypeValidationError=void 0,(n.TypeValidationError||(n.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type";const pe={min:-32768,max:32767,isInteger:!0},me={min:-2147483648,max:2147483647,isInteger:!0},ye={min:-34e37,max:12e37,isInteger:!1},ge={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function Fe(e,i,t){switch(e){case o.DomainValidationError.INVALID_CODED_VALUE:return`Value ${t} is not in the coded domain - field: ${i.name}, domain: ${JSON.stringify(i.domain)}`;case o.DomainValidationError.VALUE_OUT_OF_RANGE:return`Value ${t} is out of the range of valid values - field: ${i.name}, domain: ${JSON.stringify(i.domain)}`;case n.TypeValidationError.INVALID_TYPE:return`Value ${t} is not a valid value for the field type - field: ${i.name}, type: ${i.type}, nullable: ${i.nullable}`;case n.NumericRangeValidationError.OUT_OF_RANGE:{const{min:e,max:n}=ce(i.type);return`Value ${t} is out of range for the number type - field: ${i.name}, type: ${i.type}, value range is ${e} to ${n}`}}}function Te(e,n){return!Ie(e,n,null)}function Ie(e,n,i){if(!n||!n.attributes||!e){if(r.isSome(i))for(const n of e)i.add(n);return!0}const t=n.attributes;let l=!1;for(const o of e)if(!(o in t)){if(l=!0,!r.isSome(i))break;i.add(o)}return l}function he(e,n){return be.apply(this,arguments)}function be(){return(be=i._asyncToGenerator((function*(e,n){const i=new Set;for(const t of n)yield I(i,e.fieldsIndex,t);return Array.from(i).sort()}))).apply(this,arguments)}n.collectArcadeFieldNames=I,n.collectElevationFields=v,n.collectFeatureReductionFields=G,n.collectField=g,n.collectFields=y,n.collectFilterFields=O,n.collectLabelingFields=q,n.doubleRange=ge,n.featureHasFields=Te,n.fixFields=m,n.fixRendererFields=d,n.fixTimeInfoFields=f,n.getDisplayFieldName=E,n.getElevationFields=S,n.getExpressionFields=he,n.getFeatureEditFields=k,n.getFeatureGeometryFields=P,n.getFieldDefaultValue=j,n.getFieldRange=de,n.getLabelingFields=z,n.getNumericTypeForValue=fe,n.getTimeFields=L,n.integerRange=me,n.isDateField=le,n.isNumberInRange=ue,n.isNumericField=te,n.isStringField=re,n.isValidFieldValue=oe,n.isValueMatchingFieldType=ee,n.numericTypes=ne,n.packFields=T,n.populateMissingFields=Ie,n.rendererFields=s,n.sanitizeNullFieldValue=ae,n.singleRange=ye,n.smallIntegerRange=pe,n.unpackFieldNames=F,n.validateFieldValue=se,n.validationErrorToString=Fe,n.visualVariableFields=u,Object.defineProperty(n,"__esModule",{value:!0})}));
