---
title: 定义变量
createTime: 2024/10/23 18:05:34
permalink: /notes/python/syntax/variable.html
---

## 变量

- Python是属于弱类型的语言，变量定义时，不需要指定变量的数据类型，类型由值决定

```python:no-line-numbers
# 定义名为age的变量名，并将数字30赋值给变量
# 所以age当前的数据类型是 数字
age = 30
print(type(age), age)

# name 为 变量名
# = "Jerry" 赋值为 字符串 "Jerry"
name = "Jerry"
print(type(name), name)

# students 为 变量名
# = [] 赋值为 数组
students = []
print(type(students), students)

```
## 常量

- Python定义变量时也可以指定数据类型，这里指定的类型可以在后面代码中随时改变

```python:no-line-numbers
# age 为 变量名
# 指定类型为整数
# = 30 赋值为 数字 30
age:int = 30

# name 为 变量名
# 指定类型为字符串
# = "Jerry" 赋值为 字符串 "Jerry"
name:str = "Jerry"

```

## 编码规范
详情参见 [编码规范](../tools/pyguide.md)
