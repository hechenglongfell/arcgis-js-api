/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../symbols","../../core/Error","../../intl/messages","../../layers/support/LabelClass","../../layers/support/LabelExpressionInfo","../heuristics/clusterMinSize","../support/clusterUtils","../../views/2d/layers/support/clusterUtils","../../symbols/TextSymbol"],(function(e,n,t,r,s,l,o,i,a,u,c){"use strict";function p(e){return f.apply(this,arguments)}function f(){return(f=n._asyncToGenerator((function*(e){const{layer:n,renderer:t,view:s}=e;yield Promise.all([n.load(),s.when()]);const l=t||n.renderer;return u.isClusterCompatibleRenderer(l)?{layer:n,renderer:l,view:s}:Promise.reject(new r("clusters-label-schemes:invalid-parameters","'renderer' is not valid"))}))).apply(this,arguments)}function y(e,n,t){const r="unique-value"===e.type?e.uniqueValueInfos:[];return a.getPredominantTypeExpression(r,n,t)}function d(e){return`\n  $feature["${e}"];\n  var value = $feature["${e}"];\n  var num = Count(Text(Round(value)));\n  var label = When(\n    num < 4, Text(value, "#.#"),\n    num == 4, Text(value / Pow(10, 3), "#.0k"),\n    num <= 6, Text(value / Pow(10, 3), "#k"),\n    num == 7, Text(value / Pow(10, 6), "#.0m"),\n    num > 7, Text(value / Pow(10, 6), "#m"),\n    Text(value, "#,###")\n  );\n  return label;\n  `}function m(e){const n=new c({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});return new l({symbol:n,deconflictionStrategy:"none",labelPlacement:"center-center",labelExpressionInfo:new o({expression:e})})}function v(e){return h.apply(this,arguments)}function h(){return(h=n._asyncToGenerator((function*(e){const{renderer:n,view:t,statInfo:r}=e,s=null==r?void 0:r.statisticType,l=r?a.getClusterField(r.attributeInfo,s):a.clusterCountField,o=m("type"===s?y(n,l,e.noneValueLabel):d(l));return{name:r?`clusters-${s}-${a.getClusterFieldHash(l,s)}`:"clusters-count",labelingInfo:[o],clusterMinSize:yield i(o.symbol,t),fieldName:l}}))).apply(this,arguments)}function b(e){const n=new Map;for(const t of e)"size"===t.attributeInfo.vvType?n.set(t.statisticHash,t):n.has(t.statisticHash)||n.set(t.statisticHash,t);return[...n.values()]}function w(e){return x.apply(this,arguments)}function x(){return(x=n._asyncToGenerator((function*(e){const[{renderer:n,layer:t,view:r},l]=yield Promise.all([p(e),s.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!n)return null;let o=null;const i=[],u=b(a.getStatisticInfos(t,n,!1));for(const s of u){const e=yield v({renderer:n,view:r,statInfo:s,noneValueLabel:l.clusters.predominantNoneValue});"size"===s.attributeInfo.vvType?o=e:i.push(e)}const c=yield v({renderer:n,view:r});return o?i.unshift(c):o=c,{primaryScheme:o,secondarySchemes:i}}))).apply(this,arguments)}e.getLabelSchemes=w,Object.defineProperty(e,"__esModule",{value:!0})}));
