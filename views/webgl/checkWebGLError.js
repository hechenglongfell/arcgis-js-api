/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/has","../../core/Logger"],(function(e,r,n,t){"use strict";const o=t.getLogger("esri.views.webgl.checkWebGLError");function a(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const u=!!n("enable-feature:webgl-debug");function c(){return u}function s(){return u}function i(e){if(c()){const n=e.getError();if(n){const t=a(e,n),u=(new Error).stack;o.error(new r("webgl-error","WebGL error occured",{message:t,stack:u}))}}}e.checkWebGLError=i,e.hasFeatureFlagWebGLDebug=u,e.webglDebugEnabled=c,e.webglValidateShadersEnabled=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
