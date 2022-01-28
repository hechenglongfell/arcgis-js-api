/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../core/maybe","../../../../core/screenUtils","../../../../chunks/rbush","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/boundsUtils","../../../../geometry/support/normalizeUtils","../../../../geometry/support/normalizeUtilsCommon","../../../../symbols/cim/CIMSymbolDrawHelper","../../../../symbols/cim/CIMSymbolHelper","./GraphicStoreItem","./graphicsUtils"],(function(e,t,i,r,o,s,n,u,a,c,h){"use strict";const l={minX:0,minY:0,maxX:0,maxY:0},d=r.create(),p=1e-5;function m(e,t,i,r,o){return l.minX=t,l.minY=i,l.maxX=r,l.maxY=o,e.search(l)}function f(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}let g=function(){function l(e,t,r,o,s,n,u){this._graphics=o,this._onAdd=s,this._onRemove=n,this._hashToCIM=u,this._index=i.rbush(9,f),this._itemByGraphic=new Map,this._inflatedSizeHelper=new a.CIMSimbolInflatedSizeHelper,this._tileInfoView=e,this._uidFieldName=r;const c=e.getClosestInfoForScale(t);c&&(this._resolution=this._tileInfoView.getTileResolution(c.level))}var g=l.prototype;return g.setResourceManager=function(e){this._cimResourceManager=e,this._hittestDrawHelper=new u.HittestDrawHelper(e)},g.hitTest=function(e,t,i,o,n){e=s.normalizeMapX(e,this._tileInfoView.spatialReference);const u=.5*o*window.devicePixelRatio*i;d[0]=e-u,d[1]=t-u,d[2]=e+u,d[3]=t+u;const a=.5*o*(i+h.PIXEL_BUFFER),c=m(this._index,e-a,t-a,e+a,t+a);if(!c||0===c.length)return[];const l=[],p=r.create(),f=r.create();for(const s of c){const{geometry:e,symbolResource:t}=s;this._getSymbolBounds(p,t,e,f,n),f[3]=f[2]=f[1]=f[0]=0,r.intersects(p,d)&&s.graphic.visible&&l.push(s)}if(0===l.length)return[];const g=this._hittestDrawHelper,b=[];for(const r of l){const{geometry:e,symbolResource:t}=r,{hash:i,textInfo:s}=t,u=this._hashToCIM.get(i);u&&(g.hitTest(d,u.symbol,e,s,n,o)&&b.push(r))}return b.sort(_),b.map((e=>e.graphic))},g.getGraphicsData=function(e,t,i){const r=this._searchForItems(t);if(0===r.length||0===i.length)return[];r.sort(((e,t)=>e.zorder-t.zorder)),r[0].insertAfter=-1;for(let c=1;c<r.length;c++)r[c].insertAfter=r[c-1].graphic.uid;r.sort(((e,t)=>e.graphic.uid-t.graphic.uid)),i.sort(((e,t)=>e.uid-t.uid));let o,s=0,n=0;const u=t.resolution,a=[],h={originPosition:"upperLeft",scale:[u,u],translate:[t.bounds[0],t.bounds[3]]};for(const l of i){for(n=-2;s<r.length;)if(o=r[s],s++,l.uid===o.graphic.uid){n=o.insertAfter;break}if(!o.geometry||-2===n)continue;const i=o.getGeometryQuantized(h,t.bounds,this._tileInfoView.spatialReference,u),d={...o.graphic.attributes};d[this._uidFieldName]=l.uid,null==o.groupId&&(o.groupId=e.createTemplateGroup(o.symbol,null)),a.push({centroid:c.getCentroidQuantized(o,h),geometry:i,attributes:d,symbol:o.symbol,groupId:o.groupId,insertAfter:n,zorder:o.zorder})}return a.sort(((e,t)=>e.zorder-t.zorder)),a},g.queryTileData=function(e,t){if(0===this._graphics.length)return[];const{bounds:i,resolution:r}=t,o=this._searchForItems(t),s=[];return 0===o.length||this._createTileGraphics(s,e,o,{originPosition:"upperLeft",scale:[r,r],translate:[i[0],i[3]]},t),s},g.has=function(e){return this._itemByGraphic.has(e)},g.getBounds=function(e){const t=this._itemByGraphic.get(e);return t?t.bounds:null},g.getAllBounds=function(){return Array.from(this._itemByGraphic.values()).filter((e=>e.graphic.visible)).map((e=>e.bounds))},g.addOrModify=function(t,i,r){if(!t||e.isNone(i))return;this.has(t)&&this.remove(t),this._onAdd(t);const o=[0,0,0,0],s=this._getSymbolBounds(null,i,r,o,0),n=c.acquire(t,i,r,e.isSome(s)?s:null,o);return this._itemByGraphic.set(t,n),r&&this._index.insert(n),n.bounds},g.remove=function(e){if(!this._itemByGraphic.has(e))return;this._onRemove(e);const t=this._itemByGraphic.get(e);t.bounds&&this._index.remove(t),this._itemByGraphic.delete(e)},g.updateZ=function(){const e=this._graphics.items;let t,i;for(let r=0;r<e.length;r++)i=e[r],t=this._itemByGraphic.get(i),t&&(t.zorder=r)},g.update=function(t,i,o){const s=this._itemByGraphic.get(t);s.groupId=null;const n=r.clone(s.bounds);this._index.remove(s);const u=this._getSymbolBounds(s.bounds,i,o,s.size,0);return e.isSome(u)&&s.set(t,i,o,u,s.size),o&&this._index.insert(s),{oldBounds:n,newBounds:s.bounds}},g.updateLevel=function(t){if(this._resolution===t)return;this._resolution=t,this._index.clear();const i=this._itemByGraphic,r=[];for(const[o,s]of i){const t=this._getSymbolBounds(s.bounds,s.symbolResource,s.geometry,s.size,0);s.geometry&&e.isSome(t)&&(s.bounds=t,r.push(s))}this._index.load(r)},g.clear=function(){this._itemByGraphic.clear(),this._index.clear()},g._createTileGraphics=function(e,t,i,r,o){const s=this._uidFieldName,n=this._tileInfoView.spatialReference,{bounds:u,resolution:a}=o;let h,l,d,p;i.sort(((e,t)=>e.zorder-t.zorder));for(let m=0;m<i.length;m++){d=i[m],h=d.graphic,l=d.getGeometryQuantized(r,u,n,a),p=0===m?-1:i[m-1].graphic.uid;const o={...d.graphic.attributes};o[s]=h.uid,null==d.groupId&&(d.groupId=t.createTemplateGroup(d.symbol,null)),e.push({centroid:c.getCentroidQuantized(d,r),geometry:l,attributes:o,symbol:d.symbol,groupId:d.groupId,insertAfter:p,zorder:d.zorder})}},g._searchForItems=function(e){const t=this._tileInfoView.spatialReference,i=e.bounds;if(t.isWrappable){const[o,s]=n.getSpatialReferenceMinMaxX(t),u=Math.abs(i[2]-s)<p,a=Math.abs(i[0]-o)<p;if((!u||!a)&&(u||a)){const t=e.resolution;let n;n=u?r.create([o,i[1],o+t*h.PIXEL_BUFFER,i[3]]):r.create([s-t*h.PIXEL_BUFFER,i[1],s,i[3]]);const a=m(this._index,i[0],i[1],i[2],i[3]),c=m(this._index,n[0],n[1],n[2],n[3]);return[...new Set([...a,...c])]}}return m(this._index,i[0],i[1],i[2],i[3])},g._getSymbolBounds=function(e,i,s,n,u){if(!i||!i.symbol||!s)return null;if(e||(e=r.create()),o.getBoundsXY(e,s),!n||0===n[0]&&0===n[1]&&0===n[2]&&0===n[3]){const{hash:e,textInfo:r}=i,o=this._hashToCIM.get(e);if(!o)return null;n||(n=[0,0,0,0]);const s=this._inflatedSizeHelper.getSymbolInflateSize(n,o.symbol,this._cimResourceManager,u,r);n[0]=t.pt2px(s[0]),n[1]=t.pt2px(s[1]),n[2]=t.pt2px(s[2]),n[3]=t.pt2px(s[3])}const c=this._resolution,h=a.CIMSimbolInflatedSizeHelper.SafeSize(n);return e[0]-=h*c,e[1]-=h*c,e[2]+=h*c,e[3]+=h*c,e},l}();const _=(e,t)=>{const i=h.graphicGeometryToNumber(e.graphic),r=h.graphicGeometryToNumber(t.graphic);return i===r?t.zorder-e.zorder:i-r};return g}));
