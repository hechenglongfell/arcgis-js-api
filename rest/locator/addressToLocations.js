/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./utils","../support/AddressCandidate","../support/AddressToLocationsParameters"],(function(e,t,n,s,r,a,i){"use strict";function o(e,t,n){return d.apply(this,arguments)}function d(){return(d=t._asyncToGenerator((function*(e,t,r){t=i.from(t);const a=s.parseUrl(e),{address:o,...d}=t.toJSON(),c={...o,...d,f:"json"},l=s.encode({...a.query,...c}),p=s.asValidOptions(l,r),f=`${a.path}/findAddressCandidates`;return n(f,p).then(u)}))).apply(this,arguments)}function u({data:e}){if(!e)return[];const{candidates:t,spatialReference:n}=e;return t?t.map((e=>{if(!e)return;const{extent:t,location:s}=e,i=!t||r.isValidExtent(t);return r.isValidLocation(s)&&i?(t&&(t.spatialReference=n),s.spatialReference=n,a.fromJSON(e)):void 0})):[]}e.addressToLocations=o,Object.defineProperty(e,"__esModule",{value:!0})}));
