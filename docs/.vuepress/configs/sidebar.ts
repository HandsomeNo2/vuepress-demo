import type { SidebarConfig  } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
        //部署侧边栏
        '/guide/deploy/': [
            {
                text: '项目部署',
                collapsible: true,
                children: [
                    '/guide/deploy/常用命令.md',
                    '/guide/deploy/留言板部署.md',
                ],
            },

            {
                text: '软件部署',
                collapsible: true,
                children: [
                    '/guide/deploy/docker部署.md',
                    '/guide/deploy/Mysql部署.md',
                    '/guide/deploy/Redis部署.md',
                ],
            },
        ],

        //软件安装破解侧边栏
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