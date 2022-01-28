/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/maybe","../../renderers/support/AuthoringInfo","../../renderers/support/ClassBreakInfo","../../renderers/visualVariables/support/SizeStop","../../renderers/visualVariables/support/visualVariableUtils","./color","./size","./support/utils","../support/utils","../support/adapters/support/layerUtils","../symbology/support/aboveAndBelowUtils","../../symbols/support/cimSymbolUtils","../../symbols/support/Symbol3DMaterial"],(function(e,i,a,l,o,s,n,t,r,u,p,c,d,m,y,v){"use strict";const b=2**53-1;function f(e){return h.apply(this,arguments)}function h(){return(h=i._asyncToGenerator((function*(e){var i,o;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new a("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new a("univariate-colorsize-visual-variables:missing-parameters","View is required when 'valueExpression' is specified");if("above-and-below"===e.theme&&null!=(i=e.sizeOptions)&&i.sizeOptimizationEnabled)throw new a("univariate-colorsize-visual-variables:invalid-parameters","sizeOptimizationEnabled cannot be true for 'above-and-below' theme");const s={...e},n=d.createLayerAdapter(s.layer,d.featureCapableLayerTypes);if(s.layer=n,s.theme=s.theme||null!=(o=s.colorOptions)&&o.theme?s.theme:"high-to-low","90-10"===s.theme)throw new a("univariate-colorsize-visual-variables:not-supported","Only 'high-to-low', 'above-and-below', 'above', 'below' themes are supported.");if(!n)throw new a("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(d.featureCapableLayerTypes).join(", "));const t=l.isSome(s.signal)?{signal:s.signal}:null;yield n.load(t);const r=yield c.getFieldsList({field:s.field,normalizationField:s.normalizationField,valueExpression:s.valueExpression}),u=p.verifyBasicFieldValidity(n,r,"univariate-colorsize-visual-variables:invalid-parameters");if(u)throw u;return s}))).apply(this,arguments)}function w(e,i){var a;const l={...e},{sizeOptions:o,theme:s}=l,n=l.legendOptions||(null==(a=l.sizeOptions)?void 0:a.legendOptions);return delete l.sizeOptions,delete l.colorOptions,{...l,...o,statistics:i||l.statistics,theme:"above-and-below"===s?null:s,legendOptions:n}}function z(e,i){var a;const l={...e},o=l.colorOptions,s=l.theme||(null==o?void 0:o.theme),n=l.legendOptions||(null==(a=l.colorOptions)?void 0:a.legendOptions);return delete l.sizeOptions,delete l.colorOptions,{...l,...o,statistics:i||l.statistics,theme:s,legendOptions:n}}function V(e){return g.apply(this,arguments)}function g(){return(g=i._asyncToGenerator((function*(e){var i;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new a("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new a("univariate-colorsize-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};o.symbolType=o.symbolType||"2d",o.colorOptions||(o.colorOptions={}),o.colorOptions.isContinuous=null!=(i=o.colorOptions.isContinuous)&&i;const s=d.createLayerAdapter(o.layer,d.featureCapableLayerTypes);if(o.layer=s,!s)throw new a("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(d.featureCapableLayerTypes).join(", "));const n=l.isSome(o.signal)?{signal:o.signal}:null;if(yield s.load(n),"above-and-below"===o.theme&&o.symbolOptions){if(o.symbolType.indexOf("3d-volumetric")>-1)throw new a("univariate-colorsize-continuous-renderer:invalid-parameters","'symbolOptions' is applicable for '2d' and '3d-flat' 'symbolType' only");if("point"!==s.geometryType&&"polygon"!==s.geometryType)throw new a("univariate-colorsize-continuous-renderer:invalid-parameters","'symbolOptions' only apply to layers with 'point' or 'polygon' geometryType")}const t=yield c.getFieldsList({field:o.field,normalizationField:o.normalizationField,valueExpression:o.valueExpression}),r=p.verifyBasicFieldValidity(s,t,"univariate-colorsize-continuous-renderer:invalid-parameters");if(r)throw r;return o}))).apply(this,arguments)}function O(e){const i={...e},a={...i.sizeOptions};return delete i.sizeOptions,delete i.colorOptions,delete a.sizeOptimizationEnabled,{...i,...a}}function S(e,i){if("type"in e&&"cim"===e.type)y.applyCIMSymbolColor(e,i);else if("type"in e&&e.type.indexOf("3d")>-1){e.symbolLayers.forEach((e=>{"material"in e&&"color"in e.material&&(e.material?e.material.color=i:e.material=new v.default({color:i}))}))}else"color"in e&&(e.color=i)}function x(e,i,a){if((null!=i&&i.symbolStyle||null!=i&&i.symbols)&&("point"===a||"polygon"===a))return i.symbols||m.getAboveAndBelowSymbols(i.symbolStyle);const l=e.classBreakInfos[0].symbol;return{above:l.clone(),below:l.clone()}}function T(e,i,a){var l;const o=a.symbolOptions,n=a.layer,t=null!=o&&o.symbols?"custom":null==o?void 0:o.symbolStyle,r=null==(l=a.colorOptions)?void 0:l.isContinuous;if(E(e,i,r),t||!r){const{stops:a}=i.size.visualVariables[0],{above:l,below:u}=x(e,o,n.geometryType);if(!r){const e=i.color.colorScheme.colors,a=e[0];S(l,e[e.length-1]),S(u,a)}e.classBreakInfos=[new s({minValue:-b,maxValue:a[2].value,symbol:u}),new s({minValue:a[2].value,maxValue:b,symbol:l})],t&&(e.authoringInfo.univariateSymbolStyle=t)}}function E(e,i,a=!0){var l;const o=null==i||null==(l=i.authoringInfo)?void 0:l.clone(),s=i.size.visualVariables.map((e=>e.clone()));a?s.push(i.color.visualVariable.clone()):o.visualVariables=o.visualVariables.filter((e=>"size"===e.type)),s.push(...e.visualVariables.filter((e=>"target"in e&&"outline"===e.target)).map((e=>e.clone()))),e.authoringInfo=o,e.visualVariables=s}function I(e){const i={...e},a=i.symbolType,l=a.indexOf("3d-volumetric")>-1;delete i.symbolType,delete i.defaultSymbolEnabled;const o=i;return o.worldScale=l,l&&(o.sizeOptions={...o.sizeOptions},o.sizeOptions.axis="3d-volumetric-uniform"===a?"all":"height"),o}function C(e,i,a,l){return L.apply(this,arguments)}function L(){return(L=i._asyncToGenerator((function*(e,i,a,l){const o=i[0],s=i[1],r=Math.round((s-o)/2)+o,u=e.clone();u.stops=[new n({value:a[0],size:s}),new n({value:a[1],size:r}),new n({value:a[2],size:o}),new n({value:a[3],size:r}),new n({value:a[4],size:s})],e.stops=[new n({value:l[0],size:t.getSize(u,l[0])}),new n({value:l[1],size:t.getSize(u,l[1])}),new n({value:l[2],size:t.getSize(u,l[2])}),new n({value:l[3],size:t.getSize(u,l[3])}),new n({value:l[4],size:t.getSize(u,l[4])})]}))).apply(this,arguments)}function D(e,i,a,l){return q.apply(this,arguments)}function q(){return(q=i._asyncToGenerator((function*(e,i,a,l){const o=e.filter((e=>"width-and-depth"!==e.axis&&!e.target))[0],s="number"==typeof(null==o?void 0:o.minSize)?null==o?void 0:o.minSize:null,n="number"==typeof(null==o?void 0:o.maxSize)?null==o?void 0:o.maxSize:null;if(null!=(null==o?void 0:o.minDataValue)&&null!=s&&null!=n)if(l)if("above-and-below"===l){o.minDataValue=null,o.maxDataValue=null,o.minSize=null,o.maxSize=null;const e=p.createStopValuesForAboveBelow(a),l=p.clampAboveAndBelowStopValues(e,a);yield C(o,[s,n],e,l),i.stops.forEach(((e,i)=>e.value=l[i]))}else{const{minDataValue:e,maxDataValue:a}=o,l=p.createDefaultStopValues(e,a,5);i.stops.forEach(((e,i)=>e.value=l[i])),o.minDataValue=l[0],o.maxDataValue=l[l.length-1]}else o.minDataValue=i.stops[0].value,o.maxDataValue=i.stops[i.stops.length-1].value}))).apply(this,arguments)}function B(e,i,a){const{theme:l,minValue:s,maxValue:n}=e,t=i.authoringInfo.visualVariables[0].clone(),r=a.authoringInfo.visualVariables[0].clone();if("above-and-below"===l){const e=i.visualVariable.stops;t.minSliderValue=r.minSliderValue=null!=s?s:e[0].value,t.maxSliderValue=r.maxSliderValue=null!=n?n:e[e.length-1].value,r.theme="above-and-below"}return new o({type:"univariate-color-size",univariateTheme:l,visualVariables:[t,r]})}function _(e){return A.apply(this,arguments)}function A(){return(A=i._asyncToGenerator((function*(e){const i=yield f(e),a=yield r.createVisualVariable(z(i)),{visualVariable:l,statistics:o}=a,s=yield u.createVisualVariables(w(i,o)),n=s.visualVariables;return yield D(n,l,o,i.theme),{basemapId:s.basemapId,basemapTheme:s.basemapTheme,statistics:o,defaultValuesUsed:a.defaultValuesUsed,color:{visualVariable:l,colorScheme:a.colorScheme},size:{visualVariables:n,sizeScheme:s.sizeScheme},authoringInfo:B(i,a,s)}}))).apply(this,arguments)}function F(e){return U.apply(this,arguments)}function U(){return(U=i._asyncToGenerator((function*(e){return G(e)}))).apply(this,arguments)}function G(e){return k.apply(this,arguments)}function k(){return(k=i._asyncToGenerator((function*(e){var i;const a=yield V(e),{renderer:l,statistics:o,defaultValuesUsed:s}=yield u.createContinuousRenderer(O(a)),n=I(a);n.statistics=o;const t=yield _(n);return"above-and-below"===a.theme?T(l,t,a):E(l,t),{renderer:l,statistics:o,defaultValuesUsed:s,color:null!=(i=a.colorOptions)&&i.isContinuous||"above-and-below"!==a.theme?t.color:null,size:t.size,basemapId:t.basemapId,basemapTheme:t.basemapTheme}}))).apply(this,arguments)}e.createContinuousRenderer=F,e.createRenderer=G,e.createVisualVariables=_,Object.defineProperty(e,"__esModule",{value:!0})}));
