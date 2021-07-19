/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/events","../core/Logger","../core/urlUtils","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../rest/support/PrintTemplate","./Widget","./Print/FileLink","./Print/PrintViewModel","./Print/TemplateOptions","./support/Heading","./support/Popover","./support/widgetUtils","./support/decorators/messageBundle","./support/jsxFactory"],(function(e,t,i,a,n,s,o,l,r,d,p,c,u,h,_,m,b,y,v,g,f,x){"use strict";const T=i.ofType(_),w={base:"esri-print",headerTitle:"esri-print__header-title",inputText:"esri-print__input-text",layoutTabList:"esri-print__layout-tab-list",layoutTab:"esri-print__layout-tab",layoutSection:"esri-print__layout-section",mapOnlySection:"esri-print__map-only-section",scaleInput:"esri-print__scale-input",templateList:"esri-print__template-list",templateListScroller:"esri-print__template-list-scroller",templateListFooter:"esri-print__template-list-footer",loader:"esri-print__loader",advancedOptionsButton:"esri-print__advanced-options-button",advancedOptionsButtonContainer:"esri-print__advanced-options-button-container",advancedOptionsButtonTitle:"esri-print__advanced-options-button-title",advancedOptionsButtonIconOpened:"esri-print__advanced-options-button-icon--opened",advancedOptionsButtonIconClosed:"esri-print__advanced-options-button-icon--closed",advancedOptionsButtonIconClosed_RTL:"esri-print__advanced-options-button-icon--closed-rtl",refreshButton:"esri-print__refresh-button",swapButton:"esri-print__swap-button",linkButton:"esri-print__link-button",printButton:"esri-print__export-button",templateButton:"esri-print__template-button",formSectionContainer:"esri-print__form-section-container",advancedOptionsSection:"esri-print__advanced-options-section",advancedOptionsContainer:"esri-print__advanced-options-container",authorInfoContainer:"esri-print__author-info-container",copyrightInfoContainer:"esri-print__copyright-info-container",exportedFilesContainer:"esri-print__export-panel-container",exportedFilesTitle:"esri-print__export-title",exportedFile:"esri-print__exported-file",exportedFileLink:"esri-widget__anchor esri-print__exported-file-link",exportedFileLinkTitle:"esri-print__exported-file-link-title",heightContainer:"esri-print__height-container",legendInfoContainer:"esri-print__legend-info-container",printWidgetContainer:"esri-print__container",panelContainer:"esri-print__panel-container",scaleInfoContainer:"esri-print__scale-info-container",scaleInputContainer:"esri-print__scale-input-container",sizeContainer:"esri-print__size-container",widthContainer:"esri-print__width-container",widget:"esri-widget",panel:"esri-widget--panel",widgetButton:"esri-widget--button",button:"esri-button",buttonSecondary:"esri-button--secondary",buttonTertiary:"esri-button--tertiary",select:"esri-select",input:"esri-input",disabled:"esri-disabled",anchorDisabled:"esri-widget__anchor--disabled",buttonDisabled:"esri-button--disabled",panelError:"esri-print__panel--error",exportedFileError:"esri-print__exported-file--error",hide:"esri-hidden",rotate:"esri-rotating",anchor:"esri-widget__anchor",menu:"esri-menu",menuList:"esri-menu__list",menuItem:"esri-menu__list-item",menuItemFocus:"esri-menu__list-item--focus",menuHeader:"esri-menu__header",iconCheckMark:"esri-icon-check-mark",iconDownload:"esri-icon-download",iconLaunchLink:"esri-icon-launch-link-external",iconError:"esri-icon-error",iconPrinter:"esri-icon-printer",iconRightTriangleArrow:"esri-icon-right-triangle-arrow",iconLeftTriangleArrow:"esri-icon-left-triangle-arrow",iconDownArrow:"esri-icon-down-arrow",iconRefresh:"esri-icon-refresh",iconSpinner:"esri-icon-loading-indicator",iconSwap:"esri-icon-swap",iconLinked:"esri-icon-link-horizontal",iconUnlinked:"esri-icon-unlocked-link-horizontal",widgetIcon:"esri-icon-printer"},O="esri.widgets.Print",C=n.getLogger(O),L="User sets an invalid layout, resetting it to the default valid one...",I="User sets an invalid format, resetting it to the default valid one...";function S(e){const t=8.3333,i=11.4583;return{width:Math.round(e*t),height:Math.round(e*i)}}function k(e){return!isNaN(e)&&e>0}let F=function(t){function i(i,a){var n;return(n=t.call(this,i,a)||this)._activeTabFocusRequested=!1,n._advancedOptionsVisibleForLayout=!1,n._advancedOptionsVisibleForMapOnly=!1,n._awaitingServerResponse=!1,n._exportedFileNameMap={},n._focusedTemplateIndex=0,n._layoutTabSelected=!0,n._pendingExportScroll=!1,n._rootNode=null,n._selectTemplateNode=null,n._templateListPopover=new v({owner:e._assertThisInitialized(n),placement:"top",offset:[0,-100],anchorElement:()=>n._selectTemplateNode,renderContentFunction:n.renderTemplateList}),n.allowedFormats=null,n.allowedLayouts=null,n.exportedLinks=new T,n.extraParameters=null,n.headingLevel=3,n.iconClass=w.widgetIcon,n.includeDefaultTemplates=null,n.label=void 0,n.portal=null,n.printServiceUrl=null,n.templateOptions=new b,n.view=null,n.viewModel=new m,n.handleTemplateListCreation=e=>e.focus(),n.handleTemplateChildBlur=e=>{var t;(null==(t=e.relatedTarget)?void 0:t.closest(`.${w.templateList}`))||n.handleCloseTemplateSelection()},n.handleCloseTemplateSelection=()=>{n._focusedTemplateIndex=0,n._templateListPopover.open=!1,n._selectTemplateNode.focus()},n.handleSelectTemplateClick=()=>{n._focusedTemplateIndex=0,n._templateListPopover.open=!0},n.handleTemplateListClick=e=>{const t=e.target;n.applyTemplate(t["data-template"])},n.handleTemplateListKeyDown=e=>{if(g.isActivationKey(e.key))return n.applyTemplate(n.viewModel.defaultTemplates.getItemAt(n._focusedTemplateIndex)),void e.preventDefault();if("ArrowDown"===e.key||"ArrowUp"===e.key){const{defaultTemplates:t}=n.viewModel,i="ArrowDown"===e.key?1:-1,a=(n._focusedTemplateIndex+i)%t.length;n._focusedTemplateIndex=a<0?t.length-1:a;const s=e.currentTarget;g.keepMenuItemWithinView(s.querySelectorAll(`.${w.menuItem}`)[n._focusedTemplateIndex],s.parentElement),e.preventDefault()}"Escape"===e.key&&n.handleCloseTemplateSelection()},n._removeLink=e=>{const t=e.currentTarget["data-item"];t&&"error"===t.state&&n.exportedLinks.remove(t)},n._focusOnTabChange=n._focusOnTabChange.bind(e._assertThisInitialized(n)),n}e._inheritsLoose(i,t);var n=i.prototype;return n.initialize=function(){this.own([o.init(this,"viewModel.templatesInfo",(e=>{const{format:t,layout:i}=this.templateOptions;if(e){const a=i===e.layout.defaultValue||i&&"MAP_ONLY"===i.toUpperCase()||e.layout.choiceList&&e.layout.choiceList.indexOf(i)>-1,n=t===e.format.defaultValue||e.format.choiceList&&e.format.choiceList.indexOf(t)>-1;a||(i&&C.warn(L),this.templateOptions.layout=e.layout.defaultValue),n||(t&&C.warn(I),this.templateOptions.format=e.format.defaultValue),i&&"MAP_ONLY"===i.toUpperCase()&&(this._layoutTabSelected=!1)}})),o.init(this,"templateOptions.format",(e=>{const{viewModel:{templatesInfo:t}}=this;if(t&&e){let i=!1;t.format.choiceList&&t.format.choiceList.forEach((t=>{t.toUpperCase()===e.toUpperCase()&&(this.templateOptions.format=t,i=!0)})),i||(this.templateOptions.format=t.format.defaultValue,C.warn(I)),this.scheduleRender()}})),o.init(this,"templateOptions.layout",(e=>{const{viewModel:{templatesInfo:t}}=this;if(t&&e){this._layoutTabSelected="MAP_ONLY"!==e.toUpperCase();let i=!this._layoutTabSelected;i||t.layout.choiceList&&t.layout.choiceList.forEach((t=>{t.toUpperCase()===e.toUpperCase()&&(this.templateOptions.layout=t,i=!0)})),i||(this.templateOptions.layout=t.layout.defaultValue,C.warn(L)),this.scheduleRender()}})),o.init(this,"templateOptions.dpi",(e=>{e<=0?this.templateOptions.dpi=1:this.scheduleRender()})),o.init(this,"viewModel.view.scale",(e=>{const{scale:t,scaleEnabled:i}=this.templateOptions;i&&t||(this.templateOptions.scale=e)}))]);const{height:e,width:t}=this.templateOptions;this.templateOptions.width=t||800,this.templateOptions.height=e||1100;const i=setTimeout((()=>{this._awaitingServerResponse=!0,this.scheduleRender()}),500);this.viewModel.load().then((()=>clearTimeout(i)))},n.render=function(){const{attributionEnabled:e,author:t,copyright:i,dpi:a,format:n,height:s,layout:o,legendEnabled:l,scaleEnabled:r,scale:d,width:p}=this.templateOptions,c="ready"!==this.get("viewModel.state"),u=this.renderTitleOrFileNameSection(),{includeDefaultTemplates:h,messages:_,viewModel:m}=this,b=this.get("viewModel.templatesInfo.format.choiceList")||[],v=b.length>0?b.map((e=>{const t=e===n;return x.tsx("option",{key:e,selected:t,value:e},e.toUpperCase())})):x.tsx("option",{key:"format-default-option"},_.formatDefaultOption),g=x.tsx("div",{class:w.formSectionContainer},x.tsx("label",null,_.fileFormatTitle,x.tsx("select",{class:w.select,onchange:this._updateFromOption,"data-target-property":"format",bind:this},v))),f=this.get("viewModel.templatesInfo.layout.choiceList")||[],T=f.length>0?f.map((e=>{const t=e===o,i=_[e]||e;return x.tsx("option",{key:e,selected:t,value:e},i)})):x.tsx("option",{key:"layout-default-option"},_.layoutDefaultOption),O=x.tsx("div",{class:w.formSectionContainer},x.tsx("label",null,_.layoutTitle,x.tsx("select",{class:w.select,onchange:this._updateFromOption,"data-target-property":"layout",bind:this},T))),C=x.tsx("div",{class:w.formSectionContainer},x.tsx("label",null,_.dpi,x.tsx("input",{type:"number",class:this.classes(w.inputText,w.input),"data-input-name":"dpi",onchange:this._handleDPIChange,value:`${a}`,min:"1",tabIndex:0,bind:this}))),L=x.tsx("div",{class:this.classes(w.scaleInfoContainer,w.formSectionContainer)},x.tsx("label",null,x.tsx("input",{"data-option-name":"scaleEnabled",checked:r,type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),_.scale),x.tsx("div",{class:w.scaleInputContainer},x.tsx("input",{"aria-label":_.scaleLabel,"aria-valuenow":`${d}`,role:"spinbutton",type:"number",class:this.classes(w.inputText,w.input,w.scaleInput),tabIndex:0,"data-input-name":"scale",onchange:this._updateInputValue,disabled:!r,value:`${d}`,bind:this}),x.tsx("button",{type:"button","aria-label":_.reset,class:this.classes(w.widgetButton,w.refreshButton,w.iconRefresh),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),I=this._advancedOptionsVisibleForLayout?x.tsx("div",{"aria-labelledby":`${this.id}__advancedOptionsForLayout`,class:w.advancedOptionsContainer},L,x.tsx("div",{class:this.classes(w.authorInfoContainer,w.formSectionContainer)},x.tsx("label",null,_.author,x.tsx("input",{type:"text",value:t,class:this.classes(w.inputText,w.input),tabIndex:0,"data-input-name":"author",onchange:this._updateInputValue,bind:this}))),x.tsx("div",{class:this.classes(w.copyrightInfoContainer,w.formSectionContainer)},x.tsx("label",null,_.copyright,x.tsx("input",{type:"text",class:this.classes(w.inputText,w.input),tabIndex:0,value:i,"data-input-name":"copyright",onchange:this._updateInputValue,bind:this}))),C,x.tsx("div",{class:this.classes(w.legendInfoContainer,w.formSectionContainer)},x.tsx("label",null,x.tsx("input",{type:"checkbox","data-option-name":"legendEnabled",tabIndex:0,checked:l,onchange:this._toggleInputValue,bind:this}),_.legend))):null,S=this._advancedOptionsVisibleForMapOnly?x.tsx("div",{"aria-labelledby":`${this.id}__advancedOptionsForMapOnly`,class:w.advancedOptionsContainer},L,C,x.tsx("div",{class:w.formSectionContainer},x.tsx("label",null,x.tsx("input",{"data-option-name":"attributionEnabled",type:"checkbox",onchange:this._toggleInputValue,tabIndex:0,checked:e,bind:this}),_.attribution))):null,k=this._layoutTabSelected?x.tsx("section",{key:"esri-print__layoutContent",id:`${this.id}__layoutContent`,"aria-labelledby":`${this.id}__layoutTab`,class:w.layoutSection,role:"tabpanel","aria-selected":this._layoutTabSelected.toString()},x.tsx("div",{class:w.panelContainer},u,O,this._layoutTabSelected?g:null),x.tsx("div",{class:this.classes(w.panelContainer,w.advancedOptionsSection)},x.tsx("button",{"aria-label":_.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForLayout?"true":"false",class:w.advancedOptionsButton,onclick:this._showAdvancedOptions,bind:this,type:"button"},x.tsx("div",{class:w.advancedOptionsButtonContainer},x.tsx("span",{"aria-hidden":"true",class:this.classes(w.iconRightTriangleArrow,w.advancedOptionsButtonIconClosed)}),x.tsx("span",{"aria-hidden":"true",class:this.classes(w.iconLeftTriangleArrow,w.advancedOptionsButtonIconClosed_RTL)}),x.tsx("span",{"aria-hidden":"true",class:this.classes(w.iconDownArrow,w.advancedOptionsButtonIconOpened)}),x.tsx("span",{class:w.advancedOptionsButtonTitle},_.advancedOptions))),I)):x.tsx("section",{key:"esri-print__mapOnlyContent",id:`${this.id}__mapOnlyContent`,"aria-selected":(!this._layoutTabSelected).toString(),"aria-labelledby":`${this.id}__mapOnlyTab`,class:w.mapOnlySection,role:"tabpanel"},x.tsx("div",{class:w.panelContainer},u,this._layoutTabSelected?null:g,x.tsx("div",{class:this.classes(w.sizeContainer,w.formSectionContainer)},x.tsx("div",{class:w.widthContainer},x.tsx("label",null,_.width,x.tsx("input",{type:"number",class:this.classes(w.inputText,w.input),"data-input-name":"width",onchange:this._updateInputValue,value:`${p}`,tabIndex:0,bind:this}))),x.tsx("div",{class:w.heightContainer},x.tsx("label",null,_.height,x.tsx("input",{type:"number",class:this.classes(w.inputText,w.input),"data-input-name":"height",onchange:this._updateInputValue,value:`${s}`,tabIndex:0,bind:this}))),x.tsx("button",{type:"button","aria-label":_.swap,class:this.classes(w.widgetButton,w.swapButton,w.iconSwap),onclick:this._switchInput,tabIndex:0,bind:this})),x.tsx("div",{class:this.classes(w.panelContainer,w.advancedOptionsSection)},x.tsx("button",{"aria-label":_.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForMapOnly?"true":"false",type:"button",class:w.advancedOptionsButton,onclick:this._showAdvancedOptions,bind:this},x.tsx("div",{class:w.advancedOptionsButtonContainer},x.tsx("span",{"aria-hidden":"true",class:this.classes(w.iconRightTriangleArrow,w.advancedOptionsButtonIconClosed)}),x.tsx("span",{"aria-hidden":"true",class:this.classes(w.iconLeftTriangleArrow,w.advancedOptionsButtonIconClosed_RTL)}),x.tsx("span",{"aria-hidden":"true",class:this.classes(w.iconDownArrow,w.advancedOptionsButtonIconOpened)}),x.tsx("span",{class:w.advancedOptionsButtonTitle},_.advancedOptions))),S))),F=this.exportedLinks.toArray(),M=this._renderExportedLink(F),A={[w.buttonDisabled]:c||!o&&!n},P=null!=this.get("view")&&"2d"!==this.get("view.type"),B=x.tsx("div",{class:w.panelError},P?_.sceneViewError:_.serviceError),E=x.tsx("div",null,x.tsx("ul",{class:w.layoutTabList,role:"tablist",onclick:this._toggleLayoutPanel,onkeydown:this._handleLayoutPanelKeyDown,bind:this},x.tsx("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:`${this.id}__layoutTab`,"data-tab-id":"layoutTab",class:w.layoutTab,role:"tab",tabIndex:0,"aria-selected":`${this._layoutTabSelected}`},_.layoutTab),x.tsx("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:`${this.id}__mapOnlyTab`,"data-tab-id":"mapOnlyTab",class:w.layoutTab,role:"tab",tabIndex:0,"aria-selected":`${!this._layoutTabSelected}`},_.mapOnlyTab)),k,x.tsx("button",{"aria-label":_.exportDescription,type:"button",class:this.classes(w.printButton,w.button,A),disabled:c,tabIndex:0,onclick:this._handlePrintMap,bind:this},_.export),h&&m.defaultTemplates.length>0?this.renderTemplateSectionTrigger():null,x.tsx("div",{class:w.exportedFilesContainer,afterUpdate:this._scrollExportIntoView,bind:this},x.tsx(y.Heading,{class:w.exportedFilesTitle,level:this.headingLevel},_.exportText),F.length>0?null:x.tsx("div",null,x.tsx("div",null,_.exportHint)),M)),V=x.tsx("div",{class:w.printWidgetContainer},x.tsx("header",{class:w.headerTitle},_.export),this.error||P||!this.view?B:E),D="initializing"===this.get("viewModel.state")?this._renderLoader():V;return x.tsx("div",{afterCreate:this._handleRootAfterCreate,bind:this,class:this.classes(w.base,w.widget,w.panel)},D)},n.renderTemplateSectionTrigger=function(){const{messages:e,_templateListPopover:t}=this,i=t.open;return x.tsx("button",{afterCreate:e=>this._selectTemplateNode=e,"aria-controls":i?`${this.id}__template-selection`:"","aria-label":e.selectTemplateDescription,"aria-pressed":i.toString(),class:this.classes(w.button,w.buttonTertiary,w.templateButton),onclick:this.handleSelectTemplateClick,title:e.selectTemplateDescription},e.selectTemplate)},n.renderTemplateList=function(){const{messages:e,messagesCommon:t,viewModel:i}=this,{defaultTemplates:a}=i,n=e.selectTemplateDescription,s=`${this.id}__template-selection`;return x.tsx("div",{class:this.classes(w.templateList,w.widget,w.panel),id:s},x.tsx(y.Heading,{class:w.menuHeader,level:this.headingLevel},e.selectTemplate),x.tsx("div",{class:w.templateListScroller},x.tsx("ul",{afterCreate:this.handleTemplateListCreation,"aria-activedescendant":`${this.id}__template-item--${this._focusedTemplateIndex}`,"aria-label":n,class:w.menuList,key:"templates",onblur:this.handleTemplateChildBlur,onclick:this.handleTemplateListClick,onkeydown:this.handleTemplateListKeyDown,role:"listbox",tabIndex:0,title:n},a.toArray().map(((e,t)=>{const{description:i}=e,a=t===this._focusedTemplateIndex;return x.tsx("li",{"aria-label":i,class:this.classes(w.menuItem,{[w.menuItemFocus]:a}),"data-template":e,id:`${this.id}__template-item--${t}`,key:e.label,title:i},e.label)})))),x.tsx("div",{class:w.templateListFooter},x.tsx("button",{type:"button",class:this.classes(w.button,w.buttonSecondary),onblur:this.handleTemplateChildBlur,onclick:this.handleCloseTemplateSelection},t.done)))},n.applyTemplate=function(e){var t;const{format:i,layout:a,layoutOptions:n}=e,{templateOptions:s}=this;this._templateListPopover.open=!1,this._toggleTab("map-only"===a?"mapOnlyTab":"layoutTab",!1),i&&(s.format=i),a&&(s.layout=a),this._focusedTemplateIndex=null,s.legendEnabled=null!=(t=null==n?void 0:n.legend)?t:s.legendEnabled,this.handleCloseTemplateSelection()},n.renderTitleOrFileNameSection=function(){const{templateOptions:e,messages:t}=this;let i,a,n,s;return this._layoutTabSelected?(i=t.title,a=t.titlePlaceHolder,n=e.title,s="title"):(i=t.fileName,a=t.fileNamePlaceHolder,n=e.fileName,s="fileName"),x.tsx("div",{class:w.formSectionContainer,key:s},x.tsx("label",null,i,x.tsx("input",{type:"text",tabIndex:0,placeholder:a,class:this.classes(w.inputText,w.input),value:n,"data-input-name":s,onchange:this._updateInputValue,bind:this})))},n._handleRootAfterCreate=function(e){this._rootNode=e,this.own(a.on(e,"scroll",(()=>{this._templateListPopover.open&&this.handleCloseTemplateSelection()})))},n._focusOnTabChange=function(e){if(!this._activeTabFocusRequested)return;const t=e.getAttribute("data-tab-id");("layoutTab"===t&&this._layoutTabSelected||"mapOnlyTab"===t&&!this._layoutTabSelected)&&(e.focus(),this._activeTabFocusRequested=!1)},n._renderLoader=function(){const e={[w.loader]:this._awaitingServerResponse};return x.tsx("div",{class:this.classes(e),key:"loader"})},n._createFileLink=function(e,t){const i=t||this.messages.untitled,a=e.format.toLowerCase(),n=a.indexOf("png")>-1?"png":a,s=i+n;return void 0!==this._exportedFileNameMap[s]?this._exportedFileNameMap[s]++:this._exportedFileNameMap[s]=0,new _({name:i,extension:n,count:this._exportedFileNameMap[s]})},n._toPrintTemplate=function(e){const{attributionEnabled:t,author:i,copyright:a,dpi:n,forceFeatureAttributes:s,format:o,height:l,layout:r,legendEnabled:d,title:p,scale:c,width:h}=e,_=new u({attributionVisible:t,layoutOptions:{authorText:i||"",copyrightText:a||"",titleText:p||""},forceFeatureAttributes:s,format:o,layout:r,outScale:c});return h&&(_.exportOptions.width=h),l&&(_.exportOptions.height=l),n&&(_.exportOptions.dpi=n),d||(_.layoutOptions.legendLayers=[]),_},n._resetToCurrentScale=function(){this.templateOptions.scale=this.viewModel.view.scale},n._updateInputValue=function(e){const t=e.target,i=t.getAttribute("data-input-name");let a;if("number"===t.type){if(!k(t.valueAsNumber)){const e=this.templateOptions[i];return void(t.value=`${e}`)}a=t.valueAsNumber}else a=t.value;this.templateOptions[i]=a},n._handleDPIChange=function(e){this._updateInputValue(e);const t=e.currentTarget.valueAsNumber,{height:i,width:a}=S(t),{templateOptions:n}=this;n.height=i,n.width=a},n._handlePrintMap=function(){this._pendingExportScroll=!0;const{templateOptions:e}=this,t=this._toPrintTemplate(e),i=this._layoutTabSelected?t.layoutOptions.titleText:e.fileName,a=this._createFileLink(t,i);this.exportedLinks.add(a),this.emit("submit",{link:a}),this.viewModel.print(t).then((e=>{a.set({url:e&&e.url,state:"ready"})})).catch((e=>{a.set({error:e,state:"error"})})).then((()=>{this.emit("complete",{link:a}),this.scheduleRender()}))},n._updateFromOption=function(e){const t=e.target,i=t.selectedOptions?t.selectedOptions.item(0).value:t.options[t.selectedIndex].value,a=t.getAttribute("data-target-property");this.templateOptions[a]=i},n._switchInput=function(){[this.templateOptions.width,this.templateOptions.height]=[this.templateOptions.height,this.templateOptions.width]},n._showAdvancedOptions=function(){this._layoutTabSelected?this._advancedOptionsVisibleForLayout=!this._advancedOptionsVisibleForLayout:this._advancedOptionsVisibleForMapOnly=!this._advancedOptionsVisibleForMapOnly},n._scrollExportIntoView=function(){if(this._pendingExportScroll){this._pendingExportScroll=!1;const{_rootNode:e,_rootNode:{clientHeight:t,scrollHeight:i}}=this,a=i-t;a>0&&(e.scrollTop=a)}},n._toggleInputValue=function(e){const t=e.target,i=t.getAttribute("data-option-name");this.templateOptions[i]=t.checked,"scaleEnabled"===i&&(this.viewModel.scaleEnabled=this.templateOptions.scaleEnabled,this.templateOptions[i]||this._resetToCurrentScale())},n._renderExportedLink=function(e){const t=this.messages;return e.map((e=>{const{error:i,url:a,formattedName:n,state:o}=e,l="error"===o,r="pending"===o,d="ready"===o,p={[w.anchorDisabled]:r||l};let c=a||null;c&&(c=s.addProxy(c));const u=s.hasSameOrigin(a,location.href),h={[w.iconSpinner]:r,[w.rotate]:r,[w.iconDownload]:u&&d,[w.iconLaunchLink]:!u&&d,[w.iconError]:l,[w.exportedFileError]:l},_={[w.exportedFileError]:l};let m;m=r?t.pending:d?t.ready:t.errorMessage;const b=l?i.message:"";return x.tsx("div",{"aria-label":m,class:w.exportedFile,"data-item":e,key:n,onclick:this._removeLink,title:b},x.tsx("a",{"aria-label":`${n}. ${t.linkReady}`,download:n,href:c,rel:"noreferrer",tabIndex:0,target:"_blank",class:this.classes(w.exportedFileLink,p)},x.tsx("span",{class:this.classes(h)}),x.tsx("span",{class:this.classes(w.exportedFileLinkTitle,_)},n)))}))},n._toggleLayoutPanel=function(e){const t=e.target;this._toggleTab(t.getAttribute("data-tab-id"))},n._toggleTab=function(e,t=!0){if(this._layoutTabSelected="layoutTab"===e,this._layoutTabSelected){const e=this.get("viewModel.templatesInfo.layout.choiceList");this.templateOptions.layout=e&&e[0]}else this.templateOptions.layout="MAP_ONLY";t&&(this._activeTabFocusRequested=!0)},n._handleLayoutPanelKeyDown=function(e){const t=a.eventKey(e),i=e.target.getAttribute("data-tab-id");if(g.isActivationKey(t))return this._toggleTab(i),e.preventDefault(),void e.stopPropagation();"ArrowLeft"!==t&&"ArrowRight"!==t||(this._toggleTab("layoutTab"===i?"mapOnlyTab":"layoutTab"),e.preventDefault(),e.stopPropagation())},i}(h);return t.__decorate([l.aliasOf("viewModel.allowedFormats")],F.prototype,"allowedFormats",void 0),t.__decorate([l.aliasOf("viewModel.allowedLayouts")],F.prototype,"allowedLayouts",void 0),t.__decorate([l.aliasOf("viewModel.error")],F.prototype,"error",void 0),t.__decorate([p.property({type:T})],F.prototype,"exportedLinks",void 0),t.__decorate([l.aliasOf("viewModel.extraParameters")],F.prototype,"extraParameters",void 0),t.__decorate([p.property()],F.prototype,"headingLevel",void 0),t.__decorate([p.property()],F.prototype,"iconClass",void 0),t.__decorate([l.aliasOf("viewModel.includeDefaultTemplates")],F.prototype,"includeDefaultTemplates",void 0),t.__decorate([p.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],F.prototype,"label",void 0),t.__decorate([p.property(),f.messageBundle("esri/widgets/Print/t9n/Print")],F.prototype,"messages",void 0),t.__decorate([p.property(),f.messageBundle("esri/t9n/common")],F.prototype,"messagesCommon",void 0),t.__decorate([l.aliasOf("viewModel.portal")],F.prototype,"portal",void 0),t.__decorate([l.aliasOf("viewModel.printServiceUrl")],F.prototype,"printServiceUrl",void 0),t.__decorate([p.property({type:b})],F.prototype,"templateOptions",void 0),t.__decorate([l.aliasOf("viewModel.view")],F.prototype,"view",void 0),t.__decorate([p.property({type:m})],F.prototype,"viewModel",void 0),F=t.__decorate([c.subclass("esri.widgets.Print")],F),F}));
