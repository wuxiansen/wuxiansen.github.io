# GitHub Actions Workflows 使用说明

## 📋 Workflow 列表

### 1. auto-deploy.yml - 自动部署 Workflow

支持手动触发和命令触发的自动部署流程。

#### 🎯 功能特性

- ✅ 手动触发部署
- ✅ 选择部署分支（main/dev）
- ✅ 选择部署环境（production/staging）
- ✅ 通过 API 命令触发
- ✅ 自动构建和部署到 GitHub Pages

#### 🚀 使用方法

##### 方法一：GitHub 界面手动触发

1. 进入仓库的 **Actions** 标签页
2. 选择左侧的 **自动部署** workflow
3. 点击右侧的 **Run workflow** 按钮
4. 选择要部署的分支和环境
5. 点击 **Run workflow** 确认

##### 方法二：使用命令行触发（推荐）

在项目根目录下运行：

```bash
# 使用提供的脚本触发部署
bash script/trigger-deploy.sh
```

或者使用 GitHub CLI：

```bash
# 部署 main 分支到生产环境
gh workflow run auto-deploy.yml \
  -f branch=main \
  -f environment=production

# 部署 dev 分支到预发布环境
gh workflow run auto-deploy.yml \
  -f branch=dev \
  -f environment=staging
```

##### 方法三：使用 API 触发

```bash
# 设置你的 GitHub Token
export GITHUB_TOKEN="your_github_token"

# 触发部署
curl -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/wuxiansen/wuxiansen.github.io/dispatches \
  -d '{"event_type":"deploy","client_payload":{"branch":"main"}}'
```

### 2. deploy-docs.yml - 自动部署文档

当代码推送到 main 分支时自动触发部署。

### 3. sitemap_submit.yml - 站点地图提交

自动提交站点地图到搜索引擎。

### 4. pr-bot.yml - PR 机器人 🤖

智能PR管理机器人，支持通过评论命令自动执行常见的PR操作。

#### 🎯 功能特性

- ✅ 自动合并PR（检查CI状态）
- ✅ 自动代码Review
- ✅ 批准PR
- ✅ 关闭/重开PR
- ✅ 支持中文和英文命令

#### 🚀 使用方法

在PR的评论中输入以下命令（需要仓库协作者权限）：

##### 可用命令

| 命令 | 英文命令 | 说明 |
|------|---------|------|
| `@机器人 合并` | `@bot merge` | 自动合并当前PR（需要通过所有CI检查） |
| `@机器人 review` | `@bot review` | 执行自动代码review |
| `@机器人 批准` | `@bot approve` | 批准当前PR |
| `@机器人 关闭` | `@bot close` | 关闭当前PR |
| `@机器人 重开` | `@bot reopen` | 重新打开PR |
| `@机器人 帮助` | `@bot help` | 显示帮助信息 |

#### 📝 使用示例

```markdown
# 在PR评论中输入：
@bot merge

# 或者使用中文：
@机器人 合并

# 查看帮助：
@bot help
```

#### ⚙️ 工作原理

1. **自动合并**：
   - 检查所有CI检查是否通过
   - 验证PR是否可合并
   - 自动执行合并操作
   - 失败时会给出详细提示

2. **代码Review**：
   - 分析PR中的文件变更
   - 检查常见代码问题（如console.log等）
   - 生成review报告

3. **批准PR**：
   - 自动创建一个批准的review
   - 添加批准评论

#### 🔒 权限要求

- 只有仓库的协作者（Collaborators）和维护者（Maintainers）可以执行命令
- workflow需要以下权限（已配置）：
  - `contents: write`
  - `pull-requests: write`
  - `issues: write`

#### ⚠️ 注意事项

1. 自动合并会检查CI状态，只有所有检查通过才会执行
2. 机器人会在评论中实时反馈操作结果
3. 如果操作失败，会显示详细的错误信息
4. 建议在使用前先用 `@bot help` 查看最新的命令列表

## 🔧 配置说明

### 必需的 Secrets

确保在仓库设置中配置了以下 Secrets：

- `PAT_TOKEN`: GitHub Personal Access Token，需要有 `repo` 和 `workflow` 权限

### 创建 PAT Token

1. 访问 GitHub Settings -> Developer settings -> Personal access tokens -> Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 选择以下权限：
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
4. 生成 token 并复制
5. 在仓库的 Settings -> Secrets and variables -> Actions 中添加名为 `PAT_TOKEN` 的 Secret

## 📝 注意事项

1. 首次部署需要确保 gh-pages 分支存在
2. 部署前会自动清理旧的构建文件
3. 构建过程会使用 8GB 内存限制
4. 部署完成后会在 Actions 日志中显示结果

## 🐛 故障排除

### 部署失败

- 检查 `PAT_TOKEN` 是否正确配置
- 确认 pnpm 版本是否匹配 (9.1.2)
- 查看 Actions 日志中的详细错误信息

### 构建失败

- 检查依赖是否正确安装
- 确认 Node.js 版本 (18)
- 检查 VuePress 配置文件

### 访问失败

- 确认 GitHub Pages 已启用
- 检查仓库的 Pages 设置中 source 是否设置为 gh-pages 分支
