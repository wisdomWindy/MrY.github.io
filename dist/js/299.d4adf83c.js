"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[299],{741:function(e,o){o["Z"]={methods:{removePop(){this.homeBack=!0,/\/(about)/.test(window.location.href)?console.log("removePop1"):(window.alert("removePop3"),/(\/|#)$/.test(window.location.href)&&window.alert("removePop2",window.location.href)),"undefined"!=typeof window.addEventListener?window.removeEventListener("popstate",this.removePop):window.detachEvent("onpopstate",this.removePop)}}}},2299:function(e,o,t){t.r(o),t.d(o,{default:function(){return u}});var n=t(3396);const r={class:"container"},i=(0,n.Uk)(" about ");function w(e,o,t,w,s,a){return(0,n.wg)(),(0,n.iD)("div",r,[i,(0,n._)("button",{onClick:o[0]||(o[0]=(...o)=>e.goUrl&&e.goUrl(...o))},"跳转")])}var s=t(741),a=(0,n.aZ)({data(){return{}},mixins:[s.Z],beforeRouteEnter(e,o,t){t((e=>{/\/about/.test(o.path)?/\?/.test(o.fullPath)?(window.alert("from3"),console.log("orders:beforeRouteEnter:#"),window.history.pushState(null,null,"#")):(window.alert("#"),window.history.pushState(null,null,"#")):(consoe.log("form1"),console.log("ordrs:beforeRouteEnter",!/\/about/.test(o.path)),window.history.pushState(null,null,"#"),console.log("orderwindow.location.href",window.location.href)),"undefined"!=typeof window.addEventListener?window.addEventListener("popstate",e.removePop):window.attachEvent("onpopstate",e.removePop)}))},beforeRouteLeave(e,o,t){"undefined"!=typeof window.removeEventListener?window.removeEventListener("popstate",this.removePop):window.detachEvent("onpopstate",this.removePop),t()},methods:{goUrl(){window.location.href="https://wisdomwindy.github.io/#/about?name=wb"}}}),d=t(89);const l=(0,d.Z)(a,[["render",w]]);var u=l}}]);