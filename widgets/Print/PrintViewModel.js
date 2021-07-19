/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../request","../../Viewpoint","../../core/Collection","../../core/Error","../../core/Handles","../../core/Loadable","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../geometry/Extent","../../portal/Portal","../../rest/print","../../rest/support/fileFormat","../../rest/support/layoutTemplate","../../rest/support/PrintParameters","../../views/2d/viewpointUtils","./CustomTemplate","../../intl/date"],(function(e,t,r,o,i,n,a,l,s,p,c,u,d,f,y,h,v,m,_,w,S,g,x){"use strict";const O=6e4,T=n.ofType(g);function P(e){e.layoutOptions||(e.layoutOptions={}),e.layoutOptions.customTextElements||(e.layoutOptions.customTextElements=[]);const t="date";if(!e.layoutOptions.customTextElements.find((e=>t in e))){const{customTextElements:t}=e.layoutOptions;t.push({date:x.formatDate(Date.now(),x.convertDateFormatToIntlOptions("short-date"))})}}let L=function(t){function r(r){var o;return(o=t.call(this,r)||this)._handles=new l,o.allowedFormats="all",o.allowedLayouts="all",o.defaultTemplates=new T,o.extraParameters=null,o.includeDefaultTemplates=!0,o.effectivePrintServiceUrl=null,o.error=null,o.portal=h.getDefault(),o.printServiceUrl=null,o.scaleEnabled=!1,o.templatesInfo=null,o.updateDelay=1e3,o.view=null,o.print=o.print.bind(e._assertThisInitialized(o)),o}e._inheritsLoose(r,t);var n=r.prototype;return n.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},n.load=function(){var t=e._asyncToGenerator((function*(e){return this.addResolvingPromise(this._loadResources(e).catch((e=>this.error=e))),this}));function r(e){return t.apply(this,arguments)}return r}(),n.print=function(){var t=e._asyncToGenerator((function*(e){const{view:t,extraParameters:r,updateDelay:o}=this;if(!t)throw new a("print:view-required","view is not set");const i=this._getExtent(t.viewpoint,this.scaleEnabled?e.outScale:void 0);P(e);const n=new w({view:t,template:e,extent:i,extraParameters:r,updateDelay:o});try{return yield v.execute(this.effectivePrintServiceUrl,n)}catch(l){const e="print-task:cim-symbol-unsupported"===l.name?l.message:"An error occurred while exporting the web map.";throw new a("print:export-error",e,{error:l})}}));function r(e){return t.apply(this,arguments)}return r}(),n._loadResources=function(){var t=e._asyncToGenerator((function*(e){let t=[];const{printServiceUrl:r}=this;if(!r){var o;if(this.destroyed)return;const{portal:r}=this;try{yield r.load(e)}catch(n){throw new a("print:could-not-load-portal","Cannot load print resource information from portal",{url:this.effectivePrintServiceUrl})}const l=null==(o=r.helperServices)?void 0:o.printTask;var i;if(l)this._set("effectivePrintServiceUrl",l.url),t=(null!=(i=null==l?void 0:l.templates)?i:[]).map((e=>g.fromJSON(e)))}t.length>0&&this.defaultTemplates.addMany(t),yield this._loadServiceDescription(e)}));function r(e){return t.apply(this,arguments)}return r}(),n._loadServiceDescription=function(){var t=e._asyncToGenerator((function*(e){const t=yield this._getPrintTemplatesFromService(e);this._set("templatesInfo",t)}));function r(e){return t.apply(this,arguments)}return r}(),n._getPrintTemplatesFromService=function(e){if(-1===this.effectivePrintServiceUrl.toLowerCase().split("/").indexOf("gpserver"))throw new a("print:invalid-print-service-url","Can't fetch print templates information from provided URL",{url:this.effectivePrintServiceUrl});return o(this.effectivePrintServiceUrl,{...e,query:{f:"json"},timeout:O}).then((e=>{const t=e&&e.data,r=t&&t.parameters;let o=null,i=null;r.forEach((e=>{let t,r=e.choiceList&&e.choiceList.slice();r&&r.length&&e.defaultValue&&(t=r.indexOf(e.defaultValue)),t>-1&&(r.splice(t,1),r.unshift(e.defaultValue));const n=(e,t)=>{const r="all"===t?e:e.filter((e=>t.indexOf(e)>-1));return 0===r.length?e:r};if("Format"===e.name){const t=n(r.map(m.fromJSON),this.allowedFormats),i=m.fromJSON(e.defaultValue);o={defaultValue:t.includes(i)?i:t[0],choiceList:t}}else if("Layout_Template"===e.name){let t,o;r=r.filter((e=>"map_only"!==e.toLowerCase())),r.some(((e,r)=>{const o=e.toLowerCase();return o.indexOf("letter")>-1&&o.indexOf("landscape")>-1?(t=r,!0):o.indexOf("a4")>-1&&o.indexOf("landscape")>-1&&(t=r,!1)})),t&&(o=r[t],r.splice(t,1),r.unshift(o));const a=n(r.map(_.fromJSON),this.allowedLayouts),l=_.fromJSON(e.defaultValue);i={defaultValue:a.includes(l)?l:a[0],choiceList:a}}})),this.error=null;return{format:o,layout:i}})).catch((e=>{throw new a("print:unavailable-service-info","Can't fetch templates info from service",{error:e})}))},n._getExtent=function(e,t){const r=t||this.view.scale,o=this.get("view.size"),n=e?e.targetGeometry:null;return S.getExtent(new y,new i({scale:r,targetGeometry:n}),o)},e._createClass(r,[{key:"state",get:function(){return"loading"===this.loadStatus?"initializing":this.error||"failed"===this.loadStatus?"error":this.get("view.ready")&&"loaded"===this.loadStatus?"ready":"disabled"}}]),r}(s);return t.__decorate([p.property()],L.prototype,"allowedFormats",void 0),t.__decorate([p.property()],L.prototype,"allowedLayouts",void 0),t.__decorate([p.property({type:T})],L.prototype,"defaultTemplates",void 0),t.__decorate([p.property()],L.prototype,"extraParameters",void 0),t.__decorate([p.property()],L.prototype,"includeDefaultTemplates",void 0),t.__decorate([p.property({aliasOf:{source:"printServiceUrl",overridable:!0},readOnly:!0})],L.prototype,"effectivePrintServiceUrl",void 0),t.__decorate([p.property()],L.prototype,"error",void 0),t.__decorate([p.property({type:h})],L.prototype,"portal",void 0),t.__decorate([p.property()],L.prototype,"printServiceUrl",void 0),t.__decorate([p.property({readOnly:!0})],L.prototype,"state",null),t.__decorate([p.property()],L.prototype,"scaleEnabled",void 0),t.__decorate([p.property({readOnly:!0})],L.prototype,"templatesInfo",void 0),t.__decorate([p.property()],L.prototype,"updateDelay",void 0),t.__decorate([p.property()],L.prototype,"view",void 0),L=t.__decorate([f.subclass("esri.widgets.Print.PrintViewModel")],L),L}));
