/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../input/InputHandler"],(function(o,e,n,t){"use strict";var i;!function(o){o[o.IN=0]="IN",o[o.OUT=1]="OUT"}(i||(i={}));let r=function(o){function n(e,n,t){var r;return(r=o.call(this,!0)||this).view=e,r.keys=n,r._keysToZoomAction={},r.registerIncoming("key-down",t,(o=>r._handleKeyDown(o))),n.zoomIn.forEach((o=>r._keysToZoomAction[o]=i.IN)),n.zoomOut.forEach((o=>r._keysToZoomAction[o]=i.OUT)),r}e._inheritsLoose(n,o);var t=n.prototype;return t._handleKeyDown=function(o){this._handleKey(o)},t._handleKey=function(o){const e=o.modifiers;if(e.size>0&&!e.has("Shift"))return;const{key:n}=o.data;if(!(n in this._keysToZoomAction))return;const t=this._keysToZoomAction[n],{mapViewNavigation:r}=this.view;let s=null;switch(t){case i.IN:s=r.zoomIn();break;case i.OUT:s=r.zoomOut();break;default:return}r.begin(),s.then((()=>r.end())),o.stopPropagation()},n}(t.InputHandler);o.KeyZoom=r,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
