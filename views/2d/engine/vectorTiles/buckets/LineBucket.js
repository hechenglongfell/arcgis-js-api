/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","./BaseBucket","../../webgl/TurboLine"],(function(e,t,i){"use strict";const n=65535;let l=function(t){function l(e,n,l,a,o){var u;return(u=t.call(this,e,n,l)||this).type=2,u._tessellationOptions={pixelCoordRatio:8,halfWidth:0,offset:0},u._patternMap=new Map,u.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_ddValues:null},u.tessellationProperties._lineVertexBuffer=a,u.tessellationProperties._lineIndexBuffer=o,u._lineTessellator=new i.LineTessellation(r(u.tessellationProperties),s(u.tessellationProperties),e.canUseThinTessellation),u}e._inheritsLoose(l,t);var a=l.prototype;return a.getResources=function(e,t,i){const n=this.layer,l=this.zoom,r=n.hasDataDrivenLine,s=n.getPaintProperty("line-pattern"),a=n.getPaintProperty("line-dasharray"),o=n.getLayoutProperty("line-cap");if(!s&&!a)return;const u=(null==o?void 0:o.getValue(l))||0,f=null==o?void 0:o.isDataDriven;if(r){const e=null==s?void 0:s.isDataDriven,i=null==a?void 0:a.isDataDriven;if(!e&&!i)return;for(const r of this._features)e?t.add(s.getValue(l,r)):t.add({name:this._getDashArrayKey(r,l,n,a,f,o,u)})}else if(s)t.add(s.getValue(l));else if(a){const e=a.getValue(l);t.add({name:n.getDashKey(e,u)})}},a.processFeatures=function(e){var t,i,n,l,r,s;this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;const a=this.layer,o=this.zoom,u=this._features,f=this._tessellationOptions,{hasDataDrivenLine:h,lineMaterial:p}=a;e&&e.setExtent(this.layerExtent);const d=a.getPaintProperty("line-pattern"),c=a.getPaintProperty("line-dasharray"),g=null==d?void 0:d.isDataDriven,y=null==c?void 0:c.isDataDriven;let _;_=a.getLayoutProperty("line-cap");const x=null!=(t=_)&&t.isDataDriven?_:null,D=x?null:a.getLayoutValue("line-cap",o),P=D||0,V=!!x;_=a.getLayoutProperty("line-join");const m=null!=(i=_)&&i.isDataDriven?_:null,I=m?null:a.getLayoutValue("line-join",o);_=a.getLayoutProperty("line-miter-limit");const L=null!=(n=_)&&n.isDataDriven?_:null,v=L?null:a.getLayoutValue("line-miter-limit",o);_=a.getLayoutProperty("line-round-limit");const B=null!=(l=_)&&l.isDataDriven?_:null,T=B?null:a.getLayoutValue("line-round-limit",o);_=a.getPaintProperty("line-width");const b=null!=(r=_)&&r.isDataDriven?_:null,A=b?null:a.getPaintValue("line-width",o);_=a.getPaintProperty("line-offset");const w=null!=(s=_)&&s.isDataDriven?_:null,C=w?null:a.getPaintValue("line-offset",o);if(g||y){const t=[];for(const i of u){const n=g?d.getValue(o,i):this._getDashArrayKey(i,o,a,c,V,x,P),l=this._spriteInfo[n];if(!l||!l.rect)continue;const r=p.encodeAttributes(i,o,a,l),s=i.getGeometry(e);t.push({ddAttributes:r,page:l.page,cap:x?x.getValue(o,i):D,join:m?m.getValue(o,i):I,miterLimit:L?L.getValue(o,i):v,roundLimit:B?B.getValue(o,i):T,halfWidth:.5*(b?b.getValue(o,i):A),offset:w?w.getValue(o,i):C,geometry:s})}t.sort(((e,t)=>e.page-t.page)),f.textured=!0;for(const{ddAttributes:e,page:i,cap:n,join:l,miterLimit:r,roundLimit:s,halfWidth:a,offset:o,geometry:u}of t)f.capType=n,f.joinType=l,f.miterLimit=r,f.roundLimit=s,f.halfWidth=a,f.offset=o,this._processFeature(u,e,i)}else{f.textured=!(!d&&!c),f.capType=D,f.joinType=I,f.miterLimit=v,f.roundLimit=T,f.halfWidth=.5*A,f.offset=C;for(const t of u){const i=h?p.encodeAttributes(t,o,a):null;x&&(f.capType=x.getValue(o,t)),m&&(f.joinType=m.getValue(o,t)),L&&(f.miterLimit=L.getValue(o,t)),B&&(f.roundLimit=B.getValue(o,t)),b&&(f.halfWidth=.5*b.getValue(o,t)),w&&(f.offset=w.getValue(o,t));const n=t.getGeometry(e);this._processFeature(n,i)}}},a.serialize=function(){let e=6;e+=this.layerUIDs.length,e+=this.tessellationProperties._lineVertexBuffer.array.length,e+=this.tessellationProperties._lineIndexBuffer.array.length,e+=3*this._patternMap.size+1;const t=new Uint32Array(e),i=new Int32Array(t.buffer);let n=0;t[n++]=this.type,t[n++]=this.layerUIDs.length;for(let s=0;s<this.layerUIDs.length;s++)t[n++]=this.layerUIDs[s];t[n++]=this._lineIndexStart,t[n++]=this._lineIndexCount;const l=this._patternMap,r=l.size;if(t[n++]=r,r>0)for(const[s,[a,o]]of l)t[n++]=s,t[n++]=a,t[n++]=o;t[n++]=this.tessellationProperties._lineVertexBuffer.array.length;for(let s=0;s<this.tessellationProperties._lineVertexBuffer.array.length;s++)i[n++]=this.tessellationProperties._lineVertexBuffer.array[s];t[n++]=this.tessellationProperties._lineIndexBuffer.array.length;for(let s=0;s<this.tessellationProperties._lineIndexBuffer.array.length;s++)t[n++]=this.tessellationProperties._lineIndexBuffer.array[s];return t.buffer},a._processFeature=function(e,t,i){if(!e)return;const n=e.length;for(let l=0;l<n;l++)this._processGeometry(e[l],t,i)},a._processGeometry=function(e,t,i){if(e.length<2)return;const l=.001;let r,s,a=e[0],o=1;for(;o<e.length;)r=e[o].x-a.x,s=e[o].y-a.y,r*r+s*s<l*l?e.splice(o,1):(a=e[o],++o);if(e.length<2)return;const u=this.tessellationProperties._lineIndexBuffer,f=3*u.index;this._tessellationOptions.initialDistance=0,this._tessellationOptions.wrapDistance=n,this.tessellationProperties._ddValues=t,this._lineTessellator.tessellate(e,this._tessellationOptions);const h=3*u.index-f;if(void 0!==i){const e=this._patternMap,t=e.get(i);t?t[1]+=h:e.set(i,[f+this._lineIndexCount,h])}this._lineIndexCount+=h},a._getDashArrayKey=function(e,t,i,n,l,r,s){const a=l?r.getValue(t,e):s,o=n.getValue(t,e);return i.getDashKey(o,a)},e._createClass(l,[{key:"lineIndexStart",get:function(){return this._lineIndexStart}},{key:"lineIndexCount",get:function(){return this._lineIndexCount}}]),l}(t);const r=e=>(t,i,n,l,r,s,a,o,u,f,h)=>(e._lineVertexBuffer.add(t,i,a,o,n,l,r,s,u,f,h,e._ddValues),e._lineVertexBuffer.index-1),s=e=>(t,i,n)=>{e._lineIndexBuffer.add(t,i,n)};return l}));
