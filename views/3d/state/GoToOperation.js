/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../Camera","../../../Viewpoint","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../camera/constraintUtils","./controllers/CameraController","./controllers/PointToPointAnimationController","./controllers/SurfaceCollisionCorrectionController","../support/cameraUtils","../support/viewpointUtils","../camera/constraintUtils/surfaceCollision"],(function(t,i,e,n,o,a,r,s,l,c,h,m,w,p){"use strict";let f=function(){function t(t,i,e){this.target=t,this.options=i,this.view=e,this.state="pending",this.abortController=null,this.animationController=null,this.promise=new Promise(((t,i)=>{this.resolveCallback=t,this.rejectCallback=i;const e=a.createAbortController();o.isSome(this.options.signal)&&a.onAbort(this.options.signal,(()=>{this.abort()})),this.abortController=e,this.waitForReady()}))}var f=t.prototype;return f.then=function(t,i){return this.promise.then(t,i)},f.catch=function(t){return this.promise.catch(t)},f.resolve=function(t){return this.state="finished",this.resolveCallback(t)},f.reject=function(t){return this.state="finished",this.rejectCallback(t)},f.abort=function(t=!1){switch(this.state){case"pending":case"wait-for-ready":case"wait-for-viewpoint":this.reject(a.createAbortError());break;case"wait-for-animation-finish":!t&&o.isSome(this.animationController)&&this.view.state.cameraController===this.animationController&&this.animationController.active&&this.animationController.stopController(),this.reject(a.createAbortError())}},f.waitForReady=function(){this.state="wait-for-ready",this.view.ready?this.createViewPoint():r.whenOnce(this.view,"ready",this.abortController.signal).then((()=>{this.createViewPoint()}),(t=>{this.reject(t)}))},f.createViewPoint=function(){"finished"!==this.state&&(this.state="wait-for-viewpoint",this.animationController=this.options.animate?this.getAnimationController():null,w.create(this.view,this.target,this.abortController.signal).then((t=>{if("finished"===this.state)return;const i=this.getCameraFromViewpoint(t);if(!o.isNone(i))if(this.options.animate){if(o.isNone(this.animationController))return;this.startAnimation(i,this.animationController)}else this.view.stateManager.setStateCamera(i.camera,{applyConstraints:!i.isFullySpecified,positionAndOrientationOnly:!0,doNotCancelGoToOperation:!0}),this.resolve()}),(t=>{this.reject(t)})))},f.getCameraFromViewpoint=function(t){const a=!!(this.target instanceof e&&this.target.camera||this.target instanceof i),r=t.camera;if(o.isNone(r))return null;if(!this.view.stateManager.isCompatible(r)){const t=r.position,i=t&&t.spatialReference,e=i?i.wkid:"none",o=this.view.spatialReference.wkid;return this.reject(new n("GotoAnimation:incompatible-spatialreference",`Resulting camera has an incompatible spatial reference (camera: ${e}, view: ${o})`,{camera:r})),null}const s=m.externalToInternal(this.view,r);return o.isNone(s)?(this.reject(new n("GotoAnimation:invalid-camera","Resulting camera is invalid")),null):{viewpoint:t,camera:s,isFullySpecified:a}},f.startAnimation=function(t,i){this.state="wait-for-animation-finish";const e=i.viewAnimation;if(o.isNone(e))return void this.reject(new n("GotoAnimation:missing-animation","Unreachable code in view.stateManager"));if(e.update(t.viewpoint,"running"),!i.active||o.isNone(i.viewAnimation)||i.viewAnimation.target!==t.viewpoint||this.view.state.cameraController!==i)return this.abort();let a;t.isFullySpecified?(a=new h.SurfaceCollisionCorrectionController({view:this.view,desiredCamera:t.camera}),p.applySurfaceCollisionConstraint(this.view,t.camera,1)):s.applyAll(this.view,t.camera),i.begin(t.camera,this.options);const r=()=>{const e=this.view.state.cameraController;a&&(e&&e.active?e instanceof c.PointToPointAnimationController&&o.isSome(e.viewAnimation)&&e.viewAnimation.target===t.viewpoint&&(this.view.state.cameraController=a):o.isSome(i.viewAnimation)&&i.viewAnimation.target===t.viewpoint&&"finished"===i.state&&(this.view.state.cameraController=a))},m=t=>{if(!o.isNone(this.view.state))switch(i.state){case l.State.Finished:switch(this.state){case"pending":case"wait-for-ready":case"wait-for-viewpoint":case"wait-for-animation-finish":this.resolve()}break;case l.State.Ready:case l.State.Rejected:case l.State.Running:case l.State.Stopped:switch(this.state){case"pending":case"wait-for-ready":case"wait-for-viewpoint":case"wait-for-animation-finish":this.reject(t)}}};e.when(r,(t=>m(t))),i.asyncResult={resolve:()=>m(),reject:t=>m(t)}},f.getAnimationController=function(){let t,i=null;const e=this.view.state.cameraController;return e instanceof c.PointToPointAnimationController&&(e.updateStateFromViewAnimation(),e.active&&(t=e,i=t.viewAnimation)),null!=t||(t=new c.PointToPointAnimationController({view:this.view,mode:"animation"}),i=t.viewAnimation,this.view.state.switchCameraController(t))?t:(o.isSome(i)&&i.stop(),this.reject(new n("GotoAnimation:goto-cannot-interrupt","Cannot start an animation while interacting")),null)},t}();t.GoToOperation=f,Object.defineProperty(t,"__esModule",{value:!0})}));
