import os
import sys

e = "  \n"
res_file = os.path.join(
    os.path.dirname(__file__), os.path.basename(__file__).replace(".py", "-result.md")
)

f = open(res_file, "w", encoding="utf-8")
sys.stdout = f

# 使用 dir() 函数查看字符串内建函数列表
str_func = dir(str)

# 打印字符串内建函数列表
i = 0
for func in str_func:
    if func.startswith("__"):
        continue
    i += 1
    print(f"函数 {i}:", func, end=e)

# 要知道字符串内建函数upper的用法，使用help,其他的可以类推
help(str.upper)
