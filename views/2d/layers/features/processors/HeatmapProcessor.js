/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/maybe","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/set","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/accessorSupport/diffUtils","../../../../../renderers/support/heatmapUtils","../../../engine/webgl/definitions","./BaseProcessor","../support/tileUtils"],(function(e,t,r,i,s,o,n,a,c,d,l,u,h,p){"use strict";let f=function(e,t){this.offset=e,this.extent=t};function y(e){const t=e.key,r=new Map,i=256,s=u.TILE_SIZE,o=e.tileInfoView.tileInfo.isWrappable;return r.set(p.getPow2NeighborKey(t,-1,-1,o).id,new f([-s,-s],[s-i,s-i,s,s])),r.set(p.getPow2NeighborKey(t,0,-1,o).id,new f([0,-s],[0,s-i,s,s])),r.set(p.getPow2NeighborKey(t,1,-1,o).id,new f([s,-s],[0,s-i,i,s])),r.set(p.getPow2NeighborKey(t,-1,0,o).id,new f([-s,0],[s-i,0,s,s])),r.set(p.getPow2NeighborKey(t,1,0,o).id,new f([s,0],[0,0,i,s])),r.set(p.getPow2NeighborKey(t,-1,1,o).id,new f([-s,s],[s-i,0,s,i])),r.set(p.getPow2NeighborKey(t,0,1,o).id,new f([0,s],[0,0,s,i])),r.set(p.getPow2NeighborKey(t,1,1,o).id,new f([s,s],[0,0,i,i])),r}let g=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type="heatmap",e._tileKeyToFeatureSets=new Map,e}e._inheritsLoose(r,t);var s=r.prototype;return s.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},s.update=function(){var t=e._asyncToGenerator((function*(e,t){const r=t.schema.processors[0];if("heatmap"!==r.type)return;d.diff(this._schema,r)&&(e.mesh=!0,this._schema=r)}));function r(e,r){return t.apply(this,arguments)}return r}(),s.onTileUpdate=function(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)},s.onTileClear=function(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})},s.onTileMessage=function(){var t=e._asyncToGenerator((function*(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const s=this._tileKeyToFeatureSets.get(e.key.id);if(i.isSome(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&s.set(t.addOrUpdate.instance,t),t.end){const t=[],s=y(e);this._tileKeyToFeatureSets.forEach(((r,o)=>{if(o===e.key.id)r.forEach((e=>i.andThen(e.addOrUpdate,(e=>t.push(e)))));else if(s.has(o)){const e=s.get(o),[n,a]=e.offset;r.forEach((e=>i.andThen(e.addOrUpdate,(e=>{const r=e.transform(n,a,1,1);t.push(r)}))))}}));const o=l.calculateHeatmapIntensityInfoReaders(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:o},a=[o.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...r,transferList:a})}}));function r(e,r,i){return t.apply(this,arguments)}return r}(),s.onTileError=function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)},r}(h);g=t.__decorate([c.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],g);return g}));
