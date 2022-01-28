/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],(function(e,r,t,n,a){"use strict";function s(e){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(e){e=yield a.processRasterRendererParameters(e);const{rasterInfo:r}=e.layer;if(1===r.bandCount)throw new t("raster-rgb-renderer:not-supported","Only multiband image is supported");const{rgbBandIds:s}=e;if(s&&3!==s.length)throw new t("raster-rgb-renderer:invalid-parameters","rgb band ids must have exactly three 0-based band indices");return s||(e.rgbBandIds=n.getDefaultBandCombination(r)),e}))).apply(this,arguments)}function d(e){return u.apply(this,arguments)}function u(){return(u=r._asyncToGenerator((function*(e){const r=(e=yield s(e)).layer,{rasterInfo:t}=r,{rgbBandIds:a}=e,i={bandIds:a,stretchType:e.stretchType,includeStatisticsInStretch:e.includeStatisticsInStretch};let d=n.createStretchRenderer(t,i);return e.estimateStatistics&&d.dynamicRangeAdjustment&&(yield r.updateRasterInfoWithEstimatedStats({renderingRule:e.renderingRule,signal:e.signal}),d=n.createStretchRenderer(t,i)),c(d,e),{renderer:d,rgbBandIds:a}}))).apply(this,arguments)}function c(e,r){const{gamma:t,useGamma:n,dynamicRangeAdjustment:a}=r;3===(null==t?void 0:t.length)&&(e.gamma=t),null!=n&&(e.useGamma=n),null!=a&&(e.dynamicRangeAdjustment=a)}e.createRenderer=d,Object.defineProperty(e,"__esModule",{value:!0})}));
