// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://wsafight.github.io",
  base: "build-your-own-x",
  redirects: {
    "/": "/build-your-own-x/uncategorized/minipack",
  },
  integrations: [
    starlight({
      title: "构建你自己的 x 笔记",
      social: {
        github: "https://github.com/wsafight/build-your-own-x",
      },
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      sidebar: [
        {
          label: "未分类",
          items: [
            { label: "模块打包器", slug: "uncategorized/minipack" },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
  compressHTML: true,
});
