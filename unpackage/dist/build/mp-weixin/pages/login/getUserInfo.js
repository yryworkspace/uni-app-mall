(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/getUserInfo"],{"1b10":function(e,n,t){"use strict";t.r(n);var o=t("a0c9"),i=t("7e5e");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("2bee");var s=t("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"6bf76d94",null);n["default"]=r.exports},"2bee":function(e,n,t){"use strict";var o=t("a5e8"),i=t.n(o);i.a},"7e5e":function(e,n,t){"use strict";t.r(n);var o=t("f7b1"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},a0c9:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},a5e8:function(e,n,t){},ca40:function(e,n,t){"use strict";(function(e){t("ad72"),t("921b");o(t("66fd"));var n=o(t("1b10"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},f7b1:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("478a"),i={data:function(){return{baseURL:o.baseURL,code:"",parent_id:"",weixin_name:"",isShow:!0,userInfo:{},appid:"wxd3451cfb485bad19"}},onLoad:function(){},methods:{getUserInfo:function(n){var t=this;this.isShow=!1,e.login({success:function(e){t.userInfo=n.detail.userInfo,t.userInfo.iv=n.detail.iv,t.userInfo.encryptedData=n.detail.encryptedData,t.userInfo.signature=n.detail.signature,t.userInfo.code=e.code,t.userInfo.parent_id="",t.userInfo.appid=t.appid,t.getUserSessionKey(t.userInfo)}})},getUserSessionKey:function(n){var t=this;e.request({url:t.baseURL+"/api/Login/getsessionkey",method:"post",data:n,dataType:"json",header:{"Content-Type":"application/x-www-form-urlencoded",cookie:"XDEBUG_SESSION=PHPSTORM"},success:function(n){var o=n.data;if(0==o.status)return e.showToast({title:o.err,duration:2e3}),!1;t.userInfo["sessionId"]=o.session_key,t.userInfo["openid"]=o.openid,t.userInfo["unionid"]=o.unionid,t.onLoginUser()},fail:function(n){e.showToast({title:"网络异常！getsessionkeys",duration:2e3})}})},onLoginUser:function(){var n=this,t=this.userInfo;wx.request({url:n.baseURL+"/api/Login/authlogin",method:"post",data:t,header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){var o=t.data,i=t.data.status;if(0==i)return e.showToast({title:t.data.err,duration:3e3}),!1;n.userInfo["id"]=o.id,n.userInfo["uname"]=o.weixin_unionid,n.userInfo["ticket"]=o.ticket,n.userInfo["customer_id"]=o.customer_id,n.userInfo["dianpuleibie"]=n.$store.dianpuleibie;var a=o.id;if(!a)return e.showToast({title:"登录失败！",duration:3e3}),!1;e.setStorageSync("userInfo",n.userInfo),n.$store.commit("SET_USERINFO",n.userInfo),n.$store.dispatch("getShopId"),e.reLaunch({url:"/pages/index/index"})},fail:function(n){e.showToast({title:"网络异常！authlogin",duration:2e3})}})}}};n.default=i}).call(this,t("543d")["default"])}},[["ca40","common/runtime","common/vendor"]]]);