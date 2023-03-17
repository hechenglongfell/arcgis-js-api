/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/Accessor","../../core/Collection","../../core/Error","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../rest/query/support/AttachmentInfo","../../rest/support/AttachmentQuery","../Feature/support/featureUtils"],(function(t,e,n,i,a,r,o,c,s,h,l,d,u,p,f){"use strict";const m={editing:!1,operations:{add:!0,update:!0,delete:!0}},y=a.ofType(u);let A=function(e){function n(t){var n;return(n=e.call(this,t)||this)._getAttachmentsPromise=null,n._attachmentLayer=null,n.abilities={...m},n.activeAttachmentInfo=null,n.activeFileInfo=null,n.attachmentInfos=new y,n.fileInfos=new a,n.graphic=null,n.mode="view",n.filesEnabled=!1,n.addHandles(c.watch((()=>n.graphic),(()=>n._graphicChanged()),c.initial)),n}t._inheritsLoose(n,e);var i=n.prototype;return i.destroy=function(){this._attachmentLayer=null,this.graphic=null},i.castAbilities=function(t){return{...m,...t}},i.getAttachments=function(){var e=t._asyncToGenerator((function*(){const{_attachmentLayer:t,attachmentInfos:e}=this;if(!t||"function"!=typeof t.queryAttachments)throw new r("invalid-layer","getAttachments(): A valid layer is required.");const n=this._getObjectId(),i=new p({objectIds:[n],returnMetadata:!0}),a=[],o=t.queryAttachments(i).then((t=>t[n]||a)).catch((()=>a));this._getAttachmentsPromise=o,this.notifyChange("state");const c=yield o;return e.removeAll(),c.length&&e.addMany(c),this._getAttachmentsPromise=null,this.notifyChange("state"),c}));function n(){return e.apply(this,arguments)}return n}(),i.addAttachment=function(){var e=t._asyncToGenerator((function*(t,e=this.graphic){const{_attachmentLayer:n,attachmentInfos:i,abilities:a}=this;if(!e)throw new r("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:e});if(!t)throw new r("invalid-attachment","addAttachment(): An attachment is required.",{attachment:t});if(!a.operations?.add)throw new r("invalid-abilities","addAttachment(): add abilities are required.");if(!n||"function"!=typeof n.addAttachment)throw new r("invalid-layer","addAttachment(): A valid layer is required.");const o=n.addAttachment(e,t).then((t=>this._queryAttachment(t.objectId,e))),c=yield o;return i.add(c),c}));function n(t){return e.apply(this,arguments)}return n}(),i.deleteAttachment=function(){var e=t._asyncToGenerator((function*(t){const{_attachmentLayer:e,attachmentInfos:n,graphic:i,abilities:a}=this;if(!t)throw new r("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:t});if(!a.operations?.delete)throw new r("invalid-abilities","deleteAttachment(): delete abilities are required.");if(!e||"function"!=typeof e.deleteAttachments)throw new r("invalid-layer","deleteAttachment(): A valid layer is required.");if(!i)throw new r("invalid-graphic","deleteAttachment(): A graphic is required.");const o=e.deleteAttachments(i,[t.id]).then((()=>t)),c=yield o;return n.remove(c),c}));function n(t){return e.apply(this,arguments)}return n}(),i.updateAttachment=function(){var e=t._asyncToGenerator((function*(t,e=this.activeAttachmentInfo){const{_attachmentLayer:n,attachmentInfos:i,graphic:a,abilities:o}=this;if(!t)throw new r("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:t});if(!e)throw new r("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:e});if(!o.operations?.update)throw new r("invalid-abilities","updateAttachment(): Update abilities are required.");const c=i.findIndex((t=>t===e));if(!n||"function"!=typeof n.updateAttachment)throw new r("invalid-layer","updateAttachment(): A valid layer is required.");if(!a)throw new r("invalid-graphic","updateAttachment(): A graphic is required.");const s=n.updateAttachment(a,e.id,t).then((t=>this._queryAttachment(t.objectId))),h=yield s;return i.splice(c,1,h),h}));function n(t){return e.apply(this,arguments)}return n}(),i.commitFiles=function(){var e=t._asyncToGenerator((function*(){return yield Promise.all(this.fileInfos.items.map((t=>this.addAttachment(t.form)))),this.fileInfos.removeAll(),this.getAttachments()}));function n(){return e.apply(this,arguments)}return n}(),i.addFile=function(t,e){if(!t||!e)return null;const n={file:t,form:e};return this.fileInfos.add(n),n},i.updateFile=function(t,e,n=this.activeFileInfo){if(!t||!e||!n)return null;const i=this.fileInfos.findIndex((t=>n===t));return i>-1&&this.fileInfos.splice(i,1,{file:t,form:e}),this.fileInfos.items[i]},i.deleteFile=function(t){const e=this.fileInfos.find((e=>e.file===t));return e?(this.fileInfos.remove(e),e):null},i._queryAttachment=function(){var e=t._asyncToGenerator((function*(t,e){const{_attachmentLayer:n}=this;if(!t||!n?.queryAttachments)throw new r("invalid-attachment-id","Could not query attachment.");const i=this._getObjectId(e),a=new p({objectIds:[i],attachmentsWhere:`AttachmentId=${t}`,returnMetadata:!0});return n.queryAttachments(a).then((t=>t[i][0]))}));function n(t,n){return e.apply(this,arguments)}return n}(),i._getObjectId=function(t=this.graphic){return t?.getObjectId()??null},i._graphicChanged=function(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch((()=>{})))},i._setAttachmentLayer=function(){const{graphic:t}=this,e=f.getSourceLayer(t);this._attachmentLayer=e?"scene"===e.type&&o.isSome(e.associatedLayer)?e.associatedLayer:e:null},t._createClass(n,[{key:"state",get:function(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}},{key:"supportsResizeAttachments",get:function(){const{graphic:t}=this;if(!t)return!1;const e=t.layer||t.sourceLayer;return e?.loaded&&"capabilities"in e&&e.capabilities&&"operations"in e.capabilities&&"supportsResizeAttachments"in e.capabilities.operations&&e.capabilities.operations.supportsResizeAttachments||!1}}]),n}(i);e.__decorate([s.property()],A.prototype,"abilities",void 0),e.__decorate([h.cast("abilities")],A.prototype,"castAbilities",null),e.__decorate([s.property()],A.prototype,"activeAttachmentInfo",void 0),e.__decorate([s.property()],A.prototype,"activeFileInfo",void 0),e.__decorate([s.property({readOnly:!0,type:y})],A.prototype,"attachmentInfos",void 0),e.__decorate([s.property()],A.prototype,"fileInfos",void 0),e.__decorate([s.property({type:n})],A.prototype,"graphic",void 0),e.__decorate([s.property()],A.prototype,"mode",void 0),e.__decorate([s.property({readOnly:!0})],A.prototype,"state",null),e.__decorate([s.property()],A.prototype,"filesEnabled",void 0),e.__decorate([s.property({readOnly:!0})],A.prototype,"supportsResizeAttachments",null),A=e.__decorate([d.subclass("esri.widgets.Attachments.AttachmentsViewModel")],A);return A}));
