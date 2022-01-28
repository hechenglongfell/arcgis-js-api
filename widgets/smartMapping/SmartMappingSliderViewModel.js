/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../Slider/SliderViewModel","./support/utils"],(function(t,e,o,s,i,n,a,r,l,u){"use strict";let m=function(e){function s(o){var s;return(s=e.call(this,o)||this)._initialStopValues=[],s._max=null,s._min=null,s.hasTimeData=!1,s.inputFormatFunction=(t,e)=>"max"===e?s.getUnzoomedMax().toString():"min"===e?s.getUnzoomedMin().toString():t.toString(),s.inputParseFunction=null,s.labelFormatFunction=e=>{if(s.hasTimeData)return u.formatDateLabel(e);const{max:o,min:i,precision:n}=t._assertThisInitialized(s),a=o-i>10?2:n;return u.formatNumberLabel(parseFloat(e.toFixed(a)))},s.thumbsConstrained=!1,s.zoomingEnabled=!0,s}t._inheritsLoose(s,e);var i=s.prototype;return i.getStopIndexFromValueIndex=function(t){const{stops:e}=this,o=this.values[t];if(0===t){return o<=this.values[1]?0:e.length-1}if(1===t){return this.values[0]>=o?0:e.length-1}return null},i.getStopChanges=function(t,e){const o=this.stops,s=this.getStopIndexFromValueIndex(t),i=this.getValuesFromStops();i[s]=e;const[n,a]=[i[0],i[i.length-1]].sort(((t,e)=>t>e?1:-1)),r=a-n,l=o.length-1;return i.map(((t,e)=>({index:e,value:this.toPrecision(n+e*r/l)})))},i.setValue=function(t,e){const{max:o,min:s,values:i}=this,n=i[t];if(isNaN(e)||n===e||e>o||e<s)return;i[t]=this.toPrecision(e),this._set("values",[...i]);const a=i.slice().sort(((t,e)=>t>e?1:-1)),r=a[0],l=a[a.length-1],m=u.getStopChanges(r,l,this._initialStopValues);this.updateStops(m),this.updateBreaks(),this.notifyChange("labels")},i.getValuesFromStops=function(t){const e=t||this.stops;return null==e?void 0:e.map((t=>t.hasOwnProperty("ratio")?t.ratio:t.value))},i.updateBreaks=function(){const{breaks:t,values:e}=this;null!=t&&t.length&&e.slice().sort(((t,e)=>t>e?1:-1)).forEach(((e,s)=>{t[s].max=e,o.isSome(t[s+1])&&(t[s+1].min=e)}))},i.updateBreakMax=function(t){const{breaks:e,max:s,min:i}=this;!isNaN(t)&&s!==t&&o.isSome(i)&&t>i&&null!=e&&e.length&&(e[e.length-1].max=t)},i.updateBreakMin=function(t){const{breaks:e,max:s,min:i}=this;!isNaN(t)&&i!==t&&o.isSome(s)&&t<s&&null!=e&&e.length&&(e[0].min=t)},i.updateStops=function(t){const{stops:e}=this,o=this.getValuesFromStops();if(null!=o&&o.length){for(const e of t)o[e.index]=e.value;e.forEach(((t,e)=>{t.hasOwnProperty("ratio")?t.ratio=o[e]:t.value=o[e]}))}},i.getUnzoomedMax=function(){return this.zoomOptions&&o.isSome(this._max)?this._max:this.max},i.getUnzoomedMin=function(){return this.zoomOptions&&o.isSome(this._min)?this._min:this.min},i._storeZoomMax=function(t,e){this._max=e,this.setMax(t)},i._storeZoomMin=function(t,e){this._min=e,this.setMin(t)},t._createClass(s,[{key:"breaks",set:function(t){this._set("breaks",t),this.notifyChange("max"),this.notifyChange("min")}},{key:"stops",set:function(t){if(null!=t&&t.length){const{max:e,min:s}=this,i=this.getValuesFromStops(t),n={};o.isSome(s)&&i.some((t=>t<s))&&(n.min=Math.min(...i)),o.isSome(e)&&i.some((t=>t>e))&&(n.max=Math.max(...i)),this.set({...n}),this._initialStopValues=i}else this._initialStopValues=null;this._set("stops",t||null),this.notifyChange("values")}},{key:"labels",get:function(){const{values:t}=this,e=t&&t.length?t.map(((t,e)=>this.getLabelForValue(t,"value",e))):[],o=this.getUnzoomedMax(),s=this.getUnzoomedMin();return{max:this.getLabelForValue(o,"max"),min:this.getLabelForValue(s,"min"),values:e}}},{key:"max",get:function(){const{breaks:t}=this;return null!=t&&t.length?t[t.length-1].max:this.max},set:function(t){const{zoomOptions:e}=this;if(e&&o.isSome(e.max)){const o=this.values;let s=e.max;if(t<s&&(s=t,e.max=t),o&&o.length)for(let e=0;e<o.length;e++)t<o[e]&&this.setValue(e,t);this._storeZoomMax(s,t)}else this.updateBreakMax(t),this.setMax(t);this.notifyChange("labels")}},{key:"min",get:function(){const{breaks:t}=this;return null!=t&&t.length?t[0].min:this.min},set:function(t){const{zoomOptions:e}=this;if(e&&o.isSome(e.min)){const o=this.values;let s=e.min;if(t>s&&(s=t,e.min=t),o&&o.length)for(let e=0;e<o.length;e++)t>o[e]&&this.setValue(e,t);this._storeZoomMin(s,t)}else this.updateBreakMin(t),this.setMin(t);this.notifyChange("labels")}},{key:"state",get:function(){const{max:t,min:e,values:s}=this;return o.isSome(t)&&o.isSome(e)&&s.length>0?"ready":"disabled"}},{key:"values",get:function(){const{breaks:t,stops:e}=this;if(!t&&!e)return[];if(null!=t&&t.length){const e=t.map((t=>t.max));return e.pop(),e}if((null==e?void 0:e.length)<2)return[];const o=this.getValuesFromStops();return[o[0],o[o.length-1]]}},{key:"zoomOptions",set:function(t){const{zoomingEnabled:e,zoomOptions:s}=this;if(e){if(s){const e=o.isSome(this._max)?this._max:this.max,s=o.isSome(this._min)?this._min:this.min;if(t){const{max:i,min:n}=t,a=o.isSome(i),r=o.isSome(n),l=r?t.min:s,u=r?s:null,m=a?t.max:e,h=a?e:null;this._storeZoomMin(l,u),this._storeZoomMax(m,h)}else this.setMax(e),this.setMin(s),this._min=null,this._max=null}else if(t){const{max:e,min:s}=t;o.isSome(s)&&this._storeZoomMin(t.min,this.min),o.isSome(e)&&this._storeZoomMax(t.max,this.max)}this._set("zoomOptions",t),this.notifyChange("max"),this.notifyChange("min")}}}]),s}(l);e.__decorate([s.property()],m.prototype,"breaks",null),e.__decorate([s.property()],m.prototype,"stops",null),e.__decorate([s.property()],m.prototype,"hasTimeData",void 0),e.__decorate([s.property()],m.prototype,"inputFormatFunction",void 0),e.__decorate([s.property()],m.prototype,"inputParseFunction",void 0),e.__decorate([s.property()],m.prototype,"labelFormatFunction",void 0),e.__decorate([s.property({readOnly:!0})],m.prototype,"labels",null),e.__decorate([s.property()],m.prototype,"max",null),e.__decorate([s.property()],m.prototype,"min",null),e.__decorate([s.property({readOnly:!0})],m.prototype,"state",null),e.__decorate([s.property()],m.prototype,"thumbsConstrained",void 0),e.__decorate([s.property({readOnly:!0})],m.prototype,"values",null),e.__decorate([s.property()],m.prototype,"zoomingEnabled",void 0),e.__decorate([s.property()],m.prototype,"zoomOptions",null),m=e.__decorate([r.subclass("esri.widgets.smartMapping.SmartMappingSliderViewModel")],m);return m}));
