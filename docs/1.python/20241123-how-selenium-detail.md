---
title: Python使用Selenium（超详细教程）
tags:
  - python
  - selenium
createTime: 2024/10/21 14:42:33
permalink: /blog/python/selenium/how-detail.html
draft: true
---

## Selenium的介绍

### 一、 前言 ###

> 声明以下的例子，只是来作为测试学习，并不作为真正的爬虫

我们在浏览一些网站时，有不少内容是通过 JavaScript动态渲染的，或是AJAX 请求后端加载数据，这其中涉及到了不少加密参数如 token，sign，难以找规律，较为复杂。像前面的百度贴吧的一个评论的回复，百度翻译等，都是经过ajax动态 加载得到。

为了解决这些问题，我们可以直接模拟浏览器运行，然后爬取数据，这样就可以实现在浏览器中看到内容是怎么样了，不用去分析 JS 的算法，也不用去管 ajax 的接口参数了。

python 提供了多种模拟器运行库，Selenium、Splash、Pyppetter、Playwright 等，可以方便帮我们爬取，很大程度上可以绕过JavaScript动态渲染，获取数据。

### 二、 Selenium介绍 ###

官网中文文档：https://www.selenium.dev/zh-cn/documentation/

其访问比较慢，最好是用 VPN

- 优点：

Selenium 是一个自动化测试工具，历史悠久，功能强大，技术成熟。其优点是能直接在浏览器上操作，利用它可以像人一样完成，输入文本框内容，点击，下拉等操作，它不但能做自动化测试，在爬虫领域也是一把利器，能解决大部分网页反爬问题，Selenium可以根据驱动的代码指令来获取网页内容，甚至是验证码的截屏，或判断网站上的某些动作是否发生。我们这边主要是围绕着爬虫展开。

2、缺点：

  1. Selenium 运行比较慢，它需要等待浏览器的元素加载完毕，所以耗时。
  
  2. 驱动的适配，浏览器版本不同，浏览器类型不同，得使用不同的驱动器。
  
  3. 像一些安全性比较高，比较大型的网站是能检测出是否使用了Selenium来爬取网站

### 三、 Selenium环境搭建 ###

> 我本机是 windows 11，浏览器使用 Edge 来进行测试