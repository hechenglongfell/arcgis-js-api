/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../Color"],(function(i,t){"use strict";const n={main:new t([255,127,0])};let e=function(){this.color=n.main,this.opacity=.5,this.radius=5},s=function(){this.color=new t([127,127,127]),this.opacity=.5,this.radius=5},o=function(){this.lineSizeFraction=.8},h=function(){this.color=n.main,this.opacity=.5,this.linePaddingPx=4,this.focusedLinePaddingPx=6,this.lengthFraction=.5,this.minLengthMeters=.1},a=function(){this.calloutOffsetPx=18,this.calloutOpacity=.5,this.calloutWidth=2,this.discScale=.3,this.focusMultiplier=2},c=function(){this.lineSizeFraction=.25},r=function(){this.marginPx=20,this.minScreenLengthFontSizeFactor=5},l=function(){this.color=new t([255,127,0,.5])};const u=new function(){this.pointManipulators=new e,this.offsetManipulator=new h,this.orientationManipulator=new a,this.markers=new o,this.labels=new r,this.offsetLine=new c,this.constraint=new l,this.constraintThresholdPx=10,this.initialOffsetPx=50,this.orientationSnapThresholdDegrees=5,this.disabledPointIndicator=new s,this.smallScreenLengthLineSizeFactor=2,this.pointerMoveTimeoutMs=2500};i.settings=u,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
