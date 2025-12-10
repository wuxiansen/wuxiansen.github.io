import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "导航", icon: "discover", link: "/demo/" },
  {
    text: "笔记分类",
    icon: "edit",
    children: [
      {
        text: "代码笔记",
        prefix: "/posts/",
        children: [
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "React Native", icon: "react", link: "cross-platform/ReactNative/" },
          { text: "Flutter", icon: "hk-flutter", link: "cross-platform/Flutter/" },
        ],
      },
      {
        text: "博客相关",
        prefix: "/blog/",
        children: [
          { text: "博客相关", icon: "blog", link: "" },
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
        prefix: "/technology/AI/",
        children: [
          { text: "Spring AI", icon: "hk-ai", link: "spring-ai/" },
          { text: "Spring AI Alibaba", icon: "hk-ai", link: "spring-ai-alibaba/" },
        ],
      },
      {
        text: "后端开发",
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
    link: "/finance/",
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
