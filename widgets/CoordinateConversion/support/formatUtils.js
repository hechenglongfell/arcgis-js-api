/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../core/number","../../../intl/locale","./Format"],(function(t,e,i,a){"use strict";const n=e.getCustoms().decimal,s={N:"north",S:"south",E:"east",W:"west"},r=`°${"‎"}`,o=new RegExp(`-?\\d+[\\.|\\${n}]?\\d*`),d=/^[\\0]+(?=\d)/;function u(t,e){const a="ar"===i.getLocale(),n={ddm:`Y${r} A'${t.abbreviatedDirections.north}, X${r} B'${t.abbreviatedDirections.east}`,dms:`Y${r} A' B"${t.abbreviatedDirections.north}, X${r} C' D"${t.abbreviatedDirections.east}`,dd:`Y${r}${t.abbreviatedDirections.north}, X${r}${t.abbreviatedDirections.east}`},s={ddm:`${t.abbreviatedDirections.north}${r}Y 'A, ${t.abbreviatedDirections.east}${r}X 'B`,dms:`${t.abbreviatedDirections.north}${r}Y 'A "B, ${t.abbreviatedDirections.east}${r}X 'C "D`,dd:`${t.abbreviatedDirections.north}${r}Y, ${t.abbreviatedDirections.east}${r}X`};e.forEach((t=>{const{name:e}=t;if("dms"===e||"dd"===e||"ddm"===e){const i=t.defaultPattern===t.currentPattern,r=a?s[e]:n[e];t.defaultPattern=r,i&&(t.currentPattern=r)}}))}function c(t){const e=t.abbreviatedDirections.north,i=t.abbreviatedDirections.south,d=t.abbreviatedDirections.east,c=t.abbreviatedDirections.west,l={};l[e]="N",l[i]="S",l[d]="E",l[c]="W";const $=new RegExp(`N|S|${e}|${i}`,"i"),h=new RegExp(`E|W|${d}|${c}`,"i"),g=[new a({name:"basemap",coordinateSegments:[{alias:"X",description:"easting",searchPattern:o,substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"Y",description:"northing",searchPattern:o,substitution:{input:t=>b(t),output:t=>p(t)}}],defaultPattern:"X, Y",viewModel:null}),new a({name:"dd",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=\\D*?[N|S|${e}|${i}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:t.abbreviatedDirections.north,description:"north/south indicator",searchPattern:$,substitution:{input:t=>l[t],output:e=>t.abbreviatedDirections[s[e]]}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}[\\.|\\${n}]?\\d*(?=\\D*?[E|W|${d}|${c}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:t.abbreviatedDirections.east,description:"east/west indicator",searchPattern:h,substitution:{input:t=>l[t],output:e=>t.abbreviatedDirections[s[e]]}}],defaultPattern:`Y${r}${t.abbreviatedDirections.north}, X${r}${t.abbreviatedDirections.east}`,viewModel:null}),new a({name:"ddm",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?\\s+.*?[N|S|${e}|${i}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"A",description:"minutes latitude",searchPattern:new RegExp(`\\d{1,2}[\\.\\${n}]?\\d*(?=.*?[N|S|${e}||${i}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:t.abbreviatedDirections.north,description:"north/south indicator",searchPattern:$,substitution:{input:t=>l[t],output:e=>t.abbreviatedDirections[s[e]]}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}(?=\\D*?\\s+.*?[E|W|${d}|${c}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"B",description:"minutes longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\|${n}]?\\d*(?=.*?[E|W|${d}|${c}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:t.abbreviatedDirections.east,description:"east/west indicator",searchPattern:h,substitution:{input:t=>l[t],output:e=>t.abbreviatedDirections[s[e]]}}],defaultPattern:`Y${r} A'${t.abbreviatedDirections.north}, X${r} B'${t.abbreviatedDirections.east}`,viewModel:null}),new a({name:"dms",coordinateSegments:[{alias:"Y",description:"degrees latitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?\\s+.*?[N|S|${e}|${i}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"A",description:"minutes latitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?[N|S|${e}|${i}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"B",description:"seconds latitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=.*?[N|S|${e}|${i}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:t.abbreviatedDirections.north,description:"north/south indicator",searchPattern:$,substitution:{input:t=>l[t],output:e=>t.abbreviatedDirections[s[e]]}},{alias:"X",description:"degrees longitude",searchPattern:new RegExp(`\\d{1,3}(?=.*?\\s+.*?[E|W|${d}|${c}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"C",description:"minutes longitude",searchPattern:new RegExp(`\\d{1,2}(?=.*?[E|W|${d}|${c}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"D",description:"seconds longitude",searchPattern:new RegExp(`\\d{1,2}[\\.|\\${n}]?\\d*(?=.*?[E|W|${d}|${c}])`,"i"),substitution:{input:t=>b(t),output:t=>p(t)}},{alias:t.abbreviatedDirections.east,description:"east/west indicator",searchPattern:h,substitution:{input:t=>l[t],output:e=>t.abbreviatedDirections[s[e]]}}],defaultPattern:`Y${r} A' B"${t.abbreviatedDirections.north}, X${r} C' D"${t.abbreviatedDirections.east}`,viewModel:null}),new a({name:"xy",coordinateSegments:[{alias:"X",description:"longitude",searchPattern:o,substitution:{input:t=>b(t),output:t=>p(t)}},{alias:"Y",description:"latitude",searchPattern:o,substitution:{input:t=>b(t),output:t=>p(t)}}],defaultPattern:`X${r}, Y${r}`,viewModel:null}),new a({name:"mgrs",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new a({name:"usng",coordinateSegments:[{alias:"Z",description:"grid zone",searchPattern:/\d{1,2}\w|[abyz]/i},{alias:"S",description:"grid square",searchPattern:/\w{2}/},{alias:"X",description:"easting",searchPattern:/^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/},{alias:"Y",description:"northing",searchPattern:/^\d{1,5}/}],defaultPattern:"Z S X Y",viewModel:null}),new a({name:"utm",coordinateSegments:[{alias:"Z",description:"zone number",searchPattern:/\d{1,2}|[abyz]/i},{alias:"B",description:"latitude band",searchPattern:/^\D/},{alias:"X",description:"easting",searchPattern:/\d{1,7}(?=\s*\d{7}$)/},{alias:"Y",description:"northing",searchPattern:/\d{1,7}/}],defaultPattern:"ZB X Y",viewModel:null})];return u(t,g),g}function p(t){const i=t.match(d),a=i?i[0]:"",n=t.indexOf(".")>=0?t.split(".")[1].length:0;return a+e.format(Number(t),{pattern:"###0.###",places:n,round:-1})}function b(t){return e.parse(t)}t.generateDefaultFormats=c,t.setDefaultPatterns=u,Object.defineProperty(t,"__esModule",{value:!0})}));
