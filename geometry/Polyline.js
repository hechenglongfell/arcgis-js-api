/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Extent","./Geometry","./Point","./SpatialReference","./support/extentUtils","./support/zmUtils"],(function(t,e,r,s,n,i,a,o,h,p,l,c,u,f,y){"use strict";var d;function g(t){return!Array.isArray(t[0])}let m=d=function(e){function s(...t){var r;return(r=e.call(this,...t)||this).paths=[],r.type="polyline",r}t._inheritsLoose(s,e);var n=s.prototype;return n.normalizeCtorArgs=function(t,e){let r,s,n=null,i=null;return t&&!Array.isArray(t)?(n=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),r=t.hasZ,s=t.hasM):n=t,n=n||[],e=e||u.WGS84,n.length&&n[0]&&null!=n[0][0]&&"number"==typeof n[0][0]&&(n=[n]),i=n[0]&&n[0][0],i&&(void 0===r&&void 0===s?(r=i.length>2,s=!1):void 0===r?r=!s&&i.length>3:void 0===s&&(s=!r&&i.length>3)),{paths:n,spatialReference:e,hasZ:r,hasM:s}},n.writePaths=function(t,e){e.paths=r.clone(this.paths)},n.addPath=function(t){if(!t)return;const e=this.paths,r=e.length;if(g(t)){const s=[];for(let e=0,r=t.length;e<r;e++)s[e]=t[e].toArray();e[r]=s}else e[r]=t.concat();return this.notifyChange("paths"),this},n.clone=function(){const t=new d;return t.spatialReference=this.spatialReference,t.paths=r.clone(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t},n.getPoint=function(t,e){if(!this._validateInputs(t,e))return null;const r=this.paths[t][e],s=this.hasZ,n=this.hasM;return s&&!n?new c(r[0],r[1],r[2],void 0,this.spatialReference):n&&!s?new c(r[0],r[1],void 0,r[2],this.spatialReference):s&&n?new c(r[0],r[1],r[2],r[3],this.spatialReference):new c(r[0],r[1],this.spatialReference)},n.insertPoint=function(t,e,r){return this._validateInputs(t,e,!0)?(y.updateSupportFromPoint(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t].splice(e,0,r),this.notifyChange("paths"),this):this},n.removePath=function(t){if(!this._validateInputs(t,null))return null;const e=this.paths.splice(t,1)[0],r=this.spatialReference,s=e.map((t=>new c(t,r)));return this.notifyChange("paths"),s},n.removePoint=function(t,e){if(!this._validateInputs(t,e))return null;const r=new c(this.paths[t].splice(e,1)[0],this.spatialReference);return this.notifyChange("paths"),r},n.setPoint=function(t,e,r){return this._validateInputs(t,e)?(y.updateSupportFromPoint(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t][e]=r,this.notifyChange("paths"),this):this},n._validateInputs=function(t,e,r=!1){if(null==t||t<0||t>=this.paths.length)return!1;if(null!=e){const s=this.paths[t];if(r&&(e<0||e>s.length))return!1;if(!r&&(e<0||e>=s.length))return!1}return!0},n.toJSON=function(t){return this.write(null,t)},t._createClass(s,[{key:"cache",get:function(){return this.commitProperty("paths"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}},{key:"extent",get:function(){const{spatialReference:t}=this,e=f.getPolylineExtent(this);if(!e)return null;const r=new p(e);return r.spatialReference=t,r}}]),s}(l);return e.__decorate([s.property({readOnly:!0})],m.prototype,"cache",null),e.__decorate([s.property({readOnly:!0})],m.prototype,"extent",null),e.__decorate([s.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],m.prototype,"paths",void 0),e.__decorate([h.writer("paths")],m.prototype,"writePaths",null),m=d=e.__decorate([o.subclass("esri.geometry.Polyline")],m),m.prototype.toJSON.isDefaultToJSON=!0,m}));
