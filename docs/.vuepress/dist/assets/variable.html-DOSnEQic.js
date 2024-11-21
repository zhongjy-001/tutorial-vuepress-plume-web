import{_ as n,c as t,a as e,b as l,f as i,d as p,e as h,r as k,o as r}from"./app-Bq0Y6JDm.js";const d={};function o(y,s){const a=k("RouteLink");return r(),t("div",null,[s[2]||(s[2]=e(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><ul><li>Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定</li></ul><div class="language-python" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 定义名为age的变量名，并将数字30赋值给变量</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 所以age当前的数据类型是 数字</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">age </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># name 为 变量名</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># = &quot;Jerry&quot; 赋值为 字符串 &quot;Jerry&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">name </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Jerry</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># students 为 变量名</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># = [] 赋值为 数组</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">students </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">students</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> students</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量"><span>常量</span></a></h2><ul><li>Python定义变量时也可以指定数据类型，这里指定的类型可以在后面代码中随时改变</li></ul><div class="language-python" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># age 为 变量名</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 指定类型为整数</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># = 30 赋值为 数字 30</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># name 为 变量名</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 指定类型为字符串</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># = &quot;Jerry&quot; 赋值为 字符串 &quot;Jerry&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Jerry</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre></div><h2 id="编码规范" tabindex="-1"><a class="header-anchor" href="#编码规范"><span>编码规范</span></a></h2>`,7)),l("p",null,[s[1]||(s[1]=i("详情参见 ")),p(a,{to:"/notes/python/tools/pyguide.html"},{default:h(()=>s[0]||(s[0]=[i("编码规范")])),_:1})])])}const c=n(d,[["render",o],["__file","variable.html.vue"]]),A=JSON.parse('{"path":"/notes/python/syntax/variable.html","title":"定义变量","lang":"zh-CN","frontmatter":{"title":"定义变量","createTime":"2024/10/23 18:05:34","permalink":"/notes/python/syntax/variable.html","description":"变量 Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定 常量 Python定义变量时也可以指定数据类型，这里指定的类型可以在后面代码中随时改变 编码规范 详情参见","head":[["meta",{"property":"og:url","content":"https://www.igoblogs.com/notes/python/syntax/variable.html"}],["meta",{"property":"og:site_name","content":"一起学编程"}],["meta",{"property":"og:title","content":"定义变量"}],["meta",{"property":"og:description","content":"变量 Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定 常量 Python定义变量时也可以指定数据类型，这里指定的类型可以在后面代码中随时改变 编码规范 详情参见"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T07:07:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T07:07:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定义变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-29T07:07:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"常量","slug":"常量","link":"#常量","children":[]},{"level":2,"title":"编码规范","slug":"编码规范","link":"#编码规范","children":[]}],"readingTime":{"minutes":0.74,"words":222},"git":{"createdTime":1729688248000,"updatedTime":1730185650000,"contributors":[{"name":"zhongjy-001","email":"zhongjy_001@163.com","commits":2}]},"autoDesc":true,"filePathRelative":"notes/python/syntax/variable.md"}');export{c as comp,A as data};
