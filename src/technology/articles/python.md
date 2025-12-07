---
title: Python 编程入门
icon: python
date: 2024-12-06
category:
  - 软件技术
  - 编程语言
tag:
  - Python
  - 编程基础
---

# Python 编程入门

Python 是一种简洁、优雅、功能强大的编程语言，广泛应用于 Web 开发、数据分析、人工智能等领域。

## Python 简介

Python 具有以下特点：

- **简洁易读**：语法清晰，代码易于理解和维护
- **功能强大**：丰富的标准库和第三方库
- **跨平台**：可在 Windows、Linux、macOS 等系统运行
- **应用广泛**：Web 开发、数据科学、机器学习、自动化等

## 快速开始

### 安装 Python

访问 [Python 官网](https://www.python.org/) 下载最新版本。

### Hello World

```python
print("Hello, World!")
```

### 基础语法

#### 变量和数据类型

```python
# 整数
age = 25

# 浮点数
price = 99.99

# 字符串
name = "Alice"

# 布尔值
is_student = True

# 列表
fruits = ["apple", "banana", "orange"]

# 字典
person = {
    "name": "Bob",
    "age": 30,
    "city": "Beijing"
}
```

#### 条件语句

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

#### 循环

```python
# for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
```

#### 函数

```python
def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)
```

## 常用库

### 数据处理

- **NumPy**：数值计算
- **Pandas**：数据分析
- **Matplotlib**：数据可视化

### Web 开发

- **Django**：全功能 Web 框架
- **Flask**：轻量级 Web 框架
- **FastAPI**：现代 API 框架

### 机器学习

- **Scikit-learn**：机器学习
- **TensorFlow**：深度学习
- **PyTorch**：深度学习

## 学习资源

- [Python 官方文档](https://docs.python.org/)
- [Python 教程](https://docs.python.org/zh-cn/3/tutorial/)
- [Real Python](https://realpython.com/)

## 下一步

继续学习：
- [面向对象编程](/technology/guides/oop.md)
- [Python 进阶](/technology/guides/advanced-python.md)
- [Web 开发实战](/technology/articles/django.md)

---

::: tip
实践是最好的学习方式，多写代码，多做项目！
:::
