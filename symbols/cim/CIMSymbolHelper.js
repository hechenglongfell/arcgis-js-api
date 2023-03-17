/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/BidiText","../../core/lang","../../core/Logger","../../core/maybe","../../core/RandomLCG","../../core/screenUtils","../../geometry/support/aaBoundingRect","../../geometry/support/boundsUtils","../../support/arcadeOnDemand","./CIMPlacements","./CIMSymbolDrawHelper","./enums","./utils","../../views/2d/arcade/callExpressionWithFeature","../../views/2d/engine/vectorTiles/GeometryUtils","../../views/2d/engine/webgl/definitions","../../views/2d/engine/webgl/mesh/templates/shapingUtils"],(function(e,t,r,i,o,a,n,s,l,c,f,m,y,u,p,h,M,d,S,g){"use strict";const b=Math.PI,C=b/2,I=4,k=4,x=10,P=96/72,L=Math.PI/180,w=a.getLogger("esri.symbols.cim.CIMSymbolHelper");function v(e){if(!e||!e.type)return null;let t;switch(e.type){case"cim":return e.data;case"web-style":return e;case"simple-marker":{const r=V.fromSimpleMarker(e);if(!r)return null;t=r;break}case"picture-marker":t=V.fromPictureMarker(e);break;case"simple-line":t=V.fromSimpleLineSymbol(e);break;case"simple-fill":t=V.fromSimpleFillSymbol(e);break;case"picture-fill":t=V.fromPictureFillSymbol(e);break;case"text":t=V.fromTextSymbol(e)}return{type:"CIMSymbolReference",symbol:t}}function T(e,t,r){switch(t.type){case"CIMSymbolReference":return T(e,t.symbol,r);case"CIMPointSymbol":null==r&&(r={x:0,y:0}),e.drawSymbol(t,r);break;case"CIMLineSymbol":null==r&&(r={paths:[[[0,0],[10,0]]]}),e.drawSymbol(t,r);break;case"CIMPolygonSymbol":null==r&&(r={rings:[[[0,0],[0,10],[10,10],[10,0],[0,0]]]}),e.drawSymbol(t,r);break;case"CIMTextSymbol":{const r={x:0,y:0};e.drawSymbol(t,r);break}case"CIMVectorMarker":{const r=new y.Placement;e.drawMarker(t,r);break}}return e.envelope()}function F(e){if(!e)return 0;switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAtExtremities":case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementAtRatioPositions":case"CIMMarkerPlacementOnLine":case"CIMMarkerPlacementOnVertices":return Math.abs(e.offset);default:return 0}}function E(e){if(!e)return 0;switch(e.type){case"CIMGeometricEffectArrow":return Math.abs(.5*e.width);case"CIMGeometricEffectBuffer":return Math.abs(e.size);case"CIMGeometricEffectExtension":case"CIMGeometricEffectRadial":return Math.abs(e.length);case"CIMGeometricEffectJog":return Math.abs(.5*e.length);case"CIMGeometricEffectMove":return Math.max(Math.abs(h.getValue(e.offsetX)),Math.abs(h.getValue(e.offsetY)));case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":return Math.abs(e.offset);case"CIMGeometricEffectRegularPolygon":return Math.abs(e.radius);case"CIMGeometricEffectRotate":case"CIMGeometricEffectScale":default:return 0;case"CIMGeometricEffectTaperedPolygon":return.5*Math.max(Math.abs(e.fromWidth),Math.abs(e.toWidth));case"CIMGeometricEffectWave":return Math.abs(e.amplitude)}}function D(e){if(!e)return 0;let t=0;for(const r of e)t+=E(r);return t}let G=function(){function e(){}var t=e.prototype;return t.getSymbolInflateSize=function(e,t,r,i,o){return e||(e=[0,0,0,0]),t?this._getInflateSize(e,t,r,i,o):e},e.safeSize=function(e){const t=Math.max(Math.abs(e[0]),Math.abs(e[2])),r=Math.max(Math.abs(e[1]),Math.abs(e[3]));return Math.sqrt(t*t+r*r)},t._vectorMarkerBounds=function(e,t,r,i){let o=!0;const a=c.create();if(t&&t.markerGraphics)for(const n of t.markerGraphics){const t=[0,0,0,0];n.geometry&&(f.getBoundsXY(a,n.geometry),t[0]=0,t[1]=0,t[2]=0,t[3]=0,this.getSymbolInflateSize(t,n.symbol,r,0,i),a[0]+=t[0],a[1]+=t[1],a[2]+=t[2],a[3]+=t[3],o?(e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],o=!1):(e[0]=Math.min(e[0],a[0]),e[1]=Math.min(e[1],a[1]),e[2]=Math.max(e[2],a[2]),e[3]=Math.max(e[3],a[3])))}return e},t._getInflateSize=function(e,t,r,i,o){if(j(t)){const a=this._getLayersInflateSize(e,t.symbolLayers,r,i,o),n=D(t.effects);return n>0&&(a[0]-=n,a[1]-=n,a[2]+=n,a[3]+=n),a}return this._getTextInflatedSize(e,t,o)},t._getLayersInflateSize=function(e,t,r,i,o){let a=!0;if(!t)return e;for(const s of t){if(!s)continue;let t=[0,0,0,0];switch(s.type){case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=s;let r=e.width;null!=r&&(e.capStyle===p.LineCapStyle.Square||e.joinStyle===p.LineJoinStyle.Miter?r/=1.4142135623730951:r/=2,t[0]=-r,t[1]=-r,t[2]=r,t[3]=r);break}case"CIMCharacterMarker":case"CIMVectorMarker":case"CIMPictureMarker":{const e=s;if("CIMVectorMarker"===s.type){const e=s;if(t=this._vectorMarkerBounds(t,e,r,o),e.frame){const r=(e.frame.xmin+e.frame.xmax)/2,i=(e.frame.ymin+e.frame.ymax)/2;if(t[0]-=r,t[1]-=i,t[2]-=r,t[3]-=i,null!=e.size){const r=e.size/(e.frame.ymax-e.frame.ymin);t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r}}}else if("CIMPictureMarker"===s.type){const i=s,o=r.getResource(i.url);let a=1;if(n.isSome(o)&&o.height&&(a=o.width/o.height),null!=e.size){const r=e.size/2,o=e.size*a*i.scaleX/2;t=[-o,-r,o,r]}}else if(null!=e.size){const r=e.size/2;t=[-r,-r,r,r]}if(e.anchorPoint){let r,i;"Absolute"===e.anchorPointUnits?(r=e.anchorPoint.x,i=e.anchorPoint.y):(r=e.anchorPoint.x*(t[2]-t[0]),i=e.anchorPoint.y*(t[3]-t[1])),t[0]-=r,t[1]-=i,t[2]-=r,t[3]-=i}let a=h.getValue(e.rotation);if(e.rotateClockwise&&(a=-a),i&&(a-=i),a){const e=L*a,r=Math.cos(e),i=Math.sin(e),o=c.create([d.C_INFINITY,d.C_INFINITY,-d.C_INFINITY,-d.C_INFINITY]);c.expandPointInPlace(o,[t[0]*r-t[1]*i,t[0]*i+t[1]*r]),c.expandPointInPlace(o,[t[0]*r-t[3]*i,t[0]*i+t[3]*r]),c.expandPointInPlace(o,[t[2]*r-t[1]*i,t[2]*i+t[1]*r]),c.expandPointInPlace(o,[t[2]*r-t[3]*i,t[2]*i+t[3]*r]),t=o}let l=h.getValue(e.offsetX),f=h.getValue(e.offsetY);if(i){const e=L*i,t=Math.cos(e),r=Math.sin(e),o=l*r+f*t;l=l*t-f*r,f=o}t[0]+=l,t[1]+=f,t[2]+=l,t[3]+=f;const m=F(e.markerPlacement);m>0&&(t[0]-=m,t[1]-=m,t[2]+=m,t[3]+=m);break}}const l=D(s.effects);l>0&&(t[0]-=l,t[1]-=l,t[2]+=l,t[3]+=l),a?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],a=!1):(e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[2]),e[3]=Math.max(e[3],t[3]))}return e},t._getTextInflatedSize=function(e,t,r){const o=t.height??x;if(e[0]=-o/2,e[1]=-o/2,e[2]=o/2,e[3]=o/2,!r)return e;const a=r.get(t);if(!a)return e;const{text:n,mosaicItem:s}=a;if(!s?.glyphMosaicItems?.length)return e;const{lineGapType:l,lineGap:c}=t,f=l?u.lineGapType2LineHeight(l,c??0,o):0,m=i.bidiText(n)[1],y=s.glyphMosaicItems,p="CIMBackgroundCallout"===t.callout?.type,M=g.shapeGlyphs(y,m,{scale:o/S.GLYPH_SIZE,angle:h.getValue(t.angle),xOffset:h.getValue(t.offsetX),yOffset:h.getValue(t.offsetY),hAlign:u.horizontalAlignment2HAlign(t.horizontalAlignment),vAlign:u.verticalAlignment2VAlign(t.verticalAlignment),maxLineWidth:512,lineHeight:S.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(f||1,4)),decoration:t.font.decoration||"none",isCIM:!0,hasBackground:p}).boundsT;return e[0]=M.x-M.halfWidth,e[1]=-M.y-M.halfHeight,e[2]=M.x+M.halfWidth,e[3]=-M.y+M.halfHeight,e},e}(),V=function(){function e(){}return e.getEnvelope=function(e,t,r){if(!e)return null;const i=new u.EnvDrawHelper(r);if(Array.isArray(e)){let r;for(const o of e)r?r.union(T(i,o,t)):r=T(i,o,t);return r}return T(i,e,t)},e.getTextureAnchor=function(e,t){const r=this.getEnvelope(e,null,t);if(!r)return[0,0,0];const i=(r.x+.5*r.width)*P,o=(r.y+.5*r.height)*P,a=r.width*P+2,n=r.height*P+2;return[-i/a,-o/n,n]},e.rasterize=function(e,t,r,i,o=!0){const a=r||this.getEnvelope(t,null,i);if(!a)return[null,0,0,0,0];const n=(a.x+.5*a.width)*P,s=(a.y+.5*a.height)*P;e.width=a.width*P,e.height=a.height*P,r||(e.width+=2,e.height+=2);const l=e.getContext("2d"),c=u.Transformation.createScale(P,-P);c.translate(.5*e.width-n,.5*e.height+s);const f=new u.CanvasDrawHelper(l,i,c);switch(t.type){case"CIMPointSymbol":{const e={type:"point",x:0,y:0};f.drawSymbol(t,e);break}case"CIMVectorMarker":{const e=new y.Placement;f.drawMarker(t,e);break}}const m=l.getImageData(0,0,e.width,e.height),p=new Uint8Array(m.data);if(o){let e;for(let t=0;t<p.length;t+=4)e=p[t+3]/255,p[t]=p[t]*e,p[t+1]=p[t+1]*e,p[t+2]=p[t+2]*e}return[p,e.width,e.height,-n/e.width,-s/e.height]},e.fromTextSymbol=function(e){const{angle:t,color:r,font:o,haloColor:a,haloSize:n,horizontalAlignment:s,kerning:l,text:c,verticalAlignment:f,xoffset:m,yoffset:y,backgroundColor:u,borderLineColor:M,borderLineSize:d}=e;let S,g,b,C,I,k;o&&(S=o.family,g=o.style,b=o.weight,C=o.size,I=o.decoration);let x=!1;if(c){x=i.bidiText(c)[1]}return(u||d)&&(k={type:"CIMBackgroundCallout",margin:null,backgroundSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",color:_(u)},{type:"CIMSolidStroke",color:_(M),width:d}]},accentBarSymbol:null,gap:null,leaderLineSymbol:null,lineStyle:null}),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:10,billboardMode3D:"FaceNearPlane",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMTextSymbol",angle:t,blockProgression:p.BlockProgression.BTT,depth3D:1,extrapolateBaselines:!0,fontEffects:p.FontEffects.Normal,fontEncoding:p.FontEncoding.Unicode,fontFamilyName:S||"Arial",fontStyleName:B(g,b),fontType:p.FontType.Unspecified,haloSize:n,height:C,hinting:p.GlyphHinting.Default,horizontalAlignment:A(s??"center"),kerning:l,letterWidth:100,ligatures:!0,lineGapType:"Multiple",offsetX:h.getValue(m),offsetY:h.getValue(y),strikethrough:"line-through"===I,underline:"underline"===I,symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:_(r)}]},haloSymbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:_(a)}]},shadowColor:[0,0,0,255],shadowOffsetX:1,shadowOffsetY:1,textCase:"Normal",textDirection:x?p.TextReadingDirection.RTL:p.TextReadingDirection.LTR,verticalAlignment:R(f??"baseline"),verticalGlyphOrientation:p.VerticalGlyphOrientation.Right,wordSpacing:100,billboardMode3D:p.BillBoardMode.FaceNearPlane,callout:k},textString:c}],scaleSymbolsProportionally:!0,respectFrame:!0}],scaleX:1,angleAlignment:"Display"}},e.fromPictureFillSymbol=function(e){const{height:t,outline:r,width:i,xoffset:o,xscale:a,yoffset:n,yscale:s}=e,l=[],c={type:"CIMPolygonSymbol",symbolLayers:l};if(r){const{cap:e,join:t,miterLimit:i,width:o}=r;l.push({type:"CIMSolidStroke",color:_(r.color),capStyle:N(e),joinStyle:O(t),miterLimit:i,width:o})}let f=e.url;"esriPFS"===e.type&&e.imageData&&(f=e.imageData);const m="angle"in e?e.angle??0:0,y=(i??0)*(a||1),u=(t??0)*(s||1);return l.push({type:"CIMPictureFill",invertBackfaceTexture:!1,scaleX:1,textureFilter:p.TextureFilter.Picture,tintColor:null,url:f,height:u,width:y,offsetX:h.getValue(o),offsetY:h.getValue(n),rotation:h.getValue(-m),colorSubstitutions:null}),c},e.fromSimpleFillSymbol=function(e){const{color:t,style:r,outline:i}=e,a=[],n={type:"CIMPolygonSymbol",symbolLayers:a};let s=null;if(i){const{cap:e,join:t,style:r}=i;"solid"!==r&&"none"!==r&&"esriSLSSolid"!==r&&"esriSLSNull"!==r&&(s=[{type:"CIMGeometricEffectDashes",dashTemplate:X(r,e),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]),a.push({type:"CIMSolidStroke",color:_(i.color),capStyle:N(e),joinStyle:O(t),miterLimit:i.miterLimit,width:i.width,effects:s})}if(r&&"solid"!==r&&"none"!==r&&"esriSFSSolid"!==r&&"esriSFSNull"!==r){const e={type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",color:_(t),capStyle:p.LineCapStyle.Butt,joinStyle:p.LineJoinStyle.Miter,width:.75}]};let i=0;const n=l.px2pt($(r)?8:10);switch(r){case"vertical":case"esriSFSVertical":i=90;break;case"forward-diagonal":case"esriSFSForwardDiagonal":case"diagonal-cross":case"esriSFSDiagonalCross":i=-45;break;case"backward-diagonal":case"esriSFSBackwardDiagonal":i=45;break;case"cross":case"esriSFSCross":i=0}a.push({type:"CIMHatchFill",lineSymbol:e,offsetX:0,offsetY:0,rotation:i,separation:n}),"cross"===r||"esriSFSCross"===r?a.push({type:"CIMHatchFill",lineSymbol:o.clone(e),offsetX:0,offsetY:0,rotation:90,separation:n}):"diagonal-cross"!==r&&"esriSFSDiagonalCross"!==r||a.push({type:"CIMHatchFill",lineSymbol:o.clone(e),offsetX:0,offsetY:0,rotation:45,separation:n})}else!r||"solid"!==r&&"esriSFSSolid"!==r||a.push({type:"CIMSolidFill",enable:!0,color:_(t)});return n},e.fromSimpleLineSymbol=function(t){const{cap:r,color:i,join:o,marker:a,miterLimit:n,style:s,width:l}=t;let c=null;"solid"!==s&&"none"!==s&&"esriSLSSolid"!==s&&"esriSLSNull"!==s&&(c=[{type:"CIMGeometricEffectDashes",dashTemplate:X(s,r),lineDashEnding:"NoConstraint",scaleDash:!0,offsetAlongLine:null}]);const f=[];if(a){let t;switch(a.placement){case"begin-end":t=p.ExtremityPlacement.Both;break;case"begin":t=p.ExtremityPlacement.JustBegin;break;case"end":t=p.ExtremityPlacement.JustEnd;break;default:t=p.ExtremityPlacement.None}const r=e.fromSimpleMarker(a,l,i).symbolLayers[0];r.markerPlacement={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:t,offsetAlongLine:0},f.push(r)}return"none"!==s&&"esriSLSNull"!==s&&f.push({type:"CIMSolidStroke",color:_(i),capStyle:N(r),joinStyle:O(o),miterLimit:n,width:l,effects:c}),{type:"CIMLineSymbol",symbolLayers:f}},e.fromPictureMarker=function(e){const{angle:t,height:r,width:i,xoffset:o,yoffset:a}=e;let n=e.url;return"esriPMS"===e.type&&e.imageData&&(n=e.imageData),{type:"CIMPointSymbol",symbolLayers:[{type:"CIMPictureMarker",invertBackfaceTexture:!1,scaleX:1,textureFilter:p.TextureFilter.Picture,tintColor:null,url:n,size:r,width:i,offsetX:h.getValue(o),offsetY:h.getValue(a),rotation:h.getValue(-t)}]}},e.fromSimpleMarker=function(e,t,r){const{style:i}=e,o=e.color??r;if("path"===i){const t=[];if("outline"in e&&e.outline){const r=e.outline;t.push({type:"CIMSolidStroke",enable:!0,width:l.pt2px(Math.round(l.px2pt(r.width))),color:_(r.color)})}t.push({type:"CIMSolidFill",enable:!0,color:_(o),path:e.path});const[r,i]=U("square");return{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:h.getValue(-e.angle),size:h.getValue(e.size||6),offsetX:h.getValue(e.xoffset),offsetY:h.getValue(e.yoffset),frame:r,markerGraphics:[{type:"CIMMarkerGraphic",geometry:i,symbol:{type:"CIMPolygonSymbol",symbolLayers:t}}]}]}}const[a,n]=U(i);let s;if(n&&a){const r=[];if("outline"in e&&e.outline){const t=e.outline;r.push({type:"CIMSolidStroke",enable:!0,width:null!=t.width&&t.width>.667?l.pt2px(Math.round(l.px2pt(t.width))):t.width,color:_(t.color)})}else!t||"line-marker"!==e.type||"cross"!==e.style&&"x"!==e.style||r.push({type:"CIMSolidStroke",enable:!0,width:t,color:_(o)});r.push({type:"CIMSolidFill",enable:!0,color:_(o)});const i={type:"CIMPolygonSymbol",symbolLayers:r};s={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:h.getValue(-e.angle),size:h.getValue(e.size||6*t),offsetX:h.getValue(e.xoffset),offsetY:h.getValue(e.yoffset),frame:a,markerGraphics:[{type:"CIMMarkerGraphic",geometry:n,symbol:i}]}]}}return s},e.fromCIMHatchFill=function(e,t){const r=t*(e.separation??I),i=r/2,a=o.clone(e.lineSymbol);a.symbolLayers?.forEach((e=>{switch(e.type){case"CIMSolidStroke":null!=e.width&&(e.width*=t),e.effects?.forEach((e=>{"CIMGeometricEffectDashes"===e.type&&(e.dashTemplate=e.dashTemplate.map((e=>e*t)))}));break;case"CIMVectorMarker":{null!=e.size&&(e.size*=t);const r=e.markerPlacement;null!=r&&"placementTemplate"in r&&(r.placementTemplate=r.placementTemplate.map((e=>e*t)));break}}}));let n=this._getLineSymbolPeriod(a)||k;for(;n<k;)n*=2;const s=n/2;return{type:"CIMVectorMarker",frame:{xmin:-s,xmax:s,ymin:-i,ymax:i},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-s,0],[s,0]]]},symbol:a}],size:r}},e.fetchResources=function(t,r,i){if(t&&r)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=t.symbolLayers;if(!o)return;for(const t of o)switch(J(t,r,i),t.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in t&&t.url&&i.push(r.fetchResource(t.url,null));break;case"CIMVectorMarker":{const o=t.markerGraphics;if(!o)continue;for(const t of o)if(t){const o=t.symbol;o&&e.fetchResources(o,r,i)}}}}}},e._getLineSymbolPeriod=function(e){if(e){const t=this._getEffectsRepeat(e.effects);if(t)return t;if(e.symbolLayers)for(const r of e.symbolLayers)if(r){const e=this._getEffectsRepeat(r.effects);if(e)return e;switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=this._getPlacementRepeat(r.markerPlacement);if(e)return e}}}}return 0},e._getEffectsRepeat=function(e){if(e)for(const t of e)if(t)switch(t.type){case"CIMGeometricEffectDashes":{const e=t.dashTemplate;if(e&&e.length){let t=0;for(const r of e)t+=r;return 1&e.length&&(t*=2),t}break}case"CIMGeometricEffectWave":return t.period;default:w.error(`unsupported geometric effect type ${t.type}`)}return 0},e._getPlacementRepeat=function(e){if(e)switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const t=e.placementTemplate;if(t&&t.length){let e=0;for(const r of t)e+=+r;return 1&t.length&&(e*=2),e}break}}return 0},e.fromCIMInsidePolygon=function(e){const t=e.markerPlacement,r={...e};r.markerPlacement=null,r.anchorPoint=null;const i=Math.abs(t.stepX),o=Math.abs(t.stepY),a=(t.randomness??100)/100;let n,c,f,m;if("Random"===t.gridType){const e=l.px2pt(S.RANDOM_INSIDE_POLYGON_TEXTURE_SIZE),r=Math.max(Math.floor(e/i),1),y=Math.max(Math.floor(e/o),1);n=r*i/2,c=y*o/2,f=2*c;const u=new s(t.seed),p=a*i/1.5,h=a*o/1.5;m=[];for(let t=0;t<r;t++)for(let e=0;e<y;e++){const r=t*i-n+p*(.5-u.getFloat()),a=e*o-c+h*(.5-u.getFloat());m.push({x:r,y:a}),0===t&&m.push({x:r+2*n,y:a}),0===e&&m.push({x:r,y:a+2*c})}}else!0===t.shiftOddRows?(n=i/2,c=o,f=2*o,m=[{x:-n,y:0},{x:n,y:0},{x:0,y:c},{x:0,y:-c}]):(n=i/2,c=o/2,f=o,m=[{x:-i,y:0},{x:0,y:-o},{x:-i,y:-o},{x:0,y:0},{x:i,y:0},{x:0,y:o},{x:i,y:o},{x:-i,y:o},{x:i,y:-o}]);return{type:"CIMVectorMarker",frame:{xmin:-n,xmax:n,ymin:-c,ymax:c},markerGraphics:m.map((e=>({type:"CIMMarkerGraphic",geometry:e,symbol:{type:"CIMPointSymbol",symbolLayers:[r]}}))),size:f}},e.getSize=function(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers)for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=r.size;null!=e&&e>t&&(t=e);break}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers)for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=r.width;null!=e&&e>t&&(t=e);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(r.markerPlacement&&h.isCIMMarkerStrokePlacement(r.markerPlacement)){const e=r.size;null!=e&&e>t&&(t=e)}}return t}}},e.getMarkerScaleRatio=function(e){if(e&&"CIMVectorMarker"===e.type)if(!1!==e.scaleSymbolsProportionally&&e.frame&&null!=e.size){const t=e.frame.ymax-e.frame.ymin;return e.size/t}return 1},e}(),z=function(){function e(){}return e.findApplicableOverrides=function(t,r,i){if(t&&r){if(t.primitiveName){let e=!1;for(const r of i)if(r.primitiveName===t.primitiveName){e=!0;break}if(!e)for(const o of r)o.primitiveName===t.primitiveName&&i.push(o)}switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.effects)for(const o of t.effects)e.findApplicableOverrides(o,r,i);if(t.symbolLayers)for(const o of t.symbolLayers)e.findApplicableOverrides(o,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(t.effects)for(const o of t.effects)e.findApplicableOverrides(o,r,i);if(t.markerPlacement&&e.findApplicableOverrides(t.markerPlacement,r,i),"CIMVectorMarker"===t.type){if(t.markerGraphics)for(const o of t.markerGraphics)e.findApplicableOverrides(o,r,i),e.findApplicableOverrides(o.symbol,r,i)}else"CIMCharacterMarker"===t.type?e.findApplicableOverrides(t.symbol,r,i):"CIMHatchFill"===t.type?e.findApplicableOverrides(t.lineSymbol,r,i):"CIMPictureMarker"===t.type&&e.findApplicableOverrides(t.animatedSymbolProperties,r,i)}}},e.findEffectOverrides=function(e,t,r){if(!t||!e)return;const i=e.length;for(let o=0;o<i;o++){const i=e[o]?.primitiveName;if(i){let e=!1;for(const t of r)if(t.primitiveName===i){e=!0;break}if(!e)for(const o of t)o.primitiveName===i&&r.push(o)}}},e.resolveSymbolOverrides=function(){var r=t._asyncToGenerator((function*(t,r,i,a,n,s,l){if(!t||!t.symbol)return null;let{symbol:c,primitiveOverrides:f}=t;const m=!!f;if(!m&&!a)return c;c=o.clone(c);let y=!0;if(r||(r={attributes:{}},y=!1),m){if(y||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),l||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),f.length>0){const t=h.attributesToFields(r.attributes);yield e.evaluateOverrides(f,r,{spatialReference:i,fields:t,geometryType:n},s,l)}e.applyOverrides(c,f)}return a&&e.applyDictionaryTextOverrides(c,r,a),c}));function i(e,t,i,o,a,n,s){return r.apply(this,arguments)}return i}(),e.evaluateOverrides=function(){var e=t._asyncToGenerator((function*(e,t,r,i,o){if(!t)return;let a;for(const n of e){const e=n.valueExpressionInfo;if(e&&r&&r.geometryType){a||(a=[]),n.value=void 0;const s=m.createRendererExpression(e.expression,r.spatialReference,r.fields).then((e=>{n.value=M(e,t,{$view:o},r.geometryType,i)}));a.push(s)}}void 0!==a&&a.length>0&&(yield Promise.all(a))}));function r(t,r,i,o,a){return e.apply(this,arguments)}return r}(),e.applyDictionaryTextOverrides=function(t,r,i,o="Normal"){if(t&&t.type)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const a=t.symbolLayers;if(!a)return;for(const n of a)n&&"CIMVectorMarker"===n.type&&e.applyDictionaryTextOverrides(n,r,i,"CIMTextSymbol"===t.type?t.textCase:o)}break;case"CIMVectorMarker":{const o=t.markerGraphics;if(!o)return;for(const t of o)t&&e.applyDictionaryTextOverrides(t,r,i)}break;case"CIMMarkerGraphic":{const e=t.textString;if(e&&e.includes("[")){const a=h.analyzeTextParts(e,i);t.textString=h.assignTextValuesFromFeature(r,a,o)}}}},e.applyOverrides=function(t,r,i,o){if(t.primitiveName)for(const a of r)if(a.primitiveName===t.primitiveName){const r=q(a.propertyName);if(o&&o.push({cim:t,nocapPropertyName:r,value:t[r]}),a.expression&&(a.value=e.toValue(a.propertyName,a.expression)),i){let e=!1;for(const r of i)r.primitiveName===t.primitiveName&&(e=!0);e||i.push(a)}n.isSome(a.value)&&(t[r]=a.value)}switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.effects)for(const a of t.effects)e.applyOverrides(a,r,i,o);if(t.symbolLayers)for(const a of t.symbolLayers)e.applyOverrides(a,r,i,o);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(t.effects)for(const a of t.effects)e.applyOverrides(a,r,i,o);if("CIMVectorMarker"===t.type&&t.markerGraphics)for(const a of t.markerGraphics)e.applyOverrides(a,r,i,o),e.applyOverrides(a.symbol,r,i,o)}},e.restoreOverrides=function(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value},e.buildOverrideKey=function(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t},e.toValue=function(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r(t).toRgba();return e[3]*=255,e}return t},e}();const N=e=>{if(!e)return p.LineCapStyle.Butt;switch(e){case"butt":return p.LineCapStyle.Butt;case"square":return p.LineCapStyle.Square;case"round":return p.LineCapStyle.Round}},O=e=>{if(!e)return p.LineJoinStyle.Miter;switch(e){case"miter":return p.LineJoinStyle.Miter;case"round":return p.LineJoinStyle.Round;case"bevel":return p.LineJoinStyle.Bevel}},A=e=>{if(n.isNone(e))return"Center";switch(e){case"left":return"Left";case"right":return"Right";case"center":return"Center"}},R=e=>{if(n.isNone(e))return"Center";switch(e){case"baseline":return"Baseline";case"top":return"Top";case"middle":return"Center";case"bottom":return"Bottom"}},_=e=>{if(!e)return[0,0,0,0];const{r:t,g:r,b:i,a:o}=e;return[t,r,i,255*o]},B=(e,t)=>{const r=H(t),i=Y(e);return r&&i?`${r}-${i}`:`${r}${i}`},H=e=>{if(!e)return"";switch(e.toLowerCase()){case"bold":case"bolder":return"bold"}return""},Y=e=>{if(!e)return"";switch(e.toLowerCase()){case"italic":case"oblique":return"italic"}return""},X=(e,t)=>{const r="butt"===t;switch(e){case"dash":case"esriSLSDash":return r?[4,3]:[3,4];case"dash-dot":case"esriSLSDashDot":return r?[4,3,1,3]:[3,4,0,4];case"dot":case"esriSLSDot":return r?[1,3]:[0,4];case"long-dash":case"esriSLSLongDash":return r?[8,3]:[7,4];case"long-dash-dot":case"esriSLSLongDashDot":return r?[8,3,1,3]:[7,4,0,4];case"long-dash-dot-dot":case"esriSLSDashDotDot":return r?[8,3,1,3,1,3]:[7,4,0,4,0,4];case"short-dash":case"esriSLSShortDash":return r?[4,1]:[3,2];case"short-dash-dot":case"esriSLSShortDashDot":return r?[4,1,1,1]:[3,2,0,2];case"short-dash-dot-dot":case"esriSLSShortDashDotDot":return r?[4,1,1,1,1,1]:[3,2,0,2,0,2];case"short-dot":case"esriSLSShortDot":return r?[1,1]:[0,2];case"solid":case"esriSLSSolid":case"none":return w.error("Unexpected: style does not require rasterization"),[0,0];default:return w.error(`Tried to rasterize SLS, but found an unexpected style: ${e}!`),[0,0]}};function j(e){return void 0!==e.symbolLayers}const U=e=>{const t=100,r=50;let i,o;const a=e;if("circle"===a||"esriSMSCircle"===a){const e=.25;let t=Math.acos(1-e/r),a=Math.ceil(b/t/4);0===a&&(a=1),t=C/a,a*=4;const n=[];n.push([r,0]);for(let i=1;i<a;i++)n.push([r*Math.cos(i*t),-r*Math.sin(i*t)]);n.push([r,0]),i={rings:[n]},o={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("cross"===a||"esriSMSCross"===a){const e=0;i={rings:[[[e,r],[e,e],[r,e],[r,-e],[e,-e],[e,-r],[-e,-r],[-e,-e],[-r,-e],[-r,e],[-e,e],[-e,r],[e,r]]]},o={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("diamond"===a||"esriSMSDiamond"===a)i={rings:[[[-r,0],[0,r],[r,0],[0,-r],[-r,0]]]},o={xmin:-r,ymin:-r,xmax:r,ymax:r};else if("square"===a||"esriSMSSquare"===a)i={rings:[[[-r,-r],[-r,r],[r,r],[r,-r],[-r,-r]]]},o={xmin:-r,ymin:-r,xmax:r,ymax:r};else if("x"===a||"esriSMSX"===a){const e=0;i={rings:[[[0,e],[r-e,r],[r,r-e],[e,0],[r,e-r],[r-e,-r],[0,-e],[e-r,-r],[-r,e-r],[-e,0],[-r,r-e],[e-r,r],[0,e]]]},o={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("triangle"===a||"esriSMSTriangle"===a){const e=t*.5773502691896257,r=-e,a=2/3*t,n=a-t;i={rings:[[[r,n],[0,a],[e,n],[r,n]]]},o={xmin:r,ymin:n,xmax:e,ymax:a}}else"arrow"===a&&(i={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},o={xmin:-r,ymin:-r,xmax:r,ymax:r});return[o,i]},$=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e,q=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;function J(e,t,r){if(!e.effects||n.isSome(t.geometryEngine))return;if(t.geometryEnginePromise)return void r.push(t.geometryEnginePromise);h.isGeometryEngineRequired(e.effects)&&(t.geometryEnginePromise=h.importGeometryEngine(),r.push(t.geometryEnginePromise),t.geometryEnginePromise.then((e=>t.geometryEngine=e)))}e.CIMSymbolHelper=V,e.CIMSymbolInflatedSizeHelper=G,e.OverrideHelper=z,e.slsDashToTemplateArray=X,e.symbolToCIM=v,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
