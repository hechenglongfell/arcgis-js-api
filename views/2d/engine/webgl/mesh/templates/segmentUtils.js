/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../core/maybe","./util"],(function(t,e,n,i){"use strict";function s(t,e){return t[e+1]}function r(t){return t.length-1}function h(t){let e=0;for(let n=0;n<r(t);n++)e+=u(t,n);return e}function u(t,e,n=1){const[i,r]=s(t,e);return Math.sqrt(i*i+r*r)*n}let o=function(){function t(t,e,n,i,s){this._segments=t,this._index=e,this._distance=n,this._xStart=i,this._yStart=s,this._done=!1}t.create=function(e){return new t(e,0,0,e[0][0],e[0][1])};var n=t.prototype;return n.clone=function(){return new t(this._segments,this._index,this._distance,this.xStart,this.yStart)},n.equals=function(t){return this._index===t._index||t._index===this._index-1&&(0===this._distance||1===t._distance)||t._index===this._index+1&&(1===this._distance||0===t._distance)},n.leq=function(t){return this._index<t._index||this._index===t._index&&this._distance<=t._distance},n.geq=function(t){return this._index>t._index||this._index===t._index&&this._distance>=t._distance},n.hasPrev=function(){return this._index-1>=0},n.hasNext=function(){return this._index+1<r(this._segments)},n.next=function(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null},n.prev=function(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)},n._seekBackwards=function(t,e){const n=this.backwardLength;if(t<=n)return this._distance=(n-t)/this.length,this;let i=this.backwardLength;for(;this.prev();){if(i+this.length>t)return this._seekBackwards(t-i);i+=this.length}return this._distance=0,e?this:null},n.seek=function(t,e=!1){if(t<0)return this._seekBackwards(Math.abs(t),e);if(t<=this.remainingLength)return this._distance=(this.backwardLength+t)/this.length,this;let n=this.remainingLength;for(;this.next();){if(n+this.length>t)return this.seek(t-n,e);n+=this.length}return this._distance=1,e?this:null},e._createClass(t,[{key:"_segment",get:function(){return this._segments[this._index+1]}},{key:"angle",get:function(){const t=this.dy,e=(0*t+-1*-this.dx)/(1*this.length);let n=Math.acos(e);return t>0&&(n=2*Math.PI-n),n}},{key:"xStart",get:function(){return this._xStart}},{key:"yStart",get:function(){return this._yStart}},{key:"x",get:function(){return this.xStart+this.distance*this.dx}},{key:"y",get:function(){return this.yStart+this.distance*this.dy}},{key:"dx",get:function(){return this._segment[0]}},{key:"dy",get:function(){return this._segment[1]}},{key:"xMidpoint",get:function(){return this.xStart+.5*this.dx}},{key:"yMidpoint",get:function(){return this.yStart+.5*this.dy}},{key:"xEnd",get:function(){return this.xStart+this.dx}},{key:"yEnd",get:function(){return this.yStart+this.dy}},{key:"length",get:function(){const{dx:t,dy:e}=this;return Math.sqrt(t*t+e*e)}},{key:"remainingLength",get:function(){return this.length*(1-this._distance)}},{key:"backwardLength",get:function(){return this.length*this._distance}},{key:"distance",get:function(){return this._distance}},{key:"done",get:function(){return this._done}}]),t}();function c(t,e,n,i=!0){const s=h(t),r=o.create(t),u=s/2;if(!i)return r.seek(u),void n(r.clone(),0,u+0*e,s);const c=Math.max((s-e)/2,0),a=Math.floor(c/e),d=u-a*e;r.seek(d);for(let h=-a;h<=a;h++)r.x<512&&r.x>=0&&r.y<512&&r.y>=0&&n(r.clone(),h,u+h*e,s),r.seek(e)}function a(t,e,n){d(n,e,h(t),o.create(t),0)}function d(t,e,i,s,r){if(i<e)return;const h=s.clone().seek(i/2);if(n.isNone(h))return;t(h.clone(),i,r),i=(i-e)/2;const u=n.unwrap(h.seek(e/2));d(t,e,i,s,r+1),d(t,e,i,u,r+1)}function f(t,e){const n=e;for(let i=0;i<t.length;i++){let e=t[i];const s=[];s.push(e[0]);for(let t=1;t<e.length;t++){let[n,i]=s[t-1];n+=e[t][0],i+=e[t][1],s.push([n,i])}_(s,n);const r=[];r.push(s[0]);for(let t=1;t<s.length;t++){const[e,n]=s[t-1],[i,h]=s[t],u=Math.round(i-e),o=Math.round(h-n);r.push([u,o])}t[i]=r,e=r}return t}function _(t,e){const n=1e-6;if(e<=0)return;const s=t.length;if(s<3)return;const r=[];let h=0;r.push(0);for(let f=1;f<s;f++)h+=i.dist(t[f],t[f-1]),r.push(h);e=Math.min(e,.2*h);const u=[];u.push(t[0][0]),u.push(t[0][1]);const o=t[s-1][0],c=t[s-1][1],a=i.sub([0,0],t[0],t[1]);i.normalize(a),t[0][0]+=e*a[0],t[0][1]+=e*a[1],i.sub(a,t[s-1],t[s-2]),i.normalize(a),t[s-1][0]+=e*a[0],t[s-1][1]+=e*a[1];for(let i=1;i<s;i++)r[i]+=e;r[s-1]+=e;const d=.5*e;for(let i=1;i<s-1;i++){let h=0,o=0,c=0;for(let s=i-1;s>=0&&!(r[s+1]<r[i]-d);s--){const u=d+r[s+1]-r[i],a=r[s+1]-r[s],f=r[i]-r[s]<d?1:u/a;if(Math.abs(f)<n)break;const _=f*f,l=f*u-.5*_*a,g=f*a/e,x=t[s+1],y=t[s][0]-x[0],k=t[s][1]-x[1];h+=g/l*(x[0]*f*u+.5*_*(u*y-a*x[0])-_*f*a*y/3),o+=g/l*(x[1]*f*u+.5*_*(u*k-a*x[1])-_*f*a*k/3),c+=g}for(let u=i+1;u<s&&!(r[u-1]>r[i]+d);u++){const s=d-r[u-1]+r[i],a=r[u]-r[u-1],f=r[u]-r[i]<d?1:s/a;if(Math.abs(f)<n)break;const _=f*f,l=f*s-.5*_*a,g=f*a/e,x=t[u-1],y=t[u][0]-x[0],k=t[u][1]-x[1];h+=g/l*(x[0]*f*s+.5*_*(s*y-a*x[0])-_*f*a*y/3),o+=g/l*(x[1]*f*s+.5*_*(s*k-a*x[1])-_*f*a*k/3),c+=g}u.push(h/c),u.push(o/c)}u.push(o),u.push(c);for(let i=0,f=0;i<s;i++)t[i][0]=u[f++],t[i][1]=u[f++]}t.SegmentCursor=o,t.pathDivide=c,t.pathLength=h,t.pathSubdivide=a,t.segmentAt=s,t.segmentCount=r,t.segmentLength=u,t.smoothPaths=f,Object.defineProperty(t,"__esModule",{value:!0})}));
