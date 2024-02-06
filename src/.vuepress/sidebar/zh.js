import {
    sidebar
} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
        "/": [
            "",
            {
                icon: "discover",
                text: "合作组织",
                link: "partnership.md",
            },

            {
                text: "HoYoGameLauncher",
                link: "/hygl",
                children: [{
                    text: "插件开发",
                    link: "/hygl/plugin.md"
                }, {
                    text: "主程序开发",
                    link: "/hygl/dev.md"
                }]
            },
            {
                text: "MoYanACT",
                link: "/moyanact",
                children: [
                    "/moyanact/apis.md"
                ]
            },
            {
                text: "MoYanLib",
                link: "/moyanlib"
            },
            {
                text: "MYP",
                link: "/myp",
                children: [
                    
                ]
            }
        ]
    }],
});