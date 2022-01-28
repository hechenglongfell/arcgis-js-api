/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Evented","../../../../core/mathUtils","../../../../core/maybe","./ContentObject","./TextRenderer","../../../webgl/Texture","../../../webgl/capabilities/isWebGL2Context"],(function(e,t,r,i,n,s,u,o){"use strict";let h=function(n){function h(e,r,i){var u;return(u=n.call(this)||this).type=4,u._glTexture=null,u.events=new t,u._requiresPowerOfTwo=!o(e.gl),u._renderer=new s.TextRenderer(r,i),u}e._inheritsLoose(h,n);var l=h.prototype;return l.createDescriptor=function(e){return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,flipped:!0,samplingMode:9987,hasMipmap:!0,preMultiplyAlpha:!0,maxAnisotropy:e.parameters.maxMaxAnisotropy}},l.load=function(e){if(i.isSome(this._glTexture))return this._glTexture;const t=s.getTextHelperCanvas(d,this.textureWidth,this.textureHeight),r=t.getContext("2d");return r.save(),this._renderer.render(r,0,this.textureHeight-this._renderer.renderedHeight),this._glTexture=new u(e,this.createDescriptor(e),t),r.restore(),this._glTexture},l.unload=function(){i.isSome(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),this.events.emit("unloaded")},e._createClass(h,[{key:"width",get:function(){return this._renderer.renderedWidth}},{key:"height",get:function(){return this._renderer.renderedHeight}},{key:"textureWidth",get:function(){const e=this.width;return this._requiresPowerOfTwo?r.nextHighestPowerOfTwo(e):e}},{key:"textureHeight",get:function(){const e=this.height;return this._requiresPowerOfTwo?r.nextHighestPowerOfTwo(e):e}},{key:"displayWidth",get:function(){return this._renderer.displayWidth}},{key:"displayHeight",get:function(){return this._renderer.displayHeight}},{key:"texcoordScale",get:function(){return[this._renderer.renderedWidth/this.textureWidth,this._renderer.renderedHeight/this.textureHeight]}},{key:"requiresFrameUpdates",get:function(){return!1}},{key:"glTexture",get:function(){return this._glTexture}}]),h}(n.ContentObject);const d={canvas:null};return h}));
