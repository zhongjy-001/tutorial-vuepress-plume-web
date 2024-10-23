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
      text: '第一个Python程序',
      link: '/notes/python/first-coding.md',
    }],
  }, {
    icon: 'mdi:tooltip-text-outline',
    text: '基础语法',
    items: [{
      text: '变量、常量及枚举',
      link: '/notes/python/syntax/variable.md',
    },{
      text: '数据类型',
      link: '/notes/python/syntax/data-type.md',
    }],
  },{
    icon: 'mdi:tooltip-text-outline',
    text: '效率工具',
    items: [{
      text: 'VSCode安装',
      link: '/notes/python/tools/vscode.md',
    },{
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
