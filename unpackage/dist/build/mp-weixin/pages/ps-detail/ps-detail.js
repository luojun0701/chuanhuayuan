"use strict";var e=require("../../common/vendor.js"),a=require("../../utils/index.js");if(!Array){(e.resolveComponent("cu-empty")+e.resolveComponent("cu-loading")+e.resolveComponent("cu-ps-card")+e.resolveComponent("unicloud-db")+e.resolveComponent("cu-title")+e.resolveComponent("cu-image")+e.resolveComponent("cu-msg-input"))()}Math||((()=>"../../components/cu-empty/cu-empty.js")+(()=>"../../components/cu-loading/cu-loading.js")+(()=>"../../components/cu-ps-card/cu-ps-card.js")+(()=>"../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js")+(()=>"../../components/cu-title/cu-title.js")+(()=>"../../components/cu-image/cu-image.js")+(()=>"../../components/cu-msg-input/cu-msg-input.js"))();const t={__name:"ps-detail",setup(t){e.ref(null);const o=e.reactive({pageSize:20,page:1});e.ref({});const c=e.ref(null),n=e.ref(""),i=()=>{var a;""!=n.value?null==(a=c.value)||a.add({article_id:l.value,user_id:getApp().globalData.userinfo._id,comment_content:n.value},{toastTitle:"评论成功",success(){e.nextTick((()=>{n.value=""}))}}):e.index.showToast({title:"内容不能为空",icon:"none"})},l=e.ref("");return e.onLoad((a=>{l.value=a.id,e.index.setNavigationBarTitle({title:a.title||"详情"})})),e.onPullDownRefresh((()=>{c.value.loadData({clear:!0},(()=>{e.index.stopPullDownRefresh()}))})),(t,u)=>({a:e.w((({data:a,loading:t,error:o},c,n)=>e.e({a:o},o?{b:"3c79a9b4-1-"+n+",3c79a9b4-0",c:e.p({mode:"fail"})}:t?{e:"3c79a9b4-2-"+n+",3c79a9b4-0"}:0!=a.length?{g:e.f(a,((a,t,o)=>({a:"3c79a9b4-3-"+n+"-"+o+",3c79a9b4-0",b:e.p({data:a,detail:!0})})))}:{h:"3c79a9b4-4-"+n+",3c79a9b4-0"},{d:t,f:0!=a.length,i:n,j:c})),{name:"d",path:"a",vueId:"3c79a9b4-0"}),b:e.p({collection:"articles,users,articles-categories",where:`_id=='${l.value}'`,field:"title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}"}),c:e.p({title:"全部评论"}),d:e.w((({data:t,loading:o,error:c,options:n},i,l)=>e.e({a:c},c?{b:"3c79a9b4-7-"+l+",3c79a9b4-6",c:e.p({mode:"fail"})}:o?{e:"3c79a9b4-8-"+l+",3c79a9b4-6"}:0!=t.length?{g:e.f(t,((t,o,c)=>({a:"3c79a9b4-9-"+l+"-"+c+",3c79a9b4-6",b:e.p({src:t.user_id[0].avatarUrl,width:"80rpx",height:"80rpx",radius:"50%"}),c:e.t(t.user_id[0].nickName),d:e.t(t.comment_content),e:e.t(e.unref(a.formatTime)(t.comment_date))})))}:{h:"3c79a9b4-10-"+l+",3c79a9b4-6"},{d:o,f:0!=t.length,i:l,j:i})),{name:"d",path:"d",vueId:"3c79a9b4-6"}),e:e.sr(c,"3c79a9b4-6",{k:"udb"}),f:e.p({collection:"comments,users",where:`article_id=='${l.value}'`,field:"comment_content,child_comments,comment_date,user_id{_id,nickName,avatarUrl,role}","page-current":o.page,"page-size":o.pageSize,getcount:!0}),g:e.o(i),h:e.o((e=>n.value=e)),i:e.p({placeholder:"友善评论,文明发言",comment:n.value,value:n.value})})}};wx.createPage(t);
