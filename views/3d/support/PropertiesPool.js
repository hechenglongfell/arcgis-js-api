/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/ReentrantObjectPool","../../../core/accessorSupport/watch"],(function(e,t,o){"use strict";let r=function(){function e(e,r){this.owner=r,this.properties={},this.afterDispatchHandle=null;for(const o in e){const r=e[o],s=new t.ReentrantObjectPool(r,null,null,2,2);this.properties[o]={pool:s,acquired:[]}}this.afterDispatchHandle=o.afterDispatch((()=>this.release()))}var r=e.prototype;return r.destroy=function(){this.afterDispatchHandle&&(this.afterDispatchHandle.remove(),this.afterDispatchHandle=null);for(const e in this.properties){const t=this.properties[e];for(const e of t.acquired)o.isValueInUse(e)||t.pool.release(e);t.pool.destroy(),t.pool=null,t.acquired=null}this.properties=null,this.owner=null},r.get=function(e){const t=this.owner._get(e),o=this.properties[e];let r=o.pool.acquire();for(o.acquired.push(r);r===t;)o.acquired.push(r),r=o.pool.acquire();return r},r.release=function(){for(const e in this.properties){const t=this.properties[e];let r=0;for(const e of t.acquired)o.isValueInUse(e)?t.acquired[r++]=e:t.pool.release(e);t.acquired.length=r}},e}();e.PropertiesPool=r,e.default=r,Object.defineProperty(e,"__esModule",{value:!0})}));
