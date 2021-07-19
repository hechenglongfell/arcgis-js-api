/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./Camera","./geometry","./core/JSONSupport","./core/maybe","./core/accessorSupport/decorators/property","./core/has","./core/accessorSupport/decorators/cast","./core/Logger","./core/accessorSupport/decorators/subclass","./geometry/support/jsonUtils"],(function(e,r,t,o,a,s,i,c,n,p,l,u){"use strict";var y;let m=y=function(r){function t(e){var t;return(t=r.call(this,e)||this).rotation=0,t.scale=0,t.targetGeometry=null,t.camera=null,t}e._inheritsLoose(t,r);var o=t.prototype;return o.castRotation=function(e){return(e%=360)<0&&(e+=360),e},o.clone=function(){return new y({rotation:this.rotation,scale:this.scale,targetGeometry:s.isSome(this.targetGeometry)?this.targetGeometry.clone():null,camera:s.isSome(this.camera)?this.camera.clone():null})},t}(a.JSONSupport);function d(){return{enabled:!this.camera}}return r.__decorate([i.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:d}}}}})],m.prototype,"rotation",void 0),r.__decorate([n.cast("rotation")],m.prototype,"castRotation",null),r.__decorate([i.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:d}}}}})],m.prototype,"scale",void 0),r.__decorate([i.property({types:o.geometryTypes,json:{read:u.fromJSON,write:!0,origins:{"web-scene":{read:u.fromJSON,write:{overridePolicy:d}}}}})],m.prototype,"targetGeometry",void 0),r.__decorate([i.property({type:t,json:{write:!0}})],m.prototype,"camera",void 0),m=y=r.__decorate([l.subclass("esri.Viewpoint")],m),m}));
