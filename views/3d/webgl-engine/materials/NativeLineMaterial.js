/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Logger","../../../../core/mathUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../geometry/support/frustum","../../../../geometry/support/lineSegment","../../../../geometry/support/plane","../../../../geometry/support/buffer/BufferView","../core/shaderLibrary/ShaderOutput","../lib/GLMaterial","../lib/Material","../lib/RenderSlot","../lib/Util","../lib/VertexAttribute","./DefaultBufferWriter","./DefaultLayouts","./internal/bufferWriterUtils","../shaders/NativeLineTechnique","../shaders/NativeLineTechniqueConfiguration"],(function(e,t,r,i,n,s,a,o,c,u,l,f,p,d,h,g,m,A,P,S,b,y,_,x,O){"use strict";var T;!function(e){e[e.START=0]="START",e[e.END=1]="END"}(T||(T={}));let v=function(e){function s(t){var r;return(r=e.call(this,t,new L)||this)._configuration=new O.NativeLineTechniqueConfiguration,r}t._inheritsLoose(s,e);var c=s.prototype;return c.getConfiguration=function(e,t){this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._configuration.draped=t.slot===A.RenderSlot.DRAPED_MATERIAL;const r=n.isSome(this.parameters.stipplePattern);return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&n.isSome(this.parameters.stippleOffColor),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._configuration},c.intersect=function(e,t,i,n,s,c){if(!i.options.selectionMode||!e.visible)return;if(!P.isTranslationMatrix(t))return void r.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial").error("intersection assumes a translation-only matrix");const u=e.vertexAttributes.get(S.VertexAttribute.POSITION).data,d=i.camera,h=q;a.copy(h,i.point);const g=2;o.set(k[0],h[0]-g,h[1]+g,0),o.set(k[1],h[0]+g,h[1]+g,0),o.set(k[2],h[0]+g,h[1]-g,0),o.set(k[3],h[0]-g,h[1]-g,0);for(let r=0;r<4;r++)if(!d.unprojectFromRenderScreen(k[r],W[r]))return;p.fromPoints(d.eye,W[0],W[1],X),p.fromPoints(d.eye,W[1],W[2],F),p.fromPoints(d.eye,W[2],W[3],G),p.fromPoints(d.eye,W[3],W[0],H);let m=Number.MAX_VALUE,A=0;for(let r=0;r<u.length-5;r+=3){if(N[0]=u[r]+t[12],N[1]=u[r+1]+t[13],N[2]=u[r+2]+t[14],I[0]=u[r+3]+t[12],I[1]=u[r+4]+t[13],I[2]=u[r+5]+t[14],p.signedDistance(X,N)<0&&p.signedDistance(X,I)<0||p.signedDistance(F,N)<0&&p.signedDistance(F,I)<0||p.signedDistance(G,N)<0&&p.signedDistance(G,I)<0||p.signedDistance(H,N)<0&&p.signedDistance(H,I)<0)continue;if(d.projectToRenderScreen(N,M),d.projectToRenderScreen(I,w),M[2]<0&&w[2]>0){o.subtract(D,N,I);const e=d.frustum,t=-p.signedDistance(e[l.PlaneIndex.NEAR],N)/o.dot(D,p.normal(e[l.PlaneIndex.NEAR]));o.scale(D,D,t),o.add(N,N,D),d.projectToRenderScreen(N,M)}else if(M[2]>0&&w[2]<0){o.subtract(D,I,N);const e=d.frustum,t=-p.signedDistance(e[l.PlaneIndex.NEAR],I)/o.dot(D,p.normal(e[l.PlaneIndex.NEAR]));o.scale(D,D,t),o.add(I,I,D),d.projectToRenderScreen(I,w)}else if(M[2]<0&&w[2]<0)continue;M[2]=0,w[2]=0;const e=f.distance2(f.fromPoints(M,w,U),h);e<m&&(m=e,o.copy(C,N),o.copy(B,I),A=r/3)}const b=i.rayBegin,y=i.rayEnd;if(m<g*g){let e=Number.MAX_VALUE;if(f.closestLineSegmentPoint(f.fromPoints(C,B,U),f.fromPoints(b,y,j),E)){o.subtract(E,E,b);const t=o.length(E);o.scale(E,E,1/t),e=t/o.distance(b,y)}c(e,E,A,!1)}},c.intersectDraped=function(e,t,r,n,s,a){if(!r.options.selectionMode)return;const o=e.vertexAttributes.get(S.VertexAttribute.POSITION).data,c=e.vertexAttributes.get(S.VertexAttribute.SIZE),u=c?c.data[0]:0,l=n[0],f=n[1],p=((u+1)/2+4)*e.screenToWorldRatio;let d=Number.MAX_VALUE,h=0;for(let g=0;g<o.length-5;g+=3){const e=o[g],t=o[g+1],r=l-e,n=f-t,s=o[g+3]-e,a=o[g+4]-t,c=s*r+a*n,u=s*s+a*a,p=i.clamp(c/u,0,1),m=s*p-r,A=a*p-n,P=m*m+A*A;P<d&&(d=P,h=g/3)}d<p*p&&s(a.dist,a.normal,h,!1)},c.requiresSlot=function(e,t){return!(t!==h.ShaderOutput.Color&&t!==h.ShaderOutput.Highlight&&t!==h.ShaderOutput.ObjectAndLayerIdColor||e!==A.RenderSlot.OPAQUE_MATERIAL&&e!==A.RenderSlot.DRAPED_MATERIAL)},c.createGLMaterial=function(e){return new R(e)},c.createBufferWriter=function(){const e=this.parameters.hasVertexColors?y.PositionColorLayout:y.PositionLayout;return n.isNone(this.parameters.stipplePattern)?new b.DefaultBufferWriter(e):new V(e.clone().vec3f(S.VertexAttribute.AUXPOS1).vec2f(S.VertexAttribute.UV0))},s}(m.Material),R=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._stipplePattern=null,t}t._inheritsLoose(r,e);var i=r.prototype;return i.dispose=function(){e.prototype.dispose.call(this),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null},i._updateOccludeeState=function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})},i.beginSlot=function(e){this._output===h.ShaderOutput.Color&&this._updateOccludeeState(e);const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters(this._stippleTextureRepository.swap(this._stipplePattern,t)),this._stipplePattern=t),this.ensureTechnique(x.NativeLineTechnique,e)},r}(g),V=function(){function e(e){this.vertexBufferLayout=e}var t=e.prototype;return t.allocate=function(e){return this.vertexBufferLayout.createBuffer(e)},t.elementCount=function(e){return e.indices.get(S.VertexAttribute.POSITION).length},t.write=function(e,t,r,i,n){_.writeDefaultAttributes(r,this.vertexBufferLayout,e,t,i,n),this._writeAuxpos1(e,r,i,n),this._writeUV0(e,r,i,n)},t._writeAuxpos1=function(e,t,r,i){const n=r.getField(S.VertexAttribute.AUXPOS1,d.BufferViewVec3f),s=t.indices.get(S.VertexAttribute.POSITION),a=t.vertexAttributes.get(S.VertexAttribute.POSITION).data,o=e,c=n.typedBufferStride,u=n.typedBuffer;i*=c;for(let l=0;l<s.length-1;l+=2)for(const e of[1,0]){const t=3*s[l+e],r=a[t],n=a[t+1],f=a[t+2],p=o[0]*r+o[4]*n+o[8]*f+o[12],d=o[1]*r+o[5]*n+o[9]*f+o[13],h=o[2]*r+o[6]*n+o[10]*f+o[14];u[i]=p,u[i+1]=d,u[i+2]=h,i+=c}},t._writeUV0=function(e,t,r,i){const n=r.getField(S.VertexAttribute.UV0,d.BufferViewVec2f),s=t.indices.get(S.VertexAttribute.POSITION),a=t.vertexAttributes.get(S.VertexAttribute.POSITION).data,c=t.vertexAttributes.get(S.VertexAttribute.DISTANCETOSTART)?.data,u=n.typedBufferStride,l=n.typedBuffer;let f=0;l[i*=u]=T.START,l[i+1]=f,i+=u;const p=3*s[0],h=o.set(N,a[p],a[p+1],a[p+2]);e&&o.transformMat4(h,h,e);const g=I,m=s.length-1;let A=1;const P=c?(e,t,r)=>f=c[r]:(e,t,r)=>f+=o.distance(e,t);for(let d=1;d<m;d+=2){const t=3*s[d];o.set(g,a[t],a[t+1],a[t+2]),e&&o.transformMat4(g,g,e),P(h,g,A++);for(let e=0;e<2;++e)l[i]=1-e,l[i+1]=f,i+=u;o.copy(h,g)}const b=3*s[m];o.set(g,a[b],a[b+1],a[b+2]),e&&o.transformMat4(g,g,e),P(h,g,A),l[i]=T.END,l[i+1]=f},e}(),L=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).color=u.ONES,t.hasVertexColors=!1,t.hasSlicePlane=!1,t.width=1,t.stipplePreferContinuous=!0,t.hasOccludees=!1,t.stippleTexture=null,t}return t._inheritsLoose(r,e),r}(m.MaterialParameters);const N=c.create(),I=c.create(),D=c.create(),E=c.create(),M=s.createRenderScreenPointArray3(),w=s.createRenderScreenPointArray3(),C=c.create(),B=c.create(),U=f.create(),j=f.create(),q=c.create(),k=[s.createRenderScreenPointArray3(),s.createRenderScreenPointArray3(),s.createRenderScreenPointArray3(),s.createRenderScreenPointArray3()],W=[c.create(),c.create(),c.create(),c.create()],X=p.create(),F=p.create(),G=p.create(),H=p.create();e.NativeLineMaterial=v,e.Parameters=L,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
