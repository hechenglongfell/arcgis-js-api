/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./ArcadeModule","./ArcadeModuleLoader","./Dictionary","./executionError","./Feature","./FunctionWrapper","../chunks/languageUtils","./treeAnalysis","../chunks/array","./functions/date","./functions/geometry","./functions/geomsync","./functions/maths","./functions/stats","./functions/string","../geometry/Geometry","../geometry/SpatialReference"],(function(e,r,t,o,n,i,a,c,u,s,l,d,f,E,p,h,x,m,w){"use strict";let g=function(e){function t(r,t){var o;return(o=e.call(this)||this).definition=null,o.context=null,o.definition=r,o.context=t,o}r._inheritsLoose(t,e);var o=t.prototype;return o.createFunction=function(e){return(...r)=>{const t={spatialReference:this.context.spatialReference,console:this.context.console,timeReference:this.context.timeReference?this.context.timeReference:null,lrucache:this.context.lrucache,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter.depth+1},globalScope:this.context.globalScope};if(t.depthCounter.depth>64)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.MaximumCallDepth,null);return re(this.definition,t,r,null)}},o.call=function(e,r){return y(e,r,((t,o,n)=>{const a={spatialReference:e.spatialReference,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,timeReference:e.timeReference??null,console:e.console,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};if(a.depthCounter.depth>64)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.MaximumCallDepth,r);return re(this.definition,a,n,r)}))},o.marshalledCall=function(e,r,t,o){return o(e,r,((n,i,a)=>{const s={spatialReference:e.spatialReference,globalScope:t.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,timeReference:e.timeReference??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};return a=a.map((r=>!u.isFunctionParameter(r)||r instanceof c.ScopeMarshalledFunction?r:c.wrapModuleScopedResponse(r,e,o))),c.wrapModuleScopedResponse(re(this.definition,s,a,r),t,o)}))},t}(c.ArcadeFunction),v=function(e){function t(r){return e.call(this,r)||this}r._inheritsLoose(t,e);var n=t.prototype;return n.global=function(e){const r=this.executingContext.globalScope[e.toLowerCase()];if(r.valueset||(r.value=A(this.executingContext,r.node),r.valueset=!0),u.isFunctionParameter(r.value)&&!(r.value instanceof c.ScopeMarshalledFunction)){const e=new c.ScopeMarshalledFunction;e.fn=r.value,e.parameterEvaluator=y,e.context=this.executingContext,r.value=e}return r.value},n.setGlobal=function(e,r){if(u.isFunctionParameter(r))throw new i.ArcadeExecutionError(null,i.ExecutionErrorCodes.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:r,valueset:!0,node:null}},n.hasGlobal=function(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]},n.loadModule=function(e){let r=e.spatialReference;null==r&&(r=new w({wkid:102100})),this.moduleScope=oe({},e.customfunctions,e.timeReference),this.executingContext={spatialReference:r,globalScope:this.moduleScope,localScope:null,libraryResolver:new o.ArcadeModuleLoader(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},console:e.console?e.console:ie,timeReference:e.timeReference??null,lrucache:e.lrucache,interceptor:e.interceptor,depthCounter:{depth:1}},A(this.executingContext,this.source.syntax)},t}(t.ArcadeModule);function b(e,r){const t=[];for(let o=0;o<r.arguments.length;o++)t.push(A(e,r.arguments[o]));return t}function y(e,r,t){try{return!0===r.preparsed?t(e,null,r.arguments):t(e,r,b(e,r))}catch(o){throw o}}function A(e,r){try{switch(r?.type){case"EmptyStatement":return u.voidOperation;case"VariableDeclarator":return G(e,r);case"VariableDeclaration":return U(e,r);case"ImportDeclaration":return K(e,r);case"ExportNamedDeclaration":return T(e,r);case"BlockStatement":case"Program":return P(e,r);case"FunctionDeclaration":return D(e,r);case"ReturnStatement":return q(e,r);case"IfStatement":return L(e,r);case"ExpressionStatement":return B(e,r);case"AssignmentExpression":return k(e,r);case"UpdateExpression":return O(e,r);case"BreakStatement":return u.breakResult;case"ContinueStatement":return u.continueResult;case"TemplateElement":return Y(e,r);case"TemplateLiteral":return J(e,r);case"ForStatement":return F(e,r);case"ForInStatement":return S(e,r);case"WhileStatement":return N(e,r);case"Identifier":return Q(e,r);case"MemberExpression":return _(e,r);case"Literal":return r.value;case"CallExpression":return X(e,r);case"UnaryExpression":return W(e,r);case"BinaryExpression":return V(e,r);case"LogicalExpression":return H(e,r);case"ArrayExpression":return j(e,r);case"ObjectExpression":return C(e,r);case"Property":return R(e,r);default:throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.Unrecognised,r)}}catch(t){throw i.ensureArcadeExecutionError(e,r,t)}}function C(e,r){const t={},o=new Map;for(let n=0;n<r.properties.length;n++){const a=A(e,r.properties[n]);if(u.isFunctionParameter(a.value))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.NoFunctionInDictionary,r);if(!1===u.isString(a.key))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.KeyMustBeString,r);let c=a.key.toString();const s=c.toLowerCase();o.has(s)?c=o.get(s):o.set(s,c),a.value===u.voidOperation?t[c]=null:t[c]=a.value}const a=new n(t);return a.immutable=!1,a}function R(e,r){return{key:"Identifier"===r.key.type?r.key.name:A(e,r.key),value:A(e,r.value)}}function S(e,r){const t=A(e,r.right);"VariableDeclaration"===r.left.type&&A(e,r.left);let o=null,a="";if("VariableDeclaration"===r.left.type){const e=r.left.declarations[0].id;"Identifier"===e.type&&(a=e.name)}else"Identifier"===r.left.type&&(a=r.left.name);if(!a)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);if(a=a.toLowerCase(),null!=e.localScope&&void 0!==e.localScope[a]&&(o=e.localScope[a]),null===o&&void 0!==e.globalScope[a]&&(o=e.globalScope[a]),null===o)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);if(u.isArray(t)||u.isString(t)){const n=t.length;for(let t=0;t<n;t++){o.value=t;const n=A(e,r.body);if(n===u.breakResult)break;if(n instanceof u.ReturnResult)return n}return u.voidOperation}if(u.isImmutableArray(t)){for(let n=0;n<t.length();n++){o.value=n;const t=A(e,r.body);if(t===u.breakResult)break;if(t instanceof u.ReturnResult)return t}return u.voidOperation}if(!(t instanceof n||u.isFeature(t)))return u.voidOperation;{const n=t.keys();for(let t=0;t<n.length;t++){o.value=n[t];const i=A(e,r.body);if(i===u.breakResult)break;if(i instanceof u.ReturnResult)return i}}}function F(e,r){null!==r.init&&A(e,r.init);const t={testResult:!0,lastAction:u.voidOperation};do{I(e,r,t)}while(!0===t.testResult);return t.lastAction instanceof u.ReturnResult?t.lastAction:u.voidOperation}function N(e,r){const t={testResult:!0,lastAction:u.voidOperation};if(t.testResult=A(e,r.test),!1===t.testResult)return u.voidOperation;if(!0!==t.testResult)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r);for(;!0===t.testResult&&(t.lastAction=A(e,r.body),t.lastAction!==u.breakResult)&&!(t.lastAction instanceof u.ReturnResult);)if(t.testResult=A(e,r.test),!0!==t.testResult&&!1!==t.testResult)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r);return t.lastAction instanceof u.ReturnResult?t.lastAction:u.voidOperation}function I(e,r,t){if(null!==r.test){if(t.testResult=A(e,r.test),!1===t.testResult)return;if(!0!==t.testResult)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r)}t.lastAction=A(e,r.body),t.lastAction!==u.breakResult?t.lastAction instanceof u.ReturnResult?t.testResult=!1:null!==r.update&&A(e,r.update):t.testResult=!1}function O(e,r){let t,o=null,a="";if("MemberExpression"===r.argument.type){if(o=A(e,r.argument.object),!0===r.argument.computed?a=A(e,r.argument.property):"Identifier"===r.argument.property.type&&(a=r.argument.property.name),u.isArray(o)){if(!u.isNumber(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.ArrayAccessorMustBeNumber,r);if(a<0&&(a=o.length+a),a<0||a>=o.length)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.OutOfBounds,r);t=u.toNumber(o[a]),o[a]="++"===r.operator?t+1:t-1}else if(o instanceof n){if(!1===u.isString(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0!==o.hasField(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FieldNotFound,r);t=u.toNumber(o.field(a)),o.setField(a,"++"===r.operator?t+1:t-1)}else if(u.isFeature(o)){if(!1===u.isString(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0!==o.hasField(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FieldNotFound,r);t=u.toNumber(o.field(a)),o.setField(a,"++"===r.operator?t+1:t-1)}else{if(u.isImmutableArray(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.Immutable,r);if(!(o instanceof v))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidParameter,r);if(!1===u.isString(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.ModuleAccessorMustBeString,r);if(!0!==o.hasGlobal(a))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.ModuleExportNotFound,r);t=u.toNumber(o.global(a)),o.setGlobal(a,"++"===r.operator?t+1:t-1)}return!1===r.prefix?t:"++"===r.operator?t+1:t-1}if(o="Identifier"===r.argument.type?r.argument.name.toLowerCase():"",!o)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);if(null!=e.localScope&&void 0!==e.localScope[o])return t=u.toNumber(e.localScope[o].value),e.localScope[o]={value:"++"===r.operator?t+1:t-1,valueset:!0,node:r},!1===r.prefix?t:"++"===r.operator?t+1:t-1;if(void 0!==e.globalScope[o])return t=u.toNumber(e.globalScope[o].value),e.globalScope[o]={value:"++"===r.operator?t+1:t-1,valueset:!0,node:r},!1===r.prefix?t:"++"===r.operator?t+1:t-1;throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r)}function M(e,r,t,o,n){switch(r){case"=":return e===u.voidOperation?null:e;case"/=":return u.toNumber(t)/u.toNumber(e);case"*=":return u.toNumber(t)*u.toNumber(e);case"-=":return u.toNumber(t)-u.toNumber(e);case"+=":return u.isString(t)||u.isString(e)?u.toString(t)+u.toString(e):u.toNumber(t)+u.toNumber(e);case"%=":return u.toNumber(t)%u.toNumber(e);default:throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.UnsupportedOperator,o)}}function k(e,r){let t=null,o="";if("MemberExpression"===r.left.type){if(t=A(e,r.left.object),!0===r.left.computed)o=A(e,r.left.property);else{if("Identifier"!==r.left.property.type)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);o=r.left.property.name}const a=A(e,r.right);if(u.isArray(t)){if(!u.isNumber(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.ArrayAccessorMustBeNumber,r);if(o<0&&(o=t.length+o),o<0||o>t.length)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.OutOfBounds,r);if(o===t.length){if("="!==r.operator)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.OutOfBounds,r);t[o]=M(a,r.operator,t[o],r,e)}else t[o]=M(a,r.operator,t[o],r,e)}else if(t instanceof n){if(!1===u.isString(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0===t.hasField(o))t.setField(o,M(a,r.operator,t.field(o),r,e));else{if("="!==r.operator)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FieldNotFound,r,{key:o});t.setField(o,M(a,r.operator,null,r,e))}}else if(u.isFeature(t)){if(!1===u.isString(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0===t.hasField(o))t.setField(o,M(a,r.operator,t.field(o),r,e));else{if("="!==r.operator)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FieldNotFound,r,{key:o});t.setField(o,M(a,r.operator,null,r,e))}}else{if(u.isImmutableArray(t))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.Immutable,r);if(!(t instanceof v))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);if(!1===u.isString(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.ModuleAccessorMustBeString,r);if(!0!==t.hasGlobal(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.ModuleExportNotFound,r);t.setGlobal(o,M(a,r.operator,t.global(o),r,e))}return u.voidOperation}t=r.left.name.toLowerCase();const a=A(e,r.right);if(null!=e.localScope&&void 0!==e.localScope[t])return e.localScope[t]={value:M(a,r.operator,e.localScope[t].value,r,e),valueset:!0,node:r.right},u.voidOperation;if(void 0!==e.globalScope[t])return e.globalScope[t]={value:M(a,r.operator,e.globalScope[t].value,r,e),valueset:!0,node:r.right},u.voidOperation;throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r)}function B(e,r){if("AssignmentExpression"===r.expression.type||"UpdateExpression"===r.expression.type)return A(e,r.expression);if("CallExpression"===r.expression.type){const t=A(e,r.expression);return t===u.voidOperation?u.voidOperation:new u.ImplicitResult(t)}{const t=A(e,r.expression);return t===u.voidOperation?u.voidOperation:new u.ImplicitResult(t)}}function L(e,r){const t=A(e,r.test);if(!0===t)return A(e,r.consequent);if(!1===t)return null!==r.alternate?A(e,r.alternate):u.voidOperation;throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r)}function P(e,r){let t=u.voidOperation;for(let o=0;o<r.body.length;o++)if(t=A(e,r.body[o]),t instanceof u.ReturnResult||t===u.breakResult||t===u.continueResult)return t;return t}function q(e,r){if(null===r.argument)return new u.ReturnResult(u.voidOperation);const t=A(e,r.argument);return new u.ReturnResult(t)}function D(e,r){const t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new g(r,e)},u.voidOperation}function K(e,r){const t=r.specifiers[0].local.name.toLowerCase(),o=e.libraryResolver.loadLibrary(t);let n=null;return e.libraryResolver._moduleSingletons?.has(o.uri)?n=e.libraryResolver._moduleSingletons.get(o.uri):(n=new v(o),n.loadModule(e),e.libraryResolver._moduleSingletons?.set(o.uri,n)),e.globalScope[t]={value:n,valueset:!0,node:r},u.voidOperation}function T(e,r){if(A(e,r.declaration),"FunctionDeclaration"===r.declaration.type)e.exports[r.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===r.declaration.type)for(const t of r.declaration.declarations)e.exports[t.id.name.toLowerCase()]="variable";return u.voidOperation}function U(e,r){for(let t=0;t<r.declarations.length;t++)A(e,r.declarations[t]);return u.voidOperation}function G(e,r){let t=null===r.init?null:A(e,r.init);if(t===u.voidOperation&&(t=null),"Identifier"!==r.id.type)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);const o=r.id.name.toLowerCase();return null!=e.localScope?e.localScope[o]={value:t,valueset:!0,node:r.init}:e.globalScope[o]={value:t,valueset:!0,node:r.init},u.voidOperation}function _(e,r){try{const t=A(e,r.object);if(null===t)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.MemberOfNull,r);if(!1===r.computed){if("Identifier"===r.property.type){if(t instanceof n||u.isFeature(t))return t.field(r.property.name);if(t instanceof m)return f.geometryMember(t,r.property.name,r,e);if(t instanceof v){if(!t.hasGlobal(r.property.name))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r);return t.global(r.property.name)}}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}{let o=A(e,r.property);if(t instanceof n||u.isFeature(t)){if(u.isString(o))return t.field(o);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(t instanceof v){if(u.isString(o))return t.global(o);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(t instanceof m){if(u.isString(o))return f.geometryMember(t,o,r,e);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(u.isArray(t)){if(u.isNumber(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=t.length+o),o>=t.length||o<0)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.OutOfBounds,r);return t[o]}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(u.isString(t)){if(u.isNumber(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=t.length+o),o>=t.length||o<0)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.OutOfBounds,r);return t[o]}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(u.isImmutableArray(t)){if(u.isNumber(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=t.length()+o),o>=t.length()||o<0)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.OutOfBounds,r);return t.get(o)}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidMemberAccessKey,r)}}catch(t){throw t}}function W(e,r){try{const t=A(e,r.argument);if(u.isBoolean(t)){if("!"===r.operator)return!t;if("-"===r.operator)return-1*u.toNumber(t);if("+"===r.operator)return 1*u.toNumber(t);if("~"===r.operator)return~u.toNumber(t);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.UnsupportedUnaryOperator,r)}if("~"===r.operator)return~u.toNumber(t);if("-"===r.operator)return-1*u.toNumber(t);if("+"===r.operator)return 1*u.toNumber(t);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.UnsupportedUnaryOperator,r)}catch(t){throw t}}function j(e,r){try{const t=[];for(let o=0;o<r.elements.length;o++){const n=A(e,r.elements[o]);if(u.isFunctionParameter(n))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.NoFunctionInArray,r);n===u.voidOperation?t.push(null):t.push(n)}return t}catch(t){throw t}}function V(e,r){try{const t=[A(e,r.left),A(e,r.right)],o=t[0],n=t[1];switch(r.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return u.binaryOperator(u.toNumber(o),u.toNumber(n),r.operator);case"==":return u.equalityTest(o,n);case"!=":return!u.equalityTest(o,n);case"<":case">":case"<=":case">=":return u.greaterThanLessThan(o,n,r.operator);case"+":return u.isString(o)||u.isString(n)?u.toString(o)+u.toString(n):u.toNumber(o)+u.toNumber(n);case"-":return u.toNumber(o)-u.toNumber(n);case"*":return u.toNumber(o)*u.toNumber(n);case"/":return u.toNumber(o)/u.toNumber(n);case"%":return u.toNumber(o)%u.toNumber(n);default:throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.UnsupportedOperator,r)}}catch(t){throw t}}function H(e,r){try{const t=A(e,r.left);if(u.isBoolean(t))switch(r.operator){case"||":if(!0===t)return t;{const t=A(e,r.right);if(u.isBoolean(t))return t;throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.LogicExpressionOrAnd,r)}case"&&":if(!1===t)return t;{const t=A(e,r.right);if(u.isBoolean(t))return t;throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.LogicExpressionOrAnd,r)}default:throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.LogicExpressionOrAnd,r)}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,r)}catch(t){throw t}}function Y(e,r){return r.value?r.value.cooked:""}function z(e,r,t){if(u.isFunctionParameter(e))throw new i.ArcadeExecutionError(r,i.ExecutionErrorCodes.NoFunctionInTemplateLiteral,t);return e}function J(e,r){let t="",o=0;for(const n of r.quasis)if(t+=n.value?n.value.cooked:"",!1===n.tail){t+=r.expressions[o]?u.toString(z(A(e,r.expressions[o]),e,r)):"",o++}return t}function Q(e,r){let t;try{const o=r.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[o])return t=e.localScope[o],!0===t.valueset||(t.value=A(e,t.node),t.valueset=!0),t.value;if(void 0!==e.globalScope[o])return t=e.globalScope[o],!0===t.valueset||(t.value=A(e,t.node),t.valueset=!0),t.value;throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidIdentifier,r)}catch(o){throw o}}function X(e,r){try{if("MemberExpression"===r.callee.type){const t=A(e,r.callee.object);if(!(t instanceof v))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FuncionNotFound,r);const o=!1===r.callee.computed?r.callee.property.name:A(e,r.callee.property);if(!t.hasGlobal(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FuncionNotFound,r);const n=t.global(o);if(!u.isFunctionParameter(n))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.CallNonFunction,r);return n.call(e,r)}if("Identifier"!==r.callee.type)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FuncionNotFound,r);if(null!=e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]){const t=e.localScope[r.callee.name.toLowerCase()];if(u.isFunctionParameter(t.value))return t.value.call(e,r);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.CallNonFunction,r)}if(void 0!==e.globalScope[r.callee.name.toLowerCase()]){const t=e.globalScope[r.callee.name.toLowerCase()];if(u.isFunctionParameter(t.value))return t.value.call(e,r);throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.CallNonFunction,r)}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.FuncionNotFound,r)}catch(t){throw t}}const Z={};function $(e,r,t,o){try{const n=A(e,r.arguments[t]);if(u.equalityTest(n,o))return A(e,r.arguments[t+1]);{const n=r.arguments.length-t;return 1===n?A(e,r.arguments[t]):2===n?null:3===n?A(e,r.arguments[t+2]):$(e,r,t+2,o)}}catch(n){throw n}}function ee(e,r,t,o){try{if(!0===o)return A(e,r.arguments[t+1]);if(3===r.arguments.length-t)return A(e,r.arguments[t+2]);{const o=A(e,r.arguments[t+2]);if(!1===u.isBoolean(o))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r.arguments[t+2]);return ee(e,r,t+2,o)}}catch(n){throw n}}function re(e,r,t,o){try{const n=e.body;if(t.length!==e.params.length)throw new i.ArcadeExecutionError(r,i.ExecutionErrorCodes.WrongNumberOfParameters,o);if(null!=r.localScope)for(let o=0;o<t.length;o++)r.localScope[e.params[o].name.toLowerCase()]={value:t[o],valueset:!0,node:null};const a=A(r,n);if(a instanceof u.ReturnResult)return a.value;if(a===u.breakResult)throw new i.ArcadeExecutionError(r,i.ExecutionErrorCodes.UnexpectedToken,o);if(a===u.continueResult)throw new i.ArcadeExecutionError(r,i.ExecutionErrorCodes.UnexpectedToken,o);return a instanceof u.ImplicitResult?a.value:a}catch(n){throw n}}d.registerFunctions(Z,y),x.registerFunctions(Z,y),p.registerFunctions(Z,y),f.registerFunctions(Z,y),h.registerFunctions(Z,y),E.registerFunctions(Z,y),Z.iif=function(e,r){try{u.pcCheck(null===r.arguments?[]:r.arguments,3,3,e,r);const t=A(e,r.arguments[0]);if(!1===u.isBoolean(t))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r);return A(e,!0===t?r.arguments[1]:r.arguments[2])}catch(t){throw t}},Z.decode=function(e,r){try{if(r.arguments.length<2)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.WrongNumberOfParameters,r);if(2===r.arguments.length)return A(e,r.arguments[1]);{if((r.arguments.length-1)%2==0)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.WrongNumberOfParameters,r);const t=A(e,r.arguments[0]);return $(e,r,1,t)}}catch(t){throw t}},Z.when=function(e,r){try{if(r.arguments.length<3)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.WrongNumberOfParameters,r);if(r.arguments.length%2==0)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.WrongNumberOfParameters,r);const t=A(e,r.arguments[0]);if(!1===u.isBoolean(t))throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.BooleanConditionRequired,r.arguments[0]);return ee(e,r,0,t)}catch(t){throw t}};for(const ue in Z)Z[ue]={value:new c.NativeFunction(Z[ue]),valueset:!0,node:null};const te=function(){};function oe(e,r,t){const o=new te;e||(e={}),r||(r={});const i=new n({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});i.immutable=!1,o.textformatting={value:i,valueset:!0,node:null};for(const n in r)o[n]={value:new c.NativeFunction(r[n]),native:!0,valueset:!0,node:null};for(const n in e)e[n]&&"esri.Graphic"===e[n].declaredClass?o[n]={value:a.createFromGraphic(e[n],t),valueset:!0,node:null}:o[n]={value:e[n],valueset:!0,node:null};return o}te.prototype=Z,te.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},te.prototype.pi={value:Math.PI,valueset:!0,node:null};const ne={fixSpatialReference:u.fixSpatialReference,parseArguments:b,standardFunction:y};function ie(e){console.log(e)}function ae(e){const r={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:y,evaluateIdentifier:Q};for(let t=0;t<e.length;t++)e[t].registerFunctions(r);for(const t in r.functions)Z[t]={value:new c.NativeFunction(r.functions[t]),valueset:!0,node:null},te.prototype[t]=Z[t];for(let t=0;t<r.signatures.length;t++)s.addFunctionDeclaration(r.signatures[t],"sync")}function ce(e,r){let t=r.spatialReference;null==t&&(t=new w({wkid:102100}));let n=null;e.usesModules&&(n=new o.ArcadeModuleLoader(new Map,e.loadedModules));const a={spatialReference:t,globalScope:oe(r.vars,r.customfunctions,r.timeReference),localScope:null,exports:{},libraryResolver:n,console:r.console?r.console:ie,timeReference:r.timeReference??null,lrucache:r.lrucache,interceptor:r.interceptor,depthCounter:{depth:1}};let c=A(a,e);if(c instanceof u.ReturnResult&&(c=c.value),c instanceof u.ImplicitResult&&(c=c.value),c===u.voidOperation&&(c=null),c===u.breakResult)throw new i.ArcadeExecutionError(a,i.ExecutionErrorCodes.IllegalResult,null);if(c===u.continueResult)throw new i.ArcadeExecutionError(a,i.ExecutionErrorCodes.IllegalResult,null);if(u.isFunctionParameter(c))throw new i.ArcadeExecutionError(a,i.ExecutionErrorCodes.IllegalResult,null);return c}ae([l.ArrayFunctions]),e.executeScript=ce,e.extend=ae,e.functionHelper=ne,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
