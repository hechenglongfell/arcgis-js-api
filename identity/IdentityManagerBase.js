/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../config","../kernel","../request","../core/Error","../core/Evented","../core/events","../core/global","../core/lang","../core/object","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/subclass","./IdentityForm","./IdentityModal","./OAuthCredential","./OAuthInfo","./ServerInfo"],(function(e,t,r,s,i,n,o,a,l,h,c,u,d,p,_,f,g,v,m,S,I,w,y,k){"use strict";const A={},U=e=>{const t=new p.Url(e.owningSystemUrl).host,r=new p.Url(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},T=(e,t)=>!!(U(e)&&t&&t.some((t=>t.test(e.server))));let O=null,x=null;try{O=window.localStorage,x=window.sessionStorage}catch{}let C=function(r){function i(){var e;return(e=r.call(this)||this)._portalConfig=h.esriGeowConfig,e.serverInfos=[],e.oAuthInfos=[],e.credentials=[],e._soReqs=[],e._xoReqs=[],e._portals=[],e.defaultOAuthInfo=null,e.defaultTokenValidity=60,e.dialog=null,e.formConstructor=S,e.tokenValidity=null,e.normalizeWebTierAuth=!1,e._appOrigin="null"!==window.origin?window.origin:window.location.origin,e._appUrlObj=p.urlToObject(window.location.href),e._busy=null,e._rejectOnPersistedPageShow=!1,e._oAuthHash=null,e._gwTokenUrl="/sharing/rest/generateToken",e._agsRest="/rest/services",e._agsPortal=/\/sharing(\/|$)/i,e._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,e._adminSvcs=/\/rest\/admin\/services(\/|$)/i,e._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],e._legacyFed=[],e._regexSDirUrl=/http.+\/rest\/services\/?/gi,e._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,e._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,e._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,e._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,e._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,e._createDefaultOAuthInfo=!0,e._hasTestedIfAppIsOnPortal=!1,e._getOAuthHash(),window.addEventListener("pageshow",(t=>{e._pageShowHandler(t)})),e}t._inheritsLoose(i,r);var a=i.prototype;return a.registerServers=function(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))},a.registerOAuthInfos=function(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e},a.registerToken=function(t){t={...t};const r=this._sanitizeUrl(t.server),s=this._isServerRsrc(r);let i,n=this.findServerInfo(r),o=!0;n||(n=new k,n.server=this._getServerInstanceRoot(r),s?n.hasServer=!0:(n.tokenServiceUrl=this._getTokenSvcUrl(r),n.hasPortal=!0),this.registerServers([n])),i=this._findCredential(r),i?(delete t.server,Object.assign(i,t),o=!1):(i=new e.Credential({userId:t.userId,server:n.server,token:t.token,expires:t.expires,ssl:t.ssl,scope:s?"server":"portal"}),i.resources=[r],this.credentials.push(i)),i.emitTokenChange(!1),o||i.refreshServerTokens()},a.toJSON=function(){return c.fixJson({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})},a.initialize=function(t){if(!t)return;"string"==typeof t&&(t=JSON.parse(t));const r=t.serverInfos,s=t.oAuthInfos,i=t.credentials;if(r){const e=[];r.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new k(t))})),e.length&&this.registerServers(e)}if(s){const e=[];s.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new y(t))})),e.length&&this.registerOAuthInfos(e)}i&&i.forEach((t=>{t.server&&t.token&&t.expires&&t.expires>Date.now()&&((t=t.declaredClass?t:new e.Credential(t)).emitTokenChange(),this.credentials.push(t))}))},a.findServerInfo=function(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t},a.findOAuthInfo=function(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t},a.findCredential=function(e,t){let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r},a.getCredential=function(e,t){let r,s,i=!0;t&&(r=!!t.token,s=t.error,i=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const n=d.createAbortController(),a=d.createResolver();if(t.signal&&d.onAbort(t.signal,(()=>{n.abort()})),d.onAbort(n,(()=>{a.reject(new o("identity-manager:user-aborted","ABORTED"))})),d.isAborted(n))return a.promise;t.signal=n.signal;const l=this._isAdminResource(e),h=r?this.findCredential(e):null;let c;if(h&&s&&s.details&&498===s.details.httpStatus)h.destroy();else if(h)return c=new o("identity-manager:not-authorized","You are currently signed in as: '"+h.userId+"'. You do not have access to this resource: "+e,{error:s}),a.reject(c),a.promise;const u=this._findCredential(e,t);if(u)return a.resolve(u),a.promise;let _=this.findServerInfo(e);if(_)!_.hasServer&&this._isServerRsrc(e)&&(_._restInfoPms=this._getTokenSvcUrl(e),_.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return c=new o("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(c),a.promise;_=new k,_.server=this._getServerInstanceRoot(e),"string"==typeof t?(_.tokenServiceUrl=t,_.hasPortal=!0):(_._restInfoPms=t,_.hasServer=!0),this.registerServers([_])}return _.hasPortal&&void 0===_._selfReq&&(i||p.hasSameOrigin(_.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===_.tokenServiceUrl)))&&(_._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(_.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,_,t,a,l)},a.getResourceName=function(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""},a.generateToken=function(e,t,r){const s=this._rePortalTokenSvc.test(e.tokenServiceUrl),i=new p.Url(this._appOrigin),a=e.shortLivedTokenValidity;let l,h,c,u,d,_,f,g;t&&(g=this.tokenValidity||a||this.defaultTokenValidity,g>a&&a>0&&(g=a)),r&&(l=r.isAdmin,h=r.serverUrl,c=r.token,_=r.signal,f=r.ssl,e.customParameters=r.customParameters),l?u=e.adminTokenServiceUrl:(u=e.tokenServiceUrl,d=new p.Url(u.toLowerCase()),e.webTierAuth&&null!=r&&r.serverUrl&&!f&&"http"===i.scheme&&(p.hasSameOrigin(i.uri,u,!0)||"https"===d.scheme&&i.host===d.host&&"7080"===i.port&&"7443"===d.port)&&(u=u.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:h,token:c,expiration:g,referer:l||s?this._appOrigin:null,client:l?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:_,...null==r?void 0:r.ioArgs};s||(v.withCredentials=!1);return n(u,v).then((r=>{const s=r.data;if(!s||!s.token)return new o("identity-manager:authentication-failed","Unable to generate token");const i=e.server;return A[i]||(A[i]={}),t&&(A[i][t.username]=t.password),s.validity=g,s}))},a.isBusy=function(){return!!this._busy},a.checkSignInStatus=function(e){return this.checkAppAccess(e,"").then((e=>e.credential))},a.checkAppAccess=function(e,t,r){let s=!1;return this.getCredential(e,{prompt:!1}).then((i=>{let a;const l={f:"json"};if("portal"===i.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))a=i.server+"/sharing/rest/oauth2/validateAppAccess",l.client_id=t;else{if(!i.token)return{credential:i};a=i.server+"/sharing/rest"}else{if(!i.token)return{credential:i};a=i.server+"/rest/services"}return i.token&&(l.token=i.token),n(a,{query:l,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new o("identity-manager:not-authorized",`You are currently signed in as: '${i.userId}'.`,e.data);return s=!!e.data.viewOnlyUserTypeApp,{credential:i}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw i.destroy(),new o("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new o("identity-manager:invalid-request");return{credential:i}}))})).then((e=>({credential:e.credential,viewOnly:s})))},a.setOAuthResponseHash=function(t){var r;const s=this._oAuthDfd;if(this._oAuthDfd=null,!s||!t)return;clearInterval(this._oAuthIntervalId),null==(r=this._oAuthOnHashHandle)||r.remove(),"#"===t.charAt(0)&&(t=t.substring(1));const i=p.queryToObject(t);if(i.error){const e="access_denied"===i.error,t=new o(e?"identity-manager:user-aborted":"identity-manager:authentication-failed",e?"ABORTED":"OAuth: "+i.error+" - "+i.error_description);s.reject(t)}else{const t=s.sinfo_,r=s.oinfo_,n=r._oAuthCred,o=new e.Credential({userId:i.username,server:t.server,token:i.access_token,expires:Date.now()+1e3*Number(i.expires_in),ssl:"true"===i.ssl,_oAuthCred:n});r.userId=o.userId,n.storage=i.persist?O:x,n.token=o.token,n.expires=o.expires,n.userId=o.userId,n.ssl=o.ssl,n.save(),s.resolve(o)}},a.setOAuthRedirectionHandler=function(e){this._oAuthRedirectFunc=e},a.setProtocolErrorHandler=function(e){this._protocolFunc=e},a.signIn=function(t,r,s={}){const i=d.createResolver(),n=()=>{var e,t,r,s,i;null==(e=h)||e.remove(),null==(t=c)||t.remove(),null==(r=u)||r.remove(),null==(s=l)||s.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=l=h=c=u=null},a=()=>{n(),this._oAuthDfd=null,i.reject(new o("identity-manager:user-aborted","ABORTED"))};s.signal&&d.onAbort(s.signal,(()=>{a()}));let l=new this.formConstructor;l.resource=this.getResourceName(t),l.server=r.server,this.dialog=new I,this.dialog.content=l,this.dialog.open=!0,this.emit("dialog-create");let h=l.on("cancel",a),c=this.dialog.watch("open",a),u=l.on("submit",(t=>{this.generateToken(r,t,{isAdmin:s.isAdmin,signal:s.signal}).then((o=>{n();const a=new e.Credential({userId:t.username,server:r.server,token:o.token,expires:null!=o.expires?Number(o.expires):null,ssl:!!o.ssl,isAdmin:s.isAdmin,validity:o.validity});i.resolve(a)})).catch((e=>{l.error=e,l.signingIn=!1}))}));return i.promise},a.oAuthSignIn=function(e,t,r,s){this._oAuthDfd=d.createResolver();const i=this._oAuthDfd;null!=s&&s.signal&&d.onAbort(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&l()})),i.resUrl_=e,i.sinfo_=t,i.oinfo_=r;const n=!s||!1!==s.oAuthPopupConfirmation;if(!r.popup||!n)return this._doOAuthSignIn(e,t,r),i.promise;const a=new this.formConstructor;a.oAuthPrompt=!0,a.server=t.server,this.dialog=new I,this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");const l=()=>{p(),this._oAuthDfd=null,i.reject(new o("identity-manager:user-aborted","ABORTED"))},h=a.on("cancel",l),c=this.dialog.watch("open",l),u=a.on("submit",(()=>{p(),this._doOAuthSignIn(e,t,r)})),p=()=>{h.remove(),c.remove(),u.remove(),a.destroy(),this.dialog.destroy(),this.dialog=null};return i.promise},a.destroyCredentials=function(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")},a.enablePostMessageAuth=function(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=l.on(window,"message",(t=>{var r;if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(r=t.data)?void 0:r.type)){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))},a.disablePostMessageAuth=function(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)},a._getOAuthHash=function(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=p.queryToObject(e);let r=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),"object"==typeof t.state&&t.state.portalUrl&&(this._oAuthHash=t,r=!0)}catch{}else t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0));r&&(window.location.hash="object"==typeof t.state&&t.state.hash||"")}},a._pageShowHandler=function(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new o("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}},a._findCredential=function(e,t){let r,s,i,n,o=-1;const a=t&&t.token,l=t&&t.resource,h=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===h));if(e=l||e,c.length)if(1===c.length){if(r=c[0],n=this.findServerInfo(r.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,r.userId),o=this._getIdenticalSvcIdx(e,r),!a)return-1===o&&r.resources.push(e),this._addResource(e,i),r;-1!==o&&(r.resources.splice(o,1),this._removeResource(e,i))}else{let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,n=this.findServerInfo(t.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,t.userId),o=r,!0)))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}},a._findOAuthInfo=function(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t},a._addResource=function(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)},a._removeResource=function(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))},a._useProxy=function(e,t){return t&&t.isAdmin&&!p.hasSameOrigin(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!p.hasSameOrigin(e.tokenServiceUrl,this._appOrigin)},a._getOrigin=function(e){const t=new p.Url(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")},a._getServerInstanceRoot=function(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===r&&(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e},a._hasSameServerInstance=function(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))},a._normalizeAGOLorgDomain=function(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e},a._sanitizeUrl=function(e){const t=(s.request.proxyUrl||"").toLowerCase(),r=t?e.toLowerCase().indexOf(t+"?"):-1;return-1!==r&&(e=e.substring(r+t.length+1)),e=p.normalize(e),p.urlToObject(e).path},a._isRESTService=function(e){return e.indexOf(this._agsRest)>-1},a._isAdminResource=function(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)},a._isServerRsrc=function(e){return this._isRESTService(e)||this._isAdminResource(e)},a._isIdenticalService=function(e,t){let r;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replace(e,"$1")===i.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r},a._isPortalDomain=function(e){const t=new p.Url(e.toLowerCase()),r=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(t.uri)));return!i&&r&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),t.uri)),i||s.portalUrl&&(i=p.hasSameOrigin(t,s.portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,t.uri)))),i=i||this._agsPortal.test(t.path),i},a._isIdProvider=function(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,n)=>{-1===r&&i.regex.test(e)&&(r=n),-1===s&&i.regex.test(t)&&(s=n)}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl;s&&U(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i},a._getIdenticalSvcIdx=function(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r},a._getSuffix=function(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")},a._getTokenSvcUrl=function(e){let t,r,s;if(this._isRESTService(e)||this._isAdminResource(e)){const s=this._getServerInstanceRoot(e);return t=s+"/admin/generateToken",r=n(e=s+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(s=e.toLowerCase().indexOf("/sharing"),-1!==s&&(t=e.substring(0,s)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new p.Url(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"},a._exchangeToken=function(e,t,r){return n(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then((e=>e.data.token))},a._getPlatformSelf=function(e,t){return n(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json"},withCredentials:!0}).then((e=>e.data))},a._getPortalSelf=function(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"4.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return n(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))},a._doPortalSignIn=function(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||p.hasSameOrigin(r,e,!0)))},a._checkProtocol=function(e,t,r,s){let i=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&p.getProxyRule(n)&&(i=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!i)){r(new o("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return i},a._enqueue=function(e,t,r,s,i,n){return s||(s=d.createResolver()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise},a._doSignIn=function(t){this._busy=t,this._rejectOnPersistedPageShow=!1;const r=e=>{const r=t.options_&&t.options_.resource,s=t.resUrl_,i=t.refresh_;let n=!1;-1===this.credentials.indexOf(e)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=e.userId,i.token=e.token,i.expires=e.expires,i.validity=e.validity,i.ssl=e.ssl,i.creationTime=e.creationTime,n=!0,e=i):this.credentials.push(e)),e.resources||(e.resources=[]),e.resources.push(r||s),e.scope=this._isServerRsrc(s)?"server":"portal",e.emitTokenChange();const o=this._soReqs,a={};this._soReqs=[],o.forEach((t=>{if(!this._isIdenticalService(s,t.resUrl_)){const r=this._getSuffix(t.resUrl_);a[r]||(a[r]=!0,e.resources.push(t.resUrl_))}})),t.resolve(e),o.forEach((t=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),t.resUrl_)?t.resolve(e):this._soReqs.push(t)})),this._busy=t.resUrl_=t.sinfo_=t.refresh_=null,n||this.emit("credential-create",{credential:e}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=e=>{t.reject(e),this._busy=t.resUrl_=t.sinfo_=t.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},i=(i,n,a,h)=>{var c,u;const _=t.sinfo_,f=!t.options_||!1!==t.options_.prompt,g=_.hasPortal&&this._findOAuthInfo(t.resUrl_);let v,m;if(i)r(new e.Credential({userId:i,server:_.server,token:a||null,expires:null!=h?Number(h):null,ssl:!!n}));else if(window!==window.parent&&null!=(c=this._appUrlObj.query)&&c["arcgis-auth-origin"]&&null!=(u=this._appUrlObj.query)&&u["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),t.resUrl_)){var S;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const i=l.on(window,"message",(t=>{t.source===window.parent&&t.data&&("arcgis:auth:credential"===t.data.type?(i.remove(),r(new e.Credential(t.data.credential))):"arcgis:auth:error"===t.data.type&&(i.remove(),s(o.fromJSON(t.data.error))))}));d.onAbort(null==(S=t.options_)?void 0:S.signal,(()=>{i.remove()}))}else if(g){let i=g._oAuthCred;if(!i){const e=new w(g,O),t=new w(g,x);e.isValid()&&t.isValid()?e.expires>t.expires?(i=e,t.destroy()):(i=t,e.destroy()):i=e.isValid()?e:t,g._oAuthCred=i}if(i.isValid())v=new e.Credential({userId:i.userId,server:_.server,token:i.token,expires:i.expires,ssl:i.ssl,_oAuthCred:i}),g.appId!==i.appId&&this._doPortalSignIn(t.resUrl_)?t._pendingDfd=this._exchangeToken(v.server,g.appId,v.token).then((e=>{v.token=e,i.token=e,i.save(),r(v)})).catch((()=>{r(v)})):r(v);else if(this._oAuthHash&&this._hasSameServerInstance(g.portalUrl,this._oAuthHash.state.portalUrl)){const t=this._oAuthHash;v=new e.Credential({userId:t.username,server:_.server,token:t.access_token,expires:Date.now()+1e3*Number(t.expires_in),ssl:"true"===t.ssl,oAuthState:t.state,_oAuthCred:i}),g.userId=v.userId,i.storage=t.persist?O:x,i.token=v.token,i.expires=v.expires,i.userId=v.userId,i.ssl=v.ssl,i.save(),this._oAuthHash=null,r(v)}else{const i=()=>{f?t._pendingDfd=this.oAuthSignIn(t.resUrl_,_,g,t.options_).then(r,s):(m=new o("identity-manager:not-authenticated","User is not signed in."),s(m))};this._doPortalSignIn(t.resUrl_)?t._pendingDfd=this._getPlatformSelf(_.server,g.appId).then((({portalUrl:t,token:s,username:n})=>{!t||p.hasSameOrigin(t,this._appOrigin,!0)?(v=new e.Credential({server:_.server,userId:n,token:s}),r(v)):i()})).catch(i):i()}}else if(f){if(this._checkProtocol(t.resUrl_,_,s,t.admin_)){let e=t.options_;t.admin_&&(e=e||{},e.isAdmin=!0),t._pendingDfd=this.signIn(t.resUrl_,_,e).then(r,s)}}else m=new o("identity-manager:not-authenticated","User is not signed in."),s(m)},n=()=>{const i=t.sinfo_,n=i.owningSystemUrl,o=t.options_;let a,l,h,c;if(o&&(a=o.token,l=o.error,h=o.prompt),c=this._findCredential(n,{token:a,resource:t.resUrl_}),!c)for(const e of this.credentials)if(this._isIdProvider(n,e.server)){c=e;break}if(c){const n=this.findCredential(t.resUrl_,c.userId);if(n)r(n);else if(T(i,this._legacyFed)){const t=c.toJSON();t.server=i.server,t.resources=null,r(new e.Credential(t))}else{(t._pendingDfd=this.generateToken(this.findServerInfo(c.server),null,{serverUrl:t.resUrl_,token:c.token,signal:t.options_.signal,ssl:c.ssl})).then((s=>{r(new e.Credential({userId:c.userId,server:i.server,token:s.token,expires:null!=s.expires?Number(s.expires):null,ssl:!!s.ssl,isAdmin:t.admin_,validity:s.validity}))}),s)}}else{this._busy=null,a&&(t.options_.token=null);(t._pendingDfd=this.getCredential(n.replace(/\/?$/,"/sharing"),{resource:t.resUrl_,owningTenant:i.owningTenant,signal:t.options_.signal,token:a,error:l,prompt:h})).then((()=>{this._enqueue(t.resUrl_,t.sinfo_,t.options_,t,t.admin_)}),(e=>{s(e)}))}};this._errbackFunc=s;const a=t.sinfo_.owningSystemUrl,h=this._isServerRsrc(t.resUrl_),c=t.sinfo_._restInfoPms;c?c.promise.then((e=>{const r=t.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=u.getDeepValue("authInfo.tokenServicesUrl",e)||u.getDeepValue("authInfo.tokenServiceUrl",e)||u.getDeepValue("tokenServiceUrl",e),r.shortLivedTokenValidity=u.getDeepValue("authInfo.shortLivedTokenValidity",e),r.currentVersion=e.currentVersion,r.owningTenant=e.owningTenant;const t=r.owningSystemUrl=e.owningSystemUrl;t&&this._portals.push(t)}h&&r.owningSystemUrl?n():i()}),(()=>{t.sinfo_._restInfoPms=null;const e=new o("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");s(e)})):h&&a?n():t.sinfo_._selfReq?t.sinfo_._selfReq.selfDfd.then((e=>{const r={};let s,i,n,o;return e&&(s=e.user&&e.user.username,r.username=s,r.allSSL=e.allSSL,i=e.supportsOAuth,n=e.currentVersion,"multitenant"===e.portalMode&&(o=e.customBaseUrl)),t.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(t.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r))):!s&&i&&parseFloat(n)>=4.4&&!this._findOAuthInfo(t.resUrl_)?this._generateOAuthInfo({portalUrl:t.sinfo_.server,customBaseUrl:o,owningTenant:t.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((e=>{t.sinfo_._selfReq=null,e?i(e.username,e.allSSL,e.portalToken,e.tokenExpiration):i()})):i()},a._generateOAuthInfo=function(e){let t,r,s=e.portalUrl;const i=e.customBaseUrl,o=e.owningTenant,a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=n(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new y({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this.defaultOAuthInfo)return s=s.replace(/^http:/i,"https:"),n(s+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:o,client_id:this.defaultOAuthInfo.appId,redirect_uri:p.makeAbsolute(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&i?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+i:t.portalUrl=s,t.popup=window!==window.top||!(p.hasSameOrigin(s,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(s)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))},a._doOAuthSignIn=function(e,t,r){const s={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(s.hash=window.location.hash);const i={client_id:r.appId,response_type:"token",state:JSON.stringify(s),expiration:r.expiration,locale:r.locale,redirect_uri:r.popup?p.makeAbsolute(r.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};r.forceLogin&&(i.force_login=!0),r.forceUserId&&r.userId&&(i.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(i.redirectToUserOrgUrl=!0);const n=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",a=n+"?"+p.objectToQuery(i);if(r.popup){const e=window.open(a,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnHashHandle.remove();const e=this._oAuthDfd;if(e){const t=new o("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnHashHandle=l.on(h,"arcgis:auth:hash",(e=>{this.setOAuthResponseHash(e.detail)}));else{const e=new o("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:i,authorizeUrl:n,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=a},i}(a);C.prototype.declaredClass="esri.identity.IdentityManagerBase",e.Credential=function(e){function r(t){var r;return(r=e.call(this,t)||this)._oAuthCred=null,r.tokenRefreshBuffer=2,t&&t._oAuthCred&&(r._oAuthCred=t._oAuthCred),r}t._inheritsLoose(r,e);var s=r.prototype;return s.initialize=function(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())},s.refreshToken=function(){const e=i.id.findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,s=r&&T(e,i.id._legacyFed),n=e.webTierAuth,o=n&&i.id.normalizeWebTierAuth,a=A[this.server],l=a&&a[this.userId];let h,c=this.resources&&this.resources[0],u=r&&i.id.findServerInfo(t),d={username:this.userId,password:l};if(n&&!o)return;r&&!u&&i.id.serverInfos.some((e=>(i.id._isIdProvider(t,e.server)&&(u=e),!!u)));const p=u&&i.id.findCredential(u.server,this.userId);if(!r||p){if(!s){if(r)h={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(o)d=null,h={ssl:this.ssl};else{if(!l){let t;return c&&(c=i.id._sanitizeUrl(c),this._enqueued=1,t=i.id._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),t}this.isAdmin&&(h={isAdmin:!0})}return i.id.generateToken(r?u:e,r?null:d,h).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}p.refreshToken()}},s.refreshServerTokens=function(){"portal"===this.scope&&i.id.credentials.forEach((e=>{const t=i.id.findServerInfo(e.server),r=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(i.id._hasSameServerInstance(this.server,r)||i.id._isIdProvider(r,this.server))&&(T(t,i.id._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())}))},s.emitTokenChange=function(e){clearTimeout(this._refreshTimer);const t=this.server&&i.id.findServerInfo(this.server),r=t&&t.owningSystemUrl,s=r&&i.id.findServerInfo(r);!1===e||r&&"portal"!==this.scope&&(!s||!s.webTierAuth||i.id.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")},s.destroy=function(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=i.id.credentials.indexOf(this);e>-1&&i.id.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")},s.toJSON=function(){const e=c.fixJson({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e},s._startRefreshTimer=function(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)},r}(a.EventedAccessor),r.__decorate([_.property()],e.Credential.prototype,"creationTime",void 0),r.__decorate([_.property()],e.Credential.prototype,"expires",void 0),r.__decorate([_.property()],e.Credential.prototype,"isAdmin",void 0),r.__decorate([_.property()],e.Credential.prototype,"oAuthState",void 0),r.__decorate([_.property()],e.Credential.prototype,"resources",void 0),r.__decorate([_.property()],e.Credential.prototype,"scope",void 0),r.__decorate([_.property()],e.Credential.prototype,"server",void 0),r.__decorate([_.property()],e.Credential.prototype,"ssl",void 0),r.__decorate([_.property()],e.Credential.prototype,"token",void 0),r.__decorate([_.property()],e.Credential.prototype,"tokenRefreshBuffer",void 0),r.__decorate([_.property()],e.Credential.prototype,"userId",void 0),r.__decorate([_.property()],e.Credential.prototype,"validity",void 0),e.Credential=r.__decorate([m.subclass("esri.identity.Credential")],e.Credential),e.IdentityManagerBase=C,Object.defineProperty(e,"__esModule",{value:!0})}));
