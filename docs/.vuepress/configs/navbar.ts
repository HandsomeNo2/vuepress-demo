import type { NavbarConfig } from '@vuepress/theme-default'
export const navbar: NavbarConfig = [
        // 嵌套 Group - 最大深度为 2
    {
        text: 'Group',
        children: [
            {
                text: 'GroupOne',
                children: [
                    '/guide/deploy/Vue.md',
                    '/guide/deploy/springBoot.md',
                ],
            },

            {
                text: 'GroupTwo',
                children: [
                    '/guide/deploy/docker.md',
                    '/guide/deploy/Mysql.md',
                    '/guide/deploy/Redis.md',
                ],
            },

        ],
    },

    {
        text: '软件安装',
        link: '/guide/software/index.md',
    },

    {
        text: '留言板',
        link: 'http://issue.choujuju.cn/',
    },

]