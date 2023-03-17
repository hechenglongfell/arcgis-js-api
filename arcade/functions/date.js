/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../ArcadeDate","../../chunks/languageUtils","../executionError","../../intl/locale","../../chunks/datetime"],(function(e,t,n,r,o,a){"use strict";function u(e,t,n){return e+(c(n)?s:i)[t]}function c(e){return e%4==0&&(e%100!=0||e%400==0)}const i=[0,31,59,90,120,151,181,212,243,273,304,334],s=[0,31,60,91,121,152,182,213,244,274,305,335];function l(e){return null===e?e:!1===e.isValid?null:e}function d(e,t){return""===e||"default"===e.toLowerCase().trim()?n.defaultTimeZone(t):e}function m(e,c){e.today=function(e,r){return c(e,r,((o,a,u)=>{n.pcCheck(u,0,0,e,r);const c=new Date;return c.setHours(0,0,0,0),t.ArcadeDate.dateJSAndZoneToArcadeDate(c,n.defaultTimeZone(e))}))},e.changetimezone=function(e,r){return c(e,r,((o,a,u)=>{n.pcCheck(u,2,2,e,r);const c=n.toDate(u[0],n.defaultTimeZone(e));if(null===c)return null;const i=t.ArcadeDate.arcadeDateAndZoneToArcadeDate(c,d(n.toString(u[1]),e));return!1===i.isValid?null:i}))},e.timezone=function(e,r){return c(e,r,((o,a,u)=>{n.pcCheck(u,1,2,e,r);const c=n.toDate(u[0],n.defaultTimeZone(e));if(null===c)return null;const i=c.timeZone;return"system"===i?t.ArcadeDate.systemTimeZoneCanonicalName:i}))},e.timezoneoffset=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?null:u.timeZoneOffset}))},e.now=function(e,r){return c(e,r,((o,a,u)=>{n.pcCheck(u,0,0,e,r);const c=t.ArcadeDate.nowToArcadeDate(n.defaultTimeZone(e));return!1===c.isValid?null:c}))},e.timestamp=function(e,r){return c(e,r,((o,a,u)=>{n.pcCheck(u,0,0,e,r);const c=t.ArcadeDate.nowUTCToArcadeDate();return!1===c.isValid?null:c}))},e.toutc=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?null:u.toUTC()}))},e.tolocal=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?null:u.toLocal()}))},e.day=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.day}))},e.month=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.monthJS}))},e.year=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.year}))},e.hour=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.hour}))},e.second=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.second}))},e.millisecond=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.millisecond}))},e.minute=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.minute}))},e.week=function(e,t){return c(e,t,((o,a,c)=>{n.pcCheck(c,1,2,e,t);const i=n.toDate(c[0],n.defaultTimeZone(e));if(null===i)return NaN;const s=n.toNumber(n.defaultUndefined(c[1],0));if(s<0||s>6)throw new r.ArcadeExecutionError(e,r.ExecutionErrorCodes.InvalidParameter,t);const l=i.day,d=i.monthJS,m=i.year,f=i.dayOfWeekJS,N=u(l,d,m)-1,D=Math.floor(N/7);return f-s+(f-s<0?7:0)<N-7*D?D+1:D}))},e.weekday=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.dayOfWeekJS}))},e.isoweekday=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.dayOfWeekISO}))},e.isomonth=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.monthISO}))},e.isoweek=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.weekISO}))},e.isoyear=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,1,1,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));return null===u?NaN:u.yearISO}))},e.date=function(e,r){return c(e,r,((u,c,i)=>{if(n.pcCheck(i,0,8,e,r),3===i.length)return l(t.ArcadeDate.fromParts(n.toNumber(i[0]),n.toNumber(i[1])+1,n.toNumber(i[2]),0,0,0,0,n.defaultTimeZone(e)));if(4===i.length)return l(t.ArcadeDate.fromParts(n.toNumber(i[0]),n.toNumber(i[1])+1,n.toNumber(i[2]),n.toNumber(i[3]),0,0,0,n.defaultTimeZone(e)));if(5===i.length)return l(t.ArcadeDate.fromParts(n.toNumber(i[0]),n.toNumber(i[1])+1,n.toNumber(i[2]),n.toNumber(i[3]),n.toNumber(i[4]),0,0,n.defaultTimeZone(e)));if(6===i.length)return l(t.ArcadeDate.fromParts(n.toNumber(i[0]),n.toNumber(i[1])+1,n.toNumber(i[2]),n.toNumber(i[3]),n.toNumber(i[4]),n.toNumber(i[5]),0,n.defaultTimeZone(e)));if(7===i.length)return l(t.ArcadeDate.fromParts(n.toNumber(i[0]),n.toNumber(i[1])+1,n.toNumber(i[2]),n.toNumber(i[3]),n.toNumber(i[4]),n.toNumber(i[5]),n.toNumber(i[6]),n.defaultTimeZone(e)));if(8===i.length)return l(t.ArcadeDate.fromParts(n.toNumber(i[0]),n.toNumber(i[1])+1,n.toNumber(i[2]),n.toNumber(i[3]),n.toNumber(i[4]),n.toNumber(i[5]),n.toNumber(i[6]),d(n.toString(i[7]),e)));if(2===i.length){let e,r=n.toString(i[1]);return""===r?null:(r=n.standardiseDateFormat(r),e="X"===r?a.DateTime.fromSeconds(n.toNumber(i[0])):"x"===r?a.DateTime.fromMillis(n.toNumber(i[0])):a.DateTime.fromFormat(n.toString(i[0]),r,{locale:o.getLocale(),numberingSystem:"latn"}),e.isValid?t.ArcadeDate.dateTimeToArcadeDate(e):null)}if(1===i.length){if(n.isString(i[0])){if(""===i[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;if(!0===/^[0-9][0-9][0-9][0-9]$/.test(i[0]))return n.toDate(i[0]+"-01-01",n.defaultTimeZone(e))}const r=n.toNumber(i[0]);if(!1===isNaN(r)){const o=a.DateTime.fromMillis(r);return o.isValid?t.ArcadeDate.dateTimeAndZoneToArcadeDate(o,n.defaultTimeZone(e)):null}return n.toDate(i[0],n.defaultTimeZone(e))}return 0===i.length?t.ArcadeDate.nowToArcadeDate(n.defaultTimeZone(e)):null}))},e.datediff=function(e,r){return c(e,r,((o,a,u)=>{n.pcCheck(u,2,4,e,r);let c=n.toDate(u[0],n.defaultTimeZone(e)),i=n.toDate(u[1],n.defaultTimeZone(e));if(null===c||null===i)return NaN;let s=n.defaultUndefined(u[3],"");switch(""!==s&&null!==s?(s=n.toString(s),c=t.ArcadeDate.arcadeDateAndZoneToArcadeDate(c,s),i=t.ArcadeDate.arcadeDateAndZoneToArcadeDate(i,s)):c.timeZone!==i.timeZone&&(c.isUnknownTimeZone?c=t.ArcadeDate.arcadeDateAndZoneToArcadeDate(c,i.timeZone):i=(i.isUnknownTimeZone,t.ArcadeDate.arcadeDateAndZoneToArcadeDate(i,c.timeZone))),n.toString(u[2]).toLowerCase()){case"days":case"day":case"d":return c.diff(i,"days");case"months":case"month":return c.diff(i,"months");case"minutes":case"minute":case"m":return"M"===u[2]?c.diff(i,"months"):c.diff(i,"minutes");case"seconds":case"second":case"s":return c.diff(i,"seconds");case"milliseconds":case"millisecond":case"ms":default:return c.diff(i);case"hours":case"hour":case"h":return c.diff(i,"hours");case"years":case"year":case"y":return c.diff(i,"years")}}))},e.dateadd=function(e,t){return c(e,t,((r,o,a)=>{n.pcCheck(a,2,3,e,t);const u=n.toDate(a[0],n.defaultTimeZone(e));if(null===u)return null;let c=n.toNumber(a[1]);if(isNaN(c))return u;let i="milliseconds";switch(n.toString(a[2]).toLowerCase()){case"days":case"day":case"d":i="days",c=n.absRound(c);break;case"months":case"month":i="months",c=n.absRound(c);break;case"minutes":case"minute":case"m":i="M"===a[2]?"months":"minutes";break;case"seconds":case"second":case"s":i="seconds";break;case"milliseconds":case"millisecond":case"ms":i="milliseconds";break;case"hours":case"hour":case"h":i="hours";break;case"years":case"year":case"y":i="years"}return u.plus({[i]:c})}))}}e.registerFunctions=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
