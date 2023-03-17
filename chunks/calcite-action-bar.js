/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./index","./conditionalSlot","./dom","./loadable","./locale","./observers","./t9n","./ExpandToggle","./action","./action-group","./action-menu","./icon","./loader","./popover","./debounce"],(function(e,t,i,o,n,a,s,c,l,r,d,h,p,m,u,g){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */const f={actionGroupBottom:"action-group--bottom"},b={bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{pointer-events:auto;display:inline-flex;align-self:stretch;background:transparent;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=horizontal]){flex-direction:row}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-width:0px;border-inline-end-width:1px;border-style:solid}::slotted(calcite-action-group:last-child){border-block-end-width:0px;border-inline-end-width:0px}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px;padding-inline-end:0px}",x=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=t.createEvent(this,"calciteActionBarToggle",6),this.mutationObserver=s.createObserver("mutation",(()=>{const{el:e,expanded:t}=this;l.toggleChildActionText({parent:e,expanded:t}),this.conditionallyOverflowActions()})),this.resizeObserver=s.createObserver("resize",(e=>this.resizeHandlerEntries(e))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:i}=e.contentRect;this.resize({width:t,height:i})},this.resize=g.debounce((({width:e,height:t})=>{const{el:i,expanded:n,expandDisabled:a,layout:s}=this;if("vertical"===s&&!t||"horizontal"===s&&!e)return;const c=l.queryActions(i),r=a?c.length:c.length+1,d=Array.from(i.querySelectorAll("calcite-action-group")),h=o.getSlotted(i,b.bottomActions)||!a?d.length+1:d.length,{actionHeight:p,actionWidth:m}=l.geActionDimensions(c),u=l.getOverflowCount({layout:s,actionCount:r,actionHeight:p,actionWidth:m,height:t,width:e,groupCount:h});l.overflowActions({actionGroups:d,expanded:n,overflowCount:u})}),l.overflowActionsDebounceInMs),this.conditionallyOverflowActions=()=>{this.overflowActionsDisabled||this.overflowActions()},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}expandHandler(){this.conditionallyOverflowActions()}expandedHandler(e){l.toggleChildActionText({parent:this.el,expanded:e}),this.conditionallyOverflowActions()}overflowDisabledHandler(e){e?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)}onMessagesChange(){}effectiveLocaleChange(){c.updateMessages(this,this.effectiveLocale)}componentDidLoad(){n.setComponentLoaded(this),this.conditionallyOverflowActions()}connectedCallback(){const{el:e,expanded:t}=this;a.connectLocalized(this),c.connectMessages(this),l.toggleChildActionText({parent:e,expanded:t}),this.mutationObserver?.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(e),this.conditionallyOverflowActions(),i.connectConditionalSlotComponent(this)}async componentWillLoad(){n.setUpLoadableComponent(this),await c.setUpMessages(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),i.disconnectConditionalSlotComponent(this),a.disconnectLocalized(this),c.disconnectMessages(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await n.componentLoaded(this),this.el?.focus()}renderBottomActionGroup(){const{expanded:e,expandDisabled:i,el:n,position:a,toggleExpand:s,scale:c,layout:r,messages:d}=this,h=o.getSlotted(n,b.expandTooltip),p=i?null:t.h(l.ExpandToggle,{el:n,expanded:e,intlCollapse:d.collapse,intlExpand:d.expand,position:a,ref:this.setExpandToggleRef,scale:c,toggle:s,tooltip:h});return o.getSlotted(n,b.bottomActions)||p?t.h("calcite-action-group",{class:f.actionGroupBottom,layout:r,scale:c},t.h("slot",{name:b.bottomActions}),t.h("slot",{name:b.expandTooltip}),p):null}render(){return t.h(t.Host,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},t.h("slot",null),this.renderBottomActionGroup())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return v}},[17,"calcite-action-bar",{expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]}]);function y(){if("undefined"==typeof customElements)return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,x);break;case"calcite-action":customElements.get(e)||r.defineCustomElement();break;case"calcite-action-group":customElements.get(e)||d.defineCustomElement();break;case"calcite-action-menu":customElements.get(e)||h.defineCustomElement();break;case"calcite-icon":customElements.get(e)||p.defineCustomElement();break;case"calcite-loader":customElements.get(e)||m.defineCustomElement();break;case"calcite-popover":customElements.get(e)||u.defineCustomElement()}}))}y();const w=x,A=y;e.CalciteActionBar=w,e.defineCustomElement=A,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
