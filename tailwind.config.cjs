module.exports = {
    content: [
        './src/**/*.html',
        './src/js/**/*.js'
    ], theme: {
        fontFamily: {
            'sans': ['Noto Sans', 'ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
        },
        extend: {
            screens: {
                'xl': '1440px'
            }
        }
    },
    plugins: [],
}
