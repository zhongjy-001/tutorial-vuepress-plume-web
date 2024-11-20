import { defineClientConfig } from 'vuepress/client'
// import BulletinContent from './components/BulletinContent.vue'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app, router }) {
    // app.component('BulletinContent', BulletinContent)
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)
    
    // router.beforeEach((to, from, next) => {
    //   console.log("切换路由", to.fullPath, from.fullPath);
  
    //   //触发百度的pv统计
    //   if (typeof _hmt != "undefined") {
    //     if (to.path) {
    //       _hmt.push(["_trackPageview", to.fullPath]);
    //       console.log("上报百度统计", to.fullPath);
    //     }
    //   }
    //   // continue
    //   next();
    // });
  },
})
