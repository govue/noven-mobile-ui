webpackJsonp([12],{aA6a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={data:function(){return{footerList:[{id:0,title:"首页",defaultIcon:"./static/img/商城icon@2x.png",activeIcon:"./static/img/商城icon-on@2x.png",path:"/",query:{}},{id:1,title:"头部导航",defaultIcon:"./static/img/首页icon@2x.png",activeIcon:"./static/img/首页icon-on@2x.png",path:"/header",query:{}},{id:2,title:"底部导航",defaultIcon:"./static/img/信用icon@2x.png",activeIcon:"./static/img/信用icon-on@2x.png",path:"/footer",query:{}},{id:3,title:"导航菜单",defaultIcon:"./static/img/我的icon@2x.png",activeIcon:"./static/img/我的icon-on@2x.png",path:"/navMenu",query:{}}]}},methods:{getCode:function(){console.log("get code")}},created:function(){},mounted:function(){}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header",{attrs:{isBackShow:!0,title:"底部导航",border:!0},on:{backClick:function(n){return t.$router.push("/demo")}}}),t._v(" "),t._m(0),t._v(" "),e("h4",[t._v("展示")]),t._v(" "),e("p",{staticClass:"show-text"},[t._v("见页面底部")]),t._v(" "),e("Footer",{attrs:{footerList:t.footerList}}),t._v(" "),e("h4",[t._v("调用实例")]),t._v(" "),t._m(1),t._v(" "),e("h4",[t._v("API")]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"section"},[n("h2",[this._v("Footer")]),this._v(" "),n("p",[this._v("底部导航组件")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[t._v("\n  <"),e("span",{staticClass:"tag-name"},[t._v("Footer")]),t._v(" "),e("span",{staticClass:"tag-attr"},[t._v(":footerList")]),t._v("="),e("span",{staticClass:"tag-value"},[t._v('"footerList"')]),t._v("/>\n\n  "),e("span",{staticClass:"tag-methods"},[t._v("\n  "),e("span",{staticClass:"tag-name"},[t._v("data()")]),t._v(" {\n    return {\n      footerList:[\n       { \n         id:0,\n         title:'首页',\n         defaultIcon:'./static/img/商城icon@2x.png',\n         activeIcon:'./static/img/商城icon-on@2x.png',\n         path:'/',  //对应路由路径\n         query:{}   //路由携带的参数\n       },\n       {\n         id:1,\n         title:'头部导航',\n         defaultIcon:'./static/img/首页icon@2x.png',\n         activeIcon:'./static/img/首页icon-on@2x.png',\n         path:'/header',\n         query:{}\n       },\n       {\n         id:2,\n         title:'底部导航',\n         defaultIcon:'./static/img/信用icon@2x.png',\n         activeIcon:'./static/img/信用icon-on@2x.png',\n         path:'/footer',\n         query:{}\n       },\n       {\n         id:3,\n         title:'导航菜单',\n         defaultIcon:'./static/img/我的icon@2x.png',\n         activeIcon:'./static/img/我的icon-on@2x.png',\n         path:'/navMenu',\n         query:{}\n       },\n     ],\n    }\n  } \n  ")]),t._v(" \n\n")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"section-table"},[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("菜单Item的标签")]),t._v(" "),e("td",[t._v("Number")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("菜单文字")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("defaultIcon")]),t._v(" "),e("td",[t._v("默认的图标")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("activeIcon")]),t._v(" "),e("td",[t._v("激活状态的图标")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",[t._v("菜单Item对应的路由")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("query")]),t._v(" "),e("td",[t._v("该路由携带的参数")]),t._v(" "),e("td",[t._v("Object")])])])])}]};var c=e("C7Lr")(i,a,!1,function(t){e("gMhf")},null,null);n.default=c.exports},gMhf:function(t,n){}});