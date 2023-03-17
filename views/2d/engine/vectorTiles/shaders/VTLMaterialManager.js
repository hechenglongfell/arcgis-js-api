/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../enums","./Programs"],(function(r,e){"use strict";return function(){function a(){this._programByKey=new Map}var t=a.prototype;return t.dispose=function(){this._programByKey.forEach((r=>r.dispose())),this._programByKey.clear()},t.getMaterialProgram=function(r,e,a){const t=e.key<<3|this._getMaterialOptionsValue(e.type,a);if(this._programByKey.has(t))return this._programByKey.get(t);const n=this._getProgramTemplate(e.type),{shaders:o}=n,{vertexShader:s,fragmentShader:i}=o(a),c=e.getShaderHeader(),p=e.getShaderMain(),g=s.replace("#pragma header",c).replace("#pragma main",p),u=r.programCache.acquire(g,i,e.getAttributeLocations());return this._programByKey.set(t,u),u},t._getMaterialOptionsValue=function(e,a){switch(e){case r.ShaderProgramType.BACKGROUND:{const r=a;return(r.pattern?1:0)<<1|(r.id?1:0)}case r.ShaderProgramType.FILL:{const r=a;return(r.pattern?1:0)<<1|(r.id?1:0)}case r.ShaderProgramType.OUTLINE:return a.id?1:0;case r.ShaderProgramType.LINE:{const r=a;return(r.sdf?1:0)<<2|(r.pattern?1:0)<<1|(r.id?1:0)}case r.ShaderProgramType.ICON:{const r=a;return(r.sdf?1:0)<<1|(r.id?1:0)}case r.ShaderProgramType.CIRCLE:return a.id?1:0;case r.ShaderProgramType.TEXT:return a.id?1:0;default:return 0}},t._getProgramTemplate=function(a){switch(a){case r.ShaderProgramType.BACKGROUND:return e.background;case r.ShaderProgramType.CIRCLE:return e.circle;case r.ShaderProgramType.FILL:return e.fill;case r.ShaderProgramType.ICON:return e.icon;case r.ShaderProgramType.LINE:return e.line;case r.ShaderProgramType.OUTLINE:return e.outline;case r.ShaderProgramType.TEXT:return e.text;default:return null}},a}()}));
