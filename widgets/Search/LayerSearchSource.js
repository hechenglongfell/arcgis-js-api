/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./SearchSource","./support/layerSearchUtils"],(function(e,t,r,s,i,l,a,o,n,c){"use strict";var u;let d=u=function(t){function s(r){var s;return(s=t.call(this,r)||this).displayField=null,s.exactMatch=null,s.orderByFields=null,s.searchFields=null,s.searchTemplate=null,s.suggestionTemplate=null,s.getResults=(t,r)=>c.getResults({source:e._assertThisInitialized(s),...t},r),s.getSuggestions=(t,r)=>c.getSuggestions({source:e._assertThisInitialized(s),...t},r),s}e._inheritsLoose(s,t);var i=s.prototype;return i.clone=function(){return new u({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?r.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?r.clone(this.searchFields):null,suggestionTemplate:this.suggestionTemplate,zoomScale:this.zoomScale})},i._getFirstStringField=function(){var e,t;return null!=(e=null==(t=this.layer.fieldsIndex.fields.find((e=>"string"===e.type)))?void 0:t.name)?e:""},i._getDisplayField=function(){return this.displayField||this.layer.displayField||this._getFirstStringField()},i._getSearchFieldsString=function(){const{layer:e,searchFields:t}=this;if(!e.loaded)return"";return`: ${(t||[this._getDisplayField()]).map((t=>{const r=e.getField(t);return r&&r.alias||t})).join(", ")}`},i._getLayerTitle=function(){const{layer:e}=this;if(!e)return;const{title:t}=e;return t?`${t}${this._getSearchFieldsString()}`:void 0},e._createClass(s,[{key:"layer",set:function(e){this._set("layer",e),e&&e.load().catch((()=>{}))}},{key:"name",get:function(){return this._getLayerTitle()||""},set:function(e){void 0!==e?this._override("name",e):this._clearOverride("name")}}]),s}(n);return t.__decorate([s.property({json:{read:{source:"field.name"},write:{target:"field.name"}}})],d.prototype,"displayField",void 0),t.__decorate([s.property({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],d.prototype,"exactMatch",void 0),t.__decorate([s.property({value:null})],d.prototype,"layer",null),t.__decorate([s.property()],d.prototype,"name",null),t.__decorate([s.property({type:[String],json:{write:!0}})],d.prototype,"orderByFields",void 0),t.__decorate([s.property()],d.prototype,"searchFields",void 0),t.__decorate([s.property()],d.prototype,"searchTemplate",void 0),t.__decorate([s.property()],d.prototype,"suggestionTemplate",void 0),d=u=t.__decorate([o.subclass("esri.widgets.Search.LayerSearchSource")],d),d}));
