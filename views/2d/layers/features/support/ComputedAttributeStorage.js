/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../engine/webgl/DisplayId","./DisplayIdGenerator","./StaticBitSet"],(function(t,e,n,s){"use strict";function i(t,e,n){if(!(t.length>e))for(;t.length<=e;)t.push(n)}let r=function(){function t(){this._numerics=[],this._strings=[],this._idGenerator=new n.DisplayIdGenerator,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}var r=t.prototype;return r.createBitset=function(){const t=this._bitsets.length;return this._bitsets.push(s.StaticBitSet.create(this._allocatedSize,e.DISPLAY_ID_TEXEL_MASK)),t+1},r.getBitset=function(t){return this._bitsets[t-1]},r._expand=function(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)},r._ensureNumeric=function(t,e){this._numerics[t]||(this._numerics[t]=[]);i(this._numerics[t],e,0)},r._ensureInstanceId=function(t){i(this._instanceIds,t,0)},r._ensureString=function(t,e){this._strings[t]||(this._strings[t]=[]);i(this._strings[t],e,null)},r.createDisplayId=function(t=!1){const n=this._idGenerator.createId();return n>this._allocatedSize&&this._expand(),e.createDisplayId(n,t)},r.releaseDisplayId=function(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&e.DISPLAY_ID_TEXEL_MASK)},r.getComputedNumeric=function(t,n){return this.getComputedNumericAtIndex(t&e.DISPLAY_ID_TEXEL_MASK,0)},r.setComputedNumeric=function(t,n,s){return this.setComputedNumericAtIndex(t&e.DISPLAY_ID_TEXEL_MASK,s,0)},r.getComputedString=function(t,n){return this.getComputedStringAtIndex(t&e.DISPLAY_ID_TEXEL_MASK,0)},r.setComputedString=function(t,n,s){return this.setComputedStringAtIndex(t&e.DISPLAY_ID_TEXEL_MASK,0,s)},r.getComputedNumericAtIndex=function(t,n){const s=t&e.DISPLAY_ID_TEXEL_MASK;return this._ensureNumeric(n,s),this._numerics[n][s]},r.setComputedNumericAtIndex=function(t,n,s){const i=t&e.DISPLAY_ID_TEXEL_MASK;this._ensureNumeric(n,i),this._numerics[n][i]=s},r.getInstanceId=function(t){const n=t&e.DISPLAY_ID_TEXEL_MASK;return this._ensureInstanceId(n),this._instanceIds[n]},r.setInstanceId=function(t,n){const s=t&e.DISPLAY_ID_TEXEL_MASK;this._ensureInstanceId(s),this._instanceIds[s]=n},r.getComputedStringAtIndex=function(t,n){const s=t&e.DISPLAY_ID_TEXEL_MASK;return this._ensureString(n,s),this._strings[n][s]},r.setComputedStringAtIndex=function(t,n,s){const i=t&e.DISPLAY_ID_TEXEL_MASK;this._ensureString(n,i),this._strings[n][i]=s},r.getXMin=function(t){return this._bounds[4*(t&e.DISPLAY_ID_TEXEL_MASK)]},r.getYMin=function(t){return this._bounds[4*(t&e.DISPLAY_ID_TEXEL_MASK)+1]},r.getXMax=function(t){return this._bounds[4*(t&e.DISPLAY_ID_TEXEL_MASK)+2]},r.getYMax=function(t){return this._bounds[4*(t&e.DISPLAY_ID_TEXEL_MASK)+3]},r.setBounds=function(t,n){const s=n.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,_=1/0,u=-1/0,o=-1/0;s.forEachVertex(((t,e)=>{r=Math.min(r,t),_=Math.min(_,e),u=Math.max(u,t),o=Math.max(o,e)}));const c=t&e.DISPLAY_ID_TEXEL_MASK;return i(this._bounds,4*c+4,0),this._bounds[4*c]=r,this._bounds[4*c+1]=_,this._bounds[4*c+2]=u,this._bounds[4*c+3]=o,!0},t}();t.ComputedAttributeStorage=r,Object.defineProperty(t,"__esModule",{value:!0})}));
