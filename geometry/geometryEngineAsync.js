/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../geometry","../core/workers/workers","./Point","./support/jsonUtils"],(function(n,e,t,r,i,o){"use strict";function u(n){var e;return Array.isArray(n)?null==(e=n[0])?void 0:e.spatialReference:null==n?void 0:n.spatialReference}function c(n){return n?Array.isArray(n)?n.map(c):n.toJSON?n.toJSON():n:n}function a(n){return Array.isArray(n)?n.map((n=>o.fromJSON(n))):o.fromJSON(n)}function s(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}let l;function f(){return p.apply(this,arguments)}function p(){return(p=e._asyncToGenerator((function*(){return l||(l=r.open("geometryEngineWorker",{strategy:"distributed"})),l}))).apply(this,arguments)}function y(n,e){return h.apply(this,arguments)}function h(){return(h=e._asyncToGenerator((function*(n,e){return(yield f()).invoke("executeGEOperation",{operation:n,parameters:c(e)})}))).apply(this,arguments)}function d(n){return y("extendedSpatialReferenceInfo",[n])}function m(n,e){return g.apply(this,arguments)}function g(){return g=e._asyncToGenerator((function*(n,e){return a(yield y("clip",[u(n),n,e]))})),g.apply(this,arguments)}function _(n,e){return G.apply(this,arguments)}function G(){return G=e._asyncToGenerator((function*(n,e){return a(yield y("cut",[u(n),n,e]))})),G.apply(this,arguments)}function T(n,e){return y("contains",[u(n),n,e])}function A(n,e){return y("crosses",[u(n),n,e])}function x(n,e,t){return y("distance",[u(n),n,e,t])}function S(n,e){return y("equals",[u(n),n,e])}function v(n,e){return y("intersects",[u(n),n,e])}function O(n,e){return y("touches",[u(n),n,e])}function w(n,e){return y("within",[u(n),n,e])}function J(n,e){return y("disjoint",[u(n),n,e])}function N(n,e){return y("overlaps",[u(n),n,e])}function R(n,e,t){return y("relate",[u(n),n,e,t])}function E(n){return y("isSimple",[u(n),n])}function V(n){return b.apply(this,arguments)}function b(){return b=e._asyncToGenerator((function*(n){return a(yield y("simplify",[u(n),n]))})),b.apply(this,arguments)}function k(n){return H.apply(this,arguments)}function H(){return H=e._asyncToGenerator((function*(n,e=!1){return a(yield y("convexHull",[u(n),n,e]))})),H.apply(this,arguments)}function I(n,e){return j.apply(this,arguments)}function j(){return j=e._asyncToGenerator((function*(n,e){return a(yield y("difference",[u(n),n,e]))})),j.apply(this,arguments)}function z(n,e){return D.apply(this,arguments)}function D(){return(D=e._asyncToGenerator((function*(n,e){return a(yield y("symmetricDifference",[u(n),n,e]))}))).apply(this,arguments)}function L(n,e){return B.apply(this,arguments)}function B(){return B=e._asyncToGenerator((function*(n,e){return a(yield y("intersect",[u(n),n,e]))})),B.apply(this,arguments)}function P(n){return q.apply(this,arguments)}function q(){return(q=e._asyncToGenerator((function*(n,e=null){const t=s(n,e);return a(yield y("union",[u(t),t]))}))).apply(this,arguments)}function C(n,e,t,r,i,o){return M.apply(this,arguments)}function M(){return M=e._asyncToGenerator((function*(n,e,t,r,i,o){return a(yield y("offset",[u(n),n,e,t,r,i,o]))})),M.apply(this,arguments)}function U(n,e,t){return W.apply(this,arguments)}function W(){return W=e._asyncToGenerator((function*(n,e,t,r=!1){const i=[u(n),n,e,t,r];return a(yield y("buffer",i))})),W.apply(this,arguments)}function F(n,e,t,r,i,o){return K.apply(this,arguments)}function K(){return K=e._asyncToGenerator((function*(n,e,t,r,i,o){const c=[u(n),n,e,t,r,i,o];return a(yield y("geodesicBuffer",c))})),K.apply(this,arguments)}function Q(n,e){return X.apply(this,arguments)}function X(){return X=e._asyncToGenerator((function*(n,e,t=!0){const r=yield y("nearestCoordinate",[u(n),n,e,t]);return{...r,coordinate:i.fromJSON(r.coordinate)}})),X.apply(this,arguments)}function Y(n,e){return Z.apply(this,arguments)}function Z(){return Z=e._asyncToGenerator((function*(n,e){const t=yield y("nearestVertex",[u(n),n,e]);return{...t,coordinate:i.fromJSON(t.coordinate)}})),Z.apply(this,arguments)}function $(n,e,t,r){return nn.apply(this,arguments)}function nn(){return nn=e._asyncToGenerator((function*(n,e,t,r){return(yield y("nearestVertices",[u(n),n,e,t,r])).map((n=>({...n,coordinate:i.fromJSON(n.coordinate)})))})),nn.apply(this,arguments)}function en(n){return"xmin"in n?n.center:"x"in n?n:n.extent.center}function tn(n,e,t){return rn.apply(this,arguments)}function rn(){return rn=e._asyncToGenerator((function*(n,e,t){var r;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;t=null!=(r=t)?r:en(n);const o=n.constructor.fromJSON(yield y("rotate",[i,n,e,t]));return o.spatialReference=i,o})),rn.apply(this,arguments)}function on(n,e){return un.apply(this,arguments)}function un(){return un=e._asyncToGenerator((function*(n,e){var t;if(null==n)throw new Error("Illegal Argument Exception");const r=n.spatialReference;e=null!=(t=e)?t:en(n);const i=n.constructor.fromJSON(yield y("flipHorizontal",[r,n,e]));return i.spatialReference=r,i})),un.apply(this,arguments)}function cn(n,e){return an.apply(this,arguments)}function an(){return an=e._asyncToGenerator((function*(n,e){var t;if(null==n)throw new Error("Illegal Argument Exception");const r=n.spatialReference;e=null!=(t=e)?t:en(n);const i=n.constructor.fromJSON(yield y("flipVertical",[r,n,e]));return i.spatialReference=r,i})),an.apply(this,arguments)}function sn(n,e,t,r){return ln.apply(this,arguments)}function ln(){return ln=e._asyncToGenerator((function*(n,e,t,r){return a(yield y("generalize",[u(n),n,e,t,r]))})),ln.apply(this,arguments)}function fn(n,e,t){return pn.apply(this,arguments)}function pn(){return pn=e._asyncToGenerator((function*(n,e,t){return a(yield y("densify",[u(n),n,e,t]))})),pn.apply(this,arguments)}function yn(n,e,t){return hn.apply(this,arguments)}function hn(){return hn=e._asyncToGenerator((function*(n,e,t,r=0){return a(yield y("geodesicDensify",[u(n),n,e,t,r]))})),hn.apply(this,arguments)}function dn(n,e){return y("planarArea",[u(n),n,e])}function mn(n,e){return y("planarLength",[u(n),n,e])}function gn(n,e,t){return y("geodesicArea",[u(n),n,e,t])}function _n(n,e,t){return y("geodesicLength",[u(n),n,e,t])}n.buffer=U,n.clip=m,n.contains=T,n.convexHull=k,n.crosses=A,n.cut=_,n.densify=fn,n.difference=I,n.disjoint=J,n.distance=x,n.equals=S,n.extendedSpatialReferenceInfo=d,n.flipHorizontal=on,n.flipVertical=cn,n.generalize=sn,n.geodesicArea=gn,n.geodesicBuffer=F,n.geodesicDensify=yn,n.geodesicLength=_n,n.intersect=L,n.intersects=v,n.isSimple=E,n.nearestCoordinate=Q,n.nearestVertex=Y,n.nearestVertices=$,n.offset=C,n.overlaps=N,n.planarArea=dn,n.planarLength=mn,n.relate=R,n.rotate=tn,n.simplify=V,n.symmetricDifference=z,n.touches=O,n.union=P,n.within=w,Object.defineProperty(n,"__esModule",{value:!0})}));
