/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../intl/date"],(function(t,e,r){"use strict";function o(t,e){const o=r.getDateTimeFormatter(e),i=Date.now(),c=o.formatToParts(i),l=new Set;c.filter((({type:t})=>"literal"===t)).forEach((({value:t})=>l.add(t)));let s=0;const f={};for(;c.length>0;){const{type:e,value:r}=c.shift();for(let o=0;o<r.length;o++,s++){const r=t.charAt(s);if(l.has(r)){s++;break}if("literal"===e)break;f[e]||(f[e]=[]),f[e].push(r)}}const g={};try{g.day=a(f.day.join("")),g.month=a(f.month.join(""))-1,g.year=a((f.year||f.relatedYear).join(""))}catch(u){throw n(e)}if(isNaN(g.day)||isNaN(g.month)||isNaN(g.year))throw n(e);return g}function a(t){const e=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];for(let r=0;r<10;r++)t=t.replace(e[r],r.toString());return Number(t)}function n(t){return new e(`could not parse date input, expecting the following format: ${r.formatDate(Date.now(),t)}`)}t.parseDateIntoParts=o,Object.defineProperty(t,"__esModule",{value:!0})}));
