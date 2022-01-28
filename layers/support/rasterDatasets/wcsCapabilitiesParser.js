/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/Error","../../../geometry/Extent","./xmlUtilities"],(function(e,t,n,r){"use strict";function i(e){return e.indexOf("?")===e.length-1?e.substring(0,e.length-1):e}function a(e){var t,a,o;const l=r.getElementValue(e,"Service/name"),s=r.getElement(e,"Capability"),m=null!=(t=r.getElement(s,"GetCapabilities/Get/OnlineResource").getAttribute("xlink:href"))?t:"",c=null!=(a=r.getElement(s,"DescribeCoverage/Get/OnlineResource").getAttribute("xlink:href"))?a:"",u=null!=(o=r.getElement(s,"GetCoverage/Get/OnlineResource").getAttribute("xlink:href"))?o:"",g={getCapabilities:i(m),describeCoverage:i(c),getCoverage:i(u)},p=r.getElements(e,"CoverageOfferingBrief"),d=[];for(let i=0;i<p.length;i++){const e=p[i],t=r.getElementValue(e,"name"),a=r.getElements(e,"pos"),o=r.getSpaceDelimitedNumericValues(a[0]),l=r.getSpaceDelimitedNumericValues(a[1]),s=new n({xmin:o[0],ymin:o[1],xmax:l[0],ymax:l[1],spatialReference:{wkid:4326}});d.push({id:t,lonLatEnvelope:s})}return{name:l,onlineResources:g,coverages:d,supportedVersions:["1.0.0"]}}function o(e){const t={};for(let i=0;i<e.childNodes.length;i++){const a=e.childNodes[i];if(1!==a.nodeType)continue;const l=r.getNodeNameIgnoreNS(a).toLowerCase();switch(l){case"title":case"abstract":t[l]=r.getElementValue(a);break;case"identifier":t.id=r.getElementValue(a);break;case"wgs84boundingbox":{const e=r.getSpaceDelimitedNumericValues(a,"LowerCorner"),i=r.getSpaceDelimitedNumericValues(a,"UpperCorner");t.lonLatEnvelope=new n({xmin:e[0],ymin:e[1],xmax:i[0],ymax:i[1],spatialReference:{wkid:4326}})}break;case"coveragesummary":t.coverageSummaries=t.coverageSummaries||[],t.coverageSummaries.push(o(a))}}return t}function l(e,t){if(e.coverageSummaries)for(let n=0;n<e.coverageSummaries.length;n++)e.coverageSummaries[n].abstract=e.coverageSummaries[n].abstract||e.abstract,e.coverageSummaries[n].lonLatEnvelope=e.coverageSummaries[n].lonLatEnvelope||e.lonLatEnvelope,e.coverageSummaries[n].title=e.coverageSummaries[n].title||e.title,l(e.coverageSummaries[n],t);null!=e.id&&t.push(e)}function s(e){const t=r.getElement(e.querySelector("Operation[name=GetCapabilities]"),"Get").getAttribute("xlink:href")||"",n=r.getElement(e.querySelector("Operation[name=DescribeCoverage]"),"Get").getAttribute("xlink:href")||"",a=r.getElement(e.querySelector("Operation[name=GetCoverage]"),"Get").getAttribute("xlink:href")||"";return{getCapabilities:i(t),describeCoverage:i(n),getCoverage:i(a)}}function m(e){const t=r.getElementValue(e,"ServiceIdentification/Title"),n=r.getElementValues(e,"ServiceIdentification/ServiceTypeVersion"),i=s(r.getElement(e,"OperationsMetadata")),a=[],m=r.getElement(e,"Contents");for(let s=0;s<m.childNodes.length;s++){const e=m.childNodes[s];1===e.nodeType&&(r.isSameTagIgnoreNS(e,"CoverageSummary")&&l(o(e),a))}return{name:t,onlineResources:i,coverages:a,supportedVersions:n,supportedFormats:r.getElementValues(m,"SupportedFormat")}}function c(e){const t=r.getElement(e,"ServiceIdentification"),i=r.getElementValue(t,"Title"),a=r.getElementValues(t,"ServiceTypeVersion"),o=r.getElementValues(t,"Profile"),l=s(r.getElement(e,"OperationsMetadata")),m=r.getElements(e,"Contents/CoverageSummary"),c=[];for(let s=0;s<m.length;s++){const e=m[s],t=r.getElementValue(e,"CoverageId"),i=r.getElement(e,"WGS84BoundingBox");let a;if(i){const e=r.getSpaceDelimitedNumericValues(i,"LowerCorner"),t=r.getSpaceDelimitedNumericValues(i,"UpperCorner");a=new n({xmin:e[0],ymin:e[1],xmax:t[0],ymax:t[1],spatialReference:{wkid:4326}})}c.push({id:t,lonLatEnvelope:a})}const u=r.getElement(e,"ServiceMetadata");return{name:i,supportedVersions:a,supportedFormats:r.getElementValues(u,"formatSupported"),supportedInterpolations:r.getElementValues(u,"interpolationSupported"),onlineResources:l,profiles:o,coverages:c}}function u(e,n=null){let r=null;if("string"==typeof e){r=(new DOMParser).parseFromString(e,"text/xml")}else r=e;const i=r.documentElement.getAttribute("version"),o=(i||n||"1.0.0").slice(0,3);let l;if("2.0"===o)l=c(r);else if("1.1"===o)l=m(r);else{if("1.0"!==o)throw new t("wcsraster:parsecapabilities","the capabilities version is not supported");l=a(r)}return l.capabilitiesVersion=i,l}e.parseCapabilities=u,Object.defineProperty(e,"__esModule",{value:!0})}));
