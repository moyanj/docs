import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "开始",
    icon: "lightbulb",
    link: "/guide/",
  },
  {
    text: "项目",
    icon: "object",
    children: [
      {
        text: "HoYoGameLauncher",
        link: "/hygl"
      },
      {
        text: "MoYanACT",
        link: "/moyanact"
      },
      {
        text: "MoYanLib",
        link: "/moyanlib"
      },
      {
        text: "MYP",
        link: "/myp"
      }
    ]
  }
]);
