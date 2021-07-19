/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Color","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/throttle","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/trackingUtils","../../../chunks/vec4f64","../../../geometry/Polyline","../../../views/3d/interactive/visualElements/OutlineVisualElement","./constants"],(function(e,t,o,r,s,i,n,l,a,c,u,h,f,p,d,_,y,v){"use strict";const m=100;e.ProfileLines3D=function(e){function o(t){var o;return(o=e.call(this,t)||this)._chartData=null,o._visualElements=[],o._handles=new i,o}t._inheritsLoose(o,e);var s=o.prototype;return s.initialize=function(){const e=l.throttle((e=>{this._update(e)}),m);this._handles.add([p.reactionInit((()=>({spatialReference:this.view.spatialReference,chartData:this._chartData})),e),e])},s.destroy=function(){this._handles.destroy(),this._destroyVisualElements()},s.remove=function(){this._destroyVisualElements()},s.update=function(e){this._chartData=e},s._update=function(e){const{chartData:t}=e;if(n.isNone(t))return this.remove();if(!t.refined)return;const o=this._visualElements,s=t.lines.filter((e=>e.viewVisualizationEnabled)),i=s.length;for(;o.length>i;)o.pop().destroy();const l=v.PROFILE_LINES_STYLE_3D;for(;o.length<i;){const e=new y.OutlineVisualElement({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:l.width-l.outlineSize,width:l.width,falloff:l.falloff,color:l.outlineColor,renderOccluded:l.renderOccluded});o.push(e)}const a=e.spatialReference;for(let n=0;n<i;++n){const e=o[n],t=s[i-1-n];e.geometry=this._createLineGeometry(t,a),e.innerColor=d.fromArray(r.toUnitRGBA(t.color))}},s._createLineGeometry=function(e,t){const o=n.unwrapOr(e.samples,[]),r=o.length-1,s=[];let i=[];for(let l=0;l<=r;l++){const{x:e,y:t,z:a}=o[l];n.isSome(a)&&i.push([e,t,a]),(l===r||n.isNone(a))&&i.length&&(s.push(i),i=[])}return new _({paths:s,hasZ:!0,spatialReference:t})},s._destroyVisualElements=function(){this._visualElements.forEach((e=>e.destroy())),this._visualElements.length=0},o}(s),o.__decorate([a.property()],e.ProfileLines3D.prototype,"view",void 0),o.__decorate([a.property()],e.ProfileLines3D.prototype,"_chartData",void 0),e.ProfileLines3D=o.__decorate([f.subclass("esri.widgets.ElevationProfile.support.ProfileLines3D")],e.ProfileLines3D),Object.defineProperty(e,"__esModule",{value:!0})}));
