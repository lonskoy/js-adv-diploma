const path = require('path'); // Подключаем стандартный объект path для указания пути к файлам и папкам внутри проекта
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Плагин для обработки HTML файлов
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development'; // Строки с 4-9 это код для указания режима сборки (надо разобраться в этом коде)
                                                    // 
devMode = mode === 'development';                   //
                                                    //
const target = devMode ? 'web' : 'browserslist';    //
const devtool = devMode ? 'source-map' : undefined; //



module.exports = {
    mode,      // Строки c 14-16 так же относятся к указанию режима сборки
    target,    //
    devtool,   //

    devServer: {      //Настройки сервера
        port: 3000,
        open: true,   //Автоматом открывает страницу при запуске
    }, 

    entry: path.resolve(__dirname, 'src', 'index.js'), //Прописываем точку входа

    output: {                                          // Прописываем папку куда класть готовые сборки
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js', // [contenthash] - позволяет каждый раз генерировать уникальное имя файла
        // assetModuleFilename: "asset/[name][ext]",
    },
    plugins: [                           
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')  // Прописываем директорию и название для сборки html файла
        }),
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css"
        }),
    ],
    module: {
        rules: [                        // Правило для html-loader, он нужен что бы все изменения в html на локальный сервер передавались автоматом
            {
            test: /\.html$/i,
            loader: "html-loader",
            },

            {
            test: /\.css$/i,          // Правило для style-loader, css-loader он нужен что бы все изменения в css на локальный сервер передавались автоматом
            use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                    test: /\.png/,
                    type: 'asset/resource',
            },
            {
                test: /\.woff2?$/i,   //Правило для шрифтов
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name].[ext]",
                }
            },
            {                         //Правило для Babel-loader. Он нужен для обратной совместимости с старыми версиями броузеров
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ],
    }
}