/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let s=function(){function e(e){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e,this.view.watch("ready",(e=>{this._resourcesCreated&&(e?this._createResources():this._destroyResources())}))}var s=e.prototype;return s.applyProps=function(e){let t=!1;for(const s in e)s in this?"attached"===s?t=e[s]:this[s]=e[s]:console.error("Cannot set unknown property",s);this.attached=t},s.destroy=function(){this.attached=!1},s._createResources=function(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)},s._destroyResources=function(){this.destroyResources(),this._resourcesCreated=!1},t._createClass(e,[{key:"attached",get:function(){return this._attached},set:function(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}},{key:"visible",get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}}]),e}();e.VisualElement=s,Object.defineProperty(e,"__esModule",{value:!0})}));
