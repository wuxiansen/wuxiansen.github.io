# GitHub Pages 部署指南

## 问题诊断结果

访问 `wuxiansen.github.io` 跳转到 README.md 内容的原因:

1. **gh-pages 分支不存在** - VuePress 构建产物应该部署到此分支
2. **GitHub Pages 配置可能指向了错误的源** - 应该指向 `gh-pages` 分支
3. **自动部署 workflow 可能从未成功运行**

## 解决方案

### 方案一:手动触发部署 (推荐)

#### 步骤 1: 检查 GitHub Actions 权限

1. 进入仓库 Settings → Actions → General
2. 确保以下设置:
   - **Actions permissions**: 选择 "Allow all actions and reusable workflows"
   - **Workflow permissions**: 选择 "Read and write permissions"
   - ✅ 勾选 "Allow GitHub Actions to create and approve pull requests"

#### 步骤 2: 检查 GitHub Pages 配置

1. 进入仓库 Settings → Pages
2. **Source** 设置:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. 点击 Save

如果看不到 `gh-pages` 分支选项,这是正常的,执行步骤 3 后会自动创建。

#### 步骤 3: 手动触发部署

有两种方式触发部署:

**方式 A: 通过 GitHub 网页界面**

1. 进入仓库的 Actions 标签页
2. 点击左侧的 "部署文档" workflow
3. 点击右侧的 "Run workflow" 按钮
4. 选择 `main` 分支
5. 点击绿色的 "Run workflow" 按钮

**方式 B: 推送代码到 main 分支**

```bash
# 切换到 main 分支
git checkout main

# 拉取最新代码
git pull origin main

# 推送到 main 分支会自动触发部署
git push origin main
```

**方式 C: 使用便捷脚本 (如果你有 GitHub CLI)**

```bash
bash script/trigger-deploy.sh
```

#### 步骤 4: 等待部署完成

1. 在 Actions 标签页查看部署进度
2. 部署成功后,会自动创建 `gh-pages` 分支
3. 等待 1-2 分钟让 GitHub Pages 生效
4. 访问 `wuxiansen.github.io` 查看效果

### 方案二:检查是否存在部署失败

1. 进入 Actions 标签页
2. 查看是否有失败的 workflow 运行记录
3. 如果有失败记录,点击查看错误日志
4. 常见问题:
   - **PAT_TOKEN 未配置**: 进入 Settings → Secrets and variables → Actions,添加名为 `PAT_TOKEN` 的 secret
   - **pnpm 版本问题**: 检查 workflow 中的 pnpm 版本是否正确
   - **依赖安装失败**: 检查网络问题或依赖配置

### 方案三:本地构建和部署 (高级)

如果自动部署一直失败,可以尝试本地构建:

```bash
# 1. 安装依赖
pnpm install

# 2. 构建项目
pnpm build

# 3. 进入构建产物目录
cd src/.vuepress/dist

# 4. 初始化 git 并推送到 gh-pages
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:wuxiansen/wuxiansen.github.io.git main:gh-pages

# 5. 返回项目根目录
cd -
```

## 验证部署成功

部署成功后,访问 `https://wuxiansen.github.io`,应该能看到:

- ✅ VuePress 主题的博客首页
- ✅ 正确的导航栏和侧边栏
- ✅ 文章列表和内容

而不是:

- ❌ README.md 的纯文本内容

## 后续维护

### 自动部署

配置成功后,每次推送代码到 `main` 分支都会自动触发部署:

```bash
git add .
git commit -m "update: 更新文章"
git push origin main
```

### 手动部署

如果需要手动触发部署(例如只想部署特定分支):

```bash
# 使用 GitHub CLI
gh workflow run auto-deploy.yml -f branch=main -f environment=production

# 或使用便捷脚本
bash script/trigger-deploy.sh
```

## 故障排查

### 问题 1: Actions 标签页为空

**原因**: GitHub Actions 未启用

**解决**:
1. Settings → Actions → General
2. 选择 "Allow all actions and reusable workflows"

### 问题 2: 部署成功但网站未更新

**原因**: GitHub Pages 缓存或配置问题

**解决**:
1. 等待 5-10 分钟
2. 清除浏览器缓存
3. 检查 Settings → Pages 配置是否正确
4. 使用无痕模式访问网站

### 问题 3: 部署失败 - PAT_TOKEN 错误

**原因**: Personal Access Token 未配置或权限不足

**解决**:
1. 访问 https://github.com/settings/tokens
2. 创建新 token,权限选择:
   - ✅ repo (Full control of private repositories)
   - ✅ workflow (Update GitHub Action workflows)
3. 复制 token
4. Settings → Secrets and variables → Actions
5. 创建名为 `PAT_TOKEN` 的 secret,粘贴 token

### 问题 4: 构建失败 - 内存不足

**原因**: VuePress 构建需要较大内存

**解决**: workflow 中已配置 `NODE_OPTIONS: --max_old_space_size=8192`,通常不会有此问题。如果仍然失败,可以:
1. 检查是否有过大的图片或资源文件
2. 优化 VuePress 配置

## 相关文件

- `.github/workflows/deploy-docs.yml` - 自动部署 workflow (推送触发)
- `.github/workflows/auto-deploy.yml` - 手动部署 workflow
- `src/.vuepress/config.ts` - VuePress 配置
- `package.json` - 构建脚本配置

## 参考文档

- [VuePress 部署文档](https://v2.vuepress.vuejs.org/zh/guide/deployment.html)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
