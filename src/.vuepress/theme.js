import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://docs.moyanjdc.top",

  author: {
    name: "莫颜"
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",
  fullscreen: true,
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      displayFooter: true,
    }
  },
  plugins: {

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      card: true,
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
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
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
      vuePlayground: true,
      components: {
        // 你想使用的组件
        components: [
          "ArtPlayer",
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "Share",
          "SiteInfo",
          "StackBlitz",
          "VidStack",
          "VideoPlayer",
          "XiGua",
          "YouTube",
        ],
      },
    },

  },
});
