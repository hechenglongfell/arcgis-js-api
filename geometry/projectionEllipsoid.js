/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./SpatialReference","./support/Ellipsoid","./support/spatialReferenceUtils"],(function(e,n,r,i){"use strict";function o(e){return new n({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const t=o(r.earth),c=o(r.mars),S=o(r.moon),a=new n({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${r.earth.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function s(e){return e&&e===r.mars?c:e&&e===r.moon?S:t}function E(e){return e&&(i.isMars(e)||e===c)?c:e&&(i.isMoon(e)||e===S)?S:t}function p(e){return e&&(i.isMars(e)||e===c)?r.mars:e&&(i.isMoon(e)||e===S)?r.moon:r.earth}function l(e){return i.isWKIDFromMars(e)?r.mars:i.isWKIDFromMoon(e)?r.moon:r.earth}e.SphericalECEFSpatialReference=t,e.SphericalPCPFMars=c,e.SphericalPCPFMoon=S,e.WGS84ECEFSpatialReference=a,e.createSphericalPCPF=o,e.getReferenceEllipsoid=p,e.getReferenceEllipsoidFromWKID=l,e.getSphericalPCPF=E,e.getSphericalPCPFForEllipsoid=s,Object.defineProperty(e,"__esModule",{value:!0})}));
