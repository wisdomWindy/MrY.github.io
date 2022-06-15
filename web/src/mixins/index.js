export default{
  methods:{
    removePop() {
      
      console.log('removePop', window.location.href);
      this.homeBack = true;
      if (/\/(home|orders|cart|category2)/.test(window.location.href)) {
        window.alert('removePop1', window.location.href);
        wx.miniProgram.navigateBack({
          delta: 1
        });
        wx.miniProgram.postMessage({ data: { path: this.$route.path } });
      } else {
        window.alert('removePop2', window.location.href);
        if (/\/$/.test(window.location.href)) {
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