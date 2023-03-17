/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./ElevationProfileInteraction","./support/constants","./support/ElevationProfileView"],(function(e,t,o,i,r,l,a,n,s,c,p){"use strict";e.ElevationProfileTool=function(e){function o(t){var o;return(o=e.call(this,t)||this).editable=!0,o.visible=!0,o.highlightEnabled=!0,o}t._inheritsLoose(o,e);var i=o.prototype;return i.initialize=function(){this.view=new p.ElevationProfileView({tool:this}),this.interaction=new s.ElevationProfileInteraction({tool:this})},i.destroy=function(){this.interaction.destroy(),this.view.destroy()},t._createClass(o,[{key:"state",get:function(){const e=this.interaction?.state;switch(e){case s.State.Ready:return c.ElevationProfileState.Ready;case s.State.Creating:return c.ElevationProfileState.Creating;case s.State.Selecting:return c.ElevationProfileState.Selecting;case s.State.Selected:return c.ElevationProfileState.Selected;case s.State.Reshaping:case s.State.ReshapingDisabled:return c.ElevationProfileState.Created}}}]),o}(i),o.__decorate([r.property({nonNullable:!0})],e.ElevationProfileTool.prototype,"viewModel",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"view",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"interaction",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"editable",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"visible",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"highlightEnabled",void 0),e.ElevationProfileTool=o.__decorate([n.subclass("esri.widgets.ElevationProfile.ElevationProfileTool")],e.ElevationProfileTool),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
