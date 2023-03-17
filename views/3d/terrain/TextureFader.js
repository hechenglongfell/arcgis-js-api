/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","./interfaces"],(function(t,e,i,n){"use strict";let s=function(){function s(t){this._getFadeDuration=t,this._fadeStart=0,this._delayedTime=0}var a=s.prototype;return a.clear=function(){this._current=i.destroyMaybe(this._current),this._next=i.destroyMaybe(this._next),this._waiting=i.destroyMaybe(this._waiting),this._delayed=i.destroyMaybe(this._delayed)},a.push=function(e,n=t.ActivationTime.Immediate){this._delayed=i.destroyMaybe(this._delayed),this._push(e,n)},a._push=function(e,n){if(this._isFadingEnabled||this.clear(),i.isNone(this._current))return void(this._current=e);const a=s.test.fadeMoment||performance.now();return n!==t.ActivationTime.Immediate?(this._delayed=e,void(this._delayedTime=a+n)):i.isNone(this._next)?(this._next=e,void(this._fadeStart=this._alignFadeStart(a))):void(i.isNone(e)||(i.destroyMaybe(this._waiting),this._waiting=e))},a._alignFadeStart=function(t){const e=this._getFadeDuration();return t+e-t%e},e._createClass(s,[{key:"current",get:function(){if(i.isNone(this._current))return null;if(!this._isFadingEnabled){const t=this._delayed||this._waiting||this._next||this._current;t!==this._current&&(this._current=null,this.clear(),this._current=t)}let e=s.test.fadeMoment;if(i.isSome(this._delayed)&&(e=e||performance.now(),e>=this._delayedTime&&(this._push(this._delayed,t.ActivationTime.Immediate),this._delayed=null)),i.isSome(this._next)){e=e||performance.now();const t=this._fadeDuration,s=i.isSome(this._current)&&this._next.texture===this._current.texture,a=this._next.type!==n.TextureUpdate.FADING,r=e-this._fadeStart>=t;(s||a||r)&&(i.destroyMaybe(this._current),this._current=this._next,this._next=this._waiting,this._waiting=null,this._fadeStart=this._alignFadeStart(e))}return this._current}},{key:"next",get:function(){return this._next}},{key:"fadeFactor",get:function(){if(i.isNone(this._next))return 1;const t=s.test.fadeMoment||performance.now(),e=Math.max(0,t-this._fadeStart),n=this._fadeDuration;return e>n?0:1-e/n}},{key:"isFading",get:function(){return i.isSome(this._next)||i.isSome(this._delayed)}},{key:"_fadeDuration",get:function(){return i.isNone(this._waiting)?this._getFadeDuration():.5*this._getFadeDuration()}},{key:"_isFadingEnabled",get:function(){return this._getFadeDuration()>0}}]),s}();var a;s.test={fadeMoment:0},t.ActivationTime=void 0,(a=t.ActivationTime||(t.ActivationTime={}))[a.Immediate=0]="Immediate",a[a.Delayed=5e3]="Delayed",t.TextureFader=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
