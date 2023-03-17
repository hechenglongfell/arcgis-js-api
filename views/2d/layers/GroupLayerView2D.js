/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/Error","../../../core/has","../../../core/accessorSupport/decorators/subclass","../engine/webgl/GroupContainer","./LayerView2D","../../layers/GroupLayerView"],(function(e,r,t,n,i,a,o,s,c,u,l){"use strict";let h=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).container=new c.GroupContainer,e}e._inheritsLoose(t,r);var n=t.prototype;return n.attach=function(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))},n.detach=function(){this.container.removeAllChildren()},n.update=function(e){},n.moveStart=function(){},n.viewChange=function(){},n.moveEnd=function(){},n._updateStageChildren=function(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))},t}(u.LayerView2DMixin(l));h=r.__decorate([s.subclass("esri.views.2d.layers.GroupLayerView2D")],h);return h}));
