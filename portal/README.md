# 综合门户网站

专业的技术、金融、教育综合门户平台。

## 特性

- ✅ 基于 VuePress Theme Hope
- ✅ 支持多分类内容组织
- ✅ 响应式设计
- ✅ SEO 优化
- ✅ 暗黑模式支持

## 内容分类

### 软件技术
- 编程语言（Python、Java、JavaScript、Go）
- 开发框架（Vue.js、React、Spring Boot、Django）
- 技术指南和最佳实践

### 金融投资
- 投资理财（股票、基金、债券、外汇）
- 金融知识（市场、工具、风险管理）
- 投资策略和分析

### 在线教育
- 在线课程推荐
- 学习资源导航
- 学习方法和职业规划

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:8080

### 构建

```bash
pnpm build
```

构建产物在 `dist` 目录。

## 项目结构

```
portal/
├── src/                    # 源文件
│   ├── .vuepress/         # VuePress 配置
│   │   ├── config.ts      # 站点配置
│   │   ├── theme.ts       # 主题配置
│   │   ├── navbar.ts      # 导航栏配置
│   │   └── sidebar.ts     # 侧边栏配置
│   ├── technology/        # 软件技术
│   │   ├── articles/      # 文章
│   │   ├── guides/        # 指南
│   │   └── README.md      # 分类首页
│   ├── finance/           # 金融
│   │   ├── articles/      # 文章
│   │   ├── guides/        # 指南
│   │   └── README.md      # 分类首页
│   ├── education/         # 教育
│   │   ├── articles/      # 文章
│   │   ├── guides/        # 指南
│   │   └── README.md      # 分类首页
│   ├── posts/             # 博客
│   │   └── articles/      # 文章
│   ├── README.md          # 网站首页
│   └── about.md           # 关于页面
├── package.json
└── README.md
```

## 贡献

欢迎通过 Pull Request 贡献内容！

## 许可

MIT License
