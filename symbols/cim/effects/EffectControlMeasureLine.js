/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/support/jsonUtils","../CIMCursor"],(function(s,t,i){"use strict";let h=function(){function s(){}return s.local=function(){return null===s.instance&&(s.instance=new s),s.instance},s.prototype.execute=function(s,t,i){return new e(s,t,i)},s}();h.instance=null;let e=function(){function s(s,t,i){var h;this._default_point_size=20,this._inputGeometries=s,this._geomUnitsPerPoint=i,this._rule=null!=(h=t.rule)?h:"FullGeometry",this._default_size=this._default_point_size*i}var h=s.prototype;return h.next=function(){let s;for(;s=this._inputGeometries.next();){let i;if(t.isPoint(s)?i=this._processGeom([[[s.x,s.y]]]):t.isMultipoint(s)?i=this._processGeom([s.points]):t.isPolyline(s)?i=this._processGeom(s.paths):t.isPolygon(s)&&(i=this._processGeom(s.rings)),i&&i.length)return{paths:i}}return null},h._clone=function(s){return[s[0],s[1]]},h._mid=function(s,t){return[(s[0]+t[0])/2,(s[1]+t[1])/2]},h._mix=function(s,t,i,h){return[s[0]*t+i[0]*h,s[1]*t+i[1]*h]},h._add=function(s,t){return[s[0]+t[0],s[1]+t[1]]},h._add2=function(s,t,i){return[s[0]+t,s[1]+i]},h._sub=function(s,t){return[s[0]-t[0],s[1]-t[1]]},h._dist=function(s,t){return Math.sqrt((s[0]-t[0])*(s[0]-t[0])+(s[1]-t[1])*(s[1]-t[1]))},h._norm=function(s){return Math.sqrt(s[0]*s[0]+s[1]*s[1])},h._normalize=function(s,t=1){const i=t/this._norm(s);s[0]*=i,s[1]*=i},h._leftPerpendicular=function(s){const t=s[1],i=-s[0];s[0]=t,s[1]=i},h._leftPerp=function(s){return[s[1],-s[0]]},h._rightPerpendicular=function(s){const t=-s[1],i=s[0];s[0]=t,s[1]=i},h._rightPerp=function(s){return[-s[1],s[0]]},h._dotProduct=function(s,t){return s[0]*t[0]+s[1]*t[1]},h._crossProduct=function(s,t){return-(s[0]*t[1]-s[1]*t[0])},h._rotateDirect=function(s,t,i){i=-i;const h=s[0]*t-s[1]*i,e=s[0]*i+s[1]*t;s[0]=h,s[1]=e},h._makeCtrlPt=function(s){const t=[s[0],s[1]];return i.setId(t,1),t},h._addAngledTicks=function(s,t,i,h){const e=this._sub(i,t);this._normalize(e);const r=this._crossProduct(e,this._sub(h,t));let c;c=r>0?this._rightPerp(e):this._leftPerp(e);const _=Math.abs(r)/2,u=[];u.push([t[0]+(c[0]-e[0])*_,t[1]+(c[1]-e[1])*_]),u.push(t),u.push(i),u.push([i[0]+(c[0]+e[0])*_,i[1]+(c[1]+e[1])*_]),s.push(u)},h._addBezier2=function(s,t,i,h,e){if(0==e--)return void s.push(h);const r=this._mid(t,i),c=this._mid(i,h),_=this._mid(r,c);this._addBezier2(s,t,r,_,e),this._addBezier2(s,_,c,h,e)},h._addBezier3=function(s,t,i,h,e,r){if(0==r--)return void s.push(e);const c=this._mid(t,i),_=this._mid(i,h),u=this._mid(h,e),n=this._mid(c,_),o=this._mid(_,u),a=this._mid(n,o);this._addBezier3(s,t,c,n,a,r),this._addBezier3(s,a,o,u,e,r)},h._add90DegArc=function(s,t,i,h,e){const r=null!=e?e:this._crossProduct(this._sub(i,t),this._sub(h,t))>0,c=this._mid(t,i),_=this._sub(c,t);r?this._leftPerpendicular(_):this._rightPerpendicular(_),c[0]+=_[0],c[1]+=_[1],this._addBezier3(s,t,this._mix(t,.33333,c,.66667),this._mix(i,.33333,c,.66667),i,4)},h._addArrow=function(s,t,i){const h=t[0],e=t[1],r=t[t.length-1],c=this._sub(h,e);this._normalize(c);const _=this._crossProduct(c,this._sub(r,e)),u=.5*_,n=this._leftPerp(c),o=[r[0]-n[0]*_,r[1]-n[1]*_],a=t.length-1,p=[];p.push(i?[-n[0],-n[1]]:n);let l=[-c[0],-c[1]];for(let d=1;d<a-1;d++){const s=this._sub(t[d+1],t[d]);this._normalize(s);const i=this._dotProduct(s,l),h=this._crossProduct(s,l),e=Math.sqrt((1+i)/2),r=this._sub(s,l);this._normalize(r),r[0]/=e,r[1]/=e,p.push(h<0?[-r[0],-r[1]]:r),l=s}p.push(this._rightPerp(l));for(let d=p.length-1;d>0;d--)s.push([t[d][0]+p[d][0]*u,t[d][1]+p[d][1]*u]);s.push([o[0]+p[0][0]*u,o[1]+p[0][1]*u]),s.push([o[0]+p[0][0]*_,o[1]+p[0][1]*_]),s.push(h),s.push([o[0]-p[0][0]*_,o[1]-p[0][1]*_]),s.push([o[0]-p[0][0]*u,o[1]-p[0][1]*u]);for(let d=1;d<p.length;d++)s.push([t[d][0]-p[d][0]*u,t[d][1]-p[d][1]*u])},h._cp2=function(s,t,i){return s.length>=2?s[1]:this._add2(s[0],t*this._default_size,-i*this._default_size)},h._cp3=function(s,t,i,h){if(s.length>=3)return s[2];const e=this._mix(s[0],1-i,t,i),r=this._sub(t,s[0]);return this._normalize(r),this._rightPerpendicular(r),[e[0]+r[0]*h*this._default_size,e[1]+r[1]*h*this._default_size]},h._arrowPath=function(s){if(s.length>2)return s;const t=s[0],i=this._cp2(s,-4,0),h=this._sub(t,i);this._normalize(h);const e=this._rightPerp(h);return[t,i,[t[0]+(e[0]-h[0])*this._default_size,t[1]+(e[1]-h[1])*this._default_size]]},h._arrowLastSeg=function(s){const t=s[0],i=this._cp2(s,-4,0);let h;if(s.length>=3)h=s[s.length-1];else{const s=this._sub(t,i);this._normalize(s);const e=this._rightPerp(s);h=[t[0]+(e[0]-s[0])*this._default_size,t[1]+(e[1]-s[1])*this._default_size]}return[i,h]},h._processGeom=function(s){if(!s)return null;const t=[];for(const h of s){if(!h||0===h.length)continue;const s=h.length;let e=h[0];switch(this._rule){case"PerpendicularFromFirstSegment":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,4),r=[];r.push(i),r.push(this._mid(e,s)),t.push(r);break}case"ReversedFirstSegment":{const s=this._cp2(h,0,-1);t.push([s,e]);break}case"PerpendicularToSecondSegment":{const s=this._cp2(h,-4,1),i=this._cp3(h,s,.882353,-1.94),r=[];r.push(this._mid(s,i)),r.push(e),t.push(r);break}case"SecondSegmentWithTicks":{const s=this._cp2(h,-4,1),i=this._cp3(h,s,.882353,-1.94),r=this._sub(i,s);let c;c=this._crossProduct(r,this._sub(e,s))>0?this._rightPerp(c):this._leftPerp(r);const _=[];_.push([s[0]+(c[0]-r[0])/3,s[1]+(c[1]-r[1])/3]),_.push(s),_.push(i),_.push([i[0]+(c[0]+r[0])/3,i[1]+(c[1]+r[1])/3]),t.push(_);break}case"DoublePerpendicular":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,3),r=this._mid(e,s),c=this._sub(r,i);this._normalize(c);const _=this._crossProduct(c,this._sub(e,i));this._leftPerpendicular(c);const u=[];u.push(e),u.push([i[0]+c[0]*_,i[1]+c[1]*_]),t.push(u);const n=[];n.push([i[0]-c[0]*_,i[1]-c[1]*_]),n.push(s),t.push(n);break}case"OppositeToFirstSegment":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,3),r=this._mid(e,s),c=this._sub(r,i);this._normalize(c);const _=this._crossProduct(c,this._sub(e,i));this._leftPerpendicular(c);const u=[];u.push([i[0]+c[0]*_,i[1]+c[1]*_]),u.push([i[0]-c[0]*_,i[1]-c[1]*_]),t.push(u);break}case"TriplePerpendicular":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,4),r=this._mid(e,s),c=this._sub(r,i);this._normalize(c);const _=this._crossProduct(c,this._sub(e,i));this._leftPerpendicular(c);const u=[];u.push([i[0]+c[0]*_*.8,i[1]+c[1]*_*.8]),u.push([r[0]+.8*(e[0]-r[0]),r[1]+.8*(e[1]-r[1])]),t.push(u),t.push([i,r]);const n=[];n.push([i[0]-c[0]*_*.8,i[1]-c[1]*_*.8]),n.push([r[0]+.8*(s[0]-r[0]),r[1]+.8*(s[1]-r[1])]),t.push(n);break}case"HalfCircleFirstSegment":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,4),r=this._mid(e,s);let c=this._sub(s,e);const _=Math.cos(Math.PI/18),u=Math.sin(Math.PI/18),n=Math.sqrt((1+_)/2),o=Math.sqrt((1-_)/2),a=[];let p;this._crossProduct(c,this._sub(i,e))>0?(a.push(e),c=this._sub(e,r),p=s):(a.push(s),c=this._sub(s,r),p=e),this._rotateDirect(c,n,o),c[0]/=n,c[1]/=n;for(let t=1;t<=18;t++)a.push(this._add(r,c)),this._rotateDirect(c,_,u);a.push(p),t.push(a);break}case"HalfCircleSecondSegment":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,1,-1);let r=this._sub(e,s);this._normalize(r);const c=this._crossProduct(r,this._sub(i,s))/2;this._leftPerpendicular(r);const _=[s[0]+r[0]*c,s[1]+r[1]*c];r=this._sub(s,_);const u=Math.cos(Math.PI/18);let n=Math.sin(Math.PI/18);c>0&&(n=-n);const o=[s];for(let t=1;t<=18;t++)this._rotateDirect(r,u,n),o.push(this._add(_,r));t.push(o);break}case"HalfCircleExtended":{const i=this._cp2(h,0,-2),r=this._cp3(h,i,1,-1);let c;if(s>=4)c=h[3];else{const s=this._sub(e,i);c=this._add(r,s)}const _=this._dist(i,r)/2/.75,u=this._sub(i,e);this._normalize(u,_);const n=this._sub(r,c);this._normalize(n,_);const o=[c,r];t.push(o);const a=[this._clone(r)];this._addBezier3(a,r,this._add(r,n),this._add(i,u),i,4),a.push(e),t.push(a);break}case"OpenCircle":{const s=this._cp2(h,-2,0),i=this._sub(s,e),r=Math.cos(Math.PI/18),c=-Math.sin(Math.PI/18),_=[s];for(let t=1;t<=33;t++)this._rotateDirect(i,r,c),_.push(this._add(e,i));t.push(_);break}case"CoverageEdgesWithTicks":{const i=this._cp2(h,0,-1);let r,c;if(s>=3)r=h[2];else{const s=this._sub(i,e),t=this._leftPerp(s);r=[e[0]+t[0]-.25*s[0],e[1]+t[1]-.25*s[1]]}if(s>=4)c=h[3];else{const s=this._mid(e,i),t=this._sub(e,i);this._normalize(t),this._leftPerpendicular(t);const h=this._crossProduct(t,this._sub(r,s));this._rightPerpendicular(t),c=[r[0]+t[0]*h*2,r[1]+t[1]*h*2]}const _=this._sub(i,e);let u,n;u=this._crossProduct(_,this._sub(r,e))>0?this._rightPerp(_):this._leftPerp(_),n=[],n.push(r),n.push(e),n.push([e[0]+(u[0]-_[0])/3,e[1]+(u[1]-_[1])/3]),t.push(n),u=this._crossProduct(_,this._sub(c,i))>0?this._rightPerp(u):this._leftPerp(_),n=[],n.push([i[0]+(u[0]+_[0])/3,i[1]+(u[1]+_[1])/3]),n.push(i),n.push(c),t.push(n);break}case"GapExtentWithDoubleTicks":{const i=this._cp2(h,0,2),r=this._cp3(h,i,0,1);let c;if(s>=4)c=h[3];else{const s=this._sub(i,e);c=this._add(r,s)}this._addAngledTicks(t,e,i,this._mid(r,c)),this._addAngledTicks(t,r,c,this._mid(e,i));break}case"GapExtentMidline":{const i=this._cp2(h,2,0),r=this._cp3(h,i,0,1);let c;if(s>=4)c=h[3];else{const s=this._sub(i,e);c=this._add(r,s)}const _=[];_.push(this._mid(e,r)),_.push(this._mid(i,c)),t.push(_);break}case"Chevron":{const i=this._cp2(h,-1,-1);let r;if(s>=3)r=h[2];else{const s=this._sub(i,e);this._leftPerpendicular(s),r=this._add(e,s)}t.push([i,this._makeCtrlPt(e),r]);break}case"PerpendicularWithArc":{const s=this._cp2(h,0,-2),i=this._cp3(h,s,.5,-1);let r=this._sub(s,e);const c=this._norm(r);r[0]/=c,r[1]/=c;const _=this._crossProduct(r,this._sub(i,e));let u=this._dotProduct(r,this._sub(i,e));u<.05*c?u=.05*c:u>.95*c&&(u=.95*c);const n=[e[0]+r[0]*u,e[1]+r[1]*u];this._leftPerpendicular(r);let o=[];o.push([n[0]-r[0]*_,n[1]-r[1]*_]),o.push([n[0]+r[0]*_,n[1]+r[1]*_]),t.push(o);const a=[s[0]+r[0]*_,s[1]+r[1]*_];r=this._sub(s,a);const p=Math.cos(Math.PI/18);let l=Math.sin(Math.PI/18);_<0&&(l=-l),o=[e,s];for(let t=1;t<=9;t++)this._rotateDirect(r,p,l),o.push(this._add(a,r));t.push(o);break}case"ClosedHalfCircle":{const s=this._cp2(h,2,0),i=this._mid(e,s),r=this._sub(s,i),c=Math.cos(Math.PI/18),_=Math.sin(Math.PI/18),u=[e,s];for(let t=1;t<=18;t++)this._rotateDirect(r,c,_),u.push(this._add(i,r));t.push(u);break}case"TripleParallelExtended":{const s=this._cp2(h,0,-2),r=this._cp3(h,s,1,-2),c=this._mid(e,s),_=this._sub(r,s);this._normalize(_);const u=Math.abs(this._crossProduct(_,this._sub(c,s)))/2,n=this._dist(s,r),o=[s,e];o.push([e[0]+_[0]*n*.5,e[1]+_[1]*n*.5]),t.push(o);const a=[];a.push([c[0]-_[0]*u,c[1]-_[1]*u]),a.push([c[0]+_[0]*n*.375,c[1]+_[1]*n*.375]),i.setId(a[a.length-1],1),a.push([c[0]+_[0]*n*.75,c[1]+_[1]*n*.75]),t.push(a);const p=[s,r];t.push(p);break}case"ParallelWithTicks":{const s=this._cp2(h,3,0),i=this._cp3(h,s,.5,-1),r=this._sub(i,s);this._normalize(r);const c=this._crossProduct(r,this._sub(i,e));this._leftPerpendicular(r),this._addAngledTicks(t,e,s,i),this._addAngledTicks(t,this._mix(e,1,r,c),this._mix(s,1,r,c),this._mid(e,s));break}case"Parallel":{const s=this._cp2(h,3,0),i=this._cp3(h,s,.5,-1),r=this._sub(s,e);this._normalize(r);const c=this._leftPerp(r),_=this._crossProduct(r,this._sub(i,e));let u=[e,s];t.push(u),u=[],u.push([e[0]+c[0]*_,e[1]+c[1]*_]),u.push([s[0]+c[0]*_,s[1]+c[1]*_]),t.push(u);break}case"PerpendicularToFirstSegment":{const s=this._cp2(h,3,0),i=this._cp3(h,s,.5,-1),r=this._mid(e,s),c=this._sub(s,e);this._normalize(c);const _=this._crossProduct(c,this._sub(i,e));this._leftPerpendicular(c);const u=[];u.push([r[0]-c[0]*_*.25,r[1]-c[1]*_*.25]),u.push([r[0]+c[0]*_*1.25,r[1]+c[1]*_*1.25]),t.push(u);break}case"ParallelOffset":{const s=this._cp2(h,3,0),i=this._cp3(h,s,.5,-1),r=this._sub(s,e);this._normalize(r);const c=this._crossProduct(r,this._sub(i,e));this._leftPerpendicular(r);const _=[];_.push([e[0]-r[0]*c,e[1]-r[1]*c]),_.push([s[0]-r[0]*c,s[1]-r[1]*c]),t.push(_);const u=[];u.push([e[0]+r[0]*c,e[1]+r[1]*c]),u.push([s[0]+r[0]*c,s[1]+r[1]*c]),t.push(u);break}case"OffsetOpposite":{const s=this._cp2(h,3,0),i=this._cp3(h,s,.5,-1),r=this._sub(s,e);this._normalize(r);const c=this._crossProduct(r,this._sub(i,e));this._leftPerpendicular(r);const _=[];_.push([e[0]-r[0]*c,e[1]-r[1]*c]),_.push([s[0]-r[0]*c,s[1]-r[1]*c]),t.push(_);break}case"OffsetSame":{const s=this._cp2(h,3,0),i=this._cp3(h,s,.5,-1),r=this._sub(s,e);this._normalize(r);const c=this._crossProduct(r,this._sub(i,e));this._leftPerpendicular(r);const _=[];_.push([e[0]+r[0]*c,e[1]+r[1]*c]),_.push([s[0]+r[0]*c,s[1]+r[1]*c]),t.push(_);break}case"CircleWithArc":{let r=this._cp2(h,3,0);const c=this._cp3(h,r,.5,-1);let _,u;if(s>=4)_=h[3],u=this._crossProduct(this._sub(_,r),this._sub(c,r))>0;else{_=r,u=this._crossProduct(this._sub(_,e),this._sub(c,e))>0;const s=24*this._geomUnitsPerPoint,t=this._sub(_,e);this._normalize(t,s);const i=Math.sqrt(2)/2;this._rotateDirect(t,i,u?i:-i),r=this._add(e,t)}const n=this._sub(r,e),o=Math.cos(Math.PI/18),a=Math.sin(Math.PI/18),p=[r];for(let s=1;s<=36;s++)this._rotateDirect(n,o,a),p.push(this._add(e,n));this._add90DegArc(p,r,_,c,u),i.setId(p[p.length-8],1),t.push(p);break}case"DoubleJog":{let i,r,c=this._cp2(h,-3,1);if(i=s>=3?h[2]:this._add(e,this._sub(e,c)),s>=4)r=h[3];else{const s=e;e=c,r=i;const t=this._dist(e,s),h=this._dist(r,s);let _=30*this._geomUnitsPerPoint;.5*t<_&&(_=.5*t),.5*h<_&&(_=.5*h),c=this._mix(e,_/t,s,(t-_)/t),i=this._mix(r,_/h,s,(h-_)/h)}const _=this._mid(e,c),u=this._mid(r,i),n=this._dist(e,c),o=this._dist(i,r);let a=Math.min(n,o)/8;a=Math.min(a,24*this._geomUnitsPerPoint);const p=Math.cos(Math.PI/4);let l=this._sub(e,c);this._normalize(l,a),this._crossProduct(l,this._sub(r,c))>0?this._rotateDirect(l,p,-p):this._rotateDirect(l,p,p);let d=[];d.push(c),d.push(this._add(_,l)),d.push(this._sub(_,l)),d.push(e),t.push(d),l=this._sub(r,i),this._normalize(l,a),this._crossProduct(l,this._sub(e,i))<0?this._rotateDirect(l,p,p):this._rotateDirect(l,p,-p),d=[],d.push(i),d.push(this._add(u,l)),d.push(this._sub(u,l)),d.push(r),t.push(d);break}case"PerpendicularOffset":{const s=this._cp2(h,-4,1),i=this._cp3(h,s,.882353,-1.94),r=this._sub(i,s);this._crossProduct(r,this._sub(e,s))>0?this._rightPerpendicular(r):this._leftPerpendicular(r);const c=[r[0]/8,r[1]/8],_=this._sub(this._mid(s,i),c);t.push([_,e]);break}case"LineExcludingLastSegment":{const s=this._arrowPath(h),i=[];let e=s.length-2;for(;e--;)i.push(s[e]);t.push(i);break}case"MultivertexArrow":{const s=this._arrowPath(h),i=[];this._addArrow(i,s,!1),t.push(i);break}case"CrossedArrow":{const s=this._arrowPath(h),i=[];this._addArrow(i,s,!0),t.push(i);break}case"ChevronArrow":{const[s,i]=this._arrowLastSeg(h),r=10*this._geomUnitsPerPoint,c=this._sub(e,s);this._normalize(c);const _=this._crossProduct(c,this._sub(i,s)),u=this._leftPerp(c),n=[i[0]-u[0]*_*2,i[1]-u[1]*_*2],o=[];o.push([i[0]+c[0]*r,i[1]+c[1]*r]),o.push(e),o.push([n[0]+c[0]*r,n[1]+c[1]*r]),t.push(o);break}case"ChevronArrowOffset":{const[s,i]=this._arrowLastSeg(h),r=this._sub(e,s);this._normalize(r);const c=this._crossProduct(r,this._sub(i,s));this._leftPerpendicular(r);const _=[i[0]-r[0]*c,i[1]-r[1]*c],u=[];u.push([_[0]+r[0]*c*.5,_[1]+r[1]*c*.5]),u.push(this._mid(_,e)),u.push([_[0]-r[0]*c*.5,_[1]-r[1]*c*.5]),t.push(u);break}case"PartialFirstSegment":{const[s,i]=this._arrowLastSeg(h),r=this._sub(e,s);this._normalize(r);const c=this._crossProduct(r,this._sub(i,s));this._leftPerpendicular(r);const _=[i[0]-r[0]*c,i[1]-r[1]*c];t.push([s,_]);break}case"Arch":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,1),r=this._sub(e,s),c=this._mix(i,1,r,.55),_=this._mix(i,1,r,-.55),u=[e];this._addBezier2(u,e,c,i,4),this._addBezier2(u,i,_,s,4),t.push(u);break}case"CurvedParallelTicks":{const s=this._cp2(h,-4,1),i=this._cp3(h,s,.882353,-1.94),r=this._sub(i,s);this._crossProduct(r,this._sub(e,s))>0?this._rightPerpendicular(r):this._leftPerpendicular(r);const c=[r[0]/8,r[1]/8],_=this._sub(this._mid(s,i),c),u=this._sub(this._mix(s,.75,i,.25),c),n=this._sub(this._mix(s,.25,i,.75),c),o=[s];this._addBezier2(o,s,u,_,3),this._addBezier2(o,_,n,i,3),t.push(o);for(let h=0;h<8;h++){const s=o[2*h+1],i=[this._clone(s)];i.push(this._add(s,[r[0]/4,r[1]/4])),t.push(i)}break}case"Arc90Degrees":{const s=this._cp2(h,0,-1),i=this._cp3(h,s,.5,1),r=[s];this._add90DegArc(r,s,e,i),t.push(r);break}default:t.push(h)}}return t},s}();s.EffectControlMeasureLine=h,Object.defineProperty(s,"__esModule",{value:!0})}));
