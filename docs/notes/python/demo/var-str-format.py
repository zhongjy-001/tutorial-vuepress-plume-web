import os
import sys

e = "  \n"
res_file = os.path.join(
    os.path.dirname(__file__), os.path.basename(__file__).replace(".py", "-result.md")
)

f = open(res_file, "w", encoding="utf-8")
sys.stdout = f

name = "Jerry"
ages = 20
lang = ["Python", "golang", "Asp.net", "vue"]

# 写法1，通过 % 运算符进行格式化，将格式化参数插入到字符串中
format1 = "我是 %s, 一个老程序员，有 %d 年以上的开发经验, 涉及包括 %s 等多种语言"
message1 = format1 % (name, ages, lang)
print("message1:", message1, end=e)

# 写法2
format2 = "我是 {}, 一个老程序员，有 {} 年以上的开发经验, 涉及包括 {} 等多种语言"
message2 = format2.format(name, ages, lang)
print("message2:", message2, end=e)

# 写法3
format3 = (
    "我是 {name}, 一个老程序员，有 {ages} 年以上的开发经验, 涉及包括 {lang} 等多种语言"
)
message3 = format3.format(name=name, ages=ages, lang=lang)
print("message3:", message3, end=e)

# 写法4，使用 f-strings（格式化字符串字面值），这是python3.6以及以上版本支持的方法
message4 = (
    f"我是 {name}, 一个老程序员，有 {ages} 年以上的开发经验, 涉及包括 {lang} 等多种语言"
)
print("message4:", message4, end=e)

# 写法5，在Python 3.8 的版本中可以使用 = 符号来拼接运算表达式与结果
x = 1
print("{x+1=}:", f"{x+1=}", end=e)
print("{x+1}:", f"{x+1}", end=e)
