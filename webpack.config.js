var webpack = require('webpack');
import path from "path";
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    // mode: 'production',
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue',
            _: 'lodash'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$'  : 'vue/dist/vue.esm.js',
            '@c'    : path.resolve('src/js/components/'),
            '@scss' : path.resolve('src/scss/'),
            '@js'   : path.resolve('src/js/'),
        }
    },
};