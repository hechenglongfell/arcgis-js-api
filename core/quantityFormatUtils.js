/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./unitFormatUtils"],(function(t,r){"use strict";function e(t,e,a,n=2,i="abbr"){return r.formatDecimal(t,e.toUnit(a).value,a,n,i)}function a(t,e,a=2,n="abbr"){if("length"!==e.measure)throw new Error("quantity is not a length");return r.formatMetricLength(t,e.value,e.unit,a,n)}function n(t,e,a=2,n="abbr"){if("length"!==e.measure)throw new Error("quantity is not a length");return r.formatMetricVerticalLength(t,e.value,e.unit,a,n)}function i(t,e,a=2,n="abbr"){if("area"!==e.measure)throw new Error("quantity is not an area");return r.formatMetricArea(t,e.value,e.unit,a,n)}function o(t,e,a=2,n="abbr"){if("length"!==e.measure)throw new Error("quantity is not a length");return r.formatImperialLength(t,e.value,e.unit,a,n)}function u(t,e,a=2,n="abbr"){if("length"!==e.measure)throw new Error("quantity is not a length");return r.formatImperialVerticalLength(t,e.value,e.unit,a,n)}function f(t,e,a=2,n="abbr"){if("area"!==e.measure)throw new Error("quantity is not an area");return r.formatImperialArea(t,e.value,e.unit,a,n)}function l(t){if("angle"!==t.measure)throw new Error("quantity is not an angle");return r.formatDMS(t.value,t.unit)}t.formatDMS=l,t.formatDecimal=e,t.formatImperialArea=f,t.formatImperialLength=o,t.formatImperialVerticalLength=u,t.formatMetricArea=i,t.formatMetricLength=a,t.formatMetricVerticalLength=n,Object.defineProperty(t,"__esModule",{value:!0})}));
