/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../Color","../../../../core/Handles","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/screenUtils","../../../../chunks/vec2","../../../../chunks/vec3","../../../../chunks/vec3f64","./VisualElement","../../../interactive/support/viewUtils","../../../overlay/LineOverlayItem","../../../overlay/TextOverlayItem"],(function(t,e,i,o,n,r,s,a,c,h,l,u,d,_){"use strict";let m=function(t){function s(e){var n;return(n=t.call(this,e.view)||this)._handles=new o,n._textItem=null,n._calloutItem=null,n._showCallout=!0,n._showText=!0,n._geometry=null,n._text="-",n._fontSize=14,n._backgroundColor=new i([0,0,0,.6]),n._textColor=new i([255,255,255]),n._distance=25,n._anchor="right",n.updatePositionOnCameraMove=!0,n.applyProps(e),n}e._inheritsLoose(s,t);var c=s.prototype;return c.overlaps=function(t){return!!this.attached&&(this.textItem.visible&&t.textItem.visible&&!!this.view.overlay?.overlaps(this._textItem,t.textItem))},c.updateLabelPosition=function(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:i}=this;if(n.isSome(t)&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,k))break;if(t.callout){const i=e.state.camera,o=t.callout.distance;a.add(P,P,[0,t.callout.offset]),i.renderToScreen(P,k),a.set(S,0,1),a.scale(S,S,o*i.pixelRatio),a.add(S,S,P),i.renderToScreen(S,I),this._showCallout=this._updatePosition(k,I)}else this._textItem.position=[k[0],k[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,k,I))break;this._showCallout=this._updatePosition(k,I),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,k,I))break;this._showText=!0;const e=this._updatePosition(k,I);this._showCallout=!1!==t.callout&&e,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(i)},c._computeLabelPositionFromPoint=function(t,e){const i=this.view.state.camera;return i.projectToRenderScreen(t,P),!(P[2]<0||P[2]>1)&&(i.renderToScreen(P,e),!0)},c._computeLabelPositionFromCorner=function(t,e,i,o){if(!t)return!1;const n=this.view.state.camera;return f(t.left,1,n,g),a.negate(g,g),f(t.right,0,n,y),a.add(S,g,y),a.negate(S,S),a.normalize(S,S),n.projectToRenderScreen(t.left.endRenderSpace,P),!(P[2]<0||P[2]>1)&&(n.renderToScreen(P,i),a.scale(S,S,e*n.pixelRatio),a.add(S,S,P),n.renderToScreen(S,o),!0)},c._computeLabelPositionFromSegment=function(t,e,i,o,n){if(!t)return!1;const r=t.segment,s=this.view.state.camera;u.renderScreenSpaceTangent(r.startRenderSpace,r.endRenderSpace,s,g),a.set(S,-g[1],g[0]);let c=!1;switch(i){case"top":c=S[1]<0;break;case"bottom":c=S[1]>0;break;case"left":c=S[0]>0;break;case"right":c=S[0]<0}if(c&&a.negate(S,S),0===a.length(S))switch(i){case"top":S[1]=1;break;case"bottom":S[1]=-1;break;case"left":S[0]=-1;break;case"right":S[0]=1}return r.eval(z[t.sampleLocation],w),s.projectToRenderScreen(w,P),!(P[2]<0||P[2]>1)&&(s.renderToScreen(P,o),a.scale(S,S,e*s.pixelRatio),a.add(S,S,P),s.renderToScreen(S,n),!0)},c._updatePosition=function(t,e){if(e){const i=e[0]-t[0],o=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(i)>Math.abs(o)?i>0?"left":"right":o>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1},c.createResources=function(){this._textItem=new _({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor}),this._calloutItem=new d({visible:!0,width:2}),this.updateLabelPosition(),this.view.overlay?.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(r.watch((()=>this.view.state.camera),(()=>this.updateLabelPosition())))},c.destroyResources=function(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()},c.updateVisibility=function(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t},e._createClass(s,[{key:"geometry",get:function(){return this._geometry},set:function(t){this._geometry=t,this.updateLabelPosition()}},{key:"textItem",get:function(){return this._textItem}},{key:"text",get:function(){return this._text},set:function(t){this._text=t,this.attached&&(this._textItem.text=this._text)}},{key:"fontSize",get:function(){return this._fontSize},set:function(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}},{key:"textColor",get:function(){return this._textColor},set:function(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}},{key:"distance",get:function(){return this._distance},set:function(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}},{key:"anchor",get:function(){return this._anchor},set:function(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}}]),s}(l.VisualElement);function f(t,e,i,o){t.eval(e,b,v),c.add(x,b,v),i.projectToRenderScreen(b,C),i.projectToRenderScreen(x,R),a.subtract(o,L,T),a.normalize(o,o)}function p(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const b=h.create(),x=h.create(),v=h.create(),g=s.createRenderScreenPointArray(),y=s.createRenderScreenPointArray(),S=s.createRenderScreenPointArray(),w=h.create(),P=s.createRenderScreenPointArray3(),k=s.createScreenPointArray(),I=s.createScreenPointArray(),C=s.createRenderScreenPointArray3(),T=C,R=s.createRenderScreenPointArray3(),L=R,z={start:0,center:.5,end:1};t.LabelVisualElement=m,t.mirrorPosition=p,t.screenSpaceTangent=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
