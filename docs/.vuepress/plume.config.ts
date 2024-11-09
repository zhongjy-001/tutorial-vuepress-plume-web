import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  // logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    // avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: '一起学编程',
    description: '学习编程的原创中文教程',
    // circle: true,
    location: '重庆市',
    // organization: 'sdf',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/zhongjy-001/tutorial-vuepress-plume-web' },
  ],

})
