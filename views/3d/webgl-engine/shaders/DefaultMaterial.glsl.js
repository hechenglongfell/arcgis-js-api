/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/mat4f64","../core/shaderLibrary/ForwardLinearDepth.glsl","../core/shaderLibrary/Offset.glsl","../core/shaderLibrary/ShaderOutput","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../core/shaderLibrary/attributes/NormalAttribute.glsl","../core/shaderLibrary/attributes/PositionAttribute.glsl","../core/shaderLibrary/attributes/SymbolColor.glsl","../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../core/shaderLibrary/attributes/VertexColor.glsl","../core/shaderLibrary/attributes/VertexNormal.glsl","../core/shaderLibrary/attributes/VerticalOffset.glsl","../core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../core/shaderLibrary/shading/ComputeNormalTexture.glsl","../core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../core/shaderLibrary/shading/MainLighting.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/shading/Normals.glsl","../core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/shading/TextureTransformUV.glsl","../core/shaderLibrary/shading/VisualVariables.glsl","../core/shaderLibrary/util/AlphaCutoff","../core/shaderLibrary/util/AlphaDiscard.glsl","../core/shaderLibrary/util/MixExternalColor.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderModules/Float3PassUniform","../core/shaderModules/Float4PassUniform","../core/shaderModules/FloatPassUniform","../core/shaderModules/interfaces","../core/shaderModules/Matrix4PassUniform","../core/shaderModules/ShaderBuilder","../core/shaderModules/Texture2DPassUniform","../lib/TransparencyPassType","../lib/VertexAttribute","../../../../chunks/DefaultMaterial.glsl"],(function(r,e,a,s,l,i,t,o,d,h,c,b,u,g,n,y,L,f,m,M,P,x,p,T,A,S,V,C,D,U,O,F,N,v,w,B,E,R,k,j,I,q){"use strict";r.build=q.build,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
