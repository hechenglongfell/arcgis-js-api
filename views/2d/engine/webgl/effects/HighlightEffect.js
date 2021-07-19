/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../BitBlitRenderer","./Effect","./highlight/HighlightGradient","./highlight/HighlightRenderer","./highlight/HighlightSurfaces"],(function(e,t,i,r,h,s,n){"use strict";const l=4,d=4/l;return function(t){function r(){var e;return(e=t.apply(this,arguments)||this).defines=["highlight"],e._hlRenderer=new s,e._hlGradient=new h,e._width=void 0,e._height=void 0,e._hlSurfaces=new n,e._adjustedWidth=void 0,e._adjustedHeight=void 0,e._blitRenderer=new i.BitBlitRenderer,e}e._inheritsLoose(r,t);var o=r.prototype;return o.dispose=function(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null},o.bind=function(e){const{context:t,painter:i}=e,{width:r,height:h}=t.getViewport(),s=i.getFbos(r,h).effect0;this.setup(e,r,h),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)},o.unbind=function(){},o.setup=function({context:e},t,i){this._width=t,this._height=i;const r=t%l,h=i%l;t+=r<l/2?-r:l-r,i+=h<l/2?-h:l-h,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*d),n=Math.round(i*d);this._hlRenderer.setup(e,s,n),this._hlSurfaces.setup(e,s,n)},o.draw=function({context:e}){const t=e.getBoundFramebufferObject();e.setViewport(0,0,this._adjustedWidth*d,this._adjustedHeight*d),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,9728,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!0),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null},o.setHighlightOptions=function(e){this._hlGradient.setHighlightOptions(e)},r}(r.Effect)}));
