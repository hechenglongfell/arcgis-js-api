/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../Manipulator3D"],(function(t,n,a){"use strict";let i=function(){function t(){this._available=!0}var i=t.prototype;return i.hasManipulator=function(t){return this.someManipulator((n=>n===t))},i.someManipulator=function(t){let n=!1;return this.forEachManipulator((a=>{!n&&t(a)&&(n=!0)})),n},i.forEachManipulator3D=function(t){this.forEachManipulator(((n,i)=>{n instanceof a.Manipulator3D&&t(n,i)}))},n._createClass(t,[{key:"location",set:function(t){this.forEachManipulator3D((n=>n.location=t))}},{key:"elevationAlignedLocation",set:function(t){this.forEachManipulator3D((n=>n.elevationAlignedLocation=t))}},{key:"elevationInfo",set:function(t){this.forEachManipulator3D((n=>n.elevationInfo=t))}},{key:"renderLocation",get:function(){let t;return this.forEachManipulator3D((n=>{t||(t=n.renderLocation)})),t}},{key:"available",get:function(){return this._available},set:function(t){this._available=t,this.forEachManipulator3D((n=>n.available=t))}},{key:"grabbing",get:function(){return this.someManipulator((t=>t.grabbing))}},{key:"dragging",get:function(){return this.someManipulator((t=>t.dragging))}}]),t}();t.Manipulation=i,Object.defineProperty(t,"__esModule",{value:!0})}));
