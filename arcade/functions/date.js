/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/languageUtils","../../intl/locale","../../chunks/datetime"],(function(e,t,n,r){"use strict";function u(e){const t=new Date(e.getTime()),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const u=o(r),c=new Date(0);c.setFullYear(n,0,4),c.setHours(0,0,0,0);const s=o(c);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function o(e){const t=1,n=new Date(e.getTime()),r=n.getDay(),u=(r<t?7:0)+r-t;return n.setDate(n.getDate()-u),n.setHours(0,0,0,0),n}function c(e){const t=u(e),n=new Date(0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);return o(n)}function s(e,t,n){return e+(a(n)?l:i)[t]}function a(e){return e%4==0&&(e%100!=0||e%400==0)}const i=[0,31,59,90,120,151,181,212,243,273,304,334],l=[0,31,60,91,121,152,182,213,244,274,305,335];function f(e){return null===e?e:isNaN(e.getTime())?null:e}function m(e,a){e.today=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,0,0);const u=new Date;return u.setHours(0,0,0,0),u}))},e.now=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,0,0);return new Date}))},e.timestamp=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,0,0);let u=new Date;return u=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),u}))},e.toutc=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?null:new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds())}))},e.tolocal=function(e,n){return a(e,n,(function(e,n,u){t.pcCheck(u,1,1);const o=t.toDate(u[0]);return null===o?null:r.DateTime.utc(o.getFullYear(),o.getMonth()+1,o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()).toJSDate()}))},e.day=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getDate()}))},e.month=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMonth()}))},e.year=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getFullYear()}))},e.hour=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getHours()}))},e.second=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getSeconds()}))},e.millisecond=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMilliseconds()}))},e.minute=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMinutes()}))},e.week=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,2);const u=t.toDate(r[0]);if(null===u)return NaN;const o=t.toNumber(t.defaultUndefined(r[1],0));if(o<0||o>6)throw new Error("Invalid Parameter");const c=u.getDate(),a=u.getMonth(),i=u.getFullYear(),l=u.getDay(),f=s(c,a,i)-1,m=Math.floor(f/7);return l-o+(l-o<0?7:0)<f-7*m?m+1:m}))},e.weekday=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getDay()}))},e.isoweekday=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);if(null===u)return NaN;let o=u.getDay();return 0===o&&(o=7),o}))},e.isomonth=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMonth()+1}))},e.isoweek=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);if(null===u)return NaN;const s=o(u).getTime()-c(u).getTime();return Math.round(s/6048e5)+1}))},e.isoyear=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,1,1);const o=t.toDate(r[0]);return null===o?NaN:u(o)}))},e.date=function(e,u){return a(e,u,(function(e,u,o){if(t.pcCheck(o,0,7),3===o.length)return f(new Date(t.toNumber(o[0]),t.toNumber(o[1]),t.toNumber(o[2]),0,0,0,0));if(4===o.length)return f(new Date(t.toNumber(o[0]),t.toNumber(o[1]),t.toNumber(o[2]),t.toNumber(o[3]),0,0,0));if(5===o.length)return f(new Date(t.toNumber(o[0]),t.toNumber(o[1]),t.toNumber(o[2]),t.toNumber(o[3]),t.toNumber(o[4]),0,0));if(6===o.length)return f(new Date(t.toNumber(o[0]),t.toNumber(o[1]),t.toNumber(o[2]),t.toNumber(o[3]),t.toNumber(o[4]),t.toNumber(o[5]),0));if(7===o.length)return f(new Date(t.toNumber(o[0]),t.toNumber(o[1]),t.toNumber(o[2]),t.toNumber(o[3]),t.toNumber(o[4]),t.toNumber(o[5]),t.toNumber(o[6])));if(2===o.length){let e,u=t.toString(o[1]);return""===u?null:(u=t.standardiseDateFormat(u),e="X"===u?r.DateTime.fromSeconds(t.toNumber(o[0])):"x"===u?r.DateTime.fromMillis(t.toNumber(o[0])):r.DateTime.fromFormat(t.toString(o[0]),u,{locale:n.getLocale(),numberingSystem:"latn"}),e.isValid?e.toJSDate():null)}if(1===o.length){if(t.isString(o[0])){if(""===o[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;if(!0===/^[0-9][0-9][0-9][0-9]$/.test(o[0]))return t.toDate(o[0]+"-01-01")}const e=t.toNumber(o[0]);if(!1===isNaN(e))return f(new Date(e));return t.toDate(o[0])}return 0===o.length?new Date:void 0}))},e.datediff=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,2,3);const u=t.toDateTime(r[0]),o=t.toDateTime(r[1]);if(null===u||null===o)return NaN;switch(t.toString(r[2]).toLowerCase()){case"days":case"day":case"d":return u.diff(o,"days").days;case"months":case"month":return u.diff(o,"months").months;case"minutes":case"minute":case"m":return"M"===r[2]?u.diff(o,"months").months:u.diff(o,"minutes").minutes;case"seconds":case"second":case"s":return u.diff(o,"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return u.diff(o).milliseconds;case"hours":case"hour":case"h":return u.diff(o,"hours").hours;case"years":case"year":case"y":return u.diff(o,"years").years}}))},e.dateadd=function(e,n){return a(e,n,(function(e,n,r){t.pcCheck(r,2,3);const u=t.toDateTime(r[0]);if(null===u)return null;let o=t.toNumber(r[1]);if(isNaN(o))return u.toJSDate();let c="milliseconds";switch(t.toString(r[2]).toLowerCase()){case"days":case"day":case"d":c="days",o=t.absRound(o);break;case"months":case"month":c="months",o=t.absRound(o);break;case"minutes":case"minute":case"m":c="M"===r[2]?"months":"minutes";break;case"seconds":case"second":case"s":c="seconds";break;case"milliseconds":case"millisecond":case"ms":c="milliseconds";break;case"hours":case"hour":case"h":c="hours";break;case"years":case"year":case"y":c="years"}return u.plus({[c]:o}).toJSDate()}))}}e.registerFunctions=m,Object.defineProperty(e,"__esModule",{value:!0})}));
