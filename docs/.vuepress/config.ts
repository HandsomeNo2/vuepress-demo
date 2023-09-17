// @ts-ignore
import { defineUserConfig , defaultTheme  } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import {
    navbar,
    sidebar,
} from './configs/index.js'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'vuepress-demo',
    description: '对笔记有疑问或有其他建议欢迎进留言板交流',

    theme: defaultTheme({
        // 默认主题配置
        //导航栏
        navbar,
        //导航栏结束

        //侧边栏
        sidebar,
        //侧边栏结束


    }),
    plugins:[
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '全局搜索',
                },
            },
            hotKeys:["ctrl","f"],
        }),
        //语法高亮
        prismjsPlugin({
            // 配置项
        }),
    ]

    }
)

