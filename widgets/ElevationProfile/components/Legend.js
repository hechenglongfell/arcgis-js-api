/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Collection","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../Widget","../css","./LegendItem","../../support/widgetUtils","../../support/jsxFactory"],(function(e,t,i,n,o,r,s,d,a,c,p,l,_,u){"use strict";e.Legend=function(e){function i(t,i){var o;return(o=e.call(this,t,i)||this)._items=new n,o._expandedLine=null,o}t._inheritsLoose(i,e);var r=i.prototype;return r.initialize=function(){this.addHandles([o.watch((()=>this.profiles),(e=>{this._destroyItems(),this._items.addMany(e.map((e=>this._createItemForLine(e))))}),o.initial),o.watch((()=>this.effectiveUnits),(e=>{this._items.forEach((t=>{t.effectiveUnits=e}))}),o.initial)])},r.destroy=function(){this._destroyItems()},r.render=function(){return u.tsx("div",{class:p.LEGEND_CSS.base},this._items.toArray().map((e=>e.render())))},r._onExpandedToggle=function(e){this._expandedLine=e===this._expandedLine?null:e,this._items.forEach((e=>e.expanded=e.line===this._expandedLine))},r._createItemForLine=function(e){return new l.LegendItem({line:e,effectiveUnits:this.effectiveUnits,expanded:e===this._expandedLine,checkboxVisible:this.profiles.length>1,onExpandedToggle:()=>this._onExpandedToggle(e)})},r._destroyItems=function(){this._items.drain((e=>e.destroy()))},i}(c),i.__decorate([r.property()],e.Legend.prototype,"profiles",void 0),i.__decorate([r.property()],e.Legend.prototype,"effectiveUnits",void 0),i.__decorate([r.property()],e.Legend.prototype,"_items",void 0),i.__decorate([r.property()],e.Legend.prototype,"_expandedLine",void 0),e.Legend=i.__decorate([a.subclass("esri.widgets.ElevationProfile.Legend")],e.Legend),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
