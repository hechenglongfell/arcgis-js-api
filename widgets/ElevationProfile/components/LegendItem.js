/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../intl","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../Widget","../css","./Statistics","../support/intlUtils","../../support/widgetUtils","../../support/decorators/messageBundle","../../../core/Logger","../../support/jsxFactory","../../../intl/substitute"],(function(e,t,s,i,o,r,n,l,a,c,d,p,_,h,g,u,b,E,y){"use strict";e.LegendItem=function(e){function s(t,s){var i;return(i=e.call(this,t,s)||this).expanded=!1,i.checkboxVisible=!0,i._messages=null,i}t._inheritsLoose(s,e);var i=s.prototype;return i.initialize=function(){this._statistics=new _.Statistics(this._statisticsProps),this.own(this.watch("_statisticsProps",(e=>{this._statistics.set(e)})))},i.destroy=function(){this._statistics=o.destroyMaybe(this._statistics)},i.render=function(){const e=this.expanded;return E.tsx("div",{key:this,class:this.classes(p.LEGEND_ITEM_CSS.base,{[p.LEGEND_ITEM_CSS.disabled]:this.disabled,[p.LEGEND_ITEM_CSS.expanded]:e})},this._renderColorIndicator(),E.tsx("div",{key:"header",class:p.LEGEND_ITEM_CSS.header},this._renderLabelWithCheckbox(),this._renderCollapseToggleButton()),e&&E.tsx("div",{key:"content",class:p.LEGEND_ITEM_CSS.content},this._statistics.render()))},i._renderColorIndicator=function(){return E.tsx("div",{key:"color-indicator",class:p.LEGEND_ITEM_CSS.colorIndicator,styles:{backgroundColor:this.line.color.toCss()}})},i._renderCollapseToggleButton=function(){const e=this._messages,t=this.expanded?e.hideDetails:e.showDetails;return E.tsx("button",{key:"collapse-toggle",bind:this,class:p.LEGEND_ITEM_CSS.collapseToggle,onclick:this._onCollapseToggleClick,title:t,"aria-label":t,type:"button"},E.tsx("span",{class:p.LEGEND_ITEM_CSS.collapseToggleIcon}))},i._onCollapseToggleClick=function(){this.onExpandedToggle()},i._renderLabelWithCheckbox=function(){const{line:e,checkboxVisible:t,disabled:s}=this,i=`${p.LEGEND_ITEM_CSS.base}__check-${e.id}`;return E.tsx("label",{key:"id",for:i,class:this.classes(p.LEGEND_ITEM_CSS.label,{[p.LEGEND_ITEM_CSS.labelDisabled]:s||!t})},t&&this._renderCheckbox(i),E.tsx("span",null,h.getTranslatedLineTitle(e,this._messages)))},i._renderCheckbox=function(e){const t=this.line,s=t.visible,i=this.disabled,o=this._messages,r=s?o.hideProfile:o.showProfile,n=h.getTranslatedLineTitle(t,this._messages),l=y.substitute(r,{name:n});return E.tsx("input",{key:"checkbox",id:e,type:"checkbox",class:p.LEGEND_ITEM_CSS.checkbox,title:l,checked:s,disabled:i,"aria-label":l,bind:this,onchange:e=>this._onCheckboxToggle(e,t)})},i._onCheckboxToggle=function(e,t){e.stopPropagation(),t.toggleVisibility()},t._createClass(s,[{key:"disabled",get:function(){return!this.line.available}},{key:"_statisticsProps",get:function(){return{line:this.line,effectiveUnits:this.effectiveUnits}}}]),s}(d),s.__decorate([r.property({nonNullable:!0})],e.LegendItem.prototype,"effectiveUnits",void 0),s.__decorate([r.property({nonNullable:!0})],e.LegendItem.prototype,"line",void 0),s.__decorate([r.property()],e.LegendItem.prototype,"expanded",void 0),s.__decorate([r.property()],e.LegendItem.prototype,"disabled",null),s.__decorate([r.property()],e.LegendItem.prototype,"checkboxVisible",void 0),s.__decorate([r.property()],e.LegendItem.prototype,"onExpandedToggle",void 0),s.__decorate([r.property()],e.LegendItem.prototype,"_statistics",void 0),s.__decorate([r.property(),u.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],e.LegendItem.prototype,"_messages",void 0),e.LegendItem=s.__decorate([c.subclass("esri.widgets.ElevationProfile.LegendItem")],e.LegendItem),Object.defineProperty(e,"__esModule",{value:!0})}));
