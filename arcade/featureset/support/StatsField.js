/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./errorsupport","./shared","./sqlUtils","../../../core/sql/WhereClause"],(function(e,r,t,n){"use strict";function o(o){if("function"===o.parseTree.type){if(0===o.parseTree.args.value.length)return{name:o.parseTree.name,expr:null};if(o.parseTree.args.value.length>1)throw new e.SqlError(e.SqlErrorCodes.MissingStatisticParameters);const s=n.WhereClause.create(t.toWhereClauseFromTree(o.parseTree.args.value[0],r.FeatureServiceDatabaseType.Standardised,o.parameters),o.fieldsIndex);return{name:o.parseTree.name,expr:s}}return null}return function(){function r(){this.field="",this.tofieldname="",this.typeofstat="MIN",this.workingexpr=null}var t=r.prototype;return t.clone=function(){const e=new r;return e.field=this.field,e.tofieldname=this.tofieldname,e.typeofstat=this.typeofstat,e.workingexpr=this.workingexpr,e},r.parseStatField=function(t,s,i){const a=new r;a.field=t;const l=n.WhereClause.create(s,i),u=o(l);if(null===u)throw new e.SqlError(e.SqlErrorCodes.UnsupportedSqlFunction,{function:""});const f=u.name.toUpperCase().trim();if("MIN"===f){if(a.typeofstat="MIN",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:"min"})}else if("MAX"===f){if(a.typeofstat="MAX",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:"max"})}else if("COUNT"===f)a.typeofstat="COUNT",a.workingexpr=u.expr;else if("STDEV"===f){if(a.typeofstat="STDDEV",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:"stdev"})}else if("SUM"===f){if(a.typeofstat="SUM",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:"sum"})}else if("MEAN"===f){if(a.typeofstat="AVG",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:f})}else if("AVG"===f){if(a.typeofstat="AVG",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:"avg"})}else{if("VAR"!==f)throw new e.SqlError(e.SqlErrorCodes.UnsupportedSqlFunction,{function:f});if(a.typeofstat="VAR",a.workingexpr=u.expr,null===l)throw new e.SqlError(e.SqlErrorCodes.InvalidFunctionParameters,{function:"var"})}return a},t.toStatisticsName=function(){switch(this.typeofstat.toUpperCase()){case"MIN":return"min";case"MAX":return"max";case"SUM":return"sum";case"COUNT":default:return"count";case"VAR":return"var";case"STDDEV":return"stddev";case"AVG":return"avg"}},r}()}));
