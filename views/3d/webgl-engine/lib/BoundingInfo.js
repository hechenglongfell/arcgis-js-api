/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/PooledArray","../../../../chunks/vec3","../../../../chunks/vec3f64","./Util"],(function(i,t,e,n,s){"use strict";let r=function(){function i(i,t,r,o){this.primitiveIndices=i,this._numIndexPerPrimitive=t,this.indices=r,this.position=o,this._children=void 0,s.assert(i.length>=1),s.assert(r.length%this._numIndexPerPrimitive==0),s.assert(r.length>=i.length*this._numIndexPerPrimitive),s.assert(3===o.size||4===o.size);const{data:a,size:c}=o,l=i.length;let d=c*r[this._numIndexPerPrimitive*i[0]];h.clear(),h.push(d);const u=n.fromValues(a[d],a[d+1],a[d+2]),m=n.clone(u);for(let e=0;e<l;++e){const t=this._numIndexPerPrimitive*i[e];for(let i=0;i<this._numIndexPerPrimitive;++i){d=c*r[t+i],h.push(d);let e=a[d];u[0]=Math.min(e,u[0]),m[0]=Math.max(e,m[0]),e=a[d+1],u[1]=Math.min(e,u[1]),m[1]=Math.max(e,m[1]),e=a[d+2],u[2]=Math.min(e,u[2]),m[2]=Math.max(e,m[2])}}this.bbMin=u,this.bbMax=m;const f=e.lerp(n.create(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(m[0]-u[0],m[1]-u[1]),m[2]-u[2]);let P=this.radius*this.radius;for(let e=0;e<h.length;++e){d=h.getItemAt(e);const i=a[d]-f[0],t=a[d+1]-f[1],n=a[d+2]-f[2],s=i*i+t*t+n*n;if(s<=P)continue;const r=Math.sqrt(s),o=.5*(r-this.radius);this.radius=this.radius+o,P=this.radius*this.radius;const c=o/r;f[0]+=i*c,f[1]+=t*c,f[2]+=n*c}this.center=f,h.clear()}return i.prototype.getChildren=function(){if(this._children||e.squaredDistance(this.bbMin,this.bbMax)<=1)return this._children;const t=e.lerp(n.create(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let i=0;i<8;++i)h[i]=0;const{data:o,size:a}=this.position;for(let i=0;i<s;++i){let e=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[i];let s=a*this.indices[n],c=o[s],l=o[s+1],d=o[s+2];for(let i=1;i<this._numIndexPerPrimitive;++i){s=a*this.indices[n+i];const t=o[s],e=o[s+1],r=o[s+2];t<c&&(c=t),e<l&&(l=e),r<d&&(d=r)}c<t[0]&&(e|=1),l<t[1]&&(e|=2),d<t[2]&&(e|=4),r[i]=e,++h[e]}let c=0;for(let i=0;i<8;++i)h[i]>0&&++c;if(c<2)return;const l=new Array(8);for(let i=0;i<8;++i)l[i]=h[i]>0?new Uint32Array(h[i]):void 0;for(let i=0;i<8;++i)h[i]=0;for(let i=0;i<s;++i){const t=r[i];l[t][h[t]++]=this.primitiveIndices[i]}this._children=new Array;for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new i(l[e],this._numIndexPerPrimitive,this.indices,this.position));return this._children},i.prune=function(){h.prune()},i}();const h=new t({deallocator:null});i.BoundingInfo=r,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
