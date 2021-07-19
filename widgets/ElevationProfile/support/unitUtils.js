/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/unitUtils"],(function(e,t,n){"use strict";function i(e,i){if(t.isNone(e)||t.isNone(i))return null;const{samples:a,spatialReference:l}=e,{distance:r,elevation:v}=i,c=n.getMetersPerUnitForSR(l),u=n.getMetersPerVerticalUnitForSR(l),m=a.length,p=new Array(m);for(let t=0;t<m;++t){const e=a[t],n=e.sampledZ,i=e.coordinate;p[t]={x:i[0],y:i[1],z:n,distance:o(e.distance,c,r),elevation:s(n,u,v)}}return p}function a(e,i){if(t.isNone(e)||t.isNone(i)||t.isNone(e.statistics)||t.isNone(e.spatialReference))return null;const{distance:a,elevation:l}=i,{statistics:r,spatialReference:v}=e,c=n.getMetersPerUnitForSR(v),u=n.getMetersPerVerticalUnitForSR(v);return{maxDistance:o(r.maxDistance,c,a),minElevation:s(r.minElevation,u,l),maxElevation:s(r.maxElevation,u,l),avgElevation:s(r.avgElevation,u,l),elevationGain:s(r.elevationGain,u,l),elevationLoss:s(r.elevationLoss,u,l),maxPositiveSlope:r.maxPositiveSlope,maxNegativeSlope:r.maxNegativeSlope,avgPositiveSlope:r.avgPositiveSlope,avgNegativeSlope:r.avgNegativeSlope}}function o(e,t,i){return null==e?null:n.convertUnit(e*t,"meters",i)}function s(e,t,i){return null==e?null:n.convertUnit(e*t,"meters",i)}e.convertSamples=i,e.convertStatistics=a,Object.defineProperty(e,"__esModule",{value:!0})}));
