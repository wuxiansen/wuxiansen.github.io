---
title: Vue.js 开发指南
icon: vuejs
date: 2024-12-06
category:
  - 软件技术
  - 前端框架
tag:
  - Vue.js
  - 前端开发
  - JavaScript
---

# Vue.js 开发指南

Vue.js 是一个渐进式 JavaScript 框架，用于构建用户界面。它易学易用，性能优异，是现代前端开发的首选框架之一。

## Vue.js 简介

### 核心特性

- **响应式数据绑定**：数据变化自动更新视图
- **组件化开发**：可复用的组件系统
- **虚拟 DOM**：高效的 DOM 更新机制
- **渐进式框架**：可以逐步引入，无需全盘重构

## 快速开始

### 安装

```bash
# 使用 npm
npm create vue@latest

# 使用 pnpm
pnpm create vue@latest
```

### Hello Vue

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">点击我</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')

const changeMessage = () => {
  message.value = 'Vue is awesome!'
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
```

## 核心概念

### 响应式数据

```javascript
import { ref, reactive } from 'vue'

// ref - 基本类型
const count = ref(0)
count.value++

// reactive - 对象
const state = reactive({
  name: 'Alice',
  age: 25
})
state.age++
```

### 计算属性

```javascript
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
```

### 生命周期

```javascript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
```

## 组件开发

### 定义组件

```vue
<!-- MyButton.vue -->
<template>
  <button :class="type" @click="handleClick">
    <slot>默认文本</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>
```

### 使用组件

```vue
<template>
  <MyButton type="success" @click="handleClick">
    点击我
  </MyButton>
</template>

<script setup>
import MyButton from './components/MyButton.vue'

const handleClick = () => {
  console.log('按钮被点击')
}
</script>
```

## 路由管理

使用 Vue Router 进行路由管理：

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})
```

## 状态管理

使用 Pinia 进行状态管理：

```javascript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    age: 0
  }),
  actions: {
    updateUser(name, age) {
      this.name = name
      this.age = age
    }
  }
})
```

## 学习资源

- [Vue.js 官方文档](https://cn.vuejs.org/)
- [Vue Router](https://router.vuejs.org/zh/)
- [Pinia](https://pinia.vuejs.org/zh/)
- [Vite](https://cn.vitejs.dev/)

## 下一步

- [Vue 3 进阶](/technology/guides/vue-advanced.md)
- [组件库开发](/technology/guides/component-library.md)
- [性能优化](/technology/guides/performance.md)

---

::: tip
Vue 3 的 Composition API 让代码更易于组织和复用，推荐使用 `<script setup>` 语法！
:::
