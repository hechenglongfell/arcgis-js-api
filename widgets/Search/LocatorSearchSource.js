/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./SearchSource","./support/locatorUtils"],(function(e,t,o,r,s,i,l,a){"use strict";var p;const c="esri.widgets.Search.LocatorSearchSource";let n=p=function(t){function r(o){var r;return(r=t.call(this,o)||this).apiKey=null,r.categories=null,r.countryCode=null,r.defaultZoomScale=null,r.localSearchDisabled=!1,r.locationType=null,r.name="",r.placeholder="",r.searchTemplate="",r.singleLineFieldName=null,r.suggestionsEnabled=null,r.url=null,r.zoomScale=null,r.getResults=(t,o)=>a.getResults({source:e._assertThisInitialized(r),...t},o),r.getSuggestions=(t,o)=>a.getSuggestions({source:e._assertThisInitialized(r),...t},o),r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new p({apiKey:this.apiKey,autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?o.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?o.clone(this.categories):null,countryCode:this.countryCode,locationType:this.locationType,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})},r}(l);t.__decorate([r.property()],n.prototype,"apiKey",void 0),t.__decorate([r.property()],n.prototype,"categories",void 0),t.__decorate([r.property()],n.prototype,"countryCode",void 0),t.__decorate([r.property({json:{write:!0}})],n.prototype,"defaultZoomScale",void 0),t.__decorate([r.property()],n.prototype,"localSearchDisabled",void 0),t.__decorate([r.property()],n.prototype,"locationType",void 0),t.__decorate([r.property({json:{write:!0}})],n.prototype,"name",void 0),t.__decorate([r.property({json:{write:!0}})],n.prototype,"placeholder",void 0),t.__decorate([r.property()],n.prototype,"searchTemplate",void 0),t.__decorate([r.property({json:{write:!0}})],n.prototype,"singleLineFieldName",void 0),t.__decorate([r.property({json:{read:{source:"suggest"},write:{target:"suggest"}}})],n.prototype,"suggestionsEnabled",void 0),t.__decorate([r.property({json:{write:!0}})],n.prototype,"url",void 0),t.__decorate([r.property({json:{write:!0}})],n.prototype,"zoomScale",void 0),n=p=t.__decorate([i.subclass(c)],n);return n}));
