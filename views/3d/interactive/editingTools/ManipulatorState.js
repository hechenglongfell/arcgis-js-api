/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../Manipulator3D","./GrabbingState","./ManipulatorType"],(function(t,e,i,a,n){"use strict";let r=function(){function t(){this.grabbingState=a.GrabbingState.NONE,this.zManipulator=null,this.firstSelected=null,this.numSelected=0,this.firstGrabbedXY=null}return t.prototype.update=function(t){this.grabbingState=a.GrabbingState.NONE,this.zManipulator=null,this.numSelected=0,this.firstSelected=null,this.firstGrabbedXY=null,t.forEachManipulator(((t,r)=>{if(r===n.ManipulatorType.TRANSLATE_Z&&(this.zManipulator=t),t instanceof i.Manipulator3D&&(t.selected&&(0===this.numSelected&&(this.firstSelected=t),this.numSelected++),e.isNone(this.firstGrabbedXY)&&t.grabbing&&r===n.ManipulatorType.TRANSLATE_XY&&(this.firstGrabbedXY=t)),t.grabbing)switch(this.grabbingState|=a.GrabbingState.ANY,r){case n.ManipulatorType.TRANSLATE_Z:this.grabbingState|=a.GrabbingState.Z;break;case n.ManipulatorType.TRANSLATE_XY:this.grabbingState|=a.GrabbingState.XY}}))},t}();t.ManipulatorState=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
