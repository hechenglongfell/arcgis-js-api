/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../core/maybe","../../core/unitUtils","../../renderers/support/clickToleranceUtils","../../geometry/Extent"],(function(e,t,r,n,a,i){"use strict";function o(e,t,a,o=new i){let s=0;if("2d"===a.type)s=t*(a.resolution??0);else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(e),o=a.basemapSpatialReference;s=r.isSome(o)&&!o.equals(a.spatialReference)?n.getMetersPerUnitForSR(o)/n.getMetersPerUnitForSR(a.spatialReference):t*i}const c=e.x-s,l=e.y-s,m=e.x+s,p=e.y+s,{spatialReference:u}=a;return o.xmin=Math.min(c,m),o.ymin=Math.min(l,p),o.xmax=Math.max(c,m),o.ymax=Math.max(l,p),o.spatialReference=u,o}function s(e,t,n){const i=n.toMap(e);if(r.isNone(i))return!1;return o(i,a.calculateTolerance(),n,c).intersects(t)}const c=new i;e.createQueryGeometry=o,e.intersectsDrapedGeometry=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
