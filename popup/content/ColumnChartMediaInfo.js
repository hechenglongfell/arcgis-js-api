/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],(function(t,e,r,o,c,s,n,a){"use strict";var i;let l=i=function(e){function r(t){var r;return(r=e.call(this,t)||this).type="column-chart",r}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})},r}(n);e.__decorate([r.property({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:a.chartTypeKebabDict.write}})],l.prototype,"type",void 0),l=i=e.__decorate([s.subclass("esri.popup.content.ColumnChartMediaInfo")],l);return l}));
