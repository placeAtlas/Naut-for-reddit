/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
    ]
}

module.exports = config