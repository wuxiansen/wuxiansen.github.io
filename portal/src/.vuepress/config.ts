import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "WuXiansen 的知识库",
      description: "记录技术成长、分享投资心得、整理学习资源的个人知识库",
    },
  },

  theme,

  shouldPrefetch: false,
});
