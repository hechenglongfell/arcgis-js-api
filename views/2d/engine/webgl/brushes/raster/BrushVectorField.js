/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/maybe","../WGLBrush"],(function(e,t,a){"use strict";const r=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),n={beaufort_ft:r,beaufort_m:r,beaufort_km:r,beaufort_mi:r,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])};let o=function(a){function r(){var e;return(e=a.apply(this,arguments)||this)._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}},e}e._inheritsLoose(r,a);var o=r.prototype;return o.dispose=function(){},o.prepareState=function({context:e},t){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(7680,7680,7681),e.setStencilFunction(514,t.stencilRef,255)},o.draw=function(e,a){if(t.isNone(a.source)||0===a.source.validPixelCount)return;const{timeline:r}=e;if(r.begin(this.name),a.updateVectorFieldVAO(e),"scalar"===e.renderPass){const t=a.vaoData.scalar;t&&this._drawScalars(e,a,t.vao,t.elementCount)}else{const t=a.vaoData.magdir;t&&this._drawTriangles(e,a,t.vao,t.elementCount)}r.end(this.name)},o._drawTriangles=function(e,t,a,r){const{context:o,painter:s}=e,{symbolizerParameters:i}=t,c=i.dataRange?["dataRange"]:[];"geographic"===i.rotationType&&c.push("rotationGeographic");const l=s.materialManager.getProgram(e,this._desc.magdir,c);o.useProgram(l);const{coordScale:f,opacity:u,transforms:m}=t;l.setUniform2fv("u_coordScale",f),l.setUniform1f("u_opacity",u),l.setUniformMatrix3fv("u_dvsMat3",m.dvs);const{style:d,dataRange:_,rotation:g,symbolPercentRange:p}=i;l.setUniform4fv("u_colors",n[d]||n.single_arrow),l.setUniform2fv("u_dataRange",_),l.setUniform1f("u_rotation",g),l.setUniform2fv("u_symbolPercentRange",p);const y=this._getSymbolSize(e,t);l.setUniform2fv("u_symbolSize",y),o.bindVAO(a),o.drawElements(4,r,5125,0)},o._drawScalars=function(e,t,a,r){const{context:n,painter:o}=e,{symbolizerParameters:s}=t,i=[];"wind_speed"===s.style?i.push("innerCircle"):s.dataRange&&i.push("dataRange"),"geographic"===s.rotationType&&i.push("rotationGeographic");const c=o.materialManager.getProgram(e,this._desc.scalar,i);n.useProgram(c);const{coordScale:l,opacity:f,transforms:u}=t;c.setUniform2fv("u_coordScale",l),c.setUniform1f("u_opacity",f),c.setUniformMatrix3fv("u_dvsMat3",u.dvs);const{dataRange:m,symbolPercentRange:d}=s;c.setUniform2fv("u_dataRange",m),c.setUniform2fv("u_symbolPercentRange",d);const _=this._getSymbolSize(e,t);c.setUniform2fv("u_symbolSize",_),n.bindVAO(a),n.drawElements(4,r,5125,0)},o._getSymbolSize=function(e,t){const a=2**(e.displayLevel-t.key.level),{symbolTileSize:r}=t.symbolizerParameters;return[r/(Math.round((t.width-t.offset[0])/r)*r)/a,r/(Math.round((t.height-t.offset[1])/r)*r)/a]},r}(a);return o}));
