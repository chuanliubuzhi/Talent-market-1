webpackJsonp([22],{hsok:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("LYZK"),n=e("f4gh"),i=(n.a,{components:{Toast:n.a},data:function(){return{showtoast:!1,toastmes:"",name:"",textValue:"",remnant:0,imgsrc:"",mediaId:""}},created:function(){var t=this;Object(s.h)().then(function(a){0==a.data.result&&(t.userInfo=a.data.datas,t.name=t.userInfo.nickName,t.imgsrc=t.userInfo.headimgurl)});var a={url:window.location.href.split("#")[0]};Object(s.g)(a).then(function(t){wx.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,signature:t.data.signature,nonceStr:t.data.nonceStr,jsApiList:["checkJsApi","getLocation","chooseImage","uploadImage","downloadImage"]})})},methods:{getready:function(){var t=this;wx.ready(function(){t.getImg()}),wx.error(function(t){console.log(t)})},getImg:function(){var t=this;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var e=a.localIds[0].toString();t.uploadImg(e)}})},uploadImg:function(t){var a=this;wx.uploadImage({localId:t,isShowProgressTips:1,success:function(t){a.mediaId=t.serverId;var e={SERVER_ID:a.mediaId};Object(s.o)(e).then(function(t){0==t.data.result&&(a.imgsrc=t.data.datas.headimgurl)})},fail:function(t){picPath="",localIds="",alert(Json.stringify(t))}})},descInput:function(){var t=this.textValue.length;this.remnant=t},update:function(){var t=this;if(""==this.name)return this.showtoast=!0,this.toastmes="请输入姓名",!1;var a={nickName:this.name,headimgurl:this.imgsrc};Object(s.n)(a).then(function(a){0==a.data.result&&t.$router.go(-1)})}}}),o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setup_wrap"},[e("div",{staticClass:"sw_item"},[e("span",{staticClass:"item_left"},[t._v("头像")]),t._v(" "),e("span",{staticClass:"item_right"},[e("img",{attrs:{src:t.imgsrc},on:{click:t.getready}})])]),t._v(" "),e("div",{staticClass:"sw_item"},[e("span",{staticClass:"item_left"},[t._v("姓名")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"name",modifiers:{trim:!0}}],staticClass:"item_right setup_name",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"setup_save",on:{click:t.update}},[t._v("保存")]),t._v(" "),e("toast",{attrs:{type:"text",width:"20em"},model:{value:t.showtoast,callback:function(a){t.showtoast=a},expression:"showtoast"}},[t._v(t._s(t.toastmes))])],1)},staticRenderFns:[]};var r=e("C7Lr")(i,o,!1,function(t){e("xc61")},"data-v-6163b94a",null);a.default=r.exports},xc61:function(t,a){}});
//# sourceMappingURL=22.3258fe4581461881efc1.js.map