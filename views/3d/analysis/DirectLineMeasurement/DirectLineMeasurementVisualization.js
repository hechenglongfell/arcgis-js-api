/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Color","../../../../intl","../../../../core/Accessor","../../../../core/analysisThemeUtils","../../../../core/Handles","../../../../core/mathUtils","../../../../core/maybe","../../../../core/quantityFormatUtils","../../../../core/quantityUtils","../../../../core/reactiveUtils","../../../../core/screenUtils","../../../../core/unitUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec2","../../../../chunks/vec3","../../../../chunks/vec3f64","../interfaces","./interfaces","../support/viewUtils","../../interactive/visualElements/LabelVisualElement","../../interactive/visualElements/LineVisualElement","../../interactive/visualElements/MeasurementArrowVisualElement","../../interactive/visualElements/RightAngleQuadVisualElement","../../interactive/visualElements/support/Segment","../../webgl-engine/lib/Material","../../webgl-engine/materials/lineStippleUtils","../../../../intl/locale","../../../../intl/messages"],(function(e,t,i,n,s,a,r,o,l,c,d,u,h,g,m,p,_,v,b,L,y,V,w,M,S,f,A,E,P,z,D,O,G,T){"use strict";function C(e,t,i,n,s){const a=x,r=R;s.projectToRenderScreen(i,a),s.projectToRenderScreen(t,r);const o={segment:"bottom",horizontal:"top",vertical:a[0]<r[0]?"left":"right"};{const n=j,a=H;if(S.screenSpaceTangent(e,i,n,s),S.screenSpaceTangent(e,t,a,s),L.dot(n,a)>=k){const e=Math.sign(n[1])===Math.sign(a[1]);o.segment=e?f.mirrorPosition(o.vertical):o.vertical}else{const e=U;S.screenSpaceTangent(i,t,e,s),L.dot(e,a)>=k&&(o.segment=Math.sign(e[0])===Math.sign(a[0])?f.mirrorPosition(o.horizontal):o.horizontal)}}if(n===M.VisualElementOrientation.BelowSegment){const e=e=>"top"===e?"bottom":"top";o.segment=e(o.segment),o.horizontal=e(o.horizontal),o.vertical=e(o.vertical)}return o}e.DirectLineMeasurementVisualization=function(e){function i(t){var i;return(i=e.call(this,t)||this)._params={triangleColor:n.toUnitRGBA(r.getAccentColor(.75)),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:n.toUnitRGBA(r.getAccentColor(.75)),guideLineWidth:2,guideStippleLengthPixels:6,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},i._handles=new o,i._segmentVisualElement=null,i._triangleVisualElement=null,i._rightAngleQuad=null,i._projectedGeodesicLine=null,i._geodesicStartHint=null,i._geodesicEndHint=null,i._segmentLabel=null,i._verticalLabel=null,i._horizontalLabel=null,i._startPosition=V.create(),i._endPosition=V.create(),i._cornerPosition=V.create(),i._startPositionAtSeaLevel=V.create(),i._endPositionAtSeaLevel=V.create(),i._triangleOrientationOverride=null,i.messages=null,i.loadingMessages=!0,i.visualElementOrientation=M.VisualElementOrientation.Auto,i.triangleCollapseRatioThreshold=.03,i}t._inheritsLoose(i,e);var s=i.prototype;return s.initialize=function(){var e=this;const i=this._params,s={attached:!0,view:this.view};this._segmentVisualElement=new E.MeasurementArrowVisualElement({...s,geometry:null,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent}),this._triangleVisualElement=new A.LineVisualElement({...s,width:i.triangleLineWidth,color:i.triangleColor,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent}),this._rightAngleQuad=new P.RightAngleQuadVisualElement({...s,color:n.toUnitRGBA(r.getAccentColor(.75)),renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent});const a={...s,polygonOffset:!0,renderOccluded:D.RenderOccludedFlag.OccludeAndTransparent};this._projectedGeodesicLine=new A.LineVisualElement({...a,width:i.geodesicProjectionLineWidth,color:i.geodesicProjectionLineColor,stipplePattern:O.createStipplePatternSimple(i.guideStippleLengthPixels)}),this._geodesicStartHint=new A.LineVisualElement({...a,width:i.guideLineWidth,color:i.geodesicProjectionLineColor,stipplePattern:O.createStipplePatternSimple(i.guideStippleLengthPixels)}),this._geodesicEndHint=new A.LineVisualElement({...a,width:i.guideLineWidth,color:i.geodesicProjectionLineColor,stipplePattern:O.createStipplePatternSimple(i.guideStippleLengthPixels)});const o={...s,backgroundColor:r.getTextHaloColor(.6),textColor:r.getTextColor()};this._segmentLabel=new f.LabelVisualElement({...o,fontSize:i.direcLabelFontSize}),this._verticalLabel=new f.LabelVisualElement({...o,fontSize:i.verticalLabelFontSize}),this._horizontalLabel=new f.LabelVisualElement({...o,fontSize:i.horizontalLabelFontSize}),this._handles.add([h.watch((()=>{const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView,i=this.view;return{view:i,camera:i.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}}),(e=>this._updateGeometryAndViewMode(e)),h.syncAndInitial),h.watch((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateVisualElementVisibility(e)),h.syncAndInitial),h.watch((()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement})),(e=>this._updateLabelText(e)),h.syncAndInitial),h.watch((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateLabelVisibility(e)),h.syncAndInitial),h.watch((()=>this._measurementArrowStripeLength),(e=>this._updateSegmentStripeLength(e)),h.syncAndInitial),G.onLocaleChange(t._asyncToGenerator((function*(){return e._updateMessageBundle()})))]),this._updateMessageBundle()},s.destroy=function(){this._handles=c.destroyMaybe(this._handles),this._segmentVisualElement=c.destroyMaybe(this._segmentVisualElement),this._triangleVisualElement=c.destroyMaybe(this._triangleVisualElement),this._rightAngleQuad=c.destroyMaybe(this._rightAngleQuad),this._projectedGeodesicLine=c.destroyMaybe(this._projectedGeodesicLine),this._geodesicStartHint=c.destroyMaybe(this._geodesicStartHint),this._geodesicEndHint=c.destroyMaybe(this._geodesicEndHint),this._segmentLabel=c.destroyMaybe(this._segmentLabel),this._verticalLabel=c.destroyMaybe(this._verticalLabel),this._horizontalLabel=c.destroyMaybe(this._horizontalLabel),this.set("view",null)},s._updateVisualElementVisibility=function({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case M.ViewMode.None:break;case M.ViewMode.Direct:this._segmentVisualElement.visible=!0;break;case M.ViewMode.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case M.ViewMode.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}},s._updateGeometryAndViewMode=function({view:e,camera:t,viewMode:i,elevationAlignedStartPoint:n,elevationAlignedEndPoint:s,orientation:a,visualizedMeasurement:r,stripeLength:o}){const l=e.renderCoordsHelper;if(c.isNone(l)||c.isNone(n)||c.isNone(s)||n.equals(s))return;let d=this._startPosition,u=this._endPosition;l.toRenderCoords(n,d),l.toRenderCoords(s,u);const h=a===M.VisualElementOrientation.AboveSegment?1:-1,g=h*(l.getAltitude(u)-l.getAltitude(d));g<0&&(d=this._endPosition,u=this._startPosition);const m="geodesic"===r?new z.GeodesicSegment(this._startPosition,this._endPosition,l.spatialReference):new z.EuclideanSegment(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=m,this._updateSegmentStripeLength(o),i){case M.ViewMode.Direct:this._updateSegment(m,a);break;case M.ViewMode.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:m,orientation:a,startPosition:d,endPosition:u,deltaSign:h,altitudeDelta:g});break;case M.ViewMode.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:a,startPosition:d,endPosition:u})}},s._updateSegment=function(e,t){this._segmentLabel.anchor=t===M.VisualElementOrientation.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}},s._updateSegmentAndTriangle=function({view:{renderCoordsHelper:e},camera:t,segment:i,orientation:n,startPosition:s,endPosition:a,deltaSign:r,altitudeDelta:o}){const l=this._cornerPosition;e.worldUpAtPosition(s,l),y.scale(l,l,r*Math.abs(o)),y.add(l,l,s),this._triangleVisualElement.geometry=[[[s[0],s[1],s[2]],[l[0],l[1],l[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:s,center:l,next:a};const c=new z.EuclideanSegment(s,l),d=new z.EuclideanSegment(l,a),u=C(s,a,l,n,t);this._segmentLabel.anchor=u.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:c,sampleLocation:"center"},this._verticalLabel.anchor=u.vertical,this._horizontalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._horizontalLabel.anchor=u.horizontal},s._updateSegmentAndProjection=function({view:{renderCoordsHelper:e},orientation:t,startPosition:i,endPosition:n}){e.setAltitude(this._startPositionAtSeaLevel,0,i),e.setAltitude(this._endPositionAtSeaLevel,0,n);const s=new z.GeodesicSegment(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(s),this._geodesicStartHint.setGeometryFromSegment(new z.EuclideanSegment(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new z.EuclideanSegment(this._endPositionAtSeaLevel,n)),this._segmentLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._segmentLabel.anchor=t===M.VisualElementOrientation.AboveSegment?"top":"bottom"},s._updateLabelText=function({text:e,visualizedMeasurement:t}){c.isSome(e)?(this._segmentLabel.text="euclidean"===t?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")},s._updateLabelVisibility=function({visible:e,viewMode:t}){const i=this._segmentLabel,n=this._horizontalLabel,s=this._verticalLabel;if(i.visible=!1,n.visible=!1,s.visible=!1,e)switch(t){case M.ViewMode.Direct:i.visible=!0;break;case M.ViewMode.Triangle:i.visible=!0,n.visible=!0,s.visible=!0;break;case M.ViewMode.ProjectedGeodesic:i.visible=!0;case M.ViewMode.None:}},s._updateSegmentStripeLength=function(e){const t=this._segmentVisualElement;c.isSome(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1},s._requiresGeodesicGuideAt=function(e){const t=this.view;if(!t?.state)return!1;const i=t.state.camera,n=t.renderCoordsHelper,s=i.computeScreenPixelSizeAt(e);return n.getAltitude(e)/s>=10},s._updateMessageBundle=function(){this.loadingMessages=!0,T.fetchMessageBundle("esri/core/t9n/Units").then((e=>{this.messages=e})).finally((()=>{this.loadingMessages=!1}))},t._createClass(i,[{key:"visible",get:function(){return this.analysisView.visible}},{key:"viewMode",get:function(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(c.isNone(e)||c.isNone(t)||e.equals(t))return M.ViewMode.None;const i=this.analysisView.result;if(c.isNone(i))return M.ViewMode.Direct;if("geodesic"===i.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?M.ViewMode.ProjectedGeodesic:M.ViewMode.Direct;const{verticalDistance:n,horizontalDistance:s}=i,a=n.value,r=s.value;return Math.min(a/r,r/a)<this.triangleCollapseRatioThreshold?M.ViewMode.Direct:M.ViewMode.Triangle}},{key:"actualVisualizedMeasurement",get:function(){if(c.isNone(this.analysisView.result))switch(this.analysisView.measurementMode){case w.MeasurementMode.Auto:case w.MeasurementMode.Euclidean:default:return"euclidean";case w.MeasurementMode.Geodesic:return"geodesic"}return this.analysisView.result.mode}},{key:"allowVisualElementsOrientationChange",get:function(){return c.isNone(this._triangleOrientationOverride)},set:function(e){c.isNone(this._triangleOrientationOverride)!==e&&(c.isNone(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}},{key:"labels",get:function(){const e="geodesic"===this.actualVisualizedMeasurement;return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}},{key:"_labelsText",get:function(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(c.isNone(t)||c.isNone(e))return null;const{directDistance:i,horizontalDistance:n,verticalDistance:s,geodesicDistance:a}=t,r=this.analysisView.unit,o=e=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...e});switch(r){case"metric":return o({euclideanDistance:i&&d.formatMetricLength(e,i),geodesicDistance:a&&d.formatMetricLength(e,a),horizontalDistance:n&&d.formatMetricLength(e,n),verticalDistance:s&&d.formatMetricVerticalLength(e,s)});case"imperial":return o({euclideanDistance:i&&d.formatImperialLength(e,i),geodesicDistance:a&&d.formatImperialLength(e,a),horizontalDistance:n&&d.formatImperialLength(e,n),verticalDistance:s&&d.formatImperialVerticalLength(e,s)});default:return o({euclideanDistance:i&&d.formatDecimal(e,i,r),geodesicDistance:a&&d.formatDecimal(e,a,r),horizontalDistance:n&&d.formatDecimal(e,n,r),verticalDistance:s&&d.formatDecimal(e,s,r)})}}},{key:"_actualVisualElementsOrientation",get:function(){if(c.isSome(this._triangleOrientationOverride))return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===M.VisualElementOrientation.Auto?this.view.state.camera.aboveGround?M.VisualElementOrientation.AboveSegment:M.VisualElementOrientation.BelowSegment:e}},{key:"_measurementArrowStripeLength",get:function(){const{result:e,unit:t}=this.analysisView;if(c.isNone(e))return null;let i=null;const n=e.directDistance;switch(t){case"metric":i=n&&u.toUnit(n,"meters");break;case"imperial":i=n&&u.toUnit(n,m.preferredImperialLengthUnit(n.value,n.unit));break;default:i=n&&u.toUnit(n,t)}if(c.isNone(i))return null;return l.nextHighestPowerOfTen(i.value/30)*m.convertUnit(1,i.unit,"meters")}},{key:"testData",get:function(){return{labels:this.labels,stripeLength:this._segmentVisualElement?.stripeLength}}}]),i}(a),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_triangleOrientationOverride",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"messages",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"view",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"analysis",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"analysisView",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"loadingMessages",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"visible",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"viewMode",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"actualVisualizedMeasurement",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"visualElementOrientation",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"triangleCollapseRatioThreshold",void 0),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"allowVisualElementsOrientationChange",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"labels",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_labelsText",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_actualVisualElementsOrientation",null),i.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_measurementArrowStripeLength",null),e.DirectLineMeasurementVisualization=i.__decorate([b.subclass("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],e.DirectLineMeasurementVisualization);const k=Math.cos(l.deg2rad(12)),x=g.createRenderScreenPointArray3(),R=g.createRenderScreenPointArray3(),j=g.createRenderScreenPointArray(),H=g.createRenderScreenPointArray(),U=g.createRenderScreenPointArray();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
