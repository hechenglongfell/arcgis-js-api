/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/Error","../../core/HandleOwner","../../core/maybe","../../core/promiseUtils","../../core/time","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../webdoc/Widgets","../../webdoc/widgets/FloorFilter","../support/GoTo"],(function(e,t,i,l,s,r,o,n,a,u,c,d,h,f,v,p,y){"use strict";function _(e){return"esri.WebMap"===e.declaredClass}function F(e){return"esri.WebScene"===e.declaredClass}let m=function(t){function s(e){var i;return(i=t.call(this,e)||this).filterMenuOpen=!1,i.filterMenuType="site",i.filterMode="base-floors",i.levelsExpanded=!0,i.searchTerm=null,i.view=null,i._updateFloorFilterTask=null,i}e._inheritsLoose(s,t);var u=s.prototype;return u.initialize=function(){this.handles.add([a.init(this,"view.map",(e=>{r.isSome(this._updateFloorFilterTask)&&(this._updateFloorFilterTask.abort(),this._updateFloorFilterTask=null),this._updateFloorFilterTask=o.createTask((()=>this._updateFloorFilterFromMap(e).then((()=>{this._setInitialViewState()}))))})),a.init(this,"view",((e,t)=>{this._unregisterWidget(t),this._registerWidget(e)}),!0),a.watch(this,"view.widthBreakpoint",(e=>{this._viewWidthBreakpoint=e})),a.watch(this,"view.heightBreakpoint",(e=>{this._viewHeightBreakpoint=e}))])},u.destroy=function(){this._unregisterWidget(this.view),this.view=null,r.isSome(this._updateFloorFilterTask)&&(this._updateFloorFilterTask.abort(),this._updateFloorFilterTask=null)},u.filterFacilities=function(e){let t=e;this.searchTerm&&(t=e.filter((e=>{const{name:t}=e;return t.toLowerCase().includes(this.searchTerm.toLowerCase())}))),this.site&&(t=t.filter((e=>e.siteId===this.site)));return t.sort(((e,t)=>{const i=e.name,l=t.name;return i>l?1:i===l?0:-1}))},u.filterSites=function(e){let t=e;this.searchTerm&&(t=e.filter((e=>{const{name:t}=e;return t.toLowerCase().includes(this.searchTerm.toLowerCase())})));return t.sort(((e,t)=>{const i=e.name,l=t.name;return i>l?1:i===l?0:-1}))},u.getBaseLevel=function(e){var t,i;const l=null==(t=this.filterFeatures)||null==(i=t.levels)?void 0:i.levelsInfo;let s=null;if(e){const{id:t}=e;l&&l.length>0&&l.forEach((e=>{0===e.verticalOrder&&e.facilityId===t&&(s=e)}))}return s},u.getFacility=function(e){var t,i,l,s;return null!=(t=null==(i=this.filterFeatures)||null==(l=i.facilities)||null==(s=l.facilitiesInfo)?void 0:s.find((t=>t.id===e)))?t:null},u.getFacilityLevels=function(e){var t,i;if(!e||null==(t=this.filterFeatures)||null==(i=t.levels)||!i.levelsInfo)return[];return this.filterFeatures.levels.levelsInfo.filter((t=>t.facilityId===e)).sort(((e,t)=>{const i=e.verticalOrder,l=t.verticalOrder;return i>l?-1:i===l?0:1}))},u.getLevel=function(e){var t,i,l,s;return null!=(t=null==(i=this.filterFeatures)||null==(l=i.levels)||null==(s=l.levelsInfo)?void 0:s.find((t=>t.id===e)))?t:null},u.getSite=function(e){var t,i,l,s;return null!=(t=null==(i=this.filterFeatures)||null==(l=i.sites)||null==(s=l.sitesInfo)?void 0:s.find((t=>t.id===e)))?t:null},u.goTo=function(e){const{view:t}=this;if(!t||!e)return;const{geometry:i}=e;if(i&&i.extent){const e={duration:n.Milliseconds(1e3),easing:"out-back"},t={target:i.extent,options:e};this.callGoTo(t)}},u.setFloors=function(e){var t,l,s;null==(t=this.view)||null==(l=t.map)||null==(s=l.layers)||s.forEach((e=>{"feature"===e.type&&this._computeViewAllModeFloors(e)})),this.view.floors=new i(this._computeFloors(e))},u.updateWebDocument=function(e){if(_(e)){var t,i,l;const s=new p({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:null!=(t=this.site)?t:null,facility:null!=(i=this.facility)?i:null,level:null!=(l=this.level)?l:null});e.widgets?e.widgets.floorFilter=s:e.widgets=new v({floorFilter:s})}},u._computeFloors=function(e){if("single-floor"===this.filterMode)this._computeSingleFloor(e);else if("base-floors"===this.filterMode)return"3d"===this.view.type?this._computeBaseFloors3D(e):this._computeBaseFloors(e);return this._computeEmptyFloors()},u._computeSingleFloor=function(e){if(!e)return this._computeEmptyFloors();const t=[];if("all"===(null==e?void 0:e.id)){this.getFacilityLevels(e.facilityId).forEach((e=>{e.id&&t.push(e.id)}))}else e&&t.push(e.id);return t},u._computeBaseFloors=function(e){var t,i;const l=null==(t=this.filterFeatures)||null==(i=t.levels)?void 0:i.levelsInfo;if(!l||!l.length)return this._computeEmptyFloors();const s=[];if("all"===(null==e?void 0:e.id)){this.getFacilityLevels(e.facilityId).forEach((e=>{e.id&&s.push(e.id)}))}else e&&s.push(e.id);const r=null==e?void 0:e.facilityId;return l.forEach((e=>{const{id:t,facilityId:i,verticalOrder:l}=e;(r||0!==l||s.includes(t))&&(i===r||0!==l||s.includes(t))||s.push(t)})),s},u._computeBaseFloors3D=function(e){var t,i;const l=null==(t=this.filterFeatures)||null==(i=t.levels)?void 0:i.levelsInfo;if(!l||!l.length)return this._computeEmptyFloors();const s=[],r=null==e?void 0:e.id.split("--");if((null==r?void 0:r.length)>1&&"all"===r[0]){this.getFacilityLevels(e.facilityId).forEach((e=>{e.id&&s.push(e.id)}))}else e&&s.push(e.id);const o=null==e?void 0:e.facilityId;return l.forEach((e=>{const{id:t,facilityId:i}=e;(o||s.includes(t))&&(i===o||s.includes(t))||s.push(t)})),s},u._computeEmptyFloors=function(){return[]},u._setFilterLayers=function(){const{view:e}=this;if(!this._isOverridden("filterLayers")){if(!_(e.map)&&!F(e.map))throw new l("Map must be a webmap or webscene");{var t;const l=e.map,u=null==l?void 0:l.layers;if((null==u||null==(t=u.items)?void 0:t.length)>0){var i,s,r,o,n,a;const e={siteLayer:null,facilityLayer:null,levelLayer:null},t=null==(i=l.floorInfo)||null==(s=i.siteLayer)?void 0:s.layerId,c=null==(r=l.floorInfo)||null==(o=r.facilityLayer)?void 0:o.layerId,d=null==(n=l.floorInfo)||null==(a=n.levelLayer)?void 0:a.layerId;u.items.filter((e=>"feature"===e.type||"scene"===e.type)).forEach((i=>{const l=i.id;l&&(l===t?e.siteLayer=i:l===c?e.facilityLayer=i:l===d&&(e.levelLayer=i))})),this.filterLayers=e}}}},u._getFilterFeatures=function(){var t=e._asyncToGenerator((function*(){if(this._isOverridden("filterFeatures"))return Promise.resolve(this.filterFeatures);const e={sites:null,facilities:null,levels:null},t=yield this._getSites();e.sites=t;const i=yield this._getFacilities();e.facilities=i;const l=yield this._getLevels();return e.levels=l,e}));function i(){return t.apply(this,arguments)}return i}(),u._getSites=function(){var t=e._asyncToGenerator((function*(){var e,t;const{filterLayers:i,view:l}=this,s=l.map,{siteLayer:r}=i,o={sitesInfo:[]};if(!r||null==s||null==(e=s.floorInfo)||!e.siteLayer)return o;const n=r.createQuery();n.where="1=1",n.returnGeometry=!0,n.outFields=["*"],n.returnZ=!0,"scene"===r.type&&(n.multipatchOption="xyFootprint");const{siteIdField:a,nameField:u}=s.floorInfo.siteLayer,c=yield r.queryFeatures(n);if((null==c||null==(t=c.features)?void 0:t.length)>0){c.features.forEach((e=>{const t=e.attributes,i=e.geometry,l=t[a],s=t[u];l&&s&&o.sitesInfo.push({id:l,name:s,geometry:i})}))}return o}));function i(){return t.apply(this,arguments)}return i}(),u._getFacilities=function(){var t=e._asyncToGenerator((function*(){var e,t;const{filterLayers:i,view:l}=this,s=l.map,{facilityLayer:r}=i,o={facilitiesInfo:[]};if(!r||null==s||null==(e=s.floorInfo)||!e.facilityLayer)return o;const n=r.createQuery();n.where="1=1",n.returnGeometry=!0,n.outFields=["*"],n.returnZ=!0,"scene"===r.type&&(n.multipatchOption="xyFootprint");const{facilityIdField:a,siteIdField:u,nameField:c}=s.floorInfo.facilityLayer,d=yield r.queryFeatures(n);if((null==d||null==(t=d.features)?void 0:t.length)>0){d.features.forEach((e=>{const t=e.attributes,i=e.geometry,l=t[a],s=t[u],r=t[c];l&&r&&o.facilitiesInfo.push({id:l,siteId:s,name:r,geometry:i})}))}return o}));function i(){return t.apply(this,arguments)}return i}(),u._getLevels=function(){var t=e._asyncToGenerator((function*(){var e,t;const{filterLayers:i,view:l}=this,s=l.map,{levelLayer:r}=i,o={levelsInfo:[]};if(!r||null==s||null==(e=s.floorInfo)||!e.levelLayer)return o;const n=r.createQuery();n.where="1=1",n.returnGeometry=!0,n.outFields=["*"],n.returnZ=!0;const{levelIdField:a,facilityIdField:u,longNameField:c,shortNameField:d,levelNumberField:h,verticalOrderField:f}=s.floorInfo.levelLayer,v=yield r.queryFeatures(n);if((null==v||null==(t=v.features)?void 0:t.length)>0){v.features.forEach((e=>{const t=e.attributes,i=t[a],l=t[u],s=t[c],r=t[d],n=t[h],v=t[f];i&&l&&s&&r&&"number"==typeof n&&"number"==typeof v&&o.levelsInfo.push({id:i,facilityId:l,longName:s,shortName:r,levelNumber:n,verticalOrder:v})}))}return o}));function i(){return t.apply(this,arguments)}return i}(),u._registerWidget=function(e){(null==e?void 0:e.persistableViewModels.some((e=>e===this)))||null==e||e.persistableViewModels.add(this)},u._unregisterWidget=function(e){null==e||e.persistableViewModels.remove(this)},u._setInitialViewState=function(){this.view&&(this._setFilterLayers(),this._getFilterFeatures().then((e=>{if(e)if(this.filterFeatures=e,this.hasFacilities&&this.hasLevels){this.hasMultipleSites||(this.filterMenuType="facility");this.view.when().then((()=>{if(this.facility&&this.level){this.filterMenuType="facility";const e=this.getFacility(this.facility),t=this.getLevel(this.level);this.setFloors(t),this.goTo(e)}else if(this.facility&&!this.level){this.filterMenuType="facility";const e=this.getFacility(this.facility),t=this.getBaseLevel(e);this.site||(this.site=e.siteId||void 0),this.level=(null==t?void 0:t.id)||void 0,this.setFloors(t),this.goTo(e)}else if(!this.facility&&this.level){this.filterMenuType="facility";const e=this.getLevel(this.level),t=this.getFacility(null==e?void 0:e.facilityId);this.facility=(null==t?void 0:t.id)||void 0,this.site||(this.site=(null==t?void 0:t.siteId)||void 0),this.setFloors(e),this.goTo(t)}else if(!this.site||this.facility||this.level)this.setFloors(null);else{this.filterMenuType="site";const e=this.getSite(this.site);this.setFloors(null),this.goTo(e)}}))}else console.error("Facilities and Levels are required for the Floor Filter widget")})).catch((e=>{console.error("Couldn't retrieve sites, facilities, and levels",e)})))},u._callOverride=function(e,t){this._override(e,t)},u._updateFloorFilterFromMap=function(){var t=e._asyncToGenerator((function*(e){var t;if(!e||!_(e))return;const i=null==e||null==(t=e.widgets)?void 0:t.floorFilter;i&&(this._isOverridden("enabled")||(this.enabled=i.enabled),this._isOverridden("longNames")||(this.longNames=i.longNames),this._isOverridden("minimized")||(this.minimized=i.minimized),this._isOverridden("pinnedLevels")||(this.pinnedLevels=i.pinnedLevels),this._isOverridden("site")||(this.site=i.site),this._isOverridden("facility")||(this.facility=i.facility),this._isOverridden("level")||(this.level=i.level))}));function i(e){return t.apply(this,arguments)}return i}(),u._computeViewAllModeFloors=function(e){var t;const{filterFeatures:l}=this;if(null!=(t=e.floorInfo)&&t.viewAllMode&&this.hasLevels&&this.hasFacilities&&"base-floors"===this.filterMode){const{level:t,facility:s}=this,r=[];l.levels.levelsInfo.forEach((e=>{const{id:i,facilityId:l}=e;s&&l===s?t&&i===t&&r.push(i):r.push(i)})),e.floorInfo.viewAllLevelIds=new i(r)}},e._createClass(s,[{key:"enabled",set:function(e){this._callOverride("enabled",e)}},{key:"facility",set:function(e){if(e&&this._isOverridden("facility")){const t=this.getFacility(e);this.hasMultipleSites&&(this.site=(null==t?void 0:t.siteId)||void 0)}this._callOverride("facility",e)}},{key:"filterFeatures",set:function(e){this._callOverride("filterFeatures",e)}},{key:"filterLayers",set:function(e){this._callOverride("filterLayers",e)}},{key:"hasFacilities",get:function(){var e,t,i,l;return(null==(e=this.filterLayers)?void 0:e.facilityLayer)&&(null==(t=this.filterFeatures)||null==(i=t.facilities)||null==(l=i.facilitiesInfo)?void 0:l.length)>0}},{key:"hasLevels",get:function(){var e,t,i,l;return(null==(e=this.filterLayers)?void 0:e.levelLayer)&&(null==(t=this.filterFeatures)||null==(i=t.levels)||null==(l=i.levelsInfo)?void 0:l.length)>0}},{key:"hasMultipleSites",get:function(){var e,t,i,l;return(null==(e=this.filterLayers)?void 0:e.siteLayer)&&(null==(t=this.filterFeatures)||null==(i=t.sites)||null==(l=i.sitesInfo)?void 0:l.length)>1}},{key:"isNormalMode",get:function(){let e=!0;const t=this._viewWidthBreakpoint,i=this._viewHeightBreakpoint;return"small"!==t&&"xsmall"!==t&&"small"!==i&&"xsmall"!==i||(e=!1),e}},{key:"level",set:function(e){if(!e)return this._callOverride("level",e),this.facility=void 0,this.site=void 0,void this.setFloors(null);let t=null,i=null;const l=null==e?void 0:e.split("--");var s;(null==l?void 0:l.length)>1&&"all"===l[0]?(i=l[1],t={id:e,facilityId:i,shortName:null,longName:null,levelNumber:null,verticalOrder:null}):(t=this.getLevel(e),i=null==(s=t)?void 0:s.facilityId);if(this.level!==e||this.isNormalMode||this.levelsExpanded){if(t&&this.hasFacilities&&this.hasLevels){var r;if(this.facility=i,this.hasMultipleSites)this.site=null==(r=this.getFacility(i))?void 0:r.siteId;this.setFloors(t)}else this._isOverridden("level")&&(this.facility=void 0,this.site=void 0,this.hasMultipleSites&&(this.filterMenuType="site"),this.setFloors(null));this._callOverride("level",e)}else{const e=this.getFacilityLevels(i);(null==e?void 0:e.length)>1&&(this.levelsExpanded=!0)}}},{key:"longNames",set:function(e){this._callOverride("longNames",e)}},{key:"minimized",set:function(e){this._callOverride("minimized",e)}},{key:"pinnedLevels",set:function(e){this._callOverride("pinnedLevels",e)}},{key:"site",set:function(e){this._callOverride("site",e)}},{key:"state",get:function(){return this.view&&this.filterFeatures&&this.hasFacilities&&this.hasLevels?"ready":this.view&&!this.filterFeatures?"loading":"disabled"}}]),s}(y.GoToMixin(s.HandleOwner));return t.__decorate([u.property({value:!1})],m.prototype,"enabled",null),t.__decorate([u.property({value:void 0})],m.prototype,"facility",null),t.__decorate([u.property({value:null})],m.prototype,"filterFeatures",null),t.__decorate([u.property({value:null})],m.prototype,"filterLayers",null),t.__decorate([u.property()],m.prototype,"filterMenuOpen",void 0),t.__decorate([u.property()],m.prototype,"filterMenuType",void 0),t.__decorate([u.property()],m.prototype,"filterMode",void 0),t.__decorate([u.property()],m.prototype,"hasFacilities",null),t.__decorate([u.property()],m.prototype,"hasLevels",null),t.__decorate([u.property()],m.prototype,"hasMultipleSites",null),t.__decorate([u.property({readOnly:!0})],m.prototype,"isNormalMode",null),t.__decorate([u.property({value:void 0})],m.prototype,"level",null),t.__decorate([u.property({value:!1})],m.prototype,"longNames",null),t.__decorate([u.property()],m.prototype,"levelsExpanded",void 0),t.__decorate([u.property({value:!1})],m.prototype,"minimized",null),t.__decorate([u.property({value:!1})],m.prototype,"pinnedLevels",null),t.__decorate([u.property()],m.prototype,"searchTerm",void 0),t.__decorate([u.property({value:void 0})],m.prototype,"site",null),t.__decorate([u.property({readOnly:!0})],m.prototype,"state",null),t.__decorate([u.property()],m.prototype,"view",void 0),t.__decorate([u.property()],m.prototype,"_viewHeightBreakpoint",void 0),t.__decorate([u.property()],m.prototype,"_viewWidthBreakpoint",void 0),t.__decorate([u.property()],m.prototype,"updateWebDocument",null),m=t.__decorate([f.subclass("esri/widgets/FloorFilter/FloorFilterViewModel")],m),m}));
