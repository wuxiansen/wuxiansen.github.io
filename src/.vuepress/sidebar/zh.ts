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
      prefix: "technology/",
      children: [
        {
          text: "AI",
          icon: "hk-ai",
          prefix: "AI/",
          link: "AI/",
        },
        {
          text: "Java",
          icon: "java",
          prefix: "Java/",
          link: "Java/",
        },
        {
          text: "Golang",
          icon: "hk-golang",
          prefix: "Golang/",
          link: "Golang/",
        },
        {
          text: "Python",
          icon: "python",
          prefix: "Python/",
          link: "Python/",
        },
        {
          text: "Rust",
          icon: "hk-rust",
          prefix: "Rust/",
          link: "Rust/",
        },
        {
          text: "Linux",
          icon: "linux",
          prefix: "Linux/",
          link: "Linux/",
        },
        {
          text: "Web",
          icon: "code",
          prefix: "Web/",
          link: "Web/",
        },
      ],
    },
    {
      text: "金融知识",
      icon: "hk-finance",
      prefix: "finance/",
      link: "finance/",
      children: "structure",
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
