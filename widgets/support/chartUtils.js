/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../intl","../../core/has","../../intl/locale"],(function(e,n,f,c,s,a){"use strict";var r=["#ffffff","#858585","#ffbebe","#ffebbe","#ffebaf","#ffffbe","#e9ffbe","#d3ffbe","#beffe8","#bee8ff","#bed2ff","#e8beff","#ffbee8","#ebebeb","#707070","#ff7f7f","#ffa77f","#ffd37f","#ffff73","#d1ff73","#a3ff73","#73ffdf","#73dfff","#73b2ff","#df73ff","#ff73df","#d6d6d6","#5c5c5c","#ff0000","#ff5500","#ffaa00","#ffff00","#aaff00","#55ff00","#00ffc5","#00c5ff","#0070ff","#c500ff","#ff00c5","#c2c2c2","#474747","#e60000","#e64c00","#e69800","#e6e600","#98e600","#4ce600","#00e6a9","#00a9e6","#005ce6","#a900e6","#e600a9","#adadad","#242424","#a80000","#a83800","#a87000","#a8a800","#70a800","#38a800","#00a884","#0084a8","#004da8","#8400a8","#a80084","#999999","#1a1a1a","#730000","#732600","#734c00","#737300","#4c7300","#267300","#00734c","#004c73","#002673","#4c0073","#73004"],t=[{name:"default",colors:[].concat(r.slice(30,39),r.slice(28,30).reverse())},{name:"cat-dark",colors:["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"]},{name:"tropical-bliss",colors:["#fce138","#ff9399","#fcd27e","#f1983c","#a553b7","#b1a9d0","#6ecffc","#4c81cd","#fc6f84","#fc3e5a","#6af689","#48885c"]},{name:"desert-blooms",colors:["#102432","#144d59","#ffc730","#ed9310","#a64f1b","#661510","#d9351a","#b31515","#4a0932","#8c213f","#18382e","#2c6954"]},{name:"under-the-sea",colors:["#bf9727","#607100","#00734c","#704489","#01acca","#024e76","#f09100","#ea311f","#c6004b","#7570b3","#666666","#333333"]},{name:"vibrant-rainbow",colors:["#fffb00","#f5cb11","#9fd40c","#46e39c","#32b8a6","#7ff2fa","#ac08cc","#dd33ff","#eb7200","#e8a784","#bf2e2e","#6c7000"]},{name:"ocean-bay",colors:["#191921","#11495c","#78b1c2","#454f4b","#8f8f82","#9be0c0","#87b051","#f7ec88","#ebdcc1","#dbb658","#c43541","#75351e"]},{name:"prairie-summer",colors:["#332424","#751555","#d47013","#d68989","#211173","#82aad6","#7bfaeb","#6ec9a8","#6b6408","#eada40","#ccc54a","#1fc235"]},{name:"pastel-chalk",colors:["#fffd99","#f5e6a4","#c1d48c","#b8e3d0","#a0b8b5","#cbf7fa","#d791f2","#dfc1eb","#f2b983","#e8c4b2","#bf8e8e","#94995c"]},{name:"seq-yellow-orange-red-bright",colors:["#910000","#b1260b","#c0370f","#e05919","#ef6a1d","#ff7b22","#ffa143","#ffb454","#ffda74","#ffed85"]},{name:"seq-reds-bright",colors:["#57453b","#7b4238","#9f4036","#c23d33","#d7483c","#ec5244","#f3696c","#f9816c","#ffc4ae","#fff0dc"]},{name:"seq-purples-bright",colors:["#4e465c","#5a4a78","#695291","#775baa","#8663c3","#946bdc","#aa89e8","#c1a6f3","#d7c4ff","#e6e1ff"]},{name:"seq-blues-bright",colors:["#404d54","#435c6c","#48799d","#4b88b6","#4d96ce","#50a5e7","#74bbed","#98d0f3","#bce6f9","#e6faff"]},{name:"seq-greens-bright",colors:["#39544c","#386757","#368165","#359b73","#33b581","#4bc392","#64d2a2","#7ce0b3","#cbf6d9","#f4ffea"]},{name:"seq-browns-bright",colors:["#524834","#715b38","#8f6e3c","#ae8140","#cc9444","#eba748","#eeb664","#f0c47f","#f9e0b7","#fff8eb"]}];const o="en-us",h=new Map([["ar",()=>new Promise(((n,f)=>e(["../../chunks/ar"],n,f))).then((e=>e.ar))],["bg-bg",()=>new Promise(((n,f)=>e(["../../chunks/bg_BG"],n,f))).then((e=>e.bg_BG))],["bs-ba",()=>new Promise(((n,f)=>e(["../../chunks/bs_BA"],n,f))).then((e=>e.bs_BA))],["ca-es",()=>new Promise(((n,f)=>e(["../../chunks/ca_ES"],n,f))).then((e=>e.ca_ES))],["cs-cz",()=>new Promise(((n,f)=>e(["../../chunks/cs_CZ"],n,f))).then((e=>e.cs_CZ))],["da-dk",()=>new Promise(((n,f)=>e(["../../chunks/da_DK"],n,f))).then((e=>e.da_DK))],["de-de",()=>new Promise(((n,f)=>e(["../../chunks/de_DE"],n,f))).then((e=>e.de_DE))],["de-ch",()=>new Promise(((n,f)=>e(["../../chunks/de_CH"],n,f))).then((e=>e.de_CH))],["el-gr",()=>new Promise(((n,f)=>e(["../../chunks/el_GR"],n,f))).then((e=>e.el_GR))],["en-us",()=>new Promise(((n,f)=>e(["../../chunks/en_US"],n,f))).then((e=>e.en_US))],["en-ca",()=>new Promise(((n,f)=>e(["../../chunks/en_CA"],n,f))).then((e=>e.en_CA))],["es-es",()=>new Promise(((n,f)=>e(["../../chunks/es_ES"],n,f))).then((e=>e.es_ES))],["et-ee",()=>new Promise(((n,f)=>e(["../../chunks/et_EE"],n,f))).then((e=>e.et_EE))],["fi-fi",()=>new Promise(((n,f)=>e(["../../chunks/fi_FI"],n,f))).then((e=>e.fi_FI))],["fr-fr",()=>new Promise(((n,f)=>e(["../../chunks/fr_FR"],n,f))).then((e=>e.fr_FR))],["he-il",()=>new Promise(((n,f)=>e(["../../chunks/he_IL"],n,f))).then((e=>e.he_IL))],["hr-hr",()=>new Promise(((n,f)=>e(["../../chunks/hr_HR"],n,f))).then((e=>e.hr_HR))],["hu-hu",()=>new Promise(((n,f)=>e(["../../chunks/hu_HU"],n,f))).then((e=>e.hu_HU))],["id-id",()=>new Promise(((n,f)=>e(["../../chunks/id_ID"],n,f))).then((e=>e.id_ID))],["it-it",()=>new Promise(((n,f)=>e(["../../chunks/it_IT"],n,f))).then((e=>e.it_IT))],["ja-jp",()=>new Promise(((n,f)=>e(["../../chunks/ja_JP"],n,f))).then((e=>e.ja_JP))],["ko-kr",()=>new Promise(((n,f)=>e(["../../chunks/ko_KR"],n,f))).then((e=>e.ko_KR))],["lt-lt",()=>new Promise(((n,f)=>e(["../../chunks/lt_LT"],n,f))).then((e=>e.lt_LT))],["lv-lv",()=>new Promise(((n,f)=>e(["../../chunks/lv_LV"],n,f))).then((e=>e.lv_LV))],["nb-no",()=>new Promise(((n,f)=>e(["../../chunks/nb_NO"],n,f))).then((e=>e.nb_NO))],["nl-nl",()=>new Promise(((n,f)=>e(["../../chunks/nl_NL"],n,f))).then((e=>e.nl_NL))],["pl-pl",()=>new Promise(((n,f)=>e(["../../chunks/pl_PL"],n,f))).then((e=>e.pl_PL))],["pt-br",()=>new Promise(((n,f)=>e(["../../chunks/pt_BR"],n,f))).then((e=>e.pt_BR))],["pt-pt",()=>new Promise(((n,f)=>e(["../../chunks/pt_PT"],n,f))).then((e=>e.pt_PT))],["ro-ro",()=>new Promise(((n,f)=>e(["../../chunks/ro_RO"],n,f))).then((e=>e.ro_RO))],["ru-ru",()=>new Promise(((n,f)=>e(["../../chunks/ru_RU"],n,f))).then((e=>e.ru_RU))],["sk-sk",()=>new Promise(((n,f)=>e(["../../chunks/sk_SK"],n,f))).then((e=>e.sk_SK))],["sl-sl",()=>new Promise(((n,f)=>e(["../../chunks/sl_SL"],n,f))).then((e=>e.sl_SL))],["sr-rs",()=>new Promise(((n,f)=>e(["../../chunks/sr_RS"],n,f))).then((e=>e.sr_RS))],["sv-se",()=>new Promise(((n,f)=>e(["../../chunks/sv_SE"],n,f))).then((e=>e.sv_SE))],["th-th",()=>new Promise(((n,f)=>e(["../../chunks/th_TH"],n,f))).then((e=>e.th_TH))],["tr-tr",()=>new Promise(((n,f)=>e(["../../chunks/tr_TR"],n,f))).then((e=>e.tr_TR))],["uk-ua",()=>new Promise(((n,f)=>e(["../../chunks/uk_UA"],n,f))).then((e=>e.uk_UA))],["vi-vn",()=>new Promise(((n,f)=>e(["../../chunks/vi_VN"],n,f))).then((e=>e.vi_VN))],["zh-cn",()=>new Promise(((n,f)=>e(["../../chunks/zh_Hans"],n,f))).then((e=>e.zh_Hans))],["zh-hk",()=>new Promise(((n,f)=>e(["../../chunks/zh_Hant"],n,f))).then((e=>e.zh_Hant))],["zh-tw",()=>new Promise(((n,f)=>e(["../../chunks/zh_Hant"],n,f))).then((e=>e.zh_Hant))]]);function i(e){const n=e.split("-")[0].toLowerCase();let f=null;for(const c of h.keys())if(c.startsWith(n)){f=c;break}return f}function b(e){return e?h.has(e.toLowerCase())?e.toLowerCase():i(e)||o:o}let u=null,l=null;function d(){return _.apply(this,arguments)}function _(){return(_=f._asyncToGenerator((function*(n=a.getLocale()){if(n=b(n),u&&n===l)return u;u=new Promise(((n,f)=>e(["../../chunks/index2"],n,f))).then((e=>e.index)),l=n;try{const[e,f]=yield Promise.all([u,h.get(l)()]);l===n&&(e.am4core.options.defaultLocale=f.default),e.am4core.options.suppressWarnings=!0,e.am4core.options.autoDispose=!0}catch{return u=null,l=null,null}return u}))).apply(this,arguments)}function m(e,n="default"){const f=t.find((e=>e.name===n));return f?f.colors.map((n=>e.color(n))):null}n.getChartLocale=b,n.getColorSet=m,n.loadChartsModule=d,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
