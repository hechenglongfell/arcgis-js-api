/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./ActionBase"],(function(e,t,i,r,s,o,c,a){"use strict";var l;let n=l=function(t){function i(e){var i;return(i=t.call(this,e)||this).image=null,i.type="toggle",i.value=!1,i}return e._inheritsLoose(i,t),i.prototype.clone=function(){return new l({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})},i}(a);return t.__decorate([i.property()],n.prototype,"image",void 0),t.__decorate([i.property()],n.prototype,"value",void 0),n=l=t.__decorate([c.subclass("esri.support.Action.ActionToggle")],n),n}));
