const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',

    module: {
        rules: [
            // AQUÍ SE DEFINEN LOADERS
            /*
            * SINTAXIS
            * {
            *   test: Regular ex - para que busque archivos o extensiones
            *   use: INSTRUCCIONES de que va a hacer con esos archivos
            * }
            */
            {
                test: /\.html/, // busca todos los html
                // Se puede usar use sin ser array si sólo es un loader
                use: [
                    {
                        // AQUÍ VA EL LOADER (descarga de npm)
                        loader: 'html-loader',
                        options: { minimize: true, }
                    }
                ]
            },
            {
                test: /.(css|scss)$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCSSExtractPlugin()
    ]
};