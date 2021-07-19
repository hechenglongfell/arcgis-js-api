/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/jsonMap","../../core/Logger","../../core/Warning","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./ColorVariable","./OpacityVariable","./RotationVariable","./SizeVariable"],(function(e,r,a,s,t,i,o,l,n,c,u,p,b,V){"use strict";const h=t.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),f={color:u,size:V,opacity:p,rotation:b},y=new s.JSONMap({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),g=/^\[([^\]]+)\]$/i;let d=function(r){function a(){var e;return(e=r.apply(this,arguments)||this).colorVariables=null,e.opacityVariables=null,e.rotationVariables=null,e.sizeVariables=null,e}e._inheritsLoose(a,r);var s=a.prototype;return s.readVariables=function(e,r,a){const{rotationExpression:s,rotationType:t}=r,o=s&&s.match(g),l=o&&o[1];if(l&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:t,field:l})),e)return e.map((e=>{const r=y.read(e.type),s=f[r];s||(h.warn(`Unknown variable type: ${r}`),a&&a.messages&&a.messages.push(new i("visual-variable:unsupported",`visualVariable of type '${r}' is not supported`,{definition:e,context:a})));const t=new s;return t.read(e,a),t}))},s.writeVariables=function(e,r){const a=[];for(const s of e){const e=s.toJSON(r);e&&a.push(e)}return a},s._resetVariables=function(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]},e._createClass(a,[{key:"visualVariables",set:function(e){if(this._resetVariables(),(e=e&&e.filter((e=>!!e)))&&e.length){for(const r of e)switch(r.type){case"color":this.colorVariables.push(r);break;case"opacity":this.opacityVariables.push(r);break;case"rotation":this.rotationVariables.push(r);break;case"size":this.sizeVariables.push(r)}if(this.sizeVariables.length){this.sizeVariables.some((e=>!!e.target))&&e.sort(((e,r)=>{let a=null;return a=e.target===r.target?0:e.target?1:-1,a}))}for(let r=0;r<e.length;r++){e[r].index=r}this._set("visualVariables",e)}else this._set("visualVariables",e)}}]),a}(a);return r.__decorate([o.property()],d.prototype,"visualVariables",null),d=r.__decorate([c.subclass("esri.renderers.visualVariables.VisualVariableFactory")],d),d}));
