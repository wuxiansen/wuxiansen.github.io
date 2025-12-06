# GitHub Pages 配置说明

## 问题描述

访问 https://wuxiansen.github.io 显示的是 README.md 文件内容，而不是编译后的网站内容。

## 原因分析

GitHub Pages 默认配置为从主分支 (main) 的根目录部署，但本项目的编译后内容实际部署在 `gh-pages` 分支。

## 解决方案

### 自动配置 (推荐)

项目现在包含自动配置 GitHub Pages 的工作流：

1. **deploy-docs.yml** - 在每次推送到 main 分支时自动部署并配置 Pages
2. **auto-deploy.yml** - 手动触发部署时也会自动配置 Pages
3. **configure-pages.yml** - 单独的配置工作流，可手动触发

这些工作流会自动将 GitHub Pages 配置为从 `gh-pages` 分支部署。

### 手动配置 (备选)

如果自动配置失败，你也可以手动配置：

1. 访问仓库设置页面：https://github.com/wuxiansen/wuxiansen.github.io/settings/pages
2. 在 "Build and deployment" 部分
3. 在 "Source" 下拉菜单中选择 "Deploy from a branch"
4. 在 "Branch" 下拉菜单中选择 `gh-pages` 分支和 `/ (root)` 目录
5. 点击 "Save" 保存配置

## 部署流程

```mermaid
graph LR
    A[推送到 main 分支] --> B[触发 deploy-docs 工作流]
    B --> C[安装依赖]
    C --> D[构建 VuePress]
    D --> E[部署到 gh-pages 分支]
    E --> F[配置 GitHub Pages]
    F --> G[网站可通过 wuxiansen.github.io 访问]
```

## 验证

配置完成后，访问 https://wuxiansen.github.io 应该能看到编译后的网站内容，而不是 README.md。

## 注意事项

- 编译后的内容存储在 `gh-pages` 分支
- 源代码在 `main` 分支
- 不要直接修改 `gh-pages` 分支，它由 GitHub Actions 自动管理
- 网站更新需要推送到 `main` 分支，触发自动构建和部署
