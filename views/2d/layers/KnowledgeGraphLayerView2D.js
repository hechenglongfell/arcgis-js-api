/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Collection","../../../core/collectionUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./LayerView2D","../../layers/LayerView"],(function(e,t,r,i,s,n,a,o,c,l){"use strict";let u=function(t){function s(e){var i;return(i=t.call(this,e)||this).layerViews=new r,i}e._inheritsLoose(s,t);var n=s.prototype;return n.attach=function(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))},n.detach=function(){this.container.removeAllChildren()},n.update=function(e){},n.moveStart=function(){},n.viewChange=function(){},n.moveEnd=function(){},n._updateStageChildren=function(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))},e._createClass(s,[{key:"layerViews",set:function(e){this._set("layerViews",i.referenceSetter(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}}]),s}(c.LayerView2DMixin(l));t.__decorate([s.property({cast:i.castForReferenceSetter})],u.prototype,"layerViews",null),t.__decorate([s.property({readOnly:!0})],u.prototype,"updatingProgress",null),u=t.__decorate([o.subclass("esri.views.2d.layers.KnowledgeGraphLayerView2D")],u);return u}));
