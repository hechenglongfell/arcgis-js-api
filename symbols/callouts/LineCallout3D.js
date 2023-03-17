/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/lang","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Callout3D","../../chunks/LineCallout3DBorder","../support/materialUtils"],(function(e,r,o,t,s,c,l,n,i,p,a,u,d){"use strict";var y;let _=y=function(r){function l(e){var t;return(t=r.call(this,e)||this).type="line",t.color=new o([0,0,0,1]),t.size=c.px2pt(1),t.border=null,t}return e._inheritsLoose(l,r),l.prototype.clone=function(){return new y({color:t.clone(this.color),size:this.size,border:t.clone(this.border)})},e._createClass(l,[{key:"visible",get:function(){return this.size>0&&s.isSome(this.color)&&this.color.a>0}}]),l}(a);r.__decorate([i.enumeration({line:"line"},{readOnly:!0})],_.prototype,"type",void 0),r.__decorate([l.property(d.colorAndTransparencyProperty)],_.prototype,"color",void 0),r.__decorate([l.property(d.screenSizeProperty)],_.prototype,"size",void 0),r.__decorate([l.property({type:u.LineCallout3DBorder$1,json:{write:!0}})],_.prototype,"border",void 0),r.__decorate([l.property({readOnly:!0})],_.prototype,"visible",null),_=y=r.__decorate([p.subclass("esri.symbols.callouts.LineCallout3D")],_);return _}));
