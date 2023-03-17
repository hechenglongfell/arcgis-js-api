/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(_){"use strict";var E,T,R,A,N,S,C,O,I,D,L,P,M,U,e,G,B,F,r,H,t,o;_.ClearBufferBit=void 0,(E=_.ClearBufferBit||(_.ClearBufferBit={}))[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",_.PrimitiveType=void 0,(T=_.PrimitiveType||(_.PrimitiveType={}))[T.POINTS=0]="POINTS",T[T.LINES=1]="LINES",T[T.LINE_LOOP=2]="LINE_LOOP",T[T.LINE_STRIP=3]="LINE_STRIP",T[T.TRIANGLES=4]="TRIANGLES",T[T.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",T[T.TRIANGLE_FAN=6]="TRIANGLE_FAN",_.BlendFactor=void 0,(R=_.BlendFactor||(_.BlendFactor={}))[R.ZERO=0]="ZERO",R[R.ONE=1]="ONE",R[R.SRC_COLOR=768]="SRC_COLOR",R[R.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",R[R.SRC_ALPHA=770]="SRC_ALPHA",R[R.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",R[R.DST_ALPHA=772]="DST_ALPHA",R[R.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",R[R.DST_COLOR=774]="DST_COLOR",R[R.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",R[R.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",R[R.CONSTANT_COLOR=32769]="CONSTANT_COLOR",R[R.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",R[R.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",R[R.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",_.BlendOperation=void 0,(A=_.BlendOperation||(_.BlendOperation={}))[A.ADD=32774]="ADD",A[A.SUBTRACT=32778]="SUBTRACT",A[A.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT",_.BufferType=void 0,(N=_.BufferType||(_.BufferType={}))[N.ARRAY_BUFFER=34962]="ARRAY_BUFFER",N[N.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",N[N.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",N[N.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",N[N.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",N[N.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",N[N.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_.Face=void 0,(S=_.Face||(_.Face={}))[S.FRONT=1028]="FRONT",S[S.BACK=1029]="BACK",S[S.FRONT_AND_BACK=1032]="FRONT_AND_BACK",_.CullMode=void 0,(C=_.CullMode||(_.CullMode={}))[C.CW=2304]="CW",C[C.CCW=2305]="CCW",_.DataType=void 0,(O=_.DataType||(_.DataType={}))[O.BYTE=5120]="BYTE",O[O.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",O[O.SHORT=5122]="SHORT",O[O.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",O[O.INT=5124]="INT",O[O.UNSIGNED_INT=5125]="UNSIGNED_INT",O[O.FLOAT=5126]="FLOAT",_.CompareFunction=void 0,(I=_.CompareFunction||(_.CompareFunction={}))[I.NEVER=512]="NEVER",I[I.LESS=513]="LESS",I[I.EQUAL=514]="EQUAL",I[I.LEQUAL=515]="LEQUAL",I[I.GREATER=516]="GREATER",I[I.NOTEQUAL=517]="NOTEQUAL",I[I.GEQUAL=518]="GEQUAL",I[I.ALWAYS=519]="ALWAYS",_.StencilOperation=void 0,(D=_.StencilOperation||(_.StencilOperation={}))[D.ZERO=0]="ZERO",D[D.KEEP=7680]="KEEP",D[D.REPLACE=7681]="REPLACE",D[D.INCR=7682]="INCR",D[D.DECR=7683]="DECR",D[D.INVERT=5386]="INVERT",D[D.INCR_WRAP=34055]="INCR_WRAP",D[D.DECR_WRAP=34056]="DECR_WRAP",_.TextureSamplingMode=void 0,(L=_.TextureSamplingMode||(_.TextureSamplingMode={}))[L.NEAREST=9728]="NEAREST",L[L.LINEAR=9729]="LINEAR",L[L.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",L[L.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",L[L.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",L[L.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR",_.TextureWrapMode=void 0,(P=_.TextureWrapMode||(_.TextureWrapMode={}))[P.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",P[P.REPEAT=10497]="REPEAT",P[P.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",_.TextureType=void 0,(M=_.TextureType||(_.TextureType={}))[M.TEXTURE_2D=3553]="TEXTURE_2D",M[M.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",M[M.TEXTURE_3D=32879]="TEXTURE_3D",M[M.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",M[M.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",M[M.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",M[M.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",M[M.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",M[M.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",M[M.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",_.PixelFormat=void 0,(U=_.PixelFormat||(_.PixelFormat={}))[U.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",U[U.DEPTH_STENCIL=34041]="DEPTH_STENCIL",U[U.ALPHA=6406]="ALPHA",U[U.RGB=6407]="RGB",U[U.RGBA=6408]="RGBA",U[U.LUMINANCE=6409]="LUMINANCE",U[U.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",U[U.RED=6403]="RED",U[U.RG=33319]="RG",U[U.RED_INTEGER=36244]="RED_INTEGER",U[U.RG_INTEGER=33320]="RG_INTEGER",U[U.RGB_INTEGER=36248]="RGB_INTEGER",U[U.RGBA_INTEGER=36249]="RGBA_INTEGER",_.SizedPixelFormat=void 0,(e=_.SizedPixelFormat||(_.SizedPixelFormat={}))[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI",_.PixelType=void 0,(G=_.PixelType||(_.PixelType={}))[G.FLOAT=5126]="FLOAT",G[G.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",G[G.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",G[G.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",G[G.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",G[G.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",G[G.BYTE=5120]="BYTE",G[G.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",G[G.SHORT=5122]="SHORT",G[G.UNSIGNED_INT=5125]="UNSIGNED_INT",G[G.INT=5124]="INT",G[G.HALF_FLOAT=5131]="HALF_FLOAT",G[G.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",G[G.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",G[G.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",G[G.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",_.RenderbufferFormat=void 0,(B=_.RenderbufferFormat||(_.RenderbufferFormat={}))[B.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",B[B.STENCIL_INDEX8=36168]="STENCIL_INDEX8",B[B.DEPTH_STENCIL=34041]="DEPTH_STENCIL",B[B.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",B[B.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",B[B.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",B[B.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8",_.Usage=void 0,(F=_.Usage||(_.Usage={}))[F.STATIC_DRAW=35044]="STATIC_DRAW",F[F.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",F[F.STREAM_DRAW=35040]="STREAM_DRAW",F[F.STATIC_READ=35045]="STATIC_READ",F[F.DYNAMIC_READ=35049]="DYNAMIC_READ",F[F.STREAM_READ=35041]="STREAM_READ",F[F.STATIC_COPY=35046]="STATIC_COPY",F[F.DYNAMIC_COPY=35050]="DYNAMIC_COPY",F[F.STREAM_COPY=35042]="STREAM_COPY",_.ShaderType=void 0,(r=_.ShaderType||(_.ShaderType={}))[r.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",r[r.VERTEX_SHADER=35633]="VERTEX_SHADER",_.FramebufferTarget=void 0,(H=_.FramebufferTarget||(_.FramebufferTarget={}))[H.FRAMEBUFFER=36160]="FRAMEBUFFER",H[H.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",H[H.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER",_.TargetType=void 0,(t=_.TargetType||(_.TargetType={}))[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP",_.DepthStencilTargetType=void 0,(o=_.DepthStencilTargetType||(_.DepthStencilTargetType={}))[o.NONE=0]="NONE",o[o.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",o[o.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",o[o.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",o[o.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE";const a=33984;var i,n;_.ResourceType=void 0,(i=_.ResourceType||(_.ResourceType={}))[i.Texture=0]="Texture",i[i.BufferObject=1]="BufferObject",i[i.VertexArrayObject=2]="VertexArrayObject",i[i.Shader=3]="Shader",i[i.Program=4]="Program",i[i.FramebufferObject=5]="FramebufferObject",i[i.Renderbuffer=6]="Renderbuffer",i[i.Sync=7]="Sync",i[i.COUNT=8]="COUNT",_.ColorAttachment=void 0,(n=_.ColorAttachment||(_.ColorAttachment={}))[n.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",n[n.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",n[n.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",n[n.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",n[n.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",n[n.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",n[n.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",n[n.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",n[n.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",n[n.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",n[n.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",n[n.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",n[n.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",n[n.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",n[n.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",n[n.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15";const d=33306;var Y,X,p,V,c,u,y;_.CompressedTextureFormat=void 0,(Y=_.CompressedTextureFormat||(_.CompressedTextureFormat={}))[Y.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",Y[Y.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",Y[Y.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",Y[Y.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",Y[Y.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",Y[Y.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",Y[Y.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",Y[Y.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",Y[Y.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",Y[Y.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",Y[Y.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",Y[Y.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",Y[Y.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",Y[Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",_.UniformType=void 0,(X=_.UniformType||(_.UniformType={}))[X.FLOAT=5126]="FLOAT",X[X.FLOAT_VEC2=35664]="FLOAT_VEC2",X[X.FLOAT_VEC3=35665]="FLOAT_VEC3",X[X.FLOAT_VEC4=35666]="FLOAT_VEC4",X[X.INT=5124]="INT",X[X.INT_VEC2=35667]="INT_VEC2",X[X.INT_VEC3=35668]="INT_VEC3",X[X.INT_VEC4=35669]="INT_VEC4",X[X.BOOL=35670]="BOOL",X[X.BOOL_VEC2=35671]="BOOL_VEC2",X[X.BOOL_VEC3=35672]="BOOL_VEC3",X[X.BOOL_VEC4=35673]="BOOL_VEC4",X[X.FLOAT_MAT2=35674]="FLOAT_MAT2",X[X.FLOAT_MAT3=35675]="FLOAT_MAT3",X[X.FLOAT_MAT4=35676]="FLOAT_MAT4",X[X.SAMPLER_2D=35678]="SAMPLER_2D",X[X.SAMPLER_CUBE=35680]="SAMPLER_CUBE",X[X.UNSIGNED_INT=5125]="UNSIGNED_INT",X[X.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",X[X.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",X[X.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",X[X.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",X[X.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",X[X.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",X[X.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",X[X.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",X[X.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",X[X.SAMPLER_3D=35679]="SAMPLER_3D",X[X.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",X[X.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",X[X.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",X[X.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",X[X.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",X[X.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",X[X.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",X[X.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",X[X.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",X[X.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",X[X.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",X[X.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY",_.SyncParameter=void 0,(p=_.SyncParameter||(_.SyncParameter={}))[p.OBJECT_TYPE=37138]="OBJECT_TYPE",p[p.SYNC_CONDITION=37139]="SYNC_CONDITION",p[p.SYNC_STATUS=37140]="SYNC_STATUS",p[p.SYNC_FLAGS=37141]="SYNC_FLAGS",_.SyncStatus=void 0,(V=_.SyncStatus||(_.SyncStatus={}))[V.UNSIGNALED=37144]="UNSIGNALED",V[V.SIGNALED=37145]="SIGNALED",_.ClientWaitSyncStatus=void 0,(c=_.ClientWaitSyncStatus||(_.ClientWaitSyncStatus={}))[c.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",c[c.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",c[c.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",c[c.WAIT_FAILED=37149]="WAIT_FAILED",_.SyncCondition=void 0,(u=_.SyncCondition||(_.SyncCondition={}))[u.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE",_.SyncFlag=void 0,(y=_.SyncFlag||(_.SyncFlag={}))[y.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT",_.BASE_TEXTURE_UNIT=a,_.DepthStencilAttachment=d,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})}));
