/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils","./dom","./key","./observers","./calcite-icon2","./calcite-loader2","./calcite-scrim2"],(function(e,t,i,a,o,s,r,n){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */function l(e,t,i,a=20,o=0){let s=[];if(o>=a)return s;const r=e=>{const s=e.assignedNodes().filter((e=>1===e.nodeType));return s.length>0?l(s[0].parentElement,t,i,a,o+1):[]},n=Array.from(e.children||[]);for(const c of n)t(c)||(i(c)&&s.push(c),null!=c.shadowRoot?s.push(...l(c.shadowRoot,t,i,a,o+1)):"SLOT"===c.tagName?s.push(...r(c)):s.push(...l(c,t,i,a,o+1)));return s}function c(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function d(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}function m(e){return"-1"!==e.getAttribute("tabindex")&&!c(e)&&!d(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}const h={title:"title",header:"header",footer:"footer",scrim:"scrim",back:"back",close:"close",secondary:"secondary",primary:"primary",overflowHidden:"overflow-hidden"},b={close:"x"},u={content:"content",header:"header",back:"back",secondary:"secondary",primary:"primary"},f={close:"Close"},p="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101}:host([scale=s]){--calcite-modal-padding:0.75rem;--calcite-modal-padding-large:1rem;--calcite-modal-title-text:var(--calcite-font-size-1);--calcite-modal-content-text:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding:1rem;--calcite-modal-padding-large:1.25rem;--calcite-modal-title-text:var(--calcite-font-size-2);--calcite-modal-content-text:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding:1.25rem;--calcite-modal-padding-large:1.5rem;--calcite-modal-title-text:var(--calcite-font-size-3);--calcite-modal-content-text:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:rgba(0, 0, 0, 0.75);position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);-webkit-box-sizing:border-box;box-sizing:border-box;float:none;margin:1.5rem;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);width:100%;opacity:0;pointer-events:none;overflow:hidden;z-index:102;-webkit-overflow-scrolling:touch;visibility:hidden;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}:host([active]){opacity:1;visibility:visible !important;-webkit-transition-delay:0ms;transition-delay:0ms}:host([active]) .modal{opacity:1;pointer-events:auto;visibility:visible;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transition-delay:0ms;transition-delay:0ms}.header{display:-ms-flexbox;display:flex;max-width:100%;min-width:0;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;z-index:2}.close{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;color:var(--calcite-ui-text-3);-ms-flex-order:2;order:2;cursor:pointer;border-top-right-radius:0.25rem;background-color:transparent;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-modal-padding);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.calcite--rtl .close{border-top-left-radius:0.25rem;border-top-right-radius:0}.title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-order:1;order:1;min-width:0;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text)}.content{position:relative;padding:0;height:100%;overflow:auto;display:block;background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;max-height:calc(100vh - 12rem);z-index:1}.content--spaced{padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}.content--no-footer{border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text)}:host([background-color=grey]) .content{background-color:var(--calcite-ui-background)}.footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;width:100%;background-color:var(--calcite-ui-foreground-1);border-width:0;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);-ms-flex:0 0 auto;flex:0 0 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large);z-index:2}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-right:auto}.calcite--rtl .back{margin-left:auto;margin-right:0}.secondary{display:block;margin-left:0.25rem;margin-right:0.25rem}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=s]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=m]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=l]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95)}:host([fullscreen]) .content{max-height:100%;-ms-flex:1 1 auto;flex:1 1 auto}:host([active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([active][fullscreen]) .header{border-radius:0}:host([active][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{height:auto}:host([docked]) .content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked]) .calcite--rtl .close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-color:var(--calcite-ui-danger)}:host([color=blue]) .modal{border-color:var(--calcite-ui-info)}:host([color=red]) .modal,:host([color=blue]) .modal{border-width:0;border-top-width:4px;border-style:solid}:host([color=red]) .header,:host([color=blue]) .header{border-radius:0.25rem;border-bottom-right-radius:0;border-bottom-left-radius:0}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.footer{-ms-flex-direction:column;flex-direction:column}.calcite--rtl .back,.back,.secondary{margin:0;margin-bottom:0.25rem}}",x=e=>i.isCalciteFocusable(e)||m(e),g=e=>l(e,c,x);let y=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteModalOpen=t.createEvent(this,"calciteModalOpen",7),this.calciteModalClose=t.createEvent(this,"calciteModalClose",7),this.active=!1,this.beforeClose=()=>Promise.resolve(),this.disableCloseButton=!1,this.disableOutsideClose=!1,this.intlClose=f.close,this.disableEscape=!1,this.scale="m",this.width="m",this.backgroundColor="white",this.noPadding=!1,this.hasFooter=!0,this.mutationObserver=o.createObserver("mutation",(()=>this.updateFooterVisibility())),this.activeTransitionProp="opacity",this.transitionEnd=e=>{e.propertyName===this.activeTransitionProp&&(this.active?this.calciteModalOpen.emit():this.calciteModalClose.emit())},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleOutsideClose=()=>{this.disableOutsideClose||this.close()},this.close=()=>this.beforeClose(this.el).then((()=>{this.active=!1,i.focusElement(this.previousActiveElement),this.removeOverflowHiddenClass()})),this.focusFirstElement=()=>{i.focusElement(this.closeButtonEl)},this.focusLastElement=()=>{const e=g(this.el).filter((e=>!e.getAttribute("data-focus-fence")));e.length>0?i.focusElement(e[e.length-1]):i.focusElement(this.closeButtonEl)},this.updateFooterVisibility=()=>{this.hasFooter=!!this.el.querySelector(`[slot=${u.back}], [slot=${u.secondary}], [slot=${u.primary}]`)}}componentWillLoad(){this.active&&this.open()}connectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),this.updateFooterVisibility()}disconnectedCallback(){var e;this.removeOverflowHiddenClass(),null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){const e=i.getElementDir(this.el);return t.h(t.Host,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},t.h("calcite-scrim",{class:h.scrim,onClick:this.handleOutsideClose}),this.renderStyle(),t.h("div",{class:{modal:!0,[i.CSS_UTILITY.rtl]:"rtl"===e},onTransitionEnd:this.transitionEnd},t.h("div",{"data-focus-fence":!0,onFocus:this.focusLastElement,tabindex:"0"}),t.h("div",{class:h.header},this.renderCloseButton(),t.h("header",{class:h.title},t.h("slot",{name:h.header}))),t.h("div",{class:{content:!0,"content--spaced":!this.noPadding,"content--no-footer":!this.hasFooter},ref:e=>this.modalContent=e},t.h("slot",{name:u.content})),this.renderFooter(),t.h("div",{"data-focus-fence":!0,onFocus:this.focusFirstElement,tabindex:"0"})))}renderFooter(){return this.hasFooter?t.h("div",{class:h.footer},t.h("span",{class:h.back},t.h("slot",{name:u.back})),t.h("span",{class:h.secondary},t.h("slot",{name:u.secondary})),t.h("span",{class:h.primary},t.h("slot",{name:u.primary}))):null}renderCloseButton(){return this.disableCloseButton?null:t.h("button",{"aria-label":this.intlClose,class:h.close,onClick:this.close,ref:e=>this.closeButtonEl=e,title:this.intlClose},t.h("calcite-icon",{icon:b.close,scale:"s"===this.scale?"s":"l"}))}renderStyle(){return!isNaN(parseInt(`${this.width}`))?t.h("style",null,`\n        .modal {\n          max-width: ${this.width}px !important;\n        }\n        @media screen and (max-width: ${this.width}px) {\n          .modal {\n            height: 100% !important;\n            max-height: 100% !important;\n            width: 100% !important;\n            max-width: 100% !important;\n            margin: 0 !important;\n            border-radius: 0 !important;\n          }\n          .content {\n            flex: 1 1 auto !important;\n            max-height: unset !important;\n          }\n        }\n      `):null}handleEscape(e){this.active&&!this.disableEscape&&"Escape"===a.getKey(e.key)&&this.close()}async focusElement(e){return e&&e.focus(),this.setFocus()}async setFocus(e){const t=this.closeButtonEl;return i.focusElement("close-button"===e?t:g(this.el)[0]||t)}async scrollContent(e=0,t=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:e,left:t,behavior:"smooth"}):(this.modalContent.scrollTop=e,this.modalContent.scrollLeft=t))}async toggleModal(e,t){e!==t&&(e?this.open():e||this.close())}open(){this.previousActiveElement=document.activeElement,this.el.addEventListener("calciteModalOpen",this.openEnd),this.active=!0;const e=i.getSlotted(this.el,u.header),t=i.getSlotted(this.el,u.content);this.titleId=i.ensureId(e),this.contentId=i.ensureId(t),document.documentElement.classList.add(h.overflowHidden)}removeOverflowHiddenClass(){document.documentElement.classList.remove(h.overflowHidden)}get el(){return this}static get watchers(){return{active:["toggleModal"]}}static get style(){return p}};function w(){["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-modal":customElements.get(e)||customElements.define(e,y);break;case"calcite-icon":customElements.get(e)||s.defineCustomElement();break;case"calcite-loader":customElements.get(e)||r.defineCustomElement();break;case"calcite-scrim":customElements.get(e)||n.defineCustomElement()}}))}y=t.proxyCustomElement(y,[1,"calcite-modal",{active:[1540],beforeClose:[16],disableCloseButton:[4,"disable-close-button"],disableOutsideClose:[4,"disable-outside-close"],intlClose:[1,"intl-close"],docked:[516],firstFocus:[16],disableEscape:[4,"disable-escape"],scale:[513],width:[520],fullscreen:[516],color:[513],backgroundColor:[513,"background-color"],noPadding:[4,"no-padding"],hasFooter:[32],focusElement:[64],setFocus:[64],scrollContent:[64]},[[8,"keyup","handleEscape"]]]),w();const v=y,k=w;e.CalciteModal=v,e.defineCustomElement=k}));
