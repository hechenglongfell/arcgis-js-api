/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../webgl/BufferObject","../../../../webgl/FramebufferObject","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../webgl/enums","../../../../webgl/RenderingContext","../../../../../chunks/builtins","../../../../webgl/programUtils","../../../../webgl/Texture","../../../../webgl/VertexArrayObject","./sources/resolver"],(function(e,r,l,s,n,t,a,i,d,c,f,o){"use strict";const u=e=>d.glslifyDefineMap({ID:e.id,PATTERN:e.pattern}),g={shaders:e=>({vertexShader:u(e)+o.resolveIncludes("background/background.vert"),fragmentShader:u(e)+o.resolveIncludes("background/background.frag")})},v=e=>d.glslifyDefineMap({ID:e.id}),h={shaders:e=>({vertexShader:v(e)+o.resolveIncludes("circle/circle.vert"),fragmentShader:v(e)+o.resolveIncludes("circle/circle.frag")})},I=e=>d.glslifyDefineMap({ID:e.id,PATTERN:e.pattern}),b={shaders:e=>({vertexShader:I(e)+o.resolveIncludes("fill/fill.vert"),fragmentShader:I(e)+o.resolveIncludes("fill/fill.frag")})},x=e=>d.glslifyDefineMap({ID:e.id}),D={shaders:e=>({vertexShader:x(e)+o.resolveIncludes("outline/outline.vert"),fragmentShader:x(e)+o.resolveIncludes("outline/outline.frag")})},S=e=>d.glslifyDefineMap({ID:e.id,SDF:e.sdf}),p={shaders:e=>({vertexShader:S(e)+o.resolveIncludes("icon/icon.vert"),fragmentShader:S(e)+o.resolveIncludes("icon/icon.frag")})},m=e=>d.glslifyDefineMap({ID:e.id,PATTERN:e.pattern,SDF:e.sdf}),y={shaders:e=>({vertexShader:m(e)+o.resolveIncludes("line/line.vert"),fragmentShader:m(e)+o.resolveIncludes("line/line.frag")})},M=e=>d.glslifyDefineMap({ID:e.id}),k={shaders:e=>({vertexShader:M(e)+o.resolveIncludes("text/text.vert"),fragmentShader:M(e)+o.resolveIncludes("text/text.frag")})};e.background=g,e.circle=h,e.fill=b,e.icon=p,e.line=y,e.outline=D,e.text=k,Object.defineProperty(e,"__esModule",{value:!0})}));
