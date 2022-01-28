/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../config","../../core/Error","../Portal","../../rest/geometryService/project","../../rest/support/ProjectParameters"],(function(e,r,t,n,o,i,l){"use strict";function c(){return u.apply(this,arguments)}function u(){return(u=r._asyncToGenerator((function*(e=null,r){var i,l;if(t.geometryServiceUrl)return t.geometryServiceUrl;if(!e)throw new n("internal:geometry-service-url-not-configured");let c;c="portal"in e?e.portal||o.getDefault():e,yield c.load({signal:r});const u=null==(i=c.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!u)throw new n("internal:geometry-service-url-not-configured");return u}))).apply(this,arguments)}function a(e,r){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,t=null,o){const u=yield c(t,o),a=new l;a.geometries=[e],a.outSpatialReference=r;const s=yield i.project(u,a,{signal:o});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new n("internal:geometry-service-projection-failed")}))).apply(this,arguments)}e.getGeometryServiceURL=c,e.projectGeometry=a,Object.defineProperty(e,"__esModule",{value:!0})}));
