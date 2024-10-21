import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const pthonNote = defineNoteConfig({
  text: '',
  dir: '',
  link: '',
  sidebar: [{
    icon: 'mdi:tooltip-text-outline',
    text: '准备开始',
    collapsed: false,
    items: [{
      text: 'VSCode安装',
      link: '/notes/python/vscode.md',
    }],
  }, {
    icon: 'mdi:tooltip-text-outline',
    text: '基础语法',
    items: [{
      text: '第一个Python程序',
      link: '/notes/python/first-coding.md',
    }],
  },{
    icon: 'mdi:tooltip-text-outline',
    text: '效率工具',
    items: [{
      text: 'Anaconda虚拟环境管理',
      link: '/notes/python/tools/anaconda.md',
    }],
    }, {
    icon: 'mdi:tooltip-text-outline',
    text: '常用三方组件',
    items: [{
      text: 'Selenium介绍',
      link: '/notes/python/component/selenium.md',
    }]
  }],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,pthonNote],
})