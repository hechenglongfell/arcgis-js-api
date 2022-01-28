/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../intl","../../symbols","../../core/Handles","../../core/maybe","../../core/unitFormatUtils","../../core/unitUtils","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/geometryEngine","../../geometry/projection","../../geometry/support/geodesicUtils","../../layers/GraphicsLayer","../../layers/GroupLayer","../../views/draw/Draw","../../views/interactive/dragEventPipeline","../../views/interactive/GraphicManipulator","../../views/interactive/InteractiveToolBase","../../intl/messages","../../intl/locale","../../geometry/Point","../../symbols/CIMSymbol","../../symbols/TextSymbol","../../symbols/Font","../../symbols/SimpleMarkerSymbol","../../geometry/Polyline","../../geometry/SpatialReference"],(function(e,t,i,r,s,o,n,a,l,c,h,p,d,u,y,m,_,g,v,f,w,b,L,S,M,D,A,C,I,k,T,G,x,P,R){"use strict";const j=1e5;let B=function(e){function i(){var t;return(t=e.apply(this,arguments)||this)._drawActive=!1,t._handles=new a,t._polylineLayer=new w,t._manipulatorLayer=new w,t._groupLayer=new b({layers:[t._polylineLayer,t._manipulatorLayer],listMode:"hide",visible:!1}),t._vertices=[],t.geodesicDistanceThreshold=1e5,t.measurement=null,t.measurementLabel=null,t}t._inheritsLoose(i,e);var r=i.prototype;return r.initialize=function(){var e=this;A.fetchMessageBundle("esri/core/t9n/Units").then((e=>{this.messages=e})),this._handles.add(C.onLocaleChange(t._asyncToGenerator((function*(){e.messages=yield A.fetchMessageBundle("esri/core/t9n/Units")})))),this.startToolCreation()},r.destroy=function(){this._draw=l.destroyMaybe(this._draw),this._handles=l.destroyMaybe(this._handles),this._polylineLayer=l.destroyMaybe(this._polylineLayer),this._manipulatorLayer=l.destroyMaybe(this._manipulatorLayer)},r.onActivate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()},r.onAttach=function(){const e=this.view;this._draw=new L({view:e}),e.map.add(this._groupLayer),e.focus(),this._handles.add([p.init(this,["unit","geodesicDistanceThreshold","palette","messages"],(()=>{this._vertices.length>0&&this._updatePolylines()})),p.init(this,"view.spatialReference",(e=>{z(e)&&!v.isLoaded()&&v.load()}))]),this.finishToolCreation()},r.onDetach=function(){const{map:e}=this.view;this._draw.view=null,this._draw=l.destroyMaybe(this._draw),e.remove(this._groupLayer),this._handles.removeAll(),this._polylineLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null)},r.onShow=function(){this._groupLayer.visible=!0},r.onHide=function(){this._groupLayer.visible=!1},r.reset=function(){this._vertices=[],this._polylineLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])},r._startSketch=function(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>{this._stopSketch()}))},r._stopSketch=function(){this.manipulators.forEach((e=>{e.manipulator.interactive=!0})),this._drawActive=!1,this.complete()},r._updateSketch=function(e){if(z(this.view.spatialReference)&&!v.isLoaded())return;if(e.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._polylineLayer.removeAll();this.finishToolCreation();const{spatialReference:t}=this.view;for(;this._vertices.length>e.length;){const{manipulatorId:e}=this._vertices.pop();this.manipulators.remove(e)}for(let a=this._vertices.length;a<e.length;a++){const[i,r]=e[a],s=E(new I({x:i,y:r,spatialReference:t}),this.view,this._manipulatorLayer,this.palette),o=this.manipulators.add(s);S.createManipulatorDragEventPipeline(s,((e,t)=>{t.next(S.screenToMap(this.view)).next(S.dragGraphic(e.graphic,2)).next((()=>{const t=e.graphic.geometry;this._vertices[a].coord=[t.x,t.y],this._updatePolylines()}))})),this._vertices.push({manipulatorId:o,coord:[i,r]})}const i=this._vertices.length-1,r=this._vertices[i],[s,o]=e[i];if(r.coord[0]!==s||r.coord[1]!==o){r.coord=[s,o];const e=new I({x:s,y:o,spatialReference:t});this.manipulators.findById(r.manipulatorId).graphic.geometry=e}const n=this._drawActive?this._vertices[i].manipulatorId:null;this.manipulators.forEach((e=>{e.manipulator.interactive=null==n||e.id!==n})),this._updatePolylines()},r._updatePolylines=function(){const e=this._vertices.map((e=>e.coord)),{measurement:t,drawing:i,original:r}=U(e,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",t);const o=O(this.messages,t,this.unit);let n,a;this._set("measurementLabel",o);const{graphics:l}=this._polylineLayer;if(2===l.length)n=l.getItemAt(0),a=l.getItemAt(1);else{const{pathPrimaryColor:e,pathSecondaryColor:t,pathWidth:i}=this.palette;n=new s({symbol:new k({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:i-1.5,color:t},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:i,color:e}]}}})}),a=new s({symbol:new T({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,font:new G({size:14,family:"sans-serif"})})}),l.removeAll(),l.addMany([n,a])}n.geometry=i,a.geometry=r.extent.center,a.symbol.text=o},t._createClass(i,[{key:"cursor",get:function(){return this._drawActive?"crosshair":null}},{key:"editable",set:function(e){this._set("editable",e),e||this._draw.reset()}}]),i}(D.InteractiveToolBase);function E(e,t,i,r){const o=new x({style:"circle",color:r.handleColor,size:r.handleWidth,outline:{type:"simple-line",width:0}}),n=new x({style:"circle",color:r.handleColor,size:1.5*r.handleWidth,outline:{type:"simple-line",width:0}}),a=new s({geometry:e,symbol:o});return new M.GraphicManipulator({view:t,layer:i,graphic:a,focusedSymbol:n})}function U(e,t,i){const r=new P({paths:[e],spatialReference:t});let s,o;if(t.isGeographic)if(f.isSupported(t))s=f.geodesicLengths([r],"meters")[0],o=f.geodesicDensify(r,j);else{const e=v.project(r,R.WGS84),i=f.geodesicDensify(e,j);s=f.geodesicLengths([e],"meters")[0],o=v.project(i,t)}else if(t.isWebMercator)s=g.geodesicLength(r,"meters"),o=g.geodesicDensify(r,j,"meters");else{const e=g.planarLength(r,"meters");if(e>=i){const e=v.project(r,R.WGS84),i=f.geodesicDensify(e,j);s=f.geodesicLengths([e],"meters")[0],o=v.project(i,t)}else s=e,o=r}return{measurement:{geometry:o,length:s},original:r,drawing:o}}function W(e){return null!=e}function z(e){if(!e)return!1;const{isGeographic:t,isWebMercator:i,isWGS84:r}=e;return t&&!r&&!f.isSupported(e)||!t&&!i}function O(e,t,i){if(!t||!e)return null;switch(i){case"metric":return c.formatMetricLength(e,t.length,"meters");case"imperial":return c.formatImperialLength(e,t.length,"meters");default:return c.formatDecimal(e,h.convertUnit(t.length,"meters",i),i)}}i.__decorate([d.property()],B.prototype,"_drawActive",void 0),i.__decorate([d.property()],B.prototype,"cursor",null),i.__decorate([d.property({value:!0})],B.prototype,"editable",null),i.__decorate([d.property({type:Number})],B.prototype,"geodesicDistanceThreshold",void 0),i.__decorate([d.property({readOnly:!0})],B.prototype,"measurement",void 0),i.__decorate([d.property({readOnly:!0})],B.prototype,"measurementLabel",void 0),i.__decorate([d.property()],B.prototype,"messages",void 0),i.__decorate([d.property()],B.prototype,"palette",void 0),i.__decorate([d.property()],B.prototype,"unit",void 0),i.__decorate([d.property({constructOnly:!0})],B.prototype,"view",void 0),B=i.__decorate([_.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],B);const F=B;e.createDistanceMeasurementInfo2D=U,e.createDistanceMeasurementLabel=O,e.default=F,e.isSupported=W,Object.defineProperty(e,"__esModule",{value:!0})}));
