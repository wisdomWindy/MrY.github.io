"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[849],{741:function(e,t){t["Z"]={methods:{removePop(){this.homeBack=!0,/\/(about)/.test(window.location.href)?console.log("removePop1",window.location.href):(window.alert("removePop3"),/(\/|#)$/.test(window.location.href)&&console.log("removePop2",window.location.href)),"undefined"!=typeof window.addEventListener?window.removeEventListener("popstate",this.removePop):window.detachEvent("onpopstate",this.removePop)}}}},1849:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var s=o(3396),a=o(7139);const i={class:"container"},n=["src","alt"],l=["src"],d={class:"card_content",style:{padding:"14px"}},r={class:"card_title"},c={class:"bottom"},w=["src"],p={class:"card_content",style:{padding:"14px"}},u={class:"card_title"},m={class:"bottom"};function h(e,t,o,h,f,b){const v=(0,s.up)("el-carousel-item"),g=(0,s.up)("el-carousel"),_=(0,s.up)("el-card"),k=(0,s.up)("el-col"),y=(0,s.up)("el-row"),L=(0,s.up)("el-tab-pane"),E=(0,s.up)("el-tabs");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(g,{"indicator-position":"outside",class:"carousel"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.swiperList,((e,t)=>((0,s.wg)(),(0,s.j4)(v,{key:t},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.path,alt:e.alt,class:"carousel_img"},null,8,n)])),_:2},1024)))),128))])),_:1}),(0,s.Wm)(E,{modelValue:f.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>f.activeName=e),type:"border-card",class:"tabs",onTabClick:e.handleClick},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{label:"人物",name:"first"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{justify:"space-between",class:"row"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.blackList,((e,t)=>((0,s.wg)(),(0,s.j4)(k,{span:11,key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{"body-style":{padding:"0px",display:"flex"},class:"card"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.img,class:"card_image"},null,8,l),(0,s._)("div",d,[(0,s._)("div",r,(0,a.zw)(e.name),1),(0,s._)("div",c,(0,a.zw)(e.description),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,s.Wm)(L,{label:"剧场",name:"second"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{justify:"space-between",class:"row"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.blackList,((e,t)=>((0,s.wg)(),(0,s.j4)(k,{span:11,key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{"body-style":{padding:"0px",display:"flex"},class:"card"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.img,class:"card_image"},null,8,w),(0,s._)("div",p,[(0,s._)("div",u,(0,a.zw)(e.name),1),(0,s._)("div",m,(0,a.zw)(e.description),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue","onTabClick"]),(0,s._)("button",{onClick:t[1]||(t[1]=(...e)=>b.goUrl&&b.goUrl(...e))},"跳转"),(0,s._)("button",{onClick:t[2]||(t[2]=(...e)=>b.backUrl&&b.backUrl(...e))},"返回")])}var f=o(741),b={name:"Home",data(){return{swiperList:[],activeName:"first"}},mixins:[f.Z],created(){console.log(this.$store.state.home.swiperList[0]),this.swiperList=this.$store.state.home.swiperList,this.blackList=this.$store.state.home.blackList,setTimeout((()=>{this.blackList.push(this.blackList[0])}),3e3)},beforeRouteEnter(e,t,o){/#$/.test(window.location.href)?o():o((e=>{console.log("window.history",window.history),/\/home/.test(t.path)||window.history.pushState(null,null,"#"),"undefined"!=typeof window.addEventListener?window.addEventListener("popstate",e.removePop):window.attachEvent("onpopstate",e.removePop)}))},mounted(){console.log("home:mounted"),/#$/.test(window.location.href)},beforeUpdate(){console.log("homebeforeupdate",window.location.href)},updated(){console.log("homeupdated",window.location.href)},beforeRouteLeave(e,t,o){"undefined"!=typeof window.removeEventListener?window.removeEventListener("popstate",this.removePop):window.detachEvent("onpopstate",this.removePop),o()},methods:{goUrl(){window.location.href="https://wisdomwindy.github.io/#/about?name=wb"},backUrl(){window.history.go(-1)}}},v=o(89);const g=(0,v.Z)(b,[["render",h],["__scopeId","data-v-0632faf4"]]);var _=g}}]);