/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../webgl/BufferObject","../../../../../webgl/FramebufferObject","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/has","../../../../../webgl/enums","../../../../../webgl/RenderingContext","../../../../../../chunks/builtins","../../../../../webgl/Texture","../../../../../webgl/VertexArrayObject","../../VertexStream"],(function(e,t,r,i,s,n,a,u,o,l,d){"use strict";const c=[1,0],b=[0,1];let h=function(){function e(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}var t=e.prototype;return t.dispose=function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)},t.draw=function(e,t,r){const{context:i}=e,{type:s,radius:n}=r;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new d(i,[-1,-1,1,-1,-1,1,1,1]));const a=this._quad;a.bind(),"blur"===s?this._gaussianBlur(e,t,n):this._radialBlur(e,t),a.unbind()},t._gaussianBlur=function(e,t,r){const{context:i,state:s,painter:n,pixelRatio:a}=e,{size:u}=s,{materialManager:o}=n,l=this._programDesc,d=this._quad,h=[Math.round(a*u[0]),Math.round(a*u[1])],p=this._blurFBO,g=o.getProgram(e,l.gaussianBlur,[{name:"radius",value:Math.ceil(r)}]);i.useProgram(g),i.setBlendingEnabled(!1),i.bindFramebuffer(p),i.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",h),g.setUniform2fv("u_direction",c),g.setUniform1f("u_sigma",r),d.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.bindTexture(p.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",b),d.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(1,771),i.setStencilTestEnabled(!0)},t._radialBlur=function(e,t){const{context:r,painter:i}=e,{materialManager:s}=i,n=this._programDesc,a=this._quad,u=this._blurFBO;r.bindFramebuffer(u);const o=s.getProgram(e,n.radialBlur);r.useProgram(o),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),o.setUniform1i("u_colorTexture",4),a.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const l=s.getProgram(e,n.blit);r.useProgram(l),r.bindTexture(u.colorTexture,5),l.setUniform1i("u_texture",5),r.setBlendFunction(1,771),a.draw()},t._createOrResizeResources=function(e){const{context:t,state:i,pixelRatio:s}=e,{size:n}=i,a=Math.round(s*n[0]),u=Math.round(s*n[1]);this._blurFBO&&this._size[0]===a&&this._size[1]===u||(this._size[0]=a,this._size[1]=u,this._blurFBO?this._blurFBO.resize(a,u):this._blurFBO=new r(t,{colorTarget:0,depthStencilTarget:0,width:a,height:u},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:a,height:u}))},e}();e.Blur=h,Object.defineProperty(e,"__esModule",{value:!0})}));
