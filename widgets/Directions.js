/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/Collection","../core/events","../core/Handles","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Search","./Widget","./Directions/DirectionsViewModel","./Directions/support/CostSummary","./Directions/support/directionsUtils","./Directions/support/maneuverUtils","./Directions/support/resources","./Directions/support/RouteSections","./Search/support/locatorUtils","./support/DatePicker","./support/Heading","./support/TimePicker","./support/decorators/accessibleHandler","./support/decorators/messageBundle","../core/Logger","./support/jsxFactory","./support/widgetUtils","../chunks/sortable.esm","../intl/substitute","../intl/date","../intl/number"],(function(e,t,s,i,o,r,n,a,l,c,d,u,h,p,S,v,_,m,g,C,w,f,y,M,b,x,T,k,I,D,R,H,P,L){"use strict";const U={awaitingViewClickStop:"awaiting-view-click-stop"};function z(e){return e.results[0].results[0]}function O(){return[{},{}]}const A={hour:"numeric",minute:"numeric"},$={minimumIntegerDigits:2};function E(e){const t=e.getTimezoneOffset(),s=t>0?"-":"+",i=60,o=Math.abs(Math.floor(t/i)),r=Math.abs(Math.floor(t)%i);return`GMT${s}${L.formatNumber(o,$)}${L.formatNumber(r,$)}`}const B=100,F=500;function V(e){return!(null==e.composedPath||!e.composedPath().find((e=>{var t;return null==(t=e.classList)?void 0:t.contains("esri-search__suggestions-list")})))}let N=function(t){function s(e,s){var o;return(o=t.call(this,e,s)||this)._autoStopRemovalDelay=B,o._costSummary=new _,o._departureTime="now",o._datePicker=new y,o._handles=new r,o._newPlaceholderStop=null,o._pointerPressedSearchSuggestionStop=null,o._routeSections=new w,o._stops=new i(O()),o._stopsToSearches=new Map,o._timePicker=new b,o.apiKey=null,o.goToOverride=null,o.headingLevel=2,o.iconClass=C.CSS.widgetIcon,o.label=void 0,o.lastRoute=null,o.maxStops=null,o.messages=null,o.messagesCommon=null,o.messagesUnits=null,o.routeServiceUrl=void 0,o.routeSymbol=null,o.searchProperties=null,o.stopSymbols=null,o.view=null,o.viewModel=new v,o._setUpDragAndDropStops=e=>{o._sortable=R.Sortable.create(e,{draggable:`.${C.CSS.validStopRow}`,ghostClass:C.CSS.stopRowGhost,handle:`.${C.CSS.stopHandle}`,onEnd:o._handleStopInputDragEnd})},o._handleDragHandlePointerDown=()=>o._stops.forEach((e=>o._acquireSearch(e).activeMenu="none")),o._handleStopInputDragEnd=({oldIndex:e,newIndex:t,target:s})=>{if(e===t)return;const{children:i}=s,r=i[t],n=i[e],a=t-e<0;s.insertBefore(r,a?n.nextElementSibling:n);const l=o._stops;l.reorder(l.getItemAt(e),t),o._processStops()},o}e._inheritsLoose(s,t);var a=s.prototype;return a.initialize=function(){this.own([n.init(this,"viewModel.lastRoute",(()=>{this._routeSections.routePath=this.get("viewModel.directionLines"),this._activeManeuver=null,this._focusedManeuver=null,this.scheduleRender()})),n.init(this,"viewModel.selectedTravelMode, viewModel.departureTime",(()=>{this.get("viewModel.stops.length")>1&&this.getDirections()})),n.when(this,"view",((e,t)=>{if(t&&(this._viewClickHandle=null,this._handles.remove(t)),e){const t=this._prepPointerDownUpClick(),s=this._prepViewClick();t.pause(),s.pause(),this._handles.add([o.on(e.surface,"mousedown",(()=>this._autoStopRemovalDelay=F)),o.on(e.surface,"mouseup",(()=>this._autoStopRemovalDelay=B)),t,s],this.view.surface),this._pointerDownUpHandle=t,this._viewClickHandle=s}})),n.whenOnce(this,"routeServiceUrl",(()=>this.viewModel.load())),n.watch(this,"viewModel.stops.length",(e=>{0===e&&(this._stops.toArray().forEach((e=>this._removeStop(e,!0))),this._stops.addMany(O()),this.scheduleRender())}))])},a.destroy=function(){this._datePicker.destroy(),this._timePicker.destroy(),this._stopsToSearches.forEach((e=>e.destroy())),this._sortable&&this._sortable.destroy()},a.getDirections=function(){return null},a.zoomToRoute=function(){},a.render=function(){return I.tsx("div",{class:this.classes(C.CSS.base,C.CSS.scroller)},this._renderPanelContent())},a._renderPanelContent=function(){const{viewModel:{state:e}}=this,t="initializing"===e,s="error"===e&&!this.viewModel.serviceDescription,i="unauthenticated"===e,o={[C.CSS.panelContentLoading]:t,[C.CSS.panelContentError]:s,[C.CSS.panelContentSignIn]:i},r=t?"presentation":"group",n=i?this._renderSignIn():s?this._renderMessage(this._getErrorMessage()):t?this._renderLoader():this._renderReadyContent();return I.tsx("div",{class:this.classes(C.CSS.panelContent,o),role:r},n)},a._renderReadyContent=function(){return[this._renderStopsContainer(),this._renderTravelModeOptions(),this._renderDepartureTimeControls(),this._renderSectionSplitter(),this._renderDirectionsContainer(),this._renderDisclaimer()]},a._renderSignIn=function(){return I.tsx("div",{key:"sign-in",class:C.CSS.signInContent},I.tsx(M.Heading,{class:C.CSS.contentTitle,level:this.headingLevel},this.messages.widgetLabel),this._renderPlaceholder(),I.tsx(M.Heading,{level:this.headingLevel+1},this.messages.signInRequired),I.tsx("button",{class:this.classes(C.CSS.button,C.CSS.buttonSecondary,C.CSS.signInButton),tabIndex:0,onclick:this._handleSignInClick,bind:this,type:"button"},this.messagesCommon.auth.signIn))},a._handleSignInClick=function(){this.viewModel.load().catch((()=>{}))},a._renderTravelModeOptions=function(){const{travelModes:e}=this.viewModel;if(0===e.length)return null;const{selectedTravelMode:t}=this.viewModel,s=t.name||this.messages.travelMode;return I.tsx("select",{"aria-label":s,bind:this,class:this.classes(C.CSS.travelModeSelect,C.CSS.select),key:"esri-directions__travel-mode-options",onchange:this._handleTravelModeChange,title:s},e.map((e=>{const s=e.id===t.id;return I.tsx("option",{key:e,"data-mode":e,selected:s,value:e.id},e.name)})))},a._handleTravelModeChange=function(e){const t=e.currentTarget,s=t.item(t.selectedIndex);this.viewModel.selectedTravelMode=s["data-mode"]},a._renderStopsContainer=function(){return I.tsx("div",{class:C.CSS.section,key:"esri-directions__stops-container",role:"group"},this._renderStops())},a._renderDepartureTimeControls=function(){const e=this._departureTime,{messages:t}=this,s=t.departureTime;return I.tsx("div",{class:C.CSS.departureTime,key:"esri-directions__departure-time-controls",role:"group"},I.tsx("select",{"aria-label":s,bind:this,class:this.classes(C.CSS.departureTimeSelect,C.CSS.select),onchange:this._handleDepartureOptionChange,title:s},I.tsx("option",{value:"now",selected:"now"===e},t.leaveNow),I.tsx("option",{value:"depart-by",selected:"depart-by"===e},t.departBy),I.tsx("option",{value:"unspecified",selected:"unspecified"===e},t.timeUnspecified)),"depart-by"===e?this._renderTimeControls():null)},a._renderStops=function(){const e=this._stops;let t=0;e.forEach((e=>{"none"!==this._acquireSearch(e).activeMenu&&(t+=1)}));const s=e.toArray().map(((s,i)=>{const o=e.length,r=i>1&&!s.result,n={[C.CSS.stopsIcon]:i>=0&&i<o-1,[C.CSS.lastStopIcon]:i===o-1},a={[C.CSS.lastStopIconContainer]:i===o-1},l={[C.CSS.validStopRow]:!r},c=e.getItemAt(o-1),d=c&&c.result,u=e.getItemAt(i+1),h=u&&u.result,p=i===o-1,S=i===o-2,v=2===o&&0===i||o>2&&!p&&!S||o>2&&S&&h||o>2&&p&&!s.result,_=2===o||3===o&&!d||r,m=this._acquireSearch(s),{messages:g}=this,{removeStop:w,reverseStops:f,unlocated:y}=g,M=H.substitute(g.stopLabelTemplate,{number:i+1,label:s.result?s.result.name:y}),b=`${this.id}__stop--${i}`,x=!!m.searchTerm&&!!m.selectedResult&&!!s.result&&m.selectedResult===s.result,T={zIndex:"none"!==m.activeMenu?""+t--:""};return I.tsx("li",{"aria-label":M,afterCreate:this._handleStopFieldCreation,bind:this,class:this.classes(C.CSS.stopRow,l),id:b,key:i,"data-stop-index":i,styles:T},I.tsx("div",{class:C.CSS.stopHandle},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.CSS.stopIcon,C.CSS.handleIcon,C.CSS.stopHandleIcon,C.CSS.interactiveStopIcon),onpointerdown:this._handleDragHandlePointerDown}),I.tsx("div",{bind:this,"aria-labelledby":b,class:this.classes(C.CSS.stopIconContainer,a),"data-stop-index":i,onclick:this._handleStopIconClick,onkeydown:this._handleStopIconClick,role:"button"},I.tsx("span",{class:this.classes(C.CSS.stopIcon,n),tabindex:x?"0":null}))),I.tsx("div",{class:C.CSS.stopInput},m.render()),I.tsx("div",{class:C.CSS.stopOptions,role:"group"},I.tsx("div",{"aria-label":w,class:C.CSS.removeStopButton,bind:this,"data-stop-index":i,hidden:_,onkeydown:this._handleRemoveStop,onclick:this._handleRemoveStop,role:"button",tabIndex:0,title:w},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.CSS.stopIcon,C.CSS.removeStop,C.CSS.removeStopIcon,C.CSS.interactiveStopIcon)}),I.tsx("span",{class:C.CSS.screenReaderText},"removeStopTitle")),I.tsx("div",{"aria-label":f,class:C.CSS.reverseStops,bind:this,hidden:v,onkeydown:this._handleReverseStops,onclick:this._handleReverseStops,role:"button",tabIndex:0,title:f},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.CSS.stopIcon,C.CSS.reverseStopIcon,C.CSS.interactiveStopIcon)}),I.tsx("span",{class:C.CSS.screenReaderText},"removeStopTitle"))))})),i=e.every((e=>{const t=this._stopsToSearches.get(e);return e.result&&t.selectedResult===e.result})),o=this._stops.length>=this.maxStops,r=this.messages.addStop,n=e.length>=2&&i&&!o?I.tsx("div",{"aria-label":r,bind:this,class:C.CSS.addStop,key:"esri-directions__add-stop",onfocus:this._handleAddStopFocus,tabIndex:0},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.CSS.addStopIcon,C.CSS.stopIcon,C.CSS.interactiveStopIcon)}),I.tsx("div",{"aria-hidden":"true",class:C.CSS.addStopText},r)):null;return I.tsx("div",null,I.tsx("ol",{class:C.CSS.stops,role:"group",afterCreate:this._setUpDragAndDropStops},s),n)},a._handleStopIconClick=function(e){const t=e.currentTarget["data-stop-index"],s=this._stops.getItemAt(t);s&&s.result&&this._centerAtStop(s)},a._handleClearRouteClick=function(){this.viewModel.reset()},a._centerAtStop=function(e){this.viewModel.centerAt(e.result.feature)},a._handleStopFieldCreation=function(e){const t=this._newPlaceholderStop;if(!t)return;const s=e["data-stop-index"],i=this._stops.getItemAt(s);if(t===i){const e=this._acquireSearch(i);e.when((()=>{this.renderNow(),e.focus()}))}this._newPlaceholderStop=null},a._handleStopInputBlur=function(e,t){this._handles.remove(U.awaitingViewClickStop),this.view.cursor=this._previousCursor;if(!e.selectedResult||!t.result||e.selectedResult!==t.result)return"none"!==e.activeMenu||!e.searchTerm||e.selectedResult===t.result&&(e.selectedResult||t.result)?void(e.searchTerm||(this._viewClickHandle.resume(),clearTimeout(this._autoStopRemovalTimeoutId),this._autoStopRemovalTimeoutId=setTimeout((()=>{if(this.destroyed)return;if(this._viewClickHandle.pause(),"searching"===e.viewModel.state)return void this._pointerDownUpHandle.pause();if(this._pointerPressedSearchSuggestionStop)return;this._removeStop(t);!!t.result&&(t.result=null,this._processStops()),this.scheduleRender()}),this._autoStopRemovalDelay))):(e.search(),void this._pointerDownUpHandle.pause());this._pointerDownUpHandle.pause()},a._handleStopInputFocus=function(e,t){if(this._pointerDownUpHandle.resume(),this._handles.has(U.awaitingViewClickStop))return;const{view:s,view:{cursor:i}}=this;this._previousCursor=i,this._handles.add(n.init(e,"searchTerm",(e=>{s.cursor=0===e.length?"copy":i})),U.awaitingViewClickStop),this._activeStop=t},a._prepViewClick=function(){const e=this.get("viewModel.view"),t=o.pausable(e,"click",this._handleViewClick.bind(this)),s=o.pausable(e.surface,"click",(()=>{clearTimeout(this._autoStopRemovalTimeoutId),s.pause()}));return{remove(){s.remove(),t.remove()},pause(){s.pause(),t.pause()},resume(){s.resume(),t.resume()}}},a._prepPointerDownUpClick=function(){const e=o.pausable(document,"pointerdown",(e=>{this._pointerPressedSearchSuggestionStop=V(e)?this._activeStop:null})),t=o.pausable(document,"pointerup",(e=>{this._pointerDownUpHandle.pause();const t=V(e),s=this._activeStop;t||s!==this._pointerPressedSearchSuggestionStop||this._removeStop(s),this.scheduleRender(),this._pointerPressedSearchSuggestionStop=t?this._activeStop:null}));return{remove(){t.remove(),e.remove()},pause(){t.pause(),e.pause()},resume(){e.resume()}}},a._handleViewClick=function(e){const t=this._stopsToSearches.get(this._activeStop);t&&!t.searchTerm&&(t.search(e.mapPoint).then((e=>{const s=z(e),i=this._activeStop;i.result=s,i.result.feature.attributes.Name=s.name,t.searchTerm=s.name})),this.scheduleRender()),this._viewClickHandle.pause(),clearTimeout(this._autoStopRemovalTimeoutId)},a._handleAddStopFocus=function(){this._addNewPlaceholder()},a._addNewPlaceholder=function(){if(this._pointerDownUpHandle.pause(),this._newPlaceholderStop)return;const e={};this._stops.add(e),this._newPlaceholderStop=e},a._handleReverseStops=function(){this._reverseStops()},a._reverseStops=function(){this._stops.reverse(),this._processStops()},a._handleRemoveStop=function(e){const t=e.currentTarget["data-stop-index"];this._removeStop(this._stops.getItemAt(t)),this._processStops()},a._removeStop=function(e,t=!1){this._stops.length<=2&&!t||(this._disposeSearch(e),this._stops.remove(e))},a._handleDepartureOptionChange=function(e){const t=e.currentTarget,s=t.item(t.selectedIndex);"now"===s.value?(this._departureTime="now",this.viewModel.departureTime="now",this._handles.remove("departure-time-controls")):"depart-by"===s.value?(this._departureTime="depart-by",this._handles.add([n.init(this._datePicker,"value",(()=>this._updateDepartureTime())),n.init(this._timePicker,"value",(()=>this._updateDepartureTime()))],"departure-time-controls")):(this._departureTime="unspecified",this.viewModel.departureTime=null)},a._updateDepartureTime=function(){const e=this._datePicker.value,t=this._timePicker.value;this.viewModel.departureTime=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes())},a._renderTimeControls=function(){return I.tsx("div",{class:C.CSS.departureTimeControls,key:"esri-directions__time-controls",role:"group"},this._datePicker.render(),this._timePicker.render())},a._renderSectionSplitter=function(){return I.tsx("div",{class:C.CSS.sectionSplitter})},a._renderDisclaimer=function(){const{messages:e}=this,t=`<a class="${C.CSS.anchor}" href="http://www.esri.com/legal/software-license" rel="noreferrer" target="_blank">${e.esriTerms}</a>`,s=H.substitute(e.disclaimer,{esriTerms:t});return I.tsx("div",{class:C.CSS.disclaimer,innerHTML:s,key:"esri-directions__disclaimer"})},a._renderDirectionsContainer=function(){return I.tsx("div",{class:this.classes(C.CSS.directionsSection,C.CSS.section),key:"esri-directions__container"},this._renderDirectionsContainerContent())},a._renderLoader=function(){return I.tsx("div",{class:C.CSS.loader,key:"loader"})},a._renderWarningCard=function(){return I.tsx("div",{class:C.CSS.warningCard,role:"alert"},I.tsx("div",{class:C.CSS.warningHeader},I.tsx("span",{class:C.CSS.warningIcon,"aria-hidden":"true"}),I.tsx(M.Heading,{class:C.CSS.warningHeading,level:this.headingLevel},this.messagesCommon.warning)),I.tsx("div",{class:C.CSS.warningMessage},this._getErrorMessage()))},a._renderDirectionsContainerContent=function(){const{lastRoute:e,state:t}=this.viewModel,s="routing"===t;return"error"===t?this._renderWarningCard():s?this._renderLoader():e?I.tsx("div",{class:C.CSS.summary,key:"esri-directions__summary",role:"group"},this._renderCosts(),this._renderRouteActions(),this._renderManeuverSections()):I.tsx("div",{key:"esri-directions__placeholder",class:C.CSS.emptyContent},this._renderPlaceholder(),I.tsx(M.Heading,{class:C.CSS.message,level:this.headingLevel},this.messages.directionsPlaceholder))},a._renderPlaceholder=function(){return I.tsx("svg",{class:C.CSS.emptyIllustration,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},I.tsx("path",{fill:"currentcolor",d:"M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"}))},a._renderMessage=function(e){return I.tsx(M.Heading,{level:this.headingLevel},e)},a._renderRouteActions=function(){return I.tsx("div",{class:C.CSS.routeActions},I.tsx("button",{"aria-label":this.messages.clearRoute,class:this.classes(C.CSS.clearRouteButton,C.CSS.button,C.CSS.buttonTertiary),tabIndex:0,onclick:this._handleClearRouteClick,bind:this,type:"button"},this.messages.clearRoute))},a._renderManeuverSections=function(){const{sections:e}=this._routeSections;return I.tsx("div",{class:C.CSS.maneuvers,role:"group"},e.map(((t,s)=>{const{open:i}=t;let o;t.maneuvers.length>0&&i&&(o=I.tsx("ol",{class:C.CSS.maneuverList},t.maneuvers.map((e=>this._renderManeuver(e)))));const r=e.length>2,n=s===e.length-1,a={[C.CSS.collapsibleSection]:r},l={[C.CSS.openIcon]:!i,[C.CSS.closeIcon]:i};let c;if(r&&!n){const e=i?this.messagesCommon.open:this.messagesCommon.close;c=I.tsx("header",{class:this.classes(C.CSS.maneuverSectionHeader,C.CSS.maneuverSectionToggle),key:"esri-directions__maneuver-section-header"},I.tsx("div",{"aria-expanded":i.toString(),"aria-label":e,bind:this,class:C.CSS.maneuverSectionHeaderButton,"data-maneuver-section":t,onkeydown:this._handleSectionToggle,onclick:this._handleSectionToggle,role:"button",tabIndex:0,title:e},I.tsx(M.Heading,{class:C.CSS.maneuverSectionTitle,level:this.headingLevel},t.name),I.tsx("span",{"aria-hidden":"true",class:this.classes(l)})))}else c=I.tsx("header",{class:C.CSS.maneuverSectionHeader,key:"esri-directions__maneuver-section-header"},I.tsx(M.Heading,{class:C.CSS.maneuverSectionTitle,level:this.headingLevel},t.name));return I.tsx("section",{class:this.classes(C.CSS.maneuverSection,a)},c,o)})))},a._handleSectionToggle=function(e){const t=e.currentTarget["data-maneuver-section"];t.open=!t.open},a._renderCosts=function(){const e=this.get("viewModel.directionLines"),t=e[e.length-1],s=new Date(t.attributes.arriveTimeUTC),i=this._costSummary.set({directionsViewModel:this.viewModel,messages:this.messages,messagesUnits:this.messagesUnits}),{messages:o}=this,r=o.zoomToRoute,n=P.formatDate(s,A),a=H.substitute(o.etaTemplate,{time:`<strong>${n}</strong>`,gmt:`${E(s)}`}),l=o.primaryCosts,c=o.secondaryCosts,d=o.eta;return I.tsx("div",{"aria-label":r,bind:this,class:C.CSS.directionCosts,onkeydown:this._handleSummaryInteraction,onclick:this._handleSummaryInteraction,role:"button",tabIndex:0,title:r},I.tsx("div",{class:C.CSS.costsDetails,role:"group"},I.tsx("div",{"aria-label":l,class:C.CSS.primaryCosts,title:l},i.primary),I.tsx("div",{class:C.CSS.verticalSplitter}),I.tsx("div",{"aria-label":c,class:C.CSS.secondaryCosts,title:c},i.secondary)),I.tsx("div",{"aria-label":d,innerHTML:a,title:d}))},a._handleSummaryInteraction=function(){this._activeManeuver=null,this._focusedManeuver=null,this.viewModel.clearHighlights(),this.zoomToRoute()},a._getErrorMessage=function(){const{messages:e}=this,{error:t}=this.viewModel;return"directions-view-model:unable-to-route"===t.name?e.errors.unableToRoute:"directions-view-model:service-metadata-unavailable"===t.name?e.errors.unableToLoadServiceMetadata:e.errors.unknownError},a._normalizeSearchSources=function(e){this._overrideDefaultSources(e),this._applyLocatorSourceOverrides(e)},a._overrideDefaultSources=function(e){e.viewModel.defaultSources.forEach((e=>{e.autoNavigate=!1}))},a._applyLocatorSourceOverrides=function({allSources:e}){0!==e.length&&e.forEach((e=>{"url"in e&&e.url&&(null===e.locationType&&(e.locationType="street"),f.isArcGISWorldGeocoder(e.url)&&this.apiKey&&null==e.apiKey&&(e.apiKey=this.apiKey,e.url=f.meteredArcGISLocatorUrl))}))},a._acquireSearch=function(e){const t=this.get("viewModel.view");if(this._stopsToSearches.has(e)){const s=this._stopsToSearches.get(e);return s.view=t,this._overrideDefaultSources(s),s}const s=new p({view:t,resultGraphicEnabled:!1,popupEnabled:!1,...this.searchProperties});return this._normalizeSearchSources(s),this._handles.add([n.on(s,"allSources","change",(()=>this._normalizeSearchSources(s))),s.on("select-result",(()=>{e.result=s.selectedResult,e.result.feature.attributes.Name=s.selectedResult.name,this._processStops(),this.scheduleRender()})),s.on("search-focus",(()=>this._handleStopInputFocus(s,e))),s.on("search-blur",(()=>this._handleStopInputBlur(s,e)))],s),this._stopsToSearches.set(e,s),s},a._disposeSearch=function(e){this._stopsToSearches.get(e).destroy(),this._stopsToSearches.delete(e)},a._processStops=function(){const e=this.viewModel;e.stops.removeAll(),e.stops.addMany(this._stops.filter((e=>!!e.result)).map((e=>e.result.feature))),e.stops.length>1&&e.getDirections()},a._renderManeuver=function(e){const t="";let s;const{attributes:i}=e,o=this.get("viewModel.routeParameters.directionsLengthUnits"),{messages:r,messagesUnits:n}=this,a=m.formatDistance(r,n,i.length,{toUnits:o}),l=m.formatTime(i.time),c=m.getAssociatedStop(e);m.useSpatiallyLocalTime(e,this.get("viewModel.routeParameters.startTime"))?s=m.toSpatiallyLocalTimeString(r,i.arriveTimeUTC,i.ETA,"now"===this._departureTime):a&&(s=l?`${a}&nbsp;&middot;&nbsp;${l}`:a);const d=c,u=this._getFormattedManeuverText(e),h=this._getIconPath(i.maneuverType);if(d)return I.tsx("li",{class:C.CSS.maneuver,key:e},I.tsx("header",null,c.attributes.Name));const p=`esri-directions__maneuver-${e.uid}`,S=`esri-directions__cumulative-costs-${e.uid}`,v=`esri-directions__intermediate-costs-${e.uid}`,_={[C.CSS.maneuverActive]:this._activeManeuver===e};return I.tsx("li",{"aria-labelledby":`${p} ${S} ${v}`,bind:this,class:this.classes(C.CSS.maneuver,_),"data-maneuver":e,key:e,onclick:this._handleManeuverClick,onkeydown:this._handleManeuverClick,onfocus:this._handleManeuverFocus,onmouseover:this._handleManeuverMouseOver,onmouseout:this._handleManeuverMouseOut,onblur:this._handleManeuverBlur,tabIndex:0},I.tsx("img",{alt:"",class:C.CSS.maneuverIcon,src:h}),I.tsx("div",{class:C.CSS.maneuverCostsContainer},I.tsx("span",{id:p,innerHTML:u}),I.tsx("div",{class:C.CSS.maneuverCosts},I.tsx("div",{class:C.CSS.horizontalSplitter}),I.tsx("div",{id:S,"aria-label":r.cumulativeCosts,class:C.CSS.cumulativeCost,innerHTML:t,title:r.cumulativeCosts}),I.tsx("div",{id:v,"aria-label":r.intermediateCosts,class:C.CSS.intermediateCost,innerHTML:s,title:r.intermediateCosts}))))},a._getIconPath=function(e){const t=g.toIconName(e),s=2===window.devicePixelRatio?"@2x":"";return`${C.getManeuversIconDir()}${t}${s}.png`},a._handleManeuverClick=function(e){const t=e.currentTarget["data-maneuver"];if(this._activeManeuver===t)return this._activeManeuver=null,void this.zoomToRoute();this._activeManeuver=t,this.viewModel.centerAt(t),this.viewModel.highlightSegment(t)},a._handleManeuverMouseOver=function(e){if(this._activeManeuver||this._focusedManeuver)return;const t=e.currentTarget["data-maneuver"];this.viewModel.highlightSegment(t)},a._handleManeuverMouseOut=function(){this._activeManeuver||this._focusedManeuver||this.viewModel.clearHighlights()},a._handleManeuverBlur=function(){this._activeManeuver||(this._focusedManeuver=null,this.viewModel.clearHighlights())},a._handleManeuverFocus=function(e){if(this._activeManeuver)return;const t=e.currentTarget["data-maneuver"];this._focusedManeuver=t,this.viewModel.highlightSegment(t)},a._getFormattedManeuverText=function(e){const{attributes:{text:t},strings:s}=e;if(!s)return t;let i=t;return s.forEach((e=>{i=i.replace(e.string,`<strong>${e.string}</strong>`)})),i},s}(S);t.__decorate([a.aliasOf("viewModel.apiKey")],N.prototype,"apiKey",void 0),t.__decorate([a.aliasOf("viewModel.goToOverride")],N.prototype,"goToOverride",void 0),t.__decorate([u.property()],N.prototype,"headingLevel",void 0),t.__decorate([u.property()],N.prototype,"iconClass",void 0),t.__decorate([u.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],N.prototype,"label",void 0),t.__decorate([a.aliasOf("viewModel.lastRoute")],N.prototype,"lastRoute",void 0),t.__decorate([a.aliasOf("viewModel.maxStops")],N.prototype,"maxStops",void 0),t.__decorate([u.property(),T.messageBundle("esri/widgets/Directions/t9n/Directions")],N.prototype,"messages",void 0),t.__decorate([u.property(),T.messageBundle("esri/t9n/common")],N.prototype,"messagesCommon",void 0),t.__decorate([u.property(),T.messageBundle("esri/core/t9n/Units")],N.prototype,"messagesUnits",void 0),t.__decorate([a.aliasOf("viewModel.routeServiceUrl")],N.prototype,"routeServiceUrl",void 0),t.__decorate([a.aliasOf("viewModel.routeSymbol")],N.prototype,"routeSymbol",void 0),t.__decorate([u.property()],N.prototype,"searchProperties",void 0),t.__decorate([a.aliasOf("viewModel.stopSymbols")],N.prototype,"stopSymbols",void 0),t.__decorate([a.aliasOf("viewModel.view")],N.prototype,"view",void 0),t.__decorate([u.property({type:v})],N.prototype,"viewModel",void 0),t.__decorate([a.aliasOf("viewModel.getDirections")],N.prototype,"getDirections",null),t.__decorate([a.aliasOf("viewModel.zoomToRoute")],N.prototype,"zoomToRoute",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleStopIconClick",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleClearRouteClick",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleReverseStops",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleRemoveStop",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleSectionToggle",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleSummaryInteraction",null),t.__decorate([x.accessibleHandler()],N.prototype,"_handleManeuverClick",null),N=t.__decorate([h.subclass("esri.widgets.Directions")],N);return N}));
