/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../vectorTiles/style/StyleDefinition","../definitions","../enums","../number","./WGLBrush","../../../../webgl/enums"],(function(e,t,i,n,a,r,o,s,l){"use strict";let u=function(e){function s(){var t;return(t=e.apply(this,arguments)||this)._programOptions={id:!1,pattern:!1,sdf:!1},t}t._inheritsLoose(s,e);var u=s.prototype;return u.dispose=function(){},u.drawMany=function(e,t){const{context:s,displayLevel:u,state:f,drawPhase:c,painter:T,pixelRatio:d,spriteMosaic:p,styleLayerUID:m,requestRender:_,allowDelayedRender:y}=e;if(!t.some((e=>e.layerData.get(m)?.lineIndexCount??!1)))return;const I=e.styleLayer,E=I.lineMaterial,g=T.vectorTilesMaterialManager,S=I.getPaintValue("line-translate",u),U=I.getPaintValue("line-translate-anchor",u),N=I.getPaintProperty("line-pattern"),P=void 0!==N,v=P&&N.isDataDriven;let M,D;if(P&&!v){const e=N.getValue(u);M=p.getMosaicItemPosition(e)}let L=!1;if(!P){const e=I.getPaintProperty("line-dasharray");if(D=void 0!==e,L=D&&e.isDataDriven,D&&!L){const t=e.getValue(u),i=I.getDashKey(t,I.getLayoutValue("line-cap",u));M=p.getMosaicItemPosition(i)}}const R=1/d,x=c===r.WGLDrawPhase.HITTEST,V=this._programOptions;V.id=x,V.pattern=P,V.sdf=D;const h=g.getMaterialProgram(s,E,V);if(y&&i.isSome(_)&&!h.compiled)return void _();if(s.useProgram(h),h.setUniformMatrix3fv("u_displayViewMat3",f.displayViewMat3),h.setUniformMatrix3fv("u_displayMat3",U===n.TranslateAnchor.VIEWPORT?f.displayMat3:f.displayViewMat3),h.setUniform2fv("u_lineTranslation",S),h.setUniform1f("u_depth",I.z),h.setUniform1f("u_antialiasing",R),x){const e=o.u32to4Xu8(m+1);h.setUniform4fv("u_id",e)}if(M&&i.isSome(M)){const{page:e}=M,t=p.getPageSize(e);i.isSome(t)&&(p.bind(s,l.TextureSamplingMode.LINEAR,e,a.VTL_TEXTURE_BINDING_UNIT_SPRITES),h.setUniform2fv("u_mosaicSize",t),h.setUniform1i("u_texture",a.VTL_TEXTURE_BINDING_UNIT_SPRITES))}let G=-1;for(const n of t){if(!n.layerData.has(m))continue;n.key.level!==G&&(G=n.key.level,E.setDataUniforms(h,u,I,G,p));const e=2**(u-G)/d;h.setUniform1f("u_zoomFactor",e);const t=n.layerData.get(m);if(!t.lineIndexCount)continue;t.prepareForRendering(s);const r=t.lineVertexArrayObject;if(!i.isNone(r)){if(s.bindVAO(r),h.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs),s.setStencilFunction(l.CompareFunction.EQUAL,n.stencilRef,255),v||L){const e=t.patternMap;if(!e)continue;for(const[t,n]of e){const e=p.getPageSize(t);i.isSome(e)&&(p.bind(s,l.TextureSamplingMode.LINEAR,t,a.VTL_TEXTURE_BINDING_UNIT_SPRITES),h.setUniform2fv("u_mosaicSize",e),h.setUniform1i("u_texture",a.VTL_TEXTURE_BINDING_UNIT_SPRITES),s.drawElements(l.PrimitiveType.TRIANGLES,n[1],l.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]))}}else s.drawElements(l.PrimitiveType.TRIANGLES,t.lineIndexCount,l.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t.lineIndexStart);n.triangleCount+=t.lineIndexCount/3}}},s}(s);e.WGLBrushVTLLine=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
