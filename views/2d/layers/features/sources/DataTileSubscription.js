/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/CircularArray","../../../../../core/has","../../../../../core/maybe","../support/FeatureSetReaderJSON","../support/UpdateToken"],(function(e,t,s,i,n,o,d){"use strict";let r=function(){function e(e,t){this.requests={done:new Array,stream:new s(10)},this._edits=null,this._abortController=new AbortController,this._version=0,this._done=!1,this.didSend=!1,this.tile=e,this._version=t}var r=e.prototype;return r.end=function(){this._done=!0},r.clear=function(){this.requests.done=[]},r.applyUpdate=function(e){this.requests.done.forEach((t=>t.message.status.unset(e))),this._version=e.version,n.isSome(this._edits)&&this._edits.status.unset(e)},r.add=function(e){e.message.status=e.message.status??d.UpdateToken.empty(),e.message.status.version=this._version,i("esri-2d-update-debug")&&console.debug(this.tile.id,"DataTileSubscription:add",this._version),e.message.end&&this.requests.done.forEach((e=>{n.isSome(e.message)&&e.message.end&&(e.message.end=!1)})),this.requests.done.push(e)},r.edit=function(e,t){const s=e.getQuantizationTransform(),i=e.fullSchema(),r=Array.from(e.features()).filter(n.isSome),a=[...t,...r.map((e=>e.objectId))];if(this.removeIds(a),this._invalidate(),n.isNone(this._edits))return void(this._edits={type:"append",addOrUpdate:o.FeatureSetReaderJSON.fromOptimizedFeatures(r,i,n.unwrap(s)),id:this.tile.id,status:d.UpdateToken.empty(),end:!0});this.requests.done.forEach((e=>e.message.end=!1));n.unwrap(this._edits.addOrUpdate).append(e.features())},r.readers=function*(){for(const{message:e}of this.requests.done)n.isSome(e.addOrUpdate)&&(yield e.addOrUpdate);n.isSome(this._edits)&&n.isSome(this._edits.addOrUpdate)&&(yield this._edits.addOrUpdate)},r._invalidate=function(){for(const e of this.requests.done)e.message.status=d.UpdateToken.empty();n.isSome(this._edits)&&(this._edits.status=d.UpdateToken.empty())},r.removeIds=function(e){this._invalidate();for(const{message:t}of this.requests.done){const s=t.addOrUpdate;n.isSome(s)&&(s.removeIds(e),s.isEmpty&&(i("esri-2d-update-debug")&&console.debug("Removing FeatureSetReader"),t.addOrUpdate=null))}n.isSome(this._edits)&&n.isSome(this._edits.addOrUpdate)&&this._edits.addOrUpdate.removeIds(e),this.requests.done=this.requests.done.filter((e=>e.message.addOrUpdate||e.message.end))},r.abort=function(){this._abortController.abort()},t._createClass(e,[{key:"signal",get:function(){return this._abortController.signal}},{key:"options",get:function(){return{signal:this._abortController.signal}}},{key:"empty",get:function(){return!this.requests.done.length&&n.isNone(this.edits)}},{key:"edits",get:function(){return this._edits}},{key:"done",get:function(){return this._done}}]),e}();e.DataTileSubscription=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
