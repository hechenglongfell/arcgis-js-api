/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./mixins/MediaInfo","./support/ImageMediaInfoValue"],(function(e,r,t,o,s,n,a,p,i){"use strict";var l;let c=l=function(r){function t(e){var t;return(t=r.call(this,e)||this).refreshInterval=null,t.type="image",t.value=null,t}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new l({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})},t}(p);return r.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"refreshInterval",void 0),r.__decorate([t.property({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),r.__decorate([t.property({type:i,json:{write:!0}})],c.prototype,"value",void 0),c=l=r.__decorate([a.subclass("esri.popup.content.ImageMediaInfo")],c),c}));
