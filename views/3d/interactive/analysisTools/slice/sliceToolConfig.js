/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/mathUtils"],(function(_,T,E){"use strict";const R=T("mac")?"Meta":"Control",I="Shift",A=2,O=1.15,S=1.15,L=1.1,D=2500,N=.02,H=Math.cos(E.deg2rad(45)),C=Math.cos(E.deg2rad(5)),P=.95,U=.3,F=.7,e=[1,.5,0],o=2,t=1,r=[...e,F],G=[0,0,0,.04],M=[...e,.5],W=[...e,1],c=[1,1,1,1],i=[1,.8,.6,1],a=[1,.93,.86,1],d=[...e,1],s=[...e,1],f=3,n=11,V=22.5,l=40,Z=48,h=2.25,B=4,u=1,g=.3,m=6,p=4,Y=12,b=40,j=27,v=1600,x=.4;_.DISPLAY_FOCUS_MULTIPLIER=A,_.GRID_COLOR=M,_.HANDLE_COLOR=e,_.HANDLE_OPACITY=F,_.INITIAL_DEPTH_OFFSET_FRAC=N,_.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION=x,_.PLANE_BACKGROUND_COLOR=G,_.PLANE_MIN_BASIS_SCREEN_LEN2=v,_.PLANE_OUTLINE_COLOR=r,_.PLANE_OUTLINE_WIDTH=t,_.PLANE_PREVIEW_OUTLINE_WIDTH=o,_.POINTER_MOVE_TIMER_MS=D,_.PREVIEW_FADE_DOT_THRESHOLD=P,_.PREVIEW_FADE_DURATION_SECONDS=U,_.RESIZE_HANDLE_CORNER_INPUT_RADIUS=m,_.RESIZE_HANDLE_CORNER_WIDTH=B,_.RESIZE_HANDLE_EDGE_INPUT_RADIUS=p,_.RESIZE_HANDLE_EDGE_PADDING_FRAC=g,_.RESIZE_HANDLE_EDGE_WIDTH=u,_.ROTATE_HEADING_CALLOUT_COLOR=W,_.ROTATE_HEADING_DISC_RADIUS=j,_.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER=L,_.ROTATE_HEADING_OFFSET_DISTANCE=b,_.ROTATE_HEADING_TIP_LENGTH=Y,_.SHIFT_RESTART_ARROW_CAP_COLOR=i,_.SHIFT_RESTART_ARROW_LENGTH=Z,_.SHIFT_RESTART_ARROW_OUTLINE_WIDTH=h,_.SHIFT_RESTART_ARROW_TIP_COLOR=c,_.SHIFT_RESTART_CALLOUT_COLOR=d,_.SHIFT_RESTART_OFFSET_DISTANCE=l,_.SHIFT_RESTART_OUTLINE_COLOR=s,_.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER=S,_.SHIFT_RESTART_TIP_LENGTH=V,_.SHIFT_RESTART_TIP_RADIUS=n,_.SHIFT_RESTART_TUBE_COLOR=a,_.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER=O,_.SHIFT_RESTART_TUBE_RADIUS=f,_.SMALL_ANGLE_DOT_THRESHOLD=C,_.VERTICAL_DOT_THRESHOLD=H,_.forceHorizontalModifier=R,_.forceVerticalModifier=I,Object.defineProperty(_,"__esModule",{value:!0})}));
