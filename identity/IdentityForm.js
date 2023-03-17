/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../intl/substitute","../widgets/Widget","../widgets/support/widgetUtils","../widgets/support/decorators/messageBundle","../widgets/support/jsxFactory"],(function(e,t,s,r,o,i,n,u,a,l,p){"use strict";const d="esri-identity-form",c={base:d,group:`${d}__group`,label:`${d}__label`,footer:`${d}__footer`,esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},_="ArcGIS Online";let h=function(t){function s(e,s){var r;return(r=t.call(this,e,s)||this)._usernameInputNode=null,r._passwordInputNode=null,r.signingIn=!1,r.server=null,r.resource=null,r.error=null,r.oAuthPrompt=!1,r}e._inheritsLoose(s,t);var r=s.prototype;return r.render=function(){const{error:e,server:t,resource:s,signingIn:r,oAuthPrompt:o,messages:i}=this,u=p.tsx("div",{class:c.group},n.substitute(o?i.oAuthInfo:i.info,{server:t&&/\.arcgis\.com/i.test(t)?_:t,resource:`(${s||i.lblItem})`})),l=o?null:p.tsx("div",{class:c.group,key:"username"},p.tsx("label",{class:c.label},i.lblUser,p.tsx("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:a.storeNode,"data-node-ref":"_usernameInputNode",class:c.esriInput}))),d=o?null:p.tsx("div",{class:c.group,key:"password"},p.tsx("label",{class:c.label},i.lblPwd,p.tsx("input",{value:"",required:!0,type:"password",bind:this,afterCreate:a.storeNode,"data-node-ref":"_passwordInputNode",class:c.esriInput}))),h=p.tsx("div",{class:this.classes(c.group,c.footer)},p.tsx("input",{type:"submit",disabled:!!r,value:r?i.lblSigning:i.lblOk,class:c.esriButton}),p.tsx("input",{type:"button",value:i.lblCancel,bind:this,onclick:this._cancel,class:this.classes(c.esriButton,c.esriButtonSecondary)})),b=e?p.tsx("div",null,e.details&&e.details.httpStatus?i.invalidUser:i.noAuthService):null;return p.tsx("form",{class:c.base,bind:this,onsubmit:this._submit},u,b,l,d,h)},r._cancel=function(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")},r._submit=function(e){e.preventDefault(),this._set("signingIn",!0);const t=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",t)},s}(u);t.__decorate([s.property(),l.messageBundle("esri/identity/t9n/identity")],h.prototype,"messages",void 0),t.__decorate([s.property()],h.prototype,"signingIn",void 0),t.__decorate([s.property()],h.prototype,"server",void 0),t.__decorate([s.property()],h.prototype,"resource",void 0),t.__decorate([s.property()],h.prototype,"error",void 0),t.__decorate([s.property()],h.prototype,"oAuthPrompt",void 0),h=t.__decorate([i.subclass("esri.identity.IdentityForm")],h);return h}));
