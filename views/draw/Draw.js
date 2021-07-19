/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/has","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../chunks/MultipointDrawAction","./PointDrawAction","./PolygonDrawAction","./PolylineDrawAction","./SegmentDrawAction"],(function(e,t,i,o,c,n,r,s,a,p,l,y,u){"use strict";let A=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).activeAction=null,e.type="draw",e.view=null,e}e._inheritsLoose(i,t);var o=i.prototype;return o.destroy=function(){this.activeAction&&(this.activeAction.destroy(),this.activeAction=null)},o.create=function(e,t){this.reset();const i={view:this.view,...t};switch(e){case"point":i.editGeometryType="point",this.activeAction=new p.PointDrawAction(i);break;case"polyline":i.editGeometryType="polyline",this.activeAction=new y.PolylineDrawAction(i);break;case"multipoint":i.editGeometryType="polygon",this.activeAction=new a.MultipointDrawAction(i);break;case"polygon":i.editGeometryType="polygon",this.activeAction=new l.PolygonDrawAction(i);break;case"rectangle":case"circle":case"ellipse":case"triangle":i.editGeometryType="polygon",this.activeAction=new u.SegmentDrawAction(i)}return this.activeAction},o.complete=function(){this.activeAction&&this.activeAction.complete(),this.activeAction=null},o.reset=function(){this.activeAction&&this.activeAction.destroy(),this.activeAction=null},i}(i);return t.__decorate([c.property()],A.prototype,"activeAction",void 0),t.__decorate([c.property({readOnly:!0})],A.prototype,"type",void 0),t.__decorate([c.property()],A.prototype,"view",void 0),A=t.__decorate([s.subclass("esri.views.draw.Draw")],A),A}));
