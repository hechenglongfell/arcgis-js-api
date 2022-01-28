/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../core/Logger","../../core/maybe","../../core/screenUtils","../../core/string","../../support/arcadeOnDemand","./CIMSymbolHelper","./SDFHelper","./utils","./effects/CIMEffectHelper","../../views/2d/arcade/callExpressionWithFeature"],(function(e,t,i,r,o,l,n,a,s,c,f,m,u){"use strict";const p=r.getLogger("esri.symbols.cim.cimAnalyzer");function h(e){switch(e){case"Butt":return 0;case"Square":return 2;default:return 1}}function y(e){switch(e){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function g(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function d(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function S(e){let t="",i="";if(e){const r=e.toLowerCase();-1!==r.indexOf("italic")?t="italic":-1!==r.indexOf("oblique")&&(t="oblique"),-1!==r.indexOf("bold")?i="bold":-1!==r.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}function C(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function b(e,t,i,r){let o;e[t]?o=e[t]:(o={},e[t]=o),o[i]=r}function v(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}function N(e,t,i,r,o){return k.apply(this,arguments)}function k(){return(k=t._asyncToGenerator((function*(e,t,i,r,o){const l=null!=r?r:[];if(!e)return l;let n,s;const c={};if("CIMSymbolReference"!==e.type)return p.error("Expect cim type to be 'CIMSymbolReference'"),l;if(n=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const i of s){const r=i.valueExpressionInfo;if(r&&t){const o=r.expression,l=a.createRendererExpression(o,t.spatialReference,t.fields).then((e=>{e&&b(c,i.primitiveName,i.propertyName,e)}));e.push(l)}else null!=i.value&&b(c,i.primitiveName,i.propertyName,i.value)}e.length>0&&(yield Promise.all(e))}const f=[];switch(j(n,i,f),f.length>0&&(yield Promise.all(f)),n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":O(n,s,c,t,l,i,o)}return l}))).apply(this,arguments)}function O(e,t,i,r,o,l,n){if(!e)return;const a=e.symbolLayers;if(!a)return;const c=e.effects;let f;const m=s.CIMSymbolHelper.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(f=1);let u=a.length;for(;u--;){const h=a[u];if(!h||!1===h.enable)continue;let y;c&&c.length&&(y=[...c]);const g=h.effects;g&&g.length&&(c?y.push(...g):y=[...g]);const d=[];switch(s.OverrideHelper.findApplicableOverrides(h,t,d),h.type){case"CIMSolidFill":M(h,y,i,d,r,o);break;case"CIMPictureFill":I(h,y,i,d,r,l,o);break;case"CIMHatchFill":H(h,y,i,d,r,o);break;case"CIMGradientFill":P(h,y,i,d,r,o);break;case"CIMSolidStroke":L(h,y,i,d,r,o,"CIMPolygonSymbol"===e.type,m);break;case"CIMPictureStroke":x(h,y,i,d,r,o,"CIMPolygonSymbol"===e.type,m);break;case"CIMGradientStroke":w(h,y,i,d,r,o,"CIMPolygonSymbol"===e.type,m);break;case"CIMCharacterMarker":if(X(h,y,i,d,r,o))break;break;case"CIMPictureMarker":if(X(h,y,i,d,r,o))break;"CIMLineSymbol"===e.type&&(f=v(h)),z(h,y,i,d,r,l,o,f,m);break;case"CIMVectorMarker":if(X(h,y,i,d,r,o))break;"CIMLineSymbol"===e.type&&(f=v(h)),J(h,y,i,d,r,o,l,f,m,n);break;default:p.error("Cannot analyze CIM layer",h.type)}}}function M(e,t,i,r,o,l){const a=e.primitiveName,s=f.fromCIMColor(e.color),[c,m]=G(r,a),u=n.numericHash(JSON.stringify(e)+m).toString();l.push({type:"fill",templateHash:u,materialHash:c?()=>u:u,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:W(a,i,"Color",o,s,E),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function I(e,t,i,r,l,a,s){const c=e.primitiveName,m=e.tintColor?f.fromCIMColor(e.tintColor):{r:255,g:255,b:255,a:1},[u,p]=G(r,c),h=n.numericHash(JSON.stringify(e)+p).toString(),y=n.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let g=f.getValue(e.scaleX);if("width"in e){const t=e.width;let i=1;const r=a.getResource(e.url);o.isSome(r)&&(i=r.width/r.height),g/=i*(e.height/t)}s.push({type:"fill",templateHash:h,materialHash:u?()=>y:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:W(c,i,"TintColor",l,m,E),height:W(c,i,"Height",l,e.height),scaleX:W(c,i,"ScaleX",l,g),angle:W(c,i,"Rotation",l,f.getValue(e.rotation)),offsetX:W(c,i,"OffsetX",l,f.getValue(e.offsetX)),offsetY:W(c,i,"OffsetY",l,f.getValue(e.offsetY)),url:e.url})}function H(e,t,i,r,o,l){const a=["Rotation","OffsetX","OffsetY"],s=r.filter((t=>t.primitiveName!==e.primitiveName&&-1===a.indexOf(t.propertyName))),c=e.primitiveName,[m,u]=G(r,c),p=n.numericHash(JSON.stringify(e)+u).toString(),h=n.numericHash(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();l.push({type:"fill",templateHash:p,materialHash:m?T(h,i,s,o):h,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:W(c,i,"Separation",o,e.separation),scaleX:1,angle:W(c,i,"Rotation",o,f.getValue(e.rotation)),offsetX:W(c,i,"OffsetX",o,f.getValue(e.offsetX)),offsetY:W(c,i,"OffsetY",o,f.getValue(e.offsetY))})}function P(e,t,i,r,o,l){const a=e.primitiveName,[s,c]=G(r,a),f=n.numericHash(JSON.stringify(e)+c).toString();l.push({type:"fill",templateHash:f,materialHash:s?T(f,i,r,o):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function L(e,t,i,r,o,l,a,s){const c=e.primitiveName,m=f.fromCIMColor(e.color),u=void 0!==e.width?e.width:4,p=h(e.capStyle),g=y(e.joinStyle),d=e.miterLimit,[S,C]=G(r,c),b=n.numericHash(JSON.stringify(e)+C).toString();let v,N;if(t&&t.length>0){const i=t[t.length-1];if("CIMGeometricEffectDashes"===i.type&&"NoConstraint"===i.lineDashEnding){const i=(t=[...e.effects]).pop();v=i.dashTemplate,N=i.scaleDash}}l.push({type:"line",templateHash:b,materialHash:S?()=>b:b,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:W(c,i,"Color",o,m,E),width:W(c,i,"Width",o,u),cap:W(c,i,"CapStyle",o,p),join:W(c,i,"JoinStyle",o,g),miterLimit:W(c,i,"MiterLimit",o,d),referenceWidth:s,zOrder:$(e.name),dashTemplate:v,scaleDash:N})}function x(e,t,i,r,o,l,a,s){const c=n.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),m=e.primitiveName,u=f.fromCIMColor(e.tintColor),p=void 0!==e.width?e.width:4,g=h(e.capStyle),d=y(e.joinStyle),S=e.miterLimit,[C,b]=G(r,m),v=n.numericHash(JSON.stringify(e)+b).toString();l.push({type:"line",templateHash:v,materialHash:C?()=>c:c,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:W(m,i,"TintColor",o,u,E),width:W(m,i,"Width",o,p),cap:W(m,i,"CapStyle",o,g),join:W(m,i,"JoinStyle",o,d),miterLimit:W(m,i,"MiterLimit",o,S),referenceWidth:s,zOrder:$(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function w(e,t,i,r,o,l,a,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=h(e.capStyle),u=y(e.joinStyle),p=e.miterLimit,[g,d]=G(r,c),S=n.numericHash(JSON.stringify(e)+d).toString();l.push({type:"line",templateHash:S,materialHash:g?T(S,i,r,o):S,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:W(c,i,"Width",o,f),cap:W(c,i,"CapStyle",o,m),join:W(c,i,"JoinStyle",o,u),miterLimit:W(c,i,"MiterLimit",o,p),referenceWidth:s,zOrder:$(e.name),dashTemplate:null,scaleDash:!1})}function X(e,t,i,r,o,l){const a=e.markerPlacement;if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1;const s=a,c=["Rotation","OffsetX","OffsetY"],m=r.filter((t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName))),u="url"in e?e.url:null,[p,h]=G(r,s.primitiveName),y=n.numericHash(JSON.stringify(e)+h).toString();let g=s.stepY,d=null,S=1;return a.shiftOddRows&&(g*=2,d=function(e){return e?2*e:0},S=.5),l.push({type:"fill",templateHash:y,materialHash:p?T(y,i,m,o):y,cim:e,materialOverrides:m,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:W(s.primitiveName,i,"StepY",o,g,d),scaleX:S,angle:W(s.primitiveName,i,"GridAngle",o,s.gridAngle),offsetX:W(s.primitiveName,i,"OffsetX",o,f.getValue(s.offsetX)),offsetY:W(s.primitiveName,i,"OffsetY",o,f.getValue(s.offsetY)),url:u}),!0}function z(e,t,i,r,l,a,s,c,m){var u;const p=e.primitiveName,h=f.getValue(e.size);let y=f.getValue(e.scaleX);const g=f.getValue(e.rotation),d=f.getValue(e.offsetX),S=f.getValue(e.offsetY),C=e.tintColor?f.fromCIMColor(e.tintColor):{r:255,g:255,b:255,a:1},b=n.numericHash(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[v,N]=G(r,p),k=n.numericHash(JSON.stringify(e)+N).toString(),O=null!=(u=e.anchorPoint)?u:{x:0,y:0};if("width"in e){const t=e.width;let i=1;const r=a.getResource(e.url);o.isSome(r)&&(i=r.width/r.height),y/=i*(h/t)}s.push({type:"marker",templateHash:k,materialHash:v?()=>b:b,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:W(p,i,"Size",l,h),scaleX:W(p,i,"ScaleX",l,y),rotation:W(p,i,"Rotation",l,g),offsetX:W(p,i,"OffsetX",l,d),offsetY:W(p,i,"OffsetY",l,S),color:W(p,i,"TintColor",l,C,E),anchorPoint:{x:O.x,y:-O.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:m,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function J(e,t,i,r,o,l,n,a,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}for(const u of f)if(u){const f=u.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":Y(e,t,u,r,i,o,l,n,a,s,m,c);break;case"CIMTextSymbol":V(e,t,u,i,r,o,l,a,s,m)}}}function V(e,t,i,r,o,l,a,c,m,u){const p=[];s.OverrideHelper.findApplicableOverrides(i,o,p);const h=i.geometry;if(!("x"in h)||!("y"in h))return;const y=i.symbol,b=C(y),v=S(y.fontStyleName),N=f.toKebabCase(y.fontFamilyName);y.font={family:N,decoration:b,...v};const k=e.frame,O=h.x-.5*(k.xmin+k.xmax),M=h.y-.5*(k.ymin+k.ymax),I=e.size/u,H=e.primitiveName,P=f.getValue(y.height)*I,L=f.getValue(y.angle),x=(f.getValue(y.offsetX)+O)*I,w=(f.getValue(y.offsetY)+M)*I,X=f.fromCIMColor(s.CIMSymbolHelper.getFillColor(y));let z=f.fromCIMColor(s.CIMSymbolHelper.getStrokeColor(y)),J=s.CIMSymbolHelper.getStrokeWidth(y);J||(z=f.fromCIMColor(s.CIMSymbolHelper.getFillColor(y.haloSymbol)),J=y.haloSize*I);const[V,Y]=G(o,H),R=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),A=n.numericHash(JSON.stringify(i)+R+Y).toString(),F=W(i.primitiveName,r,"TextString",l,i.textString,f._adjustTextCase,y.textCase),{fontStyleName:$}=y,E=N+($?"-"+$.toLowerCase():"-regular"),T=E;a.push({type:"text",templateHash:A,materialHash:V||"function"==typeof F||F.match(/\[(.*?)\]/)?(e,t,i)=>T+"-"+f.evaluateValueOrFunction(F,e,t,i):T+"-"+n.numericHash(F),cim:y,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:c,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:E,decoration:b,weight:W(H,r,"Weight",l,v.weight),style:W(H,r,"Size",l,v.style),size:W(H,r,"Size",l,P),angle:W(H,r,"Rotation",l,L),offsetX:W(H,r,"OffsetX",l,x),offsetY:W(H,r,"OffsetY",l,w),horizontalAlignment:g(y.horizontalAlignment),verticalAlignment:d(y.verticalAlignment),text:F,color:X,outlineColor:z,outlineSize:J,referenceSize:m,sizeRatio:1,markerPlacement:e.markerPlacement})}function Y(e,t,i,r,o,l,a,u,p,h,y,g){const d=i.symbol,S=d.symbolLayers;if(!S)return;if(g)return void A(e,t,i,o,r,l,a,u,p,h,y);let C=S.length;if(U(S))return void R(e,i,S,r,o,l,a,p,h,y);const b=m.CIMEffectHelper.applyEffects(d.effects,i.geometry);if(b)for(;C--;){const g=S[C];if(g&&!1!==g.enable)switch(g.type){case"CIMSolidFill":case"CIMSolidStroke":{var v;const u=m.CIMEffectHelper.applyEffects(g.effects,b),d=c.getExtent(u);if(!d)continue;const[S,C,N]=c.getSDFMetrics(d,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),k="CIMSolidFill"===g.type,O={type:"sdf",geom:u,asFill:k},M=e.primitiveName,I=null!=(v=f.getValue(e.size))?v:10,H=f.getValue(e.rotation),P=f.getValue(e.offsetX),L=f.getValue(e.offsetY),x=g.path,w=g.primitiveName,X=k?f.fromCIMColor(s.CIMSymbolHelper.getFillColor(g)):f.fromCIMColor(s.CIMSymbolHelper.getStrokeColor(g)),z=k?{r:0,g:0,b:0,a:0}:f.fromCIMColor(s.CIMSymbolHelper.getStrokeColor(g)),J=s.CIMSymbolHelper.getStrokeWidth(g);if(!k&&!J)break;let V=!1,Y="";for(const e of r)e.primitiveName!==w&&e.primitiveName!==M||(void 0!==e.value?Y+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(V=!0));const R=JSON.stringify({...e,markerGraphics:null}),A=n.numericHash(JSON.stringify(O)+x).toString(),F={type:"marker",templateHash:n.numericHash(JSON.stringify(i)+JSON.stringify(g)+R+Y).toString(),materialHash:V?()=>A:A,cim:O,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:C,y:N},isAbsoluteAnchorPoint:!1,size:W(e.primitiveName,o,"Size",l,I),rotation:W(e.primitiveName,o,"Rotation",l,H),offsetX:W(e.primitiveName,o,"OffsetX",l,P),offsetY:W(e.primitiveName,o,"OffsetY",l,L),scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:S,color:W(w,o,"Color",l,X,E),outlineColor:W(w,o,"Color",l,z,E),outlineWidth:W(w,o,"Width",l,J),markerPlacement:e.markerPlacement,path:x};a.push(F);break}default:A(e,t,i,o,r,l,a,u,p,h,y)}}}function R(e,t,i,r,o,l,a,m,u,p){const h=t.geometry,y=i[0],g=i[1],d=c.getExtent(h);if(!d)return;const[S,C,b]=c.getSDFMetrics(d,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),v={type:"sdf",geom:h,asFill:!0},N=e.primitiveName,k=f.getValue(e.size),O=f.getValue(e.rotation),M=f.getValue(e.offsetX),I=f.getValue(e.offsetY),H=g.path,P=g.primitiveName,L=y.primitiveName,x=f.fromCIMColor(s.CIMSymbolHelper.getFillColor(g)),w=f.fromCIMColor(s.CIMSymbolHelper.getStrokeColor(y)),X=s.CIMSymbolHelper.getStrokeWidth(y);let z=!1,J="";for(const n of r)n.primitiveName!==P&&n.primitiveName!==L&&n.primitiveName!==N||(void 0!==n.value?J+=`-${n.primitiveName}-${n.propertyName}-${JSON.stringify(n.value)}`:n.valueExpressionInfo&&(z=!0));const V=JSON.stringify({...e,markerGraphics:null}),Y=n.numericHash(JSON.stringify(v)+H).toString(),R={type:"marker",templateHash:n.numericHash(JSON.stringify(t)+JSON.stringify(g)+JSON.stringify(y)+V+J).toString(),materialHash:z?()=>Y:Y,cim:v,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:m,anchorPoint:{x:C,y:b},isAbsoluteAnchorPoint:!1,size:W(e.primitiveName,o,"Size",l,k),rotation:W(e.primitiveName,o,"Rotation",l,O),offsetX:W(e.primitiveName,o,"OffsetX",l,M),offsetY:W(e.primitiveName,o,"OffsetY",l,I),scaleX:1,frameHeight:p,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:S,color:W(P,o,"Color",l,x,E),outlineColor:W(L,o,"Color",l,w,E),outlineWidth:W(L,o,"Width",l,X),markerPlacement:e.markerPlacement,path:H};a.push(R)}function A(e,t,i,r,o,a,c,m,u,p,h){const y=F(e,i);let g=[];const d=["Rotation","OffsetX","OffsetY"];g=o.filter((t=>t.primitiveName!==e.primitiveName||-1===d.indexOf(t.propertyName)));let S="";for(const l of o)void 0!==l.value&&(S+=`-${l.primitiveName}-${l.propertyName}-${JSON.stringify(l.value)}`);const[C,b,v]=s.CIMSymbolHelper.getTextureAnchor(y,m),N=e.primitiveName,k=f.getValue(e.rotation),O=f.getValue(e.offsetX),M=f.getValue(e.offsetY),I=n.numericHash(JSON.stringify(y)+S).toString(),H={type:"marker",templateHash:I,materialHash:0===g.length?I:T(I,r,g,a),cim:y,materialOverrides:g,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:C,y:b},isAbsoluteAnchorPoint:!1,size:e.size,rotation:W(N,r,"Rotation",a,k),offsetX:W(N,r,"OffsetX",a,O),offsetY:W(N,r,"OffsetY",a,M),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:v/l.pt2px(e.size),markerPlacement:e.markerPlacement};c.push(H)}function F(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}function $(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function E(e){if(!e||0===e.length)return null;const t=new i(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function W(e,t,i,r,o,l,n){const s=t[e];if(s){const e=s[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return l?l.call(null,e,n):e;if(null!=e&&e instanceof a.ArcadeExpression)return(t,i,a)=>{let s=u(e,t,{$view:a},r.geometryType,i);return null!==s&&l&&(s=l.call(null,s,n)),null!==s?s:o}}return o}function T(e,t,i,r){for(const o of i){if(o.valueExpressionInfo){const e=t[o.primitiveName]&&t[o.primitiveName][o.propertyName];e instanceof a.ArcadeExpression&&(o.fn=(t,i,o)=>u(e,t,{$view:o},r.geometryType,i))}}return(t,r,o)=>{for(const e of i)e.fn&&(e.value=e.fn(t,r,o));return n.numericHash(e+s.OverrideHelper.buildOverrideKey(i)).toString()}}function D(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return s.OverrideHelper.applyOverrides(i,t),i}function G(e,t){let i=!1,r="";for(const o of e)o.primitiveName===t&&(void 0!==o.value?r+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`:o.valueExpressionInfo&&(i=!0));return[i,r]}function j(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const r=e.symbolLayers;if(!r)return;for(const e of r)switch(e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const r=e.markerGraphics;if(!r)continue;for(const e of r)if(e){const r=e.symbol;r&&j(r,t,i)}}}}}}const U=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;e.analyzeCIMResource=D,e.analyzeCIMSymbol=N,Object.defineProperty(e,"__esModule",{value:!0})}));
