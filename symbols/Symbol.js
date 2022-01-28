/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/jsonMap","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,l,s,i,n,c,p,a){"use strict";const u=new t.JSONMap({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let y=0,S=function(r){function o(e){var o;return(o=r.call(this,e)||this).id="sym"+y++,o.type=null,o}e._inheritsLoose(o,r);var t=o.prototype;return t.readColor=function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},t.collectRequiredFields=function(){var r=e._asyncToGenerator((function*(e,r){}));function o(e,o){return r.apply(this,arguments)}return o}(),t.hash=function(){return JSON.stringify(this.toJSON())},t.clone=function(){},e._createClass(o,[{key:"color",set:function(e){this._set("color",e)}}]),o}(l.JSONSupport);r.__decorate([s.property({type:u.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:u.write}}})],S.prototype,"type",void 0),r.__decorate([s.property({type:o,value:new o([0,0,0,1]),json:{write:{allowNull:!0}}})],S.prototype,"color",null),r.__decorate([p.reader("color")],S.prototype,"readColor",null),S=r.__decorate([a.subclass("esri.symbols.Symbol")],S);return S}));
