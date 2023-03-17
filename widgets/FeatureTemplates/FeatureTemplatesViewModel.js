/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Evented","../../core/HandleOwner","../../core/maybe","../../core/ObjectPool","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../layers/support/layerUtils","./TemplateItem","./TemplateItemGroup"],(function(e,t,r,o,s,l,n,a,i,u,p,c,y,m){"use strict";var f;const h=({layer:e})=>({key:e,label:e.title??""}),_=({layer:e})=>({key:e.geometryType,label:e.geometryType??""});let d=f=function(t){function r(e){var r;return(r=t.call(this,e)||this)._itemPool=new l(y),r._groupPool=new l(m),r.filterFunction=null,r.selectedItem=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this._get("groupBy")||(this.groupBy="layer")},o.refresh=function(){this.notifyChange("items")},o.select=function(e,t=!0){const r=this.selectedItem,o=e?.clone()||null;this._set("selectedItem",o),t&&this.emit("select",{item:o,oldItem:r,template:o?.template??null})},o._createItem=function(e,t){const r=this._itemPool.acquire();return r.set({template:e,layer:t}),r},o._createGroup=function(e,t){const r=this._groupPool.acquire();return r.set("label",e),r.items=t,r},o._releasePreviousItems=function(){this._destroyItems(this._get("items"))},o._destroyItems=function(e){if(!e)return;e[0]instanceof y?e.forEach((e=>this._destroyItem(e))):e.forEach((e=>this._destroyGroup(e)))},o._destroyGroup=function(e){e.items.forEach((e=>this._destroyItem(e))),e.items.length=0,this._groupPool.release(e)},o._destroyItem=function(e){e.layer=null,e.template=null,this._itemPool.release(e)},o._ensureGroupByObject=function(e){return"string"==typeof e?{key:e,label:e}:e},e._createClass(r,[{key:"groupBy",set:function(e){if(this._set("groupBy",e),"function"!=typeof e)switch(e){case"layer":this._groupByFunction=h;break;case"geometry":this._groupByFunction=_;break;default:this._groupByFunction=null}else this._groupByFunction=t=>this._ensureGroupByObject(e(t))}},{key:"layers",get:function(){return this._get("layers")},set:function(e){const t="layers";if(this.handles.remove(t),e){const r=()=>this.notifyChange("state");this.handles.add(e.map((e=>n.when((()=>e.loadStatus),r))),t)}this._set("layers",e)}},{key:"state",get:function(){const{layers:e}=this;return e&&0!==e.length?e.some((e=>"loading"===e.loadStatus||"not-loaded"===e.loadStatus))?"loading":"ready":"disabled"}},{key:"_featureTemplatesByLayer",get:function(){if(!this.layers)return new Map;const e=[];for(const t of this.layers)if("subtype-group"===t.type)for(const r of t.sublayers){const t=g(r);e.push([r,t])}else e.push([t,g(t)]);return new Map(e)}},{key:"numberOfFeatureTemplates",get:function(){return Array.from(this._featureTemplatesByLayer.values()).reduce(((e,t)=>e+t.length),0)}},{key:"items",get:function(){if(0===this.numberOfFeatureTemplates)return this._releasePreviousItems(),[];const e=this._featureTemplatesByLayer,t=[],r=s.isSome(this.filterFunction)?this.filterFunction:f._nullFilterFunction;for(const[s,n]of e)if(s.loaded||"subtype-sublayer"===s.type&&s.parent?.loaded){const e=c.getEffectiveLayerCapabilities(s)?.operations;if(e?.supportsEditing&&e?.supportsAdd)for(const o of n)t.push({layer:s,template:o,matchesFilter:r({label:o.name})})}if(s.isNone(this._groupByFunction)){const e=t.filter((({matchesFilter:e})=>e)).map((({template:e,layer:t})=>this._createItem(e,t)));return this._releasePreviousItems(),e}const o=new Map;for(const n of t){const{template:e,layer:t}=n,r=this._groupByFunction({template:e,layer:t}),{key:l,label:a}=s.isSome(r.key)?r:f.nullGroupBy;o.has(l)||o.set(l,{label:a,templateItemInfos:[]}),o.get(l)?.templateItemInfos.push(n)}const l=[];for(const s of o.values()){const{label:e,templateItemInfos:t}=s,o=t.filter((({matchesFilter:e})=>e)),n=r({label:e})?t:t.length>0?o:[];if(n.length>0){const t=n.map((({template:e,layer:t})=>this._createItem(e,t)));l.push(this._createGroup(e,t))}}return 1===l.length&&l[0].label===f.nullGroupBy.label?(this._releasePreviousItems(),l[0].items):(this._releasePreviousItems(),l)}}]),r}(o.HandleOwnerMixin(r.EventedAccessor));d.nullGroupBy={key:Symbol(),label:"Other​"},d._nullFilterFunction=e=>!0,t.__decorate([a.property()],d.prototype,"_groupByFunction",void 0),t.__decorate([a.property()],d.prototype,"filterFunction",void 0),t.__decorate([a.property()],d.prototype,"groupBy",null),t.__decorate([a.property()],d.prototype,"layers",null),t.__decorate([a.property()],d.prototype,"state",null),t.__decorate([a.property({readOnly:!0})],d.prototype,"_featureTemplatesByLayer",null),t.__decorate([a.property({readOnly:!0})],d.prototype,"numberOfFeatureTemplates",null),t.__decorate([a.property({readOnly:!0})],d.prototype,"items",null),t.__decorate([a.property({readOnly:!0})],d.prototype,"selectedItem",void 0),t.__decorate([a.property()],d.prototype,"select",null),d=f=t.__decorate([p.subclass("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")],d);const g=e=>[..."templates"in e&&Array.isArray(e.templates)?e.templates:[],..."types"in e&&Array.isArray(e.types)?e.types.flatMap((e=>e.templates)):[]];return d}));
