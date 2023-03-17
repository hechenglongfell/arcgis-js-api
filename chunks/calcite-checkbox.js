/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./index","./dom","./form","./interactive","./key","./label2","./loadable"],(function(e,t,i,a,n,o,c,s){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */const l="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",r=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalCheckboxBlur=t.createEvent(this,"calciteInternalCheckboxBlur",6),this.calciteCheckboxChange=t.createEvent(this,"calciteCheckboxChange",6),this.calciteInternalCheckboxFocus=t.createEvent(this,"calciteInternalCheckboxFocus",6),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=e=>{o.isActivationKey(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()},this.checked=!1,this.disabled=!1,this.guid=void 0,this.hovered=!1,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}async setFocus(){await s.componentLoaded(this),this.toggleEl?.focus()}syncHiddenFormInput(e){e.type="checkbox"}connectedCallback(){this.guid=this.el.id||`calcite-checkbox-${i.guid()}`,c.connectLabel(this),a.connectForm(this)}disconnectedCallback(){c.disconnectLabel(this),a.disconnectForm(this)}componentWillLoad(){s.setUpLoadableComponent(this)}componentDidLoad(){s.setComponentLoaded(this)}componentDidRender(){n.updateHostInteraction(this)}render(){return t.h(t.Host,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t.h("div",{"aria-checked":i.toAriaBoolean(this.checked),"aria-label":c.getLabelText(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:e=>this.toggleEl=e,role:"checkbox",tabIndex:this.disabled?void 0:0},t.h("svg",{"aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},t.h("path",{d:this.getPath()})),t.h("slot",null)),t.h(a.HiddenFormInputSlot,{component:this}))}get el(){return this}static get style(){return l}},[1,"calcite-checkbox",{checked:[1540],disabled:[516],guid:[1537],hovered:[1540],indeterminate:[1540],label:[1],name:[520],required:[516],scale:[513],value:[8],setFocus:[64]}]);function h(){if("undefined"==typeof customElements)return;["calcite-checkbox"].forEach((e=>{if("calcite-checkbox"===e)customElements.get(e)||customElements.define(e,r)}))}h();
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */
const d=r,m=h;e.CalciteCheckbox=d,e.defineCustomElement=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
