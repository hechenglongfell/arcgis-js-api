/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/vec2"],(function(e){"use strict";function t(e,t){e.delete(t)}return function(){function i(e,t,i){this.maxSize=e,this.tileInfoView=t,this.removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[]}var n=i.prototype;return n.has=function(e){return this._tilePerId.has(e)},n.get=function(e){return this._tilePerId.get(e)},n.pop=function(e){const i=this._tilePerId.get(e);if(!i)return null;const n=i.key.level,r=this._tileKeysPerLevel[n];t(this._tilePerId,e);for(let t=0;t<r.length;t++)if(r[t].id===e){r.splice(t,1);break}return i.visible=!0,i},n.add=function(e){e.visible=!1;const t=e.key,i=t.id;if(this._tilePerId.has(i))return;this._tilePerId.set(i,e);const n=t.level;this._tileKeysPerLevel[n]||(this._tileKeysPerLevel[n]=[]),this._tileKeysPerLevel[n].push(t)},n.prune=function(e,t,i){let n=this._tilePerId.size;if(n<=this.maxSize)return;let r=this._tileKeysPerLevel.length-1;for(;n>this.maxSize&&r>=0;)r!==e&&(n=this._pruneAroundCenterTile(n,t,i,r)),r--;n>this.maxSize&&(n=this._pruneAroundCenterTile(n,t,i,e))},n._pruneAroundCenterTile=function(t,i,n,r){const s=this._tileKeysPerLevel[r];if(!s||0===s.length)return t;const{size:l,origin:o}=this.tileInfoView.tileInfo,h=n*l[0],u=n*l[1],c=[0,0],d=[0,0];for(s.sort(((t,n)=>(c[0]=o.x+h*(t.col+.5),c[1]=o.y-u*(t.row+.5),d[0]=o.x+h*(n.col+.5),d[1]=o.y-u*(n.row+.5),e.squaredDistance(c,i)-e.squaredDistance(d,i))));s.length>0;){const e=s.pop();if(this._removeTile(e.id),--t===this.maxSize)break}return t},n._removeTile=function(e){const i=this._tilePerId.get(e);this.removedFunc&&this.removedFunc(i),t(this._tilePerId,e)},i}()}));
