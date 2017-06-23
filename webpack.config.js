module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "/users/samperson539/desktop/hs-official/app/temp/scripts",
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/  
            }
        ]
    }
}