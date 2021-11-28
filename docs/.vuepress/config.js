module.exports = {
	title: 'SUPER GRILL',
	dest: './public',
	themeConfig: {
        navbar: [
            // nested group - max depth is 2
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Menu',
                link: '/menu',
            },
            {
                text: 'Order',
                link: 'https://www.clover.com/online-ordering/super-grill--breakfast-pleasanton',
            },
            {
              text: 'About',
              link: '/about',
            },
          ],
        logo: 'https://i.imgur.com/hKC0qtr.png',
    },
    plugins: [
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
          maxSuggestions: 10,
        },
      ],
    ],
    
}
