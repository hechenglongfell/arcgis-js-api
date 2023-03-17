/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./maybe"],(function(t,e){"use strict";return function(){function i(t=(t=>t.values().next().value)){this._peeker=t,this._items=new Set}var s=i.prototype;return s.clear=function(){this._items.clear()},s.last=function(){if(0===this._items.size)return;let t;for(t of this._items);return t},s.peek=function(){if(0!==this._items.size)return this._peeker(this._items)},s.push=function(t){this.contains(t)||this._items.add(t)},s.contains=function(t){return this._items.has(t)},s.pop=function(){if(0===this.length)return;const t=this.peek();return this._items.delete(e.assumeNonNull(t)),t},s.popLast=function(){if(0===this.length)return;const t=this.last();return this._items.delete(e.assumeNonNull(t)),t},s.remove=function(t){this._items.delete(t)},s.filter=function(t){return this._items.forEach((e=>{t(e)||this._items.delete(e)})),this},t._createClass(i,[{key:"length",get:function(){return this._items.size}}]),i}()}));
