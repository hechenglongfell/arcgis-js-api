/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Graphic","../core/Logger","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/set","../core/accessorSupport/decorators/shared","../core/accessorSupport/decorators/subclass","../core/support/OwningCollection"],(function(e,r,o,s,c,t,n,i,l,a,p,u){"use strict";e.GraphicsCollection=function(e){function o(){return e.apply(this,arguments)||this}r._inheritsLoose(o,e);var s=o.prototype;return s._own=function(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner},s._release=function(e){e.layer===this.owner&&(e.layer=null)},o}(u.OwningCollection),o.__decorate([a.shared({Type:s,ensureType:t.ensureType(s)})],e.GraphicsCollection.prototype,"itemType",void 0),e.GraphicsCollection=o.__decorate([p.subclass("esri.support.GraphicsCollection")],e.GraphicsCollection),Object.defineProperty(e,"__esModule",{value:!0})}));
