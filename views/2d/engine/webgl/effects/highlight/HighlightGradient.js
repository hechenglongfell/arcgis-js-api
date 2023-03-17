/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../../core/Logger","../../definitions","./parameters","../../../../../webgl/enums","../../../../../webgl/Texture"],(function(o,i,t,e,l){"use strict";const n=o.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function r(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=t.HIGHLIGHT_SIZING.outlineWidth,i.outerHaloWidth=t.HIGHLIGHT_SIZING.outerHaloWidth,i.innerHaloWidth=t.HIGHLIGHT_SIZING.innerHaloWidth,i.outlinePosition=t.HIGHLIGHT_SIZING.outlinePosition}const h=[0,0,0,0];return function(){function o(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:t.HIGHLIGHT_SIZING.outlinePosition,outlineWidth:t.HIGHLIGHT_SIZING.outlineWidth,innerHaloWidth:t.HIGHLIGHT_SIZING.innerHaloWidth,outerHaloWidth:t.HIGHLIGHT_SIZING.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*t.SHADE_TEXTURE_SIZE),this._minMaxDistance=[0,0]}var a=o.prototype;return a.setHighlightOptions=function(o){const i=this._convertedHighlightOptions;r(o,i);const e=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,l=i.outlinePosition-i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2,s=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,u=Math.sqrt(Math.PI/2)*t.SIGMA,d=Math.abs(e)>u?Math.round(10*(Math.abs(e)-u))/10:0,C=Math.abs(s)>u?Math.round(10*(Math.abs(s)-u))/10:0;let H;d&&!C?n.error("The outer rim of the highlight is "+d+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!d&&C?n.error("The inner rim of the highlight is "+C+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):d&&C&&n.error("The highlight is "+Math.max(d,C)+"px away from the edge of the feature; consider reducing some width values.");const T=[void 0,void 0,void 0,void 0];function g(o,i,t){T[0]=(1-t)*o[0]+t*i[0],T[1]=(1-t)*o[1]+t*i[1],T[2]=(1-t)*o[2]+t*i[2],T[3]=(1-t)*o[3]+t*i[3]}const{_texelData:f}=this;for(let n=0;n<t.SHADE_TEXTURE_SIZE;++n)H=e+n/(t.SHADE_TEXTURE_SIZE-1)*(s-e),H<e?(T[4*n+0]=0,T[4*n+1]=0,T[4*n+2]=0,T[4*n+3]=0):H<l?g(h,i.outlineColor,(H-e)/(l-e)):H<a?[T[0],T[1],T[2],T[3]]=i.outlineColor:H<s?g(i.outlineColor,i.fillColor,(H-a)/(s-a)):[T[4*n+0],T[4*n+1],T[4*n+2],T[4*n+3]]=i.fillColor,f[4*n+0]=255*T[0],f[4*n+1]=255*T[1],f[4*n+2]=255*T[2],f[4*n+3]=255*T[3];this._minMaxDistance[0]=e,this._minMaxDistance[1]=s,this._shadeTexChanged=!0},a.applyHighlightOptions=function(o,n){this._shadeTex||(this._shadeTex=new l.Texture(o,{target:e.TextureType.TEXTURE_2D,pixelFormat:e.PixelFormat.RGBA,dataType:e.PixelType.UNSIGNED_BYTE,wrapMode:e.TextureWrapMode.CLAMP_TO_EDGE,width:t.SHADE_TEXTURE_SIZE,height:1,samplingMode:e.TextureSamplingMode.LINEAR})),this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,t.SHADE_TEXTURE_SIZE,1,this._texelData),this._shadeTexChanged=!1),o.bindTexture(this._shadeTex,i.TEXTURE_BINDING_HIGHLIGHT_1),n.setUniform2fv("u_minMaxDistance",this._minMaxDistance)},a.destroy=function(){this._shadeTex?.dispose(),this._shadeTex=null},o}()}));
