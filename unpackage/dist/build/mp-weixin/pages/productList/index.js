(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/productList/index"],{"02de":function(t,e,a){},"04b2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i})},"21f4":function(t,e,a){"use strict";a.r(e);var r=a("04b2"),i=a("86b8");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("bdb9");var s=a("2877"),o=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"86b8":function(t,e,a){"use strict";a.r(e);var r=a("bcac"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);e["default"]=i.a},a640:function(t,e,a){"use strict";(function(t){a("ad72"),a("921b");r(a("66fd"));var e=r(a("21f4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},bcac:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("6f4a"),i=a("2f62");function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){s(t,e,a[e])})}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t){return d(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var l=function(){return a.e("components/uni-drawer").then(a.bind(null,"ee8f"))},h={name:"productList",components:{uniDrawer:l},onLoad:function(t){var e=this;t.keyword&&(this.params.search=t.keyword),t.typeid&&(this.params.type_id=t.typeid),this.params.user_id=this.userInfo.id,this.loadData(),this.getGroup(),setTimeout(function(){e.renderImage=!0},300)},data:function(){return{noData:!1,load:!0,currentTab:1,currentCate:"",currentPrice:"",tabs:[{name:"全部",type:1},{name:"筛选",type:2},{name:"销量",type:3},{name:"价格",type:4}],rightDrawerVisible:!1,lists:[{title:"分类",type:"list",show:!1,list:[]},{title:"价格",type:"price",show:!1,list:[{min:0,max:100},{min:100,max:200},{min:200,max:300},{min:300,max:400},{min:400,max:500}]}],productList:[],renderImage:!1,params:{pages:1,order:1,search:"",type_id:"",min:"",max:"",user_id:""}}},methods:{searchData:function(){this.productList=[],this.load=!0,this.params.min="",this.params.max="",this.params.type_id="",this.params.pages=1,this.loadData()},selectCate:function(t,e){this.currentCate=e,this.params.type_id=t.id},selectPrice:function(t,e){this.currentPrice=e,this.params.min=t.min,this.params.max=t.max},ToggleDrawer:function(){this.rightDrawerVisible=!this.rightDrawerVisible},changeTab:function(t){this.load=!0,this.params.pages=1,this.currentTab=t.type,1===t.type?this.params.order=1:2===t.type?(this.params.order=4,this.ToggleDrawer()):3===t.type?this.params.order=2:4===this.params.order?this.params.order=3:this.params.order=4,2!==t.type&&(this.productList=[],this.loadData())},trigerCollapse:function(t){for(var e=0,a=this.lists.length;e<a;++e)this.lists[e].show=t===e&&!this.lists[e].show},loadMove:function(){this.params.pages++,this.loadData()},getGroup:function(){var t=this;(0,r.getClassifyList)({ticket:this.userInfo.ticket||"",uname:this.userInfo.uname||""}).then(function(e){t.lists[0].list=e.data.data})},serachCate:function(){this.params.pages=1,this.productList=[],this.loadData(),this.rightDrawerVisible=!1},loadData:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add";this.load&&(t.showLoading(),this.noData=!1,(0,r.searchList)(this.params).then(function(r){t.hideLoading(),r.data.length?("refresh"===a&&(e.productList=[]),e.productList=[].concat(o(e.productList),o(r.data))):(e.load=!1,t.showToast({icon:"none",title:"没有更多产品了>_<"})),e.productList.length||(e.noData=!0)}))}},computed:n({},(0,i.mapState)(["userInfo"]))};e.default=h}).call(this,a("543d")["default"])},bdb9:function(t,e,a){"use strict";var r=a("02de"),i=a.n(r);i.a}},[["a640","common/runtime","common/vendor"]]]);