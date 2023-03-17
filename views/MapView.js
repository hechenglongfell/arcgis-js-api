/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Graphic","../Viewpoint","../core/Collection","../core/CollectionFlattener","../core/Error","../core/has","../core/iteratorUtils","../core/Logger","../core/maybe","../core/promiseUtils","../core/reactiveUtils","../core/screenUtils","../core/Warning","../core/workers/workers","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../geometry/Extent","../geometry/Point","../geometry/projection","../geometry/support/spatialReferenceUtils","../layers/support/TileInfo","./BreakpointsOwner","./DOMContainer","./PopupView","./View","./ViewAnimation","./2d/AnimationManager","./2d/FrameTask","./2d/layerViewModuleImportUtils","./2d/MapViewConstraints","./2d/PaddedViewState","./2d/tiling/PagedTileQueue","./2d/tiling/TileInfoView","./2d/tiling/TileKey","./2d/tiling/TileQueue","./2d/tiling/TileStrategy","./2d/viewpointUtils","./2d/input/MapViewInputManager","./2d/layers/features/support/TileStore","./2d/support/HighlightOptions","./2d/support/Timeline","./support/createScreenshotPlan","./support/screenshotUtils","./support/screenUtils","./support/WebGLRequirements","./ui/2d/DefaultUI2D","../webmap/background/ColorBackground"],(function(e,t,i,n,r,a,s,o,l,p,c,h,d,u,y,g,f,w,_,m,v,V,S,T,b,k,M,R,x,L,O,P,C,z,E,G,N,D,I,A,q,j,F,U,W,$,B,H,J,Q,Z,K){"use strict";let Y,X,ee,te,ie,ne;function re(){return ae.apply(this,arguments)}function ae(){return(ae=t._asyncToGenerator((function*(){const[,{GraphicsView2D:t,GraphicContainer:i,LabelManager:n,MapViewNavigation:r,MagnifierView2D:a,Stage:s}]=yield Promise.all([new Promise(((t,i)=>e(["./2d/webglDeps"],t,i))),new Promise(((t,i)=>e(["./2d/mapViewDeps"],t,i)))]);X=t,ee=i,te=n,ie=r,ne=a,Y=s}))).apply(this,arguments)}const se=160;function oe(e){return e&&"esri.Viewpoint"===e.declaredClass}let le=function(e){function i(i){var n;return(n=e.call(this,i)||this)._magnifierView=null,n._stage=null,n._resolveWhenReady=[],n.rootLayerViews=new s({getCollections:()=>[n.basemapView?.baseLayerViews,n.layerViews,n.basemapView?.referenceLayerViews],getChildrenFunction:()=>null}),n.featuresTilingScheme=null,n.fullOpacity=1,n.graphicsView=null,n.labelManager=null,n.mapViewNavigation=null,n.renderingOptions={samplingMode:"dynamic",edgeLabelsVisible:!0,labelsAnimationTime:125,labelCollisionsEnabled:!0},n.rendering=!1,n.supersampleScreenshotsEnabled=!0,n.supportsGround=!1,n._stationaryTimer=null,n._gotoTask=null,n.frameTask=new C(t._assertThisInitialized(n)),n._pePromise=null,n.floors=new a,n.highlightOptions=new W,n.inputManager=new F({view:t._assertThisInitialized(n)}),n.map=null,n.resizeAlign="center",n.spatialReferenceLocked=!1,n.timeline=new $.Timeline,n.type="2d",n.ui=new Z,n._pixelFormat={flipY:!0,premultipliedAlpha:!0},n.constraints=new E,n.padding={top:0,right:0,bottom:0,left:0},n.handles.add([u.watch((()=>n.viewpoint),(()=>{n._lastStationaryEventTimestamp=performance.now(),n._flipStationary(se)}),u.sync),n.on("resize",(e=>n._resizeHandler(e))),u.watch((()=>n.animationManager?.animation),(e=>{n.animation=e}))]),f.initialize(),n}t._inheritsLoose(i,e);var n=i.prototype;return n.destroy=function(){this._set("preconditionsReady",!1),this._gotoTask=this.frameTask=null,this.rootLayerViews.destroy(),this.inputManager.destroy(),this._set("inputManager",null)},n.goTo=function(e,t){if(e)return this.animation&&(this.animation=null),this._createAnimation(),u.whenOnce((()=>this.ready),t).then((()=>{const i={animate:!0,...t},n=j.create(e,this);return this.animation?.update(n),this._gotoTask={},i.animate?this._gotoAnimated(n,i):this._gotoImmediate(n,i)}));c.getLogger(this.declaredClass).error("#goTo()","target cannot be null or undefined")},n.hitTest=function(){var e=t._asyncToGenerator((function*(e,t){const i=J.isSupportedScreenPointEvent(e)?J.createScreenPointFromSupportedEvent(this,e):e;if(!this.ready||isNaN(i.x)||isNaN(i.y))return{screenPoint:i,results:[]};let n=new Set,r=!1,a=null,s=null;t?.include?he(t.include,ce(this,(e=>n.add(e)),(e=>{a||(a=new Set),a.add(e)}),(e=>n.add(e)),(()=>r=!0))):(r=!0,n=new Set(this.allLayerViews)),t?.exclude&&he(t.exclude,ce(this,(e=>n.delete(e)),(e=>{s||(s=new Set),s.add(e)})));const o=this.allLayerViews.filter((e=>!e.suspended&&n.has(e))).reverse(),l=this.toMap(i);let p=[...r?this.graphicsView.hitTest(l).map((e=>({type:"graphic",graphic:e,layer:null,mapPoint:l}))):[],...yield Promise.all(o.map((e=>e.hitTest(l,i))).toArray())].filter(h.isSome).flat().filter(h.isSome);return a&&(p=p.filter((e=>!("graphic"in e)||!e.graphic||a?.has(pe(e.graphic))))),s&&(p=p.filter((e=>!("graphic"in e)||!e.graphic||s?.has(pe(e.graphic))))),{screenPoint:i,results:p}}));function i(t,i){return e.apply(this,arguments)}return i}(),n.takeScreenshot=function(){var e=t._asyncToGenerator((function*(e){const t=this._createScreenshotPlan(e),i=yield this._stage.takeScreenshot(t);return H.encode(i,{format:t.format,quality:t.quality,rotation:0,disableDecorations:!1},this._pixelFormat)}));function i(t){return e.apply(this,arguments)}return i}(),n._takeScreenshot=function(){var e=t._asyncToGenerator((function*(e){const t=this._createScreenshotPlan(e),i=yield this._stage.takeScreenshot(t);return H.encodeData(i,this._pixelFormat)}));function i(t){return e.apply(this,arguments)}return i}(),n._createScreenshotPlan=function(e){e=e??{};const t=this.supersampleScreenshotsEnabled?Math.min(4,H.getMaximumResolutionScale(this.size,Math.min(4096,this._stage.context.parameters.maxTextureSize))):1;let i;e.layers?(i=[],e.layers.forEach((e=>{const t=this.allLayerViews.find((t=>t.layer.id===e.id));t&&"container"in t&&t.container&&i.push(t.container)}))):i=this._stage.children;const{format:n,quality:r}=H.getFormatAndQuality(e.format,e.quality);return B(e,t,this.size,this.padding,n,r,i,e.rotation)},n.toMap=function(e){if(!this.ready)return null;const t=J.isSupportedScreenPointEvent(e)?J.createScreenPointFromSupportedEvent(this,e):e,i=[0,0],[n,r]=this.state.toMap(i,[t.x,t.y]),a=this.spatialReference;return new S({x:n,y:r,spatialReference:a})},n.toScreen=function(e){if(!this.ready)return null;const t=this._project(e,this.spatialReference),i=[t.x,t.y];return this.state.toScreen(i,i),y.createScreenPoint(i[0],i[1])},n.on=function(t,i,n,r){const a=this.inputManager&&this.viewEvents.on(t,i,n,r);return a||e.prototype.on.call(this,t,i)},n.hasEventListener=function(t){return e.prototype.hasEventListener.call(this,t)||this.viewEvents.hasHandler(t)},n.whenLayerView=function(t){return e.prototype.whenLayerView.call(this,t)},n.graphicChanged=function(e){if(this.graphicsView){this.graphicsView.graphicUpdateHandler(e)}},n.whenReady=function(){return new Promise((e=>{this.ready?e(this):this._resolveWhenReady.push(e)}))},n.forceDOMReadyCycle=function(){this.forceReadyCycle()},n.getDefaultSpatialReference=function(){return this.map&&"initialViewProperties"in this.map&&this.map?.initialViewProperties?.spatialReference||this.defaultsFromMap?.spatialReference||null},n.hasLayerViewModule=function(e){return z.layerView2DImporter.hasLayerViewModule(e)},n.importLayerView=function(e){return z.layerView2DImporter.importLayerView(e)},n.pixelSizeAt=function(){return this.ready?this.state.resolution:(c.getLogger(this.declaredClass).error("#pixelSizeAt()","Map view cannot be used before it is ready"),null)},n.popupHitTest=function(e){return this.hitTest(e).then((t=>({...t,mapPoint:this.toMap(e)})))},n.requestUpdate=function(){this.ready&&this.frameTask.requestUpdate()},n.validate=function(){let e=Q.check(this.type);return l("safari")&&l("safari")<9&&(e=new o("mapview:browser-not-supported","This browser is not supported by MapView (Safari < 9)",{type:"safari",requiredVersion:9,detectedVersion:l("safari")})),h.isSome(e)?(c.getLogger(this.declaredClass).warn("#validate()",e.message),Promise.reject(e)):re()},n._createAnimation=function(){return this.animation&&!this.animation.done||(this.animation=new O),this.animation},n._cancellableGoTo=function(e,t,i){const n=()=>e===this._gotoTask,r=i.then((()=>{n()&&(this.animation=null)})).catch((e=>{throw n()&&(t&&!t.done&&(t.stop(),this.frameTask.animationInProgress=!1),this.animation=null),e})),a=new Promise((e=>e(r)));return t.when().catch((()=>{n()&&a.cancel&&a.cancel()})),a},n._gotoImmediate=function(e,t){const i=this._gotoTask,n=this.animation,r=e.then((e=>{if(d.throwIfAborted(t),i!==this._gotoTask)throw new o("view:goto-interrupted","Goto was interrupted");this.viewpoint=n.target=e,n.finish()}));return this._cancellableGoTo(i,n,r)},n._flipStationary=function(e){return null!==this._stationaryTimer||(this._stationaryTimer=setTimeout((()=>{this._stationaryTimer=null;const e=performance.now()-this._lastStationaryEventTimestamp;e<se&&(this._stationaryTimer=this._flipStationary(e))}),e)),this._stationaryTimer},n._getDefaultViewpoint=function(){const{constraints:e,initialExtent:t,map:i,padding:n,size:a}=this;if(!e)return null;const s=i&&"initialViewProperties"in i?i.initialViewProperties:void 0,o={zoom:this._get("zoom"),scale:this._get("scale"),center:this._get("center"),extent:this._get("extent"),rotation:this._get("rotation"),viewpoint:this._get("viewpoint"),spatialReference:this._userSpatialReference};e.effectiveLODs?-1!==o.zoom&&(o.scale=e.zoomToScale(o.zoom)):o.zoom=-1;let l=null,p=null,c=0;const d=o.viewpoint&&o.viewpoint.rotation,u=o.viewpoint&&o.viewpoint.targetGeometry;h.isSome(u)&&("extent"===u.type?l=u:"point"===u.type&&(p=u,c=o.viewpoint.scale));const y=o.extent||l||h.unwrap(s?.viewpoint?.targetGeometry)?.extent||t,g=o.center||p||y?.center,f=o.scale||c||s?.viewpoint?.scale||y&&j.extentToScale(y,[a[0]-n.left-n.right,a[1]-n.top-n.bottom]),w=o.rotation||d||s?.viewpoint?.rotation||0;return g&&f?new r({targetGeometry:g,scale:f,rotation:w}):null},n._gotoAnimated=function(e,t){const i=this._gotoTask,n=this.animation;if(!n)return Promise.resolve();const r=e.then((e=>{if(d.throwIfAborted(t),i!==this._gotoTask)throw new o("view:goto-interrupted","Goto was interrupted");return n.update(e),this.animationManager.animate(n,this.viewpoint,t),n.when().then((()=>{}),(()=>{}))}));return this._cancellableGoTo(i,n,r)},n._project=function(e,t){const i=e&&e.targetGeometry||e;if(!t)return e;if(!i)return null;if(t.imageCoordinateSystem||i.spatialReference?.imageCoordinateSystem)return e;if(b.equals(t,i.spatialReference))return e;const n=T.project(i,t);if(!n)throw new o("mapview:projection-not-possible","projecting input geometry to target spatial reference returned a null value",{geometry:i,spatialReference:t});return oe(e)?(e.targetGeometry=n,e):n},n._resizeHandler=function(e){if(!this.ready)return;const t=this.state;let i=this.state.paddedViewState.viewpoint;const n=this.state.paddedViewState.size.concat();t.size=[e.width,e.height],j.resize(i,i,n,this.state.paddedViewState.size,this.resizeAlign),i=this.constraints.constrain(i,void 0),this.state.viewpoint=i},n._startup=function(){this.timeline.begin("MapView Startup");const e=this._getDefaultViewpoint(),t=e.targetGeometry;try{this._project(e,this.spatialReference)}catch(o){c.getLogger(this.declaredClass).warn(new g("mapview:startup-projection-error","projection of initial viewpoint to the view's spatial reference, defaulting to the initial viewpoint.",{center:t.toJSON(),spatialReference:this.spatialReference,error:o})),e.targetGeometry=this.defaultsFromMap.extent?.center||new S({x:0,y:0,spatialReference:this.spatialReference})}this.constraints?.fit(e),this._set("state",new G({padding:this._get("padding"),size:this.size,viewpoint:e})),this.graphics.owner=this;const i=new Y(this.surface,{canvas:this.renderCanvas,supersampleScreenshots:this.supersampleScreenshotsEnabled,contextOptions:{disabledExtensions:this.deactivatedWebGLExtensions,debugWebGLExtensions:this.debugWebGLExtensions},renderingOptions:this.renderingOptions,timeline:this.timeline});this._stage=i,this._magnifierView=new ne,this._magnifierView.magnifier=this.magnifier;const n=new te({view:this});this._set("labelManager",n);const r=new P({view:this});this._set("animationManager",r);const a=new ie({view:this,animationManager:r});this._set("mapViewNavigation",a),this._setupSpatialReferenceDependentProperties(),this.handles.add([this.rootLayerViews.on("change",(()=>this._updateStageChildren())),i.on("post-render",(()=>this._set("rendering",i.renderRequested))),i.on("will-render",(()=>this._set("rendering",i.renderRequested))),i.on("webgl-error",(e=>this.fatalError=e.error)),u.watch((()=>this.stationary),(e=>i.stationary=e),u.syncAndInitial),u.watch((()=>this.background),(e=>{i.background=e,this._magnifierView.background=e}),u.syncAndInitial),u.watch((()=>this.magnifier),(e=>this._magnifierView.magnifier=e),u.syncAndInitial),u.watch((()=>this.renderingOptions),(e=>i.renderingOptions=e),u.syncAndInitial),u.watch((()=>this.highlightOptions),(e=>i.highlightOptions=e),u.syncAndInitial),u.watch((()=>this.state.id),(()=>i.state=this.state),u.syncAndInitial)],"map-view"),this._updateStageChildren();const s=this._resolveWhenReady;this._resolveWhenReady=[],s.forEach((e=>e(this))),this.timeline.end("MapView Startup"),this.frameTask&&this.frameTask.start(),this._set("ready",!0)},n._teardown=function(){this._destroySpatialReferenceDependentProperties(),this.handles.remove("map-view"),this.mapViewNavigation.destroy(),this._set("mapViewNavigation",null),this.animationManager.destroy(),this._set("animationManager",null),this.layerViewManager.clear(),this.labelManager.destroy(),this._magnifierView.destroy(),this._stage.destroy(),this._stage=null,this._set("graphicsView",null),this._magnifierView=null,this._set("labelManager",null),this._set("mapViewNavigation",null),this.graphics.owner=null,this.frameTask&&this.frameTask.stop(),this._stationaryTimer&&(clearTimeout(this._stationaryTimer),this._stationaryTimer=null),this._set("ready",!1);const{center:[e,t],spatialReference:i,rotation:n,scale:r}=this.state.paddedViewState,a=new S({x:e,y:t,spatialReference:i});this._set("viewpoint",null),this._set("extent",null),this._set("center",a),this._set("zoom",-1),this._set("rotation",n),this._set("scale",r),this._set("spatialReference",i),this._set("state",null),this.animation=null},n._updateStageChildren=function(){this._stage.removeAllChildren(),this.rootLayerViews.forEach((e=>{this._stage.addChild(e.container)}));const e=this.graphicsView;this._stage.addChild(e.container),this._stage.addChild(this._magnifierView)},n._setupSpatialReferenceDependentProperties=function(){const e=new D(k.create({spatialReference:this.spatialReference,size:512,numLODs:36}));this._set("featuresTilingScheme",e);const t=new X({view:this,graphics:this.graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new ee(e)});this.frameTask.graphicsView=t,this._set("graphicsView",t)},n._destroySpatialReferenceDependentProperties=function(){const e=this.graphicsView;this._set("graphicsView",null),this.frameTask.graphicsView=null,e.destroy(),this._set("featuresTilingScheme",null)},n._spatialReferenceChanged=function(e){if(!this.ready)return;this.frameTask.stop();for(const r of this.allLayerViews)r.processDetach();this._destroySpatialReferenceDependentProperties();const t=this.state.paddedViewState.clone();if(h.isNone(this._scaleBeforeChangingSpatialReference))this._scaleBeforeChangingSpatialReference=t.scale;else{const e=t.viewpoint.clone();e.scale=this._scaleBeforeChangingSpatialReference,t.viewpoint=e}const i=t.clone(),[n,a]=t.center;let s=null;try{s=this._project(new S({x:n,y:a,spatialReference:t.spatialReference}),e)}catch(p){T.isLoaded()||c.getLogger(this.declaredClass).warn(new g("mapview:spatial-reference-change","could not project the view's center to the new spatial reference",{center:s?.toJSON(),spatialReference:e,error:p}))}s||(s=new S({x:0,y:0,spatialReference:e}));const o=j.centerAt(new r({targetGeometry:new S,scale:0,rotation:0}),t.viewpoint,s);i.viewpoint=o;try{const n=20,r=[t.size[0]/2,t.size[1]/2],a=[r[0]+n,r[1]],s=t.toMap([0,0],a),{x:p,y:c}=this._project(new S({x:s[0],y:s[1],spatialReference:t.spatialReference}),e);s[0]=p,s[1]=c,i.toScreen(s,s);const h=j.angleBetween(r,s,a),d=Math.hypot(s[0]-r[0],s[1]-r[1])/n;!Number.isFinite(d)||Math.abs(d)>4?(o.rotation=0,o.targetGeometry=new S({x:0,y:0,spatialReference:e})):(o.scale*=d,o.scale>l("mapview-srswitch-adjust-rotation-scale-threshold")?o.rotation=0:o.rotation+=Number.isFinite(h)?h:0)}catch{}this._get("constraints").constrain(o,void 0),this._get("state").viewpoint=o,this._stage.state=this.state,this._setupSpatialReferenceDependentProperties();for(const r of this.allLayerViews)r.processAttach();this.frameTask.requestFrame(),this.frameTask.start(),this._updateStageChildren()},t._createClass(i,[{key:"graphicsTileStore",get:function(){return new U(this.featuresTilingScheme)}},{key:"initialExtentRequired",get:function(){const{scale:e,constraints:t,center:i,viewpoint:n,extent:r}=this;let a=this.zoom;return!(this.map&&"initialViewProperties"in this.map&&this.map.initialViewProperties?.viewpoint)&&(!r&&(t?.effectiveLODs||(a=-1),(!i||0===e&&-1===a)&&(!n||!h.isSome(n.targetGeometry)||"extent"!==n.targetGeometry.type&&!n.scale)))}},{key:"resourceManager",get:function(){return this._stage.resourceManager}},{key:"textureManager",get:function(){return this._stage.painter.textureManager}},{key:"_defaultsFromMapSettings",get:function(){return{required:{tileInfo:!0,heightModelInfo:!1,extent:!1},requiresExtentInSpatialReference:this.spatialReferenceLocked}}},{key:"_projectionEngineLoaded",get:function(){return!!T.isLoaded()||(this._pePromise||(this._pePromise=T.load().finally((()=>{this._pePromise=null}))),!1)}},{key:"typeSpecificPreconditionsReady",get:function(){const e=this._getDefaultViewpoint();if(!e)return!1;const t=this.spatialReference,i=h.unwrap(e.targetGeometry);return!!T.canProjectWithoutEngine(i.spatialReference,t)||this._projectionEngineLoaded}},{key:"animation",set:function(e){const t=this._get("animation");if(e===t)return;if(t&&t.stop(),!e||e.isFulfilled())return void this._set("animation",null);this._set("animation",e),this.frameTask.animationInProgress=!0;const i=()=>{e===this._get("animation")&&(this._set("animation",null),this.frameTask?.requestFrame()),this.frameTask&&(this.frameTask.animationInProgress=!1)};e.when(i,i)}},{key:"background",get:function(){return de(this.map)?this.map.initialViewProperties.background:null},set:function(e){this._override("background",e)}},{key:"center",get:function(){if(!this.ready)return this._get("center");const{center:e,spatialReference:t}=this.state.paddedViewState;return new S({x:e[0],y:e[1],spatialReference:t})},set:function(e){if(null==e)return;if(!this.ready)return this._set("center",e),void this.notifyChange("initialExtentRequired");let t;try{t=this._project(e,this.spatialReference)}catch(n){return void c.getLogger(this.declaredClass).error(new o("mapview:invalid-center","could not project the value in the view's spatial reference",{input:e,error:n}))}const i=this.viewpoint;j.centerAt(i,i,t),this.viewpoint=i}},{key:"constraints",set:function(e){const t=this._get("constraints");t&&(this.handles.remove("map-view-constraints"),t.destroy()),this._set("constraints",e),e&&(e.view=this,this.ready&&(this.state.viewpoint=e.fit(this.state.paddedViewState.viewpoint)),this.handles.add(u.watch((()=>e.version),(()=>{this.ready&&this.state&&(this.state.viewpoint=e.fit(this.state.paddedViewState.viewpoint))}),u.sync),"map-view-constraints"))}},{key:"extent",get:function(){return this.ready?this.state.paddedViewState.extent.clone():this._get("extent")},set:function(e){if(null==e)return;if(!e.width||!e.height)return void c.getLogger(this.declaredClass).error(new o("mapview:invalid-extent","invalid extent size"));if(!this.ready)return this._set("extent",e),this._set("center",null),this._set("viewpoint",null),this._set("scale",0),this._set("zoom",-1),void this.notifyChange("initialExtentRequired");let t;try{t=this._project(e,this.spatialReference)}catch(n){return void c.getLogger(this.declaredClass).error(new o("mapview:invalid-extent","could not project the value in the view's spatial reference",{error:n}))}const i=this.viewpoint;j.setExtent(i,i,t,this.size,{constraints:this.constraints}),this.viewpoint=i}},{key:"padding",get:function(){return this.ready?this.state.padding:this._get("padding")},set:function(e){this.ready?(this.state.padding=e,this._set("padding",this.state.padding)):this._set("padding",e)}},{key:"resolution",get:function(){return this.state?this.state.resolution:0}},{key:"rotation",get:function(){return this.ready?this.state.rotation:this._get("rotation")},set:function(e){if(isNaN(e))return;if(!this.ready)return void this._set("rotation",e);const t=this.viewpoint;j.rotateTo(t,t,e),this.viewpoint=t}},{key:"scale",get:function(){return this.ready?this.state.scale:this._get("scale")},set:function(e){if(!e||isNaN(e))return;if(!this.ready){this._set("scale",e),this._set("zoom",-1);const t=this._get("extent");return t&&(this._set("extent",null),this._set("center",t.center)),void this.notifyChange("initialExtentRequired")}const t=this.viewpoint;j.scaleTo(t,t,e),this.viewpoint=t}},{key:"stationary",get:function(){return!(this.animation||this.navigating||this.resizing||this._stationaryTimer)}},{key:"updating",get:function(){const e=!this.destroyed&&(!this.layerViewManager||!this.labelManager||!this.graphicsView||!0===this.layerViewManager.updating||!0===this.labelManager.updating||!0===this.graphicsView.updating||this.allLayerViews.some((e=>!e.destroyed&&!("layerViews"in e)&&!0===e.updating)));if(l("esri-2d-log-updating")){const t=this.allLayerViews.reduce(((e,t)=>({...e,[t.layer.id]:!t.destroyed&&!("layerViews"in t)&&t.updating})),{});console.log(`Updating MapView: ${e}\n-> Null LayerViewManager: ${!this.layerViewManager}\n-> Null LabelManager: ${!this.labelManager}\n-> Null GraphicsView: ${!this.graphicsView}\n-> layerViewManager.updating: ${this.layerViewManager?.updating}\n-> labelManager.updating: ${this.labelManager?.updating}\n-> graphicsView.updating: ${this.graphicsView?.updating}\n-> allLayerViews: ${JSON.stringify(t)}\n`)}return e}},{key:"viewpoint",get:function(){if(!this.ready)return this._get("viewpoint");const e=this.state.paddedViewState;return e&&e.viewpoint.clone()},set:function(e){if(null==e)return;if(!this.ready)return this._set("viewpoint",e),this._set("extent",null),this._set("center",null),this._set("zoom",-1),this._set("scale",0),void this.notifyChange("initialExtentRequired");let t,i;try{t=this._project(e,this.spatialReference),!e.scale||isNaN(e.scale)?i=new o("mapview:invalid-viewpoint",`invalid scale value of ${e.scale}`):h.isNone(e.targetGeometry)&&(i=new o("mapview:invalid-viewpoint","geometry not defined"))}catch(a){i=new o("mapview:invalid-viewpoint","could not project the value in the view's spatial reference",{error:a})}if(i)return void c.getLogger(this.declaredClass).error(i);this._scaleBeforeChangingSpatialReference=null;const n=new r({targetGeometry:new S,scale:0,rotation:0});j.copy(n,t),this.constraints.constrain(n,this.state.paddedViewState.viewpoint),this.state.viewpoint=n,this.frameTask.requestFrame(),this._set("viewpoint",n)}},{key:"zoom",get:function(){return this.ready?this.constraints.scaleToZoom(this.scale):this._get("zoom")},set:function(e){if(null==e)return;if(!this.ready){this._set("zoom",e),this._set("scale",0);const t=this._get("extent");return t&&(this._set("extent",null),this._set("center",t.center)),void this.notifyChange("initialExtentRequired")}if(!this.constraints.effectiveLODs)return void this._set("zoom",-1);const t=this.viewpoint;j.scaleTo(t,t,this.constraints.zoomToScale(e)),this.viewpoint=t,this._set("zoom",this.constraints.scaleToZoom(this.scale))}},{key:"navigating",get:function(){return!(!this.mapViewNavigation||!this.mapViewNavigation.interacting)}},{key:"test",get:function(){return{takeScreenshot:e=>this._takeScreenshot(e)}}}]),i}(M.BreakpointsOwner(R.DOMContainer(x.PopupView(L))));le.type="2d",i.__decorate([w.property({readOnly:!0})],le.prototype,"animationManager",void 0),i.__decorate([w.property({constructOnly:!0})],le.prototype,"deactivatedWebGLExtensions",void 0),i.__decorate([w.property({constructOnly:!0})],le.prototype,"debugWebGLExtensions",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"featuresTilingScheme",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"fullOpacity",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"graphicsTileStore",null),i.__decorate([w.property()],le.prototype,"graphicsView",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"state",void 0),i.__decorate([w.property()],le.prototype,"initialExtentRequired",null),i.__decorate([w.property()],le.prototype,"labelManager",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"resourceManager",null),i.__decorate([w.property({readOnly:!0})],le.prototype,"textureManager",null),i.__decorate([w.property({readOnly:!0})],le.prototype,"mapViewNavigation",void 0),i.__decorate([w.property({constructOnly:!0})],le.prototype,"renderCanvas",void 0),i.__decorate([w.property()],le.prototype,"renderingOptions",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"rendering",void 0),i.__decorate([w.property({constructOnly:!0})],le.prototype,"supersampleScreenshotsEnabled",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"supportsGround",void 0),i.__decorate([w.property()],le.prototype,"_stationaryTimer",void 0),i.__decorate([w.property()],le.prototype,"_defaultsFromMapSettings",null),i.__decorate([w.property()],le.prototype,"_pePromise",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"typeSpecificPreconditionsReady",null),i.__decorate([w.property()],le.prototype,"animation",null),i.__decorate([w.property({type:K})],le.prototype,"background",null),i.__decorate([w.property({value:null,type:S,dependsOn:["state.id","ready"]})],le.prototype,"center",null),i.__decorate([w.property({type:E})],le.prototype,"constraints",null),i.__decorate([w.property({value:null,type:V,dependsOn:["state.id","ready"]})],le.prototype,"extent",null),i.__decorate([w.property()],le.prototype,"floors",void 0),i.__decorate([w.property({type:W})],le.prototype,"highlightOptions",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"inputManager",void 0),i.__decorate([w.property()],le.prototype,"map",void 0),i.__decorate([w.property({value:{top:0,right:0,bottom:0,left:0},cast:e=>({top:0,right:0,bottom:0,left:0,...e})})],le.prototype,"padding",null),i.__decorate([w.property()],le.prototype,"resizeAlign",void 0),i.__decorate([w.property({readOnly:!0,dependsOn:["state.id"]})],le.prototype,"resolution",null),i.__decorate([w.property({value:0,type:Number,dependsOn:["state.id","ready"]})],le.prototype,"rotation",null),i.__decorate([w.property({value:0,type:Number,dependsOn:["state.id","ready"]})],le.prototype,"scale",null),i.__decorate([w.property({constructOnly:!0})],le.prototype,"spatialReferenceLocked",void 0),i.__decorate([w.property()],le.prototype,"stationary",null),i.__decorate([w.property({type:$.Timeline,readOnly:!0})],le.prototype,"timeline",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"type",void 0),i.__decorate([w.property({readOnly:!0})],le.prototype,"updating",null),i.__decorate([w.property({value:null,type:r,dependsOn:["state.id","ready"]})],le.prototype,"viewpoint",null),i.__decorate([w.property({value:-1,dependsOn:["state.id","ready"]})],le.prototype,"zoom",null),i.__decorate([w.property({readOnly:!0})],le.prototype,"navigating",null),i.__decorate([w.property({type:Z})],le.prototype,"ui",void 0),le=i.__decorate([v.subclass("esri.views.MapView")],le);function pe(e){const t=e.getObjectId();return t?`${e.layer?.uid??e.sourceLayer?.uid??"MapView"}/${t}`:`"MapView/${e.uid}`}function ce(e,t,i,r,a){return s=>{if(s instanceof n){if(s.layer===e)a?.();else{const t=e.allLayerViews.find((e=>e.layer===s.layer));t&&r?.(t)}i(pe(s))}else{const i=e.allLayerViews.find((e=>e.layer===s));i&&t(i)}}}function he(e,t){if(e)if(p.isIterable(e))for(const i of e)if(p.isIterable(i))for(const e of i)t(e);else t(i);else t(e)}function de(e){return"esri.WebMap"===e?.declaredClass}return le}));
