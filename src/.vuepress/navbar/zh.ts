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
        prefix:"/posts/",
        children: [
          { text: "iOS笔记", icon: "hk-apple", link: "iOS/" },
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "Rust", icon: "hk-rust", link: "Rust/" },
          { text: "React", icon: "react", link: "cross-platform/ReactNative/" },
          {
            text: "Flutter",
            icon: "hk-flutter",
            link: "cross-platform/Flutter/",
          },
        ],
      },
      {
        text: "博客相关",
        prefix:"/blog/",
        children: [
          { text: "博客相关", icon: "blog", link: "" },
        ],
      },
    ],
  },
  {
    text: "技术文章",
    icon: "edit",
    prefix: "/technology/",
    children: [
      {
        text: "AI",
        children: [
          { text: "AI", icon: "hk-ai", link: "AI/" },
          { text: "Spring AI", icon: "code", link: "AI/spring-ai/" },
          { text: "Spring AI Alibaba", icon: "code", link: "AI/spring-ai-alibaba/" },
        ],
      },
      {
        text: "后端",
        children: [
          { text: "Java", icon: "java", link: "Java/" },
          { text: "Spring", icon: "hk-spring", link: "Java/spring/" },
          { text: "Golang", icon: "golang", link: "Golang/" },
          { text: "Python", icon: "python", link: "Python/" },
          { text: "Rust", icon: "hk-rust", link: "Rust/" },
        ],
      },
      {
        text: "其他",
        children: [
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Web", icon: "code", link: "Web/" },
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
    children:[
      { text: "关于我", icon: "people", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ]
  },
]);
