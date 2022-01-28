/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Logger","../core/maybe","../core/urlUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Symbol3DLayer","./support/colors","./support/IconSymbol3DLayerResource","./support/materialUtils","./support/Symbol3DAnchorPosition2D","./support/Symbol3DIconOutline","./support/Symbol3DMaterial"],(function(o,e,t,r,i,n,c,s,l,a,u,p,h,y,d,m,b,f){"use strict";var S;const v=t.getLogger("esri.symbols.IconSymbol3DLayer");let w=S=function(e){function t(o){var t;return(t=e.call(this,o)||this).material=null,t.resource=null,t.type="icon",t.size=12,t.anchor="center",t.anchorPosition=void 0,t.outline=void 0,t}return o._inheritsLoose(t,e),t.prototype.clone=function(){return new S({anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),enabled:this.enabled,material:r.isSome(this.material)?this.material.clone():null,outline:r.isSome(this.outline)?this.outline.clone():null,resource:this.resource&&this.resource.clone(),size:this.size})},t.fromSimpleMarkerSymbol=function(o){const e=o.color||h.white,t=g(o),r=o.outline&&o.outline.width>0?{size:o.outline.width,color:(o.outline.color||h.white).clone()}:null;return new S({size:o.size,resource:{primitive:D(o.style)},material:{color:e},outline:r,anchor:t?"relative":void 0,anchorPosition:t})},t.fromPictureMarkerSymbol=function(o){const e=!o.color||h.isBlack(o.color)?h.white:o.color,t=g(o);return new S({size:o.width<=o.height?o.height:o.width,resource:{href:o.url},material:{color:e.clone()},anchor:t?"relative":void 0,anchorPosition:t})},t.fromCIMSymbol=function(o){return new S({resource:{href:i.makeData({mediaType:"application/json",data:JSON.stringify(o.data)})}})},t}(p);function g(o){const e="width"in o?o.width:o.size,t="height"in o?o.height:o.size,r=_(o.xoffset),i=_(o.yoffset);return(r||i)&&e&&t?{x:-r/e,y:i/t}:null}function _(o){return isFinite(o)?o:0}e.__decorate([n.property({type:f.default,json:{write:!0}})],w.prototype,"material",void 0),e.__decorate([n.property({type:y.default,json:{write:!0}})],w.prototype,"resource",void 0),e.__decorate([a.enumeration({Icon:"icon"},{readOnly:!0})],w.prototype,"type",void 0),e.__decorate([n.property(d.screenSizeProperty)],w.prototype,"size",void 0),e.__decorate([a.enumeration({center:"center",left:"left",right:"right",top:"top",bottom:"bottom",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",relative:"relative"}),n.property({json:{default:"center"}})],w.prototype,"anchor",void 0),e.__decorate([n.property({type:m.Symbol3DAnchorPosition2D,json:{type:[Number],read:{reader:o=>new m.Symbol3DAnchorPosition2D({x:o[0],y:o[1]})},write:{writer:(o,e)=>{e.anchorPosition=[o.x,o.y]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],w.prototype,"anchorPosition",void 0),e.__decorate([n.property({type:b,json:{write:!0}})],w.prototype,"outline",void 0),w=S=e.__decorate([u.subclass("esri.symbols.IconSymbol3DLayer")],w);const P={circle:"circle",cross:"cross",diamond:"kite",square:"square",x:"x",triangle:"triangle",path:null};function D(o){const e=P[o];return e||(v.warn(`${o} cannot be mapped to Icon symbol. Fallback to "circle"`),"circle")}return w}));
