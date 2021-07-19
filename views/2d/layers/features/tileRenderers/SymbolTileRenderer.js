/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../geometry/support/aaBoundingRect","../../../engine/webgl/FeatureTile","../support/rendererUtils","./BaseTileRenderer","./support/visualVariablesUtils","./support/WGLFeatureView"],(function(e,t,i,r,s,n,a,o,l,u,c,p,f){"use strict";let d=function(t){function r(){return t.apply(this,arguments)||this}e._inheritsLoose(r,t);var s=r.prototype;return s.install=function(e){const t=()=>this.notifyChange("updating"),i=new f.WGLFeatureView(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i)},s.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},s.isUpdating=function(){const e=t.prototype.isUpdating.call(this),r=!this.featuresView||this.featuresView.isUpdating(),s=e||r;return i("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}\n  -> updatingTiles ${e}\n  -> updatingFeaturesView ${r}`),s},s.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},s.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},s.onConfigUpdate=function(e){let t=null;if("visualVariables"in e){const i=(u.simplifyVVRenderer(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=p.convertVisualVariables(i)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)},s.onTileData=function(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},s.onTileError=function(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},s.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},s.lockGPUUploads=function(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))},s.unlockGPUUploads=function(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))},s.getMaterialItems=function(){var t=e._asyncToGenerator((function*(e){return this.featuresView.getMaterialItems(e)}));function i(e){return t.apply(this,arguments)}return i}(),s.invalidateLabels=function(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()},s.createTile=function(e){const t=this.tileInfoView.getTileBounds(o.create(),e);return new l.FeatureTile(e,t,this.featuresView.attributeView)},s.disposeTile=function(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()},r}(c);return d=t.__decorate([a.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],d),d}));
