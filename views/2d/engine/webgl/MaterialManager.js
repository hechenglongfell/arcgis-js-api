/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../core/maybe","../../../webgl/BufferObject","../../../webgl/FramebufferObject","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../webgl/enums","../../../webgl/RenderingContext","../../../../chunks/builtins","../../../webgl/ProgramCache","../../../webgl/Texture","../../../webgl/VertexArrayObject","./enums","./shaders/MaterialPrograms"],(function(e,r,t,a,o,s,n,i,g,h,m,c,u){"use strict";const f=e=>e===c.WGLDrawPhase.HITTEST||e===c.WGLDrawPhase.LABEL_ALPHA,p=e=>(f(e)?1:0)|(e===c.WGLDrawPhase.HIGHLIGHT?2:0),l=({rendererInfo:r,drawPhase:t},a,o,s)=>`${a.getVariationHash()}-${s.join(".")}-${p(t)}-${r.getVariationHash()}-${e.isSome(o)&&o.join(".")}`,y=(r,t,a,o)=>{const s=o.reduce(((e,t)=>({...e,[t]:r.driverTestResult[t]})),{}),n={...t.getVariation(),...r.rendererInfo.getVariation(),highlight:r.drawPhase===c.WGLDrawPhase.HIGHLIGHT,id:f(r.drawPhase),...s};if(e.isSome(a))for(const e of a)n[e]=!0;return n};return function(){function e(e){this._programByKey=new Map,this._programCache=new g(e)}var r=e.prototype;return r.dispose=function(){this._programCache&&this._programCache.dispose()},r.getProgram=function(e,r,t=[],a=[]){const o=r.vsPath+"."+r.fsPath+JSON.stringify(t)+a.join(".");if(this._programByKey.has(o))return this._programByKey.get(o);const s=a.reduce(((r,t)=>({...r,[t]:e.driverTestResult[t]})),{}),n={...t.map((e=>"string"==typeof e?{name:e,value:!0}:e)).reduce(((e,r)=>({...e,[r.name]:r.value})),{}),...s},{vsPath:i,fsPath:g,attributes:h}=r,m=this._programCache.getProgram(u.createProgramTemplate(i,g,h),n);if(!m)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(o,m),m},r.getMaterialProgram=function(e,r,t,a,o,s=["ignoresSamplerPrecision"]){const n=l(e,r,o,s);if(this._programByKey.has(n))return this._programByKey.get(n);const i=y(e,r,o,s),g=this._programCache.getProgram(u.createProgramTemplate(t,t,a),i);if(!g)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(n,g),g},e}()}));
