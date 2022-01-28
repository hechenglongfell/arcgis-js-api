/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/ObjectPool","../../../core/PooledArray","../../../chunks/vec4","../../../chunks/vec4f64"],(function(e,t,i,s,n){"use strict";let u=function(){this.extent=n.create(),this.minLevel=0,this.maxLevel=0,this.callback=null},r=function(){function e(){this._queries=new i({initialSize:10}),this._queriesInvPtr=0,this._queryQueue=new i({initialSize:30}),this._queryPool=new t(u)}var n=e.prototype;return n.queryVisibleLevelRange=function(e,t,i,n){const u=this._queryPool.acquire();s.copy(u.extent,e),u.minLevel=t||-Number.MAX_VALUE,u.maxLevel=null!=i?i:Number.MAX_VALUE,u.callback=n,this._queryQueue.push(u)},n.hasPendingQueries=function(){return 0!==this._queryQueue.length},n.prepareQueries=function(){for(;this._queries.length<this._queries.data.length&&this._queryQueue.length>0;){const e=this._queryQueue.pop();this._queries.push(e)}this._queriesInvPtr=this._queries.length},n.processQueries=function(){for(let e=0;e<this._queries.length;e++){const t=this._queries.data[e];this._queryPool.release(t),t.callback(e>=this._queriesInvPtr),t.callback=null}this._queries.clear()},n.scaleQueriesForTile=function(e){const t=e.level;let i=0;for(;i<this._queriesInvPtr;){const s=this._queries.data[i],n=s.extent;t>=s.minLevel&&t<=s.maxLevel&&n[0]<=e.extent[2]&&n[2]>=e.extent[0]&&n[1]<=e.extent[3]&&n[3]>=e.extent[1]?(this._queries.swapElements(i,this._queriesInvPtr-1),this._queriesInvPtr--):i++}},e}();e.ScaleRangeQueries=r,Object.defineProperty(e,"__esModule",{value:!0})}));
