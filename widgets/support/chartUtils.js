/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../intl","../../core/has","../../intl/locale"],(function(n,e,f,c,t,r){"use strict";var o=["#ffffff","#858585","#ffbebe","#ffebbe","#ffebaf","#ffffbe","#e9ffbe","#d3ffbe","#beffe8","#bee8ff","#bed2ff","#e8beff","#ffbee8","#ebebeb","#707070","#ff7f7f","#ffa77f","#ffd37f","#ffff73","#d1ff73","#a3ff73","#73ffdf","#73dfff","#73b2ff","#df73ff","#ff73df","#d6d6d6","#5c5c5c","#ff0000","#ff5500","#ffaa00","#ffff00","#aaff00","#55ff00","#00ffc5","#00c5ff","#0070ff","#c500ff","#ff00c5","#c2c2c2","#474747","#e60000","#e64c00","#e69800","#e6e600","#98e600","#4ce600","#00e6a9","#00a9e6","#005ce6","#a900e6","#e600a9","#adadad","#242424","#a80000","#a83800","#a87000","#a8a800","#70a800","#38a800","#00a884","#0084a8","#004da8","#8400a8","#a80084","#999999","#1a1a1a","#730000","#732600","#734c00","#737300","#4c7300","#267300","#00734c","#004c73","#002673","#4c0073","#73004"],u=[{name:"default",colors:[].concat(o.slice(30,39),o.slice(28,30).reverse())},{name:"cat-dark",colors:["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"]},{name:"tropical-bliss",colors:["#fce138","#ff9399","#fcd27e","#f1983c","#a553b7","#b1a9d0","#6ecffc","#4c81cd","#fc6f84","#fc3e5a","#6af689","#48885c"]},{name:"desert-blooms",colors:["#102432","#144d59","#ffc730","#ed9310","#a64f1b","#661510","#d9351a","#b31515","#4a0932","#8c213f","#18382e","#2c6954"]},{name:"under-the-sea",colors:["#bf9727","#607100","#00734c","#704489","#01acca","#024e76","#f09100","#ea311f","#c6004b","#7570b3","#666666","#333333"]},{name:"vibrant-rainbow",colors:["#fffb00","#f5cb11","#9fd40c","#46e39c","#32b8a6","#7ff2fa","#ac08cc","#dd33ff","#eb7200","#e8a784","#bf2e2e","#6c7000"]},{name:"ocean-bay",colors:["#191921","#11495c","#78b1c2","#454f4b","#8f8f82","#9be0c0","#87b051","#f7ec88","#ebdcc1","#dbb658","#c43541","#75351e"]},{name:"prairie-summer",colors:["#332424","#751555","#d47013","#d68989","#211173","#82aad6","#7bfaeb","#6ec9a8","#6b6408","#eada40","#ccc54a","#1fc235"]},{name:"pastel-chalk",colors:["#fffd99","#f5e6a4","#c1d48c","#b8e3d0","#a0b8b5","#cbf7fa","#d791f2","#dfc1eb","#f2b983","#e8c4b2","#bf8e8e","#94995c"]},{name:"seq-yellow-orange-red-bright",colors:["#910000","#b1260b","#c0370f","#e05919","#ef6a1d","#ff7b22","#ffa143","#ffb454","#ffda74","#ffed85"]},{name:"seq-reds-bright",colors:["#57453b","#7b4238","#9f4036","#c23d33","#d7483c","#ec5244","#f3696c","#f9816c","#ffc4ae","#fff0dc"]},{name:"seq-purples-bright",colors:["#4e465c","#5a4a78","#695291","#775baa","#8663c3","#946bdc","#aa89e8","#c1a6f3","#d7c4ff","#e6e1ff"]},{name:"seq-blues-bright",colors:["#404d54","#435c6c","#48799d","#4b88b6","#4d96ce","#50a5e7","#74bbed","#98d0f3","#bce6f9","#e6faff"]},{name:"seq-greens-bright",colors:["#39544c","#386757","#368165","#359b73","#33b581","#4bc392","#64d2a2","#7ce0b3","#cbf6d9","#f4ffea"]},{name:"seq-browns-bright",colors:["#524834","#715b38","#8f6e3c","#ae8140","#cc9444","#eba748","#eeb664","#f0c47f","#f9e0b7","#fff8eb"]}];const i="en-us",s=new Map([["ar",()=>new Promise((function(e,f){n(["../../chunks/ar2"],e,f)})).then((function(n){return n.ar}))],["bs-ba",()=>new Promise((function(e,f){n(["../../chunks/bs_BA"],e,f)})).then((function(n){return n.bs_BA}))],["ca-es",()=>new Promise((function(e,f){n(["../../chunks/ca_ES"],e,f)})).then((function(n){return n.ca_ES}))],["cs-cz",()=>new Promise((function(e,f){n(["../../chunks/cs_CZ"],e,f)})).then((function(n){return n.cs_CZ}))],["da-dk",()=>new Promise((function(e,f){n(["../../chunks/da_DK"],e,f)})).then((function(n){return n.da_DK}))],["de-de",()=>new Promise((function(e,f){n(["../../chunks/de_DE"],e,f)})).then((function(n){return n.de_DE}))],["de-ch",()=>new Promise((function(e,f){n(["../../chunks/de_CH"],e,f)})).then((function(n){return n.de_CH}))],["el-gr",()=>new Promise((function(e,f){n(["../../chunks/el_GR"],e,f)})).then((function(n){return n.el_GR}))],["en-us",()=>new Promise((function(e,f){n(["../../chunks/en_US"],e,f)})).then((function(n){return n.en_US}))],["en-ca",()=>new Promise((function(e,f){n(["../../chunks/en_CA"],e,f)})).then((function(n){return n.en_CA}))],["es-es",()=>new Promise((function(e,f){n(["../../chunks/es_ES"],e,f)})).then((function(n){return n.es_ES}))],["et-ee",()=>new Promise((function(e,f){n(["../../chunks/et_EE"],e,f)})).then((function(n){return n.et_EE}))],["fi-fi",()=>new Promise((function(e,f){n(["../../chunks/fi_FI"],e,f)})).then((function(n){return n.fi_FI}))],["fr-fr",()=>new Promise((function(e,f){n(["../../chunks/fr_FR"],e,f)})).then((function(n){return n.fr_FR}))],["he-il",()=>new Promise((function(e,f){n(["../../chunks/he_IL"],e,f)})).then((function(n){return n.he_IL}))],["hr-hr",()=>new Promise((function(e,f){n(["../../chunks/hr_HR"],e,f)})).then((function(n){return n.hr_HR}))],["hu-hu",()=>new Promise((function(e,f){n(["../../chunks/hu_HU"],e,f)})).then((function(n){return n.hu_HU}))],["id-id",()=>new Promise((function(e,f){n(["../../chunks/id_ID"],e,f)})).then((function(n){return n.id_ID}))],["it-it",()=>new Promise((function(e,f){n(["../../chunks/it_IT"],e,f)})).then((function(n){return n.it_IT}))],["ja-jp",()=>new Promise((function(e,f){n(["../../chunks/ja_JP"],e,f)})).then((function(n){return n.ja_JP}))],["ko-kr",()=>new Promise((function(e,f){n(["../../chunks/ko_KR"],e,f)})).then((function(n){return n.ko_KR}))],["lt-lt",()=>new Promise((function(e,f){n(["../../chunks/lt_LT"],e,f)})).then((function(n){return n.lt_LT}))],["lv-lv",()=>new Promise((function(e,f){n(["../../chunks/lv_LV"],e,f)})).then((function(n){return n.lv_LV}))],["nb-no",()=>new Promise((function(e,f){n(["../../chunks/nb_NO"],e,f)})).then((function(n){return n.nb_NO}))],["nl-nl",()=>new Promise((function(e,f){n(["../../chunks/nl_NL"],e,f)})).then((function(n){return n.nl_NL}))],["pl-pl",()=>new Promise((function(e,f){n(["../../chunks/pl_PL"],e,f)})).then((function(n){return n.pl_PL}))],["pt-br",()=>new Promise((function(e,f){n(["../../chunks/pt_BR"],e,f)})).then((function(n){return n.pt_BR}))],["pt-pt",()=>new Promise((function(e,f){n(["../../chunks/pt_PT"],e,f)})).then((function(n){return n.pt_PT}))],["ro-ro",()=>new Promise((function(e,f){n(["../../chunks/ro_RO"],e,f)})).then((function(n){return n.ro_RO}))],["ru-ru",()=>new Promise((function(e,f){n(["../../chunks/ru_RU"],e,f)})).then((function(n){return n.ru_RU}))],["sk-sk",()=>new Promise((function(e,f){n(["../../chunks/sk_SK"],e,f)})).then((function(n){return n.sk_SK}))],["sl-sl",()=>new Promise((function(e,f){n(["../../chunks/sl_SL"],e,f)})).then((function(n){return n.sl_SL}))],["sr-rs",()=>new Promise((function(e,f){n(["../../chunks/sr_RS"],e,f)})).then((function(n){return n.sr_RS}))],["sv-se",()=>new Promise((function(e,f){n(["../../chunks/sv_SE"],e,f)})).then((function(n){return n.sv_SE}))],["th-th",()=>new Promise((function(e,f){n(["../../chunks/th_TH"],e,f)})).then((function(n){return n.th_TH}))],["tr-tr",()=>new Promise((function(e,f){n(["../../chunks/tr_TR"],e,f)})).then((function(n){return n.tr_TR}))],["uk-ua",()=>new Promise((function(e,f){n(["../../chunks/uk_UA"],e,f)})).then((function(n){return n.uk_UA}))],["vi-vn",()=>new Promise((function(e,f){n(["../../chunks/vi_VN"],e,f)})).then((function(n){return n.vi_VN}))],["zh-cn",()=>new Promise((function(e,f){n(["../../chunks/zh_Hans"],e,f)})).then((function(n){return n.zh_Hans}))],["zh-hk",()=>new Promise((function(e,f){n(["../../chunks/zh_Hant"],e,f)})).then((function(n){return n.zh_Hant}))],["zh-tw",()=>new Promise((function(e,f){n(["../../chunks/zh_Hant"],e,f)})).then((function(n){return n.zh_Hant}))]]);function a(n){const e=n.split("-")[0].toLowerCase();let f=null;for(const c of s.keys())if(c.startsWith(e)){f=c;break}return f}function h(n){return n?s.has(n.toLowerCase())?n.toLowerCase():a(n)||i:i}let b,l;function d(){return _.apply(this,arguments)}function _(){return(_=f._asyncToGenerator((function*(e=r.getLocale()){if(e=h(e),b&&e===l)return b;b=new Promise((function(e,f){n(["../../chunks/index"],e,f)})).then((function(n){return n.index})),l=e;try{const[n,f]=yield Promise.all([b,s.get(l)()]);l===e&&(n.am4core.options.defaultLocale=f.default),n.am4core.options.suppressWarnings=!0,n.am4core.options.autoDispose=!0}catch{return b=null,l=null,null}return b}))).apply(this,arguments)}function m(n,e="default"){const f=u.find((n=>n.name===e));return f?f.colors.map((e=>n.color(e))):null}e.getChartLocale=h,e.getColorSet=m,e.loadChartsModule=d,Object.defineProperty(e,"__esModule",{value:!0})}));
