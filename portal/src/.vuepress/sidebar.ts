import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/technology/": [
    {
      text: "软件技术",
      icon: "code",
      children: [
        {
          text: "编程语言",
          prefix: "articles/",
          children: ["python", "java", "javascript", "go"],
        },
        {
          text: "开发框架",
          prefix: "articles/",
          children: ["vue", "react", "springboot", "django"],
        },
        {
          text: "技术指南",
          prefix: "guides/",
          children: "structure",
        },
      ],
    },
  ],
  "/finance/": [
    {
      text: "金融",
      icon: "dollar-sign",
      children: [
        {
          text: "投资理财",
          prefix: "articles/",
          children: ["stocks", "funds", "bonds", "forex"],
        },
        {
          text: "金融知识",
          prefix: "articles/",
          children: ["markets", "instruments", "risk-management"],
        },
        {
          text: "金融指南",
          prefix: "guides/",
          children: "structure",
        },
      ],
    },
  ],
  "/education/": [
    {
      text: "教育",
      icon: "school",
      children: [
        {
          text: "在线课程",
          prefix: "articles/",
          children: ["programming-courses", "finance-courses", "language-learning"],
        },
        {
          text: "学习资源",
          prefix: "articles/",
          children: ["tutorials", "videos", "ebooks"],
        },
        {
          text: "教育指南",
          prefix: "guides/",
          children: "structure",
        },
      ],
    },
  ],
  "/posts/": [
    {
      text: "博客文章",
      icon: "pen-to-square",
      prefix: "articles/",
      children: "structure",
    },
  ],
});
