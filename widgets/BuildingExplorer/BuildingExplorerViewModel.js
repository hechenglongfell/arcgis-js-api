/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/reactiveUtils","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../layers/BuildingSceneLayer","../../layers/support/BuildingFilter","./BuildingDisciplinesViewModel","./BuildingLevel","./BuildingPhase","./support/buildingLayerUtils","./support/filterUtils","./support/layerUtils"],(function(e,t,r,s,i,l,o,a,n,d,p,c,y,h,u,_,g,f,v,w,B,L,S,b){"use strict";const E=o.getLogger("esri.widgets.BuildingExplorer.BuildingExplorerViewModel");let x=function(t){function r(e){var r;return(r=t.call(this,e)||this).view=null,r.state="disabled",r.level=new w,r.phase=new B,r.disciplines=new v,r._handles=new l,r._loadLayers=b.createLoadLayersFunction(),r.layers=new s,r}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this._handles.add([this.layers.on("change",(()=>this._onLayersChange())),d.react((()=>({filter:this._filter,state:this.state})),(({filter:e,state:t})=>{"ready"===t&&S.setFilterOnLayers(this.layers,e)}),{initial:!0})]),this._onLayersChange()},o.destroy=function(){this._handles.destroy(),this.level.destroyed||this.level.destroy(),this.phase.destroyed||this.phase.destroy(),this.disciplines.destroyed||this.disciplines.destroy()},o._onLayersChange=function(){var t=e._asyncToGenerator((function*(){if(this.level.layers=this.layers,this.phase.layers=this.layers,this.disciplines.layers=this.layers,0!==this.layers.length){this._set("state","loading");try{yield this._loadLayers(this.layers),yield Promise.all([p.whenEqualOnce(this.level,"state","ready"),p.whenEqualOnce(this.phase,"state","ready"),p.whenEqualOnce(this.disciplines,"state","ready")]),this.layers.forEach(L.showFullModel),this._set("state","ready")}catch(e){n.isAbortError(e)||this._set("state","failed")}}else this._set("state","disabled")}));function r(){return t.apply(this,arguments)}return r}(),e._createClass(r,[{key:"isSupported",get:function(){var e;return"3d"===(null==(e=this.view)?void 0:e.type)}},{key:"layers",set:function(e){const t=e.filter((e=>e instanceof g));t.length!==e.length&&E.error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget."),this._set("layers",i.referenceSetter(t,this._get("layers")))}},{key:"_filter",get:function(){const e=this.level.filterExpressions,t=this.phase.filterExpressions,r=[],s=S.getFilterBlockSolid([e.solid,t.solid]);a.isSome(s)&&r.push(s);const i=S.getFilterBlockXRay([e.xRay,t.xRay]);return a.isSome(i)&&r.push(i),0===r.length?null:new f({id:S.generateFilterId(),name:"Building Explorer Filter",filterBlocks:r})}}]),r}(r);t.__decorate([c.property({value:null})],x.prototype,"view",void 0),t.__decorate([c.property()],x.prototype,"isSupported",null),t.__decorate([c.property({type:s,nonNullable:!0})],x.prototype,"layers",null),t.__decorate([c.property({readOnly:!0})],x.prototype,"state",void 0),t.__decorate([c.property({readOnly:!0,type:w})],x.prototype,"level",void 0),t.__decorate([c.property({readOnly:!0,type:B})],x.prototype,"phase",void 0),t.__decorate([c.property({readOnly:!0,type:v})],x.prototype,"disciplines",void 0),t.__decorate([c.property({readOnly:!0})],x.prototype,"_filter",null),x=t.__decorate([_.subclass("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],x);return x}));
