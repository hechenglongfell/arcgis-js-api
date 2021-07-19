/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/Accessor","../../core/timeUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,c,p,i,u,a){"use strict";let l=function(o){function t(){var e;return(e=o.apply(this,arguments)||this).color=new r([255,0,0,.7]),e.value=s.convertTime(4,"hours","milliseconds"),e.minValue=0,e.maxValue=s.convertTime(8,"hours","milliseconds"),e}return e._inheritsLoose(t,o),t}(t);return o.__decorate([c.property({type:r})],l.prototype,"color",void 0),o.__decorate([c.property()],l.prototype,"value",void 0),o.__decorate([c.property()],l.prototype,"minValue",void 0),o.__decorate([c.property()],l.prototype,"maxValue",void 0),l=o.__decorate([a.subclass("esri.widgets.ShadowAccumulation.ThresholdOptions")],l),l}));
