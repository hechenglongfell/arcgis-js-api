/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/mathUtils","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../chunks/mat2d","../../../../../../chunks/mat2df32","../../../../../../symbols/cim/enums","../../alignmentUtils","../../color","../../definitions","../../enums","../../number","../../materialKey/MaterialKey","./segmentUtils","./WGLTextTemplate"],(function(e,t,i,n,o,r,a,l,s,h,c,m,_,u,g,d,f){"use strict";const p=i.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),y=(e,i="mapview-labeling")=>p.error(new t(i,e)),b=1,x=0,L=4,v=25;function P(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0;return n.clamp(i,0,25.5)}function A(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255;return n.clamp(i,0,25.5)}function S(e){const t=new Map;return i=>(t.has(i)||t.set(i,e(i)),t.get(i))}const M=S((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t})),w=e=>Math.floor(127*e+127),B=e=>Math.floor(10*e),k=e=>Math.round(e*(254/360));return function(t){function i(e,i,n,o){var a;(a=t.call(this,e,n.font?.size,n.haloSize||0,n.font?.size,n.color&&c.premultiplyAlphaRGBAArray(n.color)||0,n.haloColor&&c.premultiplyAlphaRGBAArray(n.haloColor)||0,n.horizontalAlignment,n.verticalAlignment,h.isMapAligned(i.labelPlacement)?s.Alignment.MAP:s.Alignment.SCREEN,n.font?.decoration,!1,n.angle||0,n.xoffset,n.yoffset,n.lineWidth,n.lineHeight,null,null,!1,null,null,n.backgroundColor&&c.premultiplyAlphaRGBAArray(n.backgroundColor),n.borderLineColor&&c.premultiplyAlphaRGBAArray(n.borderLineColor),n.borderLineSize)||this)._outLineLabelAngle=0,a._refPlacementPadding=0,a._refPlacementDirX=0,a._refPlacementDirY=0,a._refOffsetX=0,a._refOffsetY=0,a._zoomLevel=0,a.geometryType=_.WGLGeometryType.LABEL,a._allowOverrun=i.allowOverrun??!1,a._repeatLabel=i.repeatLabel??!0,a._labelPosition=i.labelPosition??"curved";const l=P(i,o),u=A(i,o),d=i.labelPlacement,[f,p]=h.getAlignmentFromPlacement(d);a._xAlignD=f,a._yAlignD=p,a._minZoom=l,a._maxZoom=u,a._minBackgroundZoom=l,a._maxBackgroundZoom=u,a._refPlacementPadding=r.pt2px(n.haloSize)+m.TEXT_PLACEMENT_PADDING,a._repeatLabelDistance=i.repeatLabelDistance?r.pt2px(i.repeatLabelDistance):128;const y=g.LabelMaterialKey.load(e);return y.sdf=!0,a._materialKey=y.data,a}e._inheritsLoose(i,t),i.fromLabelClass=function(e,t){if("esriServerLinePlacementCenterAlong"===e.labelPlacement){const t=e.symbol;t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new i(e.materialKey,e,e.symbol,t)};var n=i.prototype;return n.setZoomLevel=function(e){this._zoomLevel=e},n.bindReferenceTemplate=function(e){let t=h.getXDirection(this._xAlignD),i=h.getYDirection(this._yAlignD);if(this._refOffsetX=0,this._refOffsetY=0,o.isNone(e))return void(this._refSymbolAndPlacementOffset=u.i8888to32(0,0,w(t),w(i)));if("circle"===e.boundsType&&(t||i)){const e=Math.sqrt(t*t+i*i);t/=e,i/=e}const n=Math.max(e.height,e.width),r=this._refPlacementPadding*L;this._refSymbolAndPlacementOffset=u.i8888to32(r,n,w(t),w(i)),this._referenceSize=n,this._refPlacementDirX=t,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset},n._write=function(e,t){if(o.isNone(this._shapingInfo))return;const i=this._shapingInfo,n=t.getDisplayId(),r="esriGeometryPolygon"===t.geometryType?t.readLegacyCentroid():t.readLegacyGeometry();if(r)switch(this._current={out:e,inId:n,inShaping:i,zoomLevel:this._zoomLevel},"esriGeometryPolyline"===t.geometryType&&"curved"===this._labelPosition&&(this._borderLineColor||this._backgroundColor)&&p.warnOnce("TextSymbol properties 'borderLineColor', 'borderLineSize', and 'backgroundColor' are not supported in curved labels"),t.geometryType){case"esriGeometryPolyline":this._placeLineLabels(r);break;case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(r);break;default:y(`Geometry of type ${t.geometryType} is not supported`)}},n._isVisible=function(e,t){const i=B(this._current.zoomLevel);return B(e)<=i&&i<=B(t)},n._placePointLabels=function(e){const{out:t,inId:i,inShaping:n}=this._current;this._writeGlyphs(t,i,e,n)},n._placeLineLabels=function(e){const t=d.smoothPaths(e.paths,this._current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),n=(this._shapedBox.width+this._repeatLabelDistance)/(1<<b);for(const o of t)d.pathDivide(o,n,i,this._repeatLabel)},n._placeSubdivGlyphs=function(e,t,i,n){const o=M(t),r=this._shapedBox.width/(1<<b),a=Math.sqrt(this._repeatLabelDistance)/(1<<b),l=Math.min(i,n-i),s=this._current.inShaping.isMultiline?v:Math.log2(l/(a+r/2)),h=0===t?s:Math.min(o,s),c=Math.max(this._minZoom,this._current.zoomLevel+b-h),m=this._current.zoomLevel-c,_=this._shapedBox.width/2*2**m;this._current.inShaping.isMultiline?0===t&&this._placeStraight(e,c):this._allowOverrun&&m<0?this._placeStraightAlong(e,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(e,c):"curved"===this._labelPosition&&this._placeCurved(e,c,_)},n._placeStraight=function(e,t){const{out:i,inId:n,inShaping:o}=this._current,r=Math.ceil(e.angle*(180/Math.PI)%360),a=Math.ceil((e.angle*(180/Math.PI)+180)%360);this._outLineLabelAngle=k(r),this._writeGlyphs(i,n,e,o,t),this._outLineLabelAngle=k(a),this._writeGlyphs(i,n,e,o,t)},n._placeCurved=function(e,t,i){const{out:n,inId:o}=this._current;n.metricStart(o,t,e.x,e.y,0,0,0,0);const r=e.clone(),a=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360;this._outLineLabelAngle=k(a),this._placeFirst(r,t,1),this._placeBack(e,r,t,i,1),this._placeForward(e,r,t,i,1),this._outLineLabelAngle=k(l),this._placeFirst(r,t,0),this._placeBack(e,r,t,i,0),this._placeForward(e,r,t,i,0),n.metricEnd()},n._placeStraightAlong=function(e,t){const{out:i,inId:n,inShaping:o}=this._current;i.metricStart(n,t,e.x,e.y,0,0,0,0);const r=e.clone(),s=e.angle*(180/Math.PI)%360,h=(e.angle*(180/Math.PI)+180)%360,c=o.glyphs.length>0&&(this._borderLineColor||this._backgroundColor);if(this._maxBackgroundZoom=v,this._minBackgroundZoom=Math.max(t,0),c){const t=g.LabelMaterialKey.load(this._materialKey);t.textureBinding=o.glyphs[0].textureBinding;const r=a.fromRotation(l.create(),-e.angle),[c,m]=o.shapeBackground(r);this._outLineLabelAngle=k(s),i.recordStart(n,t.data,this.geometryType,!0),this._writeBackgroundGeometry(i,n,e,c,m),i.recordEnd(),this._outLineLabelAngle=k(h),i.recordStart(n,t.data,this.geometryType,!0),this._writeBackgroundGeometry(i,n,e,c,m),i.recordEnd()}this._outLineLabelAngle=k(s),this._placeFirst(r,t,1,!0),this._outLineLabelAngle=k(h),this._placeFirst(r,t,0,!0),i.metricEnd()},n._placeBack=function(e,t,i,n,o){const r=e.clone();let a=e.backwardLength+x;for(;r.prev()&&!(a>=n);)this._placeOnSegment(r,t,a,i,-1,o),a+=r.length+x},n._placeForward=function(e,t,i,n,o){const r=e.clone();let a=e.remainingLength+x;for(;r.next()&&!(a>=n);)this._placeOnSegment(r,t,a,i,1,o),a+=r.length+x},n._placeFirst=function(e,t,i,n=!1){const o=e,r=this._current.inShaping,a=r.glyphs,l=this._current.zoomLevel,{out:s,inId:h}=this._current;for(const c of a){const a=c.x>r.bounds.x?i:1-i,m=a*e.remainingLength+(1-a)*e.backwardLength,_=Math.abs(c.x+c.width/2-r.bounds.x),u=Math.max(0,l+Math.log2(_/(m+x))),g=Math.max(t,n?0:u);if(c.maxZoom=v,c.angle=e.angle+(1-i)*Math.PI,c.minZoom=g,this._writeGlyph(s,h,o.x,o.y,c),i&&this._isVisible(c.minZoom,c.maxZoom)){const e=c.bounds;s.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}},n._placeOnSegment=function(e,t,i,n,o,r){const a=this._current.inShaping.glyphs,{out:l,inId:s}=this._current,h=this._current.inShaping,c=this._current.zoomLevel,m=e.dx/e.length,_=e.dy/e.length,u={x:e.x+i*-o*m,y:e.y+i*-o*_};for(const g of a){const a=g.x>h.bounds.x?r:1-r;if(!(a&&1===o||!a&&-1===o))continue;const m=Math.abs(g.x+g.width/2-h.bounds.x),_=Math.max(0,c+Math.log2(m/i)-.1),d=Math.max(n,c+Math.log2(m/(i+e.length+x)));if(0!==_&&(g.angle=e.angle+(1-r)*Math.PI,g.minZoom=d,g.maxZoom=_,this._writeGlyph(l,s,u.x,u.y,g),r&&this._isVisible(g.minZoom,g.maxZoom))){const i=g.bounds,n=e.x-t.x,o=e.y-t.y;l.metricBoxWrite(i.center[0]+n,i.center[1]+o,i.width,i.height)}}},n._writeGlyphs=function(e,t,i,n,o=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return;if(n.glyphs.length>0&&(this._borderLineColor||this._backgroundColor)){const o=g.LabelMaterialKey.load(this._materialKey);o.textureBinding=n.glyphs[0].textureBinding,e.recordStart(t,o.data,this.geometryType,!0),this._writeBackgroundGeometry(e,t,i,n.bounds,n.background),e.recordEnd()}const r=i.x+this._refOffsetX,a=i.y-this._refOffsetY;for(const c of n.glyphs)c.minZoom=o,c.maxZoom=this._maxZoom,this._writeGlyph(e,t,r,a,c);const l=this._refPlacementDirX,s=this._refPlacementDirY,h=n.boundsT;e.metricStart(t,o,r,a,l,s,this._referenceSize,this._materialKey),e.metricBoxWrite(h.center[0],h.center[1],h.width,h.height),e.metricEnd()},n._writeVertexCommon=function(e,t,i,n){const o=this._color,r=this._haloColor,a=u.i8888to32(0,0,this._size,this._haloSize),l=Math.max(n.minZoom,this._minZoom),s=Math.min(n.maxZoom,this._maxZoom),h=u.i8888to32(B(l),B(s),this._outLineLabelAngle,0);e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(o),e.vertexWrite(r),e.vertexWrite(a),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(h)},n._writeBackgroundVertex=function(e,t,i,n,o,r){const a=u.i8888to32(0,0,this._size,this._haloSize),l=u.i8888to32(0,0,0,0),s=u.i8888to32(B(this._minBackgroundZoom),B(this._maxBackgroundZoom),this._outLineLabelAngle,1);e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(l),e.vertexWrite(a),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(s),e.vertexWrite(o),e.vertexWrite(r),e.vertexEnd()},e._createClass(i,[{key:"_shapedBox",get:function(){return o.unwrap(this._shapingInfo).bounds}}]),i}(f)}));
