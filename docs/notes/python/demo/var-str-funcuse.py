import os
import sys

e = "  \n"
res_file = os.path.join(
    os.path.dirname(__file__), os.path.basename(__file__).replace(".py", "-result.md")
)

f = open(res_file, "w", encoding="utf-8")
sys.stdout = f

# len()
# 获取字符串的长度
res = len("Hello, World!")
print("len:", res, end=e)  # 输出: 13
# lower()
# 将字符串转换为小写字母
res = "Hello World".lower()
print("lower:", res, end=e)  # 输出: "hello world"
# upper()
# 将字符串转换为大写字母
res = "Hello World".upper()
print("upper:", res, end=e)  # 输出: "HELLO WORLD"
# capitalize()
# 将字符串的首字母转换为大写，其他字母转换为小写
res = "hello world".capitalize()
print("capitalize:", res, end=e)  # 输出: "Hello world"
# title()
# 将每个单词的首字母转换为大写，其他字母转换为小写
res = "hello world".title()
print("title:", res, end=e)  # 输出: "Hello World"
# count()
# 统计子字符串在字符串中出现的次数
res = "Hello Hello World".count("Hello")
print("count:", res, end=e)  # 输出: 2
# find()
# 查找子字符串在字符串中第一次出现的位置索引
res = "Hello World".find("World")
print("find:", res, end=e)  # 输出: 6
# replace()
# 替换字符串中指定的子字符串
res = "Hello World".replace("World", "Universe")
print("replace:", res, end=e)  # 输出: "Hello Universe"
# split()
# 以指定分隔符将字符串拆分为列表
res = "Hello,World".split(",")
print("split:", res, end=e)  # 输出: ["Hello", "World"]
# startswith()
# 检查字符串是否以指定的前缀开始
res = "Hello World".startswith("Hello")
print("startswith:", res, end=e)  # 输出: True
# endswith()
# 检查字符串是否以指定的后缀结束
res = "Hello World".endswith("World")
print("endswith:", res, end=e)  # 输出: True
# strip()
# 去除字符串两端指定的字符，默认为去除空白字符
res = " Hello World ".strip()
print("strip:", res, end=e)  # 输出: "Hello World"
