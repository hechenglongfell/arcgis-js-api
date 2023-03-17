/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/reactiveUtils","../../webgl-engine/lib/ContentObjectType","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/Texture","../../webgl-engine/lib/UpdatePolicy","../../webgl-engine/lib/WebGLLayer"],(function(e,t,s,r,o,c,i,n,a){"use strict";let u=function(){function e(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}var u=e.prototype;return u.destroy=function(){this._destroyResources()},u.recreate=function(){this.attached&&this._createResources()},u.recreateGeometry=function(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(s.isNone(this._resources)||!e)return;const t=this._resources.object;this._resources.external.forEach((t=>{t.type!==o.ContentObjectType.Mesh&&t.type!==o.ContentObjectType.Line&&t.type!==o.ContentObjectType.Point||e.remove(t)})),t.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,t,this._resources.layer),this._resources.external.forEach((t=>{t.type!==o.ContentObjectType.Mesh&&t.type!==o.ContentObjectType.Line&&t.type!==o.ContentObjectType.Point||e.add(t)}))},u._createOrDestroyResources=function(){this._attached?this._resources||this._createResources():this._destroyResources()},u._createResources=function(){this._destroyResources();const e=this._resourceFactory,t=e.view,s=t._stage;if(!s)return;const o=new a.WebGLLayer({pickable:!1,updatePolicy:n.UpdatePolicy.SYNC});s.add(o);const u=new c.Object3D({castShadow:!1}),h=e.createResources(u,o);h.forEach((e=>{s.add(e),e instanceof i.Texture&&s.loadImmediate(e)})),s.add(u),o.add(u);const l=e.cameraChanged,_=l?r.watch((()=>t.state.camera),(e=>l(e)),r.initial):null;this._resources={layer:o,object:u,external:h,cameraHandle:_},this._syncVisible()},u._destroyResources=function(){if(s.isNone(this._resources))return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this._resources.external.forEach((t=>e.remove(t)))),this._resources.object.dispose(),this._resources.cameraHandle?.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null},u._syncVisible=function(){s.isNone(this._resources)||(this._resources.object.visible=this._visible)},t._createClass(e,[{key:"object",get:function(){return s.isSome(this._resources)?this._resources.object:null}},{key:"resources",get:function(){return s.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this._syncVisible())}},{key:"attached",get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}}]),e}();e.VisualElementResources=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
