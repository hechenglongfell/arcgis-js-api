/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/events","../core/Handles","../core/reactiveUtils","../core/string","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","./Widget","./Search/css","./Search/SearchResultRenderer","./Search/SearchViewModel","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","../intl/substitute"],(function(e,t,s,n,r,o,i,u,a,c,l,d,h,g,p,_,S,v,m,M){"use strict";const y=/<[a-z/][\s\S]*>/i;let f=function(t){function s(s,n){var i;return(i=t.call(this,s,n)||this)._activeMenuItemIndex=-1,i._handles=new r,i._inputNode=null,i._menuItemCount=0,i._sourceMenuButtonNode=null,i._sourceListNode=null,i._suggestionListNode=null,i._searchResultRenderer=new g,i._locateFailed=null,i._container=null,i.activeMenu="none",i.disabled=!1,i.iconClass=h.CSS.widgetIcon,i.messages=null,i.messagesCommon=null,i.viewModel=new p,i._clearActiveMenu=()=>{i.activeMenu="none"},i._removeActiveMenu=e=>{const t=e.relatedTarget;t&&i._container?.contains(t)||i._clearActiveMenu()},i.addHandles([o.watch((()=>i.searchTerm),(e=>{(e&&"warning"===i.activeMenu||!e&&!i.get("viewModel.selectedSuggestion.location"))&&i._clearActiveMenu()})),o.on((()=>i.viewModel?.allSources),"change",(()=>i._watchSourceChanges())),o.watch((()=>i.activeMenu),(()=>i._resetActiveMenuItemIndex()),o.initial),o.watch((()=>i.viewModel?.defaultPopupTemplate),(t=>{t&&(t.content=i._renderSearchResultsContent.bind(e._assertThisInitialized(i)))}),o.initial)]),i}e._inheritsLoose(s,t);var u=s.prototype;return u.destroy=function(){this._handles.destroy(),this._handles=null,this._cancelSuggest(),this._cancelSearch(),this._searchResultRenderer&&(this._searchResultRenderer.viewModel=null,this._searchResultRenderer.destroy(),this._searchResultRenderer=null)},u.clear=function(){this.viewModel.clear()},u.focus=function(){this._inputNode?.focus(),this.emit("search-focus")},u.blur=function(){this._inputNode?.blur(),this.emit("search-blur")},u.search=function(e){this._clearActiveMenu(),this._cancelSuggest(),this._cancelSearch();const t=new AbortController,{signal:s}=t;return this._searchController=t,this.viewModel.search(e,{signal:s}).catch((e=>{if(this._searchController===t)return this._clearActiveMenu(),this._searchController=null,e})).then((e=>{if(this._searchController===t)return this.activeMenu=e.numResults?"none":"warning",this._searchController=null,e}))},u.suggest=function(e){this._cancelSuggest();const t=new AbortController,{signal:s}=t;return this._suggestController=t,this.viewModel.suggest(e,null,{signal:s}).then((e=>{if(this._suggestController===t)return this._suggestController=null,e.numResults&&this._openSuggestionMenu(),this._scrollToTopSuggestion(),e})).catch((()=>{if(this._suggestController===t)return this._suggestController=null,null}))},u.render=function(){const{state:e}=this.viewModel,t={[h.CSS.disabled]:"disabled"===e,[h.CSS.esriWidgetDisabled]:this.disabled};return m.tsx("div",{class:this.classes(h.CSS.base,t)},"loading"===e?this.renderLoader():this.renderContainer())},u.renderSubmitButton=function(){const{messages:e,disabled:t}=this;return m.tsx("button",{"aria-label":e.searchButtonTitle,bind:this,disabled:t,class:this.classes(h.CSS.submitButton,h.CSS.button),key:"esri-search__submit-button",onclick:this._handleSearchButtonClick,title:e.searchButtonTitle,type:"button"},m.tsx("span",{"aria-hidden":"true",class:h.CSS.searchIcon}))},u.renderWarningMenu=function(){return m.tsx("div",{key:"esri-search__error-menu",class:this.classes(h.CSS.menu,h.CSS.warningMenu)},m.tsx("div",{class:h.CSS.warningMenuBody},this.renderWarning()))},u.renderSourceMenuButton=function(){const{messages:e,activeMenu:t,sourceMenuId:s,sourceMenuButtonId:n,disabled:r}=this,{activeSourceIndex:o,allSources:i}=this.viewModel;return i.length>1?m.tsx("button",{id:n,key:"esri-search__source-menu-button",bind:this,disabled:r,"aria-label":e.searchIn,title:e.searchIn,"aria-haspopup":"true","aria-expanded":("source"===t).toString(),"aria-controls":s,class:this.classes(h.CSS.sourcesButton,h.CSS.button),onclick:this._handleSourcesMenuToggleClick,onfocus:this._handleSourcesMenuToggleFocus,afterCreate:_.storeNode,"data-node-ref":"_sourceMenuButtonNode",type:"button"},m.tsx("span",{"aria-hidden":"true",class:h.CSS.dropdownIcon}),m.tsx("span",{"aria-hidden":"true",class:h.CSS.dropupIcon}),m.tsx("span",{class:h.CSS.sourceName},this._getSourceName(o))):null},u.renderSourcesList=function(){const{allSources:e,searchAllEnabled:t}=this.viewModel,{_activeMenuItemIndex:s,activeMenu:n,sourceMenuId:r,sourceMenuButtonId:o}=this,i="source"===n&&s>-1?this._buildId("source-item",s):null;return e.length>1?m.tsx("ul",{"aria-activedescendant":i,"aria-labelledby":o,id:r,role:"menu",bind:this,afterCreate:_.storeNode,onkeydown:this._handleSourceMenuKeydown,onkeyup:this._handleSourceMenuKeyup,"data-node-ref":"_sourceListNode",class:h.CSS.menuList,tabIndex:-1},t?this.renderSource(p.ALL_INDEX):null,e.map(((e,t)=>this.renderSource(t))).toArray()):null},u.renderSourcesMenu=function(){const{allSources:e}=this.viewModel;return e.length>1?m.tsx("div",{key:"esri-search__source-menu",class:this.classes(h.CSS.menu,h.CSS.sourcesMenu)},this.renderSourcesList()):null},u.renderLoader=function(){const{messages:e,messagesCommon:t,disabled:s}=this;return m.tsx("div",{class:h.CSS.loader,key:"base-loader",tabIndex:s?-1:null},m.tsx("span",{"aria-hidden":"true",class:h.CSS.loaderAnimation}),m.tsx("span",{class:h.CSS.fallbackText},e.searchButtonTitle),m.tsx("span",{class:h.CSS.loaderText},t.loading))},u.renderContainer=function(){const{allSources:e,state:t}=this.viewModel,{activeMenu:s}=this,n={[h.CSS.hasMultipleSources]:e.length>1,[h.CSS.isLoading]:"loading"===t,[h.CSS.isSearching]:"searching"===t,[h.CSS.showWarning]:"warning"===s,[h.CSS.showSources]:"source"===s,[h.CSS.showSuggestions]:"suggestion"===s};return m.tsx("div",{tabIndex:-1,afterCreate:e=>{this._container=e,e.addEventListener("focusout",this._removeActiveMenu)},afterRemoved:e=>{e.removeEventListener("focusout",this._removeActiveMenu)},class:this.classes(n,h.CSS.container),key:"base-container"},this.renderSourceMenuButton(),this.renderSourcesMenu(),this.renderInputContainer(),this.renderSubmitButton(),this.renderWarningMenu())},u.renderClearButton=function(){return this.searchTerm?m.tsx("button",{bind:this,disabled:this.disabled,class:this.classes(h.CSS.clearButton,h.CSS.button),key:"esri-search__clear-button",onclick:this._handleClearButtonClick,onfocus:this._clearActiveMenu,title:this.messages.clearButtonTitle,type:"button"},m.tsx("span",{"aria-hidden":"true",class:h.CSS.clearIcon})):null},u.renderLocationGroup=function(){const{messages:e,locationEnabled:t,displayedSearchTerm:s}=this,n=t&&!s,r="suggestion"===this.activeMenu&&0===this._activeMenuItemIndex;return n?m.tsx("ul",{role:"group",key:"esri-search__suggestion-list-current-location",class:this.classes(h.CSS.menuList,h.CSS.suggestionList,h.CSS.suggestionListCurrentLocation)},m.tsx("li",{bind:this,"data-current-location-item":!0,onclick:this._handleUseCurrentLocationClick,id:this._buildId("suggestion-item",0),"aria-selected":("suggestion"===this.activeMenu&&0===this._activeMenuItemIndex).toString(),role:"option",class:this.classes(h.CSS.menuItem,r?h.CSS.menuItemFocus:null)},m.tsx("span",{"aria-hidden":"true",class:h.CSS.locate})," ",e.useCurrentLocation)):null},u.renderInput=function(){const{activeMenu:e,locationEnabled:t,displayedSearchTerm:s,messages:n,suggestionsMenuId:r,inputId:o,_activeMenuItemIndex:i,disabled:u}=this,{maxInputLength:a,placeholder:c,searchTerm:l,suggestionCount:d}=this.viewModel,g=!(!(t&&!s)&&!d),p="suggestion"===e&&i>-1?this._buildId("suggestion-item",i):null;return m.tsx("input",{"aria-activedescendant":p,"aria-autocomplete":"list","aria-expanded":(g&&"suggestion"===e).toString(),"aria-controls":g?r:null,"aria-haspopup":"listbox","aria-label":n.searchButtonTitle,bind:this,disabled:u,placeholder:c,maxlength:a,autocomplete:"off",type:"text",class:this.classes(h.CSS.esriInput,h.CSS.input),value:l,id:o,role:"combobox",onkeyup:this._handleInputKeyup,onclick:this._openSuggestionMenu,oninput:this._handleInputPaste,onpaste:this._handleInputPaste,afterCreate:_.storeNode,"data-node-ref":"_inputNode",onfocus:this.focus,onblur:this.blur,title:l?"":c})},u.renderForm=function(){return m.tsx("form",{key:"esri-search__form",bind:this,disabled:this.disabled,class:h.CSS.form,onsubmit:this._formSubmit,role:"search"},this.renderInput())},u.renderSuggestList=function(e){const{sourceIndex:t}=e,s=e.results.length,n=e.results;return s?m.tsx("ul",{role:"group",key:`esri-search__suggestion-list-${t}`,class:this.classes(h.CSS.menuList,h.CSS.suggestionList)},n.map((e=>this.renderSuggestion(e,this._menuItemCount++)))):null},u.renderSuggestionsGroup=function(){const{suggestions:e}=this.viewModel;return e?e.map((e=>[this.renderSuggestionHeader(e),this.renderSuggestList(e)])):null},u.renderSuggestionsMenu=function(){const{displayedSearchTerm:e,locationEnabled:t,suggestionsMenuId:s,inputId:n}=this,{suggestionCount:r}=this.viewModel,o=t&&!e||r;return this._menuItemCount=0,o?m.tsx("div",{id:s,key:"esri-search__suggestions-menu",class:this.classes(h.CSS.menu,h.CSS.suggestionsMenu),role:"listbox","aria-labelledby":n,bind:this,afterCreate:_.storeNode,"data-node-ref":"_suggestionListNode"},this.renderLocationGroup(),this.renderSuggestionsGroup()):null},u.renderInputContainer=function(){return m.tsx("div",{key:"esri-search__input-container",class:h.CSS.inputContainer},this.renderForm(),this.renderSuggestionsMenu(),this.renderClearButton())},u.renderSuggestionHeader=function(e){const{allSources:t,activeSourceIndex:s}=this.viewModel,{sourceIndex:n}=e,r=e.results.length,o=t.length>1&&s===p.ALL_INDEX;return r&&o?m.tsx("div",{key:`esri-search__suggestion-header-${n}`,class:h.CSS.menuHeader},this._getSourceName(n)):null},u.renderSuggestion=function(e,t){const{_activeMenuItemIndex:s,messages:n}=this,{searchTerm:r}=this.viewModel;if(r){const{text:o}=e,i=o||n.untitledResult,u=y.test(i),a=[];if(u)a.push(m.tsx("div",{innerHTML:i}));else{const e=this._splitResult(i,r),t=r.toLowerCase();e.forEach(((e,s)=>{e&&e.length&&(e.toLowerCase()===t?a.push(m.tsx("strong",{key:s},e)):a.push(e))}))}const c="suggestion"===this.activeMenu&&s===t;return m.tsx("li",{bind:this,id:this._buildId("suggestion-item",t),"aria-selected":("suggestion"===this.activeMenu&&this._activeMenuItemIndex===t).toString(),onclick:this._handleSuggestionClick,key:`esri-search__suggestion_${t}`,"data-suggestion":e,role:"option",class:this.classes(h.CSS.menuItem,c?h.CSS.menuItemFocus:null)},a)}},u.renderSource=function(e){const{activeSourceIndex:t,searchAllEnabled:s}=this.viewModel,n={[h.CSS.menuItemActive]:e===t,[h.CSS.menuItemFocus]:"source"===this.activeMenu&&e===(s?this._activeMenuItemIndex-1:this._activeMenuItemIndex)},r=s?e+1:e;return m.tsx("li",{bind:this,key:`esri-search__source-${e}`,id:this._buildId("source-item",r),"aria-checked":(e===t).toString(),onclick:this._handleSourceClick,"data-source-index":e,role:"menuitemradio",class:this.classes(h.CSS.source,h.CSS.menuItem,n)},this._getSourceName(e))},u.renderNoResultsWarning=function(e){const{messages:t}=this,s=e?M.substitute(t.noResultsFoundForValue,{value:`"${e}"`}):t.noResultsFound;return m.tsx("div",{key:"esri-search__no_results"},m.tsx("div",{class:h.CSS.warningMenuHeader},t.noResults),m.tsx("div",{class:h.CSS.warningMenuText},s))},u.renderEmptySearchWarning=function(){const{messages:e}=this;return m.tsx("div",{key:"esri-search__empty-search"},m.tsx("span",{"aria-hidden":"true",class:h.CSS.noticeIcon}),m.tsx("span",{class:h.CSS.noValueText},e.emptyValue))},u.renderLocateWarning=function(){const{messages:e}=this;return m.tsx("div",{key:"esri-search__locate-error"},m.tsx("span",{"aria-hidden":"true",class:h.CSS.noticeIcon}),m.tsx("span",{class:h.CSS.noValueText},e.locateError))},u.renderWarning=function(){const{displayedSearchTerm:e,_locateFailed:t}=this,{viewModel:s}=this;return t?this.renderLocateWarning():s.selectedSuggestion?.location||e?this.renderNoResultsWarning(e):this.renderEmptySearchWarning()},u._resetActiveMenuItemIndex=function(){this._activeMenuItemIndex=-1},u._buildId=function(e,t){return`${this.id}-${e}${void 0===t?"":`-${t}`}`},u._watchSourceChanges=function(){const{_handles:e,viewModel:{allSources:t}}=this,s="sources";e.remove(s),t.forEach((t=>e.add(o.watch((()=>t.name),(()=>this.scheduleRender())),s)))},u._handleSourcesMenuToggleFocus=function(){"source"!==this.activeMenu&&this._clearActiveMenu()},u._handleSourcesMenuToggleClick=function(){const e="source"===this.activeMenu;this.activeMenu=e?"none":"source",this.renderNow(),"source"===this.activeMenu&&this._sourceListNode?.focus()},u._handleClearButtonClick=function(){this.viewModel.clear(),this._focus()},u._handleSearchButtonClick=function(){this.search()},u._handleSuggestionClick=function(e){const t=e.currentTarget["data-suggestion"];t&&(this._focus(),this.search(t))},u._handleUseCurrentLocationClick=function(){this._useCurrentLocation()},u._useCurrentLocation=function(){this._focus("none"),this._cancelSuggest(),this._cancelSearch();const e=new AbortController,{signal:t}=e;this._searchController=e,this.viewModel.searchNearby({signal:t}).then((e=>{this.activeMenu=e.numResults?"none":"warning"})).catch((()=>{this._locateFailed=!0,this.activeMenu="warning"})).then((()=>{this._searchController=null}))},u._handleSourceClick=function(e){this._setSourceFromMenuItem(e.currentTarget)},u._setSourceFromMenuItem=function(e){if(!e)return;const t=e["data-source-index"];this.viewModel.activeSourceIndex=t,this._clearActiveMenu(),this._sourceMenuButtonNode?.focus()},u._cancelSuggest=function(){this._suggestController&&(this._suggestController.abort(),this._suggestController=null)},u._cancelSearch=function(){this._searchController&&(this._searchController.abort(),this._searchController=null),this._locateFailed=!1},u._handleInputKeyup=function(e){const t=n.eventKey(e);if(e.ctrlKey||e.metaKey||"Copy"===t||"ArrowLeft"===t||"ArrowRight"===t||"Shift"===t)return;if("Tab"===t||"Escape"===t||e.shiftKey&&"Tab"===t)return this._cancelSuggest(),void("Escape"===t&&this._clearActiveMenu());const s="Home"===t||"End"===t||"ArrowUp"===t||"ArrowDown"===t;if("Enter"===t&&this._activeMenuItemIndex<0)return void this._cancelSuggest();const r=this._suggestionListNode?.getElementsByTagName("li");if(r?.length){if("suggestion"!==this.activeMenu&&this._openSuggestionMenu(),s)return e.preventDefault(),this._cancelSuggest(),void this._handleItemNavigation(t,r,this._suggestionListNode);const n=r[this._activeMenuItemIndex];if("Enter"===t&&n){const e=n["data-suggestion"];return void(e?(this._focus(),this.search(e)):n["data-current-location-item"]&&this._useCurrentLocation())}}this.viewModel.searchTerm&&this.suggest()},u._handleItemNavigation=function(e,t,s){const n=this._activeMenuItemIndex;"Home"===e&&(this._activeMenuItemIndex=0),"End"===e&&(this._activeMenuItemIndex=t.length-1),"ArrowUp"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex<=0?t.length-1:this._activeMenuItemIndex-1),"ArrowDown"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex===t.length-1?0:this._activeMenuItemIndex+1),n!==this._activeMenuItemIndex&&_.keepMenuItemWithinView(t[this._activeMenuItemIndex],s)},u._scrollToTopSuggestion=function(){this._suggestionListNode&&(this._suggestionListNode.scrollTop=0)},u._openSuggestionMenu=function(){this.activeMenu="suggestion"},u._handleInputPaste=function(e){const t=e.target;this.viewModel.searchTerm!==t.value&&(this.viewModel.searchTerm=t.value),this.viewModel.searchTerm&&this.suggest()},u._handleSourceMenuKeydown=function(e){const t=n.eventKey(e);if(_.isActivationKey(t)){e.preventDefault();const t=this._sourceListNode.getElementsByTagName("li")[this._activeMenuItemIndex];this._setSourceFromMenuItem(t)}else"ArrowUp"!==t&&"ArrowDown"!==t&&"End"!==t&&"Home"!==t||e.preventDefault()},u._handleSourceMenuKeyup=function(e){const t=n.eventKey(e),s="ArrowUp"===t||"ArrowDown"===t||"End"===t||"Home"===t;if(s&&e.preventDefault(),"Escape"===t)return this._clearActiveMenu(),void this._sourceMenuButtonNode?.focus();const r=this._sourceListNode?.getElementsByTagName("li");return r&&0!==r.length&&s?("source"!==this.activeMenu&&(this.activeMenu="source"),void this._handleItemNavigation(t,r,this._sourceListNode.parentElement)):void 0},u._focus=function(e){this.focus(),e&&(this.activeMenu=e)},u._formSubmit=function(e){e.preventDefault(),-1===this._activeMenuItemIndex&&this.search()},u._getSourceName=function(e){const{messages:t}=this,s=this.viewModel,{allSources:n}=s,r=n.getItemAt(e);return e===p.ALL_INDEX?t.all:r&&r.name||t.untitledSource},u._splitResult=function(e,t){const s=i.escapeRegExpString(t);return e.replace(new RegExp(`(^|)(${s})(|$)`,"ig"),"$1|$2|$3").split("|")},u._renderSearchResultsContent=function(){return this._searchResultRenderer.showMoreResultsOpen=!1,this._searchResultRenderer.viewModel=this.viewModel,this._searchResultRenderer},e._createClass(s,[{key:"displayedSearchTerm",get:function(){return`${this.viewModel.searchTerm}`.trim()}},{key:"inputId",get:function(){return this._buildId("input")}},{key:"suggestionsMenuId",get:function(){return this._buildId("suggest-menu")}},{key:"sourceMenuId",get:function(){return this._buildId("source-menu")}},{key:"sourceMenuButtonId",get:function(){return this._buildId("source-menu-button")}},{key:"activeSource",get:function(){return this.viewModel.activeSource}},{key:"activeSourceIndex",get:function(){return this.viewModel.activeSourceIndex},set:function(e){this.viewModel.activeSourceIndex=e}},{key:"allPlaceholder",get:function(){return this.viewModel.allPlaceholder},set:function(e){this.viewModel.allPlaceholder=e}},{key:"allSources",get:function(){return this.viewModel.allSources}},{key:"autoNavigate",get:function(){return this.viewModel.autoNavigate},set:function(e){this.viewModel.autoNavigate=e}},{key:"autoSelect",get:function(){return this.viewModel.autoSelect},set:function(e){this.viewModel.autoSelect=e}},{key:"defaultSources",get:function(){return this.viewModel.defaultSources}},{key:"goToOverride",get:function(){return this.viewModel.goToOverride},set:function(e){this.viewModel.goToOverride=e}},{key:"includeDefaultSources",get:function(){return this.viewModel.includeDefaultSources},set:function(e){this.viewModel.includeDefaultSources=e}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"locationEnabled",get:function(){return this.viewModel.locationEnabled},set:function(e){this.viewModel.locationEnabled=e}},{key:"maxResults",get:function(){return this.viewModel.maxResults},set:function(e){this.viewModel.maxResults=e}},{key:"maxSuggestions",get:function(){return this.viewModel.maxSuggestions},set:function(e){this.viewModel.maxSuggestions=e}},{key:"minSuggestCharacters",get:function(){return this.viewModel.minSuggestCharacters},set:function(e){this.viewModel.minSuggestCharacters=e}},{key:"popupEnabled",get:function(){return this.viewModel.popupEnabled},set:function(e){this.viewModel.popupEnabled=e}},{key:"popupTemplate",get:function(){return this.viewModel.popupTemplate},set:function(e){this.viewModel.popupTemplate=e}},{key:"portal",get:function(){return this.viewModel.portal},set:function(e){this.viewModel.portal=e}},{key:"resultGraphic",get:function(){return this.viewModel.resultGraphic},set:function(e){this.viewModel.resultGraphic=e}},{key:"resultGraphicEnabled",get:function(){return this.viewModel.resultGraphicEnabled},set:function(e){this.viewModel.resultGraphicEnabled=e}},{key:"results",get:function(){return this.viewModel.results}},{key:"searchAllEnabled",get:function(){return this.viewModel.searchAllEnabled},set:function(e){this.viewModel.searchAllEnabled=e}},{key:"searchTerm",get:function(){return this.viewModel.searchTerm},set:function(e){this.viewModel.searchTerm=e}},{key:"selectedResult",get:function(){return this.viewModel.selectedResult}},{key:"sources",get:function(){return this.viewModel.sources},set:function(e){this.viewModel.sources=e}},{key:"suggestions",get:function(){return this.viewModel.suggestions}},{key:"suggestionsEnabled",get:function(){return this.viewModel.suggestionsEnabled},set:function(e){this.viewModel.suggestionsEnabled=e}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}}]),s}(d);t.__decorate([u.property()],f.prototype,"_activeMenuItemIndex",void 0),t.__decorate([u.property()],f.prototype,"displayedSearchTerm",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"inputId",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"suggestionsMenuId",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"sourceMenuId",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"sourceMenuButtonId",null),t.__decorate([u.property()],f.prototype,"activeMenu",void 0),t.__decorate([u.property({readOnly:!0})],f.prototype,"activeSource",null),t.__decorate([u.property()],f.prototype,"activeSourceIndex",null),t.__decorate([u.property()],f.prototype,"allPlaceholder",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"allSources",null),t.__decorate([u.property()],f.prototype,"autoNavigate",null),t.__decorate([u.property()],f.prototype,"autoSelect",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"defaultSources",null),t.__decorate([u.property()],f.prototype,"disabled",void 0),t.__decorate([u.property()],f.prototype,"goToOverride",null),t.__decorate([u.property()],f.prototype,"iconClass",void 0),t.__decorate([u.property()],f.prototype,"includeDefaultSources",null),t.__decorate([u.property()],f.prototype,"label",null),t.__decorate([u.property()],f.prototype,"locationEnabled",null),t.__decorate([u.property()],f.prototype,"maxResults",null),t.__decorate([u.property()],f.prototype,"maxSuggestions",null),t.__decorate([u.property(),S.messageBundle("esri/widgets/Search/t9n/Search")],f.prototype,"messages",void 0),t.__decorate([u.property(),S.messageBundle("esri/t9n/common")],f.prototype,"messagesCommon",void 0),t.__decorate([u.property()],f.prototype,"minSuggestCharacters",null),t.__decorate([u.property()],f.prototype,"popupEnabled",null),t.__decorate([u.property()],f.prototype,"popupTemplate",null),t.__decorate([u.property()],f.prototype,"portal",null),t.__decorate([u.property()],f.prototype,"resultGraphic",null),t.__decorate([u.property()],f.prototype,"resultGraphicEnabled",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"results",null),t.__decorate([u.property()],f.prototype,"searchAllEnabled",null),t.__decorate([u.property()],f.prototype,"searchTerm",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"selectedResult",null),t.__decorate([u.property()],f.prototype,"sources",null),t.__decorate([u.property({readOnly:!0})],f.prototype,"suggestions",null),t.__decorate([u.property()],f.prototype,"suggestionsEnabled",null),t.__decorate([u.property()],f.prototype,"view",null),t.__decorate([v.vmEvent(["search-complete","search-clear","search-start","select-result","suggest-start","suggest-complete"]),u.property({type:p})],f.prototype,"viewModel",void 0),f=t.__decorate([l.subclass("esri.widgets.Search")],f);return f}));
