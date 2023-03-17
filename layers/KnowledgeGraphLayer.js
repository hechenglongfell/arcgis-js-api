/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/Error","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","./Layer","./knowledgeGraph/KnowledgeGraphLayerDataManager","./knowledgeGraph/KnowledgeGraphSubLayer","./mixins/BlendLayer","./mixins/ScaleRangeLayer","../rest/knowledgeGraphService","../rest/knowledgeGraph/EntityType","../rest/knowledgeGraph/RelationshipType"],(function(e,i,t,a,n,o,r,s,l,p,d,h,y,c,g,u,m){"use strict";let f=function(i){function o(e){var a;return(a=i.call(this,e)||this).layers=new t,a.sublayerIdsCache=new Map,a.tables=new t,a.type="knowledge-graph",a._originalInclusionList=e.inclusionModeDefinition,a}e._inheritsLoose(o,i);var r=o.prototype;return r.normalizeCtorArgs=function(e){return{url:e.url,title:e.title}},r._initializeLayerProperties=function(e){const i=new Set,t=new Map;let o=[],r=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new a("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.inclusionModeDefinition?.generateAllSublayers?(o=e.knowledgeGraph.dataModel.entityTypes?e.knowledgeGraph.dataModel.entityTypes:[],r=e.knowledgeGraph.dataModel.relationshipTypes?e.knowledgeGraph.dataModel.relationshipTypes:[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?(e.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&t.set(e.name,e)})),e.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&t.set(e.name,e)})),e.inclusionModeDefinition?.namedTypeDefinitions.forEach(((a,s)=>{if(!t.get(s))return n.getLogger(this.declaredClass).warn(`A named type, ${s}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(s);t.get(s)instanceof m||"strictOrigin"in t.get(s)?i.has(s)||(i.add(s),r.push(t.get(s))):t.get(s)instanceof u||"properties"in t.get(s)?i.has(s)||(i.add(s),o.push(t.get(s))):(n.getLogger(this.declaredClass).warn(`A named type, ${s}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(s))}))):(o=e.knowledgeGraph.dataModel.entityTypes?e.knowledgeGraph.dataModel.entityTypes:[],r=e.knowledgeGraph.dataModel.relationshipTypes?e.knowledgeGraph.dataModel.relationshipTypes:[]);const s=new d.KnowledgeGraphLayerDataManager({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=o,this.memberRelationshipTypes=r,this.dataManager=s},r.load=function(){return this.addResolvingPromise(g.fetchKnowledgeGraph(this.url).then((e=>{this._initializeLayerProperties({knowledgeGraph:e,inclusionModeDefinition:this._originalInclusionList}),this.loadLayerAssumingLocalCache()}))),Promise.resolve(this)},r.loadLayerAssumingLocalCache=function(){this.memberEntityTypes.forEach((e=>{const i=new h({objectType:e,parentCompositeLayer:this,graphType:"entity",title:e.name});i.geometryType?this.layers.push(i):this.tables.push(i),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)})),this.memberRelationshipTypes.forEach((e=>{const i=new h({objectType:e,parentCompositeLayer:this,graphType:"relationship",title:e.name});i.geometryType?this.layers.push(i):this.tables.push(i),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)})),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,i)=>{e.members?.forEach((e=>{this.sublayerIdsCache.has(i)?this.sublayerIdsCache.get(i)?.push(e.id):this.sublayerIdsCache.set(i,[e.id])}))})),Array.from(this.sublayerIdsCache.values()).forEach((e=>e.sort()))},o}(y.BlendLayer(c.ScaleRangeLayer(p)));i.__decorate([o.property()],f.prototype,"dataManager",void 0),i.__decorate([o.property()],f.prototype,"knowledgeGraph",void 0),i.__decorate([o.property()],f.prototype,"layers",void 0),i.__decorate([o.property()],f.prototype,"memberEntityTypes",void 0),i.__decorate([o.property()],f.prototype,"memberRelationshipTypes",void 0),i.__decorate([o.property()],f.prototype,"sublayerIdsCache",void 0),i.__decorate([o.property()],f.prototype,"tables",void 0),i.__decorate([o.property({json:{read:!1}})],f.prototype,"type",void 0),f=i.__decorate([l.subclass("esri.layers.KnowledgeGraphLayer")],f);return f}));
