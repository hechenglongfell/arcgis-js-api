/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/JSONSupport","./core/maybe","./core/timeUtils","./core/accessorSupport/decorators/property","./core/accessorSupport/ensureType","./core/arrayUtils","./core/accessorSupport/decorators/reader","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer"],(function(t,e,r,n,s,i,o,a,l,u,c){"use strict";var p;let d=p=function(e){function r(t){var r;return(r=e.call(this,t)||this).end=null,r.start=null,r}t._inheritsLoose(r,e);var i=r.prototype;return i.readEnd=function(t,e){return null!=e.end?new Date(e.end):null},i.writeEnd=function(t,e){e.end=t?t.getTime():null},i.readStart=function(t,e){return null!=e.start?new Date(e.start):null},i.writeStart=function(t,e){e.start=t?t.getTime():null},i.clone=function(){return new p({end:this.end,start:this.start})},i.equals=function(t){if(!t)return!1;const e=n.isSome(this.start)?this.start.getTime():this.start,r=n.isSome(this.end)?this.end.getTime():this.end,s=n.isSome(t.start)?t.start.getTime():t.start,i=n.isSome(t.end)?t.end.getTime():t.end;return e===s&&r===i},i.expandTo=function(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=n.applySome(this.start,(e=>s.truncateDate(e,t))),r=n.applySome(this.end,(e=>{const r=s.truncateDate(e,t);return e.getTime()===r.getTime()?r:s.offsetDate(r,1,t)}));return new p({start:e,end:r})},i.intersection=function(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return p.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=n.mapOr(this.start,-1/0,(t=>t.getTime())),r=n.mapOr(this.end,1/0,(t=>t.getTime())),s=n.mapOr(t.start,-1/0,(t=>t.getTime())),i=n.mapOr(t.end,1/0,(t=>t.getTime()));let o,a;if(s>=e&&s<=r?o=s:e>=s&&e<=i&&(o=e),r>=s&&r<=i?a=r:i>=e&&i<=r&&(a=i),null!=o&&null!=a&&!isNaN(o)&&!isNaN(a)){const t=new p;return t.start=o===-1/0?null:new Date(o),t.end=a===1/0?null:new Date(a),t}return p.empty},i.offset=function(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const r=new p,{start:i,end:o}=this;return n.isSome(i)&&(r.start=s.offsetDate(i,t,e)),n.isSome(o)&&(r.end=s.offsetDate(o,t,e)),r},i.union=function(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return m.clone();const e=n.isSome(this.start)&&n.isSome(t.start)?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=n.isSome(this.end)&&n.isSome(t.end)?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new p({start:e,end:r})},t._createClass(r,[{key:"isAllTime",get:function(){return this.equals(p.allTime)}},{key:"isEmpty",get:function(){return this.equals(p.empty)}}],[{key:"allTime",get:function(){return m}},{key:"empty",get:function(){return h}}]),r}(r.JSONSupport);e.__decorate([i.property({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),e.__decorate([l.reader("end")],d.prototype,"readEnd",null),e.__decorate([c.writer("end")],d.prototype,"writeEnd",null),e.__decorate([i.property({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),e.__decorate([i.property({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),e.__decorate([i.property({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),e.__decorate([l.reader("start")],d.prototype,"readStart",null),e.__decorate([c.writer("start")],d.prototype,"writeStart",null),d=p=e.__decorate([u.subclass("esri.TimeExtent")],d);const m=new d,h=new d({start:void 0,end:void 0});return d}));
