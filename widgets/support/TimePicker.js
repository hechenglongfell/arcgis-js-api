/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../core/events","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../Widget","./TimePickerViewModel","./widgetUtils","./decorators/messageBundle","./jsxFactory","../../chunks/datetime","../../intl/date","../../intl/locale"],(function(e,t,i,n,s,r,a,o,u,c,l,h,m,d,_,p){"use strict";const f="esri-time-picker",v={base:`${f} esri-widget`,timePicker:`${f}__date-picker`,timePickerInput:`${f}__input`,input:"esri-input",button:"esri-widget--button"},P={hour:"numeric",minute:"numeric"},g="t",T=["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Tab"];function w(e){return null!=e&&_.formatDate(e.valueOf(),P).includes(" ")}let y=function(t){function i(e,i){var n;return(n=t.call(this,e,i)||this)._activePart=null,n._activeTime=null,n.messages=null,n.viewModel=new c,n}e._inheritsLoose(i,t);var s=i.prototype;return s.render=function(){const e=this._activeTime||this.viewModel.value;return m.tsx("div",{class:v.base},m.tsx("input",{afterUpdate:this._handleInputUpdate,"aria-label":this.messages.inputTitle,bind:this,class:this.classes(v.timePickerInput,v.input),onblur:this._handleInputBlur,onfocus:this._handleInputFocus,onkeydown:this._handleInputKeydown,oninput:this._handleInputKeydown,onclick:this._handleInputClick,onpaste:this._handleInputPaste,onwheel:this._handleInputWheel,value:_.formatDate(e.valueOf(),P)}))},s._handleInputBlur=function(){this._activeTime?.isValid&&(this.viewModel.value=this._activeTime.toJSDate()),this._activeTime=null,this._activePart=null},s._handleInputUpdate=function(e){this._selectPart(e,this._activePart)},s._selectPart=function(e,t){const i=this._activeTime;if(!i||!e)return;const n=_.formatDate(i.valueOf(),P),s=0,r=n.indexOf(":");if("hours"===t)return void e.setSelectionRange(s,r);const a=r+1,o=a+2;if("minutes"===t)return void e.setSelectionRange(a,o);const u=o+1,c=n.length;"meridiem"!==t||e.setSelectionRange(u,c)},s._handleInputFocus=function(e){this._activePart="hours",this._activeTime=d.DateTime.fromJSDate(this.viewModel.value).startOf("minute"),this._selectPart(e.target,"hours")},s._caretIndexToPartName=function(e){const t=this._activeTime?.toFormat(g,{locale:p.getLocale(),numberingSystem:"latn"});if(!t)return null;const i=t.indexOf(":"),n=t.indexOf(" ");return e<=i?"hours":e>i&&e<=n?"minutes":"meridiem"},s._handleInputKeydown=function(e){const{ctrlKey:t,metaKey:i,shiftKey:s}=e,r=n.eventKey(e),a=this._activeTime,o=this._activePart,u=/\d/.test(r),c=/^a|p$/i.test(r),l=i||t;if((T.includes(r)||u||"meridiem"===o&&c&&!l)&&null!=a){if("ArrowLeft"===r)this._activePart=this._prevPart();else if("ArrowRight"===r)this._activePart=this._nextPart();else if("Tab"===r){const e=s?this._prevPart():this._nextPart();if(e===this._activePart)return;this._activePart=e}else if("ArrowUp"===r)this._shift("up",o);else if("ArrowDown"===r)this._shift("down",o);else if(u)this._setTime(a,o,Number(r));else if(c){const e=r.toLowerCase(),t=a.hour;("a"===e&&t>=12||"p"===e&&t<12)&&this._shift("up",o)}e.preventDefault(),e.stopImmediatePropagation()}else l||(e.preventDefault(),e.stopImmediatePropagation())},s._handleInputClick=function(e){const t=e.target;this._activePart=null,this.renderNow(),this._activePart=this._caretIndexToPartName(t.selectionStart??0)},s._getOrderedParts=function(){return w(this._activeTime)?["hours","minutes","meridiem"]:["hours","minutes"]},s._prevPart=function(){const e=this._getOrderedParts(),t=this._activePart?e.indexOf(this._activePart)-1:0;return e[Math.max(t,0)]},s._nextPart=function(){const e=this._getOrderedParts(),t=this._activePart?e.indexOf(this._activePart)+1:0;return e[Math.min(t,e.length-1)]},s._setTime=function(e,t,i){if("hours"===t){const t=w(e)?12:24,n=""+e.hour%t,s=i,r=Number(`${n}${i}`);2===n.length||r>t?this._activeTime=e.set({hour:s}):r<=t&&(this._activeTime=e.set({hour:r}))}else if("minutes"===t){const t=59,n=`${e.minute}`,s=i,r=Number(`${n}${i}`);2===n.length||r>t?this._activeTime=e.set({minute:s}):r<t&&(this._activeTime=e.set({minute:r}))}},s._parseTime=function(e){if(!e)return null;const t={locale:p.getLocale(),numberingSystem:"latn"};let i=d.DateTime.fromFormat(e,g,t);return i.isValid?i:(i=d.DateTime.fromISO(e,t),i.isValid?i:(i=d.DateTime.fromRFC2822(e,t),i.isValid?i:(i=d.DateTime.fromJSDate(new Date(e)),i.isValid?i:null)))},s._handleInputPaste=function(e){const t=e.clipboardData?.getData("text/plain"),i=this._parseTime(t);i&&(this._activeTime=i),e.preventDefault(),e.stopImmediatePropagation()},s._handleInputWheel=function(e){const t=e.deltaY<0?"up":"down";this._shift(t,this._activePart)},s._shift=function(e,t){if(!t)return;const i="up"===e?"plus":"minus",n="meridiem"===t?12:1,s="hours"===t?"hour":"minutes"===t?"minute":"hours";this._activeTime=this._activeTime?.[i]({[s]:n})??null},e._createClass(i,[{key:"value",get:function(){return this.viewModel.value},set:function(e){this.viewModel.value=e}}]),i}(u);t.__decorate([s.property(),h.messageBundle("esri/widgets/support/t9n/TimePicker")],y.prototype,"messages",void 0),t.__decorate([s.property()],y.prototype,"value",null),t.__decorate([s.property({type:c})],y.prototype,"viewModel",void 0),y=t.__decorate([o.subclass("esri.widgets.support.TimePicker")],y);return y}));
