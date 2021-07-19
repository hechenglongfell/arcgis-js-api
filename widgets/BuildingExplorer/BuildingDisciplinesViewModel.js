/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./support/buildingLayerUtils","./support/LayerTreeNode","./support/layerUtils"],(function(e,r,t,s,o,a,i,n,l,d,c,y,u,h,p,_){"use strict";let f=function(r){function t(e){var t;return(t=r.call(this,e)||this).root=new p.LayerTreeNode,t.state="disabled",t._handles=new a,t._loadLayers=_.createLoadLayersFunction(),t.layers=new s,t}e._inheritsLoose(t,r);var l=t.prototype;return l.initialize=function(){this._handles.add(this.layers.on("change",(()=>this._onLayersChange()))),this._onLayersChange()},l.destroy=function(){this._set("state","disabled"),this._handles.destroy(),this.root.destroy()},l._updateLayerTree=function(){this.root.destroy(),this._set("root",new p.LayerTreeNode({collapsed:!1}));const e=new Map,r=this.layers.length>1?"modelName":"id";return this.layers.forEach((t=>{const s=h.findFullModelSublayer(t);i.isSome(s)&&this._addNodesForSublayers(s,this.root,e,r)})),this},l._addNodeForLayer=function(e,r,t,s){const o=String(e.get(s)).toLowerCase();if(!i.isSome(o)||e.isEmpty)return;const a=`${r.id}/${o}`;let n=t.get(a);n||(n=new p.LayerTreeNode({id:o,level:r.level+1}),t.set(a,n)),n.layers.push(e),r.children.push(n),this._addNodesForSublayers(e,n,t,s)},l._addNodesForSublayers=function(e,r,t,s){"building-group"!==e.type||e.isEmpty||e.sublayers.forEach((e=>this._addNodeForLayer(e,r,t,s)))},l._onLayersChange=function(){var r=e._asyncToGenerator((function*(){if(this._set("state","loading"),0!==this.layers.length)try{yield this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(e){n.isAbortError(e)||this._set("state","failed")}}));function t(){return r.apply(this,arguments)}return t}(),e._createClass(t,[{key:"layers",set:function(e){const r=this._get("layers");this._set("layers",o.referenceSetter(e,r))}}]),t}(t);return r.__decorate([l.property({readOnly:!0})],f.prototype,"root",void 0),r.__decorate([l.property({type:s,nonNullable:!0})],f.prototype,"layers",null),r.__decorate([l.property({readOnly:!0,nonNullable:!0})],f.prototype,"state",void 0),f=r.__decorate([u.subclass("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],f),f}));
