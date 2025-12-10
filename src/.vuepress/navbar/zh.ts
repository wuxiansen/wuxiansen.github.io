import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "discover", link: "/demo/" },
  {
    text: "笔记分类",
    icon: "edit",
    children: [
      {
        text: "博客相关",
        icon: "blog",
        prefix: "/blog/",
        children: [
          { text: "博客文章", icon: "article", link: "" },
        ],
      },
    ],
  },
  {
    text: "技术文章",
    icon: "stack",
    children: [
      {
        text: "AI",
        icon: "hk-ai",
        prefix: "/technology/AI/",
        children: [
          { text: "Spring AI", icon: "hk-spring", link: "spring-ai/" },
          { text: "Spring AI Alibaba", icon: "hk-alibaba", link: "spring-ai-alibaba/" },
        ],
      },
      {
        text: "后端开发",
        icon: "code",
        prefix: "/technology/",
        children: [
          { text: "Java", icon: "java", link: "Java/" },
          { text: "Golang", icon: "hk-golang", link: "Golang/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "Rust", icon: "hk-rust", link: "Rust/" },
        ],
      },
      {
        text: "系统与运维",
        icon: "linux",
        prefix: "/technology/",
        children: [
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Web", icon: "code", link: "Web/" },
        ],
      },
    ],
  },
  {
    text: "金融知识",
    icon: "hk-finance",
    children: [
      {
        text: "投资品种",
        icon: "hk-investment",
        prefix: "/finance/articles/",
        children: [
          { text: "股票", icon: "hk-stock", link: "stocks" },
          { text: "基金", icon: "hk-fund", link: "funds" },
          { text: "债券", icon: "hk-bond", link: "bonds" },
          { text: "外汇", icon: "hk-forex", link: "forex" },
        ],
      },
      {
        text: "金融基础",
        icon: "hk-knowledge",
        prefix: "/finance/articles/",
        children: [
          { text: "金融市场", icon: "hk-market", link: "markets" },
          { text: "金融工具", icon: "hk-tool", link: "instruments" },
          { text: "风险管理", icon: "hk-risk", link: "risk-management" },
        ],
      },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    link: "/tutorial/",
  },
  {
    text: "收藏",
    icon: "hk-shoucang1",
    link: "/collect",
  },
  {
    text: "说说",
    icon: "news",
    link: "/news/",
  },
  {
    text: "留言板",
    icon: "mark",
    link: "/visitorsbook",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "info",
    children: [
      { text: "关于我", icon: "people", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ]
  },
]);
