/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","../shaders/SlicePlaneMaterialTechnique"],(function(e,r,t,n,i,a,u,o,l){"use strict";let c=function(e){function t(r){var t;return(t=e.call(this,r,f)||this)._config=new n.ShaderTechniqueConfiguration,t}r._inheritsLoose(t,e);var i=t.prototype;return i.intersect=function(e,r,t,n,i,a,u){return o.intersectTriangleGeometry(e,r,n,i,a,void 0,u)},i.createBufferWriter=function(){return new u.DefaultBufferWriter(u.PositionUVLayout)},i.requiresSlot=function(e){return 7===e},i.createGLMaterial=function(e){return 0===e.output?new s(e):null},i.getTechniqueConfig=function(){return this._config},t}(a.Material),s=function(e){function n(r){var t;return(t=e.call(this,r)||this).ensureTechnique(l.SlicePlaneMaterialTechnique,null),t}r._inheritsLoose(n,e);var i=n.prototype;return i.updateParameters=function(){return t.unwrap(this.technique)},i.beginSlot=function(){return t.unwrap(this.technique)},i.bind=function(e,r){r.bindPass(this._material.parameters,e)},n}(i);const f={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4,...a.materialParametersDefaults};e.SlicePlaneMaterial=c,Object.defineProperty(e,"__esModule",{value:!0})}));
