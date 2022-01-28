/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../TimeExtent","../../core/lang","../../core/maybe","../../support/timeUtils"],(function(e,t,n,r,i,u){"use strict";function o(e,t){return l.apply(this,arguments)}function l(){return(l=t._asyncToGenerator((function*(e,t){const{fullTimeExtent:n}=e.widgets.timeSlider;return n||u.getTimeExtentFromLayers(e.allLayers,t)}))).apply(this,arguments)}function s(e){var t;const n=null!=(t=e.numThumbs)?t:2,r=e.currentTimeExtent;if(r){const{start:e,end:t}=r;return i.isSome(e)&&i.isSome(t)&&e.getTime()===t.getTime()?"instant":2===n?"time-window":i.isNone(e)||0===e.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===n?"time-window":"cumulative-from-start"}function m(e){const{numStops:t,stopInterval:n,stops:i}=e;return i?{dates:r.clone(i)}:n?{interval:n.clone()}:{count:null!=t?t:5}}function a(e,t){var r;const i=e.currentTimeExtent;if(!i)return null;const{start:u,end:o}=i,l=null!=(r=null!=u?u:o)?r:null;switch(t){case"time-window":return new n({start:u,end:o});case"cumulative-from-start":return new n({start:null,end:l});case"cumulative-from-end":return new n({start:l,end:null});case"instant":return new n({start:l,end:l})}}e.getFullTimeExtentFromWebDocument=o,e.getModeFromTimeSlider=s,e.getStopsFromTimeSlider=m,e.getTimeExtentFromTimeSlider=a,Object.defineProperty(e,"__esModule",{value:!0})}));
