import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "软件技术",
    icon: "code",
    prefix: "/technology/",
    children: [
      {
        text: "编程语言",
        icon: "laptop-code",
        children: [
          { text: "Python", link: "articles/python" },
          { text: "Java", link: "articles/java" },
          { text: "JavaScript", link: "articles/javascript" },
          { text: "Go", link: "articles/go" },
        ],
      },
      {
        text: "开发框架",
        icon: "layer-group",
        children: [
          { text: "Vue.js", link: "articles/vue" },
          { text: "React", link: "articles/react" },
          { text: "Spring Boot", link: "articles/springboot" },
          { text: "Django", link: "articles/django" },
        ],
      },
      {
        text: "技术指南",
        icon: "book",
        link: "guides/",
      },
    ],
  },
  {
    text: "金融",
    icon: "dollar-sign",
    prefix: "/finance/",
    children: [
      {
        text: "投资理财",
        icon: "chart-line",
        children: [
          { text: "股票投资", link: "articles/stocks" },
          { text: "基金投资", link: "articles/funds" },
          { text: "债券投资", link: "articles/bonds" },
          { text: "外汇交易", link: "articles/forex" },
        ],
      },
      {
        text: "金融知识",
        icon: "graduation-cap",
        children: [
          { text: "金融市场", link: "articles/markets" },
          { text: "金融工具", link: "articles/instruments" },
          { text: "风险管理", link: "articles/risk-management" },
        ],
      },
      {
        text: "金融指南",
        icon: "book",
        link: "guides/",
      },
    ],
  },
  {
    text: "教育",
    icon: "school",
    prefix: "/education/",
    children: [
      {
        text: "在线课程",
        icon: "chalkboard-user",
        children: [
          { text: "编程课程", link: "articles/programming-courses" },
          { text: "金融课程", link: "articles/finance-courses" },
          { text: "语言学习", link: "articles/language-learning" },
        ],
      },
      {
        text: "学习资源",
        icon: "book-open",
        children: [
          { text: "教程文档", link: "articles/tutorials" },
          { text: "视频教程", link: "articles/videos" },
          { text: "电子书籍", link: "articles/ebooks" },
        ],
      },
      {
        text: "教育指南",
        icon: "book",
        link: "guides/",
      },
    ],
  },
  {
    text: "博客",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "关于",
    icon: "info-circle",
    link: "/about",
  },
]);
