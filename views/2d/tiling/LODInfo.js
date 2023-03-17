/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../core/maybe","../../../geometry/support/spatialReferenceUtils","./TileKey"],(function(t,o,r){"use strict";function i(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}function e(t,o,r,i,n){return t[0]=o,t[1]=r,t[2]=i,t[3]=n,t}const s=new r("0/0/0/0");return function(){function r(t,o,r,i,n,e,s,l,u,h,a,c){this.level=t,this.resolution=o,this.scale=r,this.origin=i,this.first=n,this.last=e,this.size=s,this.norm=l,this.worldStart=u,this.worldEnd=h,this.worldSize=a,this.wrap=c}r.create=function(e,s,l=null){const u=o.getInfo(e.spatialReference),h=s.origin||i(e.origin.x,e.origin.y),a=i(e.size[0]*s.resolution,e.size[1]*s.resolution),c=i(-1/0,-1/0),f=i(1/0,1/0),m=i(1/0,1/0);t.isSome(l)&&(n(c,Math.max(0,Math.floor((l.xmin-h[0])/a[0])),Math.max(0,Math.floor((h[1]-l.ymax)/a[1]))),n(f,Math.max(0,Math.floor((l.xmax-h[0])/a[0])),Math.max(0,Math.floor((h[1]-l.ymin)/a[1]))),n(m,f[0]-c[0]+1,f[1]-c[1]+1));const{cols:g,rows:w}=s;let d,F,z,C;return!l&&g&&w&&(n(c,g[0],w[0]),n(f,g[1],w[1]),n(m,g[1]-g[0]+1,w[1]-w[0]+1)),e.isWrappable?(d=i(Math.ceil(Math.round((u.valid[1]-u.valid[0])/s.resolution)/e.size[0]),m[1]),F=i(Math.floor((u.origin[0]-h[0])/a[0]),c[1]),z=i(d[0]+F[0]-1,f[1]),C=!0):(F=c,z=f,d=m,C=!1),new r(s.level,s.resolution,s.scale,h,c,f,m,a,F,z,d,C)};var l=r.prototype;return l.normalizeCol=function(t){if(!this.wrap)return t;const o=this.worldSize[0];return t<0?o-1-Math.abs((t+1)%o):t%o},l.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},l.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},l.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},l.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},l.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},l.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},l.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},l.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},l.getTileBounds=function(t,o,r=!1){s.set(o);const i=r?s.col:this.denormalizeCol(s.col,s.world),n=s.row;return e(t,this.getXForColumn(i),this.getYForRow(n+1),this.getXForColumn(i+1),this.getYForRow(n)),t},l.getTileCoords=function(t,o,r=!1){s.set(o);const i=r?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(t)?n(t,this.getXForColumn(i),this.getYForRow(s.row)):(t.x=this.getXForColumn(i),t.y=this.getYForRow(s.row)),t},r}()}));
