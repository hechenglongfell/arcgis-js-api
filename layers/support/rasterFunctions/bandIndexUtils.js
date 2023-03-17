/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/jsonMap","../../../core/maybe","../PixelBlock","./customBandIndexUtils","./pixelUtils"],(function(n,e,t,r,a,o){"use strict";const i=new e.JSONMap({0:"custom",1:"ndvi",2:"savi",3:"tsavi",4:"msavi",5:"gemi",6:"pvi",7:"gvitm",8:"sultan",9:"vari",10:"gndvi",11:"sr",12:"ndvi-re",13:"sr-re",14:"mtvi2",15:"rtvi-core",16:"ci-re",17:"ci-g",18:"ndwi",19:"evi",20:"iron-oxide",21:"ferrous-minerals",22:"clay-minerals",23:"wndwi",24:"bai",25:"nbr",26:"ndbi",27:"ndmi",28:"ndsi",29:"mndwi"},{useNumericKeys:!0});function l(n,e){if(!o.isValidPixelBlock(n))return n;const{equation:i,method:l}=e,s=e.bandIndexes.map((n=>n-1)),{pixels:c,mask:S}=n;let B;switch(l){case"gndvi":case"nbr":case"ndbi":case"ndvi":case"ndvi-re":case"ndsi":case"ndmi":case"mndwi":B=u(S,c[s[0]],c[s[1]]);break;case"ndwi":B=u(S,c[s[1]],c[s[0]]);break;case"sr":case"sr-re":case"iron-oxide":case"ferrous-minerals":case"clay-minerals":B=f(S,c[s[0]],c[s[1]]);break;case"ci-g":case"ci-re":B=d(S,c[s[0]],c[s[1]]);break;case"savi":B=w(S,c[s[0]],c[s[1]],s[2]+1);break;case"tsavi":B=h(S,c[s[0]],c[s[1]],s[2]+1,s[3]+1,s[4]+1);break;case"msavi":B=g(S,c[s[0]],c[s[1]]);break;case"gemi":B=m(S,c[s[0]],c[s[1]]);break;case"pvi":B=y(S,c[s[0]],c[s[1]],s[2]+1,s[3]+1);break;case"gvitm":B=b(S,[c[s[0]],c[s[1]],c[s[2]],c[s[3]],c[s[4]],c[s[5]]]);break;case"sultan":B=v(S,[c[s[0]],c[s[1]],c[s[2]],c[s[3]],c[s[4]],c[s[5]]]);break;case"vari":B=k(S,[c[s[0]],c[s[1]],c[s[2]]]);break;case"mtvi2":B=A(S,[c[s[0]],c[s[1]],c[s[2]]]);break;case"rtvi-core":B=F(S,[c[s[0]],c[s[1]],c[s[2]]]);break;case"evi":B=p(S,[c[s[0]],c[s[1]],c[s[2]]]);break;case"wndwi":B=x(S,[c[s[0]],c[s[1]],c[s[2]]],s[3]?s[3]+1:.5);break;case"bai":B=M(S,c[s[0]],c[s[1]]);break;case"custom":B=a.calculateCustomBandIndex(S,c,i);break;default:return n}const I=t.isSome(S)?new Uint8Array(S.length):null;t.isSome(S)&&t.isSome(I)&&I.set(S);const q=new r({width:n.width,height:n.height,pixelType:"f32",pixels:B,mask:I});return q.updateStatistics(),q}function s(n,e,t,a){const{mask:o,pixels:i,width:l,height:s}=n,c=i[t],u=i[e],f=u.length,d=a?new Uint8Array(f):new Float32Array(f),w=a?100:1,h=a?100.5:0;for(let r=0;r<f;r++)if(null==o||o[r]){const n=c[r],e=u[r],t=n+e;t&&(d[r]=(n-e)/t*w+h)}const g=new r({width:l,height:s,mask:o,pixelType:a?"u8":"f32",pixels:[d]});return g.updateStatistics(),g}function c(n){const e=new Float32Array(9);return e[3*n[0]]=1,e[3*n[1]+1]=1,e[3*n[2]+2]=1,e}function u(n,e,t){const r=t.length,a=new Float32Array(r);for(let o=0;o<r;o++)if(null==n||n[o]){const n=e[o],r=t[o],i=n+r;i&&(a[o]=(n-r)/i)}return[a]}function f(n,e,t){const r=t.length,a=new Float32Array(r);for(let o=0;o<r;o++)if(null==n||n[o]){const n=e[o],r=t[o];r&&(a[o]=n/r)}return[a]}function d(n,e,t){const r=e.length,a=new Float32Array(r);for(let o=0;o<r;o++)if(null==n||n[o]){const n=e[o],r=t[o];r&&(a[o]=n/r-1)}return[a]}function w(n,e,t,r){const a=t.length,o=new Float32Array(a);for(let i=0;i<a;i++)if(null==n||n[i]){const n=t[i],a=e[i],l=a+n+r;l&&(o[i]=(a-n)/l*(1+r))}return[o]}function h(n,e,t,r,a,o){const i=t.length,l=new Float32Array(i),s=-a*r+o*(1+r*r);for(let c=0;c<i;c++)if(null==n||n[c]){const n=t[c],o=e[c],i=a*o+n+s;i&&(l[c]=r*(o-r*n-a)/i)}return[l]}function g(n,e,t){const r=t.length,a=new Float32Array(r);for(let o=0;o<r;o++)if(null==n||n[o]){const n=t[o],r=e[o];a[o]=.5*(2*(r+1)-Math.sqrt((2*r+1)**2-8*(r-n)))}return[a]}function m(n,e,t){const r=t.length,a=new Float32Array(r);for(let o=0;o<r;o++)if(null==n||n[o]){const n=t[o],r=e[o];if(1!==n){const e=(2*(r*r-n*n)+1.5*r+.5*n)/(r+n+.5);a[o]=e*(1-.25*e)-(n-.125)/(1-n)}}return[a]}function y(n,e,t,r,a){const o=t.length,i=new Float32Array(o),l=Math.sqrt(1+r*r);for(let s=0;s<o;s++)if(null==n||n[s]){const n=t[s],o=e[s];i[s]=(o-r*n-a)/l}return[i]}function b(n,e){const[t,r,a,o,i,l]=e,s=t.length,c=new Float32Array(s);for(let u=0;u<s;u++)(null==n||n[u])&&(c[u]=-.2848*t[u]-.2435*r[u]-.5436*a[u]+.7243*o[u]+.084*i[u]-1.18*l[u]);return[c]}function v(n,e){const[t,,r,a,o,i]=e,l=t.length,s=new Float32Array(l),c=new Float32Array(l),u=new Float32Array(l);for(let f=0;f<l;f++)(null==n||n[f])&&(s[f]=i[f]?o[f]/i[f]*100:0,c[f]=t[f]?o[f]/t[f]*100:0,u[f]=a[f]?r[f]/a[f]*(o[f]/a[f])*100:0);return[s,c,u]}function k(n,e){const[t,r,a]=e,o=t.length,i=new Float32Array(o);for(let l=0;l<o;l++)if(null==n||n[l])for(l=0;l<o;l++){const n=t[l],e=r[l],o=e+n-a[l];o&&(i[l]=(e-n)/o)}return[i]}function A(n,e){const[t,r,a]=e,o=t.length,i=new Float32Array(o);for(let l=0;l<o;l++)if(null==n||n[l])for(l=0;l<o;l++){const n=t[l],e=r[l],o=a[l],s=Math.sqrt((2*n+1)**2-6*n-5*Math.sqrt(e)-.5);i[l]=1.5*(1.2*(n-o)-2.5*(e-o))*s}return[i]}function F(n,e){const[t,r,a]=e,o=t.length,i=new Float32Array(o);for(let l=0;l<o;l++)if(null==n||n[l])for(l=0;l<o;l++){const n=t[l],e=r[l],o=a[l];i[l]=100*(n-e)-10*(n-o)}return[i]}function p(n,e){const[t,r,a]=e,o=t.length,i=new Float32Array(o);for(let l=0;l<o;l++)if(null==n||n[l])for(l=0;l<o;l++){const n=t[l],e=r[l],o=n+6*e-7.5*a[l]+1;o&&(i[l]=2.5*(n-e)/o)}return[i]}function x(n,e,t=.5){const[r,a,o]=e,i=a.length,l=new Float32Array(i);for(let s=0;s<i;s++)if(null==n||n[s])for(s=0;s<i;s++){const n=r[s],e=a[s],i=o[s],c=n+t*e+(1-t)*i;c&&(l[s]=(n-t*e-(1-t)*i)/c)}return[l]}function M(n,e,t){const r=t.length,a=new Float32Array(r);for(let o=0;o<r;o++)if(null==n||n[o])for(o=0;o<r;o++){const n=(.1-e[o])**2+(.06-t[o])**2;n&&(a[o]=1/n)}return[a]}n.bandIndexMethodMap=i,n.calculateBandIndex=l,n.calculateNDVI=s,n.getBandMatrix3=c,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
