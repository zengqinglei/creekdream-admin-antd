# Creekdream.Admin.Antd

基于 react、antd 开发的后台管理控制台项目！

## 快速启动

```bash
# 克隆项目代码，并确定所需环境已安装正确
npm install         # 还原包文件
npm start           # 启动项目完成后，浏览器导航至：http://localhost:3000
```

> 开发工具推荐：[VS Code](https://code.visualstudio.com)  
> 推荐安装插件：[Beautify css/sass/scss/less](https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier)、
> [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)、
> [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)、
> [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)、
> [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## 链接

- [Demo](https://zengqinglei.github.io/creekdream-admin-antd/)
- [React Document](https://reactjs.org/docs/getting-started.html)
- [Antd Document](https://ant.design/docs/react/introduce-cn)

## 环境准备

### 1. 安装 [Node.js](https://nodejs.org/en/download/)。

运行命令： `node -v` 查看版本，要求 10.x 以上。  
运行命令： `npm -v` 查看版本，要求 6.x 以上。

### 2. 设置淘宝的镜像

运行命令：`npm config set registry https://registry.npm.taobao.org` ，_如需还原，运行命令：`npm config set registry https://registry.npmjs.org`_。

### 3. 安装 node sass 所需构建环境 (以下方式二选一即可)

#### 方式一

配置 `SASS_BINARY_SITE` 的地址，运行命令：`npm config set SASS_BINARY_SITE https://npm.taobao.org/mirrors/node-sass`

#### 方式二

(1). 安装 [python 2.x](https://www.python.org/downloads/) 版本  
(2). 安装 windows 构建工具，运行命令：`npm install -g windows-build-tools`

## 启动项目

运行命令：`npm start`， 浏览器导航到：`http://localhost:3000/`，如果您更改任文件，应用程序将自动新加重载。

## 项目结构说明

```code
├── _mock                                       # Mock 数据规则
├── src
│   ├── app
│   │   ├── components                          # 核心模块组件
│   │   ├── core                                # 核心模块
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # 默认HTTP拦截器
│   │   │   ├── models                          # 核心模型
│   │   │   ├── consts                          # 核心常量
│   │   │   └── store                           # 发布订阅消息
│   │   │       └── store-name
│   │   │           ├── action.ts               # 消息数据操作类型
│   │   │           └── reducer.ts              # 消息状态操作处理状态实现
│   │   ├── layout                              # 通用布局
│   │   │   ├── default                         # 默认布局
│   │   │   └── fullscreen                      # 全屏布局
│   │   ├── pages
│   │   │   ├── module-name                     # 业务模块目录
│   │   │   │   ├── page-name                   # 业务模块中页面目录
│   │   │   │   │   ├── components              # 业务模块中页面子组件
│   │   │   │   │   └── **.tsx                  # 业务模块中页面组件
│   │   │   │   └── *-routes.tsx                # 模块路由(导航至各个页面)
│   │   │   └── page-routes.tsx                 # 业务路由集合
│   │   ├── services
│   │   │   └── module-name                     # 业务模块目录
│   │   │       └── service-name                # 业务模块中API服务目录
│   │   │           ├── models                  # 业务模块中模型
│   │   │           ├── enums                   # 业务模块中枚举
│   │   │           └── **.service.ts           # 业务模块中API服务
│   │   ├── shared                              # 共享模块
│   │   │   ├── consts                          # 公用常量
│   │   │   ├── models                          # 公用模型
│   │   │   └── components
│   │   │       └── **.tsx                      # 公用组件
│   │   └── index.tsx                           # 根组件
│   ├── environments                            # 环境变量配置
│   ├── styles                                  # 样式目录
│   └── style.less                              # 样式引导入口
├── public
│   ├── assets                                  # 本地静态资源
└── └── data                                    # 本地数据资源
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
