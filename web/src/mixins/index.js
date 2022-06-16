export default{
  methods:{
    removePop() {
      
      this.homeBack = true;
      if (/\/(about)/.test(window.location.href)) {
        window.alert('removePop1', window.location.href);
        wx.miniProgram.navigateBack({
          delta: 1
        });
        wx.miniProgram.postMessage({ data: { path: this.$route.path } });
      } else {
        window.alert('removePop3');
        if (/(\/|#)$/.test(window.location.href)) {
          window.alert('removePop2', window.location.href);
          wx.miniProgram.navigateBack({
            delta: 1
          });
          wx.miniProgram.postMessage({ data: { path: this.$route.path } });
        }
      }
      if (typeof window.addEventListener != "undefined") {
        window.removeEventListener("popstate", this.removePop);
      } else {
        window.detachEvent("onpopstate", this.removePop);
      }
    }
  }
}