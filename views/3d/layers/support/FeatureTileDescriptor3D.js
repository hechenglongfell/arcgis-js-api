/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/support/aaBoundingRect"],(function(e,i){"use strict";let t=function(){function e(e,t,s,n=null){this.lij=[0,0,0],this.extent=i.create(),this.resolution=0,this.loadPriority=0,this.measures={visibility:2,screenRect:i.create(),distance:0,shouldSplit:!1},this.used=!1,n&&this.acquire(e,t,s,n)}var t=e.prototype;return t.acquire=function(i,t,s,n){this.tilingScheme=n,this.id=e.id(i,t,s),this.lij[0]=i,this.lij[1]=t,this.lij[2]=s,n.getExtent(i,t,s,this.extent),this.resolution=n.resolutionAtLevel(i)},t.release=function(){this.tilingScheme=null},t.getChildren=function(i){const t=this.lij[0]+1,s=2*this.lij[1],n=2*this.lij[2];return i?(i[0].acquire(t,s,n,this.tilingScheme),i[1].acquire(t,s+1,n,this.tilingScheme),i[2].acquire(t,s,n+1,this.tilingScheme),i[3].acquire(t,s+1,n+1,this.tilingScheme),i):[new e(t,s,n,this.tilingScheme),new e(t,s+1,n,this.tilingScheme),new e(t,s,n+1,this.tilingScheme),new e(t,s+1,n+1,this.tilingScheme)]},t.copyMeasurementsFrom=function(e){this.measures.visibility=e.measures.visibility,this.measures.shouldSplit=e.measures.shouldSplit,this.measures.distance=e.measures.distance,i.copy(e.measures.screenRect,this.measures.screenRect)},e.id=function(e,i,t){return`${e}/${i}/${t}`},e}();e.FeatureTileDescriptor3D=t,e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
