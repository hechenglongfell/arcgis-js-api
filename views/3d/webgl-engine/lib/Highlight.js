/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec2","../../../../chunks/vec4","../../../../chunks/vec4f64","./DefaultVertexAttributeLocations","./DefaultVertexBufferLayouts","./glUtil3D","./VertexArrayObject","../shaders/HighlightApplyTechnique","../../../../chunks/HighlightBlur.glsl","../shaders/HighlightBlurTechnique","../../../../chunks/HighlightDownsample.glsl","../shaders/HighlightDownsampleTechnique","../shaders/HighlightPassParameters","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/Util"],(function(e,t,i,r,a,s,h,l,o,u,p,n,c,g,_,m,b,d,T,w){"use strict";const v=32;let f=function(){function e(e,t){this._techniqueRep=e,this._rctx=t,this._viewportToRestore=s.create(),this._passParameters=new m.HighlightPassParameters,this._downsampleDrawParameters=new g.HighlightDownsampleDrawParameters,this._blurDrawParameters=new n.HighlightBlurDrawParameters,this._grid={coverageMipmap:null,vao:null,verticalCellCount:0,horizontalCellCount:0,cellPixelSize:0,mipmapLevels:0,viewportWidth:0,viewportHeight:0}}var f=e.prototype;return f._assertResources=function(){if(this._quadVAO)return;this._quadVAO=o.createQuadVAO(this._rctx);const e={colorTarget:d.TargetType.TEXTURE,depthStencilTarget:d.DepthStencilTargetType.NONE,width:0,height:0},t={target:d.TextureType.TEXTURE_2D,pixelFormat:d.PixelFormat.RGBA,dataType:d.PixelType.UNSIGNED_BYTE,samplingMode:d.TextureSamplingMode.LINEAR,wrapMode:d.TextureWrapMode.CLAMP_TO_EDGE,width:0,height:0};this._blur0Fbo=new T.FramebufferObject(this._rctx,e,t),this._blur1Fbo=new T.FramebufferObject(this._rctx,e,t),this._blurTechnique=this._techniqueRep.acquire(c.HighlightBlurTechnique),this._downsampleTechnique=this._techniqueRep.acquire(_.HighlightDownsampleTechnique),this._applyTechnique=this._techniqueRep.acquire(p.HighlightApplyTechnique)},f.dispose=function(){if(this._blurTechnique=i.releaseMaybe(this._blurTechnique),this._downsampleTechnique=i.releaseMaybe(this._downsampleTechnique),this._applyTechnique=i.releaseMaybe(this._applyTechnique),this._grid.coverageMipmap)for(let e=1;e<this._grid.coverageMipmap.length;e++)this._grid.coverageMipmap[e].dispose();this._grid.vao&&this._grid.vao.dispose(!0),this._quadVAO&&(this._quadVAO.dispose(!0),this._quadVAO=null),this._blur0Fbo=i.disposeMaybe(this._blur0Fbo),this._blur1Fbo=i.disposeMaybe(this._blur1Fbo)},f.setDefaultOptions=function(e){this._passParameters={...new m.HighlightPassParameters,...e}},f.render=function(e,t,i){this._passParameters.highlightColorTexture=t.colorTexture,this._assertResources();const s=e.camera;a.copy(this._viewportToRestore,s.fullViewport);const h=s.fullWidth,l=s.fullHeight,o=s.pixelRatio,u=Math.ceil(h/o),p=Math.ceil(l/o);this._blur0Fbo.resize(u,p),this._blur1Fbo.resize(u,p);const n=this._rctx;n.bindVAO(this._quadVAO);let c=null;this._gridUpdateResources(t,v),this._gridComputeMipmap(e),this._passParameters.coverageTexture=this._grid.coverageMipmap[this._grid.mipmapLevels].colorTexture,c=this._grid.vao;const g=n.bindTechnique(this._blurTechnique,this._passParameters,e);n.bindVAO(c),n.bindFramebuffer(this._blur0Fbo),n.setViewport(0,0,u,p),n.setClearColor(0,0,0,0),n.clear(d.ClearBufferBit.COLOR_BUFFER_BIT),this._blurDrawParameters.blurInputTexture=t.colorTexture,r.set(this._blurDrawParameters.blurSize,1/u,0),g.bindDraw(this._blurDrawParameters,e,this._passParameters),n.drawArrays(this._blurTechnique.primitiveType,0,w.vertexCount(c,"geometry")),n.bindFramebuffer(this._blur1Fbo),n.clear(d.ClearBufferBit.COLOR_BUFFER_BIT),this._blurDrawParameters.blurInputTexture=this._blur0Fbo.colorTexture,r.set(this._blurDrawParameters.blurSize,0,1/p),g.bindDraw(this._blurDrawParameters,e,this._passParameters),n.drawArrays(this._blurTechnique.primitiveType,0,w.vertexCount(c,"geometry")),n.bindFramebuffer(i),n.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3]),this._passParameters.blurColorTexture=this._blur1Fbo.colorTexture,n.bindTechnique(this._applyTechnique,this._passParameters,e),n.drawArrays(this._applyTechnique.primitiveType,0,w.vertexCount(c,"geometry")),n.bindVAO(null)},f._gridUpdateResources=function(e,t){const i=this._rctx,r=this._grid;let a=!1;if(null===r.coverageMipmap&&(r.coverageMipmap=[e],a=!0),r.viewportWidth===e.width&&r.viewportHeight===e.height||(a=!0,r.viewportWidth=e.width,r.viewportHeight=e.height),r.coverageMipmap[0]=e,r.cellPixelSize!==t&&(r.cellPixelSize=t,a=!0),a){for(let e=1;e<r.coverageMipmap.length;e++)r.coverageMipmap[e].dispose();r.mipmapLevels=Math.ceil(Math.log(r.cellPixelSize)*Math.LOG2E),r.coverageMipmap.length=r.mipmapLevels+1;for(let e=0;e<r.mipmapLevels;e++){const t=r.coverageMipmap[e],a={target:d.TextureType.TEXTURE_2D,pixelFormat:d.PixelFormat.RGB,dataType:d.PixelType.UNSIGNED_SHORT_5_6_5,samplingMode:d.TextureSamplingMode.LINEAR,wrapMode:d.TextureWrapMode.CLAMP_TO_EDGE,width:Math.ceil(t.width/2),height:Math.ceil(t.height/2)},s={colorTarget:d.TargetType.TEXTURE,depthStencilTarget:d.DepthStencilTargetType.NONE,width:Math.ceil(t.width/2),height:Math.ceil(t.height/2)};r.coverageMipmap[e+1]=new T.FramebufferObject(i,s,a)}}const s=Math.ceil(e.height/r.cellPixelSize),o=Math.ceil(e.width/r.cellPixelSize);if(!r.vao||r.verticalCellCount!==s||r.horizontalCellCount!==o){r.verticalCellCount=s,r.horizontalCellCount=o;const e=s+1,t=o+1,a=1/s,p=1/o,n=6,c=4,g=new Float32Array(n*c*e*t);let _=0;for(let i=0;i<e;i++)for(let e=0;e<t;e++)g[_+0]=(e-.5)*p*2-1,g[_+1]=(i-.5)*a*2-1,g[_+2]=e*p,g[_+3]=i*a,g[_+4]=(e+.5)*p*2-1,g[_+5]=(i-.5)*a*2-1,g[_+6]=e*p,g[_+7]=i*a,g[_+8]=(e-.5)*p*2-1,g[_+9]=(i+.5)*a*2-1,g[_+10]=e*p,g[_+11]=i*a,g[_+12]=(e-.5)*p*2-1,g[_+13]=(i+.5)*a*2-1,g[_+14]=e*p,g[_+15]=i*a,g[_+16]=(e+.5)*p*2-1,g[_+17]=(i-.5)*a*2-1,g[_+18]=e*p,g[_+19]=i*a,g[_+20]=(e+.5)*p*2-1,g[_+21]=(i+.5)*a*2-1,g[_+22]=e*p,g[_+23]=i*a,_+=n*c;r.vao&&r.vao.dispose(!0),r.vao=new u.VertexArrayObject(i,h.Default3D,{geometry:l.Pos2Tex},{geometry:b.BufferObject.createVertex(i,d.Usage.STATIC_DRAW,g)})}},f._gridComputeMipmap=function(e){const t=this._rctx,i=this._grid,a=t.bindTechnique(this._downsampleTechnique,this._passParameters,e);t.bindVAO(this._quadVAO);for(let s=0;s<i.mipmapLevels;s++){t.bindFramebuffer(i.coverageMipmap[s+1]);const h=i.coverageMipmap[s+1].width,l=i.coverageMipmap[s+1].height;this._downsampleDrawParameters.inputTexture=i.coverageMipmap[s].colorTexture,r.set(this._downsampleDrawParameters.invFramebufferDim,1/h,1/l),a.bindDraw(this._downsampleDrawParameters,e,this._passParameters),t.setViewport(0,0,h,l),t.drawArrays(d.PrimitiveType.TRIANGLE_STRIP,0,w.vertexCount(this._quadVAO,"geometry"))}},t._createClass(e,[{key:"gpuMemoryUsage",get:function(){let e=(i.isSome(this._blur0Fbo)?this._blur0Fbo.gpuMemoryUsage:0)+(i.isSome(this._blur1Fbo)?this._blur1Fbo.gpuMemoryUsage:0);if(this._grid.coverageMipmap)for(const t of this._grid.coverageMipmap)e+=t.gpuMemoryUsage;return e}},{key:"test",get:function(){return{coverage:this._grid.coverageMipmap,blur:[this._blur0Fbo,this._blur1Fbo]}}}]),e}();e.Highlight=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
