/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../support/networkEnums"],(function(e,r,t){"use strict";function i(e,i){if(r.isNone(e))return null;const s={},a=new RegExp(`^${i}`,"i");for(const r of Object.keys(e))if(a.test(r)){const a=r.substring(i.length);s[t.impedanceAttributeNameJsonMap.fromJSON(a)]=e[r]}return s}function s(e,i,s){if(!r.isNone(e)){i.attributes||(i.attributes={});for(const r in e){const a=t.impedanceAttributeNameJsonMap.toJSON(r);i.attributes[`${s}${a}`]=e[r]}}}function a(e){const r={};for(const i of Object.keys(e)){const s=i;r[t.impedanceAttributeNameJsonMap.fromJSON(s)]=e[i]}return r}function o(e){const r={};for(const i of Object.keys(e)){const s=i;r[t.impedanceAttributeNameJsonMap.toJSON(s)]=e[i]}return r}function n(e,t){return r.isNone(e)||r.isNone(t)?null:Math.round((e-t)/6e4)}function u(e){const r=e.toJSON(),t=r;return t.accumulateAttributeNames&&(t.accumulateAttributeNames=r.accumulateAttributeNames?.join()),t.attributeParameterValues&&(t.attributeParameterValues=JSON.stringify(r.attributeParameterValues)),t.barriers&&(t.barriers=JSON.stringify(r.barriers)),t.outSR&&(t.outSR=r.outSR?.wkid),t.overrides&&(t.overrides=JSON.stringify(r.overrides)),t.polygonBarriers&&(t.polygonBarriers=JSON.stringify(r.polygonBarriers)),t.polylineBarriers&&(t.polylineBarriers=JSON.stringify(r.polylineBarriers)),t.restrictionAttributeNames&&(t.restrictionAttributeNames=r.restrictionAttributeNames?.join()),t.stops&&(t.stops=JSON.stringify(r.stops)),t.travelMode&&(t.travelMode=JSON.stringify(r.travelMode)),t}function c(e){const r=e.toJSON(),t=r;return t.accumulateAttributeNames&&(t.accumulateAttributeNames=r.accumulateAttributeNames?.join()),t.attributeParameterValues&&(t.attributeParameterValues=JSON.stringify(r.attributeParameterValues)),t.barriers&&(t.barriers=JSON.stringify(r.barriers)),t.facilities&&(t.facilities=JSON.stringify(r.facilities)),t.incidents&&(t.incidents=JSON.stringify(r.incidents)),t.outSR&&(t.outSR=r.outSR?.wkid),t.overrides&&(t.overrides=JSON.stringify(r.overrides)),t.polygonBarriers&&(t.polygonBarriers=JSON.stringify(r.polygonBarriers)),t.polylineBarriers&&(t.polylineBarriers=JSON.stringify(r.polylineBarriers)),t.restrictionAttributeNames&&(t.restrictionAttributeNames=r.restrictionAttributeNames?.join()),t.travelMode&&(t.travelMode=JSON.stringify(r.travelMode)),t}function l(e){const r=e.toJSON(),t=r;return t.accumulateAttributeNames&&(t.accumulateAttributeNames=r.accumulateAttributeNames?.join()),t.attributeParameterValues&&(t.attributeParameterValues=JSON.stringify(r.attributeParameterValues)),t.barriers&&(t.barriers=JSON.stringify(r.barriers)),t.defaultBreaks&&(t.defaultBreaks=r.defaultBreaks?.join()),t.excludeSourcesFromPolygons&&(t.excludeSourcesFromPolygons=r.excludeSourcesFromPolygons?.join()),t.facilities&&(t.facilities=JSON.stringify(r.facilities)),t.outSR&&(t.outSR=r.outSR?.wkid),t.overrides&&(t.overrides=JSON.stringify(r.overrides)),t.polygonBarriers&&(t.polygonBarriers=JSON.stringify(r.polygonBarriers)),t.polylineBarriers&&(t.polylineBarriers=JSON.stringify(r.polylineBarriers)),t.restrictionAttributeNames&&(t.restrictionAttributeNames=r.restrictionAttributeNames?.join()),t.travelMode&&(t.travelMode=JSON.stringify(r.travelMode)),t}e.closestFacilityParametersToQueryParameters=c,e.fromKebabImpedanceAttributes=o,e.getPrefixedProperties=i,e.getTimezoneOffset=n,e.routeParametersToQueryParameters=u,e.serviceAreaParametersToQueryParameters=l,e.setPrefixedProperties=s,e.toKebabImpedanceAttributes=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
