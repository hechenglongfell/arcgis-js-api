/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,n,t,i,a,c,r,l){"use strict";var o;const s=147914382,u=[{id:"room",minScale:100},{id:"rooms",minScale:400},{id:"smallBuilding",minScale:800},{id:"building",minScale:1999},{id:"buildings",minScale:3999},{id:"street",minScale:7499},{id:"streets",minScale:14999},{id:"neighborhood",minScale:29999},{id:"town",minScale:59999},{id:"city",minScale:119999},{id:"cities",minScale:249999},{id:"metropolitanArea",minScale:499999},{id:"county",minScale:999999},{id:"counties",minScale:1999999},{id:"stateProvince",minScale:3999999},{id:"statesProvinces",minScale:6999999},{id:"countriesSmall",minScale:14999999},{id:"countriesBig",minScale:34999999},{id:"continent",minScale:99999999},{id:"world",minScale:s}];function m(e,n){const t=u,i=t.length,a=[];let c,r=e;e=e>=0?e:0,n=n>0?n:t[i-1].minScale;for(let l=0;l<i;l++){const i=Math.min(t[l].minScale,n);c=Math.min(i,n),e<=i&&r<n&&a.push({id:t[l].id,maxScale:Math.max(r,e),minScale:c}),r=c+1}return a.reverse(),S(a)}function S(e){if(0===e.length)return e;const[n]=e,t=e[e.length-1];return n.minScale===n.maxScale&&(e.shift(),n.minScale+=1),t.minScale===t.maxScale&&(e.pop(),t.maxScale-=1),e}let d=o=function(n){function t(){var e;return(e=n.apply(this,arguments)||this).ranges=[],e}e._inheritsLoose(t,n),t.fromScaleRange=function({maxScale:e,minScale:n}){return new o({ranges:m(e,n)})},t.fromLayer=function(){var n=e._asyncToGenerator((function*(e){yield e.when();const n=e.get("tileInfo.lods");let t;if(n){t=m(n[n.length-1].scale,n[0].scale)}else t=m(0,0);return new o({ranges:t})}));function t(e){return n.apply(this,arguments)}return t}();var i=t.prototype;return i.isMinScaleEdge=function(e){const{firstRange:n}=this,t=n.minScale,i=o.RecommendedScales[n.id]||n.maxScale;return e<=t&&e>=i},i.isMaxScaleEdge=function(e){const{lastRange:n}=this,t=n.maxScale;return e<=(o.RecommendedScales[n.id]||n.minScale)&&e>=t},i.findScaleRange=function(e){const n=this.ranges;let t;if(e>=n[0].maxScale)return n[0];if(e<=n[n.length-1].minScale)return n[n.length-1];for(let i=0;i<n.length;i++){const a=n[i];if(e>=a.maxScale&&e<=a.minScale){t=a;break}}return t},i.findScaleRangeByIndex=function(e){return this.ranges[this._clampScaleRangeIndex(e)]},i.scaleToRangeIndex=function(e){return this.ranges.indexOf(this.findScaleRange(e))},i.clampScale=function(e){return Math.min(this.minScale,Math.max(this.maxScale,e))},i.clampMinScale=function(e){return 0===e?this.minScale:this.clampScale(e)},i.clampMaxScale=function(e){return this.clampScale(e)},i.contains=function(e){const n=this.ranges;let t=!1;for(let i=0;i<n.length;i++){const{maxScale:a,minScale:c}=n[i];if(e>=a&&e<=c){t=!0;break}}return t},i._clampScaleRangeIndex=function(e){const n=0;if(e<=n)return n;const t=this.ranges.length-1;return e>t?t:Math.floor(e)},e._createClass(t,[{key:"firstRange",get:function(){return this.ranges[0]}},{key:"lastRange",get:function(){const e=this.ranges;return e[e.length-1]}},{key:"length",get:function(){return this.ranges.length}},{key:"maxScale",get:function(){return this.lastRange.maxScale}},{key:"minScale",get:function(){return this.firstRange.minScale}}]),t}(t);return d.RecommendedScales=Object.freeze({world:s,continent:5e7,countriesBig:25e6,countriesSmall:12e6,statesProvinces:6e6,stateProvince:3e6,counties:15e5,county:75e4,metropolitanArea:32e4,cities:16e4,city:8e4,town:4e4,neighborhood:2e4,streets:1e4,street:5e3,buildings:2500,building:1250,smallBuilding:800,rooms:400,room:100}),n.__decorate([i.property()],d.prototype,"firstRange",null),n.__decorate([i.property()],d.prototype,"lastRange",null),n.__decorate([i.property()],d.prototype,"length",null),n.__decorate([i.property()],d.prototype,"maxScale",null),n.__decorate([i.property()],d.prototype,"minScale",null),n.__decorate([i.property()],d.prototype,"ranges",void 0),d=o=n.__decorate([l.subclass("esri.widgets.ScaleRangeSlider.ScaleRanges")],d),d}));
