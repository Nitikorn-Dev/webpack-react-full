const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const mode = 'development'
module.exports = {
    output:{
        clean:true,
        assetModuleFilename:'images/[name][ext][query]'
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.jsx?$/i,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(s[ac]|c)ss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        // options: { publicPath: "" },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.(png|jpg|svg)$/i,
                type:'asset/resource'
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        hot:true
    },
    devtool:'source-map'
}