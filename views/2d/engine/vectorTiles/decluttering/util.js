/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","./core"],(function(t,e,i,n){"use strict";let r=function(t){this.tile=t,this.parent=null,this.children=new Set},o=function(){function t(){this.nodes=new Map,this.roots=new Set}var e=t.prototype;return e.create=function(t){const e=new r(t);let i;const n=[];if(this.nodes.forEach((t=>{this._canConnectDirectly(e,t)&&n.push(t),!i&&this._canConnectDirectly(t,e)&&(i=t)})),i){for(const t of n)i.children.delete(t),e.children.add(t),t.parent=e;i.children.add(e),e.parent=i}else{this.roots.add(e);for(const t of n)e.children.add(t),t.parent=e,this.roots.delete(t)}return this.nodes.set(t.key.id,e),e},e.destroy=function(t){i.isSome(t.parent)?(t.parent.children.delete(t),t.children.forEach((e=>{i.isSome(t.parent)&&t.parent.children.add(e)}))):this.roots.delete(t),t.children.forEach((e=>{e.parent=t.parent,t.parent||this.roots.add(e)})),this.nodes.delete(t.tile.key.id)},e.clear=function(){this.roots.clear(),this.nodes.clear()},e._canConnectDirectly=function(t,e){let{level:i,row:n,col:r}=e.tile.key;const{world:o}=e.tile.key;for(;i>0;){if(i--,n>>=1,r>>=1,t.tile.key.level===i&&t.tile.key.row===n&&t.tile.key.col===r&&t.tile.key.world===o)return!0;if(this.nodes.has(`${i}/${n}/${r}/${o}`))return!1}return!1},t}(),s=function(){function t(){this._tileGraph=new o,this._tileArray=null}var e=t.prototype;return e.has=function(t){return"string"==typeof t?this._tileGraph.nodes.has(t):this._tileGraph.nodes.has(t.key.id)},e.getAll=function(){return this._tileArray||(this._tileArray=[],this._tileGraph.nodes.forEach((t=>{this._tileArray.push(t.tile)}))),this._tileArray},e.getRoots=function(){const t=[];return this._tileGraph.roots.forEach((e=>{t.push(e.tile)})),t},e.getParent=function(t){const e=this._tileGraph.nodes.get("string"==typeof t?t:t.key.id);return i.isSome(e.parent)&&e.parent.tile},e.getChildren=function(t){const e=[];return this._tileGraph.nodes.get("string"==typeof t?t:t.key.id).children.forEach((t=>{e.push(t.tile)})),e},e.get=function(t){return this._tileGraph.nodes.get(t).tile},e.removeKey=function(t){const e=this._tileGraph.nodes.get(t);this._tileGraph.destroy(e),this._tileArray=null},e.forEach=function(t){this._tileGraph.nodes.forEach(((e,i)=>t(e.tile,i)))},e.add=function(t){this._tileGraph.create(t),this._tileArray=null},e.remove=function(t){const e=this._tileGraph.nodes.get(t.key.id);this._tileGraph.destroy(e),this._tileArray=null},e.clear=function(){this._tileGraph.clear(),this._tileArray=[]},t}();function l(t,e,i,n,r,o){const s=i-r;if(s>=0)return(e>>s)+(n-(o<<s))*(t>>s);const l=-s;return e-(o-(n<<l))*(t>>l)<<l}let a=function(){function t(t,e,i){this._rows=Math.ceil(e/i),this._columns=Math.ceil(t/i),this._cellSize=i,this.cells=new Array(this._rows);for(let n=0;n<this._rows;n++){this.cells[n]=new Array(this._columns);for(let t=0;t<this._columns;t++)this.cells[n][t]=[]}}var i=t.prototype;return i.getCell=function(t,e){const i=Math.min(Math.max(Math.floor(e/this._cellSize),0),this._rows-1),n=Math.min(Math.max(Math.floor(t/this._cellSize),0),this._columns-1);return this.cells[i]&&this.cells[i][n]||null},i.getCellSpan=function(t,e,i,n){return[Math.min(Math.max(Math.floor(t/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(e/this._cellSize),0),this.rows-1),Math.min(Math.max(Math.floor(i/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(n/this._cellSize),0),this.rows-1)]},e._createClass(t,[{key:"cellSize",get:function(){return this._cellSize}},{key:"columns",get:function(){return this._columns}},{key:"rows",get:function(){return this._rows}}]),t}();function h(t,e,i,r,o,s){const l=e[r++];for(let a=0;a<l;a++){const l=new n.VTLSymbol(s);l.xTile=e[r++],l.yTile=e[r++],l.hash=e[r++],l.priority=e[r++];const a=e[r++];for(let t=0;t<a;t++){const t=e[r++],n=e[r++],o=e[r++],s=e[r++],a=!!e[r++],h=e[r++],c=i[r++],u=i[r++],f=e[r++],d=e[r++];l.colliders.push({xTile:t,yTile:n,dxPixels:o,dyPixels:s,hard:a,partIndex:h,width:f,height:d,minLod:c,maxLod:u})}const h=t[r++];for(let e=0;e<h;e++)l.textVertexRanges.push([t[r++],t[r++]]);const c=t[r++];for(let e=0;e<c;e++)l.iconVertexRanges.push([t[r++],t[r++]]);o.push(l)}return r}function c(t,e,i){for(const[n,r]of t.symbols)u(t,e,i,r,n)}function u(t,e,i,n,r){const o=t.layerData.get(r);if(3===o.type){for(const e of n){const n=e.unique;let r;if(e.selectedForRendering){const e=n.parts[0],o=e.startOpacity,s=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===s;const l=i?Math.floor(127*o)|s<<7:s?255:0;r=l<<24|l<<16|l<<8|l}else r=0;for(const[t,i]of e.iconVertexRanges)for(let e=t;e<t+i;e+=4)o.iconOpacity[e/4]=r;if(e.selectedForRendering){const e=n.parts[1],o=e.startOpacity,s=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===s;const l=i?Math.floor(127*o)|s<<7:s?255:0;r=l<<24|l<<16|l<<8|l}else r=0;for(const[t,i]of e.textVertexRanges)for(let e=t;e<t+i;e+=4)o.textOpacity[e/4]=r}o.lastOpacityUpdate=e,o.opacityChanged=!0}}t.GridIndex=a,t.TileForest=s,t.TileGraph=o,t.TileNode=r,t.deserializeSymbols=h,t.tileCoordChange=l,t.writeOpacityToBuffers=c,Object.defineProperty(t,"__esModule",{value:!0})}));
