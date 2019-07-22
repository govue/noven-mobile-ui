webpackJsonp([16],{"8uim":function(t,e){},FFdC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{refresh:!1}},methods:{getCode:function(){console.log("get code")}},created:function(){},mounted:function(){}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{isBackShow:!0,title:"导航菜单",border:!0},on:{backClick:function(e){return t.$router.push("/demo")}}}),t._v(" "),t._m(0),t._v(" "),s("h4",[t._v("展示")]),t._v(" "),s("MsgCode",{attrs:{text:"点击获取验证码",reloadText:"重新获取验证码",customClass:"code-class",disabled:!1,refresh:t.refresh},on:{handleClick:t.getCode}}),t._v(" "),s("Button",{staticStyle:{width:"1.2rem",height:"0.6rem"},attrs:{type:"primary",plain:!0},on:{click:function(e){t.refresh=!t.refresh}}},[t._v("重置")]),t._v(" "),s("h4",[t._v("调用实例")]),t._v(" "),t._m(1),t._v(" "),s("h4",[t._v("API")]),t._v(" "),t._m(2),t._v(" "),s("h4",[t._v("方法")]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("h2",[this._v("MsgCode")]),this._v(" "),e("p",[this._v("获取验证码组件，及倒计时")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[t._v("\n  <MsgCode\n    "),s("span",{staticClass:"tag-name"},[t._v("text")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"点击获取验证码" ')]),t._v("\n    "),s("span",{staticClass:"tag-attr"},[t._v("reloadText")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"重新获取验证码"')]),t._v("\n    "),s("span",{staticClass:"tag-attr"},[t._v("customClass")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"code-class"')]),t._v("\n    "),s("span",{staticClass:"tag-attr"},[t._v(":disabled")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"false"')]),t._v("\n    "),s("span",{staticClass:"tag-attr"},[t._v(":refresh")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"refresh"')]),t._v("\n    "),s("span",{staticClass:"tag-methods"},[t._v("@handleClick")]),t._v("="),s("span",{staticClass:"tag-value"},[t._v('"getCode"')]),t._v("\n  />\n  "),s("span",{staticClass:"tag-methods"},[t._v("\n  "),s("span",{staticClass:"tag-name"},[t._v("methods")]),t._v(" {\n    getCode() {\n      console.log('get code');\n    }\n  } \n  ")]),t._v(" \n\n")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"section-table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("text")]),t._v(" "),s("td",[t._v("默认的文字")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("reloadText")]),t._v(" "),s("td",[t._v("重新加载的文字")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("customClass")]),t._v(" "),s("td",[t._v("自定义样式类名（全局）")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("是否允许点击")]),t._v(" "),s("td",[t._v("Boolean")])]),t._v(" "),s("tr",[s("td",[t._v("refresh")]),t._v(" "),s("td",[t._v("重置验证码组件，值为 true 和 false 均会触发")]),t._v(" "),s("td",[t._v("Boolean")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"section-table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("getCode")]),t._v(" "),s("td",[t._v("点击获取验证码时的回调")]),t._v(" "),s("td",[t._v("Function")])])])])}]};var v=s("C7Lr")(a,_,!1,function(t){s("8uim")},null,null);e.default=v.exports}});