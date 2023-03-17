/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../webgl/brushes/WGLBrush","../../../webgl/enums"],(function(e,t,a,r){"use strict";const n=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),o={beaufort_ft:n,beaufort_m:n,beaufort_km:n,beaufort_mi:n,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])},s=[0,20];let i=function(a){function n(){var e;return(e=a.apply(this,arguments)||this)._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}},e}e._inheritsLoose(n,a);var i=n.prototype;return i.dispose=function(){},i.prepareState=function({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(r.BlendFactor.ONE,r.BlendFactor.ONE_MINUS_SRC_ALPHA,r.BlendFactor.ONE,r.BlendFactor.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(r.StencilOperation.KEEP,r.StencilOperation.KEEP,r.StencilOperation.REPLACE)},i.draw=function(e,a){if(t.isNone(a.source)||0===a.source.validPixelCount)return;const{context:n,timeline:o}=e;if(o.begin(this.name),n.setStencilFunction(r.CompareFunction.EQUAL,a.stencilRef,255),a.updateVectorFieldVAO(e),"scalar"===e.renderPass){const t=a.vaoData.scalar;t&&this._drawScalars(e,a,t.vao,t.elementCount)}else{const t=a.vaoData.magdir;t&&this._drawTriangles(e,a,t.vao,t.elementCount)}o.end(this.name)},i._drawTriangles=function(e,a,n,i){const{context:l,painter:c,requestRender:d,allowDelayedRender:u}=e,{symbolizerParameters:m}=a,f=m.dataRange?["dataRange"]:[];"geographic"===m.rotationType&&f.push("rotationGeographic");const _=c.materialManager.getProgram(this._desc.magdir,f);if(u&&t.isSome(d)&&!_.compiled)return void d();l.useProgram(_);const{coordScale:p,opacity:g,transforms:y}=a;_.setUniform2fv("u_coordScale",p),_.setUniform1f("u_opacity",g),_.setUniformMatrix3fv("u_dvsMat3",y.dvs);const{style:v,dataRange:S,rotation:h,symbolPercentRange:b}=m;_.setUniform4fv("u_colors",o[v]||o.single_arrow),_.setUniform2fv("u_dataRange",S||s),_.setUniform1f("u_rotation",h),_.setUniform2fv("u_symbolPercentRange",b);const w=this._getSymbolSize(e,a);_.setUniform2fv("u_symbolSize",w),l.bindVAO(n),l.drawElements(r.PrimitiveType.TRIANGLES,i,r.DataType.UNSIGNED_INT,0)},i._drawScalars=function(e,a,n,o){const{context:i,painter:l,requestRender:c,allowDelayedRender:d}=e,{symbolizerParameters:u}=a,m=[];"wind_speed"===u.style?m.push("innerCircle"):u.dataRange&&m.push("dataRange"),"geographic"===u.rotationType&&m.push("rotationGeographic");const f=l.materialManager.getProgram(this._desc.scalar,m);if(d&&t.isSome(c)&&!f.compiled)return void c();i.useProgram(f);const{coordScale:_,opacity:p,transforms:g}=a;f.setUniform2fv("u_coordScale",_),f.setUniform1f("u_opacity",p),f.setUniformMatrix3fv("u_dvsMat3",g.dvs);const{dataRange:y,symbolPercentRange:v}=u;f.setUniform2fv("u_dataRange",y||s),f.setUniform2fv("u_symbolPercentRange",v);const S=this._getSymbolSize(e,a);f.setUniform2fv("u_symbolSize",S),i.bindVAO(n),i.drawElements(r.PrimitiveType.TRIANGLES,o,r.DataType.UNSIGNED_INT,0)},i._getSymbolSize=function(e,t){const a=t.key?2**(e.displayLevel-t.key.level):t.resolution/e.state.resolution,{symbolTileSize:r}=t.symbolizerParameters;return[r/(Math.round((t.width-t.offset[0])/r)*r)/a,r/(Math.round((t.height-t.offset[1])/r)*r)/a]},n}(a);return i}));
