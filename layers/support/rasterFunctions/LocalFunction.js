/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../rasterFunctionConstants","../rasterFormats/pixelRangeUtils","./BaseRasterFunction","./LocalFunctionArguments","./localUtils"],(function(t,e,s,o,n,r,u,i,a,c,p,l){"use strict";let m=function(e){function o(){var t;return(t=e.apply(this,arguments)||this).functionName="Local",t.functionArguments=null,t.rasterArgumentNames=["rasters"],t}t._inheritsLoose(o,e);var n=o.prototype;return n._bindSourceRasters=function(){const{sourceRasterInfos:t}=this,e=t[0],{bandCount:s}=e,{processAsMultiband:o}=this.functionArguments;if(t.some((t=>t.bandCount!==s)))return{success:!1,supportsGPU:!1,error:"local-function: input rasters do not have same band count"};const{operation:n,rasters:r}=this.functionArguments,u=l.operandsCount[n];if(!(999===u||r.length===u||r.length<=1&&1===u))return{success:!1,supportsGPU:!1,error:`local-function: the length of functionArguments.rasters does not match operation's requirement: ${u}`};this.outputPixelType=this._getOutputPixelType("f32");const i=e.clone();i.pixelType=this.outputPixelType,i.statistics=null,i.histograms=null,i.colormap=null,i.attributeTable=null,i.bandCount=999!==u||o?s:1;const a=l.getOutputDomain(n);if(a){i.statistics=[];for(let t=0;t<i.bandCount;t++)i.statistics[t]={min:a[0],max:a[1],avg:(a[0]+a[1])/2,stddev:(a[0]+a[1])/10}}this.rasterInfo=i;return{success:!0,supportsGPU:1===i.bandCount&&u<=3&&(n<11||n>16)}},n._processPixels=function(t){const{pixelBlocks:e}=t;return s.isNone(e)||e.some((t=>s.isNone(t)))?null:l.local(e,this.functionArguments.operation,{processAsMultiband:this.functionArguments.processAsMultiband,outputPixelType:this.outputPixelType??void 0})},n._getWebGLParameters=function(){const{operation:t}=this.functionArguments,e=l.operandsCount[t],s=Object.keys(i.localOperators).find((e=>i.localOperators[e]===t))?.toLowerCase()??"undefined",o=this.outputPixelType??"f32";let[n,r]=a.getPixelValueRange(o);const u=o.startsWith("u")||o.startsWith("s");return u&&(n-=1e-4,r+=1e-4),{imageCount:e,operationName:s,domainRange:[n,r],isOutputRounded:u}},o}(c);e.__decorate([o.property({json:{write:!0,name:"rasterFunction"}})],m.prototype,"functionName",void 0),e.__decorate([o.property({type:p,json:{write:!0,name:"rasterFunctionArguments"}})],m.prototype,"functionArguments",void 0),e.__decorate([o.property()],m.prototype,"rasterArgumentNames",void 0),m=e.__decorate([u.subclass("esri.layers.support.rasterFunctions.LocalFunction")],m);return m}));
