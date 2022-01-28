/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/string","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../layers/support/fieldUtils","./Symbol"],(function(e,r,t,o,a,s,c,n,i,p,l,u){"use strict";var d;let y=d=function(r){function a(e){var t;return(t=r.call(this,e)||this).data=null,t.type="cim",t}e._inheritsLoose(a,r);var s=a.prototype;return s.readData=function(e,r){return r},s.writeData=function(e,r){if(e)for(const t in e)r[t]=e[t]},s.collectRequiredFields=function(){var r=e._asyncToGenerator((function*(e,r){if("CIMSymbolReference"===this.data.type){const t=this.data.primitiveOverrides;if(t){const o=t.map((t=>{const o=t.valueExpressionInfo;return l.collectArcadeFieldNames(e,r,o.expression)}));yield Promise.all(o)}}}));function t(e,t){return r.apply(this,arguments)}return t}(),s.clone=function(){return new d({data:t.clone(this.data)})},s.hash=function(){return o.numericHash(JSON.stringify(this.data)).toString()},a}(u);r.__decorate([a.property({json:{write:!1}})],y.prototype,"color",void 0),r.__decorate([a.property({json:{write:!0}})],y.prototype,"data",void 0),r.__decorate([n.reader("data",["symbol"])],y.prototype,"readData",null),r.__decorate([p.writer("data",{})],y.prototype,"writeData",null),r.__decorate([c.enumeration({CIMSymbolReference:"cim"},{readOnly:!0})],y.prototype,"type",void 0),y=d=r.__decorate([i.subclass("esri.symbols.CIMSymbol")],y);return y}));
