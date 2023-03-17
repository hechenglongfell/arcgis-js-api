/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/events","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../Slider","./SliderWithDropdownViewModel","../../support/Popover","../../support/widgetUtils","../../support/jsxFactory"],(function(o,e,t,n,r,i,s,d,l,p,c,a,w,h){"use strict";const u="esri-slider-with-dropdown",_={interactive:"esri-interactive",label:"esri-slider__label",box:`${u}__box`,dropdownRoot:`${u}__dropdown-root`,anchor:" esri-widget__anchor esri-slider-with-dropdown__anchor",anchorOpen:`${u}__anchor--open`,anchorClosed:`${u}__anchor--closed`,dropdownList:`${u}__list`,dropdownListItem:`${u}__list-item`,dropdownListItemSelected:`${u}__list-item--selected`,boxDropDownOn:`${u}__box--drop-down-on`,boxDropDownOff:`${u}__box--drop-down-off`},b={selectItem:"Enter",closeDropdown:"Escape",moveSelectionUp:"ArrowUp",moveSelectionDown:"ArrowDown"};let m=function(e){function i(t,r){var i;return(i=e.call(this,t,r)||this).viewModel=new c.SliderWithDropdownViewModel,i.buttonTooltip="",i.showDropDown=!0,i._dropdownAnchor=null,i._dropdownElement=null,i._popover=new a({owner:o._assertThisInitialized(i),placement:"bottom-start",anchorElement:()=>n.unwrap(i._dropdownAnchor),renderContentFunction:()=>i._renderPopover()}),i}o._inheritsLoose(i,e);var s=i.prototype;return s.initialize=function(){this.addHandles(r.watch((()=>this.viewModel.isDropdownOpen),(o=>{this._popover.open=o}),r.initial))},s.destroy=function(){this._popover.destroy()},s.renderThumbLabel=function(o){const t={[_.boxDropDownOn]:this.showDropDown,[_.boxDropDownOff]:!this.showDropDown};return h.tsx("div",{class:this.classes(_.box,_.label,t)},e.prototype.renderThumbLabel.call(this,o),this.showDropDown&&h.tsx("div",{bind:this,afterCreate:this._onDropdownAnchorAfterCreate,class:_.dropdownRoot},h.tsx("button",{class:this.classes(_.interactive,_.anchor,this.isDropdownOpen?_.anchorOpen:_.anchorClosed),bind:this,disabled:this.disabled,onclick:this._onAnchorClick,onpointerdown:this._killEvent,"aria-label":this.buttonTooltip,title:this.buttonTooltip,"aria-expanded":this.isDropdownOpen.toString(),"aria-haspopup":"listbox",type:"button"},this.currentItem?this.currentItem.name+" ":"")))},s._onDropdownAnchorAfterCreate=function(o){this._dropdownAnchor=o},s._renderPopover=function(){return h.tsx("ol",{role:"listbox",afterCreate:this._onDropdownAfterCreate,"aria-label":this.buttonTooltip,bind:this,class:this.classes(_.dropdownList),tabindex:"-1",onkeydown:this._onDropdownKeyDown,onfocusout:this._onDropdownFocusOut,onpointerdown:this._killEvent},this.items.map(((o,e)=>h.tsx("li",{class:e===this.currentIndex?this.classes(_.interactive,_.dropdownListItem,_.dropdownListItemSelected):this.classes(_.interactive,_.dropdownListItem),bind:this,onclick:this._onDropdownItemClick,"data-result":e,"aria-label":o.label.join(" "),role:"option","aria-selected":(e===this.currentIndex).toString(),onkeydown:this._onLiKeyDown,tabindex:"0"},o.label.map((o=>h.tsx("span",{bind:this},o)))))))},s._onDropdownAfterCreate=function(o){this._dropdownElement=o;const e=o.querySelector(`.${_.dropdownListItemSelected}`)??o.firstChild;n.isSome(e)&&e instanceof HTMLElement&&(e.scrollIntoView(),e.focus())},s._onAnchorClick=function(){return!this.disabled&&(this.viewModel.toggle(),!0)},s._onDropdownItemClick=function(o){const e=o.currentTarget;this.viewModel.selectItem(e["data-result"])},s._onDropdownFocusOut=function(o){let e=o.relatedTarget;null===e&&(e=document.activeElement),n.isSome(this._dropdownElement)&&!this._dropdownElement.contains(e)&&n.isSome(this._dropdownAnchor)&&!this._dropdownAnchor.contains(e)&&(this.viewModel.isDropdownOpen=!1)},s._killEvent=function(o){return o.stopPropagation(),!0},s._onDropdownKeyDown=function(o){o.stopPropagation(),t.eventKey(o)===b.closeDropdown&&(this.viewModel.isDropdownOpen=!1)},s._onLiKeyDown=function(o){const e=o.target;switch(t.eventKey(o)){case b.moveSelectionUp:if(e.previousElementSibling){e.previousElementSibling.focus()}break;case b.moveSelectionDown:if(e.nextElementSibling){e.nextElementSibling.focus()}break;case b.selectItem:e.click()}},o._createClass(i,[{key:"items",get:function(){return this.viewModel.items},set:function(o){this.viewModel.items=o}},{key:"currentIndex",get:function(){return this.viewModel.currentIndex},set:function(o){this.viewModel.currentIndex=o}},{key:"currentItem",get:function(){return this.viewModel.currentItem}},{key:"isDropdownOpen",get:function(){return this.viewModel.isDropdownOpen}}]),i}(p);e.__decorate([i.property()],m.prototype,"viewModel",void 0),e.__decorate([i.property()],m.prototype,"buttonTooltip",void 0),e.__decorate([i.property()],m.prototype,"showDropDown",void 0),e.__decorate([i.property()],m.prototype,"items",null),e.__decorate([i.property()],m.prototype,"currentIndex",null),e.__decorate([i.property()],m.prototype,"currentItem",null),e.__decorate([i.property()],m.prototype,"isDropdownOpen",null),m=e.__decorate([l.subclass("esri.widgets.Daylight.SliderWithDropdown")],m);return m}));
