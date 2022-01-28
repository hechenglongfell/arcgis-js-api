/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/Collection","../../core/Error","../../core/HandleOwner","../../core/maybe","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","../../rest/query/support/AttachmentInfo","../../rest/support/AttachmentQuery","../Feature/support/featureUtils"],(function(t,e,a,n,r,i,c,o,s,h,d,u,l,p,m,y){"use strict";const f={editing:!1,operations:{add:!0,update:!0,delete:!0}},A=n.ofType(p),_="graphic.layer.capabilities.operations.supportsResizeAttachments";let g=function(e){function a(a){var n;return(n=e.call(this,a)||this)._getAttachmentsPromise=null,n._attachmentLayer=null,n.abilities={...f},n.activeAttachmentInfo=null,n.attachmentInfos=new A,n.graphic=null,n.mode="view",n.handles.add([o.init(t._assertThisInitialized(n),"graphic",(()=>n._graphicChanged()))]),n}t._inheritsLoose(a,e);var n=a.prototype;return n.destroy=function(){this._attachmentLayer=null,this.graphic=null},n.castAbilities=function(t){return{...f,...t}},n.getAttachments=function(){var e=t._asyncToGenerator((function*(){const{_attachmentLayer:t,attachmentInfos:e}=this;if(!t||"function"!=typeof t.queryAttachments)throw new r("invalid-layer","getAttachments(): A valid layer is required.");const a=this._getFeatureId(),n=new m({objectIds:[a],returnMetadata:!0}),i=[],c=t.queryAttachments(n).then((t=>t[a]||i)).catch((()=>i));this._getAttachmentsPromise=c,this.notifyChange("state");const o=yield c;return e.removeAll(),o.length&&e.addMany(o),this._getAttachmentsPromise=null,this.notifyChange("state"),o}));function a(){return e.apply(this,arguments)}return a}(),n.addAttachment=function(){var e=t._asyncToGenerator((function*(t){const{_attachmentLayer:e,attachmentInfos:a,graphic:n,abilities:i}=this;if(!t)throw new r("invalid-attachment","addAttachment(): An attachment is required.",{attachment:t});if(!i.operations.add)throw new r("invalid-abilities","addAttachment(): add abilities are required.");if(!e||"function"!=typeof e.addAttachment)throw new r("invalid-layer","addAttachment(): A valid layer is required.");const c=e.addAttachment(n,t).then((t=>this._queryAttachment(t.objectId))),o=yield c;return a.add(o),o}));function a(t){return e.apply(this,arguments)}return a}(),n.deleteAttachment=function(){var e=t._asyncToGenerator((function*(t){const{_attachmentLayer:e,attachmentInfos:a,graphic:n,abilities:i}=this;if(!t)throw new r("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:t});if(!i.operations.delete)throw new r("invalid-abilities","deleteAttachment(): delete abilities are required.");if(!e||"function"!=typeof e.deleteAttachments)throw new r("invalid-layer","deleteAttachment(): A valid layer is required.");const c=e.deleteAttachments(n,[t.id]).then((()=>t)),o=yield c;return a.remove(o),o}));function a(t){return e.apply(this,arguments)}return a}(),n.updateAttachment=function(){var e=t._asyncToGenerator((function*(t,e=this.activeAttachmentInfo){const{_attachmentLayer:a,attachmentInfos:n,graphic:i,abilities:c}=this;if(!t)throw new r("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:t});if(!e)throw new r("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:e});if(!c.operations.update)throw new r("invalid-abilities","updateAttachment(): Update abilities are required.");const o=n.findIndex((t=>t===e));if(!a||"function"!=typeof a.updateAttachment)throw new r("invalid-layer","updateAttachment(): A valid layer is required.");const s=a.updateAttachment(i,e.id,t).then((t=>this._queryAttachment(t.objectId))),h=yield s;return n.splice(o,1,h),h}));function a(t){return e.apply(this,arguments)}return a}(),n._queryAttachment=function(){var e=t._asyncToGenerator((function*(t){if(!t)throw new r("invalid-attachment-id","Could not query attachment.");const{_attachmentLayer:e}=this,a=this._getFeatureId(),n=new m({objectIds:[a],attachmentsWhere:`AttachmentId=${t}`,returnMetadata:!0});return e.queryAttachments(n).then((t=>t[a][0]))}));function a(t){return e.apply(this,arguments)}return a}(),n._getFeatureId=function(){const{_attachmentLayer:t,graphic:e}=this;if(!t||!e)return null;const{objectIdField:a}=t,{attributes:n}=e;return n&&n[a]},n._graphicChanged=function(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch((()=>{})))},n._setAttachmentLayer=function(){const{graphic:t}=this,e=y.getSourceLayer(t);this._attachmentLayer=e?"scene"===e.type&&c.isSome(e.associatedLayer)?e.associatedLayer:e:null},t._createClass(a,[{key:"state",get:function(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}},{key:"supportsResizeAttachments",get:function(){return this.get(_)||!1}}]),a}(i.HandleOwner);e.__decorate([s.property()],g.prototype,"abilities",void 0),e.__decorate([u.cast("abilities")],g.prototype,"castAbilities",null),e.__decorate([s.property()],g.prototype,"activeAttachmentInfo",void 0),e.__decorate([s.property({readOnly:!0,type:A})],g.prototype,"attachmentInfos",void 0),e.__decorate([s.property({type:a})],g.prototype,"graphic",void 0),e.__decorate([s.property()],g.prototype,"mode",void 0),e.__decorate([s.property({readOnly:!0})],g.prototype,"state",null),e.__decorate([s.property({readOnly:!0})],g.prototype,"supportsResizeAttachments",null),g=e.__decorate([l.subclass("esri.widgets.Attachments.AttachmentsViewModel")],g);return g}));
