###
### 查看python字符串的所有内建函数
###
# 使用 dir() 函数查看字符串内建函数列表
str_func = dir(str)

# 打印字符串内建函数列表
i = 0
for func in str_func:
    if func.startswith("__"):
        continue
    i += 1
    print(f"{i}:", func)

# 要知道字符串内建函数upper的用法，使用help,其他的可以类推
help(str.upper)

###
### 大小写转换
###
str1 = "Hello world!你好"
# 全大写
uppercase_str = str1.upper()
# 全小写
lowercase_str = str1.lower()
# 字符串首字母大写
capitalize_str = str1.capitalize()
# 单词首字母大写
title_str = str1.title()
print(uppercase_str)  # 结果为：HELLO WORLD!你好
print(lowercase_str)  # 结果为：hello world!你好
print(capitalize_str)  # 结果为：Hello world!你好
print(title_str)  # 结果为：Hello World!你好
###
### 连接与重复
###
# 使用 + 进行连接
str1 = "hello" + "," + "你好"
print(str1)  # 结果为：hello,你好
# 使用乘法可实现重复
str1 = "hello" * 3  # 这里指定字符串重复3次
print(str1)  # 结果为：hellohellohello
###
### 分割和拼接
###
# 使用 .split() 方法将字符串按照指定分隔符拆分成列表，默认以空格分割
str1 = "hello 你好 小王"
print(str1.split())  # 结果为：['hello', '你好', '小王']
str2 = "hello,你好,小王"
print(str2.split(","))  # 结果为：['hello', '你好', '小王']
# 使用 .join() 方法将列表中的元素拼接成字符串
list1 = ["hello", "你好", "小王"]
join1_str = ",".join(list1)
print(join1_str)  # 结果为：hello,你好,小王
join2_str = "|".join(list1)
print(join2_str)  # 结果为：hello|你好|小王
###
### 子字符串的判断
###
# 使用 in 关键字检查字符串是否包含某个子串，返回bool。举例：
str1 = "Hello world!你好"
contains_substring = "Hello" in str1
no_contains_substring = "Hello111" in str1
print(contains_substring)  # 结果为：True
print(no_contains_substring)  # 结果为：False
###
### 替换
###
# 使用 .replace() 方法替换字符串中的子串。默认全部替换。如果不需要全部替换，可指定替换次数。
str1 = "Hello world! 你好，world"
rep_str = str1.replace("world", "小王")  # 将字符串str1中的world替换为小王
print(rep_str)  # 结果为：Hello 小王!你好，小王
rep_one_str = str1.replace("world", "小王", 1)  # 将字符串str1中的world替换为小王
print(rep_one_str)  # 结果为：Hello 小王!你好，world
###
### 长度计算
###
# 使用len()函数，可以获取字符串中元素的个数
str1 = "hello"
print(len(str1))  # 结果为：5
str2 = "hello你好"
print(len(str2))  # 结果为：7
# 计算字符串编码后的字节数，也就是实际占用内存的大小
# 结果会受到python解释器的内存分配机制和内存对齐影响，结果会略微超过字符串编码后的字节数
str1 = "hello你好"
print(str1.encode().__sizeof__())  # 结果为44
# 计算字符串的实际字节数
print(
    len(str1.encode())
)  # 结果为11个字节，包含2个引号+5个字母+2个汉字，注意每个汉字通常占用2个
###
### 截取
###
strings = "hello"
print(strings)  # 输出字符串,结果为：hello
print(strings[0:-1])  # 输出第一个到倒数第二个的所有字符,结果为：hell
print(strings[0])  # 输出字符串第一个字符,结果为：h
print(strings[2:5])  # 输出从第三个开始到第五个的字符,结果为：llo
print(strings[2:])  # 输出从第三个开始的后的所有字符,结果为：llo
print(strings * 2)  # 输出字符串两次，也可以写成 print (2 * str),结果为：hellohello
print(strings + "TEST")  # 连接字符串,结果为：helloTEST
# 注意：Python 字符串不能被改变。向一个索引位置赋值，比如 strings[0] = 'y'会导致错误。
# 索引截取：
string = "Hello,World!"
print(string[6:])  # 输出: World!
# 切片截取：
string = "Hello,World!"
print(string[6:11])  # 输出: World，注意取值时遵循左闭右开原则，即包含左边,不包含右边
# 使用split()方法分割字符串:
string = "Hello,World!"
print(string.split(",")[0])  # 输出: Hello
# 使用正则表达式截取：
import re

string = "Hello,World!"
result = re.findall(r"W\w+", string)
print(result[0])  # 输出: World

string = "Hello,world!"
print(string[0:5])  # 输出第1至第5个字符Hello
print(string[6:])  # 输出第6个至结尾的字符world!
print(string[::2])  # 输出从开头至结尾步长为2的字符lowrd
print(string[0])  # 输出第1个字符H
print(string[-1])  # 输出倒数第一个字符!
print(string[-3:])  # 输出倒数第三个字符到结尾ld!
print(
    string[100:105]
)  # 切片的时候起始位置和终止位置都超出的时候不会进行报错，超出不会打印出来
# print(string[100])  # 索引的时候索引值超出范围的时候会报错string index out of range
