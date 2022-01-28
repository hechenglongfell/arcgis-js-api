/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","./elevationAlignmentUtils","./graphicUtils","../../support/debugFlags","../../support/ElevationProvider"],(function(e,t,a,n,o,s,r,i,l,c,f){"use strict";function u(e,t,a,n){const o=e.stageObject,s=a.spatialReference,l=o.geometryRecords,u="absolute-height"!==t.mode;let d=0;for(const p of l){const e=p.geometry,l=p.getShaderTransformation();v[0]=l[12],v[1]=l[13],v[2]=l[14],e.invalidateBoundingInfo();const m=e.getMutableAttribute("position"),g=m.data,A=e.vertexAttributes.get("mapPos").data,E=m.size,S=g.length/E,M=new f.SamplePosition(A,s);let O=0,P=!1,y=0;for(let o=0;o<S;o++){if(b[0]=g[O],b[1]=g[O+1],b[2]=g[O+2],i.evaluateElevationInfoAtPoint(M,a,t,n,h),u&&(y+=h.sampledElevation),c.TESTS_DISABLE_OPTIMIZATIONS)g[O]=M.array[M.offset],g[O+1]=M.array[M.offset+1],g[O+2]=h.z,r.projectBuffer(g,s,O,g,n.spatialReference,O,1),g[O]-=v[0],g[O+1]-=v[1],g[O+2]-=v[2],P=!0;else{T[0]=g[O]+v[0],T[1]=g[O+1]+v[1],T[2]=g[O+2]+v[2],n.setAltitude(T,h.z),g[O]=T[0]-v[0],g[O+1]=T[1]-v[1],g[O+2]=T[2]-v[2];const e=I/n.unitInMeters;(Math.abs(b[0]-g[O])>=e||Math.abs(b[1]-g[O+1])>=e||Math.abs(b[2]-g[O+2])>=e)&&(P=!0)}O+=E,M.offset+=3}d+=y/S,P&&o.geometryVertexAttrsUpdated(p)}return d/l.length}function d(e,t,n,s){const f=e.stageObject,u=t.centerPointInElevationSR;let d=0;if(f.metadata.usesVerticalDistanceToGround)i.evaluateElevationInfoAtPoint(u,n,t,s,h),l.updateVertexAttributeAuxpos1w(f,h.verticalDistanceToGround),d=h.sampledElevation;else{i.evaluateElevationInfoAtPoint(u,n,t,s,h);"absolute-height"!==t.mode&&(d=h.sampledElevation)}const m=a.copy(p,f.transformation),v=o.set(A,m[12],m[13],m[14]);c.TESTS_DISABLE_OPTIMIZATIONS?(T[0]=u.x,T[1]=u.y,T[2]=h.z,r.computeTranslationToOriginAndRotation(u.spatialReference,T,m,s.spatialReference)&&(f.transformation=m)):s.setAltitudeOfTransformation(h.z,m);const b=I/s.unitInMeters;return(Math.abs(m[12]-v[0])>=b||Math.abs(m[13]-v[1])>=b||Math.abs(m[14]-v[2])>=b)&&(f.transformation=m),d}const p=n.create();function m(e,a,n,s){const l=e.graphics3DSymbolLayer.lodRenderer;if(t.isNone(l))return 0;const f=a.centerPointInElevationSR;i.evaluateElevationInfoAtPoint(f,n,a,s,h);const u="absolute-height"!==a.mode?h.sampledElevation:0,d=l.instanceData,p=e.instanceIndex,m=g;d.getGlobalTransform(p,m);const v=o.set(A,m[12],m[13],m[14]);c.TESTS_DISABLE_OPTIMIZATIONS?(T[0]=f.x,T[1]=f.y,T[2]=h.z,r.computeTranslationToOriginAndRotation(f.spatialReference,T,m,s.spatialReference)&&d.setGlobalTransform(p,m)):s.setAltitudeOfTransformation(h.z,m);const b=I/s.unitInMeters;return(c.TESTS_DISABLE_OPTIMIZATIONS||Math.abs(m[12]-v[0])>=b||Math.abs(m[13]-v[1])>=b||Math.abs(m[14]-v[2])>=b)&&d.setGlobalTransform(p,m),u}const I=.01,T=s.create(),v=s.create(),b=s.create(),g=n.create(),A=s.create(),h=new i.SampleElevationInfo;e.perLodInstanceElevationAligner=m,e.perObjectElevationAligner=d,e.perVertexElevationAligner=u,Object.defineProperty(e,"__esModule",{value:!0})}));
