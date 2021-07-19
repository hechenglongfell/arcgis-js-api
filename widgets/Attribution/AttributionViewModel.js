/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/asyncUtils","../../core/Collection","../../core/HandleOwner","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../geometry/support/contains","../../geometry/support/webMercatorUtils","../../geometry/SpatialReference"],(function(t,e,i,n,r,o,a,s,c,u,l,d,p,h,y){"use strict";function f(t,e){return t&&"copyright"in t&&(!e||"function"==typeof t.originOf&&"user"===t.originOf("copyright"))}function b(t,e){return t.length!==e.length||t.some(((t,i)=>t.text!==e[i].text))}function g(t,e,i){if(!i||!e)return;t.find((t=>t.layerView===e&&t.text===i))||t.push({text:i,layerView:e})}function _(t){return"bing-maps"===t.type}const m=[];let A=function(e){function i(i){var n;return(n=e.call(this,i)||this).clear=()=>{n._fetchedAttributionData.clear(),n._pendingAttributions.clear(),n.handles.remove("suspension"),n.notifyChange("state")},n._pendingAttributions=new Set,n._fetchedAttributionData=new Map,n.items=new r,n.view=null,n._allLayerViewsChange=t=>{n.handles.remove("suspension");const e=n.get("view.allLayerViews");e&&n.handles.add(e.map((t=>t.watch(["suspended","attributionVisible"],n._updateAttributionItems))),"suspension"),t&&t.removed&&t.removed.forEach((t=>{n._pendingAttributions.delete(t),n._fetchedAttributionData.delete(t)})),n._updateAttributionItems()},n._updateAttributionItems=()=>{const t=n.get("view.allLayerViews");m.length=0,t?(t.forEach((t=>{if(t.suspended||!t.get("layer.attributionVisible"))return;const e=t.layer;if(f(e,"user"))return void g(m,t,e.copyright);if(e.hasAttributionData){if(n._fetchedAttributionData.has(t)){const i=n._fetchedAttributionData.get(t);return void(i?g(m,t,n._getDynamicAttribution(i,n.view,e)):f(e)&&g(m,t,e.copyright))}return void n._fetchAttributionData(t)}const i=e.get("portalItem.accessInformation");g(m,t,i||e.copyright)})),b(n.items,m)&&(n.items.removeAll(),n.items.addMany(m)),m.length=0,n.notifyChange("state")):n.clear()},n.handles.add([a.on(t._assertThisInitialized(n),"view.allLayerViews","change",n._allLayerViewsChange,n._allLayerViewsChange,n.clear),a.whenTrue(t._assertThisInitialized(n),"view.stationary",(()=>n._updateAttributionItems()))]),n}t._inheritsLoose(i,e);var o=i.prototype;return o.destroy=function(){this.view=null,this._fetchedAttributionData.clear(),this._pendingAttributions.clear(),this.items.removeAll()},o._fetchAttributionData=function(){var e=t._asyncToGenerator((function*(t){if(this._pendingAttributions.has(t))return;this._pendingAttributions.add(t);const e=yield n.result(t.layer.fetchAttributionData());if(this._pendingAttributions.has(t)){const i=e.ok?this._createContributionIndex(e.value,_(t.layer)):null;this._pendingAttributions.delete(t),this._fetchedAttributionData.set(t,i)}this._updateAttributionItems()}));function i(t){return e.apply(this,arguments)}return i}(),o._createContributionIndex=function(t,e){const i=t.contributors,n={};if(!i)return n;for(let r=0;r<i.length;r++){const t=i[r],o=t.coverageAreas;if(!o)return;for(const i of o){const o=i.bbox,a=i.zoomMin-(e&&i.zoomMin?1:0),s=i.zoomMax-(e&&i.zoomMax?1:0),c={xmin:o[1],ymin:o[0],xmax:o[3],ymax:o[2],spatialReference:y.WGS84},u={extent:h.geographicToWebMercator(c),attribution:t.attribution||"",score:null!=i.score?i.score:100,id:r};for(let t=a;t<=s;t++)n[t]=n[t]||[],n[t].push(u)}}return n.maxKey=Math.max.apply(null,Object.keys(n)),n},o._getDynamicAttribution=function(t,e,i){const{extent:n,scale:r}=e;let o=i.tileInfo.scaleToZoom(r);if(o=Math.min(t.maxKey,Math.round(o)),!n||null==o||o<=-1)return"";const a=t[o],s=h.project(n.center.clone().normalize(),e.spatialReference),c={};return a?a.filter((t=>{const e=!c[t.id]&&s&&p.extentContainsPoint(t.extent,s);return e&&(c[t.id]=!0),e})).sort(((t,e)=>e.score-t.score||t.objectId-e.objectId)).map((t=>t.attribution)).join(", "):""},t._createClass(i,[{key:"state",get:function(){return this.get("view.ready")?this._pendingAttributions.size>0?"loading":"ready":"disabled"}}]),i}(o.HandleOwner);return e.__decorate([s.property({readOnly:!0,type:r})],A.prototype,"items",void 0),e.__decorate([s.property({readOnly:!0})],A.prototype,"state",null),e.__decorate([s.property()],A.prototype,"view",void 0),A=e.__decorate([d.subclass("esri.widgets.Attribution.AttributionViewModel")],A),A}));
