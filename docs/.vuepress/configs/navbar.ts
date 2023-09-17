import type { NavbarConfig } from '@vuepress/theme-default'
export const navbar: NavbarConfig = [
        // 嵌套 Group - 最大深度为 2
    {
        text: '部署相关',
        children: [
            {
                text: '项目部署',
                children: [
                    '/guide/deploy/常用命令.md',
                    '/guide/deploy/留言板部署.md',
                ],
            },

            {
                text: '软件部署',
                children: [
                    '/guide/deploy/docker部署.md',
                    '/guide/deploy/Mysql部署.md',
                    '/guide/deploy/Redis部署.md',
                    '/guide/deploy/Nginx.md',
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