/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./SmartMappingSliderViewModel"],(function(e,t,n,s,r,i,a){"use strict";let o=function(t){function n(e){var n;return(n=t.call(this,e)||this).handlesSyncedToPrimary=!0,n}e._inheritsLoose(n,t);var s=n.prototype;return s.setValue=function(e,t){const{max:n,min:s,values:r}=this,i=r[e];if(isNaN(t)||i===t||t>n||t<s)return;t=this.toPrecision(t);const a=this.primaryHandleEnabled&&this.handlesSyncedToPrimary;if(a){const n=r.slice().sort(((e,t)=>e>t?1:-1))[1];(0===e&&t>n||2===e&&t<n)&&(t=n)}const o=this.getStopChanges(e,t);this.updateStops(o),a?this.notifyChange("values"):(r[e]=t,this._set("values",[...r])),this.notifyChange("labels")},s.getStopIndexFromValueIndex=function(e){const{handlesSyncedToPrimary:n,primaryHandleEnabled:s}=this;if(s){const{values:t}=this,s=t[e];if(n)return e;const r=t.slice().sort(((e,t)=>e>t?1:-1)),i=r.indexOf(s);return t.some(((e,t)=>e===s&&t!==i))?r.lastIndexOf(s):i}return t.prototype.getStopIndexFromValueIndex.call(this,e)},s.getStopChanges=function(e,n){return this.primaryHandleEnabled?this._getStopChanges(e,n):t.prototype.getStopChanges.call(this,e,n)},s._getStopChanges=function(e,t){const{max:n,min:s,stops:r,values:i}=this,a=this.handlesSyncedToPrimary&&1===e,o=i[e],l=i.slice();a||(l[e]=t);const c=l.sort(((e,t)=>e>t?1:-1)),d=a?t:c[1],p=t-o,u=a?this.toPrecision(Math.max(Math.min(c[0]+p,n),s)):c[0],h=a?this.toPrecision(Math.max(Math.min(c[2]+p,n),s)):c[2];return 5===r.length?[{index:0,value:u},{index:1,value:this.toPrecision((d+u)/2)},{index:2,value:d},{index:3,value:this.toPrecision((d+h)/2)},{index:4,value:h}]:[{index:0,value:u},{index:1,value:d},{index:2,value:h}]},e._createClass(n,[{key:"primaryHandleEnabled",get:function(){const{stops:e}=this;if(!e||!e.length)return!1;const t=e.length;return(3===t||5===t)&&this._get("primaryHandleEnabled")},set:function(e){this._set("primaryHandleEnabled",e)}},{key:"values",get:function(){const{primaryHandleEnabled:e,stops:t}=this;if(!t||!t.length||t.length<2)return[];const n=this.getValuesFromStops();return e?3===n.length?[n[0],n[1],n[2]]:[n[0],n[2],n[4]]:[n[0],n[n.length-1]]}}]),n}(a);t.__decorate([n.property()],o.prototype,"handlesSyncedToPrimary",void 0),t.__decorate([n.property()],o.prototype,"primaryHandleEnabled",null),t.__decorate([n.property({dependsOn:["handlesSyncedToPrimary"],readOnly:!0})],o.prototype,"values",null),o=t.__decorate([i.subclass("esri.widgets.smartMapping.SmartMappingPrimaryHandleSliderViewModel")],o);return o}));
