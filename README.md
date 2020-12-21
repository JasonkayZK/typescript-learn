## TypeScript打包

### webpack整合

通常情况下，实际开发中我们都需要使用构建工具对代码进行打包；

TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS；

步骤如下：

#### 初始化项目

进入项目根目录，执行命令 ` npm init -y`，创建package.json文件

#### 下载构建工具

命令如下：

`npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`

共安装了7个包:

  - webpack：构建工具webpack
  - webpack-cli：webpack的命令行工具
  - webpack-dev-server：webpack的开发服务器
  - typescript：ts编译器
  - ts-loader：ts加载器，用于在webpack中编译ts文件
  - html-webpack-plugin：webpack中html插件，用来自动创建html文件
  - clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录

#### 配置webpack

根目录下创建webpack的配置文件`webpack.config.js`：

 ```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"     
                },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'TS测试'
        }),
    ]
}
 ```

#### 配置TS编译选项

根目录下创建tsconfig.json，配置可以根据自己需要

 ```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true
    }
}
 ```

#### 修改package.json配置

修改package.json添加如下配置

 ```json
{
    ...
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "start": "webpack serve --open chrome.exe"
    },
    ...
}
 ```

#### 项目使用

在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译；

或者执行```npm start```来启动开发服务器；

<br/>

### Babel

除了webpack，开发中还经常需要结合babel来对代码进行转换；

以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；

>   虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；
>
>   对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；

安装依赖包：

   `npm i -D @babel/core @babel/preset-env babel-loader core-js`

共安装了4个包，分别是：

  - @babel/core：babel的核心工具
  
  - @babel/preset-env：babel的预定义环境
  
  - @babel-loader：babel在webpack中的加载器
  
  - core-js：core-js用来使老版本的浏览器支持新版ES语法

修改webpack.config.js配置文件

```javascript
...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...
```

如此一来，使用ts编译后的文件将会再次被babel处理；

使得代码可以在大部分浏览器中直接使用；

同时可以在配置选项的targets中指定要兼容的浏览器版本；
