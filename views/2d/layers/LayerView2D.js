/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Collection","../../../core/collectionUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../engine/Container","../../layers/support/ClipArea","../../layers/support/ClipRect","../../layers/support/Geometry","../../layers/support/Path"],(function(e,t,i,s,r,a,o,n,p,c,d,h,u,l,y,_){"use strict";const v=s.ofType({key:"type",base:u,typeMap:{rect:l,path:_,geometry:y}}),f=e=>{let s=function(e){function i(){var t;return(t=e.apply(this,arguments)||this).clips=new v,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}t._inheritsLoose(i,e);var s=i.prototype;return s.initialize=function(){var e;this.container||(this.container=new h.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([a.init(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),a.init(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),a.init(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),a.init(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))},s.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1},s.isVisibleAtScale=function(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t},s.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},s.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},s.isUpdating=function(){return!1},s.isRendering=function(){return!1},s.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},t._createClass(i,[{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}}]),i}(e);return i.__decorate([o.property({type:v,set(e){const t=r.referenceSetter(e,this._get("clips"),v);this._set("clips",t)}})],s.prototype,"clips",void 0),i.__decorate([o.property()],s.prototype,"moving",void 0),i.__decorate([o.property()],s.prototype,"attached",void 0),i.__decorate([o.property()],s.prototype,"container",void 0),i.__decorate([o.property()],s.prototype,"suspended",void 0),i.__decorate([o.property({readOnly:!0})],s.prototype,"updateParameters",void 0),i.__decorate([o.property()],s.prototype,"updateRequested",void 0),i.__decorate([o.property()],s.prototype,"updating",null),i.__decorate([o.property()],s.prototype,"view",void 0),s=i.__decorate([d.subclass("esri.views.2d.layers.LayerView2D")],s),s};e.LayerView2DMixin=f,Object.defineProperty(e,"__esModule",{value:!0})}));
