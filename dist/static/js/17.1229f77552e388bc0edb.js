webpackJsonp([17],{DXob:function(t,n){},OrAS:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={data:function(){return{canvasData:[{num:3,start:"#ADC7FF",end:"#75A1FE"},{num:2,start:"#C3AAFF",end:"#9071FF"},{num:1,start:"#25EADD",end:"#10D0B8"},{num:2,start:"#FFDC36",end:"#FFC033"},{num:1,start:"#FF9699",end:"#FF5D60"}]}},methods:{getCode:function(){console.log("get code")}},created:function(){},mounted:function(){}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("Header",{attrs:{isBackShow:!0,title:"比例环形图",border:!0},on:{backClick:function(n){return t.$router.push("/demo")}}}),t._v(" "),t._m(0),t._v(" "),a("h4",[t._v("展示")]),t._v(" "),a("CanvasCycle",{attrs:{canvasData:t.canvasData}}),t._v(" "),a("h4",[t._v("调用实例")]),t._v(" "),t._m(1),t._v(" "),a("h4",[t._v("API")]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"section"},[n("h2",[this._v("CanvasCycle")]),this._v(" "),n("p",[this._v("比例环形图，基于canvas实现的带渐变色和比例的环形图")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("pre",[t._v("\n  <"),a("span",{staticClass:"tag-name"},[t._v("CanvasCycle ")]),t._v("\n   "),a("span",{staticClass:"tag-attr"},[t._v(":canvasData")]),t._v("="),a("span",{staticClass:"tag-value"},[t._v('"canvasData"')]),t._v("\n  />\n  "),a("span",{staticClass:"tag-methods"},[t._v("\n  "),a("span",{staticClass:"tag-name"},[t._v("data()")]),t._v(" {\n    return {\n      canvasData:[\n        {\n         num:3,\n         start:'#ADC7FF',\n         end:'#75A1FE'\n        },\n\n        {\n         num:2,\n         start:'#C3AAFF',\n         end:'#9071FF'\n        },\n\n        {\n         num:1,\n         start:'#25EADD',\n         end:'#10D0B8'\n        },\n\n        {\n         num:2,\n         start:'#FFDC36',\n         end:'#FFC033'\n        },\n\n        {\n         num:1,\n         start:'#FF9699',\n         end:'#FF5D60'\n        },\n      ],\n    }\n  } \n  ")]),t._v(" \n\n")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("table",{staticClass:"section-table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("canvasData")]),t._v(" "),a("td",[t._v("绘制环形图的数据")]),t._v(" "),a("td",[t._v("Array")])]),t._v(" "),a("tr",[a("td",[t._v("num")]),t._v(" "),a("td",[t._v("当前数据")]),t._v(" "),a("td",[t._v("Number")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("渐变色开始色")]),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("end")]),t._v(" "),a("td",[t._v("渐变色结束色")]),t._v(" "),a("td",[t._v("String")])])])])}]};var v=a("C7Lr")(e,s,!1,function(t){a("DXob")},null,null);n.default=v.exports}});