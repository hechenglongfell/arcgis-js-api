/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,n,s,a,i){"use strict";var c;let p=c=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).enabled=!0,e.rotationEnabled=!0,e}e._inheritsLoose(t,r);var o=t.prototype;return o.constrain=function(e,r){return this.enabled&&r?(this.rotationEnabled||(e.rotation=r.rotation),e):e},o.clone=function(){return new c({enabled:this.enabled,rotationEnabled:this.rotationEnabled})},t}(t);r.__decorate([o.property()],p.prototype,"enabled",void 0),r.__decorate([o.property()],p.prototype,"rotationEnabled",void 0),p=c=r.__decorate([i.subclass("esri.views.2d.constraints.RotationConstraint")],p);return p}));
