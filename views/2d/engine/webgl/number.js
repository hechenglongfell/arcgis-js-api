/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";const t=new Float32Array(1),u=new Uint32Array(t.buffer);function r(n,t,u){return Math.round(Math.max(Math.min(n,u),t))}function o(n){return r(n,-128,127)}function e(n){return r(n,-32768,32767)}function i(n){return r(n,-2147483648,2147483647)}function f(n){return r(n,0,255)}function c(n){return r(n,0,65535)}function a(n){return r(n,0,4294967295)}function s(n){return t[0]=n,u[0]}function d(n){return u[0]=n,t[0]}function l(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function M(n,t){return 15&n|(15&t)<<4}function h(n,t){return 65535&n|t<<16}function m(n,t,u,r){return 255&n|(255&t)<<8|(255&u)<<16|r<<24}function y(n,t,u){return 255&n|(255&t)<<8|u<<16}function b(n){return 0|n}n.i16=e,n.i1616to32=h,n.i32=i,n.i8=o,n.i8816to32=y,n.i8888to32=m,n.numTo32=b,n.toFloat32=d,n.toUint32=s,n.u16=c,n.u32=a,n.u32to4Xu8=l,n.u4u4to8=M,n.u8=f,Object.defineProperty(n,"__esModule",{value:!0})}));
