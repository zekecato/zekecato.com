module.exports = function (api) {
    api.createPages(({ createPage }) => {
        createPage({
            path: '/',
            component: './src/templates/WordPressPage.vue',
            context: {
                path: '/about/'
            }
        })
    })
}