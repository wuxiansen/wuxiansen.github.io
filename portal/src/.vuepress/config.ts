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
      title: "综合门户网站",
      description: "专业的技术、金融、教育综合门户平台",
    },
  },

  theme,

  shouldPrefetch: false,
});
