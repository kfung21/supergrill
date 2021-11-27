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
              text: 'About',
              link: '/about',
            },
          ],
        logo: 'https://i.imgur.com/hKC0qtr.png',
    },
    
}
