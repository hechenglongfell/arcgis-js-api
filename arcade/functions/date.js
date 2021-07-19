/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/languageUtils"],(function(e,t){"use strict";function n(e){const t=new Date(e.getTime()),n=t.getFullYear(),u=new Date(0);u.setFullYear(n+1,0,4),u.setHours(0,0,0,0);const o=r(u),c=new Date(0);c.setFullYear(n,0,4),c.setHours(0,0,0,0);const s=r(c);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function r(e){const t=1,n=new Date(e.getTime()),r=n.getDay(),u=(r<t?7:0)+r-t;return n.setDate(n.getDate()-u),n.setHours(0,0,0,0),n}function u(e){const t=n(e),u=new Date(0);u.setFullYear(t,0,4),u.setHours(0,0,0,0);return r(u)}function o(e){return null===e?e:isNaN(e.getTime())?null:e}function c(e,c){e.today=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,0,0);const u=new Date;return u.setHours(0,0,0,0),u}))},e.now=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,0,0);return new Date}))},e.timestamp=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,0,0);let u=new Date;return u=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),u}))},e.toutc=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?null:new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds())}))},e.tolocal=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?null:t.MomentLibrary.Moment.utc([u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds(),u.getMilliseconds()]).toDate()}))},e.day=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getDate()}))},e.month=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMonth()}))},e.year=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getFullYear()}))},e.hour=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getHours()}))},e.second=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getSeconds()}))},e.millisecond=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMilliseconds()}))},e.minute=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMinutes()}))},e.weekday=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getDay()}))},e.isoweekday=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);if(null===u)return NaN;let o=u.getDay();return 0===o&&(o=7),o}))},e.isomonth=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,1,1);const u=t.toDate(r[0]);return null===u?NaN:u.getMonth()+1}))},e.isoweek=function(e,n){return c(e,n,(function(e,n,o){t.pcCheck(o,1,1);const c=t.toDate(o[0]);if(null===c)return NaN;const s=r(c).getTime()-u(c).getTime();return Math.round(s/6048e5)+1}))},e.isoyear=function(e,r){return c(e,r,(function(e,r,u){t.pcCheck(u,1,1);const o=t.toDate(u[0]);return null===o?NaN:n(o)}))},e.date=function(e,n){return c(e,n,(function(e,n,r){if(t.pcCheck(r,0,7),3===r.length)return o(new Date(t.toNumber(r[0]),t.toNumber(r[1]),t.toNumber(r[2]),0,0,0,0));if(4===r.length)return o(new Date(t.toNumber(r[0]),t.toNumber(r[1]),t.toNumber(r[2]),t.toNumber(r[3]),0,0,0));if(5===r.length)return o(new Date(t.toNumber(r[0]),t.toNumber(r[1]),t.toNumber(r[2]),t.toNumber(r[3]),t.toNumber(r[4]),0,0));if(6===r.length)return o(new Date(t.toNumber(r[0]),t.toNumber(r[1]),t.toNumber(r[2]),t.toNumber(r[3]),t.toNumber(r[4]),t.toNumber(r[5]),0));if(7===r.length)return o(new Date(t.toNumber(r[0]),t.toNumber(r[1]),t.toNumber(r[2]),t.toNumber(r[3]),t.toNumber(r[4]),t.toNumber(r[5]),t.toNumber(r[6])));if(2===r.length){let e=t.toString(r[1]);if(""===e)return null;e=t.standardiseDateFormat(e);const n=t.MomentLibrary.Moment(t.toString(r[0]),e,!0);return!0===n.isValid()?n.toDate():null}if(1===r.length){if(t.isString(r[0])){if(""===r[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;if(!0===/^[0-9][0-9][0-9][0-9]$/.test(r[0]))return t.toDate(r[0]+"-01-01")}const e=t.toNumber(r[0]);if(!1===isNaN(e))return o(new Date(e));return t.toDate(r[0])}return 0===r.length?new Date:void 0}))},e.datediff=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,2,3);const u=t.toDateM(r[0]),o=t.toDateM(r[1]);if(null===u||null===o)return NaN;switch(t.toString(r[2]).toLowerCase()){case"days":case"day":case"d":return u.diff(o,"days",!0);case"months":case"month":return u.diff(o,"months",!0);case"minutes":case"minute":case"m":return"M"===r[2]?u.diff(o,"months",!0):u.diff(o,"minutes",!0);case"seconds":case"second":case"s":return u.diff(o,"seconds",!0);case"milliseconds":case"millisecond":case"ms":return u.diff(o);case"hours":case"hour":case"h":return u.diff(o,"hours",!0);case"years":case"year":case"y":return u.diff(o,"years",!0);default:return u.diff(o)}}))},e.dateadd=function(e,n){return c(e,n,(function(e,n,r){t.pcCheck(r,2,3);const u=t.toDateM(r[0]);if(null===u)return null;let o="milliseconds";switch(t.toString(r[2]).toLowerCase()){case"days":case"day":case"d":o="days";break;case"months":case"month":o="months";break;case"minutes":case"minute":case"m":o="M"===r[2]?"months":"minutes";break;case"seconds":case"second":case"s":o="seconds";break;case"milliseconds":case"millisecond":case"ms":o="milliseconds";break;case"hours":case"hour":case"h":o="hours";break;case"years":case"year":case"y":o="years"}return u.add(t.toNumber(r[1]),o),u.toDate()}))}}e.registerFunctions=c,Object.defineProperty(e,"__esModule",{value:!0})}));
