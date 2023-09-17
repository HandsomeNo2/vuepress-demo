import type { SidebarConfig  } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
        //分组侧边栏
        '/guide/deploy/': [
            {
                text: 'GroupOne',
                collapsible: true,
                children: [
                    '/guide/deploy/Vue.md',
                    '/guide/deploy/springBoot.md',
                ],
            },

            {
                text: 'GroupTwo',
                collapsible: true,
                children: [
                    '/guide/deploy/docker.md',
                    '/guide/deploy/Mysql.md',
                    '/guide/deploy/Redis.md',
                ],
            },
        ],

        //不分组侧边栏
        '/guide/software/': [
            {
                text: '软件安装教程',
                children: [
                    '/guide/software/index.md',
                    '/guide/software/软件安装教程.md',
                ],
            },
        ],
}