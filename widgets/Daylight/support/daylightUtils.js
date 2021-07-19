/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../core/timeUtils"],(function(e,t){"use strict";var n;e.Hemisphere=void 0,(n=e.Hemisphere||(e.Hemisphere={}))[n.NORTHERN=0]="NORTHERN",n[n.SOUTHERN=1]="SOUTHERN";const i={spring:{dayOfMonth:20,month:2},summer:{dayOfMonth:21,month:5},fall:{dayOfMonth:23,month:8},winter:{dayOfMonth:21,month:11}},r=["spring","summer","fall","winter"];function m(e,t,n){const r=u(t,n),{dayOfMonth:m,month:o}=i[r],s=new Date(e.getTime());return s.setMonth(o,m),s}function o(e,t){return u(s(e),t)}function s(t){const n=t.getTime(),i=m(t,"spring",e.Hemisphere.NORTHERN).getTime(),r=m(t,"summer",e.Hemisphere.NORTHERN).getTime(),o=m(t,"fall",e.Hemisphere.NORTHERN).getTime(),s=m(t,"winter",e.Hemisphere.NORTHERN).getTime();return n>=i&&n<r?"spring":n>=r&&n<o?"summer":n>=o&&n<s?"fall":"winter"}function u(t,n){return n===e.Hemisphere.NORTHERN?t:T(t)}function T(e){const t=r.indexOf(e);return r[(t+2)%4]}function a(e,n){return t.makeUTCTime(e,n,"minutes")}function f(e){return t.timeSinceUTCMidnight(e,"minutes")}function h(e,t,n){const i=12e5,r=i/4,m=18e5,o=r/3*2,s=72e5;if(isNaN(e.getTime())&&isNaN(t.getTime()))return r;const u=n.getTime(),T=e.getTime(),a=t.getTime(),f=T-s/2,h=T+s/2,N=a-s/3*2,c=a+s/3;let g=r;return u>=f&&u<=h?g=u-f<=i?m-(u-f)/i*(m-o):h-u<=i/2?r-(h-u)/i*2*(r-o):o:u>=N&&u<=c?g=u-N<=i/2?r-(u-N)/i*2*(r-o):c-u<=i?m-(c-u)/i*(m-o):o:(u<T||u>a)&&(g=m),g}e.ORDERED_SEASONS=r,e.calculatePlaySpeed=h,e.dateTimeToSliderPos=f,e.flipSeasonHemisphere=T,e.getNorthernHemisphereSeason=u,e.getSeasonDate=m,e.getSeasonFromDate=o,e.sliderPosToDateTime=a,Object.defineProperty(e,"__esModule",{value:!0})}));
