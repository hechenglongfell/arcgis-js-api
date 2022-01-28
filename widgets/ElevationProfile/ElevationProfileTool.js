/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./ElevationProfileInteraction","./support/constants","./support/ElevationProfileView"],(function(e,t,o,i,r,l,a,n,s,c,p,v){"use strict";e.ElevationProfileTool=function(e){function o(t){var o;return(o=e.call(this,t)||this).editable=!0,o.visible=!0,o.highlightEnabled=!0,o}t._inheritsLoose(o,e);var i=o.prototype;return i.initialize=function(){this.view=new v.ElevationProfileView({tool:this}),this.interaction=new c.ElevationProfileInteraction({tool:this})},i.destroy=function(){this.interaction.destroy(),this.view.destroy()},t._createClass(o,[{key:"state",get:function(){var e;switch(null==(e=this.interaction)?void 0:e.state){case c.State.Ready:return p.ElevationProfileState.Ready;case c.State.Creating:return p.ElevationProfileState.Creating;case c.State.Selecting:return p.ElevationProfileState.Selecting;case c.State.Selected:return p.ElevationProfileState.Selected;case c.State.Reshaping:case c.State.ReshapingDisabled:return p.ElevationProfileState.Created}}}]),o}(i),o.__decorate([r.property({nonNullable:!0})],e.ElevationProfileTool.prototype,"viewModel",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"view",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"interaction",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"editable",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"visible",void 0),o.__decorate([r.property()],e.ElevationProfileTool.prototype,"highlightEnabled",void 0),e.ElevationProfileTool=o.__decorate([s.subclass("esri.widgets.ElevationProfile.ElevationProfileTool")],e.ElevationProfileTool),Object.defineProperty(e,"__esModule",{value:!0})}));
