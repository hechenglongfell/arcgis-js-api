/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../assets","../core/Handles","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","./Widget","./BasemapGallery/BasemapGalleryViewModel","./BasemapGallery/css","./support/Heading","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/jsxFactory","./support/widgetUtils"],(function(e,t,s,a,i,r,o,l,n,d,c,p,u,m,h,y,g,_){"use strict";let b=function(s){function o(e,t){var a;return(a=s.call(this,e,t)||this)._handles=new i,a._focusBasemapItemEnabled=!1,a.disabled=!1,a.headingLevel=2,a.iconClass=u.CSS.widgetIcon,a.messages=null,a.viewModel=new p,a}t._inheritsLoose(o,s);var l=o.prototype;return l.initialize=function(){const e=this._handles;this.addHandles([r.on((()=>this.viewModel.items),"change",(t=>{const s="basemap-gallery-item-changes",{added:a,moved:i}=t;e.remove(s),e.add([...a,...i].map((e=>r.watch((()=>e.state),(()=>this.scheduleRender())))),s),this.scheduleRender()})),r.when((()=>this.source),(()=>this.viewModel.load()),{initial:!0,once:!0})])},l.destroy=function(){this._handles.destroy()},l.loadDependencies=function(){return new Promise(((t,s)=>e(["../chunks/calcite-scrim"],t,s)))},l.render=function(){const e="loading"===this.source.state,t=this.disabled||"disabled"===this.viewModel.state,s=this.viewModel.items.map(((e,t)=>this._renderBasemapGalleryItem(e,t))).toArray(),a={[u.CSS.sourceLoading]:e,[u.CSS.disabled]:t},i=e?g.tsx("div",{class:u.CSS.loader,key:"esri-basemap-gallery__loader"}):null,r=e?null:s.length>0?g.tsx("ul",{bind:this,"aria-disabled":this.disabled,"aria-label":this.label,class:u.CSS.itemContainer,key:"esri-basemap-gallery__item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},s):g.tsx("div",{class:u.CSS.emptyMessage,key:"esri-basemap-gallery__empty-message"},g.tsx(m.Heading,{level:this.headingLevel},this.messages.noBasemaps));return g.tsx("div",{class:this.classes(u.CSS.base,a)},i,r)},l._getRoundRobinIndex=function(e,t){return(e+t)%t},l._handleKeyDown=function(e){const{key:t}=e;if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t))return;e.preventDefault();const{items:s,activeBasemapIndex:a}=this.viewModel,i="ArrowUp"===t||"ArrowLeft"===t?this._getRoundRobinIndex(Math.max(a-1,-1),s.length):this._getRoundRobinIndex(a+1,s.length),r=s.getItemAt(i);"ready"===r?.state&&(this.viewModel.activeBasemap=r.basemap),this._focusBasemapItemEnabled=!0},l._focusBasemapItem=function(e){this._focusBasemapItemEnabled&&0===e.tabIndex&&(e.focus(),this._focusBasemapItemEnabled=!1)},l._handleClick=function(e){const t=e.currentTarget["data-item"];"ready"===t.state&&(this.viewModel.activeBasemap=t.basemap)},l._renderBasemapGalleryItem=function(e,t){const s=e.basemap.thumbnailUrl||a.getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg"),i=e.basemap.title,r=e.basemap.portalItem?.snippet,o=e.error?.message||r||i,{viewModel:{state:l,activeBasemapIndex:n}}=this,d=this.disabled||"disabled"===l,c=n===t,p=c||-1===n&&0===t?0:-1,m="loading"===l,h={[u.CSS.selectedItem]:c,[u.CSS.itemError]:"error"===e.state},y=`basemapgallery-item-${e.uid}`;return g.tsx("li",{"aria-checked":c.toString(),"aria-disabled":d.toString(),"aria-labelledby":y,bind:this,class:this.classes(u.CSS.item,h),"data-item":e,onkeydown:this._handleClick,onclick:this._handleClick,role:"radio",tabIndex:p,afterUpdate:this._focusBasemapItem,title:o},g.tsx("img",{alt:"",class:u.CSS.itemThumbnail,src:s}),g.tsx("div",{id:y,class:u.CSS.itemTitle},i),"loading"===e.state||c&&m?g.tsx("calcite-scrim",null,g.tsx("span",{"aria-hidden":"true",role:"presentation",class:u.CSS.loaderAnimation})):null)},t._createClass(o,[{key:"activeBasemap",get:function(){return this.viewModel.activeBasemap},set:function(e){this.viewModel.activeBasemap=e}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"source",get:function(){return this.viewModel.source},set:function(e){this.viewModel.source=e}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}}]),o}(c);s.__decorate([o.property()],b.prototype,"activeBasemap",null),s.__decorate([o.property()],b.prototype,"disabled",void 0),s.__decorate([o.property()],b.prototype,"headingLevel",void 0),s.__decorate([o.property()],b.prototype,"iconClass",void 0),s.__decorate([o.property()],b.prototype,"label",null),s.__decorate([o.property(),y.messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")],b.prototype,"messages",void 0),s.__decorate([o.property()],b.prototype,"source",null),s.__decorate([o.property()],b.prototype,"view",null),s.__decorate([o.property()],b.prototype,"viewModel",void 0),s.__decorate([h.accessibleHandler()],b.prototype,"_handleClick",null),b=s.__decorate([d.subclass("esri.widgets.BasemapGallery")],b);return b}));
