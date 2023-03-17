/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../webgl-engine/lib/Attribute"],(function(t,n){"use strict";const i=1e-6,r=[0,0,0],o=[0,0,0];function e(t,i){const{data:e,size:a}=t,c=e.length/a;if(c<=0)return;const u=new K(t);R(r,u.minProj,u.maxProj),W(r,r,.5),U(o,u.maxProj,u.minProj);const h=Q(o),f=new L;f.quality=h,c<14&&(t=new n.Attribute(new Float64Array(u.buffer,112,42),3));const m=[0,0,0],l=[0,0,0],P=[0,0,0],b=[0,0,0],x=[0,0,0],I=[0,0,0],y=[0,0,0];switch(s(u,t,y,m,l,P,b,x,I,f)){case 1:return void v(r,o,i);case 2:return void B(t,b,i)}j(t,y,m,l,P,b,x,I,f),G(t,f.b0,f.b1,f.b2,_,O);const N=[0,0,0];U(N,O,_),f.quality=Q(N),f.quality<h?H(f.b0,f.b1,f.b2,_,O,N,i):v(r,o,i)}function s(t,n,r,o,e,s,a,c,u,h){if(b(t,o,e),nt(o,e)<i)return 1;U(a,o,e),$(a,a);return I(n,o,a,s)<i?2:(U(c,e,s),$(c,c),U(u,s,o),$(u,u),Z(r,c,a),$(r,r),T(n,r,a,c,u,h),0)}const a=[0,0,0],c=[0,0,0],u=[0,0,0],h=[0,0,0],f=[0,0,0],m=[0,0,0],l=[0,0,0],P=[0,0,0];function j(t,n,i,r,o,e,s,j,b){N(t,n,i,a,c),void 0!==a[0]&&(U(u,a,i),$(u,u),U(h,a,r),$(h,h),U(f,a,o),$(f,f),Z(m,h,e),$(m,m),Z(l,f,s),$(l,l),Z(P,u,j),$(P,P),T(t,m,e,h,u,b),T(t,l,s,f,h,b),T(t,P,j,u,f,b)),void 0!==c[0]&&(U(u,c,i),$(u,u),U(h,c,r),$(h,h),U(f,c,o),$(f,f),Z(m,h,e),$(m,m),Z(l,f,s),$(l,l),Z(P,u,j),$(P,P),T(t,m,e,h,u,b),T(t,l,s,f,h,b),T(t,P,j,u,f,b))}function b(t,n,i){let r=nt(t.maxVert[0],t.minVert[0]),o=0;for(let e=1;e<7;++e){const n=nt(t.maxVert[e],t.minVert[e]);n>r&&(r=n,o=e)}X(n,t.minVert[o]),X(i,t.maxVert[o])}const x=[0,0,0];function I(t,n,i,r){const{data:o,size:e}=t;let s=Number.NEGATIVE_INFINITY,a=0;for(let c=0;c<o.length;c+=e){x[0]=o[c]-n[0],x[1]=o[c+1]-n[1],x[2]=o[c+2]-n[2];const t=i[0]*x[0]+i[1]*x[1]+i[2]*x[2],r=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],e=x[0]*x[0]+x[1]*x[1]+x[2]*x[2]-t*t/r;e>s&&(s=e,a=c)}return X(r,o,a),s}const y=[0,0];function N(t,n,r,o,e){E(t,n,y,e,o);const s=it(r,n);y[1]-i<=s&&(o[0]=void 0),y[0]+i>=s&&(e[0]=void 0)}const V=[0,0,0],w=[0,0,0],A=[0,0,0],d=[0,0,0],q=[0,0,0],M=[0,0,0];function T(t,n,r,o,e,s){if(tt(n)<i)return;Z(V,r,n),Z(w,o,n),Z(A,e,n),g(t,n,y),q[1]=y[0],d[1]=y[1],M[1]=d[1]-q[1];const a=[r,o,e],c=[V,w,A];for(let i=0;i<3;++i){g(t,a[i],y),q[0]=y[0],d[0]=y[1],g(t,c[i],y),q[2]=y[0],d[2]=y[1],M[0]=d[0]-q[0],M[2]=d[2]-q[2];const r=Q(M);r<s.quality&&(X(s.b0,a[i]),X(s.b1,n),X(s.b2,c[i]),s.quality=r)}}const F=[0,0,0];function g(t,n,i){const{data:r,size:o}=t;i[0]=Number.POSITIVE_INFINITY,i[1]=Number.NEGATIVE_INFINITY;for(let e=0;e<r.length;e+=o){const t=r[e]*n[0]+r[e+1]*n[1]+r[e+2]*n[2];i[0]=Math.min(i[0],t),i[1]=Math.max(i[1],t)}}function E(t,n,i,r,o){const{data:e,size:s}=t;X(r,e),X(o,r),i[0]=it(F,n),i[1]=i[0];for(let a=s;a<e.length;a+=s){const t=e[a]*n[0]+e[a+1]*n[1]+e[a+2]*n[2];t<i[0]&&(i[0]=t,X(r,e,a)),t>i[1]&&(i[1]=t,X(o,e,a))}}function v(t,n,i){X(i.center,t),W(i.halfSize,n,.5),i.quaternion[0]=0,i.quaternion[1]=0,i.quaternion[2]=0,i.quaternion[3]=1}const z=[0,0,0],S=[0,0,0],Y=[0,0,0],_=[0,0,0],O=[0,0,0],p=[0,0,0];function B(t,n,r){X(z,n),Math.abs(n[0])>Math.abs(n[1])&&Math.abs(n[0])>Math.abs(n[2])?z[0]=0:Math.abs(n[1])>Math.abs(n[2])?z[1]=0:z[2]=0,tt(z)<i&&(z[0]=z[1]=z[2]=1),Z(S,n,z),$(S,S),Z(Y,n,S),$(Y,Y),G(t,n,S,Y,_,O),U(p,O,_),H(n,S,Y,_,O,p,r)}function G(t,n,i,r,o,e){g(t,n,y),o[0]=y[0],e[0]=y[1],g(t,i,y),o[1]=y[0],e[1]=y[1],g(t,r,y),o[2]=y[0],e[2]=y[1]}const k=[0,0,0],C=[1,0,0,0,1,0,0,0,1],D=[0,0,0];function H(t,n,i,r,o,e,s){C[0]=t[0],C[1]=t[1],C[2]=t[2],C[3]=n[0],C[4]=n[1],C[5]=n[2],C[6]=i[0],C[7]=i[1],C[8]=i[2],rt(s.quaternion,C),R(D,r,o),W(D,D,.5),W(s.center,t,D[0]),W(k,n,D[1]),R(s.center,s.center,k),W(k,i,D[2]),R(s.center,s.center,k),W(s.halfSize,e,.5)}const J=7;let K=function(t){this.minVert=new Array(J),this.maxVert=new Array(J);const n=64*J;this.buffer=new ArrayBuffer(n);let i=0;this.minProj=new Float64Array(this.buffer,i,J),i+=8*J,this.maxProj=new Float64Array(this.buffer,i,J),i+=8*J;for(let a=0;a<J;++a)this.minVert[a]=new Float64Array(this.buffer,i,3),i+=24;for(let a=0;a<J;++a)this.maxVert[a]=new Float64Array(this.buffer,i,3),i+=24;for(let a=0;a<J;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;const r=new Array(J),o=new Array(J),{data:e,size:s}=t;for(let a=0;a<e.length;a+=s){let t=e[a];t<this.minProj[0]&&(this.minProj[0]=t,r[0]=a),t>this.maxProj[0]&&(this.maxProj[0]=t,o[0]=a),t=e[a+1],t<this.minProj[1]&&(this.minProj[1]=t,r[1]=a),t>this.maxProj[1]&&(this.maxProj[1]=t,o[1]=a),t=e[a+2],t<this.minProj[2]&&(this.minProj[2]=t,r[2]=a),t>this.maxProj[2]&&(this.maxProj[2]=t,o[2]=a),t=e[a]+e[a+1]+e[a+2],t<this.minProj[3]&&(this.minProj[3]=t,r[3]=a),t>this.maxProj[3]&&(this.maxProj[3]=t,o[3]=a),t=e[a]+e[a+1]-e[a+2],t<this.minProj[4]&&(this.minProj[4]=t,r[4]=a),t>this.maxProj[4]&&(this.maxProj[4]=t,o[4]=a),t=e[a]-e[a+1]+e[a+2],t<this.minProj[5]&&(this.minProj[5]=t,r[5]=a),t>this.maxProj[5]&&(this.maxProj[5]=t,o[5]=a),t=e[a]-e[a+1]-e[a+2],t<this.minProj[6]&&(this.minProj[6]=t,r[6]=a),t>this.maxProj[6]&&(this.maxProj[6]=t,o[6]=a)}for(let a=0;a<J;++a){let t=r[a];X(this.minVert[a],e,t),t=o[a],X(this.maxVert[a],e,t)}},L=function(){this.b0=[1,0,0],this.b1=[0,1,0],this.b2=[0,0,1],this.quality=0};function Q(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function R(t,n,i){t[0]=n[0]+i[0],t[1]=n[1]+i[1],t[2]=n[2]+i[2]}function U(t,n,i){t[0]=n[0]-i[0],t[1]=n[1]-i[1],t[2]=n[2]-i[2]}function W(t,n,i){t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i}function X(t,n,i=0){t[0]=n[i+0],t[1]=n[i+1],t[2]=n[i+2]}function Z(t,n,i){const r=n[0],o=n[1],e=n[2],s=i[0],a=i[1],c=i[2];t[0]=o*c-e*a,t[1]=e*s-r*c,t[2]=r*a-o*s}function $(t,n){const i=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(i>0){const r=1/Math.sqrt(i);t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r}}function tt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function nt(t,n){const i=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return i*i+r*r+o*o}function it(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function rt(t,n){const i=n[0]+n[4]+n[8];if(i>0){let r=Math.sqrt(i+1);t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r}else{let i=0;n[4]>n[0]&&(i=1),n[8]>n[3*i+i]&&(i=2);const r=(i+1)%3,o=(i+2)%3;let e=Math.sqrt(n[3*i+i]-n[3*r+r]-n[3*o+o]+1);t[i]=.5*e,e=.5/e,t[3]=(n[3*r+o]-n[3*o+r])*e,t[r]=(n[3*r+i]+n[3*i+r])*e,t[o]=(n[3*o+i]+n[3*i+o])*e}}t.computeOBB=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
