import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "合作组织",
      link: "partnership.md",
    },
    {
      icon: "proposal",
      text: "项目",
        children: [
            {
                text: "HoYoGameLauncher",
                link: "/hygl",
                prefix: "/hygl",
                children: [
                  "plugin.html",
                  "dev.html"
                ]
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
  ],
});