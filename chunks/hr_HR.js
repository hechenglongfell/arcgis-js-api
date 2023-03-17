/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_commonjsHelpers","./_commonjs-dynamic-modules"],(function(e,o,r){"use strict";function t(e,o){for(var r=0;r<o.length;r++){const t=o[r];if("string"!=typeof t&&!Array.isArray(t))for(const o in t)if("default"!==o&&!(o in e)){const r=Object.getOwnPropertyDescriptor(t,o);r&&Object.defineProperty(e,o,r.get?r:{enumerable:!0,get:()=>t[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={};!function(e,o){var t,a;t=function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default={_decimalSeparator:",",_thousandSeparator:".",_percentPrefix:null,_percentSuffix:"%",_big_number_suffix_3:"k",_big_number_suffix_6:"M",_big_number_suffix_9:"G",_big_number_suffix_12:"T",_big_number_suffix_15:"P",_big_number_suffix_18:"E",_big_number_suffix_21:"Z",_big_number_suffix_24:"Y",_small_number_suffix_3:"m",_small_number_suffix_6:"μ",_small_number_suffix_9:"n",_small_number_suffix_12:"p",_small_number_suffix_15:"f",_small_number_suffix_18:"a",_small_number_suffix_21:"z",_small_number_suffix_24:"y",_byte_suffix_B:"B",_byte_suffix_KB:"KB",_byte_suffix_MB:"MB",_byte_suffix_GB:"GB",_byte_suffix_TB:"TB",_byte_suffix_PB:"PB",_date_millisecond:"mm:ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"MMM dd",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",_duration_millisecond_second:"ss.SSS",_duration_millisecond_minute:"mm:ss SSS",_duration_millisecond_hour:"hh:mm:ss SSS",_duration_millisecond_day:"d'd' mm:ss SSS",_duration_millisecond_week:"d'd' mm:ss SSS",_duration_millisecond_month:"M'm' dd'd' mm:ss SSS",_duration_millisecond_year:"y'y' MM'm' dd'd' mm:ss SSS",_duration_second:"ss",_duration_second_minute:"mm:ss",_duration_second_hour:"hh:mm:ss",_duration_second_day:"d'd' hh:mm:ss",_duration_second_week:"d'd' hh:mm:ss",_duration_second_month:"M'm' dd'd' hh:mm:ss",_duration_second_year:"y'y' MM'm' dd'd' hh:mm:ss",_duration_minute:"mm",_duration_minute_hour:"hh:mm",_duration_minute_day:"d'd' hh:mm",_duration_minute_week:"d'd' hh:mm",_duration_minute_month:"M'm' dd'd' hh:mm",_duration_minute_year:"y'y' MM'm' dd'd' hh:mm",_duration_hour:"hh'h'",_duration_hour_day:"d'd' hh'h'",_duration_hour_week:"d'd' hh'h'",_duration_hour_month:"M'm' dd'd' hh'h'",_duration_hour_year:"y'y' MM'm' dd'd' hh'h'",_duration_day:"d'd'",_duration_day_week:"d'd'",_duration_day_month:"M'm' dd'd'",_duration_day_year:"y'y' MM'm' dd'd'",_duration_week:"w'w'",_duration_week_month:"w'w'",_duration_week_year:"w'w'",_duration_month:"M'm'",_duration_month_year:"y'y' MM'm'",_duration_year:"y'y'",_era_ad:"po. Kr.",_era_bc:"pr. Kr.",A:"AM",P:"PM",AM:"AM",PM:"PM","A.M.":"AM","P.M.":"PM",January:"siječnja",February:"veljače",March:"ožujka",April:"travnja",May:"svibnja",June:"lipnja",July:"srpnja",August:"kolovoza",September:"rujna",October:"listopada",November:"studenoga",December:"prosinca",Jan:"sij",Feb:"velj",Mar:"ožu",Apr:"tra","May(short)":"svi",Jun:"lip",Jul:"srp",Aug:"kol",Sep:"ruj",Oct:"lis",Nov:"stu",Dec:"pro",Sunday:"nedjelja",Monday:"ponedjeljak",Tuesday:"utorak",Wednesday:"srijeda",Thursday:"četvrtak",Friday:"petak",Saturday:"subota",Sun:"ned",Mon:"pon",Tue:"uto",Wed:"sri",Thu:"čet",Fri:"pet",Sat:"sub",_dateOrd:function(e){var o="th";if(e<11||e>13)switch(e%10){case 1:o="st";break;case 2:o="nd";break;case 3:o="rd"}return o},"Zoom Out":"Povećaj",Play:"Reproduciraj",Stop:"Zaustavi",Legend:"Legenda","Click, tap or press ENTER to toggle":"",Loading:"Učitavanje",Home:"Početna",Chart:"","Serial chart":"","X/Y chart":"","Pie chart":"","Gauge chart":"","Radar chart":"","Sankey diagram":"","Flow diagram":"","Chord diagram":"","TreeMap chart":"","Sliced chart":"",Series:"","Candlestick Series":"","OHLC Series":"","Column Series":"","Line Series":"","Pie Slice Series":"","Funnel Series":"","Pyramid Series":"","X/Y Series":"",Map:"","Press ENTER to zoom in":"","Press ENTER to zoom out":"","Use arrow keys to zoom in and out":"","Use plus and minus keys on your keyboard to zoom in and out":"",Export:"Ispis",Image:"Slika",Data:"Podaci",Print:"Ispis","Click, tap or press ENTER to open":"","Click, tap or press ENTER to print.":"","Click, tap or press ENTER to export as %1.":"",'To save the image, right-click this link and choose "Save picture as..."':"",'To save the image, right-click thumbnail on the left and choose "Save picture as..."':"","(Press ESC to close this message)":"","Image Export Complete":"","Export operation took longer than expected. Something might have gone wrong.":"","Saved from":"",PNG:"",JPG:"",GIF:"",SVG:"",PDF:"",JSON:"",CSV:"",XLSX:"","Use TAB to select grip buttons or left and right arrows to change selection":"","Use left and right arrows to move selection":"","Use left and right arrows to move left selection":"","Use left and right arrows to move right selection":"","Use TAB select grip buttons or up and down arrows to change selection":"","Use up and down arrows to move selection":"","Use up and down arrows to move lower selection":"","Use up and down arrows to move upper selection":"","From %1 to %2":"Od %1 do %2","From %1":"Od %1","To %1":"Do %1","No parser available for file: %1":"","Error parsing file: %1":"","Unable to load file: %1":"","Invalid date":""}},void 0!==(a=t(r.commonjsRequire,o))&&(e.exports=a)}({get exports(){return a},set exports(e){a=e}},a);const _=t({__proto__:null,default:o.getDefaultExportFromCjs(a)},[a]);e.hr_HR=_}));
