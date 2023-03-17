/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../core/maybe","../../../chunks/vec4","../../../geometry/support/aaBoundingBox","../../../geometry/support/aaBoundingRect","./ElevationData","./interfaces","./PatchGeometry","./PatchGeometryLUT","./PatchRenderData","./terrainUtils","./Tile","./tileUtils"],(function(e,t,n,o,s,i,r,a,l,c,u,d,f,m){"use strict";const p=65536;function g(e,t){const n=e.tile,{extent:o,extentInRadians:i,surface:r}=n,c=e.localOrigin,u=e.geometryState,f=r.isWebMercator,m=r.shading||Y,p=u.numVerticesPerSide,g=p-1,x=(p-2)**2,M=f&&(t===a.PatchType.HAS_SOUTH_POLE||t===a.PatchType.HAS_BOTH_POLES),B=f&&(t===a.PatchType.HAS_NORTH_POLE||t===a.PatchType.HAS_BOTH_POLES),A=6,S=((M?1:0)+(B?1:0))*A*(g+1),v=u.neighborData,b=v.edgeResolutions.reduce(((e,t)=>e+t+1),0),L=x+S+b,I=l.acquireTerrainAttributes(L),R=e.geometryInfo;R.numVerticesPerSide=u.numVerticesPerSide,R.vertexAttributes=I;const N=R.boundingBox;s.empty(N);const V=T(e);z.update(g,i,V),h(e),j(e,x),E(e);const P=[];if((()=>{let e=x+b;const t=c[0],s=c[1],i=c[2],r=n.ellipsoid.radius,a=o[1],u=o[3],d=(n,o)=>{const c=o*p,d=-t,f=-s,h=n*r-i;l.minMaxBoundingBox(d,f,h,N),P.push({connectedRowOffset:c,connectedOuterEdgeOffset:1===n?0:2,rowOffset:e,latitudeResolution:A});const x=y(-1===n?a:u,r),M=n*Math.PI/2-x,B=.99*(1===n?1:-1),E=r+0,S=I.position,v=I.uv0,b=I.normalCompressed;for(let r=1;r<=A;++r){const n=x+M*(r/A),o=Math.cos(n),a=Math.sin(n);for(let r=0;r<=g;r++){const n=r/g,c=z.sinLonLUT[r],u=z.cosLonLUT[r]*o,d=c*o,f=a,p=u*E-t,h=d*E-s,x=f*E-i;l.minMaxBoundingBox(p,h,x,N),S.setValues(e,p,h,x),l.encodeUVInBuffer(v,e,n,B),m&&l.encodeNormalToBufferFromValues(b,e,u,d,f),++e}}};M&&d(-1,0),B&&d(1,g)})(),q(R,u.numVerticesPerSide,P,[0,p-1],[0,p-1],u.wireframe),e.intersectionData=null,d.ENABLE_TERRAIN_INTERNAL_CHECKS)for(let s=0;s<4;++s)d.internalAssert(R.outerEdges[s].count===v.edgeResolutions[s]+1)}function h(e){const t=e.tile;t.intersectsClippingArea&&(t.surface.shading||Y?M(e):x(e))}function x(e){const t=e.geometryState,n=t.numVerticesPerSide,o=n-2,s=n-1,i=e.geometryInfo,a=i.vertexAttributes,c=a.position,u=a.uv0,d=e.tile,f=d.extent,m=f[0],p=f[2],g=f[1],h=f[3],x=d.ellipsoid.radius,M=t.samplerData,B=e.localOrigin,A=B[0],E=B[1],S=B[2],v=i.boundingBox,y=c.typedBuffer,b=c.typedBufferStride;let L=0;for(let T=1;T<=o;T++){const e=T/s,t=g*(1-e)+h*e,n=z.sinLatLUT[T],i=z.cosLatLUT[T];for(let a=1;a<=o;a++){const o=a/s,c=m*(1-o)+p*o,d=z.sinLonLUT[a],f=z.cosLonLUT[a],g=x+r.sampleElevation(c,t,M),h=f*i*g-A,B=d*i*g-E,T=n*g-S;l.minMaxBoundingBox(h,B,T,v);const I=L*b;y[I]=h,y[I+1]=B,y[I+2]=T,l.encodeUVInBuffer(u,L,o,e),++L}}}function M(e){const t=e.geometryState,n=t.numVerticesPerSide,o=n-2,s=n-1,i=e.geometryInfo,a=i.vertexAttributes,c=a.position,u=a.uv0,d=a.normalCompressed,f=e.tile,m=f.extent,p=m[0],g=m[2],h=m[1],x=m[3],M=f.ellipsoid.radius,B=t.samplerData,A=e.localOrigin,E=A[0],S=A[1],v=A[2],y=c.typedBuffer,b=c.typedBufferStride,L=1/s,T=i.boundingBox;let I=0;if(1<=o){const e=L,t=h*(1-e)+x*e,n=z.sinLatLUT[1],s=z.cosLatLUT[1];for(let i=1;i<=o;i++){const o=i*L,a=p*(1-o)+g*o,c=z.sinLonLUT[i],d=z.cosLonLUT[i],f=M+r.sampleElevation(a,t,B),m=f*d*s-E,h=f*c*s-S,x=f*n-v;l.minMaxBoundingBox(m,h,x,T);const A=(i-1)*b;y[A]=m,y[A+1]=h,y[A+2]=x,l.encodeUVInBuffer(u,i-1,o,e)}}for(let R=1;R<=o;R++){const e=R*L,t=h*(1-e)+x*e,n=z.sinLatLUT[R],i=z.cosLatLUT[R],a=R+1,c=a*L,f=h*(1-c)+x*c,m=z.sinLatLUT[a],A=z.cosLatLUT[a],N=z.sinLonLUT[0],V=z.cosLonLUT[0],P=M+r.sampleElevation(p,t,B);let C=V*i*P-E,O=N*i*P-S,U=n*P-v;const D=I*b;let _=y[D],w=y[D+1],H=y[D+2];for(let x=1;x<=o;x++){const e=x*L,a=p*(1-e)+g*e,N=z.sinLonLUT[x],V=z.cosLonLUT[x];let P=V*i,D=N*i,q=n,j=0,F=0,W=0;{let e=0,a=0,l=0;if(x<o){const t=(I+1)*b;e=y[t],a=y[t+1],l=y[t+2]}else{const o=z.sinLonLUT[s],c=z.cosLonLUT[s],u=M+r.sampleElevation(g,t,B);e=c*i*u-E,a=o*i*u-S,l=n*u-v}const c=C,u=O,d=U;C=_,O=w,U=H,_=e,w=a,H=l,j=e-c,F=a-u,W=l-d}{let t=0,n=0,s=0;if(R>1){const e=(I-o)*b;t=y[e],n=y[e+1],s=y[e+2]}else{const e=z.sinLatLUT[0],o=z.cosLatLUT[0],i=M+r.sampleElevation(a,h,B);t=V*o*i-E,n=N*o*i-S,s=e*i-v}{const i=M+r.sampleElevation(a,f,B),d=V*A*i-E,p=N*A*i-S,g=m*i-v;if(R<o){const t=I+o,n=t*b;y[n]=d,y[n+1]=p,y[n+2]=g,l.minMaxBoundingBox(d,p,g,T),l.encodeUVInBuffer(u,t,e,c)}const h=t-d,x=n-p,L=s-g;q*q<.999&&(P=W*x-F*L,D=j*L-W*h,q=F*h-j*x)}}const K=1/Math.sqrt(P*P+D*D+q*q);l.encodeNormalToBufferFromValues(d,I,P*K,D*K,q*K),++I}}}function B(e){e.tile.intersectsClippingArea&&(E(e),G(e))}function A(e){e.tile.intersectsClippingArea&&(v(e),S(e,!0),G(e))}function E(e){e.tile.intersectsClippingArea&&(v(e),S(e))}function S(e,o=!1){const s=e.geometryState,i=e.geometryInfo,a=s.neighborData,c=e.tile,f=c.level,p=c.extent,g=c.ellipsoid.radius,h=c.extentInRadians,x=h[0],M=h[2],B=h[1],A=h[3],E=s.samplerData,S=p[0],v=p[2],y=p[1],b=p[3],L=T(e),I=i.boundingBox,R=e.localOrigin,N=R[0],V=R[1],P=R[2],C=c.surface.shading||Y,O=i.vertexAttributes,U=O.position,D=U.typedBuffer,_=U.typedBufferStride,w=O.uv0;for(let T=0;T<4;++T){const s=1===T||3===T,h=a.edgeResolutions[T];d.internalAssert(t.isPowerOfTwo(h));const R=h+1,O=u.neighborTileIfLoadedOrSelf(c,a.edgePeerNeighbors[T]);if(X(c,O,T)){F(e,T,O);continue}const U=n.isSome(O);d.internalAssert(!U||O.level===c.level),d.internalAssert(!U||m.compareTilesByLij(c,O)<=0);const H=O?.renderData,q=H?.geometryState;if(d.ENABLE_TERRAIN_INTERNAL_CHECKS){const e=c.surface;if(!O&&e&&!e.updatingRootTiles){const t=d.neighborEdgeIndices[T],o=c.findNeighborTile(t,(e=>e.isLoaded||e.isLeaf||e.level===c.level));o?o.intersectsClippingArea&&(d.internalAssert(!o.isLoaded),d.internalAssert(!o.isLeaf),d.internalAssert(o.level===f)):d.internalAssert(n.isNone(e?.rootTiles)||!c.shouldHaveNeighbor(t))}}const j=1===T?p[2]:p[0],W=O?.extent,K=W&&s?1===T?W[0]:W[2]:j,G=0===T?p[3]:p[1],k=1===T?1:0,z=0===T?1:0,J=1===T?M:x,Q=0===T?A:B,Y=Math.sin(J),Z=Math.cos(J),$=Math.sin(Q),ee=Math.cos(Q),te=q?.samplerData,ne=U?(e,t,n)=>.5*(r.sampleElevation(e,t,E)+r.sampleElevation(n,t,te)):(e,t,n)=>r.sampleElevation(e,t,E),oe=i.outerEdges[T],se=o&&R>3?R-3:1,ie=n.isSome(E)&&E.some((e=>null!=e)),re=n.isSome(te)&&te.some((e=>null!=e)),ae=ie||re,le=1/h,ce=oe.index0;if(C){d.internalAssert(!W||d.almostEquals(W[2]-W[0],p[2]-p[0]));(()=>{const e=1===T?-1:3===T?1:0,t=0===T?-1:2===T?1:0,n=(p[2]-p[0])*le,o=e*n,i=t*n,a=s?e*((M-x)*le):0,c=s?0:t*le,u=z,d=s?J+a:J,f=s?Math.sin(d):Y,m=s?Math.cos(d):Z,h=s?J-a:J,B=s?Math.sin(h):Y,A=s?Math.cos(h):Z,C=s?Q:L(u+c),O=s?$:Math.sin(C),H=s?ee:Math.cos(C),q=s?Q:L(u-c),F=s?$:Math.sin(q),W=s?ee:Math.cos(q);let X=0,ie=0,re=0;{const e=0*le,t=s?j:S*(1-e)+v*e,n=s?K:t,o=s?y*(1-e)+b*e:G,i=s?J:x*(1-e)+M*e,r=s?Y:Math.sin(i),a=s?Z:Math.cos(i),l=s?L(e):Q,c=s?Math.sin(l):$,u=s?Math.cos(l):ee,d=g+ne(t,o,n);X=a*u*d,ie=r*u*d,re=c*d}let ue=0,de=0,fe=0;{const e=1*le,t=s?j:S*(1-e)+v*e,n=s?K:t,o=s?y*(1-e)+b*e:G,i=s?J:x*(1-e)+M*e,r=s?Y:Math.sin(i),a=s?Z:Math.cos(i),l=s?L(e):Q,c=s?Math.sin(l):$,u=s?Math.cos(l):ee,d=g+ne(t,o,n);ue=a*u*d,de=r*u*d,fe=c*d}for(let p=1;p<R-1;p+=se){let e=0,t=0,n=0;{const o=(p+1)*le,i=s?j:S*(1-o)+v*o,r=s?K:i,a=s?y*(1-o)+b*o:G,l=s?J:x*(1-o)+M*o,c=s?Y:Math.sin(l),u=s?Z:Math.cos(l),d=s?L(o):Q,f=s?Math.sin(d):$,m=s?Math.cos(d):ee,h=g+ne(i,a,r);e=u*m*h,t=c*m*h,n=f*h}const a=e,c=t,u=n,d=ue,h=de,R=fe;ue=a,de=c,fe=u;{const e=ce+p,t=e*_,n=d-N,o=h-V,i=R-P;D[t]=n,D[t+1]=o,D[t+2]=i,l.minMaxBoundingBox(n,o,i,I);const r=p*le,a=s?k:r,c=s?r:z;l.encodeUVInBuffer(w,e,a,c)}const C=X,q=ie,se=re;X=d,ie=h,re=R;const me=d,pe=h,ge=R,he=1/Math.sqrt(me*me+pe*pe+ge*ge),xe=ge*he;let Me=0,Be=0,Ae=0;if(ae&&xe*xe<.999){let e=0,t=0,n=0;{const o=0===T?-1:1;e=o*(a-C),t=o*(c-q),n=o*(u-se)}{const a=p*le,l=s?j:S*(1-a)+v*a,c=s?K:l,u=s?y*(1-a)+b*a:G,d=s?J:x*(1-a)+M*a,h=s?Y:Math.sin(d),I=s?Z:Math.cos(d),R=s?L(a):Q,N=s?Math.sin(R):$,V=s?Math.cos(R):ee;let P=me,C=pe,D=ge;if(U){const e=c-o,t=u-i,n=g+r.sampleElevation(e,t,te),a=s?V:W;P=(s?A:I)*a*n,C=(s?B:h)*a*n,D=(s?N:F)*n}{const a=l+o,c=u+i,d=g+r.sampleElevation(a,c,E),p=s?V:H,x=(s?m:I)*p*d,M=(s?f:h)*p*d,B=(s?N:O)*d;U||(P=2*me-x,C=2*pe-M,D=2*ge-B);const A=3===T?-1:1,S=A*(P-x),v=A*(C-M),y=A*(D-B);Me=n*v-t*y,Be=e*y-n*S,Ae=t*S-e*v;const b=1/Math.sqrt(Me*Me+Be*Be+Ae*Ae);Me*=b,Be*=b,Ae*=b}}}else Me=me*he,Be=pe*he,Ae=ge*he;oe.setNormalFromValues(p,Me,Be,Ae)}})()}else{(()=>{for(let e=1;e<R-1;e+=se){const t=e*le,n=s?k:t,o=s?t:z,i=s?j:S*(1-t)+v*t,r=s?y*(1-t)+b*t:G,a=s?K:i,c=s?J:x*(1-t)+M*t,u=s?Y:Math.sin(c),d=s?Z:Math.cos(c),f=s?L(t):Q,m=s?Math.sin(f):$,p=s?Math.cos(f):ee,h=ne(i,r,a),B=g+h,A=d*p*B-N,E=u*p*B-V,T=m*B-P;l.minMaxBoundingBox(A,E,T,I);const R=ce+e,C=R*_;D[C]=A,D[C+1]=E,D[C+2]=T,l.encodeUVInBuffer(w,R,n,o)}})()}}}function v(e){W(e)}function y(e,t){return Math.PI/2-2*Math.atan(Math.exp(-e/t))}function b(e,t,n,o){return y(e*(1-o)+t*o,n)}function L(e,t,n){return e*(1-n)+t*n}function T(e){const t=e.tile;if(t.surface.isWebMercator){const e=t.extent,n=t.ellipsoid.radius;return t=>b(e[1],e[3],n,t)}const n=t.extentInRadians;return e=>L(n[1],n[3],e)}function I(e,t){const i=e.tile.extent,r=e.geometryState,a=i[0],c=i[1],u=i[2]-a,d=i[3]-c,f=r.clippingArea,m=n.isSome(f)?Math.max(0,(f[0]-a)/u):0,p=n.isSome(f)?Math.max(0,(f[1]-c)/d):0,g=n.isSome(f)?Math.min(1,(f[2]-a)/u):1,h=n.isSome(f)?Math.min(1,(f[3]-c)/d):1,x=r.numVerticesPerSide,M=(x-2)**2,B=M+r.neighborData.edgeResolutions.reduce(((e,t)=>e+t+1),0),A=l.acquireTerrainAttributes(B),E=e.geometryInfo,S=E.boundingBox;s.empty(S),E.numVerticesPerSide=r.numVerticesPerSide,E.vertexAttributes=A,o.set(E.uvRange,m,p,g,h),R(e),j(e,M),O(e),q(E,r.numVerticesPerSide,[],[0,x-1],[0,x-1],r.wireframe),e.intersectionData=null}function R(e){const t=e.tile;t.intersectsClippingArea&&(t.surface.shading?V(e):N(e))}function N(e){const o=e.geometryState,s=o.samplerData,i=e.tile,a=i.surface,c=e.localOrigin,u=a.isWebMercatorOnPlateeCarree,d=o.clippingArea,f=n.isSome(d)?d:J,m=i.extent,p=m[0],g=m[1],h=m[2],x=m[3],M=Math.max(p,f[0]),B=Math.min(h,f[2]),A=Math.max(g,f[1]),E=Math.min(x,f[3]),S=c[0],v=c[1],y=c[2],b=i.ellipsoid.radius,L=i.horizontalScale,T=H(u,b,L),I=o.numVerticesPerSide,R=I-1,N=I-2,V=e.geometryInfo,P=V.uvRange,C=P[0],O=P[1],U=P[2],D=P[3],_=V.boundingBox,w=V.vertexAttributes,q=w.position,j=w.uv0;let F=0;for(let n=1;n<=N;n++){const e=n/R,o=t.clamp(g*(1-e)+x*e,A,E),i=t.clamp(e,O,D),a=T(o)-v;for(let n=1;n<=N;n++){const e=n/R,c=t.clamp(p*(1-e)+h*e,M,B),u=t.clamp(e,C,U),d=c*L-S,f=r.sampleElevation(c,o,s)-y;l.minMaxBoundingBox(d,a,f,_),q.setValues(F,d,a,f),l.encodeUVInBuffer(j,F,u,i),++F}}}function V(e){const o=e.tile,s=o.surface;if(!(s.shading||Y))return;const i=e.geometryState,a=i.samplerData,c=e.localOrigin,u=s.isWebMercatorOnPlateeCarree,d=i.clippingArea,f=n.isSome(d)?d:J,m=o.extent,p=m[0],g=m[1],h=m[2],x=m[3],M=Math.max(p,f[0]),B=Math.min(h,f[2]),A=Math.max(g,f[1]),E=Math.min(x,f[3]),S=o.ellipsoid.radius,v=o.horizontalScale,y=i.numVerticesPerSide,b=y-1,L=y-2,T=e.geometryInfo,I=T.vertexAttributes,R=I.position,N=I.uv0,V=I.normalCompressed,P=T.uvRange,C=P[0],O=P[1],U=P[2],D=P[3],_=T.boundingBox,w=c[0],H=c[1],q=c[2],j=R.typedBuffer,F=R.typedBufferStride;let W=0;const K=t.clamp(g,A,E),G=u?(Math.PI/2-2*Math.atan(Math.exp(-K/S)))*S:K*v,k=1/b,z=t.clamp(g*(1-k)+x*k,A,E);let Q=G,X=u?(Math.PI/2-2*Math.atan(Math.exp(-z/S)))*S:z*v;for(let n=1;n<=L;n++){const e=n/b,o=t.clamp(g*(1-e)+x*e,A,E),s=t.clamp(e,O,D),i=X,c=(n-1)/b,d=t.clamp(g*(1-c)+x*c,A,E),f=Q,m=(n+1)/b,y=t.clamp(g*(1-m)+x*m,A,E),T=u?(Math.PI/2-2*Math.atan(Math.exp(-y/S)))*S:y*v,I=t.clamp(m,O,D);Q=X,X=T;const R=t.clamp(p,M,B);let P=R*v,K=r.sampleElevation(R,o,a);const G=1/b,k=t.clamp(G,C,U),z=t.clamp(p*(1-k)+h*k,M,B);let J=k,Y=z,Z=z*v,$=r.sampleElevation(z,o,a);if(1===n){const e=Z-w,n=Q-H,o=$-q,i=0*F;j[i]=e,j[i+1]=n,j[i+2]=o,l.minMaxBoundingBox(e,n,o,_);const r=t.clamp(G,C,U);l.encodeUVInBuffer(N,W,r,s)}for(let u=1;u<=L;u++){const e=Z,c=$,m=(u+1)/b,g=t.clamp(m,C,U),x=t.clamp(p*(1-m)+h*m,M,B),A=Y;Y=x;{const e=W+1,t=e*F;if(1===n||u===L){const c=x*v,d=r.sampleElevation(x,o,a);if(1===n&&u<L){const n=c-w,o=i-H,r=d-q;j[t]=n,j[t+1]=o,j[t+2]=r,l.minMaxBoundingBox(n,o,r,_),l.encodeUVInBuffer(N,e,g,s)}Z=c,$=d}else Z=j[t]+w,$=j[t+2]+q}const E=Z,S=$,R=P,O=K;P=e,K=c;const D=(W-L)*F,G=1===n?r.sampleElevation(A,d,a):j[D+2]+q,k=r.sampleElevation(A,y,a);if(n<L){const t=W+L,n=t*F,o=e-w,s=T-H,i=k-q;j[n]=o,j[n+1]=s,j[n+2]=i,l.minMaxBoundingBox(o,s,i,_);const r=J;J=g,l.encodeUVInBuffer(N,t,r,I)}{const e=E-R,t=f-T,n=t*(S-O),o=e*(G-k),s=-t*e,i=n*n+o*o+s*s;if(0===i)l.encodeNormalToBufferFromValues(V,W,0,0,1);else{const e=1/Math.sqrt(i);l.encodeNormalToBufferFromValues(V,W,n*e,o*e,s*e)}}++W}}}function P(e,t){e.tile.intersectsClippingArea&&(D(e),U(e,!0),G(e))}function C(e,t){e.tile.intersectsClippingArea&&(O(e),G(e))}function O(e,t){e.tile.intersectsClippingArea&&(D(e),U(e,!1))}function U(e,o){const s=e.geometryState,i=s.neighborData,a=e.tile,c=a.surface,f=c.shading||Y,p=a.extent,g=s.clippingArea,h=n.isSome(g)?g:J,x=p[0],M=p[2],B=p[1],A=p[3],E=[A>h[3],M>h[2],B<h[1],x<h[0]],S=e.geometryInfo,v=a.horizontalScale,y=H(c.isWebMercatorOnPlateeCarree,a.ellipsoid.radius,v),b=S.boundingBox,L=S.uvRange[0],T=S.uvRange[1],I=S.uvRange[2],R=S.uvRange[3],N=Math.max(x,h[0]),V=Math.min(M,h[2]),P=Math.max(B,h[1]),C=Math.min(A,h[3]),O=e.localOrigin,U=O[0],D=O[1],_=O[2],w=s.samplerData;for(let H=0;H<4;++H){const s=1===H||3===H,p=i.edgeResolutions[H];d.internalAssert(t.isPowerOfTwo(p));const g=p+1,h=E[H],O=u.neighborTileIfLoadedOrSelf(a,i.edgePeerNeighbors[H]);if(!h&&X(a,O,H)){F(e,H,O);continue}const q=n.isSome(O)&&!h,j=O?.renderData,W=j?.geometryState;if(d.ENABLE_TERRAIN_INTERNAL_CHECKS&&(d.internalAssert(!q||O.level===a.level),d.internalAssert(!q||m.compareTilesByLij(a,O)<=0),a&&!O&&!c.updatingRootTiles)){const e=d.neighborEdgeIndices[H],t=a.findNeighborTile(e,(e=>e.isLoaded||e.isLeaf||e.level===a.level));c.updatingRootTiles||(t?t.intersectsClippingArea&&(d.internalAssert(!t.isLoaded),d.internalAssert(!t.isLeaf),d.internalAssert(t.level===a.level)):d.internalAssert(n.isNone(c?.rootTiles)||!a.shouldHaveNeighbor(e)))}const K=t.clamp(1===H?M:x,N,V),G=t.clamp(0===H?A:B,P,C),k=W?.samplerData,z=S.outerEdges[H],J=o&&g>3?g-3:1,Q=t.clamp(1===H?1:0,L,I),Y=t.clamp(0===H?1:0,T,R),Z=q?(e,t)=>.5*(r.sampleElevation(e,t,k)+r.sampleElevation(e,t,w)):(e,t)=>r.sampleElevation(e,t,w);if(f){const e=(M-x)/p,n=s?1===H?e:-e:0,o=s?0:0===H?e:-e,i=-n,a=-o;let c=0,u=0,d=0;{const e=0/p,n=s?K:t.clamp(x*(1-e)+M*e,N,V),o=s?t.clamp(B*(1-e)+A*e,P,C):G,i=Z(n,o);c=n*v,u=y(o),d=i}let f=0,m=0,h=0;{const e=1/p,n=s?K:t.clamp(x*(1-e)+M*e,N,V),o=s?t.clamp(B*(1-e)+A*e,P,C):G,i=Z(n,o);f=n*v,m=y(o),h=i}for(let E=1;E<g-1;E+=J){const e=E/p,g=f,S=m,O=h;{const n=s?Q:t.clamp(e,L,I),o=s?t.clamp(e,T,R):Y,i=g-U,r=S-D,a=O-_;l.minMaxBoundingBox(g,r,a,b),z.setVertexFromValuesRawPositionUV(E,i,r,a,n,o)}{const e=(E+1)/p,n=s?K:t.clamp(x*(1-e)+M*e,N,V),o=s?t.clamp(B*(1-e)+A*e,P,C):G,i=Z(n,o);f=n*v,m=y(o),h=i}const j=f,F=h,W=c,J=u,X=d;c=g,u=S,d=O;let $=0,ee=0,te=0;if(s){const o=m-S,s=F-O,a=J-S,l=X-O,c=t.clamp(B*(1-e)+A*e,P,C),u=K+i,d=c,f=u*v-g,p=r.sampleElevation(u,d,w)-O,h=3===H?-1:1;if($=h*(-a+o)*p,ee=h*f*(-l+s),te=-h*f*(-a+o),q){const e=K+n,t=c,i=e*v-g;$=(-a+o)*(p-(r.sampleElevation(e,t,k)-O)),ee=(f-i)*(-l+s),te=-(f-i)*(-a+o)}}else{const n=j-g,s=F-O,i=W-g,l=X-O,c=t.clamp(x*(1-e)+M*e,N,V),u=c,d=G+a,f=r.sampleElevation(u,d,w)-O,m=y(d)-S,p=2===H?-1:1;if($=p*m*(-l+s),ee=p*(-i+n)*f,te=-p*m*(-i+n),q){const e=c,t=G+o,a=y(t)-S;$=(-m+a)*(-l+s),ee=(-i+n)*(-f+(r.sampleElevation(e,t,k)-O)),te=-(-m+a)*(-i+n)}}const ne=1/Math.sqrt($*$+ee*ee+te*te);z.setNormalFromValues(E,$*ne,ee*ne,te*ne)}}else for(let e=1;e<g-1;e+=J){const n=e/p,o=s?K:t.clamp(x*(1-n)+M*n,N,V),i=s?t.clamp(B*(1-n)+A*n,P,C):G,r=s?Q:t.clamp(n,L,I),a=s?t.clamp(n,T,R):Y,c=Z(o,i),u=o*v-U,d=y(i)-D,f=c-_;l.minMaxBoundingBox(u,d,f,b),z.setVertexFromValuesRawPositionUV(e,u,d,f,r,a)}}}function D(e,t){W(e)}function _(e,t){return(Math.PI/2-2*Math.atan(Math.exp(-e/t)))*t}function w(e,t){return e*t}function H(e,t,n){return e?e=>_(e,t):e=>w(e,n)}function q(e,t,n,o,s,i){const r=t-1,a=e.vertexAttributes.count,l=2*(Math.min(t-2,o[1])-Math.max(1,o[0]))*(Math.min(t-2,s[1])-Math.max(1,s[0])),c=d.neighborEdgeIndices.map(((e,n)=>0===n&&s[1]<t-2||1===n&&o[1]<t-2||2===n&&s[0]>1||3===n&&o[0]>1)),u=e.outerEdges.reduce(((e,t,n)=>e+(c[n]?0:r-2+t.count-1)),0),f=n.reduce(((e,t)=>e+r*(2*(t.latitudeResolution-1)+1)),0),m=i?2:1,g=3*(l+u+f)*m,h=a>=p?new Uint32Array(g):new Uint16Array(g);let x=0;const M=t-2,B=r-2;d.internalAssert(B>=0);const A=(e,t,n,o,s,i)=>{const r=e*s,a=i[r],l=i[r+1],c=i[r+2],u=t*s,d=i[u],f=i[u+1],m=i[u+2],p=n*s,g=i[p],h=i[p+1],x=i[p+2],M=o*s,B=i[M],A=i[M+1],E=i[M+2];return(d-B)*(d-B)+(f-A)*(f-A)+(m-E)*(m-E)>(a-g)*(a-g)+(l-h)*(l-h)+(c-x)*(c-x)};if(i){const i=(e,t,n)=>{h[x++]=e,h[x++]=t,h[x++]=t,h[x++]=n,h[x++]=n,h[x++]=e,d.ENABLE_TERRAIN_INTERNAL_CHECKS&&(d.internalAssert(e<a),d.internalAssert(t<a),d.internalAssert(n<a),d.internalAssert(x<=g))};(()=>{for(let n=Math.max(s[0],1)-1;n<Math.min(s[1],t-2)-1;++n){const s=n*M;for(let r=Math.max(o[0],1)-1;r<Math.min(o[1],t-2)-1;++r){const t=n*M+r,o=t+1,a=o+M,l=a-1,c=s+r,u=c+1,d=u+M,f=d-1,m=e.vertexAttributes.position.typedBuffer,p=e.vertexAttributes.position.typedBufferStride;A(c,u,d,f,p,m)?(i(t,o,a),i(a,l,t)):(i(t,o,l),i(l,a,o))}}})(),d.internalAssert(x===3*l*m);(()=>{for(let t=0;t<4;++t){const n=x;if(c[t])continue;const o=e.outerEdges[t],s=e.innerEdges[t];let a=0,l=0;const u=o.count,f=s.count;d.internalAssert(f===r-1);let p=0;const g=1===t||2===t?(e,t,n)=>i(e,t,n):(e,t,n)=>i(e,n,t);for(;a<u-1||l<f-1;){const e=s.getVertexIndex(l),t=o.getVertexIndex(a),n=a<u-1,i=l<f-1;if(n&&(!i||(n?0+r*(a+.5)/(u-1):0)<=(i?1+B*(l+.5)/(f-1):0))){++a,d.ENABLE_TERRAIN_INTERNAL_CHECKS&&d.internalAssert(a<u);g(e,t,o.getVertexIndex(a)),p++}else{++l,d.ENABLE_TERRAIN_INTERNAL_CHECKS&&d.internalAssert(l<f);g(e,t,s.getVertexIndex(l)),p++}}d.ENABLE_TERRAIN_INTERNAL_CHECKS&&(d.internalAssert(a===u-1),d.internalAssert(l===f-1),d.internalAssert(p===u+f-2),d.internalAssert(p===r-2+o.count-1),d.internalAssert(x===n+3*p*m))}})(),d.internalAssert(x===3*(l+u)*m);const f=n=>{const o=e.outerEdges[n.connectedOuterEdgeOffset];let s=o.getVertexIndex(0),a=o.stride;for(let e=0;e<n.latitudeResolution;++e){const o=0===e?n.rowOffset:s+t;for(let t=0;t<r;t++)i(s,s+1,o+t),e<n.latitudeResolution-1&&i(s+1,o+t+1,o+t),s+=a;s=o,a=1}};(()=>n.forEach(f))()}else{(()=>{const n=Math.max(s[0],1)-1,i=Math.min(s[1],t-2)-1,r=Math.max(o[0],1)-1,a=Math.min(o[1],t-2)-1;for(let t=n;t<i;++t){const n=t*M;for(let t=r;t<a;++t){const o=n+t,s=o+1,i=s+M,r=i-1,a=e.vertexAttributes.position.typedBuffer,l=e.vertexAttributes.position.typedBufferStride;A(o,s,i,r,l,a)?(h[x]=o,h[x+1]=s,h[x+2]=i,h[x+3]=i,h[x+4]=r,h[x+5]=o):(h[x]=o,h[x+1]=s,h[x+2]=r,h[x+3]=r,h[x+4]=s,h[x+5]=i),x+=6}}})(),d.internalAssert(x===3*l*m);(()=>{for(let t=0;t<4;++t){if(c[t])continue;const n=e.outerEdges[t],o=e.innerEdges[t];let s=0,i=0;const a=n.count,l=o.count;d.internalAssert(l===r-1);const u=1===t||2===t,f=u?1:2,m=u?2:1,p=n.index0,g=n.stride,M=o.index0,A=o.stride;for(;s<a-1||i<l-1;){const e=M+i*A,t=p+s*g,n=s<a-1,o=i<l-1,c=n&&(!o||(n?0+r*(s+.5)/(a-1):0)<=(o?1+B*(i+.5)/(l-1):0));c?++s:++i;const u=c?t+g:e+A;h[x]=e,h[x+f]=t,h[x+m]=u,x+=3}}})(),d.internalAssert(x===3*(l+u)*m);const i=n=>{const o=e.outerEdges[n.connectedOuterEdgeOffset];let s=o.getVertexIndex(0),i=o.stride;for(let e=0;e<n.latitudeResolution;++e){const o=0===e?n.rowOffset:s+t;for(let t=0;t<r;t++){const r=o+t;h[x]=s,h[x+1]=s+1,h[x+2]=r,e<n.latitudeResolution-1?(h[x+3]=s+1,h[x+4]=r+1,h[x+5]=r,x+=6):x+=3,s+=i}s=o,i=1}};(()=>n.forEach(i))()}d.internalAssert(x===g),e.indices=h,e.indexCount=g}function j(e,t){const n=e.localOrigin,o=e.geometryInfo,s=e.geometryState.neighborData.edgeResolutions,i=o.numVerticesPerSide-2,r=o.vertexAttributes;let a=t;for(let c=0;c<4;++c){{const e=0===c||2===c,t=(0===c?i-1:0)*i+(1===c?i-1:0),s=(e?0:1)*i+(e?1:0);o.innerEdges[c]=new l.EdgeDescriptor(r,n,t,s,i)}{const e=a,t=s[c]+1;o.outerEdges[c]=new l.EdgeDescriptor(r,n,e,1,t),a+=t}}}function F(e,n,o){const s=(n+2)%4,i=e.geometryState,r=e.tile,a=i.neighborData,c=r.level-o.level,u=1===n||3===n,f=a.edgeResolutions[n];d.internalAssert(t.isPowerOfTwo(f));const m=f+1,p=e.geometryInfo,g=p.boundingBox,h=p.outerEdges[n],x=p.uvRange[0],M=p.uvRange[1],B=p.uvRange[2],A=p.uvRange[3],E=t.clamp(1===n?1:0,x,B),S=t.clamp(0===n?1:0,M,A),v=o.renderData,y=v.geometryState,b=v.geometryInfo.outerEdges[s],L=r.getNeighborEdgeStartVertexIndex(n,o)*f,T=f*2**c;d.internalAssert(y.neighborData.edgeResolutions[s]===T),d.internalAssert(b.count-1===T);const I=v.localOrigin[0]-e.localOrigin[0],R=v.localOrigin[1]-e.localOrigin[1],N=v.localOrigin[2]-e.localOrigin[2],V=h.attributes,P=h.index0,C=h.stride,O=V.position.typedBuffer,U=V.position.typedBufferStride,D=V.normalCompressed.typedBuffer,_=V.normalCompressed.typedBufferStride,w=V.uv0,H=b.attributes,q=b.index0,j=b.stride,F=H.position.typedBuffer,W=H.position.typedBufferStride,K=H.normalCompressed.typedBuffer,G=H.normalCompressed.typedBufferStride;for(let d=1;d<m-1;++d){const e=P+C*d,n=q+j*(L+d),o=e*U,s=n*W,i=F[s]+I,r=F[s+1]+R,a=F[s+2]+N;O[o]=i,O[o+1]=r,O[o+2]=a,l.minMaxBoundingBox(i,r,a,g);const c=e*_,m=n*G;D[c]=K[m],D[c+1]=K[m+1];const p=d/f,h=u?E:t.clamp(p,x,B),v=u?t.clamp(p,M,A):S;l.encodeUVInBuffer(w,e,h,v)}}function W(e){const o=e.geometryState,s=o.neighborData,i=e.localOrigin,a=s.cornerNeighborData,c=e.geometryInfo,u=c.outerEdges,f=c.boundingBox,p=e.tile,g="local"===e.tile.surface.view?.viewingMode,h=p.ellipsoid.radius,x=p.extentInRadians,M=p.horizontalScale;let B=0,A=0,E=0;const S=(e,t,n)=>{const o=x[0===t?1:3],s=x[0===e?0:2],i=Math.cos(o),r=Math.sin(o),a=Math.sin(s),l=Math.cos(s),c=h+n;B=l*i*c,A=a*i*c,E=r*c},v=g?(()=>{const o=e.geometryState.clippingArea,s=p.extent,i=n.isSome(o)&&(s[3]>o[3]||s[2]>o[2]||s[1]<o[1]||s[0]<o[0]),r=H(p.surface.isWebMercatorOnPlateeCarree,p.ellipsoid.radius,M);return(e,n,s)=>{const a=0===e?D[0]:D[2],l=0===n?D[1]:D[3],c=i?t.clamp(a,o[0],o[2]):a,u=i?t.clamp(l,o[1],o[3]):l,d=s;B=c*M,A=r(u),E=d}})():S;let y=0,b=0,L=0,I=0,R=0,N=0,V=0,P=0,C=0;const O=g&&e.tile.surface.isWebMercatorOnPlateeCarree,U=(e,t,n,o,s)=>{let i=0,r=0,a=0;if(g){const e=t*M,s=O?(Math.PI/2-2*Math.atan(Math.exp(-n/h)))*h:n*M;i=e-B,r=s-A,a=o-E}else{const s=T(e),l=e.tile,c=l.extent,u=l.extentInRadians,d=(t-c[0])/(c[2]-c[0]),f=(n-c[1])/(c[3]-c[1]),m=u[0]*(1-d)+u[2]*d,p=s(f),g=Math.cos(p),x=Math.sin(p),M=Math.sin(m),S=Math.cos(m),v=h+o;i=S*g*v-B,r=M*g*v-A,a=x*v-E}switch(s){case 0:V+=i,P+=r,C+=a;break;case 1:I-=i,R-=r,N-=a;break;case 2:V-=i,P-=r,C-=a;break;case 3:I+=i,R+=r,N+=a}},D=p.extent,_=o.clippingArea,w=n.isSome(_)?_:J,q=D[0],j=D[2],F=D[1],W=D[3],G=[W>w[3],j>w[2],F<w[1],q<w[0]],z=Math.max(q,w[0]),X=Math.min(j,w[2]),Z=Math.max(F,w[1]),$=Math.min(W,w[3]),ee=c.uvRange[0],te=c.uvRange[1],ne=c.uvRange[2],oe=c.uvRange[3],se=p.surface.shading||Y,ie=e=>{const t=a[e].cornerTiles;y=0,b=0,L=1;let n=1/0;for(let r=0;r<4;++r)n=Math.min(n,t[r]?.level??1/0);for(let r=0;r<4;++r){const e=t[r];Q[r]=e?.level===n?e:null}let o=1,s=0;for(let r=0;r<4;++r){const e=Q[r];e&&(o=Math.max(o,e?.renderData.geometryState.numVerticesPerSide),s=e.extent[2]-e.extent[0])}const i=s,l=o;d.internalAssert(l>1);const c=i/l;for(let a=0;a<4;++a){const e=Q[(a+3)%4],t=Q[a%4];if(!e&&!t)continue;const n=0===a?1:1===a?2:2===a?3:0,o=0===a?2:1===a?3:2===a?0:1;if(e&&t){const s=k[a][0]*c,i=k[a][1]*c,l=e.extent,u=l[0===n||1===n?2:0]+s,d=l[0===n||3===n?3:1]+i,f=t.extent,m=f[0===o||1===o?2:0]+s,p=f[0===o||3===o?3:1]+i,g=e.renderData,h=t.renderData,x=r.sampleElevation(u,d,g.geometryState.samplerData),M=r.sampleElevation(m,p,h.geometryState.samplerData);U(g,u,d,.5*(x+M),a)}else{const s=e??t,i=e?n:o,l=s.extent,u=k[a],d=l[0===i||1===i?2:0]+u[0]*c,f=l[0===i||3===i?3:1]+u[1]*c,m=s.renderData,p=r.sampleElevation(d,f,m.geometryState.samplerData);U(m,d,f,p,a)}}if(!g){const e=Math.sqrt(B*B+A*A+E*E);y=B/e,b=A/e,L=E/e}const u=Math.sqrt(I*I+R*R+N*N);I/=u,R/=u,N/=u;const f=Math.sqrt(V*V+P*P+C*C);if(V/=f,P/=f,C/=f,g||L*L<.999){y=N*P-R*C,b=I*C-N*V,L=R*V-I*P;const e=1/Math.sqrt(y*y+b*b+L*L);y*=e,b*=e,L*=e}};for(let n=0;n<4;++n){const s=n,c=(n+1)%4,g=0===n||1===n?1:0,h=0===n||3===n?1:0,x=t.clamp(g,ee,ne),M=t.clamp(h,te,oe),S=u[s],T=0===n||3===n?S.count-1:0,I=u[c],R=0===n||1===n?I.count-1:0,N=a[n].cornerTiles;let V=-1;for(let e=0;e<4;++e){const t=N[e];t&&(-1===V||m.compareTilesByLij(N[V],t)>0)&&(V=e)}const P=V,C=N[P];if(y=0,b=0,L=1,C!==p){const t=p.level-C.level,o=2**t,s=[C.lij[0]+t,C.lij[1]*o,C.lij[2]*o],i=[s[1]+o===p.lij[1],0===n&&(1===P||0===P&&C!==N[3])||1===n&&(0===P||1===P&&C!==N[2]),s[1]===p.lij[1]+1,2===n&&(3===P||2===P&&C!==N[1])||3===n&&(2===P||3===P&&C!==N[0])],r=i.reduce(((e,t)=>e+(t?1:0)),0);d.internalAssert(1===r||2===r);let a=-1,c=-1;const u=C.renderData;if(1===r){const t=i.findIndex((e=>e));d.internalAssert(0<=t&&t<=3),a=(t+2)%4;const o=e.geometryState.neighborData.edgeResolutions[t];c=p.getNeighborEdgeStartVertexIndex(t,C)*o+o*(0===t&&0===n||1===t&&0===n||2===t&&1===n||3===t&&3===n?1:0)}else{d.internalAssert(i[1]||i[3]),a=i[1]?3:1;const e=u.geometryState.neighborData.edgeResolutions[a];c=0===n||3===n?0:e}const m=u.geometryInfo.outerEdges[a];{const t=S.index0+T*S.stride,n=I.index0+R*I.stride,o=m.index0+c*m.stride;{const s=m.attributes.position,i=s.typedBuffer,r=o*s.typedBufferStride,a=e.localOrigin,c=m.localOrigin,u=i[r]+c[0]-a[0],d=i[r+1]+c[1]-a[1],p=i[r+2]+c[2]-a[2];l.minMaxBoundingBox(u,d,p,f);{const e=S.attributes.position,n=e.typedBuffer,o=t*e.typedBufferStride;n[o]=u,n[o+1]=d,n[o+2]=p}{const e=I.attributes.position,t=e.typedBuffer,o=n*e.typedBufferStride;t[o]=u,t[o+1]=d,t[o+2]=p}}l.encodeUVInBuffer(S.attributes.uv0,t,x,M),l.encodeUVInBuffer(I.attributes.uv0,n,x,M);{const e=m.attributes.normalCompressed.typedBuffer,s=o*m.attributes.normalCompressed.typedBufferStride;{const n=S.attributes.normalCompressed,o=n.typedBuffer,i=t*n.typedBufferStride;o[i]=e[s],o[i+1]=e[s+1]}{const t=I.attributes.normalCompressed,o=t.typedBuffer,i=n*t.typedBufferStride;o[i]=e[s],o[i+1]=e[s+1]}}}}else{const e=G[s],a=G[c];let u;if(e||a){const e=t.clamp(q*(1-g)+j*g,z,X),n=t.clamp(F*(1-h)+W*h,Z,$),s=o.samplerData;u=r.sampleElevation(e,n,s)}else u=K(N);v(g,h,u),(se||Y)&&ie(n);const d=B-i[0],m=A-i[1],p=E-i[2];l.minMaxBoundingBox(d,m,p,f),S.setVertexFromValuesRawPositionUVNormal(T,d,m,p,x,M,y,b,L),I.setVertexFromValuesRawPositionUVNormal(R,d,m,p,x,M,y,b,L)}}for(let t=0;t<4;++t)Q[t]=null}function K(e){const t=e.reduce(((e,t)=>Math.min(e,t?.level??1/0)),1/0);d.ENABLE_TERRAIN_INTERNAL_CHECKS&&(d.internalAssert(!e[0]||!e[2]||f.isCornerNeighbor(e[0],e[2],a.NeighborIndex.SOUTH_WEST)),d.internalAssert(!e[1]||!e[3]||f.isCornerNeighbor(e[1],e[3],a.NeighborIndex.NORTH_WEST)));let n=0,o=0;for(let i=0;i<4;++i){const s=e[i];if(s&&s.level===t){const e=0===i||1===i,t=0===i||3===i,a=s.extent,l=a[e?0:2],c=a[t?1:3],u=s.renderData?.geometryState?.samplerData;o+=r.sampleElevation(l,c,u),n++}}const s=n?o/n:0;return d.internalAssert(null!=s),s}function G(e){const t=e.vao,n=e.geometryInfo.vertexAttributes.position.typedBuffer;t.vertexBuffers.geometry.setSubData(n,0,0,n.length)}const k=[[0,1],[1,0],[0,-1],[-1,0]],z=new c.PatchGeometryLUT,J=i.fromValues(-1/0,-1/0,1/0,1/0),Q=[null,null,null,null];function X(e,t,n){if(!t)return!1;const o=m.compareTilesByLij(e,t);return o>0||0===o&&n>=2}const Y=!0;e.createInternalVerticesPositionsSpherical=x,e.createPlanarGlobePatch=I,e.createSphericalGlobePatch=g,e.updateCornerSpherical=A,e.updateCornersPlanar=P,e.updateEdgesAndCornersPlanar=C,e.updateEdgesAndCornersSpherical=B,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
