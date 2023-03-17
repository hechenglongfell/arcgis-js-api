/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Color","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/Error","../../../core/has","../../../core/accessorSupport/decorators/subclass","../SmartMappingSliderViewModel"],(function(r,e,o,t,s,n,i,c,l,a){"use strict";let u=function(e){function t(r){return e.call(this,r)||this}r._inheritsLoose(t,e);var s=t.prototype;return s.getStopInfo=function(r){const{min:e,max:t,stops:s}=this;if(!s||!s.length)return[];const n=this._getColorForStops(r).toRgb();return s.map((r=>({color:new o([...n,r.opacity]),offset:(t-r.value)/(t-e)})))},s._getColorForStops=function(r){return r?r instanceof o?r:o.fromString(r):null},t}(a);u=e.__decorate([l.subclass("esri.widgets.smartMapping.OpacitySlider.OpacitySliderViewModel")],u);return u}));
