import os
import sys

e = "  \n"
res_file = os.path.join(
    os.path.dirname(__file__), os.path.basename(__file__).replace(".py", "-result.md")
)

f = open(res_file, "w", encoding="utf-8")
sys.stdout = f

# 双引号（"）包围
str_1 = "你好，Jerry！"
print("str_1:", str_1, end=e)

# 三双引号（"""）包围，一般用于多行字符串
str_2 = """你好，Jerry！，这是三引号包围创建的字符串"""
print("str_2:", str_2, end=e)

# 使用 str 函数，接收一个 字符串对象
str_3 = str("一起学Python")
print("str_3:", str_3, end=e)

# 使用 str 函数，接收一个 数字对象
str_4 = str(3.14)
print("str_4:", str_4, end=e)

# 使用 str 函数，接收一个 数组对象
str_5 = str(["Hello", "number", 3.14])
print("str_5:", str_5, end=e)
