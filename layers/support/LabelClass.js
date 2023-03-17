/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../symbols","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./LabelExpressionInfo","./labelUtils","./layerUtils","../../symbols/support/defaults","../../symbols/support/jsonUtils"],(function(e,r,t,o,n,l,i,a,s,c,p,b,u,d,y,w,v){"use strict";var S;const f=new o.JSONMap({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function m(e,r,t){return{enabled:!y.isSceneServiceLayer(t?.layer)}}function L(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function h(e){return"map-image"===e?.type}function g(e){return!!h(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function x(e){return L(e)||g(e?.layer)}let P=S=function(r){function t(e){var t;return(t=r.call(this,e)||this).type="label",t.name=null,t.allowOverrun=!1,t.deconflictionStrategy="static",t.labelExpression=null,t.labelExpressionInfo=null,t.labelPlacement=null,t.labelPosition="curved",t.maxScale=0,t.minScale=0,t.repeatLabel=!0,t.repeatLabelDistance=null,t.symbol=w.defaultTextSymbol2D,t.useCodedValues=void 0,t.where=null,t}e._inheritsLoose(t,r),t.evaluateWhere=function(e,r){const t=(e,r,t)=>{switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),n=o[3],l=t(r[o[4]],o[5],o[6]);switch(n){case"AND":return e&&l;case"OR":return e||l}}return!1}catch(o){console.log("Error.: can't parse = "+e)}};var o=t.prototype;return o.readLabelExpression=function(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e},o.writeLabelExpression=function(e,r,t){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=d.templateStringToSql(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=d.getSingleFieldArcadeExpression(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[t]=e)},o.writeLabelExpressionInfo=function(e,r,t,o){if(null==e&&null!=this.labelExpression&&L(o))e=new u({expression:this.getLabelExpressionArcade()});else if(!e)return;const n=e.toJSON(o);n.expression&&(r[t]=n)},o.writeMaxScale=function(e,r){(e||this.minScale)&&(r.maxScale=e)},o.writeMinScale=function(e,r){(e||this.maxScale)&&(r.minScale=e)},o.getLabelExpression=function(){return d.getLabelExpression(this)},o.getLabelExpressionArcade=function(){return d.getLabelExpressionArcade(this)},o.getLabelExpressionSingleField=function(){return d.getLabelExpressionSingleField(this)},o.hash=function(){return JSON.stringify(this)},o.clone=function(){return new S({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:l.clone(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:l.clone(this.symbol),where:this.where,useCodedValues:this.useCodedValues})},t}(n.JSONSupport);r.__decorate([a.property({type:String,json:{write:!0}})],P.prototype,"name",void 0),r.__decorate([a.property({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:m}}}}})],P.prototype,"allowOverrun",void 0),r.__decorate([a.property({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:m}}}}})],P.prototype,"deconflictionStrategy",void 0),r.__decorate([a.property({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&"service"===t?.origin&&g(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],P.prototype,"labelExpression",void 0),r.__decorate([c.reader("labelExpression")],P.prototype,"readLabelExpression",null),r.__decorate([b.writer("labelExpression")],P.prototype,"writeLabelExpression",null),r.__decorate([a.property({type:u,json:{write:{overridePolicy:(e,r,t)=>x(t)?{allowNull:!0}:{enabled:!1}}}})],P.prototype,"labelExpressionInfo",void 0),r.__decorate([b.writer("labelExpressionInfo")],P.prototype,"writeLabelExpressionInfo",null),r.__decorate([a.property({type:f.apiValues,json:{type:f.jsonValues,read:f.read,write:f.write}})],P.prototype,"labelPlacement",void 0),r.__decorate([a.property({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],P.prototype,"labelPosition",void 0),r.__decorate([a.property({type:Number})],P.prototype,"maxScale",void 0),r.__decorate([b.writer("maxScale")],P.prototype,"writeMaxScale",null),r.__decorate([a.property({type:Number})],P.prototype,"minScale",void 0),r.__decorate([b.writer("minScale")],P.prototype,"writeMinScale",null),r.__decorate([a.property({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:m}}}}})],P.prototype,"repeatLabel",void 0),r.__decorate([a.property({type:Number,cast:i.toPt,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:m}}}}})],P.prototype,"repeatLabelDistance",void 0),r.__decorate([a.property({types:t.symbolTypesLabel,json:{origins:{"web-scene":{types:t.symbolTypesLabel3D,write:v.writeLabelSymbol,default:null}},write:v.writeLabelSymbol,default:null}})],P.prototype,"symbol",void 0),r.__decorate([a.property({type:Boolean,json:{write:!0}})],P.prototype,"useCodedValues",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],P.prototype,"where",void 0),P=S=r.__decorate([p.subclass("esri.layers.support.LabelClass")],P);return P}));
