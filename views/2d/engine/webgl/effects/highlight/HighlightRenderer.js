/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../webgl/BufferObject","../../../../../webgl/FramebufferObject","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/has","../../../../../webgl/checkWebGLError","../../../../../webgl/enums","../../../../../../chunks/builtins","../../../../../webgl/programUtils","../../../../../webgl/Texture","../../../../../webgl/VertexArrayObject","../../definitions","./parameters","../../shaders/HighlightPrograms"],(function(r,e,i,s,t,o,u,n,_,h,a,c,g){"use strict";return function(){function e(){this._width=void 0,this._height=void 0,this._resources=null}var i=e.prototype;return i.dispose=function(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)},i.preBlur=function(r,e){r.bindTexture(e,a.TEXTURE_BINDING_HIGHLIGHT_0),r.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",c.ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX),r.bindVAO(this._resources.quadVAO),r.drawArrays(5,0,4),r.bindVAO()},i.finalBlur=function(r,e){r.bindTexture(e,a.TEXTURE_BINDING_HIGHLIGHT_0),r.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",c.RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX),r.bindVAO(this._resources.quadVAO),r.drawArrays(5,0,4),r.bindVAO()},i.renderHighlight=function(r,e,i){r.bindTexture(e,a.TEXTURE_BINDING_HIGHLIGHT_0),r.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(r,this._resources.highlightProgram),r.bindVAO(this._resources.quadVAO),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.drawArrays(5,0,4),r.bindVAO()},i._initialize=function(e,i,s){this._width=i,this._height=s;const t=r.createVertex(e,35044,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),o=new h(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!1},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!1}]},{geometry:t}),u=n.createProgram(e,g.highlight),_=n.createProgram(e,g.blur);u.setUniform1i("u_texture",a.TEXTURE_BINDING_HIGHLIGHT_0),u.setUniform1i("u_shade",a.TEXTURE_BINDING_HIGHLIGHT_1),u.setUniform1f("u_sigma",c.SIGMA),_.setUniform1i("u_texture",a.TEXTURE_BINDING_HIGHLIGHT_0),_.setUniform1f("u_sigma",c.SIGMA),this._resources={quadGeometry:t,quadVAO:o,highlightProgram:u,blurProgram:_}},i.setup=function(r,e,i){this._resources?(this._width=e,this._height=i):this._initialize(r,e,i)},e}()}));
