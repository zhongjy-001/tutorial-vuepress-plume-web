import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const pthonNote = defineNoteConfig({
  text: 'Python',
  dir: '/notes/python',
  link: '/notes',
  sidebar: [{
    prefix: '/notes/python',
    icon: 'mdi:tooltip-text-outline',
    text: '准备开始',
    collapsed: false,
    items: [{
      text: '第一个Python程序',
      link: '/notes/python/first-coding.md',
    }],
  },{
    prefix: '/notes/python/tools/',
    icon: 'mdi:tooltip-text-outline',
    text: '效率',
    items: [{
      text: '编码规范',
      link: '/notes/python/tools/pyguide.md',
    },{
      text: 'VSCode安装',
      link: '/notes/python/tools/vscode.md',
    },{
      text: 'Anaconda虚拟环境管理',
      link: '/notes/python/tools/anaconda.md',
    }],
  }, {
    prefix: '/notes/python/component/',
    icon: 'mdi:tooltip-text-outline',
    text: '常用三方组件',
    items: [{
      text: 'Selenium介绍',
      link: '/notes/python/component/selenium.md',
    }]
  },{
    icon: 'mdi:tooltip-text-outline',
    text: '实例',
    items: [{
      text: 'VSCode安装',
      link: '/notes/python/tools/vscode.md',
    },{
      text: 'Anaconda虚拟环境管理',
      link: '/notes/python/tools/anaconda.md',
    }],
  }, {
    prefix: '/notes/python/syntax',
    icon: 'mdi:tooltip-text-outline',
    text: '基础语法',
    collapsed: false,
    items: [{
      text: '定义变量',
      link: 'variable.md',
    },{
      text: '数据类型',
      link: 'data-type/README.md',
      collapsed: false,
      prefix: 'data-type',
      items: [{
        text: '字符串(str)',
        link: 'str.md',
      },{
        text: '数字(number)',
        link: 'number.md',
      },{
        text: '列表(list)',
        link: 'list.md',
      },{
        text: '元组(tuple)',
        link: 'tuple.md',
      },{
        text: '字典(dict)',
        link: 'dict.md',
      },{
        text: '日期时间(time)',
        link: 'time.md',
      }],
    },{
      text: '条件语句',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: '循环语句',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: '导入语句(import)',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: '数据类型',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: '数据类型',
      link: '/notes/python/syntax/data-type.md',
    }],
  }, {
    icon: 'mdi:tooltip-text-outline',
    text: '高级编程',
    items: [{
      text: '面向对象编程',
      link: '/notes/python/syntax/variable.md',
    },{
      text: '正则表达式',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: 'MySQL',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: '多线程',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: 'JSON解析',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: 'XML解析',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: 'WEB编程',
      link: '/notes/python/syntax/data-type.md',
    },{
      text: 'Socket编程',
      link: '/notes/python/syntax/data-type.md',
    }],
  },],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote,pthonNote],
})
