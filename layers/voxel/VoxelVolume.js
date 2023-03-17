/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../chunks/vec3","../../chunks/vec3f64","../../geometry/Point","../../geometry/SpatialReference","../../geometry/support/spatialReferenceUtils","./VoxelDimension"],(function(e,i,s,r,t,n,o,a,l,p,u,c,y,d){"use strict";const h="esri.layers.voxel.VoxelVolume",g=r.getLogger(h);let m=function(i){function s(e){var s;return(s=i.call(this,e)||this).id=0,s.dimensions=null,s.spatialReference=c.WGS84,s}e._inheritsLoose(s,i);var r=s.prototype;return r.computeVoxelSpaceLocation=function(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return g.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!y.equals(this.spatialReference,e.spatialReference))return g.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=p.fromValues(e.x,e.y,e.z??0);l.subtract(i,i,this.originInLayerSpace3D),l.divide(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=e.z??0,t=s.irregularSpacing.values,n=s.isPositiveUp?1:-1,o=t.reduce(((e,i)=>Math.abs(n*i-r)<Math.abs(n*e-r)?i:e));for(let e=0;e<t.length;++e)if(t[e]===o){i[2]=e;break}}return[i[0],i[1],i[2]]},r.computeLayerSpaceLocation=function(e){if(!this.isValid)return new u({x:0,y:0,spatialReference:this.spatialReference});const i=p.fromArray(e);if(l.multiply(i,i,this.voxelSizeInLayerSpaceSigned),l.add(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new u({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new u({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})},e._createClass(s,[{key:"zDimension",get:function(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}},{key:"isValid",get:function(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}},{key:"originInLayerSpace3D",get:function(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}},{key:"voxelSizeInLayerSpaceSigned",get:function(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)t[n]<2?t[n]=1:t[n]-=1;return s.isRegular&&!s.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(i[1]-i[0])/t[1],(r[1]-r[0])/t[2]]}},{key:"volumeType",get:function(){if(this.isValid){const e=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}},{key:"sizeInVoxels",get:function(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}}]),s}(s.JSONSupport);i.__decorate([t.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),i.__decorate([t.property({type:[d],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"dimensions",void 0),i.__decorate([t.property({type:c,json:{read:{enabled:!1}}})],m.prototype,"spatialReference",void 0),i.__decorate([t.property({type:Number,json:{read:!1}})],m.prototype,"zDimension",null),i.__decorate([t.property({type:[Boolean],json:{read:!1}})],m.prototype,"isValid",null),i.__decorate([t.property({type:[Number],json:{read:!1}})],m.prototype,"originInLayerSpace3D",null),i.__decorate([t.property({type:[Number],json:{read:!1}})],m.prototype,"voxelSizeInLayerSpaceSigned",null),i.__decorate([t.property({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],m.prototype,"volumeType",null),i.__decorate([t.property({type:[Number],json:{read:!1}})],m.prototype,"sizeInVoxels",null),m=i.__decorate([a.subclass(h)],m);return m}));
