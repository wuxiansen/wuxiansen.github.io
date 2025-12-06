#!/bin/bash

# 自动部署触发脚本
# 用于快速触发 GitHub Actions 自动部署 workflow

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 检查是否安装了 gh CLI
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        print_error "GitHub CLI (gh) 未安装"
        print_info "请访问 https://cli.github.com/ 安装 GitHub CLI"
        print_info "或使用以下命令安装："
        echo ""
        echo "  macOS:   brew install gh"
        echo "  Linux:   sudo apt install gh  或  sudo yum install gh"
        echo "  Windows: winget install --id GitHub.cli"
        echo ""
        exit 1
    fi
}

# 检查是否已登录
check_gh_auth() {
    if ! gh auth status &> /dev/null; then
        print_error "未登录 GitHub CLI"
        print_info "请先运行: gh auth login"
        exit 1
    fi
}

# 显示菜单
show_menu() {
    echo ""
    print_info "🚀 GitHub Actions 自动部署触发器"
    echo ""
    echo "请选择要部署的分支："
    echo "  1) main (默认)"
    echo "  2) dev"
    echo "  3) 自定义分支"
    echo ""
    read -p "请输入选项 [1]: " branch_choice
    branch_choice=${branch_choice:-1}

    case $branch_choice in
        1)
            BRANCH="main"
            ;;
        2)
            BRANCH="dev"
            ;;
        3)
            read -p "请输入分支名称: " BRANCH
            if [ -z "$BRANCH" ]; then
                print_error "分支名称不能为空"
                exit 1
            fi
            ;;
        *)
            print_error "无效的选项"
            exit 1
            ;;
    esac

    echo ""
    echo "请选择部署环境："
    echo "  1) production (生产环境，默认)"
    echo "  2) staging (预发布环境)"
    echo ""
    read -p "请输入选项 [1]: " env_choice
    env_choice=${env_choice:-1}

    case $env_choice in
        1)
            ENVIRONMENT="production"
            ;;
        2)
            ENVIRONMENT="staging"
            ;;
        *)
            print_error "无效的选项"
            exit 1
            ;;
    esac
}

# 确认部署
confirm_deploy() {
    echo ""
    print_warning "准备部署："
    echo "  分支: $BRANCH"
    echo "  环境: $ENVIRONMENT"
    echo ""
    read -p "确认继续? [y/N]: " confirm

    if [[ ! $confirm =~ ^[Yy]$ ]]; then
        print_info "已取消部署"
        exit 0
    fi
}

# 触发 workflow
trigger_workflow() {
    print_info "正在触发部署..."

    if gh workflow run auto-deploy.yml \
        -f branch="$BRANCH" \
        -f environment="$ENVIRONMENT"; then
        print_success "部署已成功触发！"
        echo ""
        print_info "查看部署状态："
        echo "  命令行: gh run list --workflow=auto-deploy.yml --limit=1"
        echo "  网页: https://github.com/wuxiansen/wuxiansen.github.io/actions"
        echo ""

        # 询问是否查看运行日志
        read -p "是否查看部署日志? [y/N]: " watch_log
        if [[ $watch_log =~ ^[Yy]$ ]]; then
            print_info "等待 workflow 启动..."
            sleep 3
            gh run watch
        fi
    else
        print_error "触发部署失败"
        exit 1
    fi
}

# 主函数
main() {
    check_gh_cli
    check_gh_auth
    show_menu
    confirm_deploy
    trigger_workflow
}

# 如果脚本带参数运行，直接使用参数
if [ $# -eq 2 ]; then
    BRANCH=$1
    ENVIRONMENT=$2
    print_info "使用命令行参数: 分支=$BRANCH, 环境=$ENVIRONMENT"
    check_gh_cli
    check_gh_auth
    trigger_workflow
else
    main
fi
