/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/geometryEngineBase","./geometryAdapters/hydrated"],(function(e,n,t,r){"use strict";function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return t.GeometryEngineApi.extendedSpatialReferenceInfo(e)}function a(e,n){return t.GeometryEngineApi.clip(r.hydratedAdapter,i(e),e,n)}function d(e,n){return t.GeometryEngineApi.cut(r.hydratedAdapter,i(e),e,n)}function c(e,n){return t.GeometryEngineApi.contains(r.hydratedAdapter,i(e),e,n)}function u(e,n){return t.GeometryEngineApi.crosses(r.hydratedAdapter,i(e),e,n)}function p(e,n,o){return t.GeometryEngineApi.distance(r.hydratedAdapter,i(e),e,n,o)}function f(e,n){return t.GeometryEngineApi.equals(r.hydratedAdapter,i(e),e,n)}function l(e,n){return t.GeometryEngineApi.intersects(r.hydratedAdapter,i(e),e,n)}function s(e,n){return t.GeometryEngineApi.touches(r.hydratedAdapter,i(e),e,n)}function y(e,n){return t.GeometryEngineApi.within(r.hydratedAdapter,i(e),e,n)}function A(e,n){return t.GeometryEngineApi.disjoint(r.hydratedAdapter,i(e),e,n)}function g(e,n){return t.GeometryEngineApi.overlaps(r.hydratedAdapter,i(e),e,n)}function h(e,n,o){return t.GeometryEngineApi.relate(r.hydratedAdapter,i(e),e,n,o)}function m(e){return t.GeometryEngineApi.isSimple(r.hydratedAdapter,i(e),e)}function E(e){return t.GeometryEngineApi.simplify(r.hydratedAdapter,i(e),e)}function G(e,n=!1){return t.GeometryEngineApi.convexHull(r.hydratedAdapter,i(e),e,n)}function w(e,n){return t.GeometryEngineApi.difference(r.hydratedAdapter,i(e),e,n)}function R(e,n){return t.GeometryEngineApi.symmetricDifference(r.hydratedAdapter,i(e),e,n)}function S(e,n){return t.GeometryEngineApi.intersect(r.hydratedAdapter,i(e),e,n)}function x(e,n=null){return t.GeometryEngineApi.union(r.hydratedAdapter,i(e),e,n)}function D(e,n,o,a,d,c){return t.GeometryEngineApi.offset(r.hydratedAdapter,i(e),e,n,o,a,d,c)}function L(e,n,o,a=!1){return t.GeometryEngineApi.buffer(r.hydratedAdapter,i(e),e,n,o,a)}function T(e,n,o,a,d,c){return t.GeometryEngineApi.geodesicBuffer(r.hydratedAdapter,i(e),e,n,o,a,d,c)}function v(e,n,o=!0){return t.GeometryEngineApi.nearestCoordinate(r.hydratedAdapter,i(e),e,n,o)}function V(e,n){return t.GeometryEngineApi.nearestVertex(r.hydratedAdapter,i(e),e,n)}function b(e,n,o,a){return t.GeometryEngineApi.nearestVertices(r.hydratedAdapter,i(e),e,n,o,a)}function H(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function z(e,n,r){if(null==e)throw new F;const i=e.spatialReference;if(null==(r=r??H(e)))throw new F;const o=e.constructor.fromJSON(t.GeometryEngineApi.rotate(e,n,r));return o.spatialReference=i,o}function B(e,n){if(null==e)throw new F;const r=e.spatialReference;if(null==(n=n??H(e)))throw new F;const i=e.constructor.fromJSON(t.GeometryEngineApi.flipHorizontal(e,n));return i.spatialReference=r,i}function N(e,n){if(null==e)throw new F;const r=e.spatialReference;if(null==(n=n??H(e)))throw new F;const i=e.constructor.fromJSON(t.GeometryEngineApi.flipVertical(e,n));return i.spatialReference=r,i}function O(e,n,o,a){return t.GeometryEngineApi.generalize(r.hydratedAdapter,i(e),e,n,o,a)}function P(e,n,o){return t.GeometryEngineApi.densify(r.hydratedAdapter,i(e),e,n,o)}function j(e,n,o,a=0){return t.GeometryEngineApi.geodesicDensify(r.hydratedAdapter,i(e),e,n,o,a)}function I(e,n){return t.GeometryEngineApi.planarArea(r.hydratedAdapter,i(e),e,n)}function J(e,n){return t.GeometryEngineApi.planarLength(r.hydratedAdapter,i(e),e,n)}function _(e,n,o){return t.GeometryEngineApi.geodesicArea(r.hydratedAdapter,i(e),e,n,o)}function k(e,n,o){return t.GeometryEngineApi.geodesicLength(r.hydratedAdapter,i(e),e,n,o)}function q(e,n){return t.GeometryEngineApi.intersectLinesToPoints(r.hydratedAdapter,i(e),e,n)}function C(e,n){t.GeometryEngineApi.changeDefaultSpatialReferenceTolerance(e,n)}function M(e){t.GeometryEngineApi.clearDefaultSpatialReferenceTolerance(e)}let F=function(e){function t(){return e.call(this,"Illegal Argument Exception")||this}return n._inheritsLoose(t,e),t}(n._wrapNativeSuper(Error));e.buffer=L,e.changeDefaultSpatialReferenceTolerance=C,e.clearDefaultSpatialReferenceTolerance=M,e.clip=a,e.contains=c,e.convexHull=G,e.crosses=u,e.cut=d,e.densify=P,e.difference=w,e.disjoint=A,e.distance=p,e.equals=f,e.extendedSpatialReferenceInfo=o,e.flipHorizontal=B,e.flipVertical=N,e.generalize=O,e.geodesicArea=_,e.geodesicBuffer=T,e.geodesicDensify=j,e.geodesicLength=k,e.intersect=S,e.intersectLinesToPoints=q,e.intersects=l,e.isSimple=m,e.nearestCoordinate=v,e.nearestVertex=V,e.nearestVertices=b,e.offset=D,e.overlaps=g,e.planarArea=I,e.planarLength=J,e.relate=h,e.rotate=z,e.simplify=E,e.symmetricDifference=R,e.touches=s,e.union=x,e.within=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
