/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../support/utils"],(function(n,e){"use strict";const a="no_dominant_category";function r(n){return`(${n.map((n=>`${n} >= 0`)).join(" OR ")})`}function l(n){return{expression:u(n,{returnFieldName:!0,defaultValue:`'${a}'`})}}function u(n,a){const{returnFieldName:r,defaultValue:l,layer:u}=a,t=[];if(r&&l){const e=n.map((n=>`${n} <= 0`)).join(" AND ");t.push(`WHEN ${e} THEN ${l}`)}for(const i of n){const a=n.reduce(((n,e)=>(i!==e&&n.push(`${i} > ${e}`),n)),[]).join(" AND "),l=u&&e.isIntegerField(u,i),o=r&&`'${i}'`?`'${i}'`:l?e.castIntegerFieldToFloat(i):i;t.push(`WHEN ${a} THEN ${o}`)}return`CASE ${t.join(" ")} ELSE ${l||"0"} END`}function t(n,e){const a=e.join(" + "),l={sqlExpression:`(${a})`,sqlWhere:r(e)},t={sqlExpression:`(( (${u(e,{layer:n})}) / (${a}) ) * 100)`,sqlWhere:`${r(e)} AND ((${a}) > 0)`};return{predominantCategory:{valueExpression:s(e)},size:{valueExpression:p(e),statisticsQuery:l,histogramQuery:l},opacity:{valueExpression:d(e),statisticsQuery:t,histogramQuery:t}}}function i(n){return n&&n.map((n=>`$feature["${n}"];`)).join("\n")+"\n"||""}function o(n,e=!1){const a=n.map((n=>`"${n}"`)),r="\n  if(value != null && value >= 0) {\n    if (totalValue == null) { totalValue = 0; }\n    totalValue = totalValue + value;\n  }\n  ";return`\n  var fieldNames = [ ${a.join(", ")} ];\n  var numFields = ${a.length};\n  var maxValueField = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueField = fieldNames[i];\n      }\n      else if (value == maxValue) {\n        maxValueField = null;\n      }\n    }\n    ${e?r:""}\n  }\n  `}function s(n){const e=o(n);return`\n  ${i(n)}\n  ${e}\n  return maxValueField;\n  `}function f(n){const e=o(n);return`\n  ${i(n)}\n  ${e}\n  return maxValue;\n  `}function m(n,e){const a=n.map((n=>n.fieldName)),r=i(a),l=n.map((n=>n.label?`"${n.label}"`:`"${n.fieldName}"`)),u=a.map((n=>`Number($feature["${n}"])`)),t=[];return e&&e.forEach(((n,e)=>{t.push(`function getValueForExpr${e}() {\n  ${n.expression} \n}`),u.push(`Number(getValueForExpr${e}())`),l.push(`"${n.title||n.name}"`)})),`\n  ${r}\n\n  ${t.length?t.join("\n"):""}\n\n  var values = [ ${u.join(", ")} ];\n  var aliases = [ ${l.join(", ")} ];\n  var numValues = ${u.length};\n  var maxValueAlias = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numValues; i++) {\n    value = values[i];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueAlias = aliases[i];\n      }\n      else if (value == maxValue) {\n        maxValueAlias = "Tie";\n      }\n    }\n  }\n  return maxValueAlias;\n  `}function v(n){return`\n  ${i(n)}\n  var fieldValues = [ ${n.map((n=>`$feature["${n}"]`)).join(", ")} ];\n  var totalValue = Sum(fieldValues);\n  var order = Reverse(Sort(fieldValues));\n  return IIF(totalValue > 0, Round(((order[0] - order[1]) / totalValue) * 100, 2), null);\n  `}function p(n){const e=i(n),a=n.map((n=>`"${n}"`));return`\n  ${e}\n  var fieldNames = [ ${a.join(", ")} ];\n  var numFields = ${a.length};\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value != null && value >= 0) {\n      if (totalValue == null) { totalValue = 0; }\n      totalValue = totalValue + value;\n    }\n  }\n\n  return totalValue;\n  `}function d(n){const e=o(n,!0);return`\n  ${i(n)}\n  ${e}\n\n  var strength = null;\n\n  if (maxValueField != null && totalValue > 0) {\n    strength = (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  `}function $(n,e){const a=i(n.map((n=>n.fieldName))),r=n.map((n=>`{\n    value: Number($feature["${n.fieldName}"]),\n    alias: "${n.label||n.fieldName}"\n    }`)),l=[];return e&&e.forEach(((n,e)=>{l.push(`function getValueForExpr${e}() {\n  ${n.expression} \n}`),r.push(`{\n          value: Number(getValueForExpr${e}()),\n          alias: "${n.title||n.name}"\n          }`)})),`\n  ${a}\n\n  ${l.length?l.join("\n"):""}\n\n  var groups = [ ${r.join(", ")} ];\n  var numTopValues = Count(groups);\n\n  function getValuesArray(arr){\n    var valuesArray = []\n    for(var i in arr){\n      valuesArray[i] = arr[i].value;\n    }\n    return valuesArray;\n  }\n\n  function findAliases(top5Array, fullArray){\n    var aliases = [];\n    var found = "";\n    for(var i in top5Array){\n      for(var k in fullArray){\n        if(top5Array[i] == fullArray[k].value && Find(fullArray[k].alias, found) == -1){\n          found += fullArray[k].alias;\n          aliases[Count(aliases)] = {\n            alias: fullArray[k].alias,\n            value: top5Array[i]\n          };\n        }\n      }\n    }\n    return aliases;\n  }\n\n  function getTopGroups(groupsArray){\n    var values = getValuesArray(groupsArray);\n    var top5Values = IIF(Max(values) > 0, Top(Reverse(Sort(values)),numTopValues), "no data");\n    var top5Aliases = findAliases(top5Values,groupsArray);\n\n    if(TypeOf(top5Values) == "String"){\n      return top5Values;\n    } else {\n      var content = "";\n      for(var i in top5Aliases){\n        if(top5Aliases[i].value > 0){\n          content += (i+1) + ". " + top5Aliases[i].alias + " (" + Text(top5Aliases[i].value, "#,###") + ")";\n          content += IIF(i < numTopValues-1, TextFormatting.NewLine, "");\n        }\n      }\n    }\n\n    return content;\n  }\n\n  getTopGroups(groups);\n  `}n.getArcadeForOrderedFields=$,n.getArcadeForPredominanceMargin=v,n.getArcadeForPredominantCategory=s,n.getArcadeForPredominantCategoryAlias=m,n.getArcadeForPredominantCategoryValue=f,n.getArcadeForStrengthOfPredominance=d,n.getArcadeForSumOfFields=p,n.getPredominanceExpressions=t,n.getSQLForPredominantCategoryName=l,n.noDominantCategoryField=a,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
