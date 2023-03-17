/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../config","./has","./maybe","./string"],(function(e,t,n,r,o){"use strict";const i={info:0,warn:1,error:2,none:3};let s=function(){function n(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,n._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=n.getLogger(this.module.slice(0,t)))}var s=n.prototype;return s.error=function(...e){this._log("error","always",...e)},s.warn=function(...e){this._log("warn","always",...e)},s.info=function(...e){this._log("info","always",...e)},s.errorOnce=function(...e){this._log("error","once",...e)},s.warnOnce=function(...e){this._log("warn","once",...e)},s.infoOnce=function(...e){this._log("info","once",...e)},s.errorOncePerTick=function(...e){this._log("error","oncePerTick",...e)},s.warnOncePerTick=function(...e){this._log("warn","oncePerTick",...e)},s.infoOncePerTick=function(...e){this._log("info","oncePerTick",...e)},n.getLogger=function(e){let t=n._loggers[e];return t||(t=new n({module:e})),t},s._log=function(e,r,...o){if(!this._matchLevel(e))return;if("always"!==r&&!n._throttlingDisabled){const t=this._argsToKey(o),i=this._loggedMessages[e].get(t);if("once"===r&&null!=i||"oncePerTick"===r&&i&&i>=n._tickCounter)return;this._loggedMessages[e].set(t,n._tickCounter),n._scheduleTickCounterIncrement()}for(const n of t.log.interceptors)if(n(e,this.module,...o))return;this._inheritedWriter()(e,this.module,...o)},s._parentWithMember=function(e,t){let n=this;for(;r.isSome(n);){const t=n[e];if(r.isSome(t))return t;n=n.parent}return t},s._inheritedWriter=function(){return this._parentWithMember("writer",this._consoleWriter)},s._consoleWriter=function(e,t,...n){console[e](`[${t}]`,...n)},s._matchLevel=function(e){const n=t.log.level?t.log.level:"warn";return i[this._parentWithMember("level",n)]<=i[e]},s._argsToKey=function(...e){const t=(e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]";return o.numericHash(JSON.stringify(e,t))},n._scheduleTickCounterIncrement=function(){n._tickCounterScheduled||(n._tickCounterScheduled=!0,Promise.resolve().then((()=>{n._tickCounter++,n._tickCounterScheduled=!1})))},e._createClass(n,[{key:"module",get:function(){return this._module}},{key:"parent",get:function(){return this._parent}},{key:"test",get:function(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}}],[{key:"testSingleton",get:function(){return{resetLoggers(e={}){const t=n._loggers;return n._loggers=e,t},set throttlingDisabled(e){n._throttlingDisabled=e}}}}]),n}();return s._loggers={},s._tickCounter=0,s._tickCounterScheduled=!1,s._throttlingDisabled=!1,s}));
