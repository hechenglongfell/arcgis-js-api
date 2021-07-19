/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./LineSymbol","./LineSymbolMarker"],(function(e,r,o,t,i,s,n,l,a,p,d,c,h){"use strict";var u;const S=new o.JSONMap({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let y=u=function(r){function o(...e){var o;return(o=r.call(this,...e)||this).type="simple-line",o.style="solid",o.cap="round",o.join="round",o.marker=null,o.miterLimit=2,o}e._inheritsLoose(o,r);var s=o.prototype;return s.normalizeCtorArgs=function(e,r,o,t,s,n){if(e&&"string"!=typeof e)return e;const l={};return null!=e&&(l.style=e),null!=r&&(l.color=r),null!=o&&(l.width=i.toPt(o)),null!=t&&(l.cap=t),null!=s&&(l.join=s),null!=n&&(l.miterLimit=i.toPt(n)),l},s.clone=function(){var e;return new u({color:t.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(e=this.marker)?void 0:e.clone()})},s.hash=function(){var e,o;return`${r.prototype.hash.call(this)}.${null==(e=this.color)?void 0:e.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(o=this.marker)?void 0:o.hash()}`},o}(c);return r.__decorate([p.enumeration({esriSLS:"simple-line"},{readOnly:!0})],y.prototype,"type",void 0),r.__decorate([s.property({type:S.apiValues,json:{read:S.read,write:S.write}})],y.prototype,"style",void 0),r.__decorate([s.property({type:["butt","round","square"],json:{write:{overridePolicy:(e,r,o)=>({enabled:"round"!==e&&(null==o||null==o.origin)})}}})],y.prototype,"cap",void 0),r.__decorate([s.property({type:["miter","round","bevel"],json:{write:{overridePolicy:(e,r,o)=>({enabled:"round"!==e&&(null==o||null==o.origin)})}}})],y.prototype,"join",void 0),r.__decorate([s.property({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":h}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],y.prototype,"marker",void 0),r.__decorate([s.property({type:Number,json:{read:!1,write:!1}})],y.prototype,"miterLimit",void 0),y=u=r.__decorate([d.subclass("esri.symbols.SimpleLineSymbol")],y),y}));
