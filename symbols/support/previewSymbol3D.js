/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../assets","../../core/colorUtils","../../core/has","../../core/Error","../../core/Logger","../../core/maybe","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./IconSymbol3DLayerResource","./ObjectSymbol3DLayerResource","./previewUtils","./renderUtils","./utils","./webStyleSymbolUtils"],(function(e,t,s,n,o,l,r,a,i,p,c,u,h,m,y,f,d){"use strict";const b=m.SymbolSizeDefaults.size,g=m.SymbolSizeDefaults.maxSize,S=m.SymbolSizeDefaults.maxOutlineSize,v=m.SymbolSizeDefaults.lineWidth,x=m.SymbolSizeDefaults.tallSymbolWidth;function k(e){const t=e.outline,s=a.isSome(e.material)?e.material.color:null,n=a.isSome(s)?s.toHex():null;if(a.isNone(t)||"pattern"in t&&a.isSome(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===n?{color:"#bdc3c7",width:.75}:null;const o=p.pt2px(t.size)||0;return{color:"rgba("+(a.isSome(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(o,S),style:"pattern"in t&&a.isSome(t.pattern)&&"style"===t.pattern.type?c.dekebabifyLineStyle(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function w(e,t){const n=t&&t.resource,o=n&&n.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(o&&"object"!==t.type)return Promise.resolve(f.getIconHref(t));const l=s.getAssetUrl("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?d.resolveWebStyleSymbol(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>e?.thumbnail?.url||l)):Promise.resolve(l)}function M(e,t=1){const s=e.a,o=n.toHSV(e),l=o.h,r=o.s/t,a=100-(100-o.v)/t,{r:i,g:p,b:c}=n.toRGB({h:l,s:r,v:a});return[i,p,c,s]}function L(e){return"water"===e.type?a.isNone(e.color)?null:e.color:a.isNone(e.material)||a.isNone(e.material.color)?null:e.material.color}function z(e,t=0){const s=L(e);if(!s){if("fill"===e.type)return null;const s=c.defaultThematicColor.r,n=m.adjustColorComponentBrightness(s,t);return[n,n,n,100]}const n=s.toRgba();for(let o=0;o<3;o++)n[o]=m.adjustColorComponentBrightness(n[o],t);return n}function C(e,t){return j.apply(this,arguments)}function j(){return(j=t._asyncToGenerator((function*(e,t){const n=e.style;if("none"===n)return null;return{type:"pattern",x:0,y:0,src:yield c.getPatternUrlWithColor(s.getAssetUrl(`esri/symbols/patterns/${n}.png`),t.toCss(!0)),width:5,height:5}}))).apply(this,arguments)}function P(e){return e.outline?k(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function D(e,t){const s=L(e);if(!s)return null;let n="rgba(";return n+=m.adjustColorComponentBrightness(s.r,t)+",",n+=m.adjustColorComponentBrightness(s.g,t)+",",n+=m.adjustColorComponentBrightness(s.b,t)+",",n+s.a+");"}function U(e,t){const s=D(e,t);if(!s)return{};if("pattern"in e&&a.isSome(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style)return null;return{color:s,width:Math.min(e.size?p.pt2px(e.size):.75,S),style:"pattern"in e&&a.isSome(e.pattern)&&"style"===e.pattern.type?c.dekebabifyLineStyle(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?p.pt2px(2):e.join:null}}function O(e,t,s){const n=null!=s?.75*s:0;return{type:"linear",x1:n?.25*n:0,y1:n?.5*n:0,x2:n||4,y2:n?.5*n:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function I(e){const t=e.depth,s=e.height,n=e.width;return 0!==n&&0!==t&&0!==s&&n===t&&null!=n&&null!=s&&n<s}function N(e,t,s){const n=[];if(!e)return n;switch(e.type){case"icon":{const s=0,o=0,l=t,r=t;switch(e.resource&&e.resource.primitive||u.defaultPrimitive){case"circle":n.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:z(e,0),stroke:k(e)});break;case"square":n.push({shape:{type:"path",path:[{command:"M",values:[s,r]},{command:"L",values:[s,o]},{command:"L",values:[l,o]},{command:"L",values:[l,r]},{command:"Z",values:[]}]},fill:z(e,0),stroke:k(e)});break;case"triangle":n.push({shape:{type:"path",path:[{command:"M",values:[s,r]},{command:"L",values:[.5*l,o]},{command:"L",values:[l,r]},{command:"Z",values:[]}]},fill:z(e,0),stroke:k(e)});break;case"cross":n.push({shape:{type:"path",path:[{command:"M",values:[.5*l,o]},{command:"L",values:[.5*l,r]},{command:"M",values:[s,.5*r]},{command:"L",values:[l,.5*r]}]},stroke:P(e)});break;case"x":n.push({shape:{type:"path",path:[{command:"M",values:[s,o]},{command:"L",values:[l,r]},{command:"M",values:[l,o]},{command:"L",values:[s,r]}]},stroke:P(e)});break;case"kite":n.push({shape:{type:"path",path:[{command:"M",values:[s,.5*r]},{command:"L",values:[.5*l,o]},{command:"L",values:[l,.5*r]},{command:"L",values:[.5*l,r]},{command:"Z",values:[]}]},fill:z(e,0),stroke:k(e)})}break}case"object":switch(e.resource&&e.resource.primitive||h.defaultPrimitive){case"cone":{const o=O(z(e,0),z(e,-.6),s?x:t),l=m.getConeShapes(t,s);n.push({shape:l[0],fill:o}),n.push({shape:l[1],fill:o});break}case"inverted-cone":{const s=z(e,0),o=O(s,z(e,-.6),t),l=m.getInvertedConeShapes(t);n.push({shape:l[0],fill:o}),n.push({shape:l[1],fill:s});break}case"cube":{const o=m.getCubeShapes(t,s);n.push({shape:o[0],fill:z(e,0)}),n.push({shape:o[1],fill:z(e,-.3)}),n.push({shape:o[2],fill:z(e,-.5)});break}case"cylinder":{const o=O(z(e,0),z(e,-.6),s?x:t),l=m.getCylinderShapes(t,s);n.push({shape:l[0],fill:o}),n.push({shape:l[1],fill:o}),n.push({shape:l[2],fill:z(e,0)});break}case"diamond":{const s=m.getDiamondShapes(t);n.push({shape:s[0],fill:z(e,-.3)}),n.push({shape:s[1],fill:z(e,0)}),n.push({shape:s[2],fill:z(e,-.3)}),n.push({shape:s[3],fill:z(e,-.7)});break}case"sphere":{const s=O(z(e,0),z(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,n.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=m.getTetrahedronShapes(t);n.push({shape:s[0],fill:z(e,-.3)}),n.push({shape:s[1],fill:z(e,0)}),n.push({shape:s[2],fill:z(e,-.6)});break}}break}return n}function T(e){const t="number"==typeof e?.size?e?.size:null;return t?p.pt2px(t):null}function B(e){return"icon"===e.type?"multiply":"tint"}function R(e,t){const s=T(t),n=t?.maxSize?p.pt2px(t.maxSize):null,o=t?.disableUpsampling??!1,l=e.symbolLayers,a=[];let c=0,u=0;const h=l.getItemAt(l.length-1);let m;return h&&"icon"===h.type&&(m=h.size&&p.pt2px(h.size)),l.forEach((l=>{if("icon"!==l.type&&"object"!==l.type)return;const r="icon"===l.type?l.size&&p.pt2px(l.size):0,i=s||r?Math.ceil(Math.min(s||r,n||g)):b;if(l&&l.resource&&l.resource.href){const t=w(e,l).then((e=>{const t=l.get("material.color"),s=B(l);return y.tintImageWithColor(e,i,t,s,o)})).then((e=>{const t=e.width,s=e.height;return c=Math.max(c,t),u=Math.max(u,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));a.push(t)}else{let e=i;"icon"===l.type&&m&&s&&(e=i*(r/m));const n="tall"===t?.symbolConfig||t?.symbolConfig?.isTall||"object"===l.type&&I(l);c=Math.max(c,n?x:e),u=Math.max(u,e),a.push(Promise.resolve(N(l,e,n)))}})),i.eachAlways(a).then((e=>{const s=[];return e.forEach((e=>{e.value?s.push(e.value):e.error&&r.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!",e.error)})),y.renderSymbol(s,[c,u],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function W(e,t){const s=e.symbolLayers,n=[],o=f.isVolumetricSymbol(e),l=T(t),r=(t&&t.maxSize?p.pt2px(t.maxSize):null)||S;let i,c=0,u=0;return s.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const s=[];switch(e.type){case"line":{const n=U(e,0);if(a.isNone(n))break;const o=n&&n.width||0;0===t&&(i=o);const p=Math.min(l||o,r),h=0===t?p:l?p*(o/i):p,m=h>v/2?2*h:v;u=Math.max(u,h),c=Math.max(c,m),n.width=h,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[c,.5*u]}]},stroke:n});break}case"path":{const t=Math.min(l||b,r),n=z(e,0),o=z(e,-.2),a=D(e,-.4),i=a?{color:a,width:1}:{};if("quad"===e.profile){const t=e.width,l=e.height,r=t&&l?t/l:1,a=m.getPathSymbolShapes(r,0===l,0===t),p={...i,join:"bevel"};s.push({shape:a[0],fill:o,stroke:p}),s.push({shape:a[1],fill:o,stroke:p}),s.push({shape:a[2],fill:n,stroke:p})}else s.push({shape:m.shapes.pathSymbol3DLayer[0],fill:o,stroke:i}),s.push({shape:m.shapes.pathSymbol3DLayer[1],fill:n,stroke:i});u=Math.max(u,t),c=u}}n.push(s)})),Promise.resolve(y.renderSymbol(n,[c,u],{node:t&&t.node,scale:o,opacity:t&&t.opacity}))}function A(e,t){return E.apply(this,arguments)}function E(){return(E=t._asyncToGenerator((function*(e,t){const s="mesh-3d"===e.type,n=e.symbolLayers,o=T(t),l=t&&t.maxSize?p.pt2px(t.maxSize):null,r=o||b,i=[];let c=0,u=0,h=!1;for(let p=0;p<n.length;p++){const e=n.getItemAt(p),t=[];if(s&&"fill"!==e.type)continue;const o=m.shapes.fill[0];switch(e.type){case"fill":{const n=k(e),i=Math.min(r,l||g);c=Math.max(c,i),u=Math.max(u,i),h=!0;let p=z(e,0);const m="pattern"in e?e.pattern:null,y=L(e);!s&&a.isSome(m)&&"style"===m.type&&"solid"!==m.style&&y&&(p=yield C(m,y)),t.push({shape:o,fill:p,stroke:n});break}case"line":{const s=U(e,0);if(a.isNone(s))break;const n={stroke:s,shape:o};c=Math.max(c,b),u=Math.max(u,b),t.push(n);break}case"extrude":{const s={join:"round",width:1,...U(e,-.4)},n=z(e,0),o=z(e,-.2),a=Math.min(r,l||g),i=m.getExtrudeSymbolShapes(a);s.width=1,t.push({shape:i[0],fill:o,stroke:s}),t.push({shape:i[1],fill:o,stroke:s}),t.push({shape:i[2],fill:n,stroke:s});const p=b,h=.7*b+.5*a;c=Math.max(c,p),u=Math.max(u,h);break}case"water":{const s=a.unwrapOrThrow(L(e)),n=M(s),o=M(s,2),i=M(s,3),p=m.getWaterSymbolShapes();h=!0,t.push({shape:p[0],fill:n}),t.push({shape:p[1],fill:o}),t.push({shape:p[2],fill:i});const y=Math.min(r,l||g);c=Math.max(c,y),u=Math.max(u,y);break}}i.push(t)}return y.renderSymbol(i,[c,u],{node:t&&t.node,scale:h,opacity:t&&t.opacity})}))).apply(this,arguments)}function H(e,t){if(0===e.symbolLayers.length)return Promise.reject(new l("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return R(e,t);case"line-3d":return W(e,t);case"polygon-3d":case"mesh-3d":return A(e,t)}return Promise.reject(new l("symbolPreview: swatchInfo3D","symbol not supported."))}e.getPatternDescriptor=C,e.getSizeFromOptions=T,e.getSymbolLayerFill=z,e.previewSymbol3D=H,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
