(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myAssets/index"],{"181e":function(t,n,e){"use strict";(function(t){e("ad72"),e("921b");r(e("66fd"));var n=r(e("2550"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},2550:function(t,n,e){"use strict";e.r(n);var r=e("d448"),u=e("866c");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("5752");var o=e("2877"),c=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=c.exports},5752:function(t,n,e){"use strict";var r=e("c349"),u=e.n(r);u.a},"866c":function(t,n,e){"use strict";e.r(n);var r=e("c3a1"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=u.a},c349:function(t,n,e){},c3a1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(e("a34a")),u=e("6f4a"),a=e("2f62"),o=e("478a");function c(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){s(t,n,e[n])})}return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(t,n,e,r,u,a,o){try{var c=t[a](o),i=c.value}catch(s){return void e(s)}c.done?n(i):Promise.resolve(i).then(r,u)}function d(t){return function(){var n=this,e=arguments;return new Promise(function(r,u){var a=t.apply(n,e);function o(t){f(a,r,u,o,c,"next",t)}function c(t){f(a,r,u,o,c,"throw",t)}o(void 0)})}}var l={name:"myAssets",data:function(){return{baseURL:o.baseURL,Info:{},params:{uname:"",ticket:""}}},onLoad:function(){this.params.uname=this.userInfo.uname||"",this.params.ticket=this.userInfo.ticket||"",this.params.user_id=this.userInfo.id||"",this.getInfo()},methods:{getInfo:function(){var t=this,n=function(){var n=d(r.default.mark(function n(){var e,a,o,c,i,s;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e={},a=(0,u.TotalAssets)(t.params).then(function(t){return t.data}),o=(0,u.SwitchWork)({ticket:t.userInfo.ticket,uname:t.userInfo.uname}).then(function(t){return t.data}),c=(0,u.UserCoupon)({coupon_type:0,op:"use",user_id:t.userInfo.id}).then(function(t){return t.data}),i=(0,u.VipCard)({type:1,user_id:t.userInfo.id}).then(function(t){return t.data}),n.next=7,Promise.all([a,o,c,i]);case 7:return s=n.sent,e.coin=s[0].data.money,e.currency=s[0].data.currency,e.coupon=JSON.parse(s[2]).coupon.length,e.card=s[3].length,n.abrupt("return",e);case 13:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();n().then(function(n){t.Info=n})}},computed:i({},(0,a.mapState)(["userInfo"]))};n.default=l},d448:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u})}},[["181e","common/runtime","common/vendor"]]]);