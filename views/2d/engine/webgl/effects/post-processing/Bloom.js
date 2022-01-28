/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../webgl/BufferObject","../../../../../webgl/FramebufferObject","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/has","../../../../../webgl/checkWebGLError","../../../../../webgl/enums","../../../../../../chunks/builtins","../../../../../webgl/Texture","../../../../../webgl/VertexArrayObject","../../VertexStream"],(function(t,e,i,s,r,o,n,a,l,u,h){"use strict";const p=5,c=[1,0],m=[0,1],d=[1,.8,.6,.4,.2],_=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];let f=function(){function t(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(p),this._nMips=p,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}var e=t.prototype;return e.dispose=function(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}},e.draw=function(t,e,i){const{width:s,height:r}=e,{context:o,painter:n}=t,{materialManager:a}=n,l=o.gl,u=this._programDesc,{strength:f,radius:g,threshold:b}=i;this._quad||(this._quad=new h(o,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,s,r),o.setStencilTestEnabled(!1),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilWriteMask(0);const F=this._quad;F.bind(),o.bindFramebuffer(this._intensityFBO);const B=a.getProgram(t,u.luminosityHighPass);o.useProgram(B),o.bindTexture(e.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",b),B.setUniform1f("u_smoothWidth",.01);const O=[Math.round(s/2),Math.round(r/2)];o.setViewport(0,0,O[0],O[1]),o.setClearColor(0,0,0,0),o.clear(l.COLOR_BUFFER_BIT),F.draw(),o.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let h=0;h<this._nMips;h++){const e=a.getProgram(t,u.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[h]}]);o.useProgram(e),o.bindTexture(T,h+1),e.setUniform1i("u_colorTexture",h+1),e.setUniform2fv("u_texSize",O),e.setUniform2fv("u_direction",c),o.setViewport(0,0,O[0],O[1]);const i=this._mipsFBOs[h];o.bindFramebuffer(i.horizontal),F.draw(),T=i.horizontal.colorTexture,o.bindFramebuffer(i.vertical),o.bindTexture(T,h+1),e.setUniform2fv("u_direction",m),F.draw(),T=i.vertical.colorTexture,O[0]=Math.round(O[0]/2),O[1]=Math.round(O[1]/2)}o.setViewport(0,0,s,r);const x=a.getProgram(t,u.composite,[{name:"nummips",value:p}]);o.bindFramebuffer(this._compositeFBO),o.useProgram(x),x.setUniform1f("u_bloomStrength",f),x.setUniform1f("u_bloomRadius",g),x.setUniform1fv("u_bloomFactors",d),x.setUniform3fv("u_bloomTintColors",_),o.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),o.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),o.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),o.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),o.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),F.draw(),o.bindFramebuffer(e),o.setBlendingEnabled(!0);const w=a.getProgram(t,u.blit);o.useProgram(w),o.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),o.setBlendFunction(1,1),F.draw(),F.unbind(),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0)},e._createOrResizeResources=function(t,e,s){const{context:r}=t;if(this._compositeFBO&&this._size[0]===e&&this._size[1]===s)return;this._size[0]=e,this._size[1]=s;const o=[Math.round(e/2),Math.round(s/2)];this._compositeFBO?this._compositeFBO.resize(e,s):this._compositeFBO=new i(r,{colorTarget:0,depthStencilTarget:0,width:e,height:s}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new i(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new i(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new i(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)},t}();t.Bloom=f,Object.defineProperty(t,"__esModule",{value:!0})}));
