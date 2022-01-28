/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/promiseUtils","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/set","../../../../../core/accessorSupport/decorators/subclass","../../../../../geometry/support/aaBoundingRect","../../../engine/webgl/FeatureTile","../support/rendererUtils","./BaseTileRenderer","./support/visualVariablesUtils","./support/WGLFeatureView"],(function(e,t,i,r,s,a,n,o,l,u,c,f,h,p,d){"use strict";let w=function(t){function s(){return t.apply(this,arguments)||this}e._inheritsLoose(s,t);var a=s.prototype;return a.install=function(e){const t=()=>this.notifyChange("updating"),i=new d.WGLFeatureView(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i)},a.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},a.fetchResource=function(e,t){const{url:i}=e,s=this.featuresView.stage;try{return s.resourceManager.fetchResource(i,{signal:t.signal})}catch(a){return r.isAbortError(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}},a.isUpdating=function(){var e;const r=t.prototype.isUpdating.call(this),s=!this.featuresView||this.featuresView.isUpdating(),a=null==(e=this.featuresView)?void 0:e.hasEmptyAttributeView(),n=r||s||r&&a;return i("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${n}\n  -> updatingTiles ${r}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),n},a.hitTest=function(e){return this.featuresView.hitTest(e)},a.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},a.onConfigUpdate=function(e){let t=null;if("visualVariables"in e){const i=(f.simplifyVVRenderer(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=p.convertVisualVariables(i)}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect)},a.onTileData=function(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},a.onTileError=function(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},a.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},a.lockGPUUploads=function(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))},a.unlockGPUUploads=function(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))},a.getMaterialItems=function(){var t=e._asyncToGenerator((function*(e){return this.featuresView.getMaterialItems(e)}));function i(e){return t.apply(this,arguments)}return i}(),a.invalidateLabels=function(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()},a.createTile=function(e){const t=this.tileInfoView.getTileBounds(u.create(),e),i=()=>this.layerView.view.labelManager.requestUpdate();return new c.FeatureTile(e,t[0],t[3],this.featuresView.attributeView,i)},a.disposeTile=function(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()},s}(h);w=t.__decorate([l.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],w);return w}));
