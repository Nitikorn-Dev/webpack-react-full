const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const plugins = [
    new HtmlWebpackPlugin({template:'./src/index.html'}),
    new MiniCssExtractPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin()
].filter(Boolean);

    
module.exports = {
    mode:isDevelopment?'development':'production',
    entry:'./src/index.js',
    output:{
        clean:true,
        assetModuleFilename:'images/[name][ext][query]'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/i,
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        cacheDirectory:true
                    }
                }
            },
            {
                test:/\.(s[ac]|c)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|jpg|svg|ico)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins:plugins,
    resolve:{
        extensions:[".js",".jsx"]
    },
    devServer:{
        hot:true,
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        compress:true
    },
    target:'web',
    devtool:isDevelopment?'source-map':false
}