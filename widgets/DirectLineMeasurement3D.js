/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/promiseUtils","../core/unitUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Widget","./DirectLineMeasurement3D/DirectLineMeasurement3DViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","../core/Logger","./support/jsxFactory","./support/widgetUtils"],(function(e,t,s,i,n,r,a,o,l,c,u,d,p,m,_,v,b){"use strict";const y="esri-direct-line-measurement-3d",h={buttonDisabled:"esri-button--disabled",base:`${y} esri-widget esri-widget--panel`,container:`${y}__container`,hint:`${y}__hint`,hintText:`${y}__hint-text`,panelError:`${y}__panel--error`,measurement:`${y}__measurement`,measurementItem:`${y}__measurement-item`,measurementItemDisabled:`${y}__measurement-item--disabled`,measurementItemTitle:`${y}__measurement-item-title`,measurementItemValue:`${y}__measurement-item-value`,settings:`${y}__settings`,units:`${y}__units`,unitsLabel:`${y}__units-label`,unitsSelect:`${y}__units-select esri-select`,unitsSelectWrapper:`${y}__units-select-wrapper`,actionSection:`${y}__actions`,newMeasurementButton:`${y}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-line"};let g=function(t){function n(e,s){var i;return(i=t.call(this,e,s)||this).view=null,i.visible=null,i.iconClass=h.widgetIcon,i.label=void 0,i.messages=null,i.messagesUnits=null,i.viewModel=new d,i.unitOptions=null,i.unit=null,i}e._inheritsLoose(n,t);var r=n.prototype;return r.render=function(){const{supported:e,active:t,state:s,measurement:n,unit:r}=this.viewModel,a="disabled"===s,o="ready"===s,l="measuring"===s||"measured"===s,{messages:c,messagesUnits:u}=this,d=t&&o?v.tsx("section",{key:"esri-direct-line-measurement-3d__hint",class:h.hint},v.tsx("p",{class:h.hintText},c.hint)):null,p=e?null:v.tsx("section",{key:"esri-direct-line-measurement-3d__unsupported",class:h.panelError},v.tsx("p",null,c.unsupported)),m=(e,t,s)=>{switch(t.state){case"available":return v.tsx("div",{key:`${s}-enabled`,class:h.measurementItem},v.tsx("span",{class:h.measurementItemTitle},e),v.tsx("span",{class:h.measurementItemValue},t.text));case"unavailable":return v.tsx("div",{key:`${s}-disabled`,class:this.classes(h.measurementItem,h.measurementItemDisabled)},v.tsx("span",{class:h.measurementItemTitle},e))}},_=l?v.tsx("section",{key:"esri-direct-line-measurement-3d__measurement",class:h.measurement},m(c.direct,n.directDistance,"direct"),m(c.horizontal,n.horizontalDistance,"horizontal"),m(c.vertical,n.verticalDistance,"vertical")):null,b=`${this.id}__units`,y=v.tsx("label",{class:h.unitsLabel,for:b},c.unit),g=v.tsx("div",{class:h.unitsSelectWrapper},v.tsx("select",{class:h.unitsSelect,id:b,onchange:this._changeUnit,bind:this,value:r},this.viewModel.unitOptions.map((e=>{var t;return v.tsx("option",{key:e,value:e},i.isMeasurementSystem(e)?u.systems[e]:null==(t=u.units[e])?void 0:t.pluralCapitalized)})))),w=v.tsx("section",{key:"esri-direct-line-measurement-3d__units",class:h.units},y,g),x=l?v.tsx("div",{key:"settings",class:h.settings},w):null,M=!e||t&&!l?null:v.tsx("div",{class:h.actionSection},v.tsx("button",{disabled:a,class:this.classes(h.newMeasurementButton,a&&h.buttonDisabled),bind:this,onclick:this._newMeasurement,type:"button"},c.newMeasurement)),$=this.visible?v.tsx("div",{class:h.container},p,d,x,_,M):null;return v.tsx("div",{key:this,class:h.base,role:"presentation"},$)},r._newMeasurement=function(){s.ignoreAbortErrors(this.viewModel.start())},r._changeUnit=function(e){const t=e.target,s=t.options[t.selectedIndex];s&&(this.unit=s.value)},n}(u);t.__decorate([n.aliasOf("viewModel.view")],g.prototype,"view",void 0),t.__decorate([n.aliasOf("viewModel.visible")],g.prototype,"visible",void 0),t.__decorate([n.aliasOf("viewModel.active")],g.prototype,"active",void 0),t.__decorate([l.property()],g.prototype,"iconClass",void 0),t.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0),t.__decorate([l.property(),m.messageBundle("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],g.prototype,"messages",void 0),t.__decorate([l.property(),m.messageBundle("esri/core/t9n/Units")],g.prototype,"messagesUnits",void 0),t.__decorate([l.property()],g.prototype,"uiStrings",void 0),t.__decorate([l.property({type:d})],g.prototype,"viewModel",void 0),t.__decorate([n.aliasOf("viewModel.unitOptions")],g.prototype,"unitOptions",void 0),t.__decorate([n.aliasOf("viewModel.unit")],g.prototype,"unit",void 0),t.__decorate([p.accessibleHandler()],g.prototype,"_newMeasurement",null),t.__decorate([p.accessibleHandler()],g.prototype,"_changeUnit",null),g=t.__decorate([c.subclass("esri.widgets.DirectLineMeasurement3D")],g);return g}));
