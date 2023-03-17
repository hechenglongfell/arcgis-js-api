/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./FunctionWrapper","./ImmutableArray","./ImmutablePathArray","./ImmutablePointArray","./ArcadeDate","../geometry/Extent","../geometry/Geometry","../geometry/Multipoint","../geometry/Point","../geometry/Polygon","../geometry/Polyline","../chunks/datetime","../core/maybe","../core/number","../geometry/support/coordsUtils","../intl/locale","./featureset/support/shared","./ArcadeModule","./executionError","../chunks/languageUtils"],(function(e,t,a,o,r,i,u,n,s,l,m,y,c,g,p,f,d,b,A,D,S,R){"use strict";e.ImplicitResult=R.ImplicitResult,e.ImplicitResultE=R.ImplicitResultE,e.ReturnResult=R.ReturnResult,e.ReturnResultE=R.ReturnResultE,e.absRound=R.absRound,e.autoCastArrayOfPointsToMultiPoint=R.autoCastArrayOfPointsToMultiPoint,e.autoCastArrayOfPointsToPolygon=R.autoCastArrayOfPointsToPolygon,e.autoCastArrayOfPointsToPolyline=R.autoCastArrayOfPointsToPolyline,e.autoCastFeatureToGeometry=R.autoCastFeatureToGeometry,e.binaryOperator=R.binaryOperator,e.breakResult=R.breakResult,e.castAsJson=R.castAsJson,e.castAsJsonAsync=R.castAsJsonAsync,e.continueResult=R.continueResult,e.defaultTimeZone=R.defaultTimeZone,e.defaultUndefined=R.defaultUndefined,e.equalityTest=R.equalityTest,e.featureDomainCodeLookup=R.featureDomainCodeLookup,e.featureDomainValueLookup=R.featureDomainValueLookup,e.featureFullDomain=R.featureFullDomain,e.featureSchema=R.featureSchema,e.featureSubtypes=R.featureSubtypes,e.fixNullGeometry=R.fixNullGeometry,e.fixSpatialReference=R.fixSpatialReference,e.formatDate=R.formatDate,e.formatNumber=R.formatNumber,e.generateUUID=R.generateUUID,e.getDomain=R.getDomain,e.getDomainCode=R.getDomainCode,e.getDomainValue=R.getDomainValue,e.getType=R.getType,e.greaterThanLessThan=R.greaterThanLessThan,e.isArray=R.isArray,e.isBoolean=R.isBoolean,e.isDate=R.isDate,e.isFeature=R.isFeature,e.isFeatureSet=R.isFeatureSet,e.isFeatureSetCollection=R.isFeatureSetCollection,e.isFunctionParameter=R.isFunctionParameter,e.isImmutableArray=R.isImmutableArray,e.isInteger=R.isInteger,e.isJsDate=R.isJsDate,e.isModule=R.isModule,e.isNumber=R.isNumber,e.isObject=R.isObject,e.isSimpleType=R.isSimpleType,e.isString=R.isString,e.multiReplace=R.multiReplace,e.pcCheck=R.pcCheck,e.stableStringify=R.stableStringify,e.standardiseDateFormat=R.standardiseDateFormat,e.tick=R.tick,e.toBoolean=R.toBoolean,e.toDate=R.toDate,e.toNumber=R.toNumber,e.toNumberArray=R.toNumberArray,e.toString=R.toString,e.toStringArray=R.toStringArray,e.toStringExplicit=R.toStringExplicit,e.voidOperation=R.voidOperation,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
