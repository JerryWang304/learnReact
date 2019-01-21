var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/js/app.js',
    output : {
        filename : 'bundle.js'
    },
    module : {
        rules : [{
            test : /\.css$/,
            use : ['style-loader', 'css-loader']
        },
        {
            test : /(\.js|\.jsx)$/,
            loader : 'babel-loader', 
            exclude : /node_modules/
        },
        {
            test : /\.(png|jpg|gif)$/,
            loader : 'url-loader'
        }
    ]
    },
    devServer :{
        port: 8080
    },
    plugins : [new HTMLWebpackPlugin({
        template : './src/template/index.html',
        filename : 'index.html',
        hash : true,
    })]
    
};