/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./SimpleIndexManager","./TextureBackedBuffer"],(function(e,t,n,r){"use strict";const i=65536;let u=function(){function e(e,t=1){this.textureBuffer=new r.TextureBackedBuffer(e,t),this._indexManager=new n.SimpleIndexManager(i)}var u=e.prototype;return u.dispose=function(){this.textureBuffer.dispose(),this.textureBuffer=void 0},u.acquireIndex=function(){const e=this._indexManager.acquire();return this.textureBuffer.resizeToFit(e),e},u.releaseIndex=function(e){this._indexManager.release(e)},t._createClass(e,[{key:"availableCount",get:function(){return this._indexManager.availableCount}},{key:"activeCount",get:function(){return this._indexManager.activeCount}}]),e}();e.MAX_INDEX_COUNT=i,e.ManagedTextureBackedBuffer=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
