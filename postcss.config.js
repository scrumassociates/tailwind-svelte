module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //         './src/*.svelte',
        //         './src/components/*.svelte',
        //         './public/index.html',
        //     ],
        //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        // }),
    ]
}