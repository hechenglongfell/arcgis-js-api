/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../core/maybe","../../../core/unitUtils","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/Extent","../../../geometry/projectionEllipsoid"],(function(e,t,n,i,r,a,s,o){"use strict";function c(e,t,n){return 1===e?new u(n):new m(t,n)}let m=function(){function e(e,t){this.elevationProvider=e,this._referenceEllipsoid=o.getReferenceEllipsoid(t),this.unitInMeters=i.getMetersPerUnitForSR(t,this._referenceEllipsoid.metersPerDegree)}return e.prototype.compute=function(e,i,a,o,c){c||(c={near:0,far:0});let m=e[2]*this.unitInMeters;const u=m,x=m-o,y=this.elevationProvider?this.elevationProvider.elevationBounds:null;y&&(m=x>=0?u-this.unitInMeters*y.min:this.unitInMeters*y.max-u);const v={x:(a=n.isSome(a)?a:new s({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0})).xmax-a.xmin,y:a.ymax-a.ymin,z:4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin)},E=Math.max(v.x,v.y,v.z);r.subtract(d,i,e),p[0]=d[0]>0?a.xmax:a.xmin,p[1]=d[1]>0?a.ymax:a.ymin,p[2]=d[2]>0?E/2:-E/2,r.subtract(p,p,e),r.normalize(d,d);const g=1.1*r.dot(p,d)*this.unitInMeters,I=Math.sqrt(m*(m+2*this._referenceEllipsoid.radius)),_=Math.max(a.xmax-a.xmin,a.ymax-a.ymin),b=_*M*this.unitInMeters,P=_*f*this.unitInMeters;let z=t.clamp((m-P)/(b-P),0,1);z*=z*z;let w=t.lerp(I,g,z);return w*=Math.max(Math.log(Math.abs(x)),1),w=Math.min(w,Math.max(34064e4,E)),w/=this.unitInMeters,l(w,h,this.unitInMeters,c)},e}(),u=function(){function e(e){this._referenceEllipsoid=o.getReferenceEllipsoid(e)}return e.prototype.compute=function(e,n,i,a,s){s||(s={near:0,far:0});const o=r.length(e)-this._referenceEllipsoid.radius,c=this._referenceEllipsoid.radius+Math.min(0,a),m=Math.abs(o-a),u=Math.max(m,Math.abs(o));return l(1.2*Math.sqrt(u*(u+2*c)),t.clamp(2e4-(Math.log(u)-7.983)/9.011*19e3,1e3,2e4),1,s)},e}();function l(e,t,n,i){const r=x/n;return e/t>r?(i.far=e,i.near=i.far/t):(i.near=r,i.far=i.near*t),i}const h=2e4,x=2,M=.001,f=1e-4,p=a.create(),d=a.create();e.createNearFarHeuristic=c,Object.defineProperty(e,"__esModule",{value:!0})}));
