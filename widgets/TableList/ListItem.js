/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/HandleOwner","../../core/Identifiable","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../support/actions/ActionBase","../../support/actions/ActionButton","../../support/actions/ActionSlider","../../support/actions/ActionToggle"],(function(t,e,o,r,i,n,s,a,c,l,p,u,d,h,y){"use strict";var _;const b=r.ofType({key:"type",defaultKeyValue:"button",base:u,typeMap:{button:d,toggle:y,slider:h}}),f=r.ofType(b),g="layer",S="esri.widgets.TableList.ListItem";let v=_=function(e){function o(t){var o;return(o=e.call(this,t)||this).actionsSections=new f,o.actionsOpen=!1,o.checkPublishStatusEnabled=!1,o.hidden=!1,o.layer=null,o.listItemCreatedFunction=null,o}t._inheritsLoose(o,e);var r=o.prototype;return r.initialize=function(){if(this.handles.add(s.watch((()=>this.layer),(t=>this._watchLayerProperties(t)),s.initial)),"function"==typeof this.listItemCreatedFunction){const t={item:this};this.listItemCreatedFunction.call(null,t)}},r.clone=function(){return new _({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,title:this.title})},r._watchLayerProperties=function(t){this.handles&&(this.handles.remove(g),t&&this.handles.add(s.watch((()=>t.listMode),(()=>this._watchLayerProperties(t))),g))},t._createClass(o,[{key:"error",get:function(){return this.layer?.loadError}},{key:"publishing",get:function(){const{layer:t,checkPublishStatusEnabled:e}=this;return e&&t&&"publishingInfo"in t&&"publishing"===t.publishingInfo.status}},{key:"title",get:function(){const t=this.get("layer.layer");return((!t||t&&this.get("layer.layer.loaded"))&&this.layer?.title)??""},set:function(t){this._overrideIfSome("title",t)}}]),o}(n.IdentifiableMixin(i.HandleOwnerMixin(o)));e.__decorate([a.property({type:f})],v.prototype,"actionsSections",void 0),e.__decorate([a.property()],v.prototype,"actionsOpen",void 0),e.__decorate([a.property()],v.prototype,"checkPublishStatusEnabled",void 0),e.__decorate([a.property({readOnly:!0})],v.prototype,"error",null),e.__decorate([a.property()],v.prototype,"hidden",void 0),e.__decorate([a.property()],v.prototype,"layer",void 0),e.__decorate([a.property()],v.prototype,"listItemCreatedFunction",void 0),e.__decorate([a.property({readOnly:!0})],v.prototype,"publishing",null),e.__decorate([a.property()],v.prototype,"title",null),v=_=e.__decorate([p.subclass(S)],v);return v}));
