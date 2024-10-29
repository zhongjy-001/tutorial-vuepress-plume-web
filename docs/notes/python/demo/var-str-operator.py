import os
import sys

e = "  \n"
res_file = os.path.join(
    os.path.dirname(__file__), os.path.basename(__file__).replace(".py", "-result.md")
)

f = open(res_file, "w", encoding="utf-8")
sys.stdout = f

str_1 = "明月几时有"
str_2 = "把酒问青天"

# 字符串连接 +
res_join = str_1 + "," + str_2 + "!"
print("res_join:", res_join, end=e)

# 重复输出字符串 *
res_repeat = str_1 * 2
print("res_repeat:", res_repeat, end=e)

# 获取字符串中字符
res_getchar = str_1[0]
print("res_getchar:", res_getchar, end=e)
res_getchar = str_1[3]
print("res_getchar:", res_getchar, end=e)

# 截取字符串中的一部分，遵循左闭右开原则
res_getstr = str_1[1:3]
print("res_getstr:", res_getstr, end=e)

# 字符串中是否包含给定的字符
res_containstr = "几天" in str_1
print("res_containstr:", res_containstr, end=e)
res_containstr = "几时" in str_1
print("res_containstr:", res_containstr, end=e)

# 字符串中是否不包含给定的字符
res_notcontainstr = "几天" not in str_1
print("res_notcontainstr:", res_notcontainstr, end=e)
res_notcontainstr = "几时" not in str_1
print("res_notcontainstr:", res_notcontainstr, end=e)

# 显示原始字符串，不进行转义
res_orgin = str_1 + R"\n" + str_2
print("res_orgin:", res_orgin, end=e)
