/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../Graphic","../../../core/maybe","../../../geometry/Polygon","../../../rest/support/AddressToLocationsParameters","../../../rest/support/LocationToAddressParameters","../../../rest/support/SuggestLocationsParameters","./geometryUtils"],(function(e,t,o,r,s,n,c,i){"use strict";const a="Single Line Input",u=3e5;function l(e,t){return e.location?x(e,t):v(e,t)}function d(e){const t=null==e?void 0:e.scale;return"number"==typeof t&&t<=u?e.get("extent.center"):null}function g(e,t){const{source:r,spatialReference:s,view:n,suggestTerm:i,maxSuggestions:a,sourceIndex:u}=e,l=new c,{apiKey:g,locator:m}=r,f=S(r,n),p=t&&t.signal;if(!m)return Promise.resolve(null);g&&(l.apiKey=g),r.categories&&(l.categories=r.categories),s&&(l.outSpatialReference=s);const y=d(n);y&&(l.location=y);if(!i.trim())return Promise.resolve(null);const{prefix:x="",suffix:v=""}=r,w=`${x}${i}${v}`;return l.text=w,f&&(l.searchExtent=o.unwrap(f)),l.maxSuggestions=a,r.countryCode&&(l.countryCode=r.countryCode),m.suggestLocations(l,{signal:p}).then((e=>I(e,u)))}function m(e){return!!e&&/(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function f(e){return!!e&&/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(e)}function p(e){return!!e&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(e)}const y="https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";function x(e,t){const{source:o,spatialReference:r,location:s,sourceIndex:c,view:i}=e,{apiKey:a,locator:u,zoomScale:l,defaultZoomScale:d}=o,g=i&&i.scale,m=t&&t.signal,f=new n;return f.location=s,a&&(f.apiKey=a),r&&(f.outSpatialReference=r),u.locationToAddress(f,{signal:m}).then((e=>L([e],{sourceIndex:c,scale:g,view:i,zoomScale:l,defaultZoomScale:d})))}function S(e,t){const{filter:o,withinViewEnabled:r}=e,s=t&&t.scale,n=t&&t.extent,c=o&&o.geometry;return i.createExtentFromGeometry(c,t,s)||(r&&n?n:void 0)}function v(e,t){const{source:r,suggestResult:n,spatialReference:c,view:i,maxResults:u,sourceIndex:l}=e,g=r&&r.zoomScale,m=r&&r.defaultZoomScale;if(!n.text.trim())return Promise.resolve(null);const f=!n.key&&r.prefix?r.prefix:"",p=!n.key&&r.suffix?r.suffix:"",y=`${f}${n.text}${p}`,x=new s,{apiKey:v,locator:w}=r,I=i&&i.scale,G=S(r,i),P=t&&t.signal;if(v&&(x.apiKey=v),!w)return Promise.resolve(null);r.categories&&(x.categories=r.categories),r.locationType&&(x.locationType=r.locationType),c&&(x.outSpatialReference=c);const R=d(i);R&&(x.location=R),x.maxLocations=u,G&&(x.searchExtent=o.unwrap(G)),r.countryCode&&(x.countryCode=r.countryCode);const{key:$}=n,b=`${$}`;return $&&(x.magicKey=b),x.address={},x.address[r.singleLineFieldName||a]=y,r.outFields&&(x.outFields=r.outFields),w.addressToLocations(x,{signal:P}).then((e=>L(e,{key:b,scale:I,sourceIndex:l,view:i,zoomScale:g,defaultZoomScale:m})))}function w(e,t){return{text:e.text,key:e.magicKey,sourceIndex:t}}function I(e,t){return e.map((e=>w(e,t)))}function G(e,s){const{key:n,scale:c,sourceIndex:a,view:u,zoomScale:l,defaultZoomScale:d}=s,{attributes:g,extent:m,location:f,address:p}=e,y=new t({geometry:f,attributes:g}),x=m||f,S=i.createExtentFromGeometry(x,u,c),v="number"==typeof l?i.scaleExtent(S,u,l):"number"==typeof d&&"point"===x.type?i.scaleExtent(S,u,d):S,w=f?`${f.x},${f.y}`:"",I=p||w,G=y.clone();return o.isSome(v)&&(G.geometry=r.fromExtent(v)),{extent:v,feature:y,target:G,key:n,name:I,sourceIndex:a}}function L(e,t){return e.map((e=>G(e,t)))}e.getLocation=d,e.getResults=l,e.getSuggestions=g,e.isArcGISWorldGeocoder=p,e.isMeteredArcGISWorldGeocoder=m,e.isProxiedArcGISWorldGeocoder=f,e.meteredArcGISLocatorUrl=y,Object.defineProperty(e,"__esModule",{value:!0})}));
