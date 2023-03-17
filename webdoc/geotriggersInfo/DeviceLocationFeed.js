/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./ExpressionInfo"],(function(e,o,r,t,s,c,i,n,p,a){"use strict";const l=new t.JSONMap({deviceLocation:"device-location"});let u=function(o){function r(e){var r;return(r=o.call(this,e)||this).filterExpression=null,r.type="device-location",r}return e._inheritsLoose(r,o),r}(r.ClonableMixin(s.JSONSupport));o.__decorate([c.property({type:a,json:{write:!0}})],u.prototype,"filterExpression",void 0),o.__decorate([c.property({type:l.apiValues,readOnly:!0,json:{type:l.jsonValues,read:l.read,write:l.write}})],u.prototype,"type",void 0),u=o.__decorate([p.subclass("esri.webdoc.geotriggersInfo.DeviceLocationFeed")],u);return u}));
