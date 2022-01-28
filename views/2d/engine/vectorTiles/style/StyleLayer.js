/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../shaders/VTLBackgroundMaterial","../shaders/VTLCircleMaterial","../shaders/VTLFillMaterial","../shaders/VTLLineMaterial","../shaders/VTLSymbolMaterial","./Filter","./StyleDefinition","./StyleProperty","../../webgl/definitions"],(function(t,i,e,a,n,o,r,l,s,u,h){"use strict";let p=function(){function t(t,i,e,a){switch(this.type=t,this.typeName=i.type,this.id=i.id,this.source=i.source,this.sourceLayer=i["source-layer"],this.minzoom=i.minzoom,this.maxzoom=i.maxzoom,this.filter=i.filter,this.layout=i.layout,this.paint=i.paint,this.z=e,this.uid=a,t){case 0:this._layoutDefinition=s.StyleDefinition.backgroundLayoutDefinition,this._paintDefinition=s.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=s.StyleDefinition.fillLayoutDefinition,this._paintDefinition=s.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=s.StyleDefinition.lineLayoutDefinition,this._paintDefinition=s.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=s.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=s.StyleDefinition.symbolPaintDefinition;break;case 4:this._layoutDefinition=s.StyleDefinition.circleLayoutDefinition,this._paintDefinition=s.StyleDefinition.circlePaintDefinition}this._layoutProperties=this._parseLayout(this.layout),this._paintProperties=this._parsePaint(this.paint)}var i=t.prototype;return i.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=l.createFilter(this.filter)},i.getLayoutProperty=function(t){return this._layoutProperties[t]},i.getPaintProperty=function(t){return this._paintProperties[t]},i.getLayoutValue=function(t,i,e){let a;const n=this._layoutProperties[t];return n&&(a=n.getValue(i,e)),void 0===a&&(a=this._layoutDefinition[t].default),a},i.getPaintValue=function(t,i,e){let a;const n=this._paintProperties[t];return n&&(a=n.getValue(i,e)),void 0===a&&(a=this._paintDefinition[t].default),a},i.isPainterDataDriven=function(){const t=this._paintProperties;if(t)for(const i in t)if(t[i].isDataDriven)return!0;return!1},i._parseLayout=function(t){const i={};for(const e in t){const a=this._layoutDefinition[e];a&&(i[e]=new u(a,t[e]))}return i},i._parsePaint=function(t){const i={};for(const e in t){const a=this._paintDefinition[e];a&&(i[e]=new u(a,t[e]))}return i},i.computeAttributesKey=function(t,i,e,a){let n=0,o=0;for(const r of i){let t=3;if(!r||r!==a){const i=e[r],{isLayout:a,isOptional:n}=i,o=a?this.getLayoutProperty(r):this.getPaintProperty(r);t=null!=o&&o.interpolator?2:null!=o&&o.isDataDriven?1:n&&!o?3:0}o|=t<<n,n+=2}return o<<3|t},t}(),y=function(t){function a(i,a,n,o){var r;return(r=t.call(this,i,a,n,o)||this).backgroundMaterial=new e.VTLBackgroundMaterial(r.computeAttributesKey(0,e.VTLBackgroundMaterial.ATTRIBUTES,e.VTLBackgroundMaterial.ATTRIBUTES_INFO)),r}return i._inheritsLoose(a,t),a}(p),g=function(t){function e(i,e,a,o){var r;const l=(r=t.call(this,i,e,a,o)||this).getPaintProperty("fill-color"),s=r.getPaintProperty("fill-opacity"),u=r.getPaintProperty("fill-pattern");r.hasDataDrivenColor=null==l?void 0:l.isDataDriven,r.hasDataDrivenOpacity=null==s?void 0:s.isDataDriven,r.hasDataDrivenFill=r.hasDataDrivenColor||r.hasDataDrivenOpacity||(null==u?void 0:u.isDataDriven);const h=r.getPaintProperty("fill-outline-color");return r.outlineUsesFillColor=!h,r.hasDataDrivenOutlineColor=null==h?void 0:h.isDataDriven,r.hasDataDrivenOutline=h?h.isDataDriven:!!l&&l.isDataDriven,r.hasDataDrivenOutline=(h?r.hasDataDrivenOutlineColor:r.hasDataDrivenColor)||r.hasDataDrivenOpacity,r.fillMaterial=new n.VTLFillMaterial(r.computeAttributesKey(1,n.VTLFillMaterial.ATTRIBUTES,n.VTLFillMaterial.ATTRIBUTES_INFO)),r.outlineMaterial=new n.VTLOutlineMaterial(r.computeAttributesKey(2,r.outlineUsesFillColor?n.VTLOutlineMaterial.ATTRIBUTES_FILL:n.VTLOutlineMaterial.ATTRIBUTES_OUTLINE,r.outlineUsesFillColor?n.VTLOutlineMaterial.ATTRIBUTES_INFO_FILL:n.VTLOutlineMaterial.ATTRIBUTES_INFO_OUTLINE),r.outlineUsesFillColor),r}return i._inheritsLoose(e,t),e}(p),c=function(t){function e(i,e,a,n){var r,l,s,u,p,y,g,c,D,P;const f=(P=t.call(this,i,e,a,n)||this).getPaintProperty("line-pattern");if(P.lineMaterial=new o.VTLLineMaterial(P.computeAttributesKey(3,o.VTLLineMaterial.ATTRIBUTES,o.VTLLineMaterial.ATTRIBUTES_INFO,f?"line-dasharray":"")),P.hasDataDrivenLine=(null==(r=P.getPaintProperty("line-blur"))?void 0:r.isDataDriven)||(null==(l=P.getPaintProperty("line-color"))?void 0:l.isDataDriven)||(null==(s=P.getPaintProperty("line-gap-width"))?void 0:s.isDataDriven)||(null==(u=P.getPaintProperty("line-offset"))?void 0:u.isDataDriven)||(null==(p=P.getPaintProperty("line-opacity"))?void 0:p.isDataDriven)||(null==(y=P.getPaintProperty("line-pattern"))?void 0:y.isDataDriven)||(null==(g=P.getPaintProperty("line-dasharray"))?void 0:g.isDataDriven)||(null==(c=P.getLayoutProperty("line-cap"))?void 0:c.isDataDriven)||(null==(D=P.getPaintProperty("line-width"))?void 0:D.isDataDriven),P.canUseThinTessellation=!1,!P.hasDataDrivenLine){const t=P.getPaintProperty("line-width");if(!t||"number"==typeof t&&.5*t<h.THIN_LINE_HALF_WIDTH_THRESHOLD){const t=P.getPaintProperty("line-offset");(!t||"number"==typeof t&&0===t)&&(P.canUseThinTessellation=!0)}}return P}return i._inheritsLoose(e,t),e.prototype.getDashKey=function(t,i){let e;switch(i){case 0:default:e="Butt";break;case 1:e="Round";break;case 2:e="Square"}return`dasharray-[${t.toString()}]-${e}`},e}(p),D=function(t){function e(i,e,a,n){var o,l,s,u,h,p,y,g,c,D,P,f,L;return(L=t.call(this,i,e,a,n)||this).iconMaterial=new r.VTLIconMaterial(L.computeAttributesKey(4,r.VTLIconMaterial.ATTRIBUTES,r.VTLIconMaterial.ATTRIBUTES_INFO)),L.textMaterial=new r.VTLTextMaterial(L.computeAttributesKey(6,r.VTLTextMaterial.ATTRIBUTES,r.VTLTextMaterial.ATTRIBUTES_INFO)),L.hasDataDrivenIcon=(null==(o=L.getPaintProperty("icon-color"))?void 0:o.isDataDriven)||(null==(l=L.getPaintProperty("icon-halo-blur"))?void 0:l.isDataDriven)||(null==(s=L.getPaintProperty("icon-halo-color"))?void 0:s.isDataDriven)||(null==(u=L.getPaintProperty("icon-halo-width"))?void 0:u.isDataDriven)||(null==(h=L.getPaintProperty("icon-opacity"))?void 0:h.isDataDriven)||(null==(p=L.getLayoutProperty("icon-size"))?void 0:p.isDataDriven),L.hasDataDrivenText=(null==(y=L.getPaintProperty("text-color"))?void 0:y.isDataDriven)||(null==(g=L.getPaintProperty("text-halo-blur"))?void 0:g.isDataDriven)||(null==(c=L.getPaintProperty("text-halo-color"))?void 0:c.isDataDriven)||(null==(D=L.getPaintProperty("text-halo-width"))?void 0:D.isDataDriven)||(null==(P=L.getPaintProperty("text-opacity"))?void 0:P.isDataDriven)||(null==(f=L.getLayoutProperty("text-size"))?void 0:f.isDataDriven),L}return i._inheritsLoose(e,t),e}(p),P=function(t){function e(i,e,n,o){var r;return(r=t.call(this,i,e,n,o)||this).circleMaterial=new a.VTLCircleMaterial(r.computeAttributesKey(5,a.VTLCircleMaterial.ATTRIBUTES,a.VTLCircleMaterial.ATTRIBUTES_INFO)),r}return i._inheritsLoose(e,t),e}(p),f=function(){function t(t,i,e){var a,n,o,r,l;let s;this.allowOverlap=t.getLayoutValue("icon-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("icon-ignore-placement",i),this.keepUpright=t.getLayoutValue("icon-keep-upright",i),this.optional=t.getLayoutValue("icon-optional",i),this.rotationAlignment=t.getLayoutValue("icon-rotation-alignment",i),2===this.rotationAlignment&&(this.rotationAlignment=e?0:1),s=t.getLayoutProperty("icon-anchor"),null!=(a=s)&&a.isDataDriven?this._anchorProp=s:this.anchor=t.getLayoutValue("icon-anchor",i),s=t.getLayoutProperty("icon-offset"),null!=(n=s)&&n.isDataDriven?this._offsetProp=s:this.offset=t.getLayoutValue("icon-offset",i),s=t.getLayoutProperty("icon-padding"),null!=(o=s)&&o.isDataDriven?this._paddingProp=s:this.padding=t.getLayoutValue("icon-padding",i),s=t.getLayoutProperty("icon-rotate"),null!=(r=s)&&r.isDataDriven?this._rotateProp=s:this.rotate=t.getLayoutValue("icon-rotate",i),s=t.getLayoutProperty("icon-size"),null!=(l=s)&&l.isDataDriven?this._sizeProp=s:this.size=t.getLayoutValue("icon-size",i)}return t.prototype.update=function(t,i){this._anchorProp&&(this.anchor=this._anchorProp.getValue(t,i)),this._offsetProp&&(this.offset=this._offsetProp.getValue(t,i)),this._paddingProp&&(this.padding=this._paddingProp.getValue(t,i)),this._rotateProp&&(this.rotate=this._rotateProp.getValue(t,i)),this._sizeProp&&(this.size=this._sizeProp.getValue(t,i))},t}(),L=function(){function t(t,i,e){var a,n,o,r,l,s,u,h,p,y,g;let c;this.allowOverlap=t.getLayoutValue("text-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("text-ignore-placement",i),this.keepUpright=t.getLayoutValue("text-keep-upright",i),this.optional=t.getLayoutValue("text-optional",i),this.rotationAlignment=t.getLayoutValue("text-rotation-alignment",i),2===this.rotationAlignment&&(this.rotationAlignment=e?0:1),c=t.getLayoutProperty("text-anchor"),null!=(a=c)&&a.isDataDriven?this._anchorProp=c:this.anchor=t.getLayoutValue("text-anchor",i),c=t.getLayoutProperty("text-justify"),null!=(n=c)&&n.isDataDriven?this._justifyProp=c:this.justify=t.getLayoutValue("text-justify",i),c=t.getLayoutProperty("text-letter-spacing"),null!=(o=c)&&o.isDataDriven?this._letterSpacingProp=c:this.letterSpacing=t.getLayoutValue("text-letter-spacing",i),c=t.getLayoutProperty("text-line-height"),null!=(r=c)&&r.isDataDriven?this._lineHeightProp=c:this.lineHeight=t.getLayoutValue("text-line-height",i),c=t.getLayoutProperty("text-max-angle"),null!=(l=c)&&l.isDataDriven?this._maxAngleProp=c:this.maxAngle=t.getLayoutValue("text-max-angle",i),c=t.getLayoutProperty("text-max-width"),null!=(s=c)&&s.isDataDriven?this._maxWidthProp=c:this.maxWidth=t.getLayoutValue("text-max-width",i),c=t.getLayoutProperty("text-offset"),null!=(u=c)&&u.isDataDriven?this._offsetProp=c:this.offset=t.getLayoutValue("text-offset",i),c=t.getLayoutProperty("text-padding"),null!=(h=c)&&h.isDataDriven?this._paddingProp=c:this.padding=t.getLayoutValue("text-padding",i),c=t.getLayoutProperty("text-rotate"),null!=(p=c)&&p.isDataDriven?this._rotateProp=c:this.rotate=t.getLayoutValue("text-rotate",i),c=t.getLayoutProperty("text-size"),null!=(y=c)&&y.isDataDriven?this._sizeProp=c:this.size=t.getLayoutValue("text-size",i),c=t.getLayoutProperty("text-writing-mode"),null!=(g=c)&&g.isDataDriven?this._writingModeProp=c:this.writingMode=t.getLayoutValue("text-writing-mode",i)}return t.prototype.update=function(t,i){this._anchorProp&&(this.anchor=this._anchorProp.getValue(t,i)),this._justifyProp&&(this.justify=this._justifyProp.getValue(t,i)),this._letterSpacingProp&&(this.letterSpacing=this._letterSpacingProp.getValue(t,i)),this._lineHeightProp&&(this.lineHeight=this._lineHeightProp.getValue(t,i)),this._maxAngleProp&&(this.maxAngle=this._maxAngleProp.getValue(t,i)),this._maxWidthProp&&(this.maxWidth=this._maxWidthProp.getValue(t,i)),this._offsetProp&&(this.offset=this._offsetProp.getValue(t,i)),this._paddingProp&&(this.padding=this._paddingProp.getValue(t,i)),this._rotateProp&&(this.rotate=this._rotateProp.getValue(t,i)),this._sizeProp&&(this.size=this._sizeProp.getValue(t,i)),this._writingModeProp&&(this.writingMode=this._writingModeProp.getValue(t,i))},t}();t.BackgroundStyleLayer=y,t.CircleStyleLayer=P,t.FillStyleLayer=g,t.IconLayout=f,t.LineStyleLayer=c,t.StyleLayer=p,t.SymbolStyleLayer=D,t.TextLayout=L,Object.defineProperty(t,"__esModule",{value:!0})}));
