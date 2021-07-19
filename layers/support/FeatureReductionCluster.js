/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../PopupTemplate","../../symbols","../../core/JSONSupport","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/subclass","./AggregateField","./commonProperties","./LabelClass"],(function(e,t,o,r,p,s,l,i,a,n,u,c,d,y,b){"use strict";var _;let f=_=function(t){function o(e){var o;return(o=t.call(this,e)||this).type="cluster",o.clusterRadius=l.toPt("80px"),o.clusterMinSize=l.toPt("12px"),o.clusterMaxSize=l.toPt("50px"),o.popupEnabled=!0,o.popupTemplate=null,o.symbol=null,o.labelingInfo=null,o.labelsVisible=!0,o.fields=null,o}return e._inheritsLoose(o,t),o.prototype.clone=function(){return new _({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:s.clone(this.labelingInfo),labelsVisible:this.labelsVisible,fields:s.clone(this.fields),popupEnabled:this.popupEnabled,popupTemplate:s.clone(this.popupTemplate)})},o}(p.JSONSupport);return t.__decorate([i.property({type:["cluster"],readOnly:!0,json:{write:!0}})],f.prototype,"type",void 0),t.__decorate([i.property({type:Number,cast:e=>"auto"===e?e:l.toPt(e),json:{write:!0}})],f.prototype,"clusterRadius",void 0),t.__decorate([i.property({type:Number,cast:l.toPt,json:{write:!0}})],f.prototype,"clusterMinSize",void 0),t.__decorate([i.property({type:Number,cast:l.toPt,json:{write:!0}})],f.prototype,"clusterMaxSize",void 0),t.__decorate([i.property(y.popupEnabled)],f.prototype,"popupEnabled",void 0),t.__decorate([i.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],f.prototype,"popupTemplate",void 0),t.__decorate([i.property({types:r.symbolTypesCluster})],f.prototype,"symbol",void 0),t.__decorate([i.property({type:[b],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],f.prototype,"labelingInfo",void 0),t.__decorate([i.property(y.labelsVisible)],f.prototype,"labelsVisible",void 0),t.__decorate([i.property({type:[d],json:{write:!0}})],f.prototype,"fields",void 0),f=_=t.__decorate([c.subclass("esri.layers.support.FeatureReductionCluster")],f),f}));
