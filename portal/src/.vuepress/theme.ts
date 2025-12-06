import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://wuxiansen.github.io",

  author: {
    name: "WuXiansen",
    url: "https://wuxiansen.github.io",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "wuxiansen/wuxiansen.github.io",

  docsDir: "portal/src",

  hotReload: true,

  blog: {
    medias: {
      GitHub: "https://github.com",
      Email: "mailto:info@example.com",
    },
  },

  locales: {
    "/": {
      // Navbar
      navbar: zhNavbar,

      // Sidebar
      sidebar: zhSidebar,

      footer: "WuXiansen 的知识库 © 2024",

      displayFooter: true,

      blog: {
        description: "记录技术成长、分享投资心得、整理学习资源",
        intro: "/about.html",
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    math: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 可选的增强功能
    chartjs: true,
    demo: true,
    echarts: true,
    flowchart: true,
    mermaid: true,
  },

  plugins: {
    blog: {
      excerptLength: 300,
    },

    comment: {
      provider: "Giscus",
      repo: "wuxiansen/wuxiansen.github.io",
      repoId: "your-repo-id",
      category: "Announcements",
      categoryId: "your-category-id",
    },

    components: {
      components: ["Badge", "VPCard", "VPBanner"],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
    },

    seo: true,

    sitemap: true,
  },
});
