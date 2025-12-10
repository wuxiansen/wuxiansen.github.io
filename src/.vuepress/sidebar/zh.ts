import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "导航",
      icon: "discover",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "随笔札记",
      icon: "edit",
      children: [
        {
          text: "博客随笔",
          icon: "blog",
          prefix: "blog/",
          link: "blog/",
        },
        {
          text: "软件教程",
          icon: "software",
          prefix: "tutorial/",
          link: "tutorial/",
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
          prefix: "technology/AI/",
          link: "technology/AI/",
          children: [
            { text: "Spring AI", icon: "hk-spring", link: "technology/AI/spring-ai/" },
            { text: "Spring AI Alibaba", icon: "hk-alibaba", link: "technology/AI/spring-ai-alibaba/" },
          ],
        },
        {
          text: "后端开发",
          icon: "code",
          children: [
            { text: "Java", icon: "java", prefix: "technology/Java/", link: "technology/Java/" },
            { text: "Golang", icon: "hk-golang", prefix: "technology/Golang/", link: "technology/Golang/" },
            { text: "Python", icon: "python", prefix: "technology/Python/", link: "technology/Python/" },
            { text: "Rust", icon: "hk-rust", prefix: "technology/Rust/", link: "technology/Rust/" },
          ],
        },
        {
          text: "系统与运维",
          icon: "linux",
          children: [
            { text: "Linux", icon: "linux", prefix: "technology/Linux/", link: "technology/Linux/" },
            { text: "Web", icon: "code", prefix: "technology/Web/", link: "technology/Web/" },
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
          children: [
            { text: "股票", icon: "hk-stock", link: "finance/articles/stocks" },
            { text: "基金", icon: "hk-fund", link: "finance/articles/funds" },
            { text: "债券", icon: "hk-bond", link: "finance/articles/bonds" },
            { text: "外汇", icon: "hk-forex", link: "finance/articles/forex" },
          ],
        },
        {
          text: "金融基础",
          icon: "hk-knowledge",
          children: [
            { text: "金融市场", icon: "hk-market", link: "finance/articles/markets" },
            { text: "金融工具", icon: "hk-tool", link: "finance/articles/instruments" },
            { text: "风险管理", icon: "hk-risk", link: "finance/articles/risk-management" },
          ],
        },
      ],
    },
    {
      text: "收藏",
      icon: "hk-shoucang1",
      link: "collect",
    },
    {
      text: "说说",
      icon: "news",
      prefix: "news/",
      link: "news/",
    },
    {
      text: "留言板",
      icon: "mark",
      link: "visitorsbook",
    },
    {
      text: "友链",
      icon: "link",
      link: "friend",
    },
    {
      text: "关于",
      icon: "info",
      children: [
        { text: "关于我", icon: "people", link: "intro" },
        { text: "关于本站", icon: "info", link: "about" },
      ],
    },
  ],
  // 各子目录的侧边栏配置
  "/demo/": "structure",
  "/blog/": "structure",
  "/tutorial/": "structure",
  "/technology/AI/": "structure",
  "/technology/AI/spring-ai/": "structure",
  "/technology/AI/spring-ai-alibaba/": "structure",
  "/technology/Java/": "structure",
  "/technology/Golang/": "structure",
  "/technology/Python/": "structure",
  "/technology/Rust/": "structure",
  "/technology/Linux/": "structure",
  "/technology/Web/": "structure",
  "/finance/": "structure",
  "/news/": "structure",
});
