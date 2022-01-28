/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/Collection","./core/JSONSupport","./core/lang","./core/Logger","./core/promiseUtils","./core/accessorSupport/decorators/property","./core/accessorSupport/decorators/cast","./core/accessorSupport/decorators/reader","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer","./core/accessorSupport/ensureType","./layers/support/fieldUtils","./popup/content","./popup/ExpressionInfo","./popup/FieldInfo","./popup/LayerOptions","./popup/RelatedRecordsInfo","./popup/content/support/mediaInfoTypes","./support/actions/ActionBase","./support/actions/ActionButton","./support/actions/ActionToggle","./popup/content/MediaContent","./popup/content/TextContent","./popup/content/AttachmentsContent","./popup/content/FieldsContent","./popup/content/ExpressionContent","./popup/content/Content","./popup/content/CustomContent"],(function(e,t,o,n,r,i,s,p,l,a,c,d,f,u,y,h,m,_,I,x,F,A,g,w,N,v,C,E,O,S){"use strict";var T;const b=o.ofType({key:"type",defaultKeyValue:"button",base:F,typeMap:{button:A,toggle:g}}),L={base:O,key:"type",typeMap:{media:w,custom:S,text:N,attachments:v,fields:C,expression:E}},R="esri.PopupTemplate",J=i.getLogger(R),M=["attachments","fields","media","text","expression"];let P=T=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).actions=null,e.content="",e.expressionInfos=null,e.fieldInfos=null,e.layerOptions=null,e.lastEditInfoEnabled=!0,e.outFields=null,e.overwriteActions=!1,e.returnGeometry=!1,e.title="",e.relatedRecordsInfo=null,e}e._inheritsLoose(o,t);var n=o.prototype;return n.castContent=function(e){return Array.isArray(e)?e.map((e=>f.ensureOneOfType(L,e))):"string"==typeof e||"function"==typeof e||e instanceof HTMLElement||s.isPromiseLike(e)?e:(J.error("content error","unsupported content value",{value:e}),null)},n.readContent=function(e,t){const{popupElements:o}=t;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(t):this._readPopupInfo(t)},n.writeContent=function(e,t,o,n){"string"!=typeof e?Array.isArray(e)&&(t.popupElements=e.filter((e=>-1!==M.indexOf(e.type))).map((e=>e&&e.toJSON(n))),t.popupElements.forEach((e=>{"attachments"===e.type?this._writeAttachmentContent(t):"media"===e.type?this._writeMediaContent(e,t):"text"===e.type&&this._writeTextContent(e,t)}))):t.description=e},n.writeFieldInfos=function(e,t,o,n){const{content:r}=this,i=Array.isArray(r)?r:null;if(e){const o=i?i.filter((e=>"fields"===e.type)):[],r=o.length&&o.every((e=>{var t;return null==(t=e.fieldInfos)?void 0:t.length}));t.fieldInfos=e.filter(Boolean).map((e=>{const t=e.toJSON(n);return r&&(t.visible=!1),t}))}if(i)for(const s of i)"fields"===s.type&&this._writeFieldsContent(s,t)},n.writeLayerOptions=function(e,t,o,n){t[o]=!e||null===e.showNoDataRecords&&null===e.returnTopmostRaster?null:e.toJSON(n)},n.writeTitle=function(e,t){t.title=e||""},n.clone=function(){const{actions:e}=this,t=e?r.clone(e.toArray()):[];return new T({actions:t,content:Array.isArray(this.content)?r.clone(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?r.clone(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?r.clone(this.fieldInfos):null,layerOptions:this.layerOptions?r.clone(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?r.clone(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?r.clone(this.relatedRecordsInfo):null})},n.collectRequiredFields=function(){var t=e._asyncToGenerator((function*(e,t){yield this._collectExpressionInfoFields(e,t,this._getContentExpressionInfos(this.content,this.expressionInfos)),u.collectFields(e,t,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}));function o(e,o){return t.apply(this,arguments)}return o}(),n.getRequiredFields=function(){var t=e._asyncToGenerator((function*(e){const t=new Set;return yield this.collectRequiredFields(t,e),[...t].sort()}));function o(e){return t.apply(this,arguments)}return o}(),n._writeFieldsContent=function(e,t){if(!Array.isArray(e.fieldInfos)||!e.fieldInfos.length)return;const o=r.clone(e.fieldInfos);Array.isArray(t.fieldInfos)?o.forEach((e=>{const o=t.fieldInfos.find((t=>t.fieldName.toLowerCase()===e.fieldName.toLowerCase()));o?o.visible=!0:t.fieldInfos.push(e)})):t.fieldInfos=o},n._writeAttachmentContent=function(e){e.showAttachments||(e.showAttachments=!0)},n._writeTextContent=function(e,t){!t.description&&e.text&&(t.description=e.text)},n._writeMediaContent=function(e,t){if(!Array.isArray(e.mediaInfos)||!e.mediaInfos.length)return;const o=r.clone(e.mediaInfos);Array.isArray(t.mediaInfos)?t.mediaInfos=[...t.mediaInfos,...o]:t.mediaInfos=o},n._readPopupInfoElements=function({description:e,mediaInfos:t,popupElements:o}){const n={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!t||n.mediaInfos||(o.mediaInfos=t,n.mediaInfos=!0),w.fromJSON(o)):"text"===o.type?(o.text||!e||n.description||(o.text=e,n.description=!0),N.fromJSON(o)):"attachments"===o.type?v.fromJSON(o):"fields"===o.type?C.fromJSON(o):"expression"===o.type?E.fromJSON(o):void 0)).filter(Boolean)},n._readPopupInfo=function({description:e,mediaInfos:t,showAttachments:o}){const n=[];return e?n.push(new N({text:e})):n.push(new C),Array.isArray(t)&&t.length&&n.push(w.fromJSON({mediaInfos:t})),o&&n.push(v.fromJSON({displayType:"auto"})),n.length?n:e},n._getContentElementFields=function(e){const t=null==e?void 0:e.type;if("attachments"===t)return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description)];if("custom"===t)return e.outFields||[];if("fields"===t)return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description),...this._getFieldInfoFields(e.fieldInfos||this.fieldInfos)];if("media"===t){const t=e.mediaInfos||[];return[...this._extractFieldNames(e.title),...this._extractFieldNames(e.description),...t.reduce(((e,t)=>[...e,...this._getMediaInfoFields(t)]),[])]}return"text"===t?this._extractFieldNames(e.text):[]},n._getMediaInfoFields=function(e){const{caption:t,title:o,value:n}=e,r=n||{},{fields:i=[],normalizeField:s,tooltipField:p,sourceURL:l,linkURL:a}=r,c=[...this._extractFieldNames(o),...this._extractFieldNames(t),...this._extractFieldNames(l),...this._extractFieldNames(a),...i];return s&&c.push(s),p&&c.push(p),c},n._getContentExpressionInfos=function(e,t){return Array.isArray(e)?e.reduce(((e,t)=>[...e,..."expression"===t.type&&t.expressionInfo?[t.expressionInfo]:[]]),t||[]):[]},n._getContentFields=function(e){return"string"==typeof e?this._extractFieldNames(e):Array.isArray(e)?e.reduce(((e,t)=>[...e,...this._getContentElementFields(t)]),[]):[]},n._collectExpressionInfoFields=function(){var t=e._asyncToGenerator((function*(e,t,o){o&&(yield Promise.all(o.map((o=>u.collectArcadeFieldNames(e,t,o.expression)))))}));function o(e,o,n){return t.apply(this,arguments)}return o}(),n._getFieldInfoFields=function(e){return e?e.filter((e=>void 0===e.visible||!!e.visible)).map((e=>e.fieldName)).filter((e=>-1===e.indexOf("relationships/")&&-1===e.indexOf("expression/"))):[]},n._getActionsFields=function(e){return e?e.toArray().reduce(((e,t)=>[...e,...this._getActionFields(t)]),[]):[]},n._getActionFields=function(e){const{className:t,title:o,type:n}=e,r="button"===n||"toggle"===n?e.image:"";return[...this._extractFieldNames(o),...this._extractFieldNames(t),...this._extractFieldNames(r)]},n._getTitleFields=function(e){return"string"==typeof e?this._extractFieldNames(e):[]},n._extractFieldNames=function(e){if(!e||"string"!=typeof e)return[];const t=/{[^}]*}/g,o=e.match(t);if(!o)return[];const n=/\{(\w+):.+\}/,r=o.filter((e=>!(0===e.indexOf("{relationships/")||0===e.indexOf("{expression/")))).map((e=>e.replace(n,"{$1}")));return r?r.map((e=>e.slice(1,-1))):[]},o}(n.JSONSupport);t.__decorate([p.property({type:b})],P.prototype,"actions",void 0),t.__decorate([p.property()],P.prototype,"content",void 0),t.__decorate([l.cast("content")],P.prototype,"castContent",null),t.__decorate([a.reader("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],P.prototype,"readContent",null),t.__decorate([d.writer("content",{popupElements:{type:o.ofType(y.persistableTypes)},showAttachments:{type:Boolean},mediaInfos:{type:o.ofType(x.types)},description:{type:String}})],P.prototype,"writeContent",null),t.__decorate([p.property({type:[h],json:{write:!0}})],P.prototype,"expressionInfos",void 0),t.__decorate([p.property({type:[m]})],P.prototype,"fieldInfos",void 0),t.__decorate([d.writer("fieldInfos")],P.prototype,"writeFieldInfos",null),t.__decorate([p.property({type:_})],P.prototype,"layerOptions",void 0),t.__decorate([d.writer("layerOptions")],P.prototype,"writeLayerOptions",null),t.__decorate([p.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],P.prototype,"lastEditInfoEnabled",void 0),t.__decorate([p.property()],P.prototype,"outFields",void 0),t.__decorate([p.property()],P.prototype,"overwriteActions",void 0),t.__decorate([p.property()],P.prototype,"returnGeometry",void 0),t.__decorate([p.property({json:{type:String}})],P.prototype,"title",void 0),t.__decorate([d.writer("title")],P.prototype,"writeTitle",null),t.__decorate([p.property({type:I,json:{write:!0}})],P.prototype,"relatedRecordsInfo",void 0),P=T=t.__decorate([c.subclass(R)],P);return P}));
