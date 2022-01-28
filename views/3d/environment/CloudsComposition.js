/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../core/maybe","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/support/axisAngle","./CloudsCompositionTechnique","../webgl-engine/lib/glUtil3D"],(function(a,t,s,e,r,i,o,n,h,d){"use strict";var c,m,_,f;!function(a){a[a.FINISHED=0]="FINISHED",a[a.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",a[a.FADE_IN=2]="FADE_IN"}(c||(c={})),function(a){a[a.FINISHED=0]="FINISHED",a[a.FADE_OUT=1]="FADE_OUT",a[a.FADE_IN=2]="FADE_IN"}(m||(m={})),function(a){a[a.FINISHED=0]="FINISHED",a[a.CROSS_FADE=1]="CROSS_FADE"}(_||(_={})),function(a){a[a.FINISHED=0]="FINISHED",a[a.HEIGHT_FADE=1]="HEIGHT_FADE"}(f||(f={}));let I=function(){function a(a,t,s,e){this._viewingMode=t,this._inverseProjectionMatrix=r.create(),this._inverseViewMatrix=r.create(),this._cameraPositionLastFrame=o.create(),this._technique=new h.CloudsCompositionTechnique({rctx:a,viewingMode:this._viewingMode},null),this._vao=d.createQuadVAO(a),this._setDefaultParallax(s,e)}var I=a.prototype;return I.destroy=function(){this._technique=s.releaseMaybe(this._technique),this._vao=s.disposeMaybe(this._vao)},I.render=function(a,t,r,i,o){const n=a.camera;if(s.isNone(this._vao)||s.isNone(n))return!1;const h=a.rctx,d=this._technique.program;return h.useProgram(d),this._technique.bindPipelineState(h),this._isCameraAnimating=r,a.scenelightingData.setLightDirectionUniform(d),a.scenelightingData.setUniforms(d),e.invert(this._inverseProjectionMatrix,n.projectionMatrix),e.invert(this._inverseViewMatrix,n.viewMatrix),d.setUniformMatrix4fv("inverseProjectionMatrix",this._inverseProjectionMatrix),d.setUniformMatrix4fv("inverseViewMatrix",this._inverseViewMatrix),d.bindTexture(t.colorTexture,"cubeMap"),d.setUniform2fv("cloudVariables",[i,o]),this._setParallaxParams(n.eye),this._bindParallaxParams(d,a.camera),h.bindVAO(this._vao),d.assertCompatibleVertexAttributeLocations(this._vao),h.drawArrays(5,0,4),!0},I.isFading=function(){return this._crossFadeParams.crossFadeStage!==_.FINISHED||this._fadeInOutParams.fadeInOutStage!==m.FINISHED||this._fadeInParams.fadeInStage!==c.FINISHED||this._fadeInOutHeightParams.fadeHeightStage!==f.FINISHED},I._setDefaultParallax=function(a,t){this._parallaxParams={anchorPointClouds:o.create(),radius:a,cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:r.create()},this._parallaxParamsNew={anchorPointClouds:o.create(),radius:a,cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:r.create()},this._crossFadeParams={crossFadeStage:_.FINISHED,crossFadeFactor:0,distanceThresholdFactor:.3},this._fadeInOutParams={fadeInOutStage:m.FINISHED,fadeInOutFactor:0,distanceThresholdFactor:.6},this._fadeInParams={fadeInStage:c.FINISHED,fadeInFactor:0,distanceThresholdFactor:2},this._fadeInOutHeightParams={fadeHeightStage:f.FINISHED,fadeHeightFactor:t>1e4?1:0,heightThresholdFactor:1e4}},I._isCameraPositionFinal=function(a){return i.equals(this._cameraPositionLastFrame,a)},I._setFadeInStage=function(a){const t=this._isCameraPositionFinal(a);this._fadeInParams.fadeInStage===c.FINISHED&&(this._fadeInParams.fadeInFactor=1,i.copy(this._parallaxParams.anchorPointClouds,P),this._fadeInParams.fadeInStage=c.CHANGE_ANCHOR,this._crossFadeParams.crossFadeStage=_.FINISHED,this._fadeInOutParams.fadeInOutStage=m.FINISHED),this._fadeInParams.fadeInStage===c.CHANGE_ANCHOR&&t&&(i.copy(this._parallaxParams.anchorPointClouds,P),this._fadeInParams.fadeInStage=c.FADE_IN,this._startTime=performance.now()),this._fadeInParams.fadeInFactor>0&&this._fadeInParams.fadeInStage===c.FADE_IN&&(this._fadeInParams.fadeInFactor=1-(performance.now()-this._startTime)/500),this._fadeInParams.fadeInFactor<=0&&this._fadeInParams.fadeInStage===c.FADE_IN&&(this._fadeInParams.fadeInStage=c.FINISHED,this._fadeInParams.fadeInFactor=0)},I._setCrossFadingStage=function(){this._crossFadeParams.crossFadeStage===_.FINISHED&&(i.copy(this._parallaxParamsNew.anchorPointClouds,P),this._startTime=performance.now(),this._crossFadeParams.crossFadeFactor=0,this._crossFadeParams.crossFadeStage=_.CROSS_FADE),this._crossFadeParams.crossFadeFactor<1&&this._crossFadeParams.crossFadeStage===_.CROSS_FADE&&(this._crossFadeParams.crossFadeFactor=(performance.now()-this._startTime)/500),this._crossFadeParams.crossFadeFactor>=1&&this._crossFadeParams.crossFadeStage===_.CROSS_FADE&&(this._crossFadeParams.crossFadeStage=_.FINISHED,this._crossFadeParams.crossFadeFactor=1,i.copy(this._parallaxParams.anchorPointClouds,this._parallaxParamsNew.anchorPointClouds))},I._setFadeInOutStage=function(a){this._fadeInOutParams.fadeInOutStage===m.FINISHED&&(this._startTime=performance.now(),this._fadeInOutParams.fadeInOutFactor=0,this._fadeInOutParams.fadeInOutStage=m.FADE_OUT),this._fadeInOutParams.fadeInOutFactor<1&&this._fadeInOutParams.fadeInOutStage===m.FADE_OUT&&(this._fadeInOutParams.fadeInOutFactor=(performance.now()-this._startTime)/250),this._fadeInOutParams.fadeInOutFactor>=1&&this._fadeInOutParams.fadeInOutStage===m.FADE_OUT&&(this._fadeInOutParams.fadeInOutFactor=1,i.copy(this._parallaxParams.anchorPointClouds,P)),this._fadeInOutParams.fadeInOutFactor>=1&&this._fadeInOutParams.fadeInOutStage===m.FADE_OUT&&this._isCameraPositionFinal(a)&&(this._startTime=performance.now(),this._fadeInOutParams.fadeInOutFactor=1,this._fadeInOutParams.fadeInOutStage=m.FADE_IN,this._crossFadeParams.crossFadeStage=_.FINISHED,this._crossFadeParams.crossFadeFactor=0),this._fadeInOutParams.fadeInOutFactor>0&&this._fadeInOutParams.fadeInOutStage===m.FADE_IN&&(this._fadeInOutParams.fadeInOutFactor=1-(performance.now()-this._startTime)/500),this._fadeInOutParams.fadeInOutFactor<=0&&this._fadeInOutParams.fadeInOutStage===m.FADE_IN&&(this._fadeInOutParams.fadeInOutStage=m.FINISHED,this._fadeInOutParams.fadeInOutFactor=0)},I._setFadeInOutHeight=function(a){const s=performance.now();this._startTimeHeightFade=this._fadeInOutHeightParams.fadeHeightStage===f.FINISHED?s:this._startTimeHeightFade,a?this._fadeInOutHeightParams.fadeHeightFactor+=(s-this._startTimeHeightFade)/500:this._fadeInOutHeightParams.fadeHeightFactor-=(s-this._startTimeHeightFade)/500,this._startTimeHeightFade=s,this._fadeInOutHeightParams.fadeHeightFactor=t.clamp(this._fadeInOutHeightParams.fadeHeightFactor,0,1),this._fadeInOutHeightParams.fadeHeightStage=f.HEIGHT_FADE},I._setParallaxParams=function(a){i.normalize(P,a),i.scale(P,P,this._parallaxParams.radius),0===this._parallaxParams.anchorPointClouds[0]&&0===this._parallaxParams.anchorPointClouds[1]&&0===this._parallaxParams.anchorPointClouds[2]&&i.copy(this._parallaxParams.anchorPointClouds,P);const t=i.length(i.subtract(l,this._parallaxParams.anchorPointClouds,P));let s=!0;t>this._fadeInParams.distanceThresholdFactor*this._parallaxParams.cloudsHeight||this._fadeInParams.fadeInStage!==c.FINISHED?this._setFadeInStage(a):t>this._fadeInOutParams.distanceThresholdFactor*this._parallaxParams.cloudsHeight||this._fadeInOutParams.fadeInOutStage!==m.FINISHED?this._setFadeInOutStage(a):t>this._crossFadeParams.distanceThresholdFactor*this._parallaxParams.cloudsHeight&&!this._isCameraAnimating||this._crossFadeParams.crossFadeStage!==_.FINISHED?this._setCrossFadingStage():s=!1;const o=i.length(a),h=o-this._parallaxParams.radius;(h>1.7*this._fadeInOutHeightParams.heightThresholdFactor||h<-1*this._fadeInOutHeightParams.heightThresholdFactor)&&this._fadeInOutHeightParams.fadeHeightFactor<1?this._fadeInOutHeightParams.fadeHeightFactor=1:(h>this._fadeInOutHeightParams.heightThresholdFactor||h<-.35*this._fadeInOutHeightParams.heightThresholdFactor)&&this._fadeInOutHeightParams.fadeHeightFactor<1?this._setFadeInOutHeight(!0):h<this._fadeInOutHeightParams.heightThresholdFactor&&h>-.35*this._fadeInOutHeightParams.heightThresholdFactor&&this._fadeInOutHeightParams.fadeHeightFactor>0?this._setFadeInOutHeight(!1):this._fadeInOutHeightParams.fadeHeightStage=f.FINISHED,this._parallaxParams.radiusCurvatureCorrectionFactor=.84*Math.sqrt(Math.max(o*o-this._parallaxParams.radius*this._parallaxParams.radius,0))/o,n.fromPoints(u,this._parallaxParams.anchorPointClouds,F),this._parallaxParams.transform=r.create(),e.rotate(this._parallaxParams.transform,this._parallaxParams.transform,F[3],n.axis(F)),s&&(n.fromPoints(u,this._parallaxParamsNew.anchorPointClouds,F),this._parallaxParamsNew.transform=r.create(),e.rotate(this._parallaxParamsNew.transform,this._parallaxParamsNew.transform,F[3],n.axis(F))),i.copy(this._cameraPositionLastFrame,a)},I._bindParallaxParams=function(a,s){a.setUniform1f("cloudsHeight",this._parallaxParams.cloudsHeight),a.setUniformMatrix4fv("rotationMatrixClouds",this._parallaxParams.transform),a.setUniformMatrix4fv("rotationMatrixCloudsCrossFade",this._parallaxParamsNew.transform),a.setUniform3fv("anchorPosition",this._parallaxParams.anchorPointClouds),a.setUniform3fv("anchorPositionCrossFade",this._parallaxParamsNew.anchorPointClouds),this._fadeInOutParams.fadeInOutStage!==m.FINISHED?a.setUniform1f("totalFadeInOut",this._fadeInOutHeightParams.fadeHeightFactor+Math.max(t.clamp(this._fadeInOutParams.fadeInOutFactor,0,1))):a.setUniform1f("totalFadeInOut",this._fadeInOutHeightParams.fadeHeightFactor+Math.max(t.clamp(this._fadeInParams.fadeInFactor,0,1))),a.setUniform1f("radiusCurvatureCorrectionFactor",this._parallaxParams.radiusCurvatureCorrectionFactor),a.setUniform1i("crossFade",this._crossFadeParams.crossFadeStage),a.setUniform1f("crossFadeAnchorFactor",t.clamp(this._crossFadeParams.crossFadeFactor,0,1)),a.setUniform1f("radius",this._parallaxParams.radius),a.setUniform3fv("cameraPosition",s.eye)},a}();const u=o.fromValues(0,0,1),F=n.create(),P=o.create(),l=o.create();a.CloudsComposition=I,Object.defineProperty(a,"__esModule",{value:!0})}));
