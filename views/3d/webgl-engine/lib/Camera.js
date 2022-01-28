/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Logger","../../../../core/mathUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/support/frustum","../../../../geometry/support/ray","../../../../geometry/support/vector","./Util"],(function(t,i,e,r,s,n,o,h,a,c,u,p,_,v,f,y,w){"use strict";const l=i.getLogger("esri.views.3d.webgl-engine.lib.Camera");let d=function(){function i(t=null,i=null,e=null){this._viewUp=u.create(),this._viewForward=u.create(),this._viewRight=u.create(),this._ray=f.create(),this._viewport=_.fromValues(0,0,1,1),this._padding=_.fromValues(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=a.fromValues(1,1e3),this._viewDirty=!0,this._viewMatrix=o.create(),this._projectionDirty=!0,this._projectionMatrix=o.create(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=o.create(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=o.create(),this._frustumDirty=!0,this._frustum=v.create(),this._fullViewport=_.create(),this.pixelRatio=1,this.relativeElevation=0,r.isSome(t)&&c.copy(this._ray.origin,t),this._center=r.isSome(i)?u.clone(i):u.create(),this._up=r.isSome(e)?u.clone(e):u.fromValues(0,0,1)}var d=i.prototype;return d.depthNDCToWorld=function(t){const i=2*t-1;return 2*this.near*this.far/(this.far+this.near-i*(this.far-this.near))},d.copyFrom=function(t){c.copy(this._ray.origin,t.eye),c.copy(this._center,t.center),c.copy(this._up,t.up),p.copy(this._viewport,t.viewport),p.copy(this._padding,t.padding),h.copy(this._nearFar,t.nearFar),this._fov=t.fov,this.relativeElevation=t.relativeElevation;const i=t;return this._viewDirty=i._viewDirty,this._viewDirty||(n.copy(this._viewMatrix,t.viewMatrix),c.copy(this._viewRight,t.viewRight),c.copy(this._viewUp,t.viewUp),c.copy(this._viewForward,t.viewForward)),i._projectionDirty?this._projectionDirty=!0:(n.copy(this._projectionMatrix,t.projectionMatrix),this._projectionDirty=!1),this._viewProjectionDirty=!0,this._frustumDirty=i._frustumDirty,this._frustumDirty||(v.copy(t.frustum,this._frustum),this._frustumDirty=!1),i._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(n.copy(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),p.copy(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this},d.copyViewFrom=function(t){this.eye=t.eye,this.center=t.center,this.up=t.up},d.clone=function(){return(new i).copyFrom(this)},d.equals=function(t){return c.exactEquals(this.eye,t.eye)&&c.exactEquals(this._center,t.center)&&c.exactEquals(this._up,t.up)&&p.exactEquals(this._viewport,t.viewport)&&p.exactEquals(this._padding,t.padding)&&h.exactEquals(this._nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation},d.almostEquals=function(t){if(this.pixelRatio!==t.pixelRatio||Math.abs(t.fov-this._fov)>=.001)return!1;const i=5e-4,e=1-1e-10;c.sub(x,t.eye,t.center),c.sub(D,this.eye,this._center);const r=c.dot(x,D),s=c.sqrLen(x),n=c.sqrLen(D);return r*r>=e*s*n&&c.sqrDist(t.eye,this.eye)<Math.max(s,n)*i*i&&p.squaredDistance(t.padding,this._padding)<.5&&p.squaredDistance(t.viewport,this._viewport)<.5},d.computeRenderPixelSizeAt=function(t){return this.computeRenderPixelSizeAtDist(this.viewDirectionDistance(t))},d.computeRenderPixelSizeAtDist=function(t){return t*this.perRenderPixelRatio},d.computeScreenPixelSizeAt=function(t){return this.computeScreenPixelSizeAtDist(this.viewDirectionDistance(t))},d.viewDirectionDistance=function(t){return Math.abs(y.projectPointSignedLength(this.viewForward,c.subtract(x,t,this.eye)))},d.computeScreenPixelSizeAtDist=function(t){return t*this.perScreenPixelRatio},d.computeDistanceFromRadius=function(t,i){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(i||1)))},d.getScreenCenter=function(t=s.createScreenPointArray()){return t[0]=(this.padding[3]+this.width/2)/this.pixelRatio,t[1]=(this.padding[0]+this.height/2)/this.pixelRatio,t},d.getRenderCenter=function(t,i=.5,e=.5){return t[0]=this.padding[3]+this.width*i,t[1]=this.padding[2]+this.height*e,t[2]=.5,t},d.setGLViewport=function(t){const i=this.viewport,e=this.padding;t.setViewport(i[0]-e[3],i[1]-e[2],i[2]+e[1]+e[3],i[3]+e[0]+e[2])},d.applyProjection=function(t,i,r=!1){t!==g&&c.copy(g,t),g[3]=1,r&&(i[2]=-g[2]),p.transformMat4(g,g,this.projectionMatrix),c.scale(g,g,1/Math.abs(g[3]));const s=this.fullViewport;return i[0]=e.lerp(0,s[0]+s[2],.5+.5*g[0]),i[1]=e.lerp(0,s[1]+s[3],.5+.5*g[1]),r||(i[2]=.5*(g[2]+1)),i},d.projectToScreen=function(t,i){this.projectToRenderScreen(t,M),this.renderToScreen(M,i)},d.projectToRenderScreen=function(t,i){if(g[0]=t[0],g[1]=t[1],g[2]=t[2],g[3]=1,p.transformMat4(g,g,this.viewProjectionMatrix),0===g[3])return null;c.scale(g,g,1/Math.abs(g[3]));const r=this.fullViewport;return"x"in i?(i.x=e.lerp(0,r[0]+r[2],.5+.5*g[0]),i.y=e.lerp(0,r[1]+r[3],.5+.5*g[1])):(i[0]=e.lerp(0,r[0]+r[2],.5+.5*g[0]),i[1]=e.lerp(0,r[1]+r[3],.5+.5*g[1]),i.length>2&&(i[2]=.5*(g[2]+1))),i},d.unprojectFromScreen=function(t,i){return this.unprojectFromRenderScreen(this.screenToRender(t,M),i)},d.unprojectFromRenderScreen=function(t,i){if(n.multiply(m,this.projectionMatrix,this.viewMatrix),!n.invert(m,m))return null;const e=this.fullViewport;return g[0]=2*(t[0]-e[0])/e[2]-1,g[1]=2*(t[1]-e[1])/e[3]-1,g[2]=2*t[2]-1,g[3]=1,p.transformMat4(g,g,m),0===g[3]?null:(i[0]=g[0]/g[3],i[1]=g[1]/g[3],i[2]=g[2]/g[3],i)},d.constrainWindowSize=function(t,i,e,r=e){const s=t*this.pixelRatio,n=i*this.pixelRatio,o=Math.max(s-e/2,0),h=Math.max(this.fullHeight-n-r/2,0),a=-Math.min(s-e/2,0),c=-Math.min(this.fullHeight-n-r/2,0);return[o,h,e-a- -Math.min(this.fullWidth-s-e/2,0),r-c- -Math.min(n-r/2,0)]},d.computeUp=function(t){1===t?this.computeUpGlobal():this.computeUpLocal()},d.screenToRender=function(t,i){const e=t[0]*this.pixelRatio,r=this.fullHeight-t[1]*this.pixelRatio;return i[0]=e,i[1]=r,i},d.renderToScreen=function(t,i){const e=t[0]/this.pixelRatio,r=(this.fullHeight-t[1])/this.pixelRatio;i[0]=e,i[1]=r},d.computeUpGlobal=function(){c.subtract(x,this.center,this.eye);const t=c.length(this.center);t<1?(c.set(this._up,0,0,1),this._markViewDirty()):Math.abs(c.dot(x,this.center))>.9999*c.length(x)*t||(c.cross(this._up,x,this.center),c.cross(this._up,this._up,x),c.normalize(this._up,this._up),this._markViewDirty())},d.computeUpLocal=function(){c.direction(x,this.eye,this.center),Math.abs(x[2])<=.9999&&(c.scale(x,x,x[2]),c.set(this._up,-x[0],-x[1],1-x[2]),c.normalize(this._up,this._up),this._markViewDirty())},d._compareAndSetView=function(t,i){"number"==typeof t[0]&&isFinite(t[0])&&"number"==typeof t[1]&&isFinite(t[1])&&"number"==typeof t[2]&&isFinite(t[2])?c.exactEquals(t,i)||(c.copy(i,t),this._markViewDirty()):l.warn("Camera vector contains invalid number, ignoring value")},d._markViewDirty=function(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0},d._recomputeFrustum=function(){this._frustumDirty&&(v.fromMatrix(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)},d._ensureViewClean=function(){this._viewDirty&&(n.lookAt(this._viewMatrix,this.eye,this._center,this._up),c.set(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),c.set(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),c.set(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)},t._createClass(i,[{key:"eye",get:function(){return this._ray.origin},set:function(t){this._compareAndSetView(t,this._ray.origin)}},{key:"center",get:function(){return this._center},set:function(t){this._compareAndSetView(t,this._center)}},{key:"ray",get:function(){return c.subtract(this._ray.direction,this.center,this.eye),this._ray}},{key:"up",get:function(){return this._up},set:function(t){this._compareAndSetView(t,this._up)}},{key:"viewMatrix",get:function(){return this._ensureViewClean(),this._viewMatrix},set:function(t){n.copy(this._viewMatrix,t),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"viewForward",get:function(){return this._ensureViewClean(),this._viewForward}},{key:"viewUp",get:function(){return this._ensureViewClean(),this._viewUp}},{key:"viewRight",get:function(){return this._ensureViewClean(),this._viewRight}},{key:"nearFar",get:function(){return this._nearFar}},{key:"near",get:function(){return this._nearFar[0]},set:function(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"far",get:function(){return this._nearFar[1]},set:function(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"viewport",get:function(){return this._viewport},set:function(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}},{key:"x",get:function(){return this._viewport[0]},set:function(t){t+=this._padding[3],this._viewport[0]!==t&&(this._viewport[0]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"y",get:function(){return this._viewport[1]},set:function(t){t+=this._padding[2],this._viewport[1]!==t&&(this._viewport[1]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"width",get:function(){return this._viewport[2]},set:function(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"height",get:function(){return this._viewport[3]},set:function(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"fullWidth",get:function(){return this._viewport[2]+this._padding[1]+this._padding[3]},set:function(t){this.width=t-(this._padding[1]+this._padding[3])}},{key:"fullHeight",get:function(){return this._viewport[3]+this._padding[0]+this._padding[2]},set:function(t){this.height=t-(this._padding[0]+this._padding[2])}},{key:"fullViewport",get:function(){return this._fullViewport[0]=this._viewport[0]-this._padding[3],this._fullViewport[1]=this._viewport[1]-this._padding[2],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}},{key:"aspect",get:function(){return this.width/this.height}},{key:"padding",get:function(){return this._padding},set:function(t){this._padding[0]===t[0]&&this._padding[1]===t[1]&&this._padding[2]===t[2]&&this._padding[3]===t[3]||(this._viewport[0]+=t[3]-this._padding[3],this._viewport[1]+=t[2]-this._padding[2],this._viewport[2]-=t[1]+t[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=t[0]+t[2]-(this._padding[0]+this._padding[2]),p.copy(this._padding,t),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}},{key:"viewProjectionMatrix",get:function(){return this._viewProjectionDirty&&(n.multiply(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}},{key:"projectionMatrix",get:function(){if(this._projectionDirty){const t=this.width,i=this.height,e=this.near*Math.tan(this.fovY/2),r=e*this.aspect;n.frustum(this._projectionMatrix,-r*(1+2*this._padding[3]/t),r*(1+2*this._padding[1]/t),-e*(1+2*this._padding[2]/i),e*(1+2*this._padding[0]/i),this.near,this.far),this._projectionDirty=!1}return this._projectionMatrix},set:function(t){n.copy(this._projectionMatrix,t),this._projectionDirty=!1,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"fov",get:function(){return this._fov},set:function(t){this._fov=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"fovX",get:function(){return w.fovd2fovx(this._fov,this.width,this.height)},set:function(t){this._fov=w.fovx2fovd(t,this.width,this.height),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"fovY",get:function(){return w.fovd2fovy(this._fov,this.width,this.height)},set:function(t){this._fov=w.fovy2fovd(t,this.width,this.height),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}},{key:"distance",get:function(){return c.distance(this._center,this.eye)}},{key:"frustum",get:function(){return this._recomputeFrustum(),this._frustum}},{key:"viewInverseTransposeMatrix",get:function(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(n.invert(this._viewInverseTransposeMatrix,this.viewMatrix),n.transpose(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}},{key:"perRenderPixelRatio",get:function(){return Math.tan(this.fovX/2)/(this.width/2)}},{key:"perScreenPixelRatio",get:function(){return this.perRenderPixelRatio*this.pixelRatio}},{key:"aboveGround",get:function(){return this.relativeElevation&&this.relativeElevation>=0}}]),i}();const g=_.create(),m=o.create(),x=u.create(),D=u.create(),M=s.createRenderScreenPointArray3();return d}));
