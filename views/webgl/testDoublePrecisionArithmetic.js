/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/floatRGBA","../../chunks/vec3f64","./BufferObject","./doublePrecisionUtils","./FramebufferObject","./Program","./VertexArrayObject"],(function(e,n,t,o,i,r,a,c){"use strict";function s(e,s){const l=new r(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});function u(n,t){const o=`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${s?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,r="\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",c=new a.Program(e,o,r,new Map([["position",0]])),l=new Float32Array(6);i.encodeDoubleArray(n,l,3);const u=new Float32Array(6);return i.encodeDoubleArray(t,u,3),e.useProgram(c),c.setUniform3f("u_highA",l[0],l[2],l[4]),c.setUniform3f("u_lowA",l[1],l[3],l[5]),c.setUniform3f("u_highB",u[0],u[2],u[4]),c.setUniform3f("u_lowB",u[1],u[3],u[5]),c}const v=o.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),f=new c(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:v}),d=t.fromValues(5633261.287538229,2626832.878767164,1434988.0495278358),p=t.fromValues(5633271.46742708,2626873.6381334523,1434963.231608387),h=u(d,p),A=e.getBoundFramebufferObject(),{x:m,y:_,width:b,height:g}=e.getViewport();e.bindFramebuffer(l),e.setViewport(0,0,1,1),e.bindVAO(f),e.drawArrays(5,0,4);const B=new Uint8Array(4);l.readPixels(0,0,1,1,6408,5121,B),h.dispose(),f.dispose(!1),v.dispose(),l.dispose(),e.setViewport(m,_,b,g),e.bindFramebuffer(A);const F=(d[2]-p[2])/25,w=n.unpackFloatRGBA(B);return Math.abs(F-w)}e.testDoublePrecisionArithmetic=s,Object.defineProperty(e,"__esModule",{value:!0})}));
