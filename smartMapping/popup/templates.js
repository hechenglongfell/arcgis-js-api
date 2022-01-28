/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Error","./classBreaks","./dotDensity","./heatmap","./predominance","./relationship","./simple","./uniqueValues"],(function(e,r,t,n,a,l,s,i,p,u){"use strict";function o(e){const{layer:r}=e,n=e.renderer||r.renderer;if(!n)throw new t("getTemplates:invalid-parameters","'renderer' or 'layer.renderer' must be provided");return{layer:r,renderer:n}}function d(e){return y.apply(this,arguments)}function y(){return(y=r._asyncToGenerator((function*(e){const{renderer:r,layer:t}=o(e);if("simple"===r.type)return p.getTemplates({renderer:r,layer:t});if("class-breaks"===r.type)return n.getTemplates({renderer:r,layer:t});if("dot-density"===r.type)return a.getTemplates({renderer:r,layer:t});if("heatmap"===r.type)return l.getTemplates({renderer:r,layer:t});if("unique-value"===r.type){const e=r.authoringInfo&&r.authoringInfo.type;return"predominance"===e?s.getTemplates({renderer:r,layer:t}):"relationship"===e?i.getTemplates({renderer:r,layer:t}):u.getTemplates({renderer:r,layer:t})}return null}))).apply(this,arguments)}e.getTemplates=d,Object.defineProperty(e,"__esModule",{value:!0})}));
