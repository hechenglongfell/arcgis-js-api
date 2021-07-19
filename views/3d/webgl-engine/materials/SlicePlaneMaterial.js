/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../lib/AutoDisposable","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","../shaders/SlicePlaneMaterialTechnique"],(function(e,t,i,r,n,a,o,u,l){"use strict";let s=function(e){function i(t){return e.call(this,t,f)||this}t._inheritsLoose(i,e);var r=i.prototype;return r.intersect=function(e,t,i,r,n,a,o){return u.intersectTriangleGeometry(e,t,r,n,a,void 0,o)},r.createBufferWriter=function(){return new o.DefaultBufferWriter(o.PositionUVLayout)},r.getGLMaterial=function(e){return 0===e.output?new c(e):void 0},i}(a.Material),c=function(e){function i(t){var i;return(i=e.call(this,t)||this)._technique=new l.SlicePlaneMaterialTechnique(i._techniqueRep.constructionContext,null),i.updateParameters(),i}t._inheritsLoose(i,e);var r=i.prototype;return r.updateParameters=function(){},r.beginSlot=function(e){return 8===e},r.bind=function(e){this._technique.bindPass(this._material.params,e)},i}(n);i.__decorate([r.autoDispose()],c.prototype,"_technique",void 0);const f={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4,...a.materialParametersDefaults};e.SlicePlaneMaterial=s,Object.defineProperty(e,"__esModule",{value:!0})}));
