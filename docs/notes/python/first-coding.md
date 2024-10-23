---
title: 第一个Python程序
author:
  name: Mr.Hope
  url: https://mister-hope.com
  email: mister-hope@outlook.com
tags:
  - Python
createTime: 2024/10/19 21:21:07
permalink: /notes/python/first-coding.html
---
## 交互模式
在命令行模式下敲命令python，就看到类似如下的一堆文本输出，然后就进入到Python交互模式，它的提示符是>>>。

::: npm-to tabs="npm,yarn,pnpm,py" 
``` sh
npm install -D vuepress vuepress-theme-plume
```
::: 

::: demo-wrapper title="示例" no-padding height="120px"
<style scoped>
.open-door {
  display: flex;
  gap: 20px;
  padding: 20px;
}
.open-door .main {
  background: #ccc;
}
</style>

<div class="open-door">
  <div class="main">Mac: ~Jerry$</div>
  <div class="aside">aside</div>
</div>

:::

**代码：**

```js whitespace
const a = 1
const b = 2
const c = a + b

// [!code word:obj]
const obj = {
  toLong: {
    deep: {
      deep: {
        deep: {
          value: 'this is to long text. this is to long text. this is to long text. this is to long text.', // [!code highlight]
        }
      }
    }
  }
}
```