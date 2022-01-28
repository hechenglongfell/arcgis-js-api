/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/promiseUtils"],(function(t,o,r,e){"use strict";let l=function(){function t(t){this.schedule=t,this._loadStatus=0,this.logger=null}var l=t.prototype;return l.destroy=function(){this.abortLoad()},l.load=function(t,o){return 1===this._loadStatus?(t&&t(),r.unwrap(this._loader)):2===this._loadStatus?(o&&o(this._loadError),r.unwrap(this._loader)):(r.isNone(this._loader)&&(this._abortController=new AbortController,this._loader=this.doLoad(this._abortController.signal).then((()=>{this._abortController=null,this._loadStatus=1}),(t=>{throw this._loadError=t,this._abortController=null,this._loadStatus=2,!e.isAbortError(t)&&this.logger&&t.message&&this.logger.warn(t.message),t}))),this._loader.then(t,o).catch((()=>{})),this._loader)},l.abortLoad=function(){r.isSome(this._abortController)?this._abortController=r.abortMaybe(this._abortController):0===this._loadStatus&&(this._loadStatus=2),this._loader=null},o._createClass(t,[{key:"loadStatus",get:function(){return this._loadStatus}}]),t}();t.Loadable=l,Object.defineProperty(t,"__esModule",{value:!0})}));
