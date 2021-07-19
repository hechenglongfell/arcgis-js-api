/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/deprecate","../core/events","../core/Handles","../core/Logger","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../webdoc/support/Thumbnail","./Widget","./Bookmarks/BookmarksUserState","./Bookmarks/BookmarksViewModel","./FeatureTable/Grid/support/ButtonMenu","./FeatureTable/Grid/support/ButtonMenuItem","./support/Heading","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","../chunks/sortable.esm"],(function(t,e,o,r,i,s,n,a,d,l,u,k,c,m,h,_,b,p,g,B,f,v,y,I){"use strict";function E(t,e,o){t.splice(o,0,t.splice(e,1)[0])}const x="bookmarks",S="data-bookmark-uid",w={base:"esri-bookmarks esri-widget--panel",loaderContainer:"esri-bookmarks__loader-container",loader:"esri-bookmarks__loader",fadeIn:"esri-bookmarks--fade-in",bookmarkList:"esri-bookmarks__list",bookmarkListSortable:"esri-bookmarks__list--sortable",bookmark:"esri-bookmarks__bookmark",bookmarkButton:"esri-bookmarks__bookmark-button",bookmarkImageContainer:"esri-bookmarks__bookmark-image-container",bookmarkEditButton:"esri-bookmarks__bookmark-edit-button",bookmarkDragHandle:"esri-bookmarks_bookmark-drag-handle",bookmarkDragHandleIcon:"esri-bookmarks_bookmark-drag-handle-icon",bookmarkIcon:"esri-bookmarks__bookmark-icon",bookmarkImage:"esri-bookmarks__image",bookmarkName:"esri-bookmarks__bookmark-name",bookmarkActive:"esri-bookmarks__bookmark--active",noBookmarksContainer:"esri-widget__content--empty",noBookmarksHeader:"esri-bookmarks__no-bookmarks-heading",noBookmarksIcon:"esri-widget__no-bookmark-icon",noBookmarksDescription:"esri-bookmarks__no-bookmarks-description",addingBookmark:"esri-bookmarks__adding-bookmark",addBookmark:"esri-bookmarks__add-bookmark",addBookmarkButton:"esri-bookmarks__add-bookmark-button",addBookmarkIcon:"esri-bookmarks__add-bookmark-icon",authoringCard:"esri-bookmarks__authoring-card",authoringContainer:"esri-bookmarks__authoring-container",authoringForm:"esri-bookmarks__authoring-form",authoringLabel:"esri-bookmarks__authoring-label",authoringActions:"esri-bookmarks__authoring-actions",authoringInputInvalid:"esri-bookmarks__authoring-input--invalid",authoringDeleteButton:"esri-bookmarks__authoring-delete-button",authoringCancelButton:"esri-bookmarks__authoring-cancel-button",esriWidget:"esri-widget",esriWidgetDisabled:"esri-widget--disabled",esriButton:"esri-button",esriButtonTertiary:"esri-button--tertiary",esriInput:"esri-input",iconHandle:"esri-icon-handle-vertical",iconPlus:"esri-icon-plus",iconEdit:"esri-icon-edit",iconHandleHorizontal:"esri-icon-handle-horizontal",iconRefresh:"esri-icon-refresh",iconLink:"esri-icon-link",iconRemove:"esri-icon-erase",widgetIcon:"esri-icon-bookmark",header:"esri-widget__heading",loading:"esri-icon-loading-indicator",rotating:"esri-rotating"},A={addBookmark:!0,thumbnail:!0},C=/^https:\/\/.*/i,U="esri.widgets.Bookmarks",M=s.getLogger(U);let N=function(e){function s(t,o){var r;return(r=e.call(this,t,o)||this)._handles=new i,r._addInputNode=null,r._editInputNode=null,r._urlEditInputNode=null,r._addBookmarkButtonNode=null,r._focusAddBookmarkButton=!1,r._focusEditInputBox=!1,r._focusAddInputBox=!1,r._focusUrlEditInputBox=!1,r._sortable=null,r._sortableNode=null,r._focusSortUid=null,r._selectedSortUid=null,r._sortableSavedItems=null,r._userState=null,r.defaultCreateOptions=null,r.defaultEditOptions=null,r.bookmarks=null,r.disabled=!1,r.editingEnabled=!1,r.headingLevel=2,r.goToOverride=null,r.iconClass=w.widgetIcon,r.label=void 0,r.messages=null,r.messagesCommon=null,r.messagesUnits=null,r.view=null,r.viewModel=new _,r.visibleElements={...A},r}t._inheritsLoose(s,e);var a=s.prototype;return a.initialize=function(){this.own([n.init(this,"viewModel.bookmarks",(()=>this._bookmarksInitialized())),n.init(this,"editingEnabled",(()=>this._toggleSorting()))])},a.destroy=function(){this._destroySortable(),this._handles.destroy(),this._handles=null,this._editMenu.destroy()},a.castVisibleElements=function(t){return{...A,...t}},a.endAddBookmark=function(){this._userState=null},a.goTo=function(t){return this.viewModel.goTo(t)},a.render=function(){const{state:t}=this.viewModel,e="loading"===t?this.renderLoading():this.renderBookmarks();return y.tsx("div",{class:this.classes(w.base,w.esriWidget,{[w.esriWidgetDisabled]:this.disabled})},e)},a.startAddBookmark=function(){this._userState=new h({state:"add"}),this._focusAddInputBox=!0,this.scheduleRender()},a.renderLoading=function(){return y.tsx("div",{class:w.loaderContainer,key:"loader"},y.tsx("div",{class:w.loader}))},a.renderNoBookmarksContainer=function(){const{messages:t}=this;return y.tsx("div",{class:w.noBookmarksContainer,key:"no-bookmarks"},y.tsx("span",{"aria-hidden":"true",class:this.classes(w.noBookmarksIcon,w.widgetIcon)}),y.tsx(g.Heading,{level:this.headingLevel,class:this.classes(w.header,w.noBookmarksHeader)},null==t?void 0:t.noBookmarksHeading),y.tsx("p",{class:w.noBookmarksDescription},null==t?void 0:t.noBookmarksDescription))},a.renderAddBookmarkLoading=function(){var t;return y.tsx("div",{key:"adding-bookmark",class:w.addingBookmark},y.tsx("span",{"aria-hidden":"true",class:this.classes(w.loading,w.rotating)}),null==(t=this.messages)?void 0:t.addingBookmark)},a.renderBookmarkItems=function(t){if(!t)return null;const{_userState:e,editingEnabled:o}=this;return t.map((t=>o&&t&&e&&("edit"===e.state||"edit-thumbnail"===e.state)&&e.bookmark===t?"edit-thumbnail"===e.state?this.renderEditingBookmarkUrl(e.editedBookmark):this.renderEditingBookmark(e.editedBookmark):this.renderBookmark(t))).toArray()},a.renderBookmarksContainer=function(t){var e;const{_userState:o,editingEnabled:r}=this,i="add"===(null==o?void 0:o.state),s=r&&!i?this.renderAddBookmarkButton():null,n=r?i&&o.loading?this.renderAddBookmarkLoading():"add"===(null==o?void 0:o.state)?this.renderAddingBookmark():null:null;return[y.tsx("ul",{key:"bookmark-list","aria-label":null==(e=this.messages)?void 0:e.widgetLabel,class:this.classes(w.bookmarkList,{[w.bookmarkListSortable]:this.editingEnabled}),afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this},this.renderBookmarkItems(t)),s,n]},a.renderAddBookmarkButton=function(){var t;return this.visibleElements.addBookmark?y.tsx("div",{key:"add-bookmark-item",class:w.addBookmark},y.tsx("button",{class:this.classes(w.esriButton,w.esriButtonTertiary,w.addBookmarkButton),onclick:this.startAddBookmark,afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,"data-node-ref":"_addBookmarkButtonNode",bind:this,type:"button"},y.tsx("span",{"aria-hidden":"true",class:this.classes(w.addBookmarkIcon,w.iconPlus)}),null==(t=this.messages)?void 0:t.addBookmark)):null},a.renderBookmarks=function(){const{bookmarks:t}=this.viewModel,e=t&&t.filter(Boolean),o=e&&e.length,r=o||this.editingEnabled?this.renderBookmarksContainer(e):null;return[o?null:this.renderNoBookmarksContainer(),r]},a.renderEditContainer=function(t){const{messagesCommon:e}=this;return y.tsx("div",{key:"edit-container"},y.tsx("button",{title:null==e?void 0:e.edit,"aria-label":null==e?void 0:e.edit,"data-bookmark":t,onclick:this._showEditBookmarkForm,bind:this,class:w.bookmarkEditButton,type:"button"},y.tsx("span",{"aria-hidden":"true",class:w.iconEdit})))},a.renderDragHandle=function(t){const{messagesCommon:e}=this,o={[S]:t.uid};return y.tsx("div",{role:"button",tabIndex:0,key:"drag-handle",bind:this,class:w.bookmarkDragHandle,onkeydown:this._dragHandleKeydown,afterCreate:this._focusDragHandle,afterUpdate:this._focusDragHandle,onblur:this._dragHandleBlur,"aria-pressed":this._selectedSortUid===t.uid?"true":"false","aria-label":null==e?void 0:e.dragHandleLabel,title:null==e?void 0:e.dragHandleTitle,...o},y.tsx("span",{"aria-hidden":"true",class:this.classes(w.bookmarkDragHandleIcon,w.iconHandle)}))},a.renderBookmarkImageIcon=function(){return y.tsx("span",{"aria-hidden":"true",class:this.classes(w.bookmarkIcon,w.widgetIcon)})},a.renderBookmarkImage=function(t){const{visibleElements:e}=this,{thumbnail:o}=t,r=o&&o.url||"";return e.thumbnail&&r?y.tsx("img",{src:r,alt:"",class:w.bookmarkImage}):null},a.renderBookmarkButton=function(t){const{messagesCommon:e}=this,{name:o}=t,r=o||(null==e?void 0:e.untitled),i=y.tsx("div",{class:w.bookmarkImageContainer},this.renderBookmarkImage(t)||this.renderBookmarkImageIcon());return y.tsx("button",{key:"bookmark-button",class:w.bookmarkButton,bind:this,"data-bookmark":t,onclick:this._goToBookmark,type:"button"},i,y.tsx("span",{class:w.bookmarkName},r))},a.renderBookmark=function(t){const{activeBookmark:e}=this.viewModel,o={[w.bookmarkActive]:e===t},r=this.editingEnabled?this.renderEditContainer(t):null,i={[S]:t.uid},s=this.editingEnabled?this.renderDragHandle(t):null;return y.tsx("li",{key:t,class:this.classes(w.bookmark,o),...i},s,this.renderBookmarkButton(t),r)},a.renderEditingBookmarkName=function(t){const{messages:e,_userState:o}=this,r="name-required"===o.validationState;return y.tsx("label",{class:w.authoringLabel},null==e?void 0:e.title,r?y.tsx("strong",null,null==e?void 0:e.invalidTitle):null,y.tsx("input",{required:!0,bind:this,class:this.classes(w.esriInput,r?w.authoringInputInvalid:null),type:"text",value:t.name,afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,"data-bookmark":t,"data-node-ref":"_editInputNode",placeholder:null==e?void 0:e.titlePlaceholder}))},a.renderEditingBookmarkUrlActions=function(){const{messagesCommon:t}=this;return y.tsx("div",{class:w.authoringActions},y.tsx("input",{type:"button",value:null==t?void 0:t.back,class:this.classes(w.esriButton,w.esriButtonTertiary),onclick:this._closeUrlEditBookmarkForm,bind:this}),y.tsx("input",{class:w.esriButton,type:"submit",value:null==t?void 0:t.add}))},a.renderEditingBookmarkActions=function(){const{messagesCommon:t}=this,{bookmark:e}=this._userState;return y.tsx("div",{class:w.authoringActions},y.tsx("input",{type:"button",value:null==t?void 0:t.delete,class:this.classes(w.esriButton,w.esriButtonTertiary,w.authoringDeleteButton),"data-bookmark":e,onclick:this._deleteBookmark,bind:this}),y.tsx("input",{type:"button",value:null==t?void 0:t.cancel,class:this.classes(w.esriButton,w.esriButtonTertiary),onclick:this._closeEditBookmarkForm,bind:this}),y.tsx("input",{class:w.esriButton,type:"submit",value:null==t?void 0:t.save}))},a.renderEditingBookmarkUrlInput=function(t){var e;const{messages:o,_userState:r}=this,i=null==(e=t.thumbnail)?void 0:e.url,s=C.test(i)?i:null,n="absolute-url-required"===r.validationState;return y.tsx("label",{class:w.authoringLabel},n?y.tsx("strong",null,null==o?void 0:o.invalidImageUrl):null,y.tsx("input",{required:!0,bind:this,class:this.classes(w.esriInput,n?w.authoringInputInvalid:null),type:"text",value:s,afterCreate:this._storeUrlEditInput,afterUpdate:this._focusUrlEditInput,"data-bookmark":t,"data-node-ref":"_urlEditInputNode",title:null==o?void 0:o.imageUrlTooltip,placeholder:null==o?void 0:o.imageUrlPlaceholder}))},a.renderEditingBookmarkUrl=function(t){const e={[S]:t.uid};return y.tsx("li",{key:"edit-bookmark-url-form",class:w.authoringCard,...e},y.tsx("form",{class:w.authoringForm,onsubmit:this._editBookmarkUrlSubmit,bind:this},this.renderEditingBookmarkUrlInput(t),this.renderEditingBookmarkUrlActions()))},a.renderEditingBookmark=function(t){const e={[S]:t.uid};return y.tsx("li",{key:"edit-bookmark-form",class:w.authoringCard,...e},y.tsx("form",{class:w.authoringForm,onsubmit:this._editBookmarkSubmit,bind:this},y.tsx("div",{class:w.authoringContainer},y.tsx("div",{class:w.bookmarkImageContainer},this.renderBookmarkImage(t),this._editMenu.render()),this.renderEditingBookmarkName(t)),this.renderEditingBookmarkActions()))},a.renderAddingBookmarkName=function(){const{_userState:t,messages:e}=this,o="name-required"===t.validationState;return y.tsx("label",{class:w.authoringLabel},null==e?void 0:e.title,o?y.tsx("strong",null,null==e?void 0:e.invalidTitle):null,y.tsx("input",{required:!0,bind:this,class:this.classes(w.esriInput,o?w.authoringInputInvalid:null),type:"text",afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,"data-node-ref":"_addInputNode",value:"",placeholder:null==e?void 0:e.titlePlaceholder}))},a.renderAddingBookmarkActions=function(){const{messagesCommon:t}=this;return y.tsx("div",{class:this.classes(w.authoringActions)},y.tsx("input",{type:"button",value:null==t?void 0:t.cancel,class:this.classes(w.esriButton,w.esriButtonTertiary,w.authoringCancelButton),onclick:this._endAddBookmark.bind(this),bind:this}),y.tsx("input",{class:w.esriButton,type:"submit",value:null==t?void 0:t.add}))},a.renderAddingBookmark=function(){return y.tsx("div",{key:"add-bookmark-form",class:w.authoringCard},y.tsx("form",{class:w.authoringForm,onsubmit:this._addBookmarkSubmit,bind:this},this.renderAddingBookmarkName(),this.renderAddingBookmarkActions()))},a._dragHandleBlur=function(){this._selectedSortUid=null,this.scheduleRender()},a._dragHandleKeydown=function(t){const{_sortableSavedItems:e}=this,o=["ArrowDown","ArrowUp","Escape","Tab"," ","Enter"],i=r.eventKey(t);if(-1===o.indexOf(i))return;const{_sortable:s,_selectedSortUid:n}=this,a=s.toArray(),d=t.target.getAttribute(S),l=a.indexOf(d);if(B.isActivationKey(i)){const t=n&&n===d;return this._selectedSortUid=t?null:d,this._sortableSavedItems=t?null:this._sortable.toArray(),void this.scheduleRender()}if("Tab"===i)return this._selectedSortUid=null,void this.scheduleRender();if("Escape"===i&&e)return t.stopPropagation(),this._selectedSortUid=null,this._updateSortItems(e,s,d),void this.scheduleRender();if(-1===l||!n)return;const u="ArrowUp"===i?l-1:l+1;u>=a.length||u<=-1||(E(a,l,u),this._updateSortItems(a,s,d))},a._updateSortItems=function(t,e,o){e.sort(t),this._sortBookmarks(e),this._focusSortUid=o,this._selectedSortUid=o},a._focusDragHandle=function(t){const{_focusSortUid:e}=this;if(!t||!e)return;t.getAttribute(S)===e&&(t.focus(),this._focusSortUid=null)},a._toggleSorting=function(){const{_sortable:t,_sortableNode:e,editingEnabled:o}=this;if(e)if(t)t.option("disabled",!o);else{const t=I.Sortable.create(e,{dataIdAttr:S,handle:`.${w.bookmarkDragHandle}`,group:x,disabled:!o,onSort:()=>this._sortBookmarks(t)});this._sortable=t}},a._sortNodeCreated=function(t){this._sortableNode=t,this._toggleSorting()},a._sortBookmarks=function(t){const{bookmarks:e}=this.viewModel;if(!e)return;const o=t.toArray();e.sort(((t,e)=>{const r=o.indexOf(t.uid),i=o.indexOf(e.uid);return r>i?1:r<i?-1:0}))},a._destroySortable=function(){const{_sortable:t}=this;t&&t.destroy(),this._sortable=null},a._endAddBookmark=function(){this._focusAddBookmarkButton=!0,this.endAddBookmark()},a._bookmarksInitialized=function(){const t="bookmarks-init",{_handles:e}=this;e.remove(t),e.add(n.on(this,"viewModel.bookmarks","change",(()=>this._bookmarksChanged())),t)},a._bookmarksChanged=function(){const t="bookmarks-change",{bookmarks:e}=this.viewModel,{_handles:o}=this;o.remove(t);const r=e.map((t=>n.watch(t,["active","name","thumbnail.url"],(()=>this.scheduleRender()))));o.add(r,t),this.scheduleRender()},a._showEditBookmarkForm=function(t){const e=t.currentTarget["data-bookmark"];this._focusEditInputBox=!0,this._userState=new h({bookmark:e,state:"edit"}),this.viewModel.goTo(e),this.scheduleRender()},a._closeUrlEditBookmarkForm=function(){this._focusEditInputBox=!0,this._userState.state="edit"},a._closeEditBookmarkForm=function(){this._userState=null},a._addBookmarkSubmit=function(t){t.preventDefault();const{_addInputNode:e,_userState:o}=this,r=e&&e.value.trim();r?(o.loading=!0,this.viewModel.createBookmark().then((t=>{t.name=r,this.viewModel.bookmarks.add(t),this._endAddBookmark()}))):o.validationState="name-required"},a._editBookmarkAndClose=function(){var e=t._asyncToGenerator((function*(t,e){yield this.viewModel.editBookmark(t,e),this._closeEditBookmarkForm()}));function o(t,o){return e.apply(this,arguments)}return o}(),a._editBookmarkSubmit=function(t){t.preventDefault();const{_editInputNode:e,_userState:o}=this,r=e&&e.value.trim();r?(o.bookmark.name=r,o.bookmark.thumbnail=o.editedBookmark.thumbnail,this._editBookmarkAndClose(o.bookmark,{takeScreenshot:!1})):o.validationState="name-required"},a._storeAddBookmarkButton=function(t){this._addBookmarkButtonNode=t,this._focusAddBookmark()},a._storeEditInput=function(t){this._editInputNode=t,this._focusEditInput()},a._storeAddInput=function(t){this._addInputNode=t,this._focusAddInput()},a._storeUrlEditInput=function(t){this._urlEditInputNode=t,this._focusUrlEditInput()},a._focusUrlEditInput=function(){this._urlEditInputNode&&this._focusUrlEditInputBox&&(this._focusUrlEditInputBox=!1,this._urlEditInputNode.focus())},a._focusAddInput=function(){this._addInputNode&&this._focusAddInputBox&&(this._focusAddInputBox=!1,this._addInputNode.focus())},a._focusAddBookmark=function(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())},a._focusEditInput=function(){this._editInputNode&&this._focusEditInputBox&&(this._focusEditInputBox=!1,this._editInputNode.focus())},a._deleteBookmark=function(t){const e=t.currentTarget["data-bookmark"];this.viewModel.bookmarks.remove(e)},a._goToBookmark=function(t){const e=t.currentTarget["data-bookmark"];this.endAddBookmark(),this._closeEditBookmarkForm(),this.viewModel.goTo(e)},a._refreshThumbnail=function(){var e=t._asyncToGenerator((function*(){const{_userState:t,_editMenu:e,viewModel:o}=this;t.validationState=void 0,yield o.editBookmark(this._userState.editedBookmark,{takeScreenshot:!0,captureViewpoint:!1,captureRotation:!1,captureScale:!1}),e.open=!1,this._focusEditInputBox=!0,this.scheduleRender()}));function o(){return e.apply(this,arguments)}return o}(),a._removeThumbnail=function(){const{_userState:t,_editMenu:e}=this;t.editedBookmark.thumbnail=null,t.validationState=void 0,e.open=!1,this._focusEditInputBox=!0,this.scheduleRender()},a._startUseImageUrl=function(){this._userState.state="edit-thumbnail",this._editMenu.open=!1,this._focusUrlEditInputBox=!0,this.scheduleRender()},a._editBookmarkUrlSubmit=function(t){t.preventDefault();const{_urlEditInputNode:e,_userState:o}=this,r=e.value;C.test(r)?(r&&(o.editedBookmark.thumbnail=new c({url:r})),this._closeUrlEditBookmarkForm()):o.validationState="absolute-url-required"},t._createClass(s,[{key:"_editMenuItems",get:function(){var t,e;const{messages:o,_userState:r}=this,i=null==r||null==(t=r.editedBookmark)||null==(e=t.thumbnail)?void 0:e.url;return[new p({label:null==o?void 0:o.menu.refreshThumbnail,iconClass:w.iconRefresh,clickFunction:()=>this._refreshThumbnail()}),new p({label:C.test(i)?null==o?void 0:o.menu.editImageUrl:null==o?void 0:o.menu.useImageUrl,iconClass:w.iconLink,clickFunction:()=>this._startUseImageUrl()}),i?new p({label:null==o?void 0:o.menu.removeThumbnail,iconClass:w.iconRemove,clickFunction:()=>this._removeThumbnail()}):null].filter(Boolean)}},{key:"_editMenu",get:function(){const{_editMenuItems:t,messages:e}=this,o=this._get("_editMenu");o&&o.destroy();const r=new b({iconClass:w.iconHandleHorizontal,label:null==e?void 0:e.menu.label});return r.items=t,r}},{key:"bookmarkCreationOptions",get:function(){return o.deprecatedProperty(M,"bookmarkCreationOptions",{replacement:"defaultCreateOptions",version:"4.18"}),this.viewModel.defaultCreateOptions},set:function(t){o.deprecatedProperty(M,"bookmarkCreationOptions",{replacement:"defaultCreateOptions",version:"4.18"}),this.viewModel.defaultCreateOptions=t}}]),s}(m);return e.__decorate([u.property({type:h})],N.prototype,"_userState",void 0),e.__decorate([u.property({readOnly:!0})],N.prototype,"_editMenuItems",null),e.__decorate([u.property({readOnly:!0})],N.prototype,"_editMenu",null),e.__decorate([u.property()],N.prototype,"bookmarkCreationOptions",null),e.__decorate([a.aliasOf("viewModel.defaultCreateOptions")],N.prototype,"defaultCreateOptions",void 0),e.__decorate([a.aliasOf("viewModel.defaultEditOptions")],N.prototype,"defaultEditOptions",void 0),e.__decorate([a.aliasOf("viewModel.bookmarks")],N.prototype,"bookmarks",void 0),e.__decorate([u.property()],N.prototype,"disabled",void 0),e.__decorate([u.property()],N.prototype,"editingEnabled",void 0),e.__decorate([u.property()],N.prototype,"headingLevel",void 0),e.__decorate([a.aliasOf("viewModel.goToOverride")],N.prototype,"goToOverride",void 0),e.__decorate([u.property()],N.prototype,"iconClass",void 0),e.__decorate([u.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],N.prototype,"label",void 0),e.__decorate([u.property()],N.prototype,"localeStrings",void 0),e.__decorate([u.property(),f.messageBundle("esri/widgets/Bookmarks/t9n/Bookmarks")],N.prototype,"messages",void 0),e.__decorate([u.property(),f.messageBundle("esri/t9n/common")],N.prototype,"messagesCommon",void 0),e.__decorate([u.property(),f.messageBundle("esri/core/t9n/Units")],N.prototype,"messagesUnits",void 0),e.__decorate([a.aliasOf("viewModel.view")],N.prototype,"view",void 0),e.__decorate([u.property({type:_}),v.vmEvent(["select-bookmark","bookmark-edit","bookmark-select"])],N.prototype,"viewModel",void 0),e.__decorate([u.property()],N.prototype,"visibleElements",void 0),e.__decorate([l.cast("visibleElements")],N.prototype,"castVisibleElements",null),e.__decorate([u.property()],N.prototype,"endAddBookmark",null),e.__decorate([u.property()],N.prototype,"startAddBookmark",null),N=e.__decorate([k.subclass(U)],N),N}));
