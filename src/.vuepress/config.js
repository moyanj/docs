import {
    defineUserConfig
} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    locales: {
        "/": {
            lang: "zh-CN",
            title: "MoYanDocs",
            description: "莫颜JDC的个人文档站",
        }
    },

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});