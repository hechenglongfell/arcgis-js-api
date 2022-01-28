/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry","../../../../core/Logger","../../../../core/mathUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/RandomLCG","../../../../geometry/support/spatialReferenceUtils","../../../../geometry/Extent"],(function(t,e,n,r,o,i,a,l,s,c){"use strict";const h=r.getLogger("esri.views.2d.engine.flow.dataUtils"),f=8;function u(t,e,n){return d.apply(this,arguments)}function d(){return(d=e._asyncToGenerator((function*(t,e,n){const r=performance.now(),o=g(t,e),i=performance.now(),l=w(t,o,e.width,e.height),s=performance.now(),c=y(l,!0),f=performance.now(),u=M(c),d=performance.now();if(t.profile){const t={"_createFlowFieldFromData()":Math.round(i-r),"_getStreamlines()":Math.round(s-i),"createAnimatedLinesData()":Math.round(f-s),"createLinesMesh()":Math.round(d-f),"Total elapsed time":Math.round(d-r)};h.info("createStreamlinesMesh profile",t)}return yield Promise.resolve(),a.throwIfAborted(n),u}))).apply(this,arguments)}function g(t,e){const n=m(e.data,e.width,e.height,t.smoothing);if(t.interpolate){return(t,r)=>{const o=Math.floor(t),i=Math.floor(r);if(o<0||o>=e.width)return[0,0];if(i<0||i>=e.height)return[0,0];const a=t-o,l=r-i,s=o,c=i,h=o<e.width-1?o+1:o,f=i<e.height-1?i+1:i,u=n[2*(c*e.width+s)],d=n[2*(c*e.width+h)],g=n[2*(f*e.width+s)],p=n[2*(f*e.width+h)],w=n[2*(c*e.width+s)+1],m=n[2*(c*e.width+h)+1];return[(u*(1-l)+g*l)*(1-a)+(d*(1-l)+p*l)*a,(w*(1-l)+n[2*(f*e.width+s)+1]*l)*(1-a)+(m*(1-l)+n[2*(f*e.width+h)+1]*l)*a]}}return(t,r)=>{const o=Math.round(t),i=Math.round(r);return o<0||o>=e.width||i<0||i>=e.height?[0,0]:[n[2*(i*e.width+o)+0],n[2*(i*e.width+o)+1]]}}function p(t,e,n,r,o,i,a,l,s){const c=[];let h,f,u=n,d=r,g=0;c.push({x:u,y:d,t:g});for(let p=0;p<t.verticesPerLine;p++){let[n,r]=e(u,d);n*=t.velocityScale,r*=t.velocityScale;const p=Math.sqrt(n*n+r*r);if(p<t.minSpeedThreshold)return c;const w=n/p,m=r/p;u+=w*t.segmentLength,d+=m*t.segmentLength;if(g+=t.segmentLength/p,Math.acos(w*h+m*f)>t.maxTurnAngle)return c;if(t.mergeLines){const t=Math.round(u*s),e=Math.round(d*s);if(t<0||t>a-1||e<0||e>l-1)return c;const n=i[e*a+t];if(-1!==n&&n!==o)return c;i[e*a+t]=o}c.push({x:u,y:d,t:g}),h=w,f=m}return c}function w(t,e,n,r){const o=[],i=new l,a=1/Math.max(t.lineCollisionWidth,1),s=Math.round(n*a),c=Math.round(r*a),h=new Int32Array(s*c);for(let l=0;l<h.length;l++)h[l]=-1;const f=[];for(let l=0;l<r;l+=t.lineSpacing)for(let e=0;e<n;e+=t.lineSpacing)f.push({x:e,y:l,sort:i.getFloat()});f.sort(((t,e)=>t.sort-e.sort));for(const{x:l,y:u}of f)if(i.getFloat()<t.density){const n=p(t,e,l,u,o.length,h,s,c,a);if(n.length<2)continue;o.push(n)}return o}function m(t,e,n,r){if(0===r)return t;const o=Math.round(3*r),i=new Array(2*o+1);let a=0;for(let c=-o;c<=o;c++){const t=Math.exp(-c*c/(r*r));i[c+o]=t,a+=t}for(let c=-o;c<=o;c++)i[c+o]/=a;const l=new Float32Array(t.length);for(let c=0;c<n;c++)for(let n=0;n<e;n++){let r=0,a=0;for(let l=-o;l<=o;l++){if(n+l<0||n+l>=e)continue;const s=i[l+o];r+=s*t[2*(c*e+(n+l))+0],a+=s*t[2*(c*e+(n+l))+1]}l[2*(c*e+n)+0]=r,l[2*(c*e+n)+1]=a}const s=new Float32Array(t.length);for(let c=0;c<e;c++)for(let t=0;t<n;t++){let r=0,a=0;for(let s=-o;s<=o;s++){if(t+s<0||t+s>=n)continue;const h=i[s+o];r+=h*l[2*((t+s)*e+c)+0],a+=h*l[2*((t+s)*e+c)+1]}s[2*(t*e+c)+0]=r,s[2*(t*e+c)+1]=a}return s}function y(t,e){const n=new l,r=t.reduce(((t,e)=>t+e.length),0),o=new Float32Array(3*r),i=new Array(t.length);let a=0,s=0;for(const l of t){const t=a;for(const e of l)o[3*a+0]=e.x,o[3*a+1]=e.y,o[3*a+2]=e.t,a++;i[s++]={startVertex:t,numberOfVertices:l.length,totalTime:l[l.length-1].t,timeSeed:e?n.getFloat():0}}return{lineVertices:o,lineDescriptors:i}}function M(t,e=10){const{lineVertices:n,lineDescriptors:r}=t;let o=0,i=0;for(const f of r){o+=2*f.numberOfVertices;i+=6*(f.numberOfVertices-1)}const a=new Float32Array(o*f),l=new Uint32Array(i);let s=0,c=0;function h(){l[c++]=s-2,l[c++]=s,l[c++]=s-1,l[c++]=s,l[c++]=s+1,l[c++]=s-1}function u(t,e,n,r,o,i,l){const c=s*f;let h=0;a[c+h++]=t,a[c+h++]=e,a[c+h++]=1,a[c+h++]=n,a[c+h++]=i,a[c+h++]=l,a[c+h++]=r,a[c+h++]=o,s++,a[c+h++]=t,a[c+h++]=e,a[c+h++]=-1,a[c+h++]=n,a[c+h++]=i,a[c+h++]=l,a[c+h++]=-r,a[c+h++]=-o,s++}for(const f of r){const{totalTime:t,timeSeed:r}=f;let o=null,i=null,a=null,l=null,s=null;for(let c=0;c<f.numberOfVertices;c++){const d=n[3*(f.startVertex+c)+0],g=n[3*(f.startVertex+c)+1],p=n[3*(f.startVertex+c)+2];let w=null,m=null,y=null,M=null;if(c>0){w=d-o,m=g-i;const n=Math.sqrt(w*w+m*m);if(w/=n,m/=n,c>1){let t=w+l,n=m+s;const r=Math.sqrt(t*t+n*n);t/=r,n/=r;const o=Math.min(1/(t*w+n*m),e);t*=o,n*=o,y=-n,M=t}else y=-m,M=w;null!==y&&null!==M&&(u(o,i,a,y,M,t,r),h())}o=d,i=g,a=p,l=w,s=m}u(o,i,a,-s,l,t,r)}return{vertexData:a,indexData:l}}function x(t,e){const n=e.pixels,{width:r,height:i}=e,a=new Float32Array(r*i*2);if("vector-uv"===t)for(let o=0;o<r*i;o++)a[2*o+0]=n[0][o],a[2*o+1]=-n[1][o];else if("vector-magdir"===t)for(let l=0;l<r*i;l++){const t=n[0][l],e=o.deg2rad(n[1][l]),r=Math.cos(e-Math.PI/2),i=Math.sin(e-Math.PI/2);a[2*l+0]=r*t,a[2*l+1]=i*t}return{data:a,width:r,height:i}}function A(t,e,n,r,o){return F.apply(this,arguments)}function F(){return(F=e._asyncToGenerator((function*(t,e,n,r,o){const i=s.getInfo(e.spatialReference);if(!i)return L(t,e,n,r,o);const[a,l]=i.valid,h=l-a,f=Math.ceil(e.width/h),u=e.width/f,d=Math.round(n/f);let g=e.xmin;const p=[];for(let s=0;s<f;s++){const n=new c({xmin:g,xmax:g+u,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference});p.push(L(t,n,d,r,o)),g+=u}const w=yield Promise.all(p),m={data:new Float32Array(n*r*2),width:n,height:r};let y=0;for(const s of w){for(let t=0;t<s.height;t++)for(let e=0;e<s.width;e++)y+e>=n||(m.data[2*(t*n+y+e)+0]=s.data[2*(t*s.width+e)+0],m.data[2*(t*n+y+e)+1]=s.data[2*(t*s.width+e)+1]);y+=s.width}return m}))).apply(this,arguments)}function L(t,e,n,r,o){return v.apply(this,arguments)}function v(){return(v=e._asyncToGenerator((function*(t,e,n,r,o){if("imagery"===t.type){yield t.load({signal:o});const a=t.rasterInfo.dataType,l=yield t.fetchImage(e,n,r,{signal:o});return!l||i.isNone(l.pixelData)||i.isNone(l.pixelData.pixelBlock)?{data:new Float32Array(n*r*2),width:n,height:r}:x(a,l.pixelData.pixelBlock)}yield t.load({signal:o});const a=t.rasterInfo.dataType,l=yield t.fetchPixels(e,n,r,{signal:o});return!l||i.isNone(l.pixelBlock)?{data:new Float32Array(n*r*2),width:n,height:r}:x(a,l.pixelBlock)}))).apply(this,arguments)}t.createAnimatedLinesData=y,t.createLinesMesh=M,t.createStreamlinesMesh=u,t.fetchPart=L,t.loadImagery=A,Object.defineProperty(t,"__esModule",{value:!0})}));
