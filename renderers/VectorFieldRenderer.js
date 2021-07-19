/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../geometry","../Graphic","../symbols","../core/jsonMap","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../geometry/support/normalizeUtils","../layers/support/rasterFunctions/vectorFieldUtils","./ClassBreaksRenderer","./mixins/VisualVariablesMixin","./support/ClassBreakInfo","./visualVariables/RotationVariable","./visualVariables/SizeVariable","./visualVariables/support/visualVariableUtils","../symbols/SimpleLineSymbol","../symbols/SimpleMarkerSymbol","../symbols/support/utils","../symbols/PictureMarkerSymbol","../geometry/Point"],(function(e,M,i,t,a,I,r,g,o,n,A,s,c,d,l,D,w,y,C,L,p,u,T,m,N,j,S,H,U){"use strict";var B;const z=new Set(["esriMetersPerSecond","esriKilometersPerHour","esriKnots","esriFeetPerSecond","esriMilesPerHour"]),Z=new r.JSONMap({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"}),b=new r.JSONMap({beaufort_ft:"beaufort-ft",beaufort_km:"beaufort-km",beaufort_kn:"beaufort-kn",beaufort_m:"beaufort-m",beaufort_mi:"beaufort-mi",classified_arrow:"classified-arrow",ocean_current_kn:"ocean-current-kn",ocean_current_m:"ocean-current-m",simple_scalar:"simple-scalar",single_arrow:"single-arrow",wind_speed:"wind-barb"}),h=new r.JSONMap({flow_from:"flow-from",flow_to:"flow-to"});let E=B=function(M){function t(e){var i;return(i=M.call(this,e)||this).attributeField="Magnitude",i.flowRepresentation="flow-from",i.rotationType="arithmetic",i.style="single-arrow",i.symbolTileSize=50,i.type="vector-field",i}e._inheritsLoose(t,M);var I=t.prototype;return I.readInputUnit=function(e,M){return z.has(e)?Z.fromJSON(e):null},I.readOutputUnit=function(e,M){return z.has(e)?Z.fromJSON(e):null},I.clone=function(){return new B({attributeField:this.attributeField,flowRepresentation:this.flowRepresentation,rotationType:this.rotationType,symbolTileSize:this.symbolTileSize,style:this.style,visualVariables:o.clone(this.visualVariables),inputUnit:this.inputUnit,outputUnit:this.outputUnit})},I.getGraphicsFromPixelData=function(){var M=e._asyncToGenerator((function*(e,M=!1,i=[]){const t=[],I=y.getUnitConversionFactor(this.inputUnit,this.outputUnit),r=M?y.convertVectorFieldData(e.pixelBlock,"vector-uv",this.rotationType,I):y.convertVectorFieldUnit(e.pixelBlock,"vector-magdir",I),g=e.extent,o=r.mask&&r.mask.length>0;let n=0;const A=(g.xmax-g.xmin)/r.width,s=(g.ymax-g.ymin)/r.height;for(let c=0;c<r.height;c++)for(let e=0;e<r.width;e++,n++){let M=new U({x:g.xmin+e*A+A/2,y:g.ymax-c*s-s/2,spatialReference:g.spatialReference});M=(yield w.normalizeCentralMeridian(M))[0];const I=i.some((e=>e.intersects(M)));if((!o||r.mask[n])&&!I){const e={Magnitude:r.pixels[0][n],Direction:r.pixels[1][n]},i=new a({geometry:{type:"point",x:M.x,y:M.y,spatialReference:g.spatialReference},attributes:e});i.symbol=this._getVisualVariablesAppliedSymbol(i),t.push(i)}}return t}));function i(e){return M.apply(this,arguments)}return i}(),I.getSymbol=function(e,M){},I.getSymbolAsync=function(){var M=e._asyncToGenerator((function*(e,M){}));function i(e,i){return M.apply(this,arguments)}return i}(),I.getSymbols=function(){return[]},I.getClassBreakInfos=function(){var e;return null==(e=this.styleRenderer)?void 0:e.classBreakInfos},I.getDefaultSymbol=function(){var e;return null==(e=this.styleRenderer)?void 0:e.defaultSymbol},I._getDefaultSymbol=function(e){return new j({path:"M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z",outline:new N({width:0}),size:20,color:e||new i([0,92,230])})},I._getVisualVariablesAppliedSymbol=function(e){if(!e)return;let M=this.styleRenderer&&this.styleRenderer.getSymbol(e);M=M.clone();const i=this.sizeVariables,t=this.rotationVariables;if(i&&i.length&&this.sizeVariables.forEach((i=>S.applySizesToSymbol(M,m.getAllSizes([i],e)))),t&&t.length){const i=e.attributes.Direction;e.attributes.Direction="flow-from"===this.flowRepresentation?i:i+180,this.rotationVariables.forEach((i=>S.applyRotationToSymbol(M,m.getRotationAngle(i,e),i.axis)))}return M},I._createStyleRenderer=function(e){let M={defaultSymbol:this._getDefaultSymbol(),classBreakInfos:[]};switch(e){case"single-arrow":M=this._createSingleArrowRenderer();break;case"beaufort-kn":M=this._createBeaufortKnotsRenderer();break;case"beaufort-m":M=this._createBeaufortMeterRenderer();break;case"beaufort-ft":M=this._createBeaufortFeetRenderer();break;case"beaufort-mi":M=this._createBeaufortMilesRenderer();break;case"beaufort-km":M=this._createBeaufortKilometersRenderer();break;case"ocean-current-m":M=this._createCurrentMeterRenderer();break;case"ocean-current-kn":M=this._createCurrentKnotsRenderer();break;case"simple-scalar":M=this._createSimpleScalarRenderer();break;case"wind-barb":M=this._createWindBarbsRenderer();break;case"classified-arrow":M=this._createClassifiedArrowRenderer()}return new C(M)},I._createSingleArrowRenderer=function(){return{defaultSymbol:this._getDefaultSymbol()}},I._createBeaufortKnotsRenderer=function(){const e=[0,1,3,6,10,16,21,27,33,40,47,55,63],M=[[40,146,199],[89,162,186],[129,179,171],[160,194,155],[191,212,138],[218,230,119],[250,250,100],[252,213,83],[252,179,102],[250,141,52],[247,110,42],[240,71,29]];return{defaultSymbol:this._getDefaultSymbol(new i([214,47,39])),classBreakInfos:this._getClassBreaks(e,M)}},I._createBeaufortMeterRenderer=function(){const e=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7],M=[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]];return{defaultSymbol:this._getDefaultSymbol(new i([214,47,39])),classBreakInfos:this._getClassBreaks(e,M)}},I._createBeaufortFeetRenderer=function(){const e=this._getDefaultSymbol(new i([214,47,39]));let M=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];const t=[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]],a=3.28084;M=M.map((e=>e*a));return{defaultSymbol:e,classBreakInfos:this._getClassBreaks(M,t)}},I._createBeaufortMilesRenderer=function(){const e=this._getDefaultSymbol(new i([214,47,39]));let M=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];const t=[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]],a=2.23694;M=M.map((e=>e*a));return{defaultSymbol:e,classBreakInfos:this._getClassBreaks(M,t)}},I._createBeaufortKilometersRenderer=function(){const e=this._getDefaultSymbol(new i([214,47,39]));let M=[0,.2,1.8,3.3,5.4,8.5,11,14.1,17.2,20.8,24.4,28.6,32.7];const t=[[69,117,181],[101,137,184],[132,158,186],[162,180,189],[192,204,190],[222,227,191],[255,255,191],[255,220,161],[250,185,132],[245,152,105],[237,117,81],[232,21,21]],a=3.6;M=M.map((e=>e*a));return{defaultSymbol:e,classBreakInfos:this._getClassBreaks(M,t)}},I._createCurrentMeterRenderer=function(){const e=[0,.5,1,1.5,2],M=[[78,26,153],[179,27,26],[202,128,26],[177,177,177]];return{defaultSymbol:this._getDefaultSymbol(new i([177,177,177])),classBreakInfos:this._getClassBreaks(e,M)}},I._createCurrentKnotsRenderer=function(){const e=[0,.25,.5,1,1.5,2,2.5,3,3.5,4],M=[[0,0,0],[0,37,100],[78,26,153],[151,0,100],[179,27,26],[177,78,26],[202,128,26],[177,179,52],[177,177,177]];return{defaultSymbol:this._getDefaultSymbol(new i([177,177,177])),classBreakInfos:this._getClassBreaks(e,M)}},I._createClassifiedArrowRenderer=function(){var e;const M=this._getDefaultSymbol(new i([56,168,0]));let t=[0,1e-6,3.5,7,10.5,14];if(null!=(e=this.sizeVariables)&&e.length){const e=this.sizeVariables[0].minDataValue,M=this.sizeVariables[0].maxDataValue;if(e&&M){const i=(M-e)/5;t=Array.from(Array(6).keys()).map((M=>e+i*M))}}const a=[[56,168,0],[139,309,0],[255,255,0],[255,128,0],[255,0,0]];return{defaultSymbol:M,classBreakInfos:this._getClassBreaks(t,a)}},I._createSimpleScalarRenderer=function(){return{defaultSymbol:H.fromJSON({imageData:"iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=",height:20,width:20,type:"esriPMS",angle:0})}},I._createWindBarbsRenderer=function(){const e=Array.from(Array(31).keys()).map((e=>5*e)),M=[{range:"0-5",path:"M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"5-10",path:"M25 0 L25 40 M25 35 L17.5 37.5",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"10-15",path:"M25 0 L25 40 L10 45 L25 40",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"15-20",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"20-25",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"25-30",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5",imageData:"PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"30-35",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"35-40",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"40-45",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"45-50",path:"M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"50-55",path:"M25 0 L25 40 L10 40 L25 35",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"55-60",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"60-65",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"65-70",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"70-75",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"75-80",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"80-85",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"85-90",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"90-95",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"95-100",path:"M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="},{range:"100-105",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"105-110",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"110-115",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"115-120",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"120-125",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"125-130",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"130-135",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"135-140",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="},{range:"140-145",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"},{range:"145-150",path:"M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",imageData:"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="}],i=H.fromJSON({imageData:"iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC",height:20,width:20,type:"esriPMS",angle:0}),t=e.map(((t,a)=>{let I;if(a!==e.length-1)if(0===a)I={minValue:t,maxValue:e[a+1],symbol:i};else{const i=H.fromJSON({type:"esriPMS",imageData:M[a].imageData,contentType:"image/svg+xml",height:32,width:32,angle:0});I={minValue:t,maxValue:e[a+1],symbol:i}}return new p(I)}));return{defaultSymbol:i,classBreakInfos:t}},I._getClassBreaks=function(e,M){return M.map(((M,t)=>new p({minValue:e[t],maxValue:e[t+1],symbol:this._getDefaultSymbol(new i(M))})))},e._createClass(t,[{key:"styleRenderer",get:function(){const e=this.style,M=this.attributeField,i=this._createStyleRenderer(e);return i.field=M,i}},{key:"sizeVariables",get:function(){const e=[];if(this.visualVariables)for(const M of this.visualVariables)"size"===M.type&&e.push(M);if(0===e.length){const M=new T({field:"Magnitude",minSize:.2*this.symbolTileSize,maxSize:.8*this.symbolTileSize});this.visualVariables?this.visualVariables.push(M):this._set("visualVariables",[M]),e.push(M)}return e}},{key:"rotationVariables",get:function(){const e=[];if(this.visualVariables)for(const M of this.visualVariables)"rotation"===M.type&&e.push(M);if(0===e.length){const M=new u({field:"Direction",rotationType:this.rotationType});this.visualVariables?this.visualVariables.push(M):this._set("visualVariables",[M]),e.push(M)}return e}}]),t}(L.VisualVariablesMixin(g.JSONSupport));return M.__decorate([n.property({type:String,json:{write:!0}})],E.prototype,"attributeField",void 0),M.__decorate([n.property({type:h.apiValues,json:{type:h.jsonValues,read:{reader:h.read},write:{writer:h.write}}})],E.prototype,"flowRepresentation",void 0),M.__decorate([n.property({type:["geographic","arithmetic"],json:{write:!0}})],E.prototype,"rotationType",void 0),M.__decorate([n.property({type:b.apiValues,json:{type:b.jsonValues,read:{reader:b.read},write:{writer:b.write}}})],E.prototype,"style",void 0),M.__decorate([n.property({json:{write:!0}})],E.prototype,"symbolTileSize",void 0),M.__decorate([n.property({type:Z.apiValues,json:{type:Z.jsonValues,write:{writer:Z.write}}})],E.prototype,"inputUnit",void 0),M.__decorate([l.reader("inputUnit")],E.prototype,"readInputUnit",null),M.__decorate([n.property({type:Z.apiValues,json:{type:Z.jsonValues,read:{reader:Z.read},write:{writer:Z.write}}})],E.prototype,"outputUnit",void 0),M.__decorate([l.reader("outputUnit")],E.prototype,"readOutputUnit",null),M.__decorate([d.enumeration({vectorField:"vector-field"})],E.prototype,"type",void 0),M.__decorate([n.property({type:C})],E.prototype,"styleRenderer",null),M.__decorate([n.property({type:T})],E.prototype,"sizeVariables",null),M.__decorate([n.property({type:u})],E.prototype,"rotationVariables",null),E=B=M.__decorate([D.subclass("esri.renderers.VectorFieldRenderer")],E),E}));
