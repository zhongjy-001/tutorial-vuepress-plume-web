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
      icon: 'mdi:tooltip-text-outline',
      text: 'VSCode安装',
      link: '/notes/python/vscode.md',
    }],
  }, {
    icon: 'mdi:tooltip-text-outline',
    text: '基础语法',
    items: [{
      icon: 'mdi:tooltip-text-outline',
      text: '第一个Python程序',
      link: '/notes/python/first-coding.md',
    }],
  },{
    text: 'Selenium介绍',
    link: '/notes/python/component/selenium.md',
  }],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,pthonNote],
})
